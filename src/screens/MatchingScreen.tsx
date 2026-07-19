import React, { useState, useRef, useCallback, useEffect } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, ScrollView, Animated, Dimensions, Modal,
  TextInput, KeyboardAvoidingView, Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getRandomWordPairs, WordPair, wordsByLevel } from '../data/generateCard';
import {
  recordMatchingGame, addCoins, shouldPromptReview, markReviewShown,
  loadStats, loadGameStats, loadAllProgress, loadUnlockedAchievements, unlockAchievements,
} from '../utils/storage';
import * as StoreReview from 'expo-store-review';
import type { LevelId } from '../utils/storage';
import { AchievementDef, checkNewAchievements } from '../data/achievements';
import { alpha, colors, gameAccent } from '../theme';
import { ScreenBackground } from '../components/ui';
import { submitReport as sendReport } from '../utils/reporting';
import * as Haptics from 'expo-haptics';
import { triggerHaptic, triggerTap } from '../utils/haptics';
import { playCorrectSound, playWrongSound, preloadSounds, playTickSound } from '../utils/sound';

const { width: SCREEN_W } = Dimensions.get('window');
const PAIR_COUNT = 10;

// Bright pair accents tuned for the dark canvas
const PAIR_COLORS = [
  '#7C8CF8', '#22D3EE', '#A78BFA', '#34D399', '#FBBF24',
  '#F472B6', '#FB923C', '#2DD4BF', '#A3E635', '#C084FC',
];
const pairBg = (hex: string) => hex + '26';

const CONFETTI_COLORS = PAIR_COLORS;
const CONFETTI_COUNT = 40;

// Dark premium mapping of the legacy palette keys used throughout this screen.
const C = {
  bg: colors.bg, surface: colors.glass,
  border: colors.glassBorder, borderBright: colors.glassBorderStrong,
  primary: colors.primary, primaryBg: colors.primarySoft,
  text: colors.text, textDim: colors.textDim, textFaint: colors.textFaint,
  success: colors.success, danger: colors.danger, dangerBg: colors.dangerSoft,
};

interface MatchItem extends WordPair {
  id: string;
  colorIdx: number;
}

function buildRound(lvl: LevelId = 'A1'): { left: MatchItem[]; right: MatchItem[] } {
  const pairs = getRandomWordPairs(PAIR_COUNT, lvl).map((p, i) => ({
    ...p, id: `${p.german}-${i}`, colorIdx: i,
  }));
  const right = [...pairs].sort(() => Math.random() - 0.5);
  return { left: pairs, right };
}

type ItemStatus = 'idle' | 'selected' | 'matched' | 'wrong';
type TimerMode = 30 | 60 | 0;
type Phase = 'choose' | 'playing' | 'done';

function ConfettiPiece({ color, delay }: { color: string; delay: number }) {
  const y = useRef(new Animated.Value(-30)).current;
  const x = useRef(new Animated.Value(Math.random() * SCREEN_W)).current;
  const rotate = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.delay(delay),
      Animated.parallel([
        Animated.timing(opacity, { toValue: 1, duration: 100, useNativeDriver: true }),
        Animated.timing(y, { toValue: Dimensions.get('window').height + 30, duration: 1800 + Math.random() * 800, useNativeDriver: true }),
        Animated.timing(rotate, { toValue: Math.random() > 0.5 ? 4 : -4, duration: 2000, useNativeDriver: true }),
      ]),
    ]).start();
  }, []);

  const spin = rotate.interpolate({ inputRange: [-4, 4], outputRange: ['-720deg', '720deg'] });
  return (
    <Animated.View pointerEvents="none" style={{
      position: 'absolute', top: 0, left: 0,
      width: 10, height: 10, borderRadius: 2,
      backgroundColor: color, opacity,
      transform: [{ translateX: x }, { translateY: y }, { rotate: spin }],
    }} />
  );
}

