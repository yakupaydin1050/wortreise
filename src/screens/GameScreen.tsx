import React, { useState, useCallback, useEffect, useRef } from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert, Modal, TextInput,
  KeyboardAvoidingView, Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { generateCard, getDistractors } from '../data/generateCard';
import { loadProfile, recordCardCompleted, recordWordResults, shouldPromptReview, loadGameStats, loadAllProgress, loadUnlockedAchievements, unlockAchievements, UserProfile } from '../utils/storage';
import { cancelStreakNotif } from '../utils/notifications';
import { ACHIEVEMENTS, AchievementDef, checkNewAchievements } from '../data/achievements';
import { captureRef } from 'react-native-view-shot';
import * as Sharing from 'expo-sharing';
import * as StoreReview from 'expo-store-review';
import { submitReport as sendReport } from '../utils/reporting';
import SentenceRow from '../components/SentenceRow';
import WordChip from '../components/WordChip';
import { colors } from '../theme';
import { ScreenBackground } from '../components/ui';

// Dark premium mapping of the legacy palette keys used throughout this screen.
const C = {
  bg: colors.bg,
  surface: colors.glass,
  surface2: colors.glassStrong,
  border: colors.glassBorder,
  borderBright: colors.glassBorderStrong,
  primary: colors.primary,
  primaryBg: colors.primarySoft,
  text: colors.text,
  textDim: colors.textDim,
  textFaint: colors.textFaint,
  success: colors.success,
  successBg: colors.successSoft,
  warning: colors.warning,
  danger: colors.danger,
  revealed: '#3A4568',
};

interface SlotState {
  filledWord: string | null;
  wordId: string | null;
  isCorrect: boolean | null;
  isRevealed: boolean;
}

interface ScoreData {
  correct: number;
}

type Phase = 'answering' | 'results';

function buildWordPool(card: ReturnType<typeof generateCard>) {
  const words = card.sentences.map((s, i) => ({ id: `w${i}`, word: s.targetWord }));
  const distractors = getDistractors(card);
  const distractor = distractors.length > 0
    ? distractors[Math.floor(Math.random() * distractors.length)]
    : card.sentences[Math.floor(Math.random() * card.sentences.length)].targetWord;
  words.push({ id: `w${card.sentences.length}`, word: distractor });
  return words.sort(() => Math.random() - 0.5);
}

function buildEmptySlots(card: ReturnType<typeof generateCard>): Record<string, SlotState> {
  const init: Record<string, SlotState> = {};
  card.sentences.forEach(s => {
    init[s.id] = { filledWord: null, wordId: null, isCorrect: null, isRevealed: false };
  });
  return init;
}

