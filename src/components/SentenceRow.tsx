import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Animated } from 'react-native';
import { Sentence, GlossaryEntry } from '../types';
import { wordsByLevel } from '../data/generateCard';

interface Props {
  sentence: Sentence;
  number: number;
  selectedWord: string | null;
  onBlankPress: (sentenceId: string) => void;
  filledWord: string | null;
  isCorrect: boolean | null;
  showControls: boolean;
  correctionWord?: string;
}

type ActiveWord = { word: string; tr: string };


function stripPunctuation(token: string): { word: string; trailing: string } {
  let word = token;
  let trailing = '';
  while (word.length > 0 && /[.,!?;:"„""()«»]/.test(word[word.length - 1])) {
    trailing = word[word.length - 1] + trailing;
    word = word.slice(0, -1);
  }
  return { word, trailing };
}

function renderTextWithGlossary(
  text: string,
  glossary: Record<string, GlossaryEntry> | undefined,
  onWordPress: (entry: ActiveWord) => void,
) {
  if (!text) return null;
  // If no glossary provided, build a lightweight fallback from available word banks
  if (!glossary) {
    const fallback: Record<string, GlossaryEntry> = {};
    const all = Object.values(wordsByLevel).flat();
    for (const e of all) {
      const tr = (e as any).tr ?? '';
      if (!tr) continue;
      const bare = e.word.replace(/^(der|die|das)\s+/i, '').toLowerCase();
      fallback[bare] = { tr } as GlossaryEntry;
      fallback[e.word.toLowerCase()] = { tr } as GlossaryEntry;
    }
    glossary = fallback;
  }

  const tokens = text.split(/(\s+)/);
  return tokens.map((tok, i) => {
    if (tok === '') return null;
    if (/^\s+$/.test(tok)) return tok;
    const { word, trailing } = stripPunctuation(tok);
    const key = word.toLowerCase();
    const entry = glossary?.[key];
    if (entry && word.length > 0) {
      return (
        <Text key={i}>
          <Text style={styles.wordLink} onPress={() => onWordPress({ word, tr: entry.tr })}>
            {word}
          </Text>
          {trailing}
        </Text>
      );
    }
    return <Text key={i}>{tok}</Text>;
  });
}

export default function SentenceRow({
  sentence, number, selectedWord, onBlankPress,
  filledWord, isCorrect, showControls, correctionWord,
}: Props) {
  const [showTranslation, setShowTranslation] = useState(false);
  const [activeWord, setActiveWord] = useState<ActiveWord | null>(null);

  const blankScale = useRef(new Animated.Value(1)).current;
  useEffect(() => {
    if (isCorrect !== null) {
      Animated.sequence([
        Animated.spring(blankScale, { toValue: 1.14, useNativeDriver: true, speed: 40, bounciness: 8 }),
        Animated.spring(blankScale, { toValue: 1, useNativeDriver: true, speed: 20, bounciness: 3 }),
      ]).start();
    }
  }, [isCorrect]);

  const parts = sentence.germanWithBlank.split('___');
  const startsWithBlank = parts[0] === '';

  const displayWord = filledWord
    ? startsWithBlank
      ? filledWord.charAt(0).toUpperCase() + filledWord.slice(1)
      : filledWord
    : null;

  const isHint = !displayWord && !!correctionWord;
  const effectiveDisplay = isHint ? correctionWord : displayWord;

  const accentColor =
    isCorrect === true  ? '#1A9E6E' :
    isCorrect === false ? '#DC2626' :
    displayWord         ? '#D97706' :
                          '#64748B';

  const cardBgColor =
    isCorrect === true  ? 'rgba(26,158,110,0.08)' :
    isCorrect === false ? 'rgba(220,38,38,0.07)' :
    displayWord         ? 'rgba(217,119,6,0.06)' :
                          'rgba(100,116,139,0.04)';

  const cardBorderColor =
    isCorrect === true  ? 'rgba(26,158,110,0.28)' :
    isCorrect === false ? 'rgba(220,38,38,0.22)' :
    displayWord         ? 'rgba(217,119,6,0.28)' :
                          'rgba(100,116,139,0.22)';

  const blankBorderColor =
    isHint              ? '#B8C4E8' :
    isCorrect === true  ? '#1A9E6E' :
    isCorrect === false ? '#DC2626' :
    displayWord         ? '#D97706' :
    selectedWord        ? '#3B5BDB' :
                          '#C8D0E8';

  const blankBgColor =
    isHint              ? '#F5F6FF' :
    isCorrect === true  ? 'rgba(26,158,110,0.10)' :
    isCorrect === false ? 'rgba(220,38,38,0.08)' :
    displayWord         ? 'rgba(217,119,6,0.09)' :
    selectedWord        ? 'rgba(59,91,219,0.09)' :
                          '#FAF8F4';

  return (
    <View style={[styles.card, { borderLeftColor: accentColor, backgroundColor: cardBgColor, borderColor: cardBorderColor }]}>
      <View style={styles.row}>
        <Text style={styles.number}>{number}. </Text>
        {parts[0] ? (
          <Text style={styles.text}>
            {renderTextWithGlossary(parts[0], sentence.glossary, setActiveWord)}
          </Text>
        ) : null}
        <Animated.View style={{ transform: [{ scale: blankScale }] }}>
          <TouchableOpacity
            style={[styles.blank, { borderColor: blankBorderColor, backgroundColor: blankBgColor }]}
            onPress={() => onBlankPress(sentence.id)}
            activeOpacity={0.75}
          >
            <Text style={[
              styles.blankText,
              isHint              && styles.blankHint,
              isCorrect === true  && styles.blankCorrect,
              isCorrect === false && styles.blankWrong,
              !effectiveDisplay   && styles.invisible,
            ]}>
              {effectiveDisplay ?? '        '}
            </Text>
          </TouchableOpacity>
        </Animated.View>
        {parts[1] ? (
          <Text style={styles.text}>
            {renderTextWithGlossary(parts[1], sentence.glossary, setActiveWord)}
          </Text>
        ) : null}
      </View>

      {correctionWord && isCorrect === false && (
        <View style={styles.correctionRow}>
          <Text style={styles.correctionText}>✓ {correctionWord}</Text>
        </View>
      )}

      {showControls && (
        <View style={styles.translationRow}>
          <TouchableOpacity
            onPress={() => setShowTranslation(v => !v)}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Text style={[styles.trFlag, showTranslation && styles.trFlagActive]}>🇹🇷</Text>
          </TouchableOpacity>
          {showTranslation && (
            <Text style={styles.translationInline} numberOfLines={2}>
              {sentence.translationTR}
            </Text>
          )}
        </View>
      )}

      <Modal
        visible={!!activeWord}
        transparent
        animationType="fade"
        onRequestClose={() => setActiveWord(null)}
      >
        <TouchableOpacity
          style={styles.modalBackdrop}
          activeOpacity={1}
          onPress={() => setActiveWord(null)}
        >
          <View style={styles.modalCard} onStartShouldSetResponder={() => true}>
            <TouchableOpacity
              style={styles.modalClose}
              onPress={() => setActiveWord(null)}
              hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
            >
              <Text style={styles.modalCloseText}>✕</Text>
            </TouchableOpacity>
            <Text style={styles.modalWord}>{activeWord?.word}</Text>
            <View style={styles.modalLine}>
              <Text style={styles.modalFlag}>🇹🇷</Text>
              <Text style={styles.modalTranslation}>{activeWord?.tr}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderLeftWidth: 4,
    paddingLeft: 14,
    paddingRight: 16,
    paddingTop: 14,
    paddingBottom: 16,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 1,
  },
  translationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 10,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.07)',
  },
  trFlag: { fontSize: 20, opacity: 0.45 },
  trFlagActive: { opacity: 1 },
  translationInline: {
    flex: 1, fontSize: 13, color: '#4E5C80',
    fontWeight: '500', lineHeight: 19,
  },
  number: { fontSize: 15, fontWeight: '800', color: '#0F172A', letterSpacing: 0.3, lineHeight: 26 },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  text: { fontSize: 15, color: '#0F172A', lineHeight: 26, fontWeight: '500' },
  wordLink: {
    textDecorationLine: 'underline',
    textDecorationColor: '#3B5BDB',
    color: '#3B5BDB',
  },
  blank: {
    borderWidth: 1.5,
    borderRadius: 8,
    minWidth: 88,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginHorizontal: 4,
    alignItems: 'center',
  },
  blankText: { fontSize: 15, color: '#1A2340', fontWeight: '700', letterSpacing: 0.2 },
  blankHint: { color: '#8896B8', fontStyle: 'italic' },
  blankCorrect: { color: '#1A9E6E' },
  blankWrong: { color: '#DC2626' },
  invisible: { color: 'transparent' },
  correctionRow: {
    marginTop: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  correctionText: {
    fontSize: 13,
    color: '#1A9E6E',
    fontWeight: '600',
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(10,20,60,0.45)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  modalCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#DDE3F5',
    paddingHorizontal: 22,
    paddingTop: 22,
    paddingBottom: 20,
    minWidth: 260,
    maxWidth: 360,
    gap: 12,
    shadowColor: '#3B5BDB',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 20,
    elevation: 8,
  },
  modalClose: {
    position: 'absolute',
    top: 8,
    right: 10,
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalCloseText: { fontSize: 18, color: '#8896B8', fontWeight: '600' },
  modalWord: {
    fontSize: 24,
    fontWeight: '800',
    color: '#1A2340',
    paddingRight: 32,
    letterSpacing: 0.2,
  },
  modalLine: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
  },
  modalFlag: { fontSize: 18, lineHeight: 24 },
  modalTranslation: { fontSize: 16, color: '#4E5C80', flex: 1, lineHeight: 22 },
});