export default function MatchingScreen({ navigation }: { navigation: any }) {
  const [phase, setPhase] = useState<Phase>('choose');
  const [level, setLevel] = useState<LevelId>('A1');
  const [roundKey, setRoundKey] = useState(0);
  const [timerMode, setTimerMode] = useState<TimerMode>(60);
  const [timeLeft, setTimeLeft] = useState(60);
  const [round, setRound] = useState(() => buildRound('A1'));
  const [selectedLeftId, setSelectedLeftId] = useState<string | null>(null);
  const [matchedIds, setMatchedIds] = useState<Set<string>>(new Set());
  const [wrongPair, setWrongPair] = useState<{ left: string; right: string } | null>(null);
  const wrongTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeLeftRef = useRef(60);
  const timerBlink = useRef(new Animated.Value(1)).current;
  const shakeAnim = useRef(new Animated.Value(0)).current;
  const [showConfetti, setShowConfetti] = useState(false);
  const [showPairs, setShowPairs] = useState(false);

  // Report state
  const [reportVisible, setReportVisible] = useState(false);
  const [reportItem, setReportItem] = useState<MatchItem | null>(null);
  const [reportNote, setReportNote] = useState('');
  const [reportSending, setReportSending] = useState(false);
  const [reportSent, setReportSent] = useState(false);
  const [reportedIds, setReportedIds] = useState<Set<string>>(new Set());
  const [newAchievements, setNewAchievements] = useState<AchievementDef[]>([]);
  const [achModalVisible, setAchModalVisible] = useState(false);

  const matchedCount = matchedIds.size;
  const isComplete = matchedCount === PAIR_COUNT;

  useEffect(() => { preloadSounds(); }, []);

  useEffect(() => {
    if (phase !== 'playing' || timerMode === 0) return;
    timeLeftRef.current = timerMode;
    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        const next = prev - 1;
        timeLeftRef.current = next;
        if (next <= 0) {
          clearInterval(timerRef.current!);
          setPhase('done');
          recordMatchingGame(matchedCount, timerMode);
          addCoins(matchedCount * 3);
          return 0;
        }
        return next;
      });
    }, 1000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [phase, timerMode, roundKey]);

  // Final-5-seconds warning: tick sound + haptic each second + red blink (item 21)
  const inWarning = timerMode > 0 && phase === 'playing' && !isComplete && timeLeft <= 5 && timeLeft >= 1;

  useEffect(() => {
    if (inWarning) { playTickSound(); triggerTap(); }
  }, [timeLeft]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!inWarning) { timerBlink.setValue(1); return; }
    const loop = Animated.loop(Animated.sequence([
      Animated.timing(timerBlink, { toValue: 0.25, duration: 300, useNativeDriver: true }),
      Animated.timing(timerBlink, { toValue: 1, duration: 300, useNativeDriver: true }),
    ]));
    loop.start();
    return () => { loop.stop(); timerBlink.setValue(1); };
  }, [inWarning]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (isComplete) {
      if (timerRef.current) clearInterval(timerRef.current);
      setShowConfetti(true);
      const timeUsed = timerMode > 0 ? timerMode - timeLeftRef.current : 0;
      (async () => {
        await recordMatchingGame(PAIR_COUNT, timeUsed);
        await addCoins(PAIR_COUNT * 3);
        const [gs, allProgress, unlockedList, stats] = await Promise.all([
          loadGameStats(),
          loadAllProgress(),
          loadUnlockedAchievements(),
          loadStats(),
        ]);
        const masteredCount = Object.values(allProgress).reduce((sum, p) => sum + p.masteredIds.length, 0);
        const newly = checkNewAchievements(stats, gs, masteredCount, unlockedList.map(u => u.id));
        if (newly.length > 0) {
          await unlockAchievements(newly.map(a => a.id));
          setNewAchievements(newly);
          setAchModalVisible(true);
        }
        shouldPromptReview().then(yes => {
          if (!yes) return;
          StoreReview.isAvailableAsync().then(ok => {
            if (ok) { StoreReview.requestReview(); markReviewShown(); }
          });
        });
      })();
    }
  }, [isComplete]);

  function shake() {
    Animated.sequence([
      Animated.timing(shakeAnim, { toValue: 8, duration: 55, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: -8, duration: 55, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: 5, duration: 45, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: 0, duration: 45, useNativeDriver: true }),
    ]).start();
  }

  function handleLeftPress(id: string) {
    if (matchedIds.has(id) || wrongPair) return;
    setSelectedLeftId(prev => (prev === id ? null : id));
  }

  function handleRightPress(id: string) {
    if (matchedIds.has(id) || wrongPair) return;
    if (!selectedLeftId) return;
    if (id === selectedLeftId) {
      playCorrectSound();
      triggerHaptic(Haptics.NotificationFeedbackType.Success);
      setMatchedIds(prev => new Set([...prev, id]));
      setSelectedLeftId(null);
    } else {
      playWrongSound();
      triggerHaptic(Haptics.NotificationFeedbackType.Error);
      setWrongPair({ left: selectedLeftId, right: id });
      shake();
      if (wrongTimer.current) clearTimeout(wrongTimer.current);
      wrongTimer.current = setTimeout(() => {
        setWrongPair(null);
        setSelectedLeftId(null);
      }, 750);
    }
  }

  const handleStart = useCallback(() => {
    setRound(buildRound(level));
    setSelectedLeftId(null);
    setMatchedIds(new Set());
    setWrongPair(null);
    setShowConfetti(false);
    setTimeLeft(timerMode === 0 ? 0 : timerMode);
    setRoundKey(k => k + 1);
    setReportedIds(new Set());
    setPhase('playing');
  }, [timerMode, level]);

  const handleNewRound = useCallback(() => {
    if (wrongTimer.current) clearTimeout(wrongTimer.current);
    if (timerRef.current) clearInterval(timerRef.current);
    setRound(buildRound(level));
    setSelectedLeftId(null);
    setMatchedIds(new Set());
    setWrongPair(null);
    setShowConfetti(false);
    setTimeLeft(timerMode === 0 ? 0 : timerMode);
    setRoundKey(k => k + 1);
    setReportedIds(new Set());
    setPhase('playing');
  }, [timerMode, level]);

  function openReport(item: MatchItem) {
    setReportItem(item);
    setReportNote('');
    setReportSent(false);
    setReportVisible(true);
  }

  function submitReport() {
    if (!reportItem || reportNote.trim().length === 0) return;
    const payload = {
      game: 'eslestirme',
      level,
      german: reportItem.german,
      turkish: reportItem.turkish,
      wordId: reportItem.id,
      note: reportNote.trim(),
    };
    // Optimistic: confirm and auto-close without blocking on the network (item 3).
    setReportedIds(prev => new Set(prev).add(reportItem.id));
    setReportSent(true);
    sendReport('reports', payload).catch(() => {});
    setTimeout(() => setReportVisible(false), 1400);
  }

  function colorOfId(id: string): string {
    const item = round.left.find(i => i.id === id);
    return item ? PAIR_COLORS[item.colorIdx % PAIR_COLORS.length] : C.success;
  }

  function statusOf(id: string, side: 'left' | 'right'): ItemStatus {
    if (matchedIds.has(id)) return 'matched';
    if (wrongPair) {
      if (side === 'left' && wrongPair.left === id) return 'wrong';
      if (side === 'right' && wrongPair.right === id) return 'wrong';
    }
    if (side === 'left' && selectedLeftId === id) return 'selected';
    return 'idle';
  }

  function chipStyle(status: ItemStatus, id: string) {
    if (status === 'matched') {
      const c = colorOfId(id);
      return [styles.item, { borderColor: c, backgroundColor: pairBg(c) }];
    }
    if (status === 'selected') return [styles.item, styles.itemSelected];
    if (status === 'wrong') return [styles.item, styles.itemWrong];
    return [styles.item];
  }

  function chipTextStyle(status: ItemStatus, id: string) {
    if (status === 'matched') {
      const c = colorOfId(id);
      return [styles.itemText, { color: c, fontWeight: '700' as const }];
    }
    if (status === 'selected') return [styles.itemText, styles.itemTextSelected];
    if (status === 'wrong') return [styles.itemText, styles.itemTextWrong];
    return [styles.itemText];
  }

  const timerColor = timerMode > 0 && timeLeft <= 10 ? C.danger : C.primary;
  const timerPct = timerMode > 0 ? timeLeft / timerMode : 1;
  const isDone = phase === 'done' && !isComplete;

  // ── CHOOSE ─────────────────────────────────────────────────────────────────
  if (phase === 'choose') {
    return (
      <SafeAreaView style={styles.safe}>
        <ScreenBackground tint={gameAccent.matching} />
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}
            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
            <Text style={styles.backBtnText}>←</Text>
          </TouchableOpacity>
          <View style={styles.headerCenter}>
            <Text style={styles.headerTitle}>Eşleştirme</Text>
            <Text style={styles.headerSub}>10 çift Almanca ↔ Türkçe</Text>
          </View>
          <View style={{ width: 44 }} />
        </View>
        <ScrollView contentContainerStyle={styles.chooseBody} showsVerticalScrollIndicator={false}>
          <Text style={styles.chooseEmoji}>🔗</Text>
          <Text style={styles.chooseTitle}>Eşleştirme</Text>
          <Text style={styles.chooseSub}>Almanca kelimeye Türkçe eşini bul!{'\n'}Bir süre seç ve başla.</Text>
          <Text style={styles.sectionLabel}>SEVİYE</Text>
          <View style={styles.levelRow}>
            {(['A1', 'A2', 'B1'] as LevelId[]).map(lvl => {
              const active = level === lvl;
              const hasData = wordsByLevel[lvl].length > 0;
              return (
                <TouchableOpacity key={lvl}
                  style={[styles.levelBtn, active && styles.levelBtnActive, !hasData && { opacity: 0.45 }]}
                  onPress={() => { if (hasData) setLevel(lvl); }}
                  activeOpacity={hasData ? 0.7 : 1}>
                  <Text style={[styles.levelBtnText, active && styles.levelBtnTextActive]}>{lvl}</Text>
                  {!hasData && <Text style={styles.levelBtnSoon}>yakında</Text>}
                </TouchableOpacity>
              );
            })}
          </View>
          <Text style={styles.sectionLabel}>SÜRE</Text>
          <View style={styles.timerRow}>
            {([30, 60, 0] as TimerMode[]).map(mode => {
              const label = mode === 0 ? '∞' : `${mode}sn`;
              const active = timerMode === mode;
              return (
                <TouchableOpacity key={mode}
                  style={[styles.timerBtn, active && styles.timerBtnActive]}
                  onPress={() => setTimerMode(mode)} activeOpacity={0.7}>
                  <Text style={[styles.timerBtnText, active && styles.timerBtnTextActive]}>{label}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
          <TouchableOpacity style={styles.startBtn} onPress={handleStart} activeOpacity={0.85}>
            <Text style={styles.startBtnText}>Başla →</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }

  // ── GAME ───────────────────────────────────────────────────────────────────
  return (
    <SafeAreaView style={styles.safe}>
      <ScreenBackground tint={gameAccent.matching} />

      {showConfetti && (
        <View pointerEvents="none" style={StyleSheet.absoluteFill}>
          {Array.from({ length: CONFETTI_COUNT }, (_, i) => (
            <ConfettiPiece key={i} color={CONFETTI_COLORS[i % CONFETTI_COLORS.length]} delay={i * 40} />
          ))}
        </View>
      )}

      <View style={styles.header}>
        <TouchableOpacity onPress={() => setPhase('choose')} style={styles.backBtn}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
          <Text style={styles.backBtnText}>←</Text>
        </TouchableOpacity>
        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>Eşleştirme</Text>
          <Text style={styles.headerSub}>
            {isComplete ? 'Tamamlandı! 🎉' : isDone ? `Süre doldu — ${matchedCount}/${PAIR_COUNT}` : `${matchedCount} / ${PAIR_COUNT} eşlendi`}
          </Text>
        </View>
        {timerMode > 0 ? (
          <Animated.View style={[styles.scorePill, { borderColor: timerColor, opacity: timerBlink }]}>
            <Text style={[styles.scoreText, { color: timerColor }]}>{timeLeft}s</Text>
          </Animated.View>
        ) : (
          <View style={styles.scorePill}>
            <Text style={styles.scoreText}>{matchedCount}/{PAIR_COUNT}</Text>
          </View>
        )}
      </View>

      <View style={styles.progressTrack}>
        {timerMode > 0 && phase === 'playing' && !isComplete ? (
          <View style={[styles.progressFill, { width: `${timerPct * 100}%` as any, backgroundColor: timerColor }]} />
        ) : (
          <View style={[styles.progressFill, { width: `${(matchedCount / PAIR_COUNT) * 100}%` as any, backgroundColor: C.success }]} />
        )}
      </View>

      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {matchedIds.size > 0 && (
          <View style={styles.matchedArea}>
            {round.left.filter(item => matchedIds.has(item.id)).map(item => {
              const c = PAIR_COLORS[item.colorIdx % PAIR_COLORS.length];
              return (
                <View key={item.id} style={[styles.matchedChip, { borderColor: c, backgroundColor: pairBg(c) }]}>
                  <View style={[styles.matchedDot, { backgroundColor: c }]} />
                  <Text style={[styles.matchedChipText, { color: c }]} numberOfLines={1}>{item.german}</Text>
                  <Text style={styles.matchedArrow}>→</Text>
                  <Text style={[styles.matchedChipText, { color: c }]} numberOfLines={1}>{item.turkish}</Text>
                </View>
              );
            })}
          </View>
        )}

        <View style={styles.colLabels}>
          <Text style={styles.colLabel}>ALMANCA</Text>
          <Text style={styles.colLabel}>TÜRKÇE</Text>
        </View>

        {!selectedLeftId && !isComplete && !isDone && phase === 'playing' && (
          <Text style={styles.hint}>Önce sol taraftan bir kelime seç</Text>
        )}
        {selectedLeftId && <Text style={styles.hint}>Şimdi sağdan eşini bul →</Text>}

        <Animated.View style={[styles.grid, { transform: [{ translateX: shakeAnim }], alignSelf: 'stretch' }]}>
          <View style={styles.col}>
            {round.left.filter(item => !matchedIds.has(item.id)).map(item => {
              const status = statusOf(item.id, 'left');
              return (
                <TouchableOpacity key={item.id}
                  style={chipStyle(status, item.id)}
                  onPress={() => handleLeftPress(item.id)}
                  activeOpacity={0.75} disabled={isDone}>
                  <Text style={chipTextStyle(status, item.id)} numberOfLines={1}>{item.german}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
          <View style={styles.colDivider} />
          <View style={styles.col}>
            {round.right.filter(item => !matchedIds.has(item.id)).map(item => {
              const status = statusOf(item.id, 'right');
              return (
                <TouchableOpacity key={item.id}
                  style={chipStyle(status, item.id)}
                  onPress={() => handleRightPress(item.id)}
                  activeOpacity={0.75} disabled={isDone}>
                  <Text style={chipTextStyle(status, item.id)} numberOfLines={1}>{item.turkish}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </Animated.View>
      </ScrollView>

      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.pairsBtn} onPress={() => setShowPairs(true)} activeOpacity={0.7}>
          <Text style={styles.pairsBtnText}>Eşleştirmeleri Gör</Text>
        </TouchableOpacity>
        {(isComplete || isDone) ? (
          <TouchableOpacity
            style={[styles.newRoundBtn, isDone && styles.newRoundBtnRetry]}
            onPress={handleNewRound} activeOpacity={0.85}>
            <Text style={styles.newRoundBtnText}>Yeni Tur →</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.skipBtn} onPress={handleNewRound} activeOpacity={0.7}>
            <Text style={styles.skipBtnText}>Yeni Kelimeler</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Pairs modal — with report buttons */}
      <Modal visible={showPairs} transparent animationType="slide" onRequestClose={() => setShowPairs(false)}>
        <TouchableOpacity style={styles.modalBackdrop} activeOpacity={1} onPress={() => setShowPairs(false)}>
          <View style={styles.modalSheet} onStartShouldSetResponder={() => true}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Tüm Eşleştirmeler</Text>
              <TouchableOpacity onPress={() => setShowPairs(false)} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
                <Text style={styles.modalClose}>✕</Text>
              </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
              {round.left.map(item => {
                const c = PAIR_COLORS[item.colorIdx % PAIR_COLORS.length];
                const matched = matchedIds.has(item.id);
                const isReported = reportedIds.has(item.id);
                return (
                  <View key={item.id} style={[styles.pairRow, { borderLeftColor: c, borderLeftWidth: 3 }]}>
                    <Text style={[styles.pairDE, { color: c }]} numberOfLines={1}>{item.german}</Text>
                    <Text style={styles.pairArrow}>→</Text>
                    <Text style={[styles.pairTR, matched && styles.pairTRMatched]} numberOfLines={1}>{item.turkish}</Text>
                    {matched && <Text style={[styles.pairCheck, { color: c }]}>✓</Text>}
                    <TouchableOpacity
                      style={styles.reportIconBtn}
                      onPress={() => { setShowPairs(false); openReport(item); }}
                      disabled={isReported}
                      hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                    >
                      <Text style={[styles.reportIconText, isReported && styles.reportIconTextReported]}>⚑</Text>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </ScrollView>
          </View>
        </TouchableOpacity>
      </Modal>

      {/* Achievement unlock modal */}
      <Modal visible={achModalVisible} transparent animationType="fade" onRequestClose={() => setAchModalVisible(false)}>
        <View style={styles.achOverlay}>
          <View style={styles.achSheet}>
            <Text style={styles.achSheetTitle}>🏆 Rozet Kazandın!</Text>
            <Text style={styles.achSheetSub}>Harika ilerleme!</Text>
            {newAchievements.map(a => (
              <View key={a.id} style={styles.achRow}>
                <Text style={styles.achRowEmoji}>{a.emoji}</Text>
                <View style={{ flex: 1 }}>
                  <Text style={styles.achRowTitle}>{a.title}</Text>
                  <Text style={styles.achRowDesc}>{a.desc}</Text>
                </View>
              </View>
            ))}
            <TouchableOpacity style={styles.achCloseBtn} onPress={() => setAchModalVisible(false)} activeOpacity={0.85}>
              <Text style={styles.achCloseBtnText}>Harika! →</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Report modal */}
      <Modal visible={reportVisible} transparent animationType="slide" onRequestClose={() => !reportSending && setReportVisible(false)}>
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          <TouchableOpacity style={styles.reportOverlay} activeOpacity={1} onPress={() => !reportSending && setReportVisible(false)} />
          <View style={styles.reportSheet}>
            <View style={styles.reportHandle} />
            {reportSent ? (
              <View style={styles.reportSuccessBox}>
                <Text style={styles.reportSuccessIcon}>✓</Text>
                <Text style={styles.reportSuccessText}>Raporun iletildi, teşekkürler!</Text>
              </View>
            ) : (
              <>
                <Text style={styles.reportTitle}>Hata Bildir</Text>
                {reportItem && (
                  <View style={styles.reportWordBox}>
                    <Text style={styles.reportWordDe}>{reportItem.german}</Text>
                    <Text style={styles.reportWordTr}>{reportItem.turkish}</Text>
                  </View>
                )}
                <TextInput
                  style={styles.reportInput}
                  placeholder="Hatayı açıkla (zorunlu)…"
                  placeholderTextColor={C.textFaint}
                  value={reportNote}
                  onChangeText={setReportNote}
                  multiline
                  maxLength={300}
                  autoFocus
                />
                <View style={styles.reportActions}>
                  <TouchableOpacity style={styles.reportCancelBtn} onPress={() => setReportVisible(false)}>
                    <Text style={styles.reportCancelText}>Vazgeç</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.reportSubmitBtn, (reportSending || reportNote.trim().length === 0) && styles.reportSubmitBtnDisabled]}
                    onPress={submitReport}
                    disabled={reportSending || reportNote.trim().length === 0}
                  >
                    <Text style={styles.reportSubmitText}>{reportSending ? 'Gönderiliyor…' : 'Gönder'}</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  header: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingHorizontal: 16, paddingVertical: 12,
    borderBottomWidth: 1, borderBottomColor: colors.glassBorder,
  },
  backBtn: {
    backgroundColor: colors.glassStrong, borderRadius: 12,
    width: 44, height: 44, alignItems: 'center', justifyContent: 'center',
    borderWidth: 1, borderColor: C.borderBright,
  },
  backBtnText: { fontSize: 20, color: colors.text },
  headerCenter: { flex: 1, alignItems: 'center' },
  headerTitle: { fontSize: 16, fontWeight: '800', color: C.text, letterSpacing: 0.2 },
  headerSub: { fontSize: 12, color: C.textDim, marginTop: 2, letterSpacing: 0.2 },
  scorePill: {
    borderWidth: 1.5, borderColor: C.borderBright, borderRadius: 20,
    paddingHorizontal: 14, paddingVertical: 6, minWidth: 54, alignItems: 'center',
    backgroundColor: colors.glassStrong,
  },
  scoreText: { fontSize: 14, fontWeight: '800', color: C.primary, letterSpacing: 0.3 },
  progressTrack: { height: 4, backgroundColor: C.border },
  progressFill: { height: '100%', borderRadius: 2 },
  scroll: { flex: 1 },
  scrollContent: { padding: 16, gap: 12, paddingBottom: 24 },
  colLabels: { flexDirection: 'row', justifyContent: 'space-around', paddingHorizontal: 4, marginBottom: 4 },
  colLabel: { fontSize: 10, fontWeight: '700', color: C.textFaint, letterSpacing: 2 },
  hint: { textAlign: 'center', fontSize: 12, color: C.textDim, fontWeight: '500', letterSpacing: 0.2, marginBottom: 4 },
  grid: { flexDirection: 'row', gap: 8 },
  col: { flex: 1, gap: 8 },
  colDivider: { width: 1, backgroundColor: C.border, marginVertical: 4 },
  item: {
    backgroundColor: colors.glassStrong, borderWidth: 1, borderColor: colors.glassBorderStrong,
    borderRadius: 12, paddingHorizontal: 10, paddingVertical: 13,
    alignItems: 'center', justifyContent: 'center', minHeight: 48,
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.18, shadowRadius: 5, elevation: 2,
  },
  itemSelected: { backgroundColor: C.primaryBg, borderColor: C.primary, shadowColor: C.primary, shadowOpacity: 0.15, elevation: 3 },
  itemWrong: { backgroundColor: C.dangerBg, borderColor: C.danger },
  itemText: { fontSize: 14, fontWeight: '600', color: C.text, letterSpacing: 0.1, textAlign: 'center' },
  itemTextSelected: { color: C.primary, fontWeight: '700' },
  itemTextWrong: { color: C.danger, fontWeight: '700' },
  bottomBar: {
    backgroundColor: 'rgba(13,20,48,0.85)', paddingHorizontal: 16, paddingVertical: 12,
    borderTopWidth: 1, borderTopColor: C.border,
  },
  newRoundBtn: {
    backgroundColor: C.success, borderRadius: 14, paddingVertical: 15, alignItems: 'center',
    shadowColor: C.success, shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.35, shadowRadius: 10, elevation: 5,
  },
  newRoundBtnRetry: { backgroundColor: C.danger, shadowColor: C.danger },
  newRoundBtnText: { color: '#081018', fontSize: 16, fontWeight: '800', letterSpacing: 0.3 },
  skipBtn: {
    borderWidth: 1.5, borderColor: C.borderBright, borderRadius: 14,
    paddingVertical: 12, alignItems: 'center', backgroundColor: C.surface,
  },
  skipBtnText: { fontSize: 14, fontWeight: '700', color: C.textDim, letterSpacing: 0.2 },
  chooseBody: { flexGrow: 1, alignItems: 'center', paddingHorizontal: 24, paddingTop: 20, paddingBottom: 24, gap: 14 },
  chooseEmoji: { fontSize: 52 },
  chooseTitle: { fontSize: 24, fontWeight: '800', color: C.text, letterSpacing: 0.2 },
  chooseSub: { fontSize: 13, color: C.textDim, textAlign: 'center', lineHeight: 19 },
  sectionLabel: { fontSize: 11, fontWeight: '700', color: C.textFaint, letterSpacing: 1.2, alignSelf: 'flex-start', marginBottom: -6 },
  levelRow: { flexDirection: 'row', gap: 10, width: '100%' },
  levelBtn: { flex: 1, borderWidth: 1.5, borderColor: C.border, borderRadius: 14, paddingVertical: 12, alignItems: 'center', backgroundColor: C.surface },
  levelBtnActive: { borderColor: C.primary, backgroundColor: C.primaryBg },
  levelBtnText: { fontSize: 15, fontWeight: '700', color: C.textDim },
  levelBtnTextActive: { color: C.primary, fontWeight: '800' },
  levelBtnSoon: { fontSize: 9, color: C.textFaint, fontWeight: '600', marginTop: 2 },
  timerRow: { flexDirection: 'row', gap: 12, width: '100%' },
  timerBtn: {
    flex: 1, borderWidth: 1.5, borderColor: C.border, borderRadius: 14,
    paddingVertical: 14, alignItems: 'center', backgroundColor: C.surface,
    shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 3, elevation: 1,
  },
  timerBtnActive: { borderColor: C.primary, backgroundColor: C.primaryBg, shadowColor: C.primary, shadowOpacity: 0.15, elevation: 3 },
  timerBtnText: { fontSize: 16, fontWeight: '700', color: C.textDim },
  timerBtnTextActive: { color: C.primary, fontWeight: '800' },
  startBtn: {
    marginTop: 12, backgroundColor: C.primary, borderRadius: 16,
    paddingVertical: 16, paddingHorizontal: 48,
    shadowColor: C.primary, shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 12, elevation: 5,
  },
  startBtnText: { color: '#fff', fontSize: 18, fontWeight: '800', letterSpacing: 0.4 },
  matchedArea: { gap: 5, marginBottom: 8, paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: C.border, alignSelf: 'stretch' },
  matchedChip: { flexDirection: 'row', alignItems: 'center', borderWidth: 1.5, borderRadius: 10, paddingHorizontal: 12, paddingVertical: 9, gap: 8, overflow: 'hidden' },
  matchedDot: { width: 8, height: 8, borderRadius: 4, flexShrink: 0 },
  matchedChipText: { flex: 1, fontSize: 13, fontWeight: '600' },
  matchedArrow: { fontSize: 11, color: C.textFaint, flexShrink: 0 },
  pairsBtn: {
    borderWidth: 1.5, borderColor: C.borderBright, borderRadius: 14,
    paddingVertical: 12, alignItems: 'center', backgroundColor: C.surface, marginBottom: 8,
  },
  pairsBtnText: { fontSize: 14, fontWeight: '700', color: C.textDim, letterSpacing: 0.2 },
  modalBackdrop: { flex: 1, backgroundColor: colors.backdrop, justifyContent: 'flex-end' },
  modalSheet: {
    backgroundColor: colors.bgSheet, borderTopLeftRadius: 24, borderTopRightRadius: 24,
    paddingHorizontal: 20, paddingTop: 20, paddingBottom: 36,
    maxHeight: '80%',
    shadowColor: '#000', shadowOffset: { width: 0, height: -4 }, shadowOpacity: 0.1, shadowRadius: 16, elevation: 12,
  },
  modalHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  modalTitle: { fontSize: 17, fontWeight: '800', color: C.text, letterSpacing: 0.2 },
  modalClose: { fontSize: 18, color: C.textFaint, fontWeight: '600' },
  pairRow: {
    flexDirection: 'row', alignItems: 'center', gap: 8,
    paddingVertical: 10, paddingHorizontal: 12, marginBottom: 6, borderRadius: 10, backgroundColor: colors.glass,
  },
  pairDE: { flex: 1, fontSize: 14, fontWeight: '700' },
  pairArrow: { fontSize: 12, color: C.textFaint },
  pairTR: { flex: 1, fontSize: 14, color: C.textDim },
  pairTRMatched: { color: C.text, fontWeight: '600' },
  pairCheck: { fontSize: 14, fontWeight: '800' },

  // Report icon (in pairs modal)
  reportIconBtn: {
    width: 30, height: 30, borderRadius: 8, alignItems: 'center', justifyContent: 'center',
    backgroundColor: colors.dangerSoft, borderWidth: 1, borderColor: colors.dangerBorder,
  },
  reportIconText: { fontSize: 14, color: C.danger },
  reportIconTextReported: { color: C.textFaint },

  // Report modal
  reportOverlay: { flex: 1, backgroundColor: colors.backdrop },
  reportSheet: {
    backgroundColor: colors.bgSheet, borderTopLeftRadius: 24, borderTopRightRadius: 24,
    paddingTop: 12, paddingHorizontal: 20, paddingBottom: 32,
    borderTopWidth: 1, borderColor: C.border,
    shadowColor: '#000', shadowOffset: { width: 0, height: -4 }, shadowOpacity: 0.08, shadowRadius: 16, elevation: 8,
  },
  reportHandle: { width: 40, height: 4, borderRadius: 2, backgroundColor: C.border, alignSelf: 'center', marginBottom: 16 },
  reportTitle: { fontSize: 17, fontWeight: '800', color: C.text, letterSpacing: 0.2, marginBottom: 12 },
  reportWordBox: {
    backgroundColor: C.primaryBg, borderRadius: 12, padding: 12, marginBottom: 12,
    borderWidth: 1, borderColor: colors.primaryBorder, gap: 3,
  },
  reportWordDe: { fontSize: 15, fontWeight: '700', color: C.text },
  reportWordTr: { fontSize: 12, color: C.textFaint, fontWeight: '500' },
  reportInput: {
    backgroundColor: 'rgba(8,12,24,0.55)', borderRadius: 12, paddingHorizontal: 14, paddingVertical: 12,
    fontSize: 14, color: C.text, fontWeight: '500', borderWidth: 1.5, borderColor: C.borderBright,
    minHeight: 80, textAlignVertical: 'top', marginBottom: 16,
  },
  reportActions: { flexDirection: 'row', gap: 10 },
  reportCancelBtn: { flex: 1, borderWidth: 1.5, borderColor: C.border, borderRadius: 12, paddingVertical: 13, alignItems: 'center', backgroundColor: C.surface },
  reportCancelText: { fontSize: 14, fontWeight: '700', color: C.textDim },
  reportSubmitBtn: {
    flex: 2, backgroundColor: C.danger, borderRadius: 12, paddingVertical: 13, alignItems: 'center',
    shadowColor: C.danger, shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.25, shadowRadius: 8, elevation: 4,
  },
  reportSubmitBtnDisabled: { backgroundColor: C.border, shadowOpacity: 0 },
  reportSubmitText: { fontSize: 14, fontWeight: '700', color: '#fff', letterSpacing: 0.3 },
  reportSuccessBox: { alignItems: 'center', paddingVertical: 20, gap: 12 },
  reportSuccessIcon: {
    fontSize: 38, color: C.success,
    backgroundColor: colors.successSoft, borderRadius: 28,
    width: 56, height: 56, textAlign: 'center', lineHeight: 56, overflow: 'hidden',
  },
  reportSuccessText: { fontSize: 15, fontWeight: '700', color: C.text, textAlign: 'center' },

  // Achievement modal
  achOverlay: {
    flex: 1, backgroundColor: colors.backdrop,
    alignItems: 'center', justifyContent: 'center', paddingHorizontal: 28,
  },
  achSheet: {
    backgroundColor: colors.bgSheet, borderRadius: 24, padding: 24, gap: 14,
    width: '100%',
    borderWidth: 1, borderColor: alpha(gameAccent.matching, 0.3),
    shadowColor: gameAccent.matching, shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25, shadowRadius: 24, elevation: 10,
  },
  achSheetTitle: { fontSize: 22, fontWeight: '800', color: C.text, textAlign: 'center', letterSpacing: 0.1 },
  achSheetSub: { fontSize: 14, color: C.textDim, textAlign: 'center', fontWeight: '500', marginTop: -6 },
  achRow: {
    flexDirection: 'row', alignItems: 'center', gap: 14,
    backgroundColor: alpha(gameAccent.matching, 0.1), borderRadius: 14, padding: 14,
    borderWidth: 1, borderColor: alpha(gameAccent.matching, 0.25),
  },
  achRowEmoji: { fontSize: 34 },
  achRowTitle: { fontSize: 15, fontWeight: '800', color: C.text, letterSpacing: 0.1 },
  achRowDesc: { fontSize: 12, color: C.textDim, fontWeight: '400', marginTop: 2 },
  achCloseBtn: {
    backgroundColor: '#8B5CF6', borderRadius: 14, paddingVertical: 16, alignItems: 'center',
    shadowColor: '#8B5CF6', shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35, shadowRadius: 12, elevation: 5, marginTop: 4,
  },
  achCloseBtnText: { fontSize: 16, fontWeight: '800', color: '#fff', letterSpacing: 0.4 },
});
