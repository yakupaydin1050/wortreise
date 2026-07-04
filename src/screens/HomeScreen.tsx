import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect } from '@react-navigation/native';
import { loadProfile, loadStats, UserProfile, AppStats } from '../utils/storage';
import { alpha, colors, gameAccent, levelAccent, radius, spacing, type } from '../theme';
import {
  ScreenBackground, GlassPanel, PressableScale, SectionHeader, ProgressBar, Pill,
} from '../components/ui';

const LEVELS = [
  {
    id: 'A1', label: 'A1', title: 'Başlangıç Seviyesi',
    desc: 'Temel kelimeler ve günlük konuşmalar.',
    emoji: '🌱', accent: levelAccent.A1, screen: 'A1' as const,
  },
  {
    id: 'A2', label: 'A2', title: 'Temel Seviye',
    desc: 'Günlük konuşmalar ve yaygın ifadeler.',
    emoji: '📗', accent: levelAccent.A2, screen: 'A2' as const,
  },
  {
    id: 'B1', label: 'B1', title: 'Orta Seviye',
    desc: 'Karmaşık konular ve geniş kelime hazinesi.',
    emoji: '🚀', accent: levelAccent.B1, screen: 'B1' as const,
  },
];

export default function HomeScreen({ navigation }: { navigation: any }) {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [stats, setStats] = useState<AppStats | null>(null);

  useFocusEffect(
    useCallback(() => {
      Promise.all([loadProfile(), loadStats()]).then(([p, s]) => {
        setProfile(p);
        setStats(s);
      });
    }, []),
  );

  const goalDone = stats !== null && profile !== null && stats.todayCards >= profile.dailyGoal;

  return (
    <SafeAreaView style={styles.safe}>
      <ScreenBackground />
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>

        {/* Greeting */}
        <View style={styles.header}>
          <Text style={styles.greetingHello}>Hoşgeldin 👋</Text>
          <Text style={styles.greetingName} numberOfLines={1}>{profile?.name ?? '...'}</Text>
        </View>

        {/* Daily momentum */}
        {stats !== null && profile !== null && (
          <GlassPanel emphasis="strong" style={styles.momentum}>
            <View style={styles.momentumStats}>
              <View style={styles.momentumStat}>
                <Text style={[type.numeral, styles.momentumNum, { color: colors.gold }]}>
                  {stats.streak}
                  <Text style={styles.momentumEmoji}> 🔥</Text>
                </Text>
                <Text style={styles.momentumLabel}>günlük seri</Text>
              </View>
              <View style={styles.momentumDivider} />
              <View style={styles.momentumStat}>
                <Text style={[type.numeral, styles.momentumNum]}>
                  {stats.todayCards}
                  <Text style={styles.momentumFraction}> / {profile.dailyGoal}</Text>
                </Text>
                <Text style={styles.momentumLabel}>bugünkü kart</Text>
              </View>
            </View>
            <ProgressBar progress={stats.todayCards / profile.dailyGoal} />
            <Text style={[styles.momentumHint, goalDone && { color: colors.success }]}>
              {goalDone
                ? '✓ Harika! Bugünkü hedef tamamlandı'
                : `${profile.dailyGoal - stats.todayCards} kart daha — devam et!`}
            </Text>
          </GlassPanel>
        )}

        {/* Levels */}
        <SectionHeader title="Seviyeler" spaced />
        <View style={styles.levelList}>
          {LEVELS.map(item => (
            <PressableScale
              key={item.id}
              onPress={() => navigation.navigate(item.screen)}
              accessibilityLabel={`${item.label} — ${item.title}`}
            >
              <GlassPanel padding={spacing.lg} raised tint={item.accent} style={styles.levelCard}>
                <View style={[styles.levelIcon, {
                  backgroundColor: alpha(item.accent, 0.18),
                  borderColor: alpha(item.accent, 0.4),
                }]}>
                  <Text style={styles.levelEmoji}>{item.emoji}</Text>
                </View>
                <View style={styles.levelBody}>
                  <View style={styles.levelTitleRow}>
                    <Text style={[styles.levelTag, { color: item.accent }]}>{item.label}</Text>
                    <Text style={styles.levelTitle} numberOfLines={1}>{item.title}</Text>
                  </View>
                  <Text style={styles.levelDesc} numberOfLines={2}>{item.desc}</Text>
                </View>
                <Text style={[styles.chevron, { color: item.accent }]}>›</Text>
              </GlassPanel>
            </PressableScale>
          ))}
        </View>

        {/* Wortstadt — featured story mode */}
        <SectionHeader title="Hikâye Modu" spaced />
        <PressableScale onPress={() => navigation.navigate('Wortdorf')} accessibilityLabel="Wortstadt">
          <GlassPanel tint={gameAccent.wortdorf} raised padding={spacing.xl} style={styles.wortdorf}>
            <View style={styles.wortdorfHeader}>
              <Text style={styles.wortdorfIcon}>🏘️</Text>
              <Text style={styles.wortdorfTitle}>Wortstadt</Text>
              <Pill label="BETA" tint={gameAccent.wortdorf} />
            </View>
            <Text style={styles.wortdorfDesc}>
              Almanya'da günlük hayatı yaşa — markette, bankada, doktorda Almanca konuş.
            </Text>
            <View style={styles.wortdorfFooter}>
              <Text style={[styles.wortdorfMeta, { color: gameAccent.wortdorf }]}>5 mahalle · 25 mekan</Text>
              <Text style={[styles.chevron, { color: gameAccent.wortdorf }]}>›</Text>
            </View>
          </GlassPanel>
        </PressableScale>

        <Text style={styles.footer}>Her gün birkaç kart, büyük bir adım 🚀</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  container: {
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.xxl,
    paddingBottom: 56,
    gap: spacing.md,
  },

  header: { marginBottom: spacing.sm, gap: 2 },
  greetingHello: { ...type.body, fontSize: 16, color: colors.textDim },
  greetingName: { ...type.display },

  momentum: { gap: spacing.lg },
  momentumStats: { flexDirection: 'row', alignItems: 'center' },
  momentumStat: { flex: 1, alignItems: 'center', gap: 3 },
  momentumNum: { fontSize: 36, lineHeight: 42 },
  momentumEmoji: { fontSize: 22 },
  momentumFraction: { fontSize: 20, fontWeight: '700', color: colors.textDim },
  momentumLabel: { fontSize: 12.5, fontWeight: '600', color: colors.textDim, letterSpacing: 0.2 },
  momentumDivider: { width: 1, height: 48, backgroundColor: colors.glassBorder, marginHorizontal: spacing.lg },
  momentumHint: { fontSize: 13, fontWeight: '600', color: colors.textDim, textAlign: 'center' },

  levelList: { gap: spacing.md },
  levelCard: { flexDirection: 'row', alignItems: 'center', gap: spacing.lg },
  levelIcon: {
    width: 52, height: 52, borderRadius: radius.md,
    borderWidth: 1, alignItems: 'center', justifyContent: 'center',
  },
  levelEmoji: { fontSize: 26 },
  levelBody: { flex: 1, gap: 3 },
  levelTitleRow: { flexDirection: 'row', alignItems: 'baseline', gap: spacing.sm },
  levelTag: { fontSize: 15, fontWeight: '800', letterSpacing: 0.6 },
  levelTitle: { ...type.heading, fontSize: 16, flexShrink: 1 },
  levelDesc: { ...type.caption, lineHeight: 17 },
  chevron: { fontSize: 26, fontWeight: '400', opacity: 0.8, marginLeft: spacing.xs },

  wortdorf: { gap: spacing.md },
  wortdorfHeader: { flexDirection: 'row', alignItems: 'center', gap: spacing.md },
  wortdorfIcon: { fontSize: 26 },
  wortdorfTitle: { ...type.heading, flex: 1 },
  wortdorfDesc: { ...type.body, fontSize: 13.5, lineHeight: 20 },
  wortdorfFooter: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    borderTopWidth: 1, borderTopColor: colors.glassBorder, paddingTop: spacing.md,
  },
  wortdorfMeta: { fontSize: 12.5, fontWeight: '700', letterSpacing: 0.3 },

  footer: {
    textAlign: 'center', fontSize: 12, color: colors.textFaint,
    marginTop: spacing.xl, fontWeight: '500', letterSpacing: 0.3,
  },
});
