import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, Animated, ScrollView,
  Modal, TextInput, KeyboardAvoidingView, Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { recordStreakGame, addCoins } from '../utils/storage';
import type { LevelId } from '../utils/storage';
import { wordsByLevel } from '../data/generateCard';
import type { WordEntry } from '../data/wordBank';
import GridBackground from '../components/GridBackground';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../utils/firebase';

const getBestKey = (lvl: LevelId) => `@lernspiel_artikel_best_${lvl}`;
const TIMER_SECONDS = 8;
const NOTCH_COUNT = 10;

type Article = 'der' | 'die' | 'das';
type Feedback = 'correct' | 'wrong' | 'timeout' | null;
type Phase = 'start' | 'playing' | 'result';
interface ArtikelWord { id: string; article: Article; noun: string; tr: string }
interface Best { streak: number; seconds: number }
interface HistoryItem { word: ArtikelWord; type: 'correct' | 'wrong' | 'timeout' }

function buildArtikelWords(bank: WordEntry[]): ArtikelWord[] {
  const m: Record<string, string> = {};
  for (const e of bank) {
    for (const s of e.sentences) {
      if (!s.glossary) continue;
      for (const [k, v] of Object.entries(s.glossary as Record<string, { tr: string; de?: string }>)) {
        if (!m[k]) m[k] = v.tr;
        if (v.de && !m[v.de.toLowerCase()]) m[v.de.toLowerCase()] = v.tr;
      }
    }
  }
  return bank
    .filter(e => /^(der|die|das) /i.test(e.word))
    .map(e => {
      const sp = e.word.indexOf(' ');
      const noun = e.word.slice(sp + 1);
      const tr = m[noun.toLowerCase()] || e.tr || '';
      return { id: e.id, article: e.word.slice(0, sp).toLowerCase() as Article, noun, tr };
    });
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const ART_COLOR: Record<Article, string> = {
  der: '#3B5BDB', die: '#EC4899', das: '#1A9E6E',
};

const C = {
  bg: '#F8F9FE', surface: '#FFFFFF',
  border: '#DDE3F5', borderBright: '#B8C4E8',
  primary: '#3B5BDB', text: '#1A2340',
  textDim: '#4E5C80', textFaint: '#8896B8',
  danger: '#DC2626', dangerBg: 'rgba(220,38,38,0.10)',
  success: '#1A9E6E', successBg: 'rgba(26,158,110,0.12)',
  warning: '#D97706', warningBg: 'rgba(217,119,6,0.10)',
  timeout: '#F97316', timeoutBg: 'rgba(249,115,22,0.10)',
};

export default function ArtikelScreen({ navigation }: { navigation: any }) {
  const [phase, setPhase] = useState<Phase>('start');
  const [level, setLevel] = useState<LevelId>('A1');
  const [best, setBest] = useState<Best | null>(null);

  const allWords = useMemo(() => buildArtikelWords(wordsByLevel[level]), [level]);

  const [words, setWords] = useState<ArtikelWord[]>(() => buildArtikelWords(wordsByLevel['A1']));
  const [wordIdx, setWordIdx] = useState(0);
  const [streak, setStreak] = useState(0);
  const [feedback, setFeedback] = useState<Feedback>(null);
  const [chosen, setChosen] = useState<Article | null>(null);
  const [timeLeft, setTimeLeft] = useState(TIMER_SECONDS);
  const [resultStreak, setResultStreak] = useState(0);
  const [resultSeconds, setResultSeconds] = useState(0);
  const [isNewRecord, setIsNewRecord] = useState(false);
  const [history, setHistory] = useState<HistoryItem[]>([]);

  // Report state
  const [reportVisible, setReportVisible] = useState(false);
  const [reportWord, setReportWord] = useState<ArtikelWord | null>(null);
  const [reportNote, setReportNote] = useState('');
  const [reportSending, setReportSending] = useState(false);
  const [reportSent, setReportSent] = useState(false);
  const [reportedIds, setReportedIds] = useState<Set<string>>(new Set());

  const streakRef = useRef(0);
  const startTimeRef = useRef(0);
  const bestRef = useRef<Best | null>(null);
  const phaseRef = useRef<Phase>('start');
  const feedbackRef = useRef<Feedback>(null);
  const currentWordRef = useRef<ArtikelWord | null>(null);
  bestRef.current = best;
  phaseRef.current = phase;
  feedbackRef.current = feedback;

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const advanceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const timerAnimObjRef = useRef<Animated.CompositeAnimation | null>(null);

  const wordScale = useRef(new Animated.Value(1)).current;
  const shakeAnim = useRef(new Animated.Value(0)).current;
  const timerAnim = useRef(new Animated.Value(1)).current;

  const currentWord = words[wordIdx % words.length];
  currentWordRef.current = currentWord ?? null;

  useEffect(() => {
    AsyncStorage.getItem(getBestKey(level)).then(v => setBest(v ? JSON.parse(v) : null));
  }, [level]);

  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current!);
      clearTimeout(advanceTimer.current!);
      if (timerAnimObjRef.current) timerAnimObjRef.current.stop();
    };
  }, []);

  useEffect(() => {
    if (phase !== 'playing' || feedback !== null) return;

    timerAnim.setValue(1);
    const anim = Animated.timing(timerAnim, {
      toValue: 0, duration: TIMER_SECONDS * 1000, useNativeDriver: false,
    });
    timerAnimObjRef.current = anim;
    anim.start();

    setTimeLeft(TIMER_SECONDS);
    clearInterval(intervalRef.current!);
    intervalRef.current = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) { clearInterval(intervalRef.current!); handleTimeout(); return 0; }
        return t - 1;
      });
    }, 1000);

    return () => {
      clearInterval(intervalRef.current!);
      if (timerAnimObjRef.current) { timerAnimObjRef.current.stop(); timerAnimObjRef.current = null; }
    };
  }, [wordIdx, phase, feedback]);

  function stopTimer() {
    clearInterval(intervalRef.current!);
    if (timerAnimObjRef.current) { timerAnimObjRef.current.stop(); timerAnimObjRef.current = null; }
  }

  function handleTimeout() {
    if (phaseRef.current !== 'playing' || feedbackRef.current !== null) return;
    const word = currentWordRef.current;
    if (word) setHistory(prev => [...prev, { word, type: 'timeout' }]);
    stopTimer();
    Animated.sequence([
      Animated.timing(shakeAnim, { toValue: 14, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: -14, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: 8, duration: 40, useNativeDriver: true }),
      Animated.timing(shakeAnim, { toValue: 0, duration: 40, useNativeDriver: true }),
    ]).start();
    setFeedback('timeout');
    setChosen(null);
    advance(false, 1500);
  }

  function advance(wasCorrect: boolean, delay: number) {
    clearTimeout(advanceTimer.current!);
    advanceTimer.current = setTimeout(async () => {
      const elapsed = Math.round((Date.now() - startTimeRef.current) / 1000);
      const finalStreak = streakRef.current;

      if (!wasCorrect) {
        const cur = bestRef.current;
        const isNew = finalStreak > 0 &&
          (!cur || finalStreak > cur.streak || (finalStreak === cur.streak && elapsed < cur.seconds));
        if (isNew) {
          const nb: Best = { streak: finalStreak, seconds: elapsed };
          await AsyncStorage.setItem(getBestKey(level), JSON.stringify(nb));
          setBest(nb);
        }
        recordStreakGame('artikel', finalStreak, elapsed);
        addCoins(Math.max(1, finalStreak));
        setResultStreak(finalStreak);
        setResultSeconds(elapsed);
        setIsNewRecord(isNew);
        setFeedback(null);
        setChosen(null);
        phaseRef.current = 'result';
        setPhase('result');
      } else {
        setFeedback(null);
        setChosen(null);
        setWordIdx(i => i + 1);
      }
    }, delay);
  }

  const startGame = useCallback(() => {
    clearTimeout(advanceTimer.current!);
    stopTimer();
    const shuffled = shuffle(allWords);
    setWords(shuffled);
    setWordIdx(0);
    streakRef.current = 0;
    setStreak(0);
    setFeedback(null);
    setChosen(null);
    setTimeLeft(TIMER_SECONDS);
    setHistory([]);
    setReportedIds(new Set());
    startTimeRef.current = Date.now();
    phaseRef.current = 'playing';
    setPhase('playing');
  }, [allWords]);

  function handleAnswer(tapped: Article) {
    if (phaseRef.current !== 'playing' || feedbackRef.current !== null) return;
    stopTimer();
    setChosen(tapped);
    const correct = currentWord.article;

    if (tapped === correct) {
      setHistory(prev => [...prev, { word: currentWord, type: 'correct' }]);
      Animated.sequence([
        Animated.spring(wordScale, { toValue: 1.12, useNativeDriver: true, speed: 60, bounciness: 8 }),
        Animated.spring(wordScale, { toValue: 1, useNativeDriver: true, speed: 25, bounciness: 0 }),
      ]).start();
      streakRef.current += 1;
      setStreak(streakRef.current);
      setFeedback('correct');
      advance(true, 900);
    } else {
      setHistory(prev => [...prev, { word: currentWord, type: 'wrong' }]);
      Animated.sequence([
        Animated.timing(shakeAnim, { toValue: 14, duration: 50, useNativeDriver: true }),
        Animated.timing(shakeAnim, { toValue: -14, duration: 50, useNativeDriver: true }),
        Animated.timing(shakeAnim, { toValue: 8, duration: 40, useNativeDriver: true }),
        Animated.timing(shakeAnim, { toValue: 0, duration: 40, useNativeDriver: true }),
      ]).start();
      setFeedback('wrong');
      advance(false, 1500);
    }
  }

  function openReport(word: ArtikelWord) {
    setReportWord(word);
    setReportNote('');
    setReportSent(false);
    setReportVisible(true);
  }

  async function submitReport() {
    if (!reportWord || reportNote.trim().length === 0 || reportSending) return;
    setReportSending(true);
    try {
      await addDoc(collection(db, 'reports'), {
        game: 'artikel',
        level,
        article: reportWord.article,
        noun: reportWord.noun,
        tr: reportWord.tr,
        wordId: reportWord.id,
        note: reportNote.trim(),
        createdAt: serverTimestamp(),
      });
      setReportedIds(prev => new Set(prev).add(reportWord.id));
      setReportSent(true);
      setTimeout(() => setReportVisible(false), 1400);
    } catch {
      // silent fail
    } finally {
      setReportSending(false);
    }
  }

  const notchFilled = streak > 0 && streak % NOTCH_COUNT === 0 ? NOTCH_COUNT : streak % NOTCH_COUNT;
  const notchLap = Math.floor(streak / NOTCH_COUNT);

  const timerBarColor = timerAnim.interpolate({
    inputRange: [0, 0.4, 1],
    outputRange: ['#DC2626', '#F97316', '#1A9E6E'],
  });

  // ── START ──────────────────────────────────────────────────────────────────
  if (phase === 'start') {
    return (
      <SafeAreaView style={styles.safe}>
        <GridBackground />
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}
            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
            <Text style={styles.backBtnText}>←</Text>
          </TouchableOpacity>
          <View style={styles.headerCenter}>
            <Text style={styles.headerTitle}>Artikel Savaşları</Text>
            <Text style={styles.headerSub}>der · die · das</Text>
          </View>
          <View style={{ width: 44 }} />
        </View>

        <ScrollView contentContainerStyle={styles.startBody} showsVerticalScrollIndicator={false}>
          <Text style={styles.startIcon}>⚔️</Text>
          <Text style={styles.startTitle}>Artikel Savaşları</Text>
          <Text style={styles.startSub}>
            Kaç kelimeyi arka arkaya hatasız yapabilirsin?{'\n'}Her kelime için {TIMER_SECONDS} saniye var.
          </Text>

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

          <View style={styles.bestCard}>
            <Text style={styles.bestLabel}>🏆 KİŞİSEL REKOR</Text>
            {best && best.streak > 0 ? (
              <>
                <Text style={styles.bestStreak}>{best.streak} kelime</Text>
                <Text style={styles.bestTime}>{best.seconds} saniyede</Text>
              </>
            ) : (
              <>
                <Text style={styles.bestEmpty}>Henüz rekor yok</Text>
                <Text style={styles.bestEmptySub}>İlk serini başlat!</Text>
              </>
            )}
          </View>

          <TouchableOpacity style={styles.startBtn} onPress={startGame} activeOpacity={0.85}>
            <Text style={styles.startBtnText}>Başla →</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }

  // ── RESULT ─────────────────────────────────────────────────────────────────
  if (phase === 'result') {
    return (
      <SafeAreaView style={styles.safe}>
        <GridBackground />
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}
            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
            <Text style={styles.backBtnText}>←</Text>
          </TouchableOpacity>
          <View style={styles.headerCenter}>
            <Text style={styles.headerTitle}>Artikel Savaşları</Text>
            <Text style={styles.headerSub}>Seri bitti!</Text>
          </View>
          <View style={{ width: 44 }} />
        </View>

        <ScrollView contentContainerStyle={styles.resultScroll} showsVerticalScrollIndicator={false}>
          {/* Stats card at top */}
          <View style={styles.resultStatsCard}>
            <Text style={styles.resultIcon}>{resultStreak >= 5 ? '🎯' : '⭐'}</Text>
            <View style={styles.resultStatsRow}>
              <Text style={styles.resultStreakNum}>{resultStreak}</Text>
              <Text style={styles.resultStreakLabel}>kelime</Text>
            </View>
            {resultStreak > 0 && (
              <Text style={styles.resultTime}>{resultSeconds} saniyede</Text>
            )}
            {isNewRecord ? (
              <View style={styles.newRecordBadge}>
                <Text style={styles.newRecordText}>🏆 Yeni Rekor!</Text>
              </View>
            ) : best && best.streak > 0 ? (
              <View style={styles.prevRecord}>
                <Text style={styles.prevRecordText}>
                  Rekor: {best.streak} kelime · {best.seconds}sn
                </Text>
              </View>
            ) : null}
          </View>

          <TouchableOpacity style={styles.startBtn} onPress={startGame} activeOpacity={0.85}>
            <Text style={styles.startBtnText}>Tekrar Dene →</Text>
          </TouchableOpacity>

          {/* History */}
          {history.length > 0 && (
            <View style={styles.historySection}>
              <Text style={styles.historyLabel}>CEVAPLANAN KELİMELER</Text>
              {history.map((item, idx) => {
                const isReported = reportedIds.has(item.word.id);
                const statusColor =
                  item.type === 'correct' ? C.success :
                  item.type === 'wrong' ? C.danger : C.timeout;
                const statusIcon =
                  item.type === 'correct' ? '✓' :
                  item.type === 'wrong' ? '✗' : '⏱';
                const artColor = ART_COLOR[item.word.article];
                return (
                  <View
                    key={item.word.id + idx}
                    style={[styles.historyRow, { borderLeftColor: statusColor }]}
                  >
                    <Text style={[styles.historyStatusIcon, { color: statusColor }]}>
                      {statusIcon}
                    </Text>
                    <View style={styles.historyWordInfo}>
                      <View style={styles.historyNounRow}>
                        <Text style={[styles.historyArticle, { color: artColor }]}>
                          {item.word.article}
                        </Text>
                        <Text style={styles.historyNoun}>{item.word.noun}</Text>
                      </View>
                      <Text style={styles.historyTr}>{item.word.tr}</Text>
                    </View>
                    <TouchableOpacity
                      style={styles.reportIconBtn}
                      onPress={() => openReport(item.word)}
                      disabled={isReported}
                      hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                    >
                      <Text style={[styles.reportIconText, isReported && styles.reportIconTextReported]}>
                        ⚑
                      </Text>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>
          )}
        </ScrollView>

        {/* Report modal */}
        <Modal visible={reportVisible} transparent animationType="slide" onRequestClose={() => !reportSending && setReportVisible(false)}>
          <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <TouchableOpacity
              style={styles.reportOverlay}
              activeOpacity={1}
              onPress={() => !reportSending && setReportVisible(false)}
            />
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
                  {reportWord && (
                    <View style={styles.reportWordBox}>
                      <View style={styles.historyNounRow}>
                        <Text style={[styles.historyArticle, { color: ART_COLOR[reportWord.article], fontSize: 16 }]}>
                          {reportWord.article}
                        </Text>
                        <Text style={[styles.historyNoun, { fontSize: 16 }]}>{reportWord.noun}</Text>
                      </View>
                      <Text style={styles.reportWordTr}>{reportWord.tr}</Text>
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

  // ── PLAYING ────────────────────────────────────────────────────────────────
  const correct = currentWord.article;

  let cardBg = C.surface;
  let cardBorder = C.border;
  if (feedback === 'correct') { cardBg = C.successBg; cardBorder = C.success; }
  else if (feedback === 'wrong') { cardBg = C.dangerBg; cardBorder = C.danger; }
  else if (feedback === 'timeout') { cardBg = C.timeoutBg; cardBorder = C.timeout; }

  let feedbackLine: string | null = null;
  if (feedback === 'correct') feedbackLine = `✓ ${correct.toUpperCase()} ${currentWord.noun}`;
  else if (feedback === 'wrong') feedbackLine = `✗ Doğrusu: ${correct.toUpperCase()}`;
  else if (feedback === 'timeout') feedbackLine = `⏱ Süre doldu! → ${correct.toUpperCase()}`;

  return (
    <SafeAreaView style={styles.safe}>
      <GridBackground />

      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => { clearTimeout(advanceTimer.current!); stopTimer(); navigation.goBack(); }}
          style={styles.backBtn} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
          <Text style={styles.backBtnText}>←</Text>
        </TouchableOpacity>
        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>Artikel Savaşları</Text>
          <Text style={styles.headerSub}>der · die · das</Text>
        </View>
        <View style={styles.streakPill}>
          <Text style={styles.streakPillText}>🔥 {streak}</Text>
        </View>
      </View>

      <View style={styles.timerRow}>
        <View style={styles.timerTrack}>
          <Animated.View style={[styles.timerBar, {
            width: timerAnim.interpolate({ inputRange: [0, 1], outputRange: ['0%', '100%'] }),
            backgroundColor: timerBarColor,
          }]} />
        </View>
        <Text style={styles.timerNum}>{timeLeft}s</Text>
      </View>

      <View style={styles.gameBody}>
        <View style={styles.notchRow}>
          {Array.from({ length: NOTCH_COUNT }, (_, i) => (
            <View key={i} style={[styles.notch, i < notchFilled && styles.notchFilled]} />
          ))}
          {notchLap > 0 && (
            <View style={styles.lapBadge}>
              <Text style={styles.lapBadgeText}>×{notchLap + 1}</Text>
            </View>
          )}
        </View>

        <View style={styles.streakDisplay}>
          <Text style={styles.streakNum}>{streak}</Text>
          <Text style={styles.streakLabel}>Seri</Text>
        </View>

        <Animated.View style={[styles.wordCard, {
          backgroundColor: cardBg, borderColor: cardBorder,
          transform: [{ scale: wordScale }, { translateX: shakeAnim }],
        }]}>
          <Text style={styles.noun}>{currentWord.noun}</Text>
          {feedbackLine !== null && (
            <Text style={[
              styles.feedbackLine,
              feedback === 'correct' ? { color: C.success } : { color: feedback === 'wrong' ? C.danger : C.timeout },
            ]}>
              {feedbackLine}
            </Text>
          )}
        </Animated.View>

        <View style={styles.buttonRow}>
          {(['der', 'die', 'das'] as Article[]).map(art => {
            let btnStyle: object = { borderColor: ART_COLOR[art], backgroundColor: `${ART_COLOR[art]}1A` };
            let textColor = ART_COLOR[art];
            let opacity = 1;

            if (feedback !== null) {
              if (art === correct) {
                btnStyle = { borderColor: C.success, backgroundColor: 'rgba(26,158,110,0.14)' };
                textColor = C.success;
              } else {
                btnStyle = { borderColor: C.border, backgroundColor: C.bg };
                textColor = C.textFaint;
                opacity = 0.4;
              }
            }

            return (
              <TouchableOpacity key={art}
                style={[styles.artBtn, btnStyle, { opacity }]}
                onPress={() => handleAnswer(art)}
                activeOpacity={0.72}
                disabled={feedback !== null}>
                <Text style={[styles.artBtnText, { color: textColor }]}>
                  {art.toUpperCase()}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: 'rgba(236,72,153,0.07)' },
  header: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingHorizontal: 16, paddingVertical: 12,
    backgroundColor: 'rgba(236,72,153,0.07)', borderBottomWidth: 1, borderBottomColor: 'rgba(236,72,153,0.2)',
  },
  backBtn: {
    backgroundColor: '#EEF1FF', borderRadius: 12,
    width: 44, height: 44, alignItems: 'center', justifyContent: 'center',
    borderWidth: 1.5, borderColor: C.borderBright,
  },
  backBtnText: { fontSize: 20, color: C.primary },
  headerCenter: { flex: 1, alignItems: 'center' },
  headerTitle: { fontSize: 16, fontWeight: '800', color: C.text, letterSpacing: 0.2 },
  headerSub: { fontSize: 12, color: C.textDim, marginTop: 2, letterSpacing: 0.2 },
  streakPill: {
    borderWidth: 1.5, borderColor: 'rgba(217,119,6,0.35)', borderRadius: 20,
    paddingHorizontal: 14, paddingVertical: 6, minWidth: 54, alignItems: 'center',
    backgroundColor: '#FFF8ED',
  },
  streakPillText: { fontSize: 14, fontWeight: '800', color: C.warning, letterSpacing: 0.3 },

  timerRow: {
    flexDirection: 'row', alignItems: 'center',
    paddingHorizontal: 16, paddingVertical: 6,
    backgroundColor: C.surface, borderBottomWidth: 1, borderBottomColor: C.border, gap: 10,
  },
  timerTrack: { flex: 1, height: 8, backgroundColor: '#EEF1FF', borderRadius: 4, overflow: 'hidden' },
  timerBar: { height: 8, borderRadius: 4 },
  timerNum: { fontSize: 13, fontWeight: '700', color: C.textDim, minWidth: 24, textAlign: 'right' },

  startBody: { flexGrow: 1, alignItems: 'center', paddingHorizontal: 24, paddingTop: 20, paddingBottom: 24, gap: 14 },
  startIcon: { fontSize: 52 },
  startTitle: { fontSize: 24, fontWeight: '800', color: C.text, letterSpacing: 0.2 },
  startSub: { fontSize: 13, color: C.textDim, textAlign: 'center', lineHeight: 19 },
  sectionLabel: {
    fontSize: 11, fontWeight: '700', color: C.textFaint,
    letterSpacing: 1.2, alignSelf: 'flex-start', marginBottom: -6,
  },
  levelRow: { flexDirection: 'row', gap: 10, width: '100%' },
  levelBtn: {
    flex: 1, borderWidth: 1.5, borderColor: C.border, borderRadius: 14,
    paddingVertical: 12, alignItems: 'center', backgroundColor: C.surface,
  },
  levelBtnActive: { borderColor: C.primary, backgroundColor: 'rgba(59,91,219,0.10)' },
  levelBtnText: { fontSize: 15, fontWeight: '700', color: C.textDim },
  levelBtnTextActive: { color: C.primary, fontWeight: '800' as const },
  levelBtnSoon: { fontSize: 9, color: C.textFaint, fontWeight: '600', marginTop: 2 },
  bestCard: {
    width: '100%', backgroundColor: C.warningBg, borderRadius: 18,
    padding: 22, alignItems: 'center', gap: 6,
    borderWidth: 1, borderColor: 'rgba(217,119,6,0.28)',
    borderLeftWidth: 4, borderLeftColor: C.warning,
    shadowColor: C.warning, shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1, shadowRadius: 8, elevation: 2,
  },
  bestLabel: { fontSize: 10, fontWeight: '700', color: C.textFaint, letterSpacing: 2 },
  bestStreak: { fontSize: 36, fontWeight: '800', color: C.text, letterSpacing: -0.5 },
  bestTime: { fontSize: 14, color: C.textDim, fontWeight: '500' },
  bestEmpty: { fontSize: 22, fontWeight: '700', color: C.textDim },
  bestEmptySub: { fontSize: 13, color: C.textFaint },
  startBtn: {
    width: '100%', backgroundColor: C.primary, borderRadius: 16,
    paddingVertical: 16, alignItems: 'center', marginTop: 4,
    shadowColor: C.primary, shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3, shadowRadius: 12, elevation: 5,
  },
  startBtnText: { color: '#fff', fontSize: 18, fontWeight: '800', letterSpacing: 0.4 },

  gameBody: {
    flex: 1, alignItems: 'center', justifyContent: 'space-between',
    paddingHorizontal: 20, paddingTop: 20, paddingBottom: 40,
  },
  notchRow: { flexDirection: 'row', alignItems: 'center', gap: 5 },
  notch: {
    width: 22, height: 8, borderRadius: 4,
    borderWidth: 1.5, borderColor: C.border, backgroundColor: 'rgba(236,72,153,0.07)',
  },
  notchFilled: {
    backgroundColor: C.success, borderColor: C.success,
    shadowColor: C.success, shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5, shadowRadius: 3, elevation: 2,
  },
  lapBadge: {
    marginLeft: 4, backgroundColor: 'rgba(217,119,6,0.12)', borderRadius: 8,
    paddingHorizontal: 8, paddingVertical: 3,
    borderWidth: 1, borderColor: 'rgba(217,119,6,0.3)',
  },
  lapBadgeText: { fontSize: 11, fontWeight: '800', color: C.warning },
  streakDisplay: { alignItems: 'center', gap: 2 },
  streakNum: { fontSize: 56, fontWeight: '900', color: C.text, letterSpacing: -2 },
  streakLabel: { fontSize: 13, fontWeight: '600', color: C.textFaint, letterSpacing: 1.5 },
  wordCard: {
    width: '100%', alignItems: 'center', gap: 12,
    paddingHorizontal: 16, paddingVertical: 28,
    borderRadius: 20, borderWidth: 2,
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06, shadowRadius: 8, elevation: 2,
  },
  noun: { fontSize: 40, fontWeight: '800', color: C.text, textAlign: 'center', letterSpacing: 0.1 },
  feedbackLine: { fontSize: 17, fontWeight: '800', letterSpacing: 0.4, textAlign: 'center' },
  buttonRow: { flexDirection: 'row', gap: 10, width: '100%' },
  artBtn: {
    flex: 1, borderWidth: 2, borderRadius: 18,
    paddingVertical: 26, alignItems: 'center',
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06, shadowRadius: 6, elevation: 2,
  },
  artBtnText: { fontSize: 17, fontWeight: '900', letterSpacing: 1 },

  // Result
  resultScroll: {
    paddingHorizontal: 20, paddingTop: 20, paddingBottom: 32, gap: 16, flexGrow: 1,
  },
  resultStatsCard: {
    backgroundColor: 'rgba(236,72,153,0.08)', borderRadius: 20, padding: 24,
    alignItems: 'center', gap: 6,
    borderWidth: 1, borderColor: 'rgba(236,72,153,0.25)',
    borderLeftWidth: 4, borderLeftColor: '#EC4899',
    shadowColor: '#EC4899', shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1, shadowRadius: 8, elevation: 2,
  },
  resultIcon: { fontSize: 52, marginBottom: 4 },
  resultStatsRow: { flexDirection: 'row', alignItems: 'flex-end', gap: 8 },
  resultStreakNum: { fontSize: 64, fontWeight: '900', color: C.text, letterSpacing: -2, lineHeight: 70 },
  resultStreakLabel: { fontSize: 18, fontWeight: '700', color: C.textDim, marginBottom: 10 },
  resultTime: { fontSize: 14, color: C.textFaint, fontWeight: '500' },
  newRecordBadge: {
    backgroundColor: 'rgba(217,119,6,0.12)', borderRadius: 14,
    paddingHorizontal: 22, paddingVertical: 10, marginTop: 4,
    borderWidth: 1.5, borderColor: 'rgba(217,119,6,0.3)',
  },
  newRecordText: { fontSize: 15, fontWeight: '800', color: C.warning, letterSpacing: 0.3 },
  prevRecord: {
    backgroundColor: 'rgba(236,72,153,0.07)', borderRadius: 10,
    paddingHorizontal: 18, paddingVertical: 8, marginTop: 4,
    borderWidth: 1, borderColor: C.border,
  },
  prevRecordText: { fontSize: 13, color: C.textDim, fontWeight: '500' },

  // History
  historySection: { gap: 8 },
  historyLabel: {
    fontSize: 10, fontWeight: '700', color: C.textFaint,
    letterSpacing: 2, marginBottom: 2,
  },
  historyRow: {
    flexDirection: 'row', alignItems: 'center', gap: 12,
    backgroundColor: C.surface, borderRadius: 14, padding: 12,
    borderWidth: 1, borderColor: C.border, borderLeftWidth: 4,
  },
  historyStatusIcon: { fontSize: 16, fontWeight: '800', width: 20, textAlign: 'center' },
  historyWordInfo: { flex: 1, gap: 2 },
  historyNounRow: { flexDirection: 'row', alignItems: 'baseline', gap: 6 },
  historyArticle: { fontSize: 13, fontWeight: '800', letterSpacing: 0.2 },
  historyNoun: { fontSize: 14, fontWeight: '700', color: C.text, letterSpacing: 0.1 },
  historyTr: { fontSize: 12, color: C.textFaint, fontWeight: '500' },
  reportIconBtn: {
    width: 34, height: 34, borderRadius: 10, alignItems: 'center', justifyContent: 'center',
    backgroundColor: 'rgba(220,38,38,0.07)', borderWidth: 1, borderColor: 'rgba(220,38,38,0.2)',
  },
  reportIconText: { fontSize: 16, color: C.danger },
  reportIconTextReported: { color: C.textFaint },

  // Report modal
  reportOverlay: { flex: 1, backgroundColor: 'rgba(10,20,60,0.45)' },
  reportSheet: {
    backgroundColor: C.surface,
    borderTopLeftRadius: 24, borderTopRightRadius: 24,
    paddingTop: 12, paddingHorizontal: 20, paddingBottom: 32,
    borderTopWidth: 1, borderColor: C.border,
    shadowColor: '#000', shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.08, shadowRadius: 16, elevation: 8,
  },
  reportHandle: {
    width: 40, height: 4, borderRadius: 2,
    backgroundColor: C.border, alignSelf: 'center', marginBottom: 16,
  },
  reportTitle: { fontSize: 17, fontWeight: '800', color: C.text, letterSpacing: 0.2, marginBottom: 12 },
  reportWordBox: {
    backgroundColor: 'rgba(236,72,153,0.07)', borderRadius: 12, padding: 12, marginBottom: 12,
    borderWidth: 1, borderColor: 'rgba(236,72,153,0.2)', gap: 3,
  },
  reportWordTr: { fontSize: 12, color: C.textFaint, fontWeight: '500' },
  reportInput: {
    backgroundColor: '#F8F9FE', borderRadius: 12,
    paddingHorizontal: 14, paddingVertical: 12,
    fontSize: 14, color: C.text, fontWeight: '500',
    borderWidth: 1.5, borderColor: C.borderBright,
    minHeight: 80, textAlignVertical: 'top', marginBottom: 16,
  },
  reportActions: { flexDirection: 'row', gap: 10 },
  reportCancelBtn: {
    flex: 1, borderWidth: 1.5, borderColor: C.border,
    borderRadius: 12, paddingVertical: 13, alignItems: 'center',
    backgroundColor: C.surface,
  },
  reportCancelText: { fontSize: 14, fontWeight: '700', color: C.textDim },
  reportSubmitBtn: {
    flex: 2, backgroundColor: C.danger,
    borderRadius: 12, paddingVertical: 13, alignItems: 'center',
    shadowColor: C.danger, shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25, shadowRadius: 8, elevation: 4,
  },
  reportSubmitBtnDisabled: { backgroundColor: C.border, shadowOpacity: 0 },
  reportSubmitText: { fontSize: 14, fontWeight: '700', color: '#fff', letterSpacing: 0.3 },
  reportSuccessBox: { alignItems: 'center', paddingVertical: 20, gap: 12 },
  reportSuccessIcon: {
    fontSize: 38, color: '#1A9E6E',
    backgroundColor: 'rgba(26,158,110,0.12)', borderRadius: 28,
    width: 56, height: 56, textAlign: 'center', lineHeight: 56, overflow: 'hidden',
  },
  reportSuccessText: { fontSize: 15, fontWeight: '700', color: C.text, textAlign: 'center' },
});
