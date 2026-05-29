import React, { useState, useEffect } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { loadProfile, UserProfile, getCharacter } from '../utils/storage';
import { BUILDINGS, Building, DialogChoice } from '../data/wortdorf';

type Phase = 'lines' | 'choices' | 'reply';

const C = {
  surface: '#FFFFFF',
  border: '#DDE3F5',
  text: '#1A2340',
  textDim: '#4E5C80',
  textFaint: '#8896B8',
  primary: '#3B5BDB',
  gold: '#C97C2E',
  goldBg: 'rgba(201,124,46,0.12)',
  goldBorder: 'rgba(201,124,46,0.35)',
  success: '#1A9E6E',
  successBg: 'rgba(26,158,110,0.10)',
};

export default function DialogScreen({ route, navigation }: { route: any; navigation: any }) {
  const { buildingId } = route.params as { buildingId: string };
  const building = BUILDINGS.find(b => b.id === buildingId) as Building;
  const { dialog } = building;

  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [phase, setPhase] = useState<Phase>('lines');
  const [lineIndex, setLineIndex] = useState(0);
  const [choiceIdx, setChoiceIdx] = useState<number | null>(null);

  useEffect(() => {
    loadProfile().then(setProfile);
  }, []);

  const characterEmoji = getCharacter(profile);
  const isLastLine = lineIndex === dialog.opening.length - 1;
  const selectedChoice: DialogChoice | null = choiceIdx !== null ? dialog.choices[choiceIdx] : null;

  function handleNext() {
    if (!isLastLine) {
      setLineIndex(i => i + 1);
    } else {
      setPhase('choices');
    }
  }

  function handleChoice(idx: number) {
    setChoiceIdx(idx);
    setPhase('reply');
  }

  function handleRetry() {
    setPhase('lines');
    setLineIndex(0);
    setChoiceIdx(null);
  }

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: building.bgColor }]}>
      {/* Portrait section */}
      <View style={[styles.portraitSection, { backgroundColor: building.bgColor }]}>
        <Text style={styles.buildingTitle}>{building.icon} {building.name}</Text>

        <View style={styles.portraits}>
          <View style={styles.portraitBlock}>
            <View style={[styles.portrait, { borderColor: building.color }]}>
              <Text style={styles.portraitEmoji}>{building.npcEmoji}</Text>
            </View>
            <Text style={styles.portraitName}>{building.npcName}</Text>
          </View>

          <View style={styles.vsLine} />

          <View style={styles.portraitBlock}>
            <View style={[styles.portrait, { borderColor: C.primary }]}>
              <Text style={styles.portraitEmoji}>{characterEmoji}</Text>
            </View>
            <Text style={styles.portraitName}>Du</Text>
          </View>
        </View>
      </View>

      {/* Dialog section */}
      <View style={styles.dialogSection}>
        <ScrollView
          contentContainerStyle={styles.dialogContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {phase === 'lines' && (
            <>
              <View style={styles.speakerRow}>
                <Text style={styles.speakerEmoji}>{building.npcEmoji}</Text>
                <Text style={styles.speakerName}>{building.npcName}</Text>
              </View>
              <View style={styles.dialogBubble}>
                <Text style={styles.dialogText}>{dialog.opening[lineIndex]}</Text>
              </View>
              <View style={styles.progressDots}>
                {dialog.opening.map((_, i) => (
                  <View
                    key={i}
                    style={[styles.dot, i === lineIndex && { backgroundColor: building.color }]}
                  />
                ))}
              </View>
              <TouchableOpacity
                style={[styles.nextBtn, { backgroundColor: building.color }]}
                onPress={handleNext}
                activeOpacity={0.85}
              >
                <Text style={styles.nextBtnText}>
                  {isLastLine ? 'Antworten →' : 'Weiter →'}
                </Text>
              </TouchableOpacity>
            </>
          )}

          {phase === 'choices' && (
            <>
              <Text style={styles.choicesLabel}>Wie möchtest du antworten?</Text>
              {dialog.choices.map((choice, idx) => (
                <TouchableOpacity
                  key={idx}
                  style={styles.choiceBtn}
                  onPress={() => handleChoice(idx)}
                  activeOpacity={0.82}
                >
                  <Text style={styles.choiceBullet}>▸</Text>
                  <Text style={styles.choiceBtnText}>{choice.text}</Text>
                </TouchableOpacity>
              ))}
            </>
          )}

          {phase === 'reply' && selectedChoice && (
            <>
              <View style={styles.speakerRow}>
                <Text style={styles.speakerEmoji}>{building.npcEmoji}</Text>
                <Text style={styles.speakerName}>{building.npcName}</Text>
              </View>
              <View style={styles.dialogBubble}>
                <Text style={styles.dialogText}>{selectedChoice.reply}</Text>
              </View>

              {/* Feedback card */}
              {selectedChoice.feedback && (
                <View style={[
                  styles.feedbackCard,
                  selectedChoice.isCorrect
                    ? styles.feedbackCorrect
                    : styles.feedbackWrong
                ]}>
                  <Text style={styles.feedbackEmoji}>
                    {selectedChoice.isCorrect ? '✅' :
                     selectedChoice.feedback?.type === 'partial' ? '⚠️' : '❌'}
                  </Text>
                  <View style={styles.feedbackContent}>
                    <Text style={styles.feedbackTitle}>
                      {selectedChoice.isCorrect ? 'Genau richtig!' :
                       selectedChoice.feedback?.type === 'partial' ? 'Nicht ganz...' : 'Das stimmt nicht!'}
                    </Text>
                    {selectedChoice.feedback?.hint && (
                      <Text style={styles.feedbackHint}>{selectedChoice.feedback.hint}</Text>
                    )}
                    {selectedChoice.isCorrect && (
                      <Text style={styles.coinsText}>+{selectedChoice.coins} Münzen</Text>
                    )}
                  </View>
                </View>
              )}

              <View style={styles.replyBtns}>
                {selectedChoice.feedback?.allowRetry && !selectedChoice.isCorrect ? (
                  <>
                    <TouchableOpacity
                      style={styles.retryBtn}
                      onPress={handleRetry}
                      activeOpacity={0.82}
                    >
                      <Text style={styles.retryBtnText}>Nochmal Versuchen</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[styles.doneBtn, { backgroundColor: building.color }]}
                      onPress={() => navigation.goBack()}
                      activeOpacity={0.85}
                    >
                      <Text style={styles.doneBtnText}>Zurück in die Stadt</Text>
                    </TouchableOpacity>
                  </>
                ) : (
                  <TouchableOpacity
                    style={[styles.doneBtn, { backgroundColor: building.color }]}
                    onPress={() => navigation.goBack()}
                    activeOpacity={0.85}
                  >
                    <Text style={styles.doneBtnText}>Zurück in die Stadt</Text>
                  </TouchableOpacity>
                )}
              </View>
            </>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },

  // Portrait section
  portraitSection: {
    paddingTop: 16, paddingHorizontal: 20, paddingBottom: 24,
    alignItems: 'center',
  },
  backBtn: {
    position: 'absolute', top: 16, left: 20,
    width: 36, height: 36, borderRadius: 18,
    backgroundColor: 'rgba(0,0,0,0.08)',
    alignItems: 'center', justifyContent: 'center',
  },
  backBtnText: { fontSize: 16, color: '#1A2340', fontWeight: '700' },
  buildingTitle: {
    fontSize: 17, fontWeight: '800', color: '#1A2340',
    marginBottom: 20, marginTop: 4,
  },
  portraits: {
    flexDirection: 'row', alignItems: 'center', gap: 24,
  },
  portraitBlock: { alignItems: 'center', gap: 8 },
  portrait: {
    width: 80, height: 80, borderRadius: 40,
    backgroundColor: '#FFFFFF',
    borderWidth: 3,
    alignItems: 'center', justifyContent: 'center',
    shadowColor: '#000', shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12, shadowRadius: 8, elevation: 4,
  },
  portraitEmoji: { fontSize: 42 },
  portraitName: { fontSize: 12, fontWeight: '700', color: '#4E5C80' },
  vsLine: {
    width: 1, height: 40, backgroundColor: 'rgba(0,0,0,0.12)',
  },

  // Dialog section
  dialogSection: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 28, borderTopRightRadius: 28,
    shadowColor: '#000', shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.08, shadowRadius: 12, elevation: 8,
  },
  dialogContent: { padding: 24, gap: 16 },

  speakerRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  speakerEmoji: { fontSize: 22 },
  speakerName: { fontSize: 13, fontWeight: '700', color: C.textDim },

  dialogBubble: {
    backgroundColor: '#FAF8F4',
    borderRadius: 16, padding: 18,
    borderWidth: 1, borderColor: C.border,
  },
  dialogText: {
    fontSize: 16, color: C.text, lineHeight: 24,
    fontWeight: '500', fontStyle: 'italic',
  },

  progressDots: { flexDirection: 'row', gap: 6, justifyContent: 'center' },
  dot: {
    width: 7, height: 7, borderRadius: 4,
    backgroundColor: '#DDE3F5',
  },

  nextBtn: {
    borderRadius: 14, paddingVertical: 16, alignItems: 'center',
    shadowColor: '#000', shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2, shadowRadius: 8, elevation: 4,
  },
  nextBtnText: { fontSize: 16, fontWeight: '800', color: '#FFFFFF' },

  // Choices
  choicesLabel: {
    fontSize: 12, fontWeight: '700', color: C.textFaint,
    letterSpacing: 1, textTransform: 'uppercase',
  },
  choiceBtn: {
    flexDirection: 'row', alignItems: 'flex-start', gap: 10,
    backgroundColor: '#FAF8F4', borderRadius: 14,
    padding: 16, borderWidth: 1.5, borderColor: C.border,
  },
  choiceBullet: { fontSize: 14, color: C.primary, fontWeight: '800', marginTop: 1 },
  choiceBtnText: { flex: 1, fontSize: 15, color: C.text, fontWeight: '500', lineHeight: 22 },

  // Reply
  coinReward: {
    backgroundColor: C.goldBg, borderRadius: 14,
    paddingVertical: 14, paddingHorizontal: 18,
    alignItems: 'center',
    borderWidth: 1, borderColor: C.goldBorder,
  },
  coinRewardText: { fontSize: 16, fontWeight: '800', color: C.gold },

  // Feedback card
  feedbackCard: {
    flexDirection: 'row', alignItems: 'flex-start', gap: 12,
    borderRadius: 14, padding: 16, borderWidth: 1.5,
  },
  feedbackCorrect: {
    backgroundColor: 'rgba(26,158,110,0.08)',
    borderColor: 'rgba(26,158,110,0.3)',
  },
  feedbackWrong: {
    backgroundColor: 'rgba(220,38,38,0.08)',
    borderColor: 'rgba(220,38,38,0.3)',
  },
  feedbackEmoji: { fontSize: 24, marginTop: 2 },
  feedbackContent: { flex: 1, gap: 4 },
  feedbackTitle: {
    fontSize: 14, fontWeight: '800',
    color: C.text,
  },
  feedbackHint: {
    fontSize: 13, fontWeight: '500',
    color: C.textDim, lineHeight: 20,
  },
  coinsText: {
    fontSize: 13, fontWeight: '700',
    color: C.gold, marginTop: 4,
  },

  replyBtns: { flexDirection: 'row', gap: 12 },
  retryBtn: {
    flex: 1, borderRadius: 14, paddingVertical: 15,
    alignItems: 'center', borderWidth: 1.5, borderColor: C.border,
    backgroundColor: '#FAF8F4',
  },
  retryBtnText: { fontSize: 15, fontWeight: '700', color: C.textDim },
  doneBtn: {
    flex: 1, borderRadius: 14, paddingVertical: 15, alignItems: 'center',
    shadowColor: '#000', shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2, shadowRadius: 8, elevation: 4,
  },
  doneBtnText: { fontSize: 15, fontWeight: '800', color: '#FFFFFF' },
});
