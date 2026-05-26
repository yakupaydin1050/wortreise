import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect } from '@react-navigation/native';
import {
  loadProfile, loadStats, loadLevelProgress, loadFavorites,
  UserProfile, AppStats, LevelProgress,
} from '../utils/storage';
import { wordBankB1 } from '../data/wordBankB1';
import GridBackground from '../components/GridBackground';
import WordListModal from '../components/WordListModal';

const TOTAL_B1_WORD_COUNT = wordBankB1.length;

const C = {
  bg: '#F8F9FE', surface: '#FFFFFF',
  border: '#DDE3F5', borderBright: '#A8D5BF',
  primary: '#1A9E6E', primaryBg: 'rgba(26,158,110,0.10)',
  text: '#1A2340', textDim: '#4E5C80', textFaint: '#8896B8',
  warning: '#D97706', warningBg: 'rgba(217,119,6,0.12)',
  success: '#1A9E6E', successBg: 'rgba(26,158,110,0.12)',
  danger: '#DC2626',
};

const DURATIONS = [
  { label: '30sn', value: 30, color: '#1A9E6E', colorBg: 'rgba(26,158,110,0.10)' },
  { label: '45sn', value: 45, color: '#3B7DD8', colorBg: 'rgba(59,125,216,0.10)' },
  { label: '60sn', value: 60, color: '#3B5BDB', colorBg: 'rgba(59,91,219,0.10)' },
  { label: '∞',    value: 0,  color: '#D97706', colorBg: 'rgba(217,119,6,0.10)' },
];

