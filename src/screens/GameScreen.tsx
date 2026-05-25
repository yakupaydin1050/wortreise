import React, { useState, useCallback, useEffect, useRef } from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert, Modal,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { generateCard, getDistractors } from '../data/generateCard';
import { loadProfile, recordCardCompleted, recordWordResults, shouldPromptReview, UserProfile } from '../utils/storage';
import * as StoreReview from 'expo-store-review';
import { captureRef } from 'react-native-view-shot';
import * as Sharing from 'expo-sharing';
import SentenceRow from '../components/SentenceRow';
import WordChip from '../components/WordChip';
import GridBackground from '../components/GridBackground';

const C = {
  bg: '#F8F9FE',
  surface: '#FFFFFF',
  surface2: '#EEF1FF',
  border: '#DDE3F5',
  borderBright: '#B8C4E8',
  primary: '#3B5BDB',
  primaryBg: 'rgba(59,91,219,0.10)',
  text: '#1A2340',
  textDim: '#4E5C80',
  textFaint: '#8896B8',
  success: '#1A9E6E',
  successBg: 'rgba(26,158,110,0.12)',
  warning: '#D97706',
  danger: '#DC2626',
  revealed: '#C8D0E8',
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
  const [shareVisible, setShareVisible] = useState(false);
  const hasRecorded = useRef(false);
  const shareRef = useRef<View>(null);

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
      recordCardCompleted(correctCount, profile.dailyGoal).then(({ goalJustMet: met }) => {
        setGoalJustMet(met);
        shouldPromptReview().then(yes => {
          if (yes) StoreReview.isAvailableAsync().then(ok => { if (ok) StoreReview.requestReview(); });
        });
      });
    }
  }, [card.sentences, slots, profile]);

  const handleKontrolEt = useCallback(() => {
    if (filledCount === 0) {
      Alert.alert(
        'Hiçbir boşluk doldurulmadı',
        'Henüz hiçbir soruyu yanıtlamadın.\n\nBu kart günlük hedefe sayılmaz. Yine de devam etmek istiyor musun?',
        [
          { text: 'Geri Dön', style: 'cancel' },
          { text: 'Devam Et', onPress: () => performEvaluate(false) },
        ],
      );
    } else if (filledCount < total) {
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

  function buildFullSentence(germanWithBlank: string, word: string): string {
    const parts = germanWithBlank.split('___');
    if (parts.length < 2) return germanWithBlank;
    const displayWord = parts[0] === '' ? word.charAt(0).toUpperCase() + word.slice(1) : word;
    return parts[0] + displayWord + (parts[1] ?? '');
  }

  async function captureAndShare() {
    try {
      const uri = await captureRef(shareRef, { format: 'png', quality: 0.95 });
      setShareVisible(false);
      await new Promise(r => setTimeout(r, 300));
      const canShare = await Sharing.isAvailableAsync();
      if (canShare) {
        await Sharing.shareAsync(uri, { mimeType: 'image/png', dialogTitle: 'Wortreise Kartını Paylaş' });
      } else {
        Alert.alert('Paylaşım Mevcut Değil', 'Bu cihazda paylaşım desteklenmiyor.');
      }
    } catch {
      setShareVisible(false);
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
      <GridBackground />
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
              <TouchableOpacity style={styles.actionBtn} onPress={() => setShareVisible(true)}>
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
          <SentenceRow
            key={`${card.id}-${sentence.id}`}
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

      {/* Share modal */}
      <Modal
        visible={shareVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setShareVisible(false)}
      >
        <View style={styles.shareOverlay}>
          <View style={styles.shareModalWrap}>
            <View ref={shareRef} collapsable={false} style={styles.shareCard}>
              <View style={styles.shareCardHeader}>
                <Text style={styles.shareCardFlag}>🇩🇪</Text>
                <View style={{ flex: 1 }}>
                  <Text style={styles.shareCardAppName}>Wortreise</Text>
                  <Text style={styles.shareCardTheme}>{card.theme}</Text>
                </View>
                <View style={styles.shareScoreBadge}>
                  <Text style={styles.shareScoreBadgeText}>{solvedCount}/{total}</Text>
                </View>
              </View>
              <View style={styles.shareCardDivider} />
              {card.sentences.map((sentence, i) => {
                const slot = slots[sentence.id];
                const correct = slot.isCorrect === true;
                const usedWord = slot.filledWord ?? sentence.targetWord;
                const fullSentence = buildFullSentence(sentence.germanWithBlank, usedWord);
                return (
                  <View key={sentence.id} style={[styles.shareSentRow, { borderLeftColor: correct ? '#1A9E6E' : '#DC2626' }]}>
                    <Text style={[styles.shareSentMark, { color: correct ? '#1A9E6E' : '#DC2626' }]}>
                      {correct ? '✓' : '✗'}
                    </Text>
                    <Text style={[styles.shareSentText, { color: correct ? '#1A2340' : '#DC2626' }]} numberOfLines={2}>
                      {fullSentence}
                    </Text>
                  </View>
                );
              })}
              <View style={styles.shareCardDivider} />
              <Text style={styles.shareCardTagline}>Wortreise ile Almanca öğren! 🇩🇪</Text>
            </View>
            <View style={styles.shareActionRow}>
              <TouchableOpacity style={styles.shareCancelBtn} onPress={() => setShareVisible(false)}>
                <Text style={styles.shareCancelBtnText}>Kapat</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.shareConfirmBtn} onPress={captureAndShare}>
                <Text style={styles.shareConfirmBtnText}>Paylaş 📤</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: 'rgba(59,91,219,0.07)' },

  header: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    paddingHorizontal: 16, paddingVertical: 12,
    backgroundColor: 'rgba(59,91,219,0.07)',
    borderBottomWidth: 1, borderBottomColor: 'rgba(59,91,219,0.2)',
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
    gap: 4, backgroundColor: 'rgba(59,91,219,0.07)',
    borderBottomWidth: 1, borderBottomColor: 'rgba(59,91,219,0.2)',
  },
  segment: { flex: 1, height: 5, borderRadius: 3 },

  actionBar: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    paddingHorizontal: 16, paddingVertical: 8,
    backgroundColor: 'rgba(59,91,219,0.07)',
    borderBottomWidth: 1, borderBottomColor: 'rgba(59,91,219,0.2)',
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
    backgroundColor: C.surface, paddingHorizontal: 16, paddingTop: 12, paddingBottom: 20,
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
    backgroundColor: C.surface, paddingHorizontal: 16, paddingTop: 10, paddingBottom: 12,
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
    backgroundColor: C.surface, paddingHorizontal: 20, paddingTop: 14, paddingBottom: 20,
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

  shareOverlay: {
    flex: 1, backgroundColor: 'rgba(10,20,60,0.55)',
    justifyContent: 'center', alignItems: 'center', padding: 20,
  },
  shareModalWrap: { width: '100%', maxWidth: 380, gap: 14 },
  shareCard: {
    backgroundColor: '#FFFFFF', borderRadius: 20, padding: 18, gap: 10,
    borderWidth: 1, borderColor: '#DDE3F5',
    shadowColor: '#3B5BDB', shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15, shadowRadius: 20, elevation: 8,
  },
  shareCardHeader: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  shareCardFlag: { fontSize: 26 },
  shareCardAppName: { fontSize: 15, fontWeight: '800', color: '#1A2340', letterSpacing: 0.2 },
  shareCardTheme: { fontSize: 11, fontWeight: '600', color: '#8896B8', letterSpacing: 0.5, marginTop: 1 },
  shareScoreBadge: {
    backgroundColor: '#EEF1FF', borderRadius: 10,
    paddingHorizontal: 10, paddingVertical: 5,
    borderWidth: 1, borderColor: '#DDE3F5',
  },
  shareScoreBadgeText: { fontSize: 15, fontWeight: '800', color: '#3B5BDB' },
  shareCardDivider: { height: 1, backgroundColor: '#EEF1FF' },
  shareSentRow: {
    flexDirection: 'row', alignItems: 'flex-start', gap: 8,
    paddingLeft: 8, borderLeftWidth: 3,
  },
  shareSentMark: { fontSize: 13, fontWeight: '700', lineHeight: 20, width: 16 },
  shareSentText: { flex: 1, fontSize: 13, fontWeight: '500', lineHeight: 19 },
  shareCardTagline: {
    fontSize: 12, color: '#8896B8', fontWeight: '500',
    textAlign: 'center', letterSpacing: 0.2,
  },
  shareActionRow: { flexDirection: 'row', gap: 10 },
  shareCancelBtn: {
    flex: 1, borderRadius: 14, paddingVertical: 14, alignItems: 'center',
    borderWidth: 1.5, borderColor: '#DDE3F5', backgroundColor: '#FFFFFF',
  },
  shareCancelBtnText: { fontSize: 14, fontWeight: '700', color: '#4E5C80' },
  shareConfirmBtn: {
    flex: 2, borderRadius: 14, paddingVertical: 14, alignItems: 'center',
    backgroundColor: '#3B5BDB',
    shadowColor: '#3B5BDB', shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25, shadowRadius: 10, elevation: 4,
  },
  shareConfirmBtnText: { fontSize: 14, fontWeight: '800', color: '#FFFFFF', letterSpacing: 0.3 },
});
