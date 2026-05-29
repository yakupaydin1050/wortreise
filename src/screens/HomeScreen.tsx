import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect } from '@react-navigation/native';
import { loadProfile, loadStats, UserProfile, AppStats } from '../utils/storage';
import GridBackground from '../components/GridBackground';

const C = {
  bg: '#FAF8F4', surface: '#FFFFFF',
  border: '#DDE3F5', borderBright: '#B8C4E8',
  primary: '#3B5BDB', primaryBg: 'rgba(59,91,219,0.10)',
  text: '#1A2340', textDim: '#4E5C80', textFaint: '#8896B8',
  warning: '#D97706', warningBg: 'rgba(217,119,6,0.12)',
  success: '#1A9E6E',
};

const LEVELS = [
  {
    id: 'A1', label: 'A1', title: 'Başlangıç Seviyesi',
    desc: 'Temel kelimeler ve günlük konuşmalar.',
    emoji: '🌱',
    color: '#3B5BDB', colorBg: 'rgba(59,91,219,0.13)', colorBorder: 'rgba(59,91,219,0.38)',
    active: true, screen: 'A1' as const,
  },
  {
    id: 'A2', label: 'A2', title: 'Temel Seviye',
    desc: 'Günlük konuşmalar ve yaygın ifadeler.',
    emoji: '📗',
    color: '#3B7DD8', colorBg: 'rgba(59,125,216,0.13)', colorBorder: 'rgba(59,125,216,0.38)',
    active: true, screen: 'A2' as const,
  },
  {
    id: 'B1', label: 'B1', title: 'Orta Seviye',
    desc: 'Karmaşık konular ve geniş kelime hazinesi.',
    emoji: '🚀',
    color: '#1A9E6E', colorBg: 'rgba(26,158,110,0.13)', colorBorder: 'rgba(26,158,110,0.38)',
    active: true, screen: 'B1' as const,
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

  return (
    <SafeAreaView style={styles.safe}>
      <GridBackground />
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.greeting}>
            Hoşgeldin,{' '}
            <Text style={styles.greetingName}>{profile?.name ?? '...'}</Text>
            {' '}👋
          </Text>
        </View>

        {/* Motivation card */}
        {stats !== null && profile !== null && (
          <View style={styles.motivationCard}>
            <View style={styles.motivationStats}>
              <View style={styles.motivationStat}>
                <Text style={[styles.motivationNum, { color: C.warning }]}>{stats.streak}</Text>
                <Text style={styles.motivationStatLabel}>günlük seri 🔥</Text>
              </View>
              <View style={styles.motivationDivider} />
              <View style={styles.motivationStat}>
                <Text style={[styles.motivationNum, { color: C.primary }]}>
                  {stats.todayCards}
                  <Text style={styles.motivationFraction}>/{profile.dailyGoal}</Text>
                </Text>
                <Text style={styles.motivationStatLabel}>günlük kart serisi</Text>
              </View>
            </View>
            <View style={styles.motivationBar}>
              <View style={[styles.motivationBarFill, {
                width: `${Math.min(stats.todayCards / profile.dailyGoal, 1) * 100}%` as any,
              }]} />
            </View>
            <Text style={stats.todayCards >= profile.dailyGoal ? styles.motivationDone : styles.motivationHint}>
              {stats.todayCards >= profile.dailyGoal
                ? '✓ Harika! Bugünkü hedef tamamlandı'
                : `${profile.dailyGoal - stats.todayCards} kart daha — devam et!`}
            </Text>
          </View>
        )}

        {/* Level cards */}
        {LEVELS.map(item => (
          item.active ? (
            <TouchableOpacity key={item.id}
              style={[styles.levelCard, { backgroundColor: item.colorBg, borderColor: item.colorBorder, borderLeftColor: item.color, shadowColor: item.color }]}
              onPress={() => navigation.navigate(item.screen!)}
              activeOpacity={0.85}>
              <View style={styles.cardTop}>
                <View style={[styles.levelBadge, { backgroundColor: item.color }]}>
                  <Text style={styles.levelBadgeText}>{item.label}</Text>
                </View>
                <Text style={styles.levelEmoji}>{item.emoji}</Text>
              </View>
              <Text style={styles.levelTitle}>{item.title}</Text>
              <Text style={styles.levelDesc}>{item.desc}</Text>
            </TouchableOpacity>
          ) : (
            <View key={item.id}
              style={[styles.levelCardDisabled, { backgroundColor: item.colorBg, borderColor: item.colorBorder }]}>
              <View style={styles.cardTop}>
                <View style={[styles.levelBadgeOutline, { backgroundColor: item.colorBg, borderColor: item.color + '55' }]}>
                  <Text style={[styles.levelBadgeOutlineText, { color: item.color }]}>{item.label}</Text>
                </View>
                <View style={styles.soonPill}>
                  <Text style={styles.soonPillText}>YAKINDA</Text>
                </View>
              </View>
              <Text style={styles.levelTitleDisabled}>{item.title}</Text>
              <Text style={styles.levelDescDisabled}>{item.desc}</Text>
            </View>
          )
        ))}

        {/* Wortdorf card */}
        <TouchableOpacity
          style={styles.wortdorfCard}
          onPress={() => navigation.navigate('Wortdorf')}
          activeOpacity={0.85}
        >
          <View style={styles.wortdorfHeader}>
            <Text style={styles.wortdorfIcon}>🏘️</Text>
            <View style={styles.wortdorfBadge}>
              <Text style={styles.wortdorfBadgeText}>BETA</Text>
            </View>
          </View>
          <Text style={styles.wortdorfTitle}>Wortstadt</Text>
          <Text style={styles.wortdorfDesc}>
            Almanya'da günlük hayatı yaşa — markette, bankada, doktorda Almanca konuş.
          </Text>
          <View style={styles.wortdorfFooter}>
            <Text style={styles.wortdorfMeta}>5 mahalle · 25 mekan</Text>
            <Text style={styles.wortdorfArrow}>→</Text>
          </View>
        </TouchableOpacity>

        <Text style={styles.footer}>Her gün birkaç kart, büyük bir adım 🚀</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: C.bg },
  container: { paddingHorizontal: 20, paddingTop: 24, paddingBottom: 48, gap: 12 },

  header: { marginBottom: 4 },
  greeting: { fontSize: 24, fontWeight: '600', color: C.textDim, letterSpacing: 0.2 },
  greetingName: { fontSize: 24, fontWeight: '800', color: C.text },

  motivationCard: {
    borderRadius: 18, padding: 20,
    backgroundColor: 'rgba(217,119,6,0.07)',
    borderWidth: 1.5, borderColor: 'rgba(217,119,6,0.25)',
    shadowColor: C.warning, shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12, shadowRadius: 12, elevation: 4,
    gap: 14,
  },
  motivationStats: { flexDirection: 'row', alignItems: 'center' },
  motivationStat: { flex: 1, alignItems: 'center', gap: 2 },
  motivationNum: { fontSize: 40, fontWeight: '800', letterSpacing: -1, lineHeight: 46 },
  motivationFraction: { fontSize: 22, fontWeight: '700', letterSpacing: 0, color: C.primary },
  motivationStatLabel: { fontSize: 13, fontWeight: '600', color: C.textDim },
  motivationDivider: { width: 1, height: 52, backgroundColor: 'rgba(217,119,6,0.2)', marginHorizontal: 16 },
  motivationBar: { height: 8, backgroundColor: 'rgba(217,119,6,0.15)', borderRadius: 4, overflow: 'hidden' },
  motivationBarFill: { height: '100%', backgroundColor: C.primary, borderRadius: 4 },
  motivationDone: { fontSize: 13, fontWeight: '700', color: C.success, textAlign: 'center' },
  motivationHint: { fontSize: 13, fontWeight: '600', color: C.textDim, textAlign: 'center' },

  cardTop: {
    flexDirection: 'row', justifyContent: 'space-between',
    alignItems: 'center', marginBottom: 12,
  },
  levelEmoji: { fontSize: 32, opacity: 0.9 },

  levelCard: {
    borderRadius: 18, padding: 20,
    borderWidth: 1.5, borderLeftWidth: 5,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.14, shadowRadius: 12, elevation: 5,
  },
  levelCardDisabled: {
    borderRadius: 18, padding: 20,
    borderWidth: 1.5, borderLeftWidth: 5, opacity: 0.5,
    shadowColor: '#000', shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04, shadowRadius: 4, elevation: 1,
  },
  levelBadge: { borderRadius: 10, paddingHorizontal: 14, paddingVertical: 7 },
  levelBadgeText: { fontSize: 17, fontWeight: '800', color: '#fff', letterSpacing: 0.5 },
  levelBadgeOutline: {
    borderRadius: 10, paddingHorizontal: 14, paddingVertical: 7, borderWidth: 1.5,
  },
  levelBadgeOutlineText: { fontSize: 17, fontWeight: '800', letterSpacing: 0.5 },
  soonPill: {
    backgroundColor: C.warningBg, borderRadius: 8,
    paddingHorizontal: 10, paddingVertical: 4,
    borderWidth: 1, borderColor: 'rgba(217,119,6,0.25)',
  },
  soonPillText: { fontSize: 10, fontWeight: '700', color: C.warning, letterSpacing: 0.8 },
  levelTitle: { fontSize: 17, fontWeight: '700', color: C.text, marginBottom: 5, letterSpacing: 0.1 },
  levelTitleDisabled: { fontSize: 17, fontWeight: '700', color: C.textDim, marginBottom: 5, letterSpacing: 0.1 },
  levelDesc: { fontSize: 13, color: C.textDim, lineHeight: 19, letterSpacing: 0.1 },
  levelDescDisabled: { fontSize: 13, color: C.textFaint, lineHeight: 19, letterSpacing: 0.1 },

  wortdorfCard: {
    backgroundColor: '#FFF8EE', borderRadius: 18, padding: 18, marginBottom: 12,
    borderWidth: 1.5, borderColor: 'rgba(201,124,46,0.35)', borderLeftWidth: 4,
    borderLeftColor: '#C97C2E',
    shadowColor: '#C97C2E', shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.14, shadowRadius: 10, elevation: 4,
  },
  wortdorfHeader: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10,
  },
  wortdorfIcon: { fontSize: 32 },
  wortdorfBadge: {
    backgroundColor: 'rgba(201,124,46,0.15)', borderRadius: 8,
    paddingHorizontal: 10, paddingVertical: 4,
    borderWidth: 1, borderColor: 'rgba(201,124,46,0.35)',
  },
  wortdorfBadgeText: { fontSize: 10, fontWeight: '700', color: '#C97C2E', letterSpacing: 0.8 },
  wortdorfTitle: { fontSize: 17, fontWeight: '800', color: C.text, marginBottom: 5 },
  wortdorfDesc: { fontSize: 13, color: C.textDim, lineHeight: 19, marginBottom: 16 },
  wortdorfFooter: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    borderTopWidth: 1, borderTopColor: 'rgba(201,124,46,0.2)', paddingTop: 12,
  },
  wortdorfMeta: { fontSize: 12, fontWeight: '600', color: '#C97C2E' },
  wortdorfArrow: { fontSize: 20, fontWeight: '700', color: '#C97C2E' },

  footer: {
    textAlign: 'center', fontSize: 12, color: C.textFaint,
    marginTop: 24, fontWeight: '500', letterSpacing: 0.3,
  },
});
