import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
  Animated, Dimensions, ScrollView,
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { recordHafizaGame, shouldPromptReview } from '../utils/storage';
import * as StoreReview from 'expo-store-review';
import type { LevelId } from '../utils/storage';
import { wordsByLevel } from '../data/generateCard';
import type { WordEntry } from '../data/wordBank';
import GridBackground from '../components/GridBackground';

type Difficulty = '4x3' | '4x4';
const PAIR_COUNTS: Record<Difficulty, number> = { '4x3': 6, '4x4': 8 };
const BEST_KEY_FOR = (d: Difficulty, lvl: LevelId) => `@lernspiel_hafiza_best_${d}_${lvl}`;

const { width: SCREEN_W, height: SCREEN_H } = Dimensions.get('window');
const COLS = 4;
const GAP = 8;
const H_PAD = 16;
const CARD_W = Math.floor((SCREEN_W - H_PAD * 2 - GAP * (COLS - 1)) / COLS);
// CARD_H is computed dynamically in the component using screen height + safe area insets

const C = {
  bg: '#F8F9FE', surface: '#FFFFFF',
  border: '#DDE3F5',
  primary: '#6366F1',
  primaryBg: 'rgba(99,102,241,0.10)',
  text: '#1A2340', textDim: '#4E5C80', textFaint: '#8896B8',
  success: '#1A9E6E', successBg: 'rgba(26,158,110,0.12)',
  warning: '#D97706', warningBg: 'rgba(217,119,6,0.10)',
};

interface WordPair { id: string; german: string; tr: string }

function buildPairsForBank(bank: WordEntry[]): WordPair[] {
  const m: Record<string, string> = {};
  for (const e of bank) {
    for (const s of e.sentences) {
      if (!s.glossary) continue;
      for (const [k, v] of Object.entries(s.glossary as Record<string, { tr: string; de?: string; trDict?: string }>)) {
        const bestTR = v.trDict ?? v.tr;
        if (!m[k]) m[k] = bestTR;
        if (v.de && !m[v.de.toLowerCase()]) m[v.de.toLowerCase()] = bestTR;
      }
    }
  }
  return bank
    .map(e => {
      const bare = e.word.replace(/^(der|die|das) /i, '');
      const tr = m[bare.toLowerCase()] || m[e.word.toLowerCase()] || e.tr || '';
      return tr ? { id: e.id, german: e.word, tr } : null;
    })
    .filter((x): x is WordPair => x !== null);
}

const COLOR_SETS: Record<Difficulty, string[]> = {
  '4x3': ['#DC2626', '#2563EB', '#16A34A', '#EA580C', '#7C3AED', '#0891B2'],
  '4x4': ['#DC2626', '#2563EB', '#16A34A', '#EA580C', '#7C3AED', '#0891B2', '#DB2777', '#65A30D'],
};

const DIFF_LABELS: Record<Difficulty, { grid: string; sub: string }> = {
  '4x3': { grid: '4×3', sub: 'Kolay · 6 çift' },
  '4x4': { grid: '4×4', sub: 'Orta · 8 çift' },
};

