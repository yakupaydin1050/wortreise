import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Animated } from 'react-native';
import { Sentence, GlossaryEntry } from '../types';
import { wordsByLevel } from '../data/generateCard';
import { alpha, colors } from '../theme';

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
    isCorrect === true  ? colors.success :
    isCorrect === false ? colors.danger :
    displayWord         ? colors.warning :
                          colors.textFaint;

  const cardBgColor =
    isCorrect === true  ? alpha(colors.success, 0.08) :
    isCorrect === false ? alpha(colors.danger, 0.07) :
    displayWord         ? alpha(colors.warning, 0.06) :
                          colors.glass;

  const cardBorderColor =
    isCorrect === true  ? alpha(colors.success, 0.32) :
    isCorrect === false ? alpha(colors.danger, 0.3) :
    displayWord         ? alpha(colors.warning, 0.3) :
                          colors.glassBorder;

  const blankBorderColor =
    isHint              ? colors.glassBorderStrong :
    isCorrect === true  ? colors.success :
    isCorrect === false ? colors.danger :
    displayWord         ? colors.warning :
    selectedWord        ? colors.primary :
                          colors.glassBorderStrong;

  const blankBgColor =
    isHint              ? colors.glassStrong :
    isCorrect === true  ? alpha(colors.success, 0.12) :
    isCorrect === false ? alpha(colors.danger, 0.1) :
    displayWord         ? alpha(colors.warning, 0.1) :
    selectedWord        ? alpha(colors.primary, 0.14) :
                          colors.glass;

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
            style={[styles.trButton, showTranslation && styles.trButtonActive]}
            activeOpacity={0.7}
          >
            <Text style={styles.trFlag}>🇹🇷</Text>
            <Text style={[styles.trButtonText, showTranslation && styles.trButtonTextActive]}>
              {showTranslation ? 'Gizle' : 'Çeviri'}
            </Text>
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
    borderRadius: 16,
    borderLeftWidth: 3,
    paddingLeft: 14,
    paddingRight: 16,
    paddingTop: 14,
    paddingBottom: 16,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.18,
    shadowRadius: 10,
    elevation: 3,
  },
  translationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 10,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: colors.glassBorder,
  },
  trButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: alpha(colors.primary, 0.25),
    backgroundColor: alpha(colors.primary, 0.07),
  },
  trButtonActive: {
    borderColor: alpha(colors.primary, 0.5),
    backgroundColor: alpha(colors.primary, 0.16),
  },
  trFlag: { fontSize: 16 },
  trButtonText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.textDim,
    letterSpacing: 0.2,
  },
  trButtonTextActive: {
    color: colors.primary,
  },
  translationInline: {
    flex: 1, fontSize: 13, color: colors.textDim,
    fontWeight: '500', lineHeight: 19,
  },
  number: { fontSize: 15, fontWeight: '800', color: colors.text, letterSpacing: 0.3, lineHeight: 26 },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  text: { fontSize: 15, color: colors.text, lineHeight: 26, fontWeight: '500' },
  wordLink: {
    // Dictionary words stay the normal text color so the sentence reads calmly;
    // only a faint underline signals they are tappable for a translation.
    textDecorationLine: 'underline',
    textDecorationColor: colors.textFaint,
    color: colors.text,
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
  blankText: { fontSize: 15, color: colors.text, fontWeight: '700', letterSpacing: 0.2 },
  blankHint: { color: colors.textFaint, fontStyle: 'italic' },
  blankCorrect: { color: colors.success },
  blankWrong: { color: colors.danger },
  invisible: { color: 'transparent' },
  correctionRow: {
    marginTop: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  correctionText: {
    fontSize: 13,
    color: colors.success,
    fontWeight: '600',
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: colors.backdrop,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  modalCard: {
    backgroundColor: colors.bgSheet,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.glassBorderStrong,
    paddingHorizontal: 22,
    paddingTop: 22,
    paddingBottom: 20,
    minWidth: 260,
    maxWidth: 360,
    gap: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.35,
    shadowRadius: 24,
    elevation: 10,
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
  modalCloseText: { fontSize: 18, color: colors.textFaint, fontWeight: '600' },
  modalWord: {
    fontSize: 24,
    fontWeight: '800',
    color: colors.text,
    paddingRight: 32,
    letterSpacing: 0.2,
  },
  modalLine: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
  },
  modalFlag: { fontSize: 18, lineHeight: 24 },
  modalTranslation: { fontSize: 16, color: colors.textDim, flex: 1, lineHeight: 22 },
});