export default function B1Screen({ navigation }: { navigation: any }) {
  const [selectedDuration, setSelectedDuration] = useState(60);
  const [wordListMode, setWordListMode] = useState<'all' | 'favorites' | null>(null);
  const [favCount, setFavCount] = useState(0);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [stats, setStats] = useState<AppStats | null>(null);
  const [progress, setProgress] = useState<LevelProgress | null>(null);

  useFocusEffect(
    useCallback(() => {
      Promise.all([loadProfile(), loadStats(), loadLevelProgress('B1'), loadFavorites()]).then(([p, s, pr, favs]) => {
        setProfile(p);
        setStats(s);
        setProgress(pr);
        setFavCount(favs['B1'].length);
      });
    }, []),
  );

  const goalProgress = profile && stats
    ? Math.min(stats.todayCards / profile.dailyGoal, 1)
    : 0;
  const goalDone = profile && stats ? stats.todayCards >= profile.dailyGoal : false;
  const masteredLen = progress?.masteredIds.length ?? 0;

  return (
    <SafeAreaView style={styles.safe}>
      <GridBackground />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
          <Text style={styles.backBtnText}>←</Text>
        </TouchableOpacity>
        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>B1 Orta</Text>
          <Text style={styles.headerSub}>{TOTAL_B1_WORD_COUNT} kelime · Mittelwörter</Text>
        </View>
        <View style={styles.b1Badge}>
          <Text style={styles.b1BadgeText}>B1</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>

        {/* ÖĞREN */}
        <Text style={[styles.sectionLabel, styles.sectionLabelSpaced]}>ÖĞREN</Text>

        {/* Duration selector */}
        <View style={styles.durationRow}>
          {DURATIONS.map(d => {
            const active = selectedDuration === d.value;
            return (
              <TouchableOpacity key={d.value}
                style={[styles.durationBtn, active && { borderColor: d.color, backgroundColor: d.colorBg }]}
                onPress={() => setSelectedDuration(d.value)} activeOpacity={0.7}>
                <Text style={[styles.durationText, active && { color: d.color, fontWeight: '800' }]}>
                  {d.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <TouchableOpacity
          style={styles.cardBoşluk}
          onPress={() => navigation.navigate('Game', {
            duration: selectedDuration,
            masteredIds: progress?.masteredIds ?? [],
            level: 'B1',
          })}
          activeOpacity={0.85}>
          <View style={styles.cardHeaderRow}>
            <View style={styles.cardIconBox}>
              <Text style={styles.cardIconText}>✏️</Text>
            </View>
            <View style={styles.activePill}>
              <Text style={styles.activePillText}>● AKTİF</Text>
            </View>
          </View>
          <Text style={styles.cardTitle}>Boşluk Doldur</Text>
          <Text style={styles.cardDesc}>Cümledeki eksik kelimeyi bul ve tamamla.</Text>
          <View style={styles.cardFooterRow}>
            <Text style={styles.cardMeta}>{TOTAL_B1_WORD_COUNT} kelime · {
              selectedDuration === 0 ? 'Süresiz' : `${selectedDuration}sn`
            }</Text>
            <Text style={styles.cardArrow}>→</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.wordListBtn} onPress={() => setWordListMode('all')} activeOpacity={0.8}>
          <Text style={styles.wordListBtnText}>📖 Kelimeleri Gör</Text>
          <Text style={styles.wordListBtnCount}>{TOTAL_B1_WORD_COUNT} kelime →</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.favBtn} onPress={() => setWordListMode('favorites')} activeOpacity={0.8}>
          <Text style={styles.favBtnText}>
            <Text style={styles.favBtnStar}>★ </Text>Favorilerim
          </Text>
          <Text style={styles.favBtnCount}>{favCount} kelime →</Text>
        </TouchableOpacity>

        {/* B1 mastery */}
        {progress !== null && (
          <View style={styles.masteryCard}>
            <View style={styles.masteryHeader}>
              <Text style={styles.sectionLabel}>B1 İLERLEMESİ</Text>
              <Text style={styles.masteryCount}>{masteredLen} / {TOTAL_B1_WORD_COUNT}</Text>
            </View>
            <View style={styles.masteryTrack}>
              <View style={[
                styles.masteryFill,
                { width: `${Math.min(masteredLen / TOTAL_B1_WORD_COUNT, 1) * 100}%` as any },
              ]} />
            </View>
            <Text style={styles.masterySubText}>
              {masteredLen === 0
                ? 'Her kelimeyi 5 kez doğru yap → öğrenildi'
                : `${masteredLen} kelime öğrenildi — ${TOTAL_B1_WORD_COUNT - masteredLen} kaldı`}
            </Text>
            {progress.wrongIds.length > 0 && (
              <TouchableOpacity
                style={styles.reviewBtn}
                onPress={() => navigation.navigate('Game', {
                  duration: selectedDuration,
                  reviewWordIds: progress.wrongIds,
                  level: 'B1',
                })}
                activeOpacity={0.8}>
                <Text style={styles.reviewBtnText}>
                  Tekrar Çalış — {progress.wrongIds.length} kelime →
                </Text>
              </TouchableOpacity>
            )}
          </View>
        )}

        {/* Daily progress */}
        {profile && stats && (
          <View style={styles.progressCard}>
            <View style={styles.progressHeader}>
              <Text style={styles.sectionLabel}>BUGÜN İLERLEME</Text>
              {stats.streak > 0 && (
                <View style={styles.streakBadge}>
                  <Text style={styles.streakBadgeText}>🔥 {stats.streak} gün</Text>
                </View>
              )}
            </View>
            <View style={styles.progressMetrics}>
              <View style={styles.progressMetric}>
                <Text style={styles.progressMetricNum}>{stats.todayCards}</Text>
                <Text style={styles.progressMetricLabel}>Kart Açıldı</Text>
              </View>
              <View style={styles.progressMetricSep} />
              <View style={styles.progressMetric}>
                <Text style={styles.progressMetricNum}>{profile.dailyGoal}</Text>
                <Text style={styles.progressMetricLabel}>Günlük Hedef</Text>
              </View>
            </View>
            {goalDone ? (
              <View style={styles.goalDonePill}>
                <Text style={styles.goalDoneText}>✓ Günlük hedef tamamlandı!</Text>
              </View>
            ) : (
              <View style={styles.progressTrack}>
                <View style={[styles.progressFill, { width: `${goalProgress * 100}%` as any }]} />
              </View>
            )}
          </View>
        )}
      </ScrollView>

      <WordListModal
        visible={wordListMode !== null}
        onClose={() => { setWordListMode(null); loadFavorites().then(f => setFavCount(f['B1'].length)); }}
        level="B1"
        words={wordBankB1}
        title={wordListMode === 'favorites' ? 'B1 Favorilerim' : 'B1 Kelime Listesi'}
        favoritesOnly={wordListMode === 'favorites'}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: C.bg },
  container: { paddingHorizontal: 20, paddingTop: 20, paddingBottom: 48, gap: 0 },

  header: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingHorizontal: 16, paddingVertical: 12,
    backgroundColor: C.surface, borderBottomWidth: 1, borderBottomColor: C.border,
  },
  backBtn: {
    backgroundColor: '#E5F6EE', borderRadius: 12,
    width: 44, height: 44, alignItems: 'center', justifyContent: 'center',
    borderWidth: 1.5, borderColor: C.borderBright,
  },
  backBtnText: { fontSize: 20, color: C.primary },
  headerCenter: { flex: 1, alignItems: 'center' },
  headerTitle: { fontSize: 16, fontWeight: '800', color: C.text, letterSpacing: 0.2 },
  headerSub: { fontSize: 12, color: C.textDim, marginTop: 2, letterSpacing: 0.2 },
  b1Badge: {
    backgroundColor: C.primary, borderRadius: 10,
    paddingHorizontal: 14, paddingVertical: 6,
  },
  b1BadgeText: { fontSize: 15, fontWeight: '800', color: '#fff', letterSpacing: 0.5 },

  sectionLabel: {
    fontSize: 10, fontWeight: '700', color: C.textFaint, letterSpacing: 2,
  },
  sectionLabelSpaced: { marginTop: 0, marginBottom: 12 },

  progressCard: {
    backgroundColor: C.primaryBg, borderRadius: 18, padding: 18, marginTop: 16, marginBottom: 0,
    borderWidth: 1, borderColor: 'rgba(26,158,110,0.28)', gap: 14,
    borderLeftWidth: 4, borderLeftColor: C.primary,
    shadowColor: C.primary, shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1, shadowRadius: 8, elevation: 2,
  },
  progressHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  progressMetrics: { flexDirection: 'row', alignItems: 'center' },
  progressMetric: { flex: 1, alignItems: 'center', gap: 4 },
  progressMetricNum: { fontSize: 32, fontWeight: '800', color: C.text, letterSpacing: -0.5 },
  progressMetricLabel: { fontSize: 11, fontWeight: '600', color: C.textDim, letterSpacing: 0.3 },
  progressMetricSep: { width: 1, height: 40, backgroundColor: C.border, marginHorizontal: 16 },
  streakBadge: {
    backgroundColor: C.warningBg, borderRadius: 12,
    paddingHorizontal: 12, paddingVertical: 6,
    borderWidth: 1, borderColor: 'rgba(217,119,6,0.25)',
  },
  streakBadgeText: { fontSize: 13, fontWeight: '700', color: C.warning },
  progressTrack: { height: 5, backgroundColor: C.border, borderRadius: 3, overflow: 'hidden' },
  progressFill: { height: '100%', backgroundColor: C.primary, borderRadius: 3 },
  goalDonePill: {
    backgroundColor: C.successBg, borderRadius: 10,
    paddingVertical: 10, paddingHorizontal: 14, alignItems: 'center',
    borderWidth: 1, borderColor: 'rgba(26,158,110,0.3)',
  },
  goalDoneText: { fontSize: 13, fontWeight: '700', color: C.success, letterSpacing: 0.2 },

  masteryCard: {
    backgroundColor: C.successBg, borderRadius: 18, padding: 18, marginTop: 16, marginBottom: 8,
    borderWidth: 1, borderColor: 'rgba(26,158,110,0.28)', gap: 10,
    borderLeftWidth: 4, borderLeftColor: C.success,
    shadowColor: C.success, shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1, shadowRadius: 8, elevation: 2,
  },
  masteryHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  masteryCount: { fontSize: 13, fontWeight: '700', color: C.success },
  masteryTrack: { height: 10, backgroundColor: C.border, borderRadius: 6, overflow: 'hidden' },
  masteryFill: { height: '100%', backgroundColor: C.success, borderRadius: 6 },
  masterySubText: { fontSize: 12, color: C.textFaint, fontWeight: '500', letterSpacing: 0.1 },
  reviewBtn: {
    marginTop: 2, backgroundColor: 'rgba(220,38,38,0.07)',
    borderRadius: 10, paddingVertical: 10, paddingHorizontal: 14, alignItems: 'center',
    borderWidth: 1, borderColor: 'rgba(220,38,38,0.22)',
  },
  reviewBtnText: { fontSize: 13, fontWeight: '700', color: C.danger, letterSpacing: 0.2 },

  durationRow: { flexDirection: 'row', gap: 8, marginBottom: 12 },
  durationBtn: {
    flex: 1, borderWidth: 1.5, borderColor: C.border, borderRadius: 12,
    paddingVertical: 12, alignItems: 'center', backgroundColor: C.surface,
    shadowColor: '#000', shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05, shadowRadius: 3, elevation: 1,
  },
  durationText: { fontSize: 13, fontWeight: '700', color: C.textFaint, letterSpacing: 0.3 },

  cardHeaderRow: {
    flexDirection: 'row', justifyContent: 'space-between',
    alignItems: 'center', marginBottom: 12,
  },
  cardIconBox: {
    backgroundColor: C.primaryBg, borderRadius: 12,
    width: 44, height: 44, alignItems: 'center', justifyContent: 'center',
  },
  cardIconText: { fontSize: 22 },
  activePill: {
    backgroundColor: C.primaryBg, borderRadius: 8,
    paddingHorizontal: 10, paddingVertical: 4,
    borderWidth: 1, borderColor: 'rgba(26,158,110,0.3)',
  },
  activePillText: { fontSize: 10, fontWeight: '700', color: C.primary, letterSpacing: 0.8 },
  cardTitle: { fontSize: 17, fontWeight: '800', color: C.text, marginBottom: 4, letterSpacing: 0.1 },
  cardDesc: { fontSize: 13, color: C.textDim, lineHeight: 19, marginBottom: 8, letterSpacing: 0.1 },
  cardFooterRow: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
  },
  cardMeta: { fontSize: 12, fontWeight: '600', color: C.textDim },
  cardArrow: { fontSize: 20, color: C.primary, fontWeight: '700' },

  cardBoşluk: {
    backgroundColor: C.primaryBg, borderRadius: 18, padding: 18, marginBottom: 10,
    borderWidth: 1, borderColor: 'rgba(26,158,110,0.28)',
    borderLeftWidth: 4, borderLeftColor: C.primary,
    shadowColor: C.primary, shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12, shadowRadius: 10, elevation: 4,
  },
  wordListBtn: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    backgroundColor: C.surface, borderRadius: 16, padding: 16, marginTop: 10,
    borderWidth: 1, borderColor: C.border,
    borderLeftWidth: 4, borderLeftColor: C.primary,
    shadowColor: C.primary, shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08, shadowRadius: 4, elevation: 1,
  },
  wordListBtnText: { fontSize: 15, fontWeight: '700', color: C.text, letterSpacing: 0.1 },
  wordListBtnCount: { fontSize: 13, fontWeight: '600', color: C.primary },
  favBtn: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    backgroundColor: C.warningBg, borderRadius: 16, padding: 16, marginTop: 8,
    borderWidth: 1, borderColor: 'rgba(217,119,6,0.28)',
    borderLeftWidth: 4, borderLeftColor: C.warning,
    shadowColor: C.warning, shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08, shadowRadius: 4, elevation: 1,
  },
  favBtnText: { fontSize: 15, fontWeight: '700', color: C.text, letterSpacing: 0.1 },
  favBtnStar: { color: C.warning },
  favBtnCount: { fontSize: 13, fontWeight: '600', color: C.warning },
  footer: {
    textAlign: 'center', fontSize: 12, color: C.textFaint,
    marginTop: 24, fontWeight: '500', letterSpacing: 0.3,
  },
});