function hexToRgba(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

interface MemCard {
  uid: string;
  pairId: string;
  word: string;
  lang: 'de' | 'tr';
  isFlipped: boolean;
  isMatched: boolean;
  color: string;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildDeck(count: number, colors: string[], allPairs: WordPair[]): MemCard[] {
  const pairs = shuffle(allPairs).slice(0, count);
  const cards: MemCard[] = [];
  pairs.forEach((p: WordPair, i: number) => {
    const color = colors[i % colors.length];
    cards.push({ uid: `de-${p.id}`, pairId: p.id, word: p.german, lang: 'de', isFlipped: false, isMatched: false, color });
    cards.push({ uid: `tr-${p.id}`, pairId: p.id, word: p.tr, lang: 'tr', isFlipped: false, isMatched: false, color });
  });
  return shuffle(cards);
}

function formatTime(secs: number): string {
  const m = Math.floor(secs / 60);
  const s = secs % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

// ── FlipCard component ────────────────────────────────────────────────────────

function FlipCard({ card, onPress, cardH, cardW, celebratePair }: { card: MemCard; onPress: () => void; cardH: number; cardW: number; celebratePair?: { pairId: string; color: string } | null }) {
  const anim = useRef(new Animated.Value(card.isFlipped || card.isMatched ? 1 : 0)).current;
  const pop = useRef(new Animated.Value(1)).current;
  const confetti = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(anim, {
      toValue: card.isFlipped || card.isMatched ? 1 : 0,
      duration: 260,
      useNativeDriver: true,
    }).start();
  }, [card.isFlipped, card.isMatched]);

  const frontRotate = anim.interpolate({
    inputRange: [0, 0.5], outputRange: ['0deg', '90deg'], extrapolate: 'clamp',
  });
  const backRotate = anim.interpolate({
    inputRange: [0.5, 1], outputRange: ['-90deg', '0deg'], extrapolate: 'clamp',
  });
  const frontOpacity = anim.interpolate({
    inputRange: [0, 0.45, 0.5, 1], outputRange: [1, 1, 0, 0],
  });
  const backOpacity = anim.interpolate({
    inputRange: [0, 0.5, 0.55, 1], outputRange: [0, 0, 1, 1],
  });

  const isOpen = card.isFlipped || card.isMatched;
  const dynamicFace = isOpen ? {
    backgroundColor: hexToRgba(card.color, 0.11),
    borderColor: card.color,
    shadowColor: card.color,
    shadowOffset: { width: 0, height: 1 } as const,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 2,
  } : {};

  // celebration pop + confetti when this card's pair matched
  useEffect(() => {
    if (!celebratePair || celebratePair.pairId !== card.pairId) return;
    pop.setValue(1);
    confetti.setValue(0);
    Animated.parallel([
      Animated.spring(pop, { toValue: 1.12, useNativeDriver: true, friction: 6 }),
      Animated.timing(confetti, { toValue: 1, duration: 700, useNativeDriver: true }),
    ]).start(() => {
      Animated.spring(pop, { toValue: 1, useNativeDriver: true, friction: 8 }).start();
    });
  }, [celebratePair]);

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={card.isFlipped || card.isMatched}
      activeOpacity={0.75}
    >
      <View style={[cardStyles.wrapper, { width: cardW, height: cardH }]}> 
        {/* Back face */}
        <Animated.View style={[
          cardStyles.face, cardStyles.faceBack, { height: cardH },
          { opacity: frontOpacity, transform: [{ perspective: 800 }, { rotateY: frontRotate }] },
        ]}>
          <Text style={cardStyles.backSymbol}>✦</Text>
        </Animated.View>

        {/* Front face */}
        <Animated.View style={[
          StyleSheet.absoluteFill, cardStyles.face, cardStyles.faceFront, { width: cardW, height: cardH }, dynamicFace,
          { opacity: backOpacity, transform: [{ perspective: 800 }, { rotateY: backRotate }, { scale: pop }] },
        ]}>
          <Text style={cardStyles.langFlag}>
            {card.lang === 'de' ? '🇩🇪' : '🇹🇷'}
          </Text>
          <Text
            style={[cardStyles.word, isOpen && { color: card.color }]}
            numberOfLines={3}
            adjustsFontSizeToFit
            minimumFontScale={0.78}
            allowFontScaling={false}
          >
            {card.word}
          </Text>
          {card.isMatched && <Text style={[cardStyles.checkmark, { color: card.color }]}>✓</Text>}

          {/* simple confetti dots */}
          {celebratePair && celebratePair.pairId === card.pairId && (
            <Animated.View pointerEvents="none" style={[cardStyles.confettiContainer, { height: cardH }] }>
              {new Array(6).fill(0).map((_, i) => {
                const angle = (i - 3) * 18;
                const tx = confetti.interpolate({ inputRange: [0, 1], outputRange: [0, Math.cos(angle * Math.PI / 180) * 40] });
                const ty = confetti.interpolate({ inputRange: [0, 1], outputRange: [0, -Math.abs(Math.sin(angle * Math.PI / 180)) * 48 - 20] });
                const opa = confetti.interpolate({ inputRange: [0, 0.7, 1], outputRange: [1, 1, 0] });
                const color = i % 2 === 0 ? card.color : '#FFD166';
                return (
                  <Animated.View key={i} style={{ position: 'absolute', left: cardW / 2 - 6, top: cardH / 2 - 6, transform: [{ translateX: tx }, { translateY: ty }], opacity: opa, width: 12, height: 12, borderRadius: 6, backgroundColor: color }} />
                );
              })}
            </Animated.View>
          )}
        </Animated.View>
      </View>
    </TouchableOpacity>
  );
}
const cardStyles = StyleSheet.create({
  wrapper: { width: CARD_W },
  face: {
    width: CARD_W,
    borderRadius: 12, alignItems: 'center', justifyContent: 'center',
    paddingHorizontal: 8, paddingVertical: 10, borderWidth: 1.5, gap: 6,
  },
  faceBack: {
    backgroundColor: C.primary,
    borderColor: 'rgba(99,102,241,0.6)',
    shadowColor: C.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.35, shadowRadius: 4, elevation: 3,
  },
  backSymbol: { fontSize: 20, color: 'rgba(255,255,255,0.65)' },
  faceFront: {
    backgroundColor: C.surface,
    borderColor: 'rgba(99,102,241,0.2)',
  },
  langFlag: { fontSize: 13 },
  word: {
    fontSize: 15, fontWeight: '700', color: C.text,
    textAlign: 'center', letterSpacing: 0.1, lineHeight: 22,
  },
  checkmark: { fontSize: 11, fontWeight: '800' },
  confettiContainer: { position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 },
});

