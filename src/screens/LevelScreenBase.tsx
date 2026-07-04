import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect } from '@react-navigation/native';
import {
  loadProfile, loadStats, loadLevelProgress, loadFavorites, resetProgress,
  UserProfile, AppStats, LevelProgress, LevelId,
} from '../utils/storage';
import { wordsByLevel } from '../data/generateCard';
import WordListModal from '../components/WordListModal';
import { alpha, colors, levelAccent, radius, spacing, type } from '../theme';
import {
  ScreenBackground, GlassPanel, PressableScale, ScreenHeader,
  SectionHeader, ProgressBar, InteractiveButton, Pill,
} from '../components/ui';
import { triggerSelect } from '../utils/haptics';

const DURATIONS = [
  { label: '30sn', value: 30 },
  { label: '45sn', value: 45 },
  { label: '60sn', value: 60 },
  { label: '∞', value: 0 },
];

interface Props {
  navigation: any;
  level: LevelId;
  title: string;
  subtitleWord: string; // Grundwörter / Mittelwörter
}

/**
 * Shared level hub (A1/A2/B1) — the three screens were identical except for
 * level id, copy and accent, so the UI lives here once.
 */
export default function LevelScreenBase({ navigation, level, title, subtitleWord }: Props) {
  const accent = levelAccent[level];
  const wordCount = wordsByLevel[level].length;

  const [selectedDuration, setSelectedDuration] = useState(60);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [stats, setStats] = useState<AppStats | null>(null);
  const [progress, setProgress] = useState<LevelProgress | null>(null);
  const [wordListMode, setWordListMode] = useState<'all' | 'favorites' | null>(null);
  const [favCount, setFavCount] = useState(0);

  useFocusEffect(
    useCallback(() => {
      Promise.all([loadProfile(), loadStats(), loadLevelProgress(level), loadFavorites()]).then(([p, s, pr, favs]) => {
        setProfile(p);
        setStats(s);
        setProgress(pr);
        setFavCount(favs[level].length);
      });
    }, [level]),
  );

  const masteredLen = progress?.masteredIds.length ?? 0;
  const isAllMastered = wordCount > 0 && masteredLen >= wordCount;

  async function handleReset() {
    await resetProgress(level);
    const pr = await loadLevelProgress(level);
    setProgress(pr);
  }

  return (
    <SafeAreaView style={styles.safe}>
      <ScreenBackground tint={accent} />

      <ScreenHeader
        title={title}
        subtitle={`${wordCount} kelime · ${subtitleWord}`}
        onBack={() => navigation.goBack()}
        right={<Pill label={level} tint={accent} solid />}
      />

      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>

        {/* Duration selector */}
        <SectionHeader title="Süre" />
        <View style={styles.durationRow}>
          {DURATIONS.map(d => {
            const active = selectedDuration === d.value;
            return (
              <PressableScale
                key={d.value}
                onPress={() => { triggerSelect(); setSelectedDuration(d.value); }}
                style={[
                  styles.durationBtn,
                  active && { borderColor: alpha(accent, 0.5), backgroundColor: alpha(accent, 0.13) },
                ]}
                accessibilityLabel={d.label}
              >
                <Text style={[styles.durationText, active && { color: accent, fontWeight: '800' }]}>
                  {d.label}
                </Text>
              </PressableScale>
            );
          })}
        </View>

        {/* Main game */}
        <PressableScale
          onPress={() => navigation.navigate('Game', {
            duration: selectedDuration,
            masteredIds: progress?.masteredIds ?? [],
            level,
          })}
          accessibilityLabel="Boşluk Doldur"
        >
          <GlassPanel tint={accent} raised padding={spacing.xl} style={styles.heroCard}>
            <View style={styles.heroTop}>
              <View style={[styles.heroIcon, {
                backgroundColor: alpha(accent, 0.16), borderColor: alpha(accent, 0.32),
              }]}>
                <Text style={styles.heroIconText}>✏️</Text>
              </View>
              <Pill label="● AKTİF" tint={accent} />
            </View>
            <Text style={styles.heroTitle}>Boşluk Doldur</Text>
            <Text style={styles.heroDesc}>Cümledeki eksik kelimeyi bul ve tamamla.</Text>
            <View style={styles.heroFooter}>
              <Text style={[styles.heroMeta, { color: accent }]}>
                {wordCount} kelime · {selectedDuration === 0 ? 'Süresiz' : `${selectedDuration}sn`}
              </Text>
              <Text style={[styles.chevron, { color: accent }]}>›</Text>
            </View>
          </GlassPanel>
        </PressableScale>

        {/* Word list / favorites */}
        <PressableScale onPress={() => setWordListMode('all')} accessibilityLabel="Kelimeleri gör">
          <GlassPanel padding={spacing.lg} raised style={styles.rowCard}>
            <Text style={styles.rowTitle}>📖  Kelimeleri Gör</Text>
            <Text style={[styles.rowCount, { color: accent }]}>{wordCount} kelime ›</Text>
          </GlassPanel>
        </PressableScale>
        <PressableScale onPress={() => setWordListMode('favorites')} accessibilityLabel="Favorilerim">
          <GlassPanel padding={spacing.lg} raised tint={colors.gold} style={styles.rowCard}>
            <Text style={styles.rowTitle}>
              <Text style={{ color: colors.gold }}>★  </Text>Favorilerim
            </Text>
            <Text style={[styles.rowCount, { color: colors.gold }]}>{favCount} kelime ›</Text>
          </GlassPanel>
        </PressableScale>

        {/* Mastery */}
        {progress !== null && (
          <>
            <SectionHeader title={`${level} İlerlemesi`} trailing={`${masteredLen} / ${wordCount}`} spaced />
            <GlassPanel padding={spacing.xl} style={styles.masteryCard}>
              <ProgressBar progress={wordCount > 0 ? masteredLen / wordCount : 0} tint={accent} height={10} />
              {isAllMastered ? (
                <>
                  <Text style={styles.masterySubText}>🏆 Tüm {level} kelimelerini öğrendin!</Text>
                  <InteractiveButton label="İlerlemeyi Sıfırla" variant="danger" size="sm" onPress={handleReset} />
                </>
              ) : (
                <>
                  <Text style={styles.masterySubText}>
                    {masteredLen === 0
                      ? 'Her kelimeyi 3 kez doğru yap → öğrenildi'
                      : `${masteredLen} kelime öğrenildi — ${wordCount - masteredLen} kaldı`}
                  </Text>
                  {progress.wrongIds.length > 0 && (
                    <InteractiveButton
                      label={`Tekrar Çalış — ${progress.wrongIds.length} kelime ›`}
                      variant="danger"
                      size="sm"
                      onPress={() => navigation.navigate('Game', {
                        duration: selectedDuration,
                        reviewWordIds: progress.wrongIds,
                        level,
                      })}
                    />
                  )}
                </>
              )}
            </GlassPanel>
          </>
        )}

      </ScrollView>

      <WordListModal
        visible={wordListMode !== null}
        onClose={() => { setWordListMode(null); loadFavorites().then(f => setFavCount(f[level].length)); }}
        level={level}
        words={wordsByLevel[level]}
        title={wordListMode === 'favorites' ? `${level} Favorilerim` : `${level} Kelime Listesi`}
        favoritesOnly={wordListMode === 'favorites'}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  container: {
    paddingHorizontal: spacing.xl, paddingTop: spacing.md, paddingBottom: 56, gap: spacing.md,
  },

  durationRow: { flexDirection: 'row', gap: spacing.sm },
  durationBtn: {
    flex: 1, borderWidth: 1, borderColor: colors.glassBorder, borderRadius: radius.sm,
    paddingVertical: 12, alignItems: 'center', backgroundColor: colors.glass,
  },
  durationText: { fontSize: 13, fontWeight: '700', color: colors.textFaint, letterSpacing: 0.3 },

  heroCard: { gap: spacing.sm, marginTop: spacing.xs },
  heroTop: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing.xs,
  },
  heroIcon: {
    width: 48, height: 48, borderRadius: radius.md,
    borderWidth: 1, alignItems: 'center', justifyContent: 'center',
  },
  heroIconText: { fontSize: 22 },
  heroTitle: { ...type.heading, fontSize: 18 },
  heroDesc: { ...type.body, fontSize: 13.5 },
  heroFooter: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    borderTopWidth: 1, borderTopColor: colors.glassBorder, paddingTop: spacing.md, marginTop: spacing.xs,
  },
  heroMeta: { fontSize: 12.5, fontWeight: '700', letterSpacing: 0.3 },
  chevron: { fontSize: 24, fontWeight: '400', opacity: 0.8 },

  rowCard: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  rowTitle: { fontSize: 15, fontWeight: '700', color: colors.text, letterSpacing: 0.1 },
  rowCount: { fontSize: 13, fontWeight: '700' },

  masteryCard: { gap: spacing.md },
  masterySubText: { ...type.caption, letterSpacing: 0.1 },
});