function formatTime(secs: number) {
  const m = Math.floor(secs / 60);
  const s = secs % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

export default function GameScreen({ navigation, route }: { navigation: any; route: any }) {
  const duration: number = route?.params?.duration ?? 60;
  const isUnlimited = duration === 0;
  const reviewWordIds: string[] | undefined = route?.params?.reviewWordIds;
  const isReviewMode = !!reviewWordIds && reviewWordIds.length > 0;
  const masteredIds: string[] = route?.params?.masteredIds ?? [];
  const level: 'A1' | 'A2' | 'B1' = route?.params?.level ?? 'A1';
  const [card, setCard] = useState(() =>
    isReviewMode
      ? generateCard(5, [], reviewWordIds, level)
      : generateCard(5, masteredIds, undefined, level),
  );
  const [wordPool, setWordPool] = useState(() => buildWordPool(card));
  const [selectedWordId, setSelectedWordId] = useState<string | null>(null);
  const [placedWordIds, setPlacedWordIds] = useState<Set<string>>(new Set());
  const [slots, setSlots] = useState<Record<string, SlotState>>(() => buildEmptySlots(card));
  const [timeLeft, setTimeLeft] = useState(duration);
  const [phase, setPhase] = useState<Phase>('answering');
  const [timedOut, setTimedOut] = useState(false);
  const [scoreData, setScoreData] = useState<ScoreData | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [goalJustMet, setGoalJustMet] = useState(false);
  const [reportVisible, setReportVisible] = useState(false);
  const [reportSentenceId, setReportSentenceId] = useState<string | null>(null);
  const [reportNote, setReportNote] = useState('');
  const [reportSending, setReportSending] = useState(false);
  const [reportedIds, setReportedIds] = useState<Set<string>>(new Set());
  const [newAchievements, setNewAchievements] = useState<AchievementDef[]>([]);
  const [achModalVisible, setAchModalVisible] = useState(false);
  const shareRef = useRef<any>(null);
  const hasRecorded = useRef(false);

  useEffect(() => {
    loadProfile().then(setProfile);
  }, []);

  const total = card.sentences.length;
  const filledCount = card.sentences.filter(s => slots[s.id].filledWord !== null).length;
  const solvedCount = Object.values(slots).filter(s => s.isCorrect === true).length;
  const isLocked = timedOut || phase === 'results';

  useEffect(() => {
    if (isUnlimited || timeLeft <= 0 || phase === 'results') return;
    const id = setTimeout(() => setTimeLeft((t: number) => t - 1), 1000);
    return () => clearTimeout(id);
  }, [timeLeft, phase, isUnlimited]);

  useEffect(() => {
    if (isUnlimited) return;
    if (timeLeft <= 0 && phase === 'answering') setTimedOut(true);
  }, [timeLeft, phase, isUnlimited]);

  const selectedWord = selectedWordId
    ? wordPool.find(w => w.id === selectedWordId) ?? null
    : null;

  const handleWordPress = useCallback((wordId: string) => {
    if (isLocked) return;
    setSelectedWordId(prev => (prev === wordId ? null : wordId));
  }, [isLocked]);

  const handleBlankPress = useCallback((sentenceId: string) => {
    if (isLocked) return;
    const slot = slots[sentenceId];
    if (!selectedWord) {
      if (slot.wordId) {
        setPlacedWordIds(prev => { const n = new Set(prev); n.delete(slot.wordId!); return n; });
        setSlots(prev => ({ ...prev, [sentenceId]: { filledWord: null, wordId: null, isCorrect: null, isRevealed: false } }));
      }
      return;
    }
    if (slot.wordId) {
      setPlacedWordIds(prev => { const n = new Set(prev); n.delete(slot.wordId!); return n; });
    }
    setSlots(prev => ({
      ...prev,
      [sentenceId]: { filledWord: selectedWord.word, wordId: selectedWord.id, isCorrect: null, isRevealed: false },
    }));
    setPlacedWordIds(prev => new Set(prev).add(selectedWord.id));
    setSelectedWordId(null);
  }, [isLocked, selectedWord, slots]);

  const performEvaluate = useCallback((shouldRecord: boolean) => {
    const newSlots: Record<string, SlotState> = {};
    let correctCount = 0;
    const correctWordIds: string[] = [];
    const wrongWordIds: string[] = [];

    card.sentences.forEach(s => {
      const slot = slots[s.id];
      if (slot.filledWord) {
        const correct = slot.filledWord.toLowerCase() === s.targetWord.toLowerCase();
        newSlots[s.id] = { ...slot, isCorrect: correct, isRevealed: false };
        if (correct) {
          correctCount++;
          if (s.wordBankId) correctWordIds.push(s.wordBankId);
        } else {
          if (s.wordBankId) wrongWordIds.push(s.wordBankId);
        }
      } else {
        newSlots[s.id] = { ...slot, isCorrect: null, isRevealed: false };
        if (s.wordBankId) wrongWordIds.push(s.wordBankId);
      }
    });

    setSlots(newSlots);
    setScoreData({ correct: correctCount });
    setTimedOut(false);
    setPhase('results');

    // Always track word-level progress regardless of daily goal recording
    recordWordResults(level, correctWordIds, wrongWordIds);

    if (shouldRecord && profile && !hasRecorded.current) {
      hasRecorded.current = true;
      recordCardCompleted(correctCount, profile.dailyGoal).then(async ({ stats: updatedStats, goalJustMet: met }) => {
        setGoalJustMet(met);
        if (met) cancelStreakNotif();

        const [gs, allProgress, unlockedList] = await Promise.all([
          loadGameStats(),
          loadAllProgress(),
          loadUnlockedAchievements(),
        ]);
        const masteredCount = Object.values(allProgress).reduce((sum, p) => sum + p.masteredIds.length, 0);
        const newly = checkNewAchievements(updatedStats, gs, masteredCount, unlockedList.map(u => u.id));
        if (newly.length > 0) {
          await unlockAchievements(newly.map(a => a.id));
          setNewAchievements(newly);
          setAchModalVisible(true);
        }

        shouldPromptReview().then(yes => {
          if (yes) StoreReview.isAvailableAsync().then(ok => { if (ok) StoreReview.requestReview(); });
        });
      });
    }
  }, [card.sentences, slots, profile]);

  const handleKontrolEt = useCallback(() => {
    if (filledCount === 0) {
      if (Platform.OS === 'web') { performEvaluate(false); return; }
      Alert.alert(
        'Hiçbir boşluk doldurulmadı',
        'Henüz hiçbir soruyu yanıtlamadın.\n\nBu kart günlük hedefe sayılmaz. Yine de devam etmek istiyor musun?',
        [
          { text: 'Geri Dön', style: 'cancel' },
          { text: 'Devam Et', onPress: () => performEvaluate(false) },
        ],
      );
    } else if (filledCount < total) {
      if (Platform.OS === 'web') { performEvaluate(true); return; }
      Alert.alert(
        'Eksik Yanıtlar',
        `${total - filledCount} boşluk boş kaldı. Tüm soruları yanıtlamadan kontrol etmek istiyor musun?`,
        [
          { text: 'Geri Dön', style: 'cancel' },
          { text: 'Yine de Kontrol Et', onPress: () => performEvaluate(true) },
        ],
      );
    } else {
      performEvaluate(true);
    }
  }, [filledCount, total, performEvaluate]);

  function openReport(sentenceId: string) {
    setReportSentenceId(sentenceId);
    setReportNote('');
    setReportVisible(true);
  }

  async function submitReport() {
    if (!reportSentenceId) return;
    const sentence = card.sentences.find(s => s.id === reportSentenceId);
    if (!sentence) return;
    setReportSending(true);
    try {
      await sendReport('reports', {
        game: 'boşluk_doldurma',
        level,
        theme: card.theme,
        sentence: sentence.germanWithBlank,
        targetWord: sentence.targetWord,
        translationTR: sentence.translationTR ?? '',
        wordBankId: sentence.wordBankId ?? '',
        note: reportNote.trim(),
      });
      setReportedIds(prev => new Set(prev).add(reportSentenceId));
      setReportVisible(false);
      Alert.alert('Teşekkürler!', 'Hata bildirimin alındı, inceleyeceğiz.');
    } catch (e: any) {
      Alert.alert('Hata', `Gönderim başarısız: ${e?.code ?? e?.message ?? 'bilinmeyen hata'}`);
    } finally {
      setReportSending(false);
    }
  }

  async function captureAndShare() {
    try {
      const uri = await captureRef(shareRef, { format: 'png', quality: 0.95 });
      const canShare = await Sharing.isAvailableAsync();
      if (canShare) {
        await Sharing.shareAsync(uri, { mimeType: 'image/png', dialogTitle: 'Wortreise Kartını Paylaş' });
      } else {
        Alert.alert('Paylaşım Mevcut Değil', 'Bu cihazda paylaşım desteklenmiyor.');
      }
    } catch {
      Alert.alert('Hata', 'Paylaşım sırasında bir sorun oluştu.');
    }
  }

  const handleRestart = useCallback(() => {
    // Timer ran out and user skips results view — still record words
    if (timedOut) {
      const correctIds: string[] = [];
      const wrongIds: string[] = [];
      card.sentences.forEach(s => {
        if (!s.wordBankId) return;
        const slot = slots[s.id];
        const isCorrect = !!slot.filledWord && slot.filledWord.toLowerCase() === s.targetWord.toLowerCase();
        (isCorrect ? correctIds : wrongIds).push(s.wordBankId);
      });
      recordWordResults(level, correctIds, wrongIds);
    }

    const newCard = isReviewMode ? generateCard(5, [], reviewWordIds, level) : generateCard(5, masteredIds, undefined, level);
    setCard(newCard);
    setWordPool(buildWordPool(newCard));
    setSlots(buildEmptySlots(newCard));
    setPlacedWordIds(new Set());
    setSelectedWordId(null);
    setTimeLeft(duration);
    setPhase('answering');
    setTimedOut(false);
    setScoreData(null);

    setGoalJustMet(false);
    hasRecorded.current = false;
  }, [duration, isReviewMode, reviewWordIds, timedOut, card.sentences, slots]);

  const allSolved = phase === 'results' && solvedCount === total;
  const timerWarning = !isUnlimited && !allSolved && timeLeft <= 15 && timeLeft > 8;
  const timerDanger = !isUnlimited && !allSolved && (timeLeft <= 8 || timedOut);

  const timerColor =
    allSolved        ? C.success :
    timerDanger      ? C.danger :
    timerWarning     ? C.warning :
    phase === 'results' ? C.textDim :
                      C.primary;

  return (
    <SafeAreaView style={styles.safe}>
      <ScreenBackground />
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          style={styles.homeBtn}
        >
          <Text style={styles.homeBtnText}>⌂</Text>
        </TouchableOpacity>
        <View style={styles.headerCenter}>
          <View style={styles.themeRow}>
            <Text style={styles.themeName}>{card.theme}</Text>
            {isReviewMode && (
              <View style={styles.reviewBadge}>
                <Text style={styles.reviewBadgeText}>Tekrar</Text>
              </View>
            )}
          </View>
        </View>
        <View style={[styles.timerPill, { borderColor: timerColor }]}>
          <Text style={[styles.timerText, { color: timerColor }]}>
            {isUnlimited
              ? '∞'
              : allSolved ? formatTime(timeLeft)
              : phase === 'results' ? 'Süre bitti'
              : timedOut ? '0:00'
              : formatTime(timeLeft)}
          </Text>
        </View>
      </View>

      {/* Segment bar */}
      <View style={styles.segmentBar}>
        {card.sentences.map(s => {
          const slot = slots[s.id];
          const color =
            slot.isCorrect === true  ? C.success :
            slot.isCorrect === false ? C.danger :
            slot.isRevealed          ? C.revealed :
            slot.filledWord          ? C.warning :
                                       C.border;
          return <View key={s.id} style={[styles.segment, { backgroundColor: color }]} />;
        })}
      </View>

      {/* Action bar */}
      <View style={styles.actionBar}>
        <Text style={styles.actionProgressText}>
          {phase === 'results'
            ? `${solvedCount} / ${total} doğru`
            : `${filledCount} / ${total} dolduruldu`}
        </Text>
        <View style={styles.actionBtns}>
          {phase === 'answering' && !timedOut && (
            <TouchableOpacity style={[styles.actionBtn, styles.actionBtnPrimary]} onPress={handleKontrolEt}>
              <Text style={[styles.actionBtnText, styles.actionBtnTextPrimary]}>Kontrol Et</Text>
            </TouchableOpacity>
          )}
          {timedOut && (
            <>
              <TouchableOpacity style={styles.actionBtn} onPress={handleRestart}>
                <Text style={styles.actionBtnText}>Yeni Tur</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.actionBtn, styles.actionBtnPrimary]} onPress={() => performEvaluate(true)}>
                <Text style={[styles.actionBtnText, styles.actionBtnTextPrimary]}>Sonuçları Göster</Text>
              </TouchableOpacity>
            </>
          )}
          {phase === 'results' && (
            <>
              <TouchableOpacity style={styles.actionBtn} onPress={captureAndShare}>
                <Text style={styles.actionBtnText}>📤 Paylaş</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.actionBtn, styles.actionBtnPrimary]} onPress={handleRestart}>
                <Text style={[styles.actionBtnText, styles.actionBtnTextPrimary]}>Yeni Tur →</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>

      {/* Sentences */}
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {card.sentences.map((sentence, index) => (
          <View key={`${card.id}-${sentence.id}`}>
            <SentenceRow
              number={index + 1}
              sentence={sentence}
              selectedWord={selectedWord?.word ?? null}
              onBlankPress={handleBlankPress}
              filledWord={slots[sentence.id].filledWord}
              isCorrect={slots[sentence.id].isCorrect}
              showControls={phase === 'results'}
              correctionWord={
                phase === 'results' && slots[sentence.id].isCorrect !== true
                  ? sentence.targetWord
                  : undefined
              }
            />
            {phase === 'results' && (
              <TouchableOpacity
                style={styles.reportBtn}
                onPress={() => !reportedIds.has(sentence.id) && openReport(sentence.id)}
                disabled={reportedIds.has(sentence.id)}
                hitSlop={{ top: 6, bottom: 6, left: 6, right: 6 }}
              >
                <Text style={[
                  styles.reportBtnText,
                  reportedIds.has(sentence.id) && styles.reportBtnTextReported,
                ]}>
                  {reportedIds.has(sentence.id) ? '⚑ Hata bildirildi' : '⚑ Hata Bildir'}
                </Text>
              </TouchableOpacity>
            )}
          </View>
        ))}
      </ScrollView>

      {/* Bottom */}
      {phase === 'results' ? (
        <View>
          {wordPool.some(w => !placedWordIds.has(w.id)) && (
            <View style={styles.remainingPool}>
              <Text style={styles.remainingLabel}>KULLANILMADI</Text>
              <View style={styles.chipRow}>
                {wordPool.filter(w => !placedWordIds.has(w.id)).map(w => (
                  <WordChip key={w.id} word={w.word} placed={false} selected={false} onPress={() => {}} />
                ))}
              </View>
            </View>
          )}
          {goalJustMet && (
            <View style={styles.goalBanner}>
              <Text style={styles.goalBannerText}>🎯 Günlük hedef tamamlandı! 🔥</Text>
            </View>
          )}
        </View>
      ) : timedOut ? (
        <View style={styles.timedOutBar}>
          <Text style={styles.timedOutLabel}>⏱ Süre Doldu</Text>
          <Text style={styles.timedOutSub}>Yukarıdaki butonlardan devam edebilirsin</Text>
        </View>
      ) : (
        <View style={styles.pool}>
          <Text style={styles.poolLabel}>KELİMELER</Text>
          <View style={styles.chipRow}>
            {wordPool.map(w => (
              <WordChip
                key={w.id}
                word={w.word}
                selected={selectedWordId === w.id}
                placed={placedWordIds.has(w.id)}
                onPress={() => handleWordPress(w.id)}
              />
            ))}
          </View>
          {selectedWord && (
            <Text style={styles.hint}>
              „<Text style={styles.hintWord}>{selectedWord.word}</Text>" — Bir boşluğa dokun
            </Text>
          )}
        </View>
      )}

      {/* Achievement unlock modal */}
      <Modal
        visible={achModalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setAchModalVisible(false)}
      >
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
            <TouchableOpacity
              style={styles.achCloseBtn}
              onPress={() => setAchModalVisible(false)}
              activeOpacity={0.85}
            >
              <Text style={styles.achCloseBtnText}>Harika! →</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Report modal */}
      <Modal
        visible={reportVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setReportVisible(false)}
      >
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          <TouchableOpacity
            style={styles.reportOverlay}
            activeOpacity={1}
            onPress={() => setReportVisible(false)}
          />
          <View style={styles.reportSheet} onStartShouldSetResponder={() => true}>
            <View style={styles.reportHandle} />
            <Text style={styles.reportTitle}>Hata Bildir</Text>
            <Text style={styles.reportSub}>
              Bu cümleyle ilgili bir hata veya sorun mu var?
            </Text>
            {reportSentenceId && (() => {
              const s = card.sentences.find(x => x.id === reportSentenceId);
              return s ? (
                <View style={styles.reportSentenceBox}>
                  <Text style={styles.reportSentenceText}>{s.germanWithBlank.replace('___', `[${s.targetWord}]`)}</Text>
                </View>
              ) : null;
            })()}
            <TextInput
              style={styles.reportInput}
              placeholder="Hatayı açıkla…"
              placeholderTextColor={C.textFaint}
              value={reportNote}
              onChangeText={setReportNote}
              multiline
              maxLength={200}
            />
            <View style={styles.reportActions}>
              <TouchableOpacity style={styles.reportCancelBtn} onPress={() => setReportVisible(false)}>
                <Text style={styles.reportCancelText}>Vazgeç</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.reportSubmitBtn,
                  (reportSending || reportNote.trim().length === 0) && styles.reportSubmitBtnDisabled,
                ]}
                onPress={submitReport}
                disabled={reportSending || reportNote.trim().length === 0}
              >
                <Text style={styles.reportSubmitText}>{reportSending ? 'Gönderiliyor…' : 'Gönder'}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>

      {/* Off-screen share card — always rendered, captured when user presses Paylaş */}
      <View
        ref={shareRef}
        collapsable={false}
        pointerEvents="none"
        style={styles.shareCapture}
      >
        <View style={styles.shareCaptureInner}>
          <View style={styles.shareCaptureHeader}>
            <Text style={styles.shareCaptureFlag}>🇩🇪</Text>
            <View style={{ flex: 1 }}>
              <Text style={styles.shareCaptureAppName}>Wortreise</Text>
              <Text style={styles.shareCaptureTheme}>{card.theme}</Text>
            </View>
            <View style={styles.shareCaptureScore}>
              <Text style={styles.shareCaptureScoreText}>{solvedCount}/{total}</Text>
            </View>
          </View>
          <View style={styles.shareCaptureDivider} />
          {card.sentences.map((sentence, idx) => {
            const slot = slots[sentence.id];
            const correct = slot.isCorrect === true;
            const wrong = slot.isCorrect === false;
            const unanswered = !slot.filledWord && slot.isCorrect === null;
            const parts = sentence.germanWithBlank.split('___');
            const rawWord = slot.filledWord;
            const displayWord = rawWord
              ? (parts[0] === '' ? rawWord.charAt(0).toUpperCase() + rawWord.slice(1) : rawWord)
              : null;
            const shownWord = displayWord ?? sentence.targetWord;
            const accent = correct ? '#1A9E6E' : wrong ? '#DC2626' : '#8896B8';
            const wordColor = correct ? '#1A9E6E' : wrong ? '#DC2626' : '#8896B8';
            const bg = correct ? '#F0FAF6' : wrong ? '#FEF2F2' : '#F9FAFB';
            const border = correct ? 'rgba(26,158,110,0.28)' : wrong ? 'rgba(220,38,38,0.22)' : 'rgba(100,116,139,0.18)';
            return (
              <View key={sentence.id} style={[styles.shareCaptureSent, { borderLeftColor: accent, backgroundColor: bg, borderColor: border }]}>
                <View style={styles.shareCaptureSentRow}>
                  <Text style={styles.shareCaptureSentNum}>{idx + 1}. </Text>
                  <Text style={styles.shareCaptureSentText}>
                    {parts[0]}
                    <Text style={{ color: wordColor, fontWeight: '700' }}>{shownWord}</Text>
                    {parts.length > 1 ? parts[1] : ''}
                  </Text>
                </View>
                {wrong && <Text style={styles.shareCaptureSentCorr}>✓ {sentence.targetWord}</Text>}
              </View>
            );
          })}
          <View style={styles.shareCaptureDivider} />
          <Text style={styles.shareCaptureTagline}>Wortreise ile Almanca öğren! 🇩🇪</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },

  header: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    paddingHorizontal: 16, paddingVertical: 12,
    borderBottomWidth: 1, borderBottomColor: colors.glassBorder,
  },
  homeBtn: {
    backgroundColor: C.surface2, borderRadius: 12,
    width: 44, height: 44, alignItems: 'center', justifyContent: 'center',
    borderWidth: 1.5, borderColor: C.borderBright,
  },
  homeBtnText: { fontSize: 20, color: C.primary },
  headerCenter: { flex: 1, alignItems: 'center' },
  themeRow: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  themeName: { fontSize: 16, fontWeight: '800', color: C.text, letterSpacing: 0.2 },
  reviewBadge: {
    backgroundColor: 'rgba(220,38,38,0.10)', borderRadius: 6,
    paddingHorizontal: 6, paddingVertical: 2,
    borderWidth: 1, borderColor: 'rgba(220,38,38,0.25)',
  },
  reviewBadgeText: { fontSize: 9, fontWeight: '700', color: C.danger, letterSpacing: 0.5 },
  timerPill: {
    borderWidth: 1.5, borderRadius: 20,
    paddingHorizontal: 14, paddingVertical: 6, minWidth: 72, alignItems: 'center',
    backgroundColor: C.surface2,
  },
  timerText: { fontSize: 15, fontWeight: '800', letterSpacing: 0.5 },

  segmentBar: {
    flexDirection: 'row', paddingHorizontal: 16, paddingVertical: 10,
    gap: 4,
    borderBottomWidth: 1, borderBottomColor: colors.glassBorder,
  },
  segment: { flex: 1, height: 5, borderRadius: 3 },

  actionBar: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    paddingHorizontal: 16, paddingVertical: 8,
    borderBottomWidth: 1, borderBottomColor: colors.glassBorder,
  },
  actionProgressText: { fontSize: 13, fontWeight: '700', color: C.textDim, letterSpacing: 0.2 },
  actionBtns: { flexDirection: 'row', gap: 8 },
  actionBtn: {
    borderWidth: 1.5, borderColor: C.borderBright, borderRadius: 16,
    paddingHorizontal: 14, paddingVertical: 7, backgroundColor: C.surface,
  },
  actionBtnPrimary: {
    borderColor: C.primary, backgroundColor: C.primary,
    shadowColor: C.primary, shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2, shadowRadius: 6, elevation: 2,
  },
  actionBtnSuccess: { borderColor: 'rgba(26,158,110,0.4)', backgroundColor: 'rgba(26,158,110,0.09)' },
  actionBtnText: { fontSize: 12, fontWeight: '700', color: C.textDim, letterSpacing: 0.2 },
  actionBtnTextPrimary: { color: '#FFFFFF' },
  actionBtnTextSuccess: { color: C.success },

  scroll: { flex: 1 },
  scrollContent: { paddingVertical: 12, paddingHorizontal: 12, gap: 8 },

  pool: {
    backgroundColor: 'rgba(13,20,48,0.85)', paddingHorizontal: 16, paddingTop: 12, paddingBottom: 20,
    borderTopWidth: 1, borderTopColor: C.border, gap: 8,
  },
  poolLabel: { fontSize: 10, fontWeight: '700', color: C.primary, letterSpacing: 2 },
  chipRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 6 },
  hint: { fontSize: 12, color: C.textDim, letterSpacing: 0.1 },
  hintWord: { fontWeight: '700', color: C.primary },
  progressIndicator: { alignItems: 'center', paddingVertical: 4 },
  progressIndicatorText: { fontSize: 13, fontWeight: '600', color: C.textFaint, letterSpacing: 0.2 },
  progressIndicatorFull: { color: C.primary },

  remainingPool: {
    backgroundColor: 'rgba(13,20,48,0.85)', paddingHorizontal: 16, paddingTop: 10, paddingBottom: 12,
    borderTopWidth: 1, borderTopColor: C.border, gap: 8,
  },
  remainingLabel: { fontSize: 9, fontWeight: '700', color: C.textFaint, letterSpacing: 2 },
  pruefenBtn: {
    marginTop: 4, borderRadius: 12, paddingVertical: 14,
    backgroundColor: C.surface, alignItems: 'center',
    borderWidth: 1, borderColor: C.border,
  },
  pruefenBtnActive: {
    backgroundColor: C.primary, borderColor: C.primary,
    shadowColor: C.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2, shadowRadius: 8, elevation: 3,
  },
  pruefenText: { fontSize: 15, fontWeight: '800', color: C.textFaint },
  pruefenTextActive: { color: '#FFFFFF' },

  timedOutBar: {
    backgroundColor: 'rgba(13,20,48,0.85)', paddingHorizontal: 20, paddingTop: 14, paddingBottom: 20,
    borderTopWidth: 1, borderTopColor: C.border, alignItems: 'center', gap: 6,
  },
  timedOutLabel: { fontSize: 15, color: C.textDim, fontWeight: '700', letterSpacing: 0.3 },
  timedOutSub: { fontSize: 12, color: C.textFaint, fontWeight: '500', letterSpacing: 0.2 },
  ergebnisBtn: {
    backgroundColor: C.primary, borderRadius: 12,
    paddingVertical: 13, paddingHorizontal: 32,
    shadowColor: C.primary,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25, shadowRadius: 10, elevation: 4,
  },
  ergebnisBtnText: { color: '#fff', fontSize: 15, fontWeight: '700', letterSpacing: 0.3 },

  resultBar: {
    backgroundColor: C.surface, paddingHorizontal: 20, paddingTop: 16, paddingBottom: 24,
    borderTopWidth: 1, borderTopColor: C.border, gap: 14,
  },
  goalBanner: {
    backgroundColor: C.successBg, borderRadius: 10,
    paddingVertical: 8, paddingHorizontal: 12, alignItems: 'center',
    borderWidth: 1, borderColor: 'rgba(26,158,110,0.28)',
  },
  goalBannerText: { fontSize: 14, fontWeight: '700', color: C.success, letterSpacing: 0.2 },
  scoreRow: { flexDirection: 'row', alignItems: 'baseline' },
  correctBig: { fontSize: 36, fontWeight: '800', color: C.text, letterSpacing: -0.5 },
  scoreSlash: { fontSize: 22, color: C.textDim, fontWeight: '500' },
  correctLabel: {
    fontSize: 14, color: C.textDim, fontWeight: '600',
    alignSelf: 'flex-end', paddingBottom: 5, letterSpacing: 0.2,
  },
  resultActions: { flexDirection: 'row', gap: 10 },
  correctionBtn: {
    flex: 1, borderWidth: 1.5, borderColor: 'rgba(26,158,110,0.35)',
    borderRadius: 12, paddingVertical: 12, alignItems: 'center',
    backgroundColor: C.successBg,
  },
  correctionBtnText: { fontSize: 13, fontWeight: '700', color: C.success, letterSpacing: 0.2 },
  neuBtn: {
    flex: 1, backgroundColor: C.primary,
    borderRadius: 12, paddingVertical: 12, alignItems: 'center',
    shadowColor: C.primary,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25, shadowRadius: 10, elevation: 4,
  },
  neuBtnText: { color: '#fff', fontSize: 14, fontWeight: '800', letterSpacing: 0.3 },

  reportBtn: {
    alignSelf: 'flex-end', marginTop: 4, marginBottom: 2,
    paddingHorizontal: 10, paddingVertical: 4,
  },
  reportBtnText: { fontSize: 11, color: C.textFaint, fontWeight: '500', letterSpacing: 0.2 },
  reportBtnTextReported: { color: C.danger, fontWeight: '700' },

  reportOverlay: {
    flex: 1, backgroundColor: colors.backdrop,
  },
  reportSheet: {
    backgroundColor: colors.bgSheet,
    borderTopLeftRadius: 28, borderTopRightRadius: 28,
    paddingTop: 12, paddingHorizontal: 20, paddingBottom: 40,
    borderTopWidth: 1, borderColor: C.border,
    shadowColor: '#000', shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.08, shadowRadius: 16, elevation: 8,
    gap: 12,
  },
  reportHandle: {
    width: 40, height: 4, borderRadius: 2,
    backgroundColor: C.border, alignSelf: 'center', marginBottom: 4,
  },
  reportTitle: { fontSize: 18, fontWeight: '800', color: C.text, letterSpacing: 0.2 },
  reportSub: { fontSize: 13, color: C.textDim, fontWeight: '400', lineHeight: 19 },
  reportSentenceBox: {
    backgroundColor: C.surface2, borderRadius: 12,
    paddingHorizontal: 14, paddingVertical: 10,
    borderWidth: 1, borderColor: C.border,
  },
  reportSentenceText: { fontSize: 13, color: C.text, fontWeight: '600', lineHeight: 20 },
  reportInput: {
    backgroundColor: C.surface2, borderRadius: 12,
    paddingHorizontal: 14, paddingVertical: 12,
    fontSize: 14, color: C.text, fontWeight: '400',
    borderWidth: 1.5, borderColor: C.borderBright,
    minHeight: 72, textAlignVertical: 'top',
  },
  reportActions: { flexDirection: 'row', gap: 10, marginTop: 4 },
  reportCancelBtn: {
    flex: 1, borderRadius: 14, paddingVertical: 14, alignItems: 'center',
    borderWidth: 1.5, borderColor: C.border, backgroundColor: C.surface,
  },
  reportCancelText: { fontSize: 14, fontWeight: '700', color: C.textDim },
  reportSubmitBtn: {
    flex: 2, borderRadius: 14, paddingVertical: 14, alignItems: 'center',
    backgroundColor: C.danger,
    shadowColor: C.danger, shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2, shadowRadius: 8, elevation: 3,
  },
  reportSubmitText: { fontSize: 14, fontWeight: '800', color: '#fff', letterSpacing: 0.3 },
  reportSubmitBtnDisabled: { backgroundColor: C.border, shadowOpacity: 0, elevation: 0 },

  // Off-screen share card
  shareCapture: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 10000,
    padding: 16,
    backgroundColor: '#F0F3FF',
  },
  shareCaptureInner: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 18,
    gap: 10,
    borderWidth: 1,
    borderColor: '#DDE3F5',
    shadowColor: '#3B5BDB',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.10,
    shadowRadius: 16,
    elevation: 6,
  },
  shareCaptureHeader: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  shareCaptureFlag: { fontSize: 28 },
  shareCaptureAppName: { fontSize: 16, fontWeight: '800', color: '#1A2340', letterSpacing: 0.2 },
  shareCaptureTheme: { fontSize: 12, fontWeight: '600', color: '#8896B8', letterSpacing: 0.4, marginTop: 1 },
  shareCaptureScore: {
    backgroundColor: '#EEF1FF', borderRadius: 10,
    paddingHorizontal: 10, paddingVertical: 5,
    borderWidth: 1, borderColor: '#DDE3F5',
  },
  shareCaptureScoreText: { fontSize: 16, fontWeight: '800', color: '#3B5BDB' },
  shareCaptureDivider: { height: 1, backgroundColor: '#EEF1FF' },
  shareCaptureSent: {
    borderRadius: 12, borderLeftWidth: 4,
    paddingLeft: 12, paddingRight: 14, paddingVertical: 11,
    borderWidth: 1,
  },
  shareCaptureSentRow: { flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start' },
  shareCaptureSentNum: { fontSize: 14, fontWeight: '800', color: '#0F172A', lineHeight: 22 },
  shareCaptureSentText: { flex: 1, fontSize: 14, color: '#0F172A', lineHeight: 22, fontWeight: '500' },
  shareCaptureSentCorr: { fontSize: 12, color: '#1A9E6E', fontWeight: '600', marginTop: 3 },
  shareCaptureTagline: {
    fontSize: 13, color: '#8896B8', fontWeight: '500',
    textAlign: 'center', letterSpacing: 0.2,
  },

  // Achievement modal
  achOverlay: {
    flex: 1, backgroundColor: colors.backdrop,
    alignItems: 'center', justifyContent: 'center', paddingHorizontal: 28,
  },
  achSheet: {
    backgroundColor: colors.bgSheet, borderRadius: 24, padding: 24, gap: 14,
    width: '100%',
    borderWidth: 1, borderColor: 'rgba(59,91,219,0.28)',
    shadowColor: C.primary, shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.18, shadowRadius: 24, elevation: 10,
  },
  achSheetTitle: { fontSize: 22, fontWeight: '800', color: C.text, textAlign: 'center', letterSpacing: 0.1 },
  achSheetSub: { fontSize: 14, color: C.textDim, textAlign: 'center', fontWeight: '500', marginTop: -6 },
  achRow: {
    flexDirection: 'row', alignItems: 'center', gap: 14,
    backgroundColor: C.primaryBg, borderRadius: 14, padding: 14,
    borderWidth: 1, borderColor: 'rgba(59,91,219,0.2)',
  },
  achRowEmoji: { fontSize: 34 },
  achRowTitle: { fontSize: 15, fontWeight: '800', color: C.text, letterSpacing: 0.1 },
  achRowDesc: { fontSize: 12, color: C.textDim, fontWeight: '400', marginTop: 2 },
  achCloseBtn: {
    backgroundColor: C.primary, borderRadius: 14, paddingVertical: 16, alignItems: 'center',
    shadowColor: C.primary, shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.28, shadowRadius: 12, elevation: 5,
    marginTop: 4,
  },
  achCloseBtnText: { fontSize: 16, fontWeight: '800', color: '#fff', letterSpacing: 0.4 },
});