// ── Main screen ───────────────────────────────────────────────────────────────

export default function HafizaScreen({ navigation }: { navigation: any }) {
  const insets = useSafeAreaInsets();
  const [phase, setPhase] = useState<'start' | 'playing' | 'reviewing' | 'result'>('start');
  const [level, setLevel] = useState<LevelId>('A1');
  const [difficulty, setDifficulty] = useState<Difficulty>('4x4');
  const [cards, setCards] = useState<MemCard[]>([]);

  const allPairs = useMemo(() => buildPairsForBank(wordsByLevel[level]), [level]);
  const [flipped, setFlipped] = useState<string[]>([]);
  const [locked, setLocked] = useState(false);
  const [time, setTime] = useState(0);
  const [moves, setMoves] = useState(0);
  const [celebratePair, setCelebratePair] = useState<{ pairId: string; color: string } | null>(null);
  const [best, setBest] = useState<number | null>(null);
  const [isNewRecord, setIsNewRecord] = useState(false);
  const timeRef = useRef(0);
  const wasForcedRef = useRef(false);
  const [wasAbandoned, setWasAbandoned] = useState(false);
  const [completedTime, setCompletedTime] = useState<number | null>(null);

  const pairCount = PAIR_COUNTS[difficulty];
  const rows = pairCount === 6 ? 3 : 4;
  const cardW = Math.floor((SCREEN_W - H_PAD * 2 - GAP * (COLS - 1)) / COLS);
  const cardH = Math.min(
    Math.floor((SCREEN_H - insets.top - insets.bottom - 58 - 40 - 32 - GAP * (rows - 1)) / rows),
    Math.round(cardW * 1.8),
  );

  useEffect(() => { timeRef.current = time; }, [time]);

  useEffect(() => {
    if (phase !== 'start') return;
    AsyncStorage.getItem(BEST_KEY_FOR(difficulty, level)).then(v => {
      setBest(v ? parseInt(v, 10) : null);
    });
  }, [difficulty, level, phase]);

  useEffect(() => {
    if (phase !== 'playing') return;
    const id = setInterval(() => setTime(t => t + 1), 1000);
    return () => clearInterval(id);
  }, [phase]);

  const matchedCount = cards.filter(c => c.isMatched).length;

  useEffect(() => {
    if (phase !== 'playing' || matchedCount < pairCount * 2) return;
    setCompletedTime(timeRef.current);
    setPhase('reviewing');
  }, [matchedCount, phase, pairCount]);

  // Save record immediately when game ends, regardless of which button the user presses next.
  useEffect(() => {
    if (completedTime === null || wasForcedRef.current) return;
    const isNew = best === null || completedTime < best;
    if (isNew) {
      AsyncStorage.setItem(BEST_KEY_FOR(difficulty, level), String(completedTime));
      setBest(completedTime);
    }
    setIsNewRecord(isNew);
    recordHafizaGame(completedTime, moves);
    shouldPromptReview().then(yes => {
      if (yes) StoreReview.isAvailableAsync().then(ok => { if (ok) StoreReview.requestReview(); });
    });
  }, [completedTime]); // eslint-disable-line react-hooks/exhaustive-deps

  const startGame = useCallback(() => {
    setCards(buildDeck(PAIR_COUNTS[difficulty], COLOR_SETS[difficulty], allPairs));
    setFlipped([]);
    setLocked(false);
    setTime(0);
    setMoves(0);
    setIsNewRecord(false);
    setWasAbandoned(false);
    setCompletedTime(null);
    wasForcedRef.current = false;
    setPhase('playing');
  }, [difficulty, allPairs]);

  const forceFinish = useCallback(() => {
    wasForcedRef.current = true;
    setWasAbandoned(true);
    setLocked(true);
    setCards(prev => prev.map(c => ({ ...c, isFlipped: true, isMatched: true })));
  }, []);

  const handleContinue = useCallback(() => {
    if (wasForcedRef.current) {
      setIsNewRecord(false);
    }
    setPhase('result');
  }, []);

  const handlePress = useCallback((uid: string) => {
    if (locked || phase !== 'playing') return;
    setCards(prev => {
      const card = prev.find(c => c.uid === uid);
      if (!card || card.isFlipped || card.isMatched) return prev;

      const updated = prev.map(c => c.uid === uid ? { ...c, isFlipped: true } : c);

      setFlipped(prevFlipped => {
        if (prevFlipped.length === 0) return [uid];

        const firstUid = prevFlipped[0];
        const firstCard = prev.find(c => c.uid === firstUid)!;
        setMoves(m => m + 1);
        setLocked(true);

        if (firstCard.pairId === card.pairId) {
          // trigger celebration for this pair
          setCelebratePair({ pairId: card.pairId, color: card.color });
          setTimeout(() => {
            setCards(p => p.map(c =>
              c.uid === firstUid || c.uid === uid ? { ...c, isFlipped: true, isMatched: true } : c,
            ));
            setLocked(false);
            // clear celebration shortly after
            setTimeout(() => setCelebratePair(null), 700);
          }, 500);
        } else {
          setTimeout(() => {
            setCards(p => p.map(c =>
              c.uid === firstUid || c.uid === uid ? { ...c, isFlipped: false } : c,
            ));
            setLocked(false);
          }, 900);
        }
        return [];
      });

      return updated;
    });
  }, [locked, phase]);

  const header = (sub?: string, onBack?: () => void) => (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={onBack ?? (() => navigation.goBack())}
        style={styles.backBtn}
        hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
      >
        <Text style={styles.backBtnText}>←</Text>
      </TouchableOpacity>
      <View style={styles.headerCenter}>
        <Text style={styles.headerTitle}>Hafıza</Text>
        {sub ? <Text style={styles.headerSub}>{sub}</Text> : null}
      </View>
      <View style={{ width: 44 }} />
    </View>
  );

  // ── START ───────────────────────────────────────────────────────────────────
  if (phase === 'start') {
    const availableDiffs = level === 'B1' ? (['4x3'] as Difficulty[]) : (['4x3', '4x4'] as Difficulty[]);
    return (
      <SafeAreaView style={styles.safe}>
        <GridBackground />
        {header('Almanca ↔ Türkçe')}
        <ScrollView contentContainerStyle={styles.startBody} showsVerticalScrollIndicator={false}>
          <Text style={styles.startIcon}>🃏</Text>
          <Text style={styles.startTitle}>Hafıza</Text>
          <Text style={styles.startSub}>
            Kartları çevir, Almanca-Türkçe eşleşmeleri bul.{'\n'}En hızlı tamamlama süren kayıt edilir.
          </Text>

          <Text style={styles.sectionLabel}>SEVİYE</Text>
          <View style={styles.levelRow}>
            {(['A1', 'A2', 'B1'] as LevelId[]).map(lvl => {
              const active = level === lvl;
              const hasData = wordsByLevel[lvl].length > 0;
              return (
                <TouchableOpacity key={lvl}
                  style={[styles.levelBtn, active && styles.levelBtnActive, !hasData && { opacity: 0.45 }]}
                  onPress={() => { if (!hasData) return; setLevel(lvl); if (lvl === 'B1') setDifficulty('4x3'); }}
                  activeOpacity={hasData ? 0.7 : 1}>
                  <Text style={[styles.levelBtnText, active && styles.levelBtnTextActive]}>{lvl}</Text>
                  {!hasData && <Text style={styles.levelBtnSoon}>yakında</Text>}
                </TouchableOpacity>
              );
            })}
          </View>

          <Text style={styles.sectionLabel}>ZORLUK</Text>
          <View style={styles.diffRow}>
            {availableDiffs.map(d => {
              const active = d === difficulty;
              const lbl = DIFF_LABELS[d];
              return (
                <TouchableOpacity
                  key={d}
                  style={[styles.diffBtn, active && styles.diffBtnActive]}
                  onPress={() => setDifficulty(d)}
                  activeOpacity={0.75}
                >
                  <Text style={[styles.diffGrid, active && styles.diffGridActive]}>{lbl.grid}</Text>
                  <Text style={[styles.diffSub, active && styles.diffSubActive]}>{lbl.sub}</Text>
                </TouchableOpacity>
              );
            })}
          </View>

          <View style={styles.bestCard}>
            <Text style={styles.bestLabel}>🏆 EN İYİ SÜRE</Text>
            {best !== null ? (
              <Text style={styles.bestTime}>{formatTime(best)}</Text>
            ) : (
              <>
                <Text style={styles.bestEmpty}>Henüz rekor yok</Text>
                <Text style={styles.bestEmptySub}>İlk oyunu başlat!</Text>
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

  // ── RESULT ──────────────────────────────────────────────────────────────────
  if (phase === 'result') {
    const displayTime = completedTime ?? time;
    return (
      <SafeAreaView style={styles.safe}>
        <GridBackground />
        {header(wasAbandoned ? 'Çözümler' : 'Tebrikler!', () => setPhase('start'))}
        <View style={styles.resultBody}>
          <Text style={styles.resultIcon}>{wasAbandoned ? '💡' : '🎉'}</Text>
          <Text style={styles.resultTimeNum}>{formatTime(displayTime)}</Text>
          <Text style={styles.resultTimeLabel}>{wasAbandoned ? 'geçen süre' : 'sürede tamamladın'}</Text>
          <Text style={styles.resultMoves}>{moves} deneme</Text>
          {!wasAbandoned && isNewRecord ? (
            <View style={styles.newRecordBadge}>
              <Text style={styles.newRecordText}>🏆 Yeni Rekor!</Text>
            </View>
          ) : !wasAbandoned && best !== null ? (
            <View style={styles.prevRecord}>
              <Text style={styles.prevRecordText}>Rekor: {formatTime(best)}</Text>
            </View>
          ) : null}
          <TouchableOpacity style={styles.startBtn} onPress={startGame} activeOpacity={0.85}>
            <Text style={styles.startBtnText}>Tekrar Oyna →</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  // ── REVIEWING ────────────────────────────────────────────────────────────────
  if (phase === 'reviewing') {
    return (
      <SafeAreaView style={styles.safe}>
        <GridBackground />
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => setPhase('start')}
            style={styles.backBtn}
            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          >
            <Text style={styles.backBtnText}>←</Text>
          </TouchableOpacity>
          <View style={styles.headerCenter}>
            <Text style={styles.headerTitle}>Hafıza</Text>
            <Text style={styles.headerSub}>
              {formatTime(completedTime ?? time)} · {moves} deneme
            </Text>
          </View>
          <TouchableOpacity style={styles.continueBtn} onPress={handleContinue} activeOpacity={0.85}>
            <Text style={styles.continueBtnText}>Devam →</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.gridContainer}>
          <View style={styles.grid}>
            {cards.map(card => (
            <FlipCard key={card.uid} card={card} onPress={() => {}} cardH={cardH} cardW={cardW} celebratePair={celebratePair} />
            ))}
          </View>
        </View>
      </SafeAreaView>
    );
  }

  // ── PLAYING ─────────────────────────────────────────────────────────────────
  return (
    <SafeAreaView style={styles.safe}>
      <GridBackground />
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => setPhase('start')}
          style={styles.backBtn}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
        >
          <Text style={styles.backBtnText}>←</Text>
        </TouchableOpacity>
        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>Hafıza</Text>
          <Text style={styles.headerSub}>
            {matchedCount / 2}/{pairCount} eşleşme · {moves} deneme
          </Text>
        </View>
        <View style={styles.timerPill}>
          <Text style={styles.timerText}>{formatTime(time)}</Text>
        </View>
      </View>

      <View style={styles.actionBar}>
        <TouchableOpacity style={styles.finishBtn} onPress={forceFinish} activeOpacity={0.8}>
          <Text style={styles.finishBtnText}>Oyunu Bitir</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.gridContainer}>
        <View style={styles.grid}>
          {cards.map(card => (
            <FlipCard key={card.uid} card={card} onPress={() => handlePress(card.uid)} cardH={cardH} cardW={cardW} celebratePair={celebratePair} />
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: 'rgba(99,102,241,0.07)' },

  header: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingHorizontal: 16, paddingVertical: 12,
    backgroundColor: 'rgba(99,102,241,0.07)',
    borderBottomWidth: 1, borderBottomColor: 'rgba(99,102,241,0.2)',
  },
  backBtn: {
    backgroundColor: 'rgba(99,102,241,0.12)', borderRadius: 12,
    width: 44, height: 44, alignItems: 'center', justifyContent: 'center',
    borderWidth: 1.5, borderColor: 'rgba(99,102,241,0.3)',
  },
  backBtnText: { fontSize: 20, color: C.primary },
  headerCenter: { flex: 1, alignItems: 'center' },
  headerTitle: { fontSize: 16, fontWeight: '800', color: C.text, letterSpacing: 0.2 },
  headerSub: { fontSize: 12, color: C.textDim, marginTop: 2, letterSpacing: 0.2 },
  timerPill: {
    borderWidth: 1.5, borderColor: 'rgba(99,102,241,0.35)', borderRadius: 20,
    paddingHorizontal: 12, paddingVertical: 6, minWidth: 62, alignItems: 'center',
    backgroundColor: 'rgba(99,102,241,0.08)',
  },
  timerText: { fontSize: 15, fontWeight: '800', color: C.primary, letterSpacing: 0.5 },

  gridContainer: { flex: 1, justifyContent: 'center', paddingVertical: 12 },
  grid: {
    flexDirection: 'row', flexWrap: 'wrap',
    paddingHorizontal: H_PAD, gap: GAP,
  },

  startBody: {
    flexGrow: 1, alignItems: 'center', paddingHorizontal: 24, paddingTop: 20, paddingBottom: 24, gap: 14,
  },
  startIcon: { fontSize: 52 },
  startTitle: { fontSize: 24, fontWeight: '800', color: C.text, letterSpacing: 0.2 },
  startSub: { fontSize: 13, color: C.textDim, textAlign: 'center', lineHeight: 19 },
  bestCard: {
    width: '100%', backgroundColor: C.warningBg, borderRadius: 18,
    padding: 22, alignItems: 'center', gap: 6,
    borderWidth: 1, borderColor: 'rgba(217,119,6,0.28)',
    borderLeftWidth: 4, borderLeftColor: C.warning,
    shadowColor: C.warning, shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1, shadowRadius: 8, elevation: 2,
  },
  bestLabel: { fontSize: 10, fontWeight: '700', color: C.textFaint, letterSpacing: 2 },
  bestTime: { fontSize: 36, fontWeight: '800', color: C.text, letterSpacing: -0.5 },
  bestEmpty: { fontSize: 22, fontWeight: '700', color: C.textDim },
  bestEmptySub: { fontSize: 13, color: C.textFaint },
  startBtn: {
    width: '100%', backgroundColor: C.primary, borderRadius: 16,
    paddingVertical: 16, alignItems: 'center', marginTop: 4,
    shadowColor: C.primary, shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3, shadowRadius: 12, elevation: 5,
  },
  startBtnText: { color: '#fff', fontSize: 18, fontWeight: '800', letterSpacing: 0.4 },

  resultBody: {
    flex: 1, alignItems: 'center', justifyContent: 'center',
    paddingHorizontal: 32, gap: 12,
  },
  resultIcon: { fontSize: 64, marginBottom: 4 },
  resultTimeNum: { fontSize: 64, fontWeight: '900', color: C.text, letterSpacing: -2 },
  resultTimeLabel: { fontSize: 17, fontWeight: '700', color: C.textDim, marginTop: -10 },
  resultMoves: { fontSize: 14, color: C.textFaint, fontWeight: '500' },
  newRecordBadge: {
    backgroundColor: C.warningBg, borderRadius: 14,
    paddingHorizontal: 22, paddingVertical: 11,
    borderWidth: 1.5, borderColor: 'rgba(217,119,6,0.3)',
  },
  newRecordText: { fontSize: 16, fontWeight: '800', color: C.warning, letterSpacing: 0.3 },
  prevRecord: {
    backgroundColor: C.primaryBg, borderRadius: 10,
    paddingHorizontal: 18, paddingVertical: 9,
    borderWidth: 1, borderColor: 'rgba(99,102,241,0.22)',
  },
  prevRecordText: { fontSize: 13, color: C.textDim, fontWeight: '500' },
  actionBar: {
    flexDirection: 'row', justifyContent: 'flex-end',
    paddingHorizontal: 16, paddingVertical: 6,
    backgroundColor: 'rgba(99,102,241,0.07)',
    borderBottomWidth: 1, borderBottomColor: 'rgba(99,102,241,0.2)',
  },
  finishBtn: {
    borderWidth: 1.5, borderColor: 'rgba(99,102,241,0.35)',
    borderRadius: 12, paddingHorizontal: 14, paddingVertical: 6,
    backgroundColor: 'rgba(99,102,241,0.08)',
  },
  finishBtnText: { fontSize: 12, fontWeight: '700', color: C.primary, letterSpacing: 0.2 },
  continueBtn: {
    borderWidth: 1.5, borderColor: C.primary,
    borderRadius: 14, paddingHorizontal: 14, paddingVertical: 7,
    backgroundColor: C.primary,
  },
  continueBtnText: { fontSize: 13, fontWeight: '700', color: '#fff', letterSpacing: 0.2 },

  diffRow: {
    flexDirection: 'row', gap: 10, width: '100%',
  },
  diffBtn: {
    flex: 1, alignItems: 'center', paddingVertical: 12, paddingHorizontal: 6,
    borderRadius: 14, borderWidth: 1.5, borderColor: C.border,
    backgroundColor: C.surface, gap: 4,
  },
  diffBtnActive: {
    borderColor: C.primary,
    backgroundColor: C.primaryBg,
  },
  diffGrid: { fontSize: 16, fontWeight: '800', color: C.textDim, letterSpacing: 0.2 },
  diffGridActive: { color: C.primary },
  diffSub: { fontSize: 10, fontWeight: '600', color: C.textFaint, letterSpacing: 0.3 },
  diffSubActive: { color: C.primary },

  sectionLabel: {
    fontSize: 11, fontWeight: '700', color: C.textFaint,
    letterSpacing: 1.2, alignSelf: 'flex-start', marginBottom: -6,
  },
  levelRow: { flexDirection: 'row', gap: 10, width: '100%' },
  levelBtn: {
    flex: 1, borderWidth: 1.5, borderColor: C.border, borderRadius: 14,
    paddingVertical: 12, alignItems: 'center', backgroundColor: C.surface,
  },
  levelBtnActive: { borderColor: C.primary, backgroundColor: C.primaryBg },
  levelBtnText: { fontSize: 15, fontWeight: '700', color: C.textDim },
  levelBtnTextActive: { color: C.primary, fontWeight: '800' as const },
  levelBtnSoon: { fontSize: 9, color: C.textFaint, fontWeight: '600', marginTop: 2 },
});
