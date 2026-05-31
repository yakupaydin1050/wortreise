import React, { useCallback, useState } from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal, FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect } from '@react-navigation/native';
import {
  loadAllProgress, loadGameStats, loadStats, loadUnlockedAchievements,
  AllProgress, LevelId, GameStats, AppStats, UnlockedAchievement,
} from '../utils/storage';
import { getWordEntries, wordsByLevel } from '../data/generateCard';
import { ACHIEVEMENTS } from '../data/achievements';
import GridBackground from '../components/GridBackground';

const C = {
  bg: '#FAF8F4',
  surface: '#FFFFFF',
  surface2: '#EEF1FF',
  border: '#DDE3F5',
  text: '#1A2340',
  textDim: '#4E5C80',
  textFaint: '#8896B8',
  primary: '#3B5BDB',
  primaryBg: 'rgba(59,91,219,0.10)',
  success: '#1A9E6E',
  successBg: 'rgba(26,158,110,0.12)',
  warning: '#D97706',
  danger: '#DC2626',
};

function fmtTime(secs: number): string {
  const m = Math.floor(secs / 60);
  const s = secs % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

export default function StatsScreen() {
  const [progress, setProgress] = useState<AllProgress | null>(null);
  const [gameStats, setGameStats] = useState<GameStats | null>(null);
  const [appStats, setAppStats] = useState<AppStats | null>(null);
  const [unlocked, setUnlocked] = useState<UnlockedAchievement[]>([]);
  const [activeModal, setActiveModal] = useState<{ type: 'mastered' | 'wrong'; level: LevelId } | null>(null);
  const [tab, setTab] = useState<'stats' | 'words'>('stats');

  useFocusEffect(
    useCallback(() => {
      Promise.all([loadAllProgress(), loadGameStats(), loadStats(), loadUnlockedAchievements()]).then(([pr, gs, st, ach]) => {
        setProgress(pr);
        setGameStats(gs);
        setAppStats(st);
        setUnlocked(ach);
      });
    }, []),
  );

  const unlockedIds = new Set(unlocked.map(u => u.id));
  const unlockedCount = unlockedIds.size;

  return (
    <SafeAreaView style={styles.safe}>
      <GridBackground />

      <View style={styles.tabBar}>
        <TouchableOpacity
          style={[styles.tabBtn, tab === 'stats' && styles.tabBtnActive]}
          onPress={() => setTab('stats')}
          activeOpacity={0.7}
        >
          <Text style={[styles.tabBtnText, tab === 'stats' && styles.tabBtnTextActive]}>📊  İstatistik</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabBtn, tab === 'words' && styles.tabBtnActive]}
          onPress={() => setTab('words')}
          activeOpacity={0.7}
        >
          <Text style={[styles.tabBtnText, tab === 'words' && styles.tabBtnTextActive]}>📚  Kelimeler</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {tab === 'stats' && gameStats && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Oyun İstatistikleri</Text>

            <View style={[styles.gameCard, styles.gameCardBlue]}>
              <View style={styles.gameCardHeader}>
                <Text style={styles.gameCardIcon}>🎯</Text>
                <View style={{ flex: 1 }}>
                  <Text style={styles.gameCardTitle}>Artikel Savaşları</Text>
                  <Text style={styles.gameCardSub}>{gameStats.artikel.sessions} oturum oynandı</Text>
                </View>
                {gameStats.artikel.bestStreak > 0 && (
                  <View style={styles.gameBestBadge}>
                    <Text style={styles.gameBestText}>🏆 {gameStats.artikel.bestStreak}</Text>
                  </View>
                )}
              </View>
              <View style={styles.gameStatRow}>
                <View style={styles.gameStatItem}>
                  <Text style={styles.gameStatNum}>{gameStats.artikel.totalAnswered}</Text>
                  <Text style={styles.gameStatLabel}>Cevaplanan</Text>
                </View>
                <View style={styles.gameStatDivider} />
                <View style={styles.gameStatItem}>
                  <Text style={styles.gameStatNum}>
                    {gameStats.artikel.totalAnswered > 0
                      ? `%${Math.round((gameStats.artikel.totalCorrect / gameStats.artikel.totalAnswered) * 100)}`
                      : '—'}
                  </Text>
                  <Text style={styles.gameStatLabel}>Doğruluk</Text>
                </View>
                <View style={styles.gameStatDivider} />
                <View style={styles.gameStatItem}>
                  <Text style={styles.gameStatNum}>
                    {gameStats.artikel.bestStreak > 0 ? `${gameStats.artikel.bestStreakSeconds}sn` : '—'}
                  </Text>
                  <Text style={styles.gameStatLabel}>En İyi Süre</Text>
                </View>
              </View>
            </View>

            <View style={[styles.gameCard, styles.gameCardOrange]}>
              <View style={styles.gameCardHeader}>
                <Text style={styles.gameCardIcon}>🏹</Text>
                <View style={{ flex: 1 }}>
                  <Text style={styles.gameCardTitle}>Kelime Avı</Text>
                  <Text style={styles.gameCardSub}>{gameStats.kelimeAvi.sessions} oturum oynandı</Text>
                </View>
                {gameStats.kelimeAvi.bestStreak > 0 && (
                  <View style={styles.gameBestBadge}>
                    <Text style={styles.gameBestText}>🏆 {gameStats.kelimeAvi.bestStreak}</Text>
                  </View>
                )}
              </View>
              <View style={styles.gameStatRow}>
                <View style={styles.gameStatItem}>
                  <Text style={styles.gameStatNum}>{gameStats.kelimeAvi.totalAnswered}</Text>
                  <Text style={styles.gameStatLabel}>Cevaplanan</Text>
                </View>
                <View style={styles.gameStatDivider} />
                <View style={styles.gameStatItem}>
                  <Text style={styles.gameStatNum}>
                    {gameStats.kelimeAvi.totalAnswered > 0
                      ? `%${Math.round((gameStats.kelimeAvi.totalCorrect / gameStats.kelimeAvi.totalAnswered) * 100)}`
                      : '—'}
                  </Text>
                  <Text style={styles.gameStatLabel}>Doğruluk</Text>
                </View>
                <View style={styles.gameStatDivider} />
                <View style={styles.gameStatItem}>
                  <Text style={styles.gameStatNum}>
                    {gameStats.kelimeAvi.bestStreak > 0 ? `${gameStats.kelimeAvi.bestStreakSeconds}sn` : '—'}
                  </Text>
                  <Text style={styles.gameStatLabel}>En İyi Süre</Text>
                </View>
              </View>
            </View>

            <View style={[styles.gameCard, styles.gameCardGreen]}>
              <View style={styles.gameCardHeader}>
                <Text style={styles.gameCardIcon}>🔗</Text>
                <View style={{ flex: 1 }}>
                  <Text style={styles.gameCardTitle}>Eşleştirme</Text>
                  <Text style={styles.gameCardSub}>{gameStats.eslestirme.sessions} tur oynandı</Text>
                </View>
                {gameStats.eslestirme.bestTime > 0 && (
                  <View style={styles.gameBestBadge}>
                    <Text style={styles.gameBestText}>⚡ {gameStats.eslestirme.bestTime}sn</Text>
                  </View>
                )}
              </View>
              <View style={styles.gameStatRow}>
                <View style={styles.gameStatItem}>
                  <Text style={styles.gameStatNum}>{gameStats.eslestirme.totalPairs}</Text>
                  <Text style={styles.gameStatLabel}>Toplam Eşleşme</Text>
                </View>
                <View style={styles.gameStatDivider} />
                <View style={styles.gameStatItem}>
                  <Text style={styles.gameStatNum}>
                    {gameStats.eslestirme.bestTime > 0 ? `${gameStats.eslestirme.bestTime}sn` : '—'}
                  </Text>
                  <Text style={styles.gameStatLabel}>En İyi Süre</Text>
                </View>
                <View style={styles.gameStatDivider} />
                <View style={styles.gameStatItem}>
                  <Text style={styles.gameStatNum}>{gameStats.eslestirme.sessions}</Text>
                  <Text style={styles.gameStatLabel}>Tur</Text>
                </View>
              </View>
            </View>
            <View style={[styles.gameCard, styles.gameCardRed]}>
              <View style={styles.gameCardHeader}>
                <Text style={styles.gameCardIcon}>🃏</Text>
                <View style={{ flex: 1 }}>
                  <Text style={styles.gameCardTitle}>Hafıza</Text>
                  <Text style={styles.gameCardSub}>{gameStats.hafiza.sessions} oyun tamamlandı</Text>
                </View>
                {gameStats.hafiza.bestTime > 0 && (
                  <View style={styles.gameBestBadge}>
                    <Text style={styles.gameBestText}>⚡ {fmtTime(gameStats.hafiza.bestTime)}</Text>
                  </View>
                )}
              </View>
              <View style={styles.gameStatRow}>
                <View style={styles.gameStatItem}>
                  <Text style={styles.gameStatNum}>{gameStats.hafiza.sessions}</Text>
                  <Text style={styles.gameStatLabel}>Oyun</Text>
                </View>
                <View style={styles.gameStatDivider} />
                <View style={styles.gameStatItem}>
                  <Text style={styles.gameStatNum}>
                    {gameStats.hafiza.bestTime > 0 ? fmtTime(gameStats.hafiza.bestTime) : '—'}
                  </Text>
                  <Text style={styles.gameStatLabel}>En İyi Süre</Text>
                </View>
                <View style={styles.gameStatDivider} />
                <View style={styles.gameStatItem}>
                  <Text style={styles.gameStatNum}>
                    {gameStats.hafiza.bestMoves > 0 ? `${gameStats.hafiza.bestMoves}` : '—'}
                  </Text>
                  <Text style={styles.gameStatLabel}>En İyi Deneme</Text>
                </View>
              </View>
            </View>
          </View>
        )}

        {tab === 'stats' && (
          <View style={styles.section}>
            <View style={styles.achHeader}>
              <Text style={styles.sectionTitle}>Rozetler</Text>
              <Text style={styles.achCount}>{unlockedCount} / {ACHIEVEMENTS.length}</Text>
            </View>
            <View style={styles.achGrid}>
              {ACHIEVEMENTS.map(a => {
                const isUnlocked = unlockedIds.has(a.id);
                return (
                  <View
                    key={a.id}
                    style={[styles.achCard, isUnlocked ? styles.achCardUnlocked : styles.achCardLocked]}
                  >
                    <Text style={[styles.achEmoji, !isUnlocked && styles.achEmojiLocked]}>
                      {isUnlocked ? a.emoji : '🔒'}
                    </Text>
                    <Text style={[styles.achTitle, !isUnlocked && styles.achTitleLocked]}>{a.title}</Text>
                    <Text style={styles.achDesc}>{a.desc}</Text>
                  </View>
                );
              })}
            </View>
          </View>
        )}

        {tab === 'words' && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Kelime Havuzu</Text>
            {(['A1', 'A2', 'B1'] as LevelId[]).map(lvl => {
              const lvlProgress = progress?.[lvl];
              const isActive = wordsByLevel[lvl].length > 0;
              const mastered = lvlProgress?.masteredIds.length ?? 0;
              const review = lvlProgress?.wrongIds.length ?? 0;
              return (
                <View key={lvl} style={styles.levelPoolBlock}>
                  <View style={styles.levelPoolHeader}>
                    <View style={[styles.levelPoolBadge, !isActive && styles.levelPoolBadgeDim]}>
                      <Text style={[styles.levelPoolBadgeText, !isActive && styles.levelPoolBadgeTextDim]}>{lvl}</Text>
                    </View>
                    {!isActive && (
                      <Text style={styles.levelPoolSoon}>YAKINDA</Text>
                    )}
                  </View>
                  <TouchableOpacity
                    style={[styles.wordPoolCard, styles.wordPoolCardGreen, !isActive && styles.wordPoolCardDisabled]}
                    onPress={() => isActive && setActiveModal({ type: 'mastered', level: lvl })}
                    activeOpacity={isActive ? 0.8 : 1}
                  >
                    <View style={styles.wordPoolInner}>
                      <Text style={styles.wordPoolIcon}>✓</Text>
                      <View style={{ flex: 1 }}>
                        <Text style={styles.wordPoolTitle}>Öğrenilen Kelimeler</Text>
                        <Text style={styles.wordPoolSub}>{mastered} kelime öğrenildi</Text>
                      </View>
                    </View>
                    {isActive && <Text style={[styles.wordPoolChevron, { color: C.success }]}>›</Text>}
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.wordPoolCard, styles.wordPoolCardRed, !isActive && styles.wordPoolCardDisabled]}
                    onPress={() => isActive && setActiveModal({ type: 'wrong', level: lvl })}
                    activeOpacity={isActive ? 0.8 : 1}
                  >
                    <View style={styles.wordPoolInner}>
                      <Text style={styles.wordPoolIcon}>↺</Text>
                      <View style={{ flex: 1 }}>
                        <Text style={[styles.wordPoolTitle, { color: C.danger }]}>Tekrar Çalışılacaklar</Text>
                        <Text style={styles.wordPoolSub}>{review} kelime tekrar bekliyor</Text>
                      </View>
                    </View>
                    {isActive && <Text style={[styles.wordPoolChevron, { color: C.danger }]}>›</Text>}
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        )}
      </ScrollView>

      {/* Word list modal */}
      <Modal
        visible={activeModal !== null}
        transparent
        animationType="slide"
        onRequestClose={() => setActiveModal(null)}
      >
        <View style={styles.modalBackdrop}>
          <View style={styles.modalSheet}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>
                {activeModal?.type === 'mastered'
                  ? `✓ ${activeModal.level} — Öğrenilen Kelimeler`
                  : `↺ ${activeModal?.level} — Tekrar Çalışılacaklar`}
              </Text>
              <TouchableOpacity
                onPress={() => setActiveModal(null)}
                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
              >
                <Text style={styles.modalCloseText}>✕</Text>
              </TouchableOpacity>
            </View>

            {(() => {
              const lvlData = activeModal ? progress?.[activeModal.level] : null;
              const ids = activeModal?.type === 'mastered'
                ? (lvlData?.masteredIds ?? [])
                : (lvlData?.wrongIds ?? []);
              const entries = getWordEntries(ids, activeModal?.level ?? 'A1');

              if (entries.length === 0) {
                return (
                  <View style={styles.modalEmpty}>
                    <Text style={styles.modalEmptyText}>
                      {activeModal?.type === 'mastered'
                        ? 'Henüz öğrenilen kelime yok.\nBir kelimeyi 5 kez doğru yapınca buraya gelir.'
                        : 'Harika! Tekrar çalışılacak kelime yok.'}
                    </Text>
                  </View>
                );
              }

              return (
                <FlatList
                  data={entries}
                  keyExtractor={item => item.id}
                  contentContainerStyle={styles.modalList}
                  showsVerticalScrollIndicator={false}
                  renderItem={({ item }) => (
                    <View style={styles.wordRow}>
                      <Text style={styles.wordText}>{item.word}</Text>
                      {item.example ? (
                        <Text style={styles.wordExample} numberOfLines={1}>
                          {item.example.replace('___', '…')}
                        </Text>
                      ) : null}
                    </View>
                  )}
                />
              );
            })()}
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: C.bg },
  tabBar: {
    flexDirection: 'row', gap: 8,
    paddingHorizontal: 20, paddingVertical: 12,
    borderBottomWidth: 1, borderBottomColor: C.border,
    backgroundColor: C.bg,
  },
  tabBtn: {
    flex: 1, paddingVertical: 11, borderRadius: 12, alignItems: 'center',
    backgroundColor: C.surface, borderWidth: 1.5, borderColor: C.border,
  },
  tabBtnActive: {
    backgroundColor: C.primary, borderColor: C.primary,
    shadowColor: C.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3, shadowRadius: 10, elevation: 5,
  },
  tabBtnText: { fontSize: 14, fontWeight: '700', color: C.textDim, letterSpacing: 0.2 },
  tabBtnTextActive: { color: '#FFFFFF', fontWeight: '800' },
  container: { paddingHorizontal: 20, paddingTop: 20, paddingBottom: 48, gap: 24 },

  section: { gap: 10 },
  sectionTitle: { fontSize: 12, fontWeight: '600', color: C.textFaint, letterSpacing: 0.3 },

  gameCard: {
    borderRadius: 18, padding: 16,
    borderWidth: 1,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08, shadowRadius: 8, elevation: 2,
  },
  gameCardBlue: {
    backgroundColor: 'rgba(59,91,219,0.07)',
    borderColor: 'rgba(59,91,219,0.28)',
    borderLeftWidth: 4, borderLeftColor: C.primary,
    shadowColor: C.primary,
  },
  gameCardOrange: {
    backgroundColor: 'rgba(217,119,6,0.07)',
    borderColor: 'rgba(217,119,6,0.28)',
    borderLeftWidth: 4, borderLeftColor: C.warning,
    shadowColor: C.warning,
  },
  gameCardGreen: {
    backgroundColor: 'rgba(26,158,110,0.07)',
    borderColor: 'rgba(26,158,110,0.28)',
    borderLeftWidth: 4, borderLeftColor: C.success,
    shadowColor: C.success,
  },
  gameCardRed: {
    backgroundColor: 'rgba(220,38,38,0.06)',
    borderColor: 'rgba(220,38,38,0.22)',
    borderLeftWidth: 4, borderLeftColor: C.danger,
    shadowColor: C.danger,
  },
  gameCardHeader: { flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 8 },
  gameCardIcon: { fontSize: 26 },
  gameCardTitle: { fontSize: 15, fontWeight: '700', color: C.text, letterSpacing: 0.1 },
  gameCardSub: { fontSize: 12, color: C.textFaint, fontWeight: '500', marginTop: 1 },
  gameBestBadge: {
    backgroundColor: 'rgba(217,119,6,0.12)', borderRadius: 10,
    paddingHorizontal: 10, paddingVertical: 5,
    borderWidth: 1, borderColor: 'rgba(217,119,6,0.3)',
  },
  gameBestText: { fontSize: 13, fontWeight: '800', color: C.warning },
  gameStatRow: {
    flexDirection: 'row', alignItems: 'center',
    borderTopWidth: 1, borderTopColor: C.border,
    paddingTop: 12, marginTop: 2,
  },
  gameStatItem: { flex: 1, alignItems: 'center', gap: 3 },
  gameStatNum: { fontSize: 22, fontWeight: '800', color: C.text, letterSpacing: -0.5 },
  gameStatLabel: { fontSize: 12, fontWeight: '600', color: C.textFaint, letterSpacing: 0.3, textAlign: 'center' },
  gameStatDivider: { width: 1, height: 32, backgroundColor: C.border },

  levelPoolBlock: { gap: 8 },
  levelPoolHeader: { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 2 },
  levelPoolBadge: {
    backgroundColor: C.primary, borderRadius: 8,
    paddingHorizontal: 12, paddingVertical: 4,
  },
  levelPoolBadgeDim: { backgroundColor: C.border },
  levelPoolBadgeText: { fontSize: 13, fontWeight: '800', color: '#fff', letterSpacing: 0.5 },
  levelPoolBadgeTextDim: { color: C.textFaint },
  levelPoolSoon: { fontSize: 10, fontWeight: '700', color: C.warning, letterSpacing: 1 },

  wordPoolCard: {
    flexDirection: 'row', alignItems: 'center',
    paddingHorizontal: 18, paddingVertical: 16,
    borderRadius: 16, borderWidth: 1,
    shadowColor: '#000', shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05, shadowRadius: 4, elevation: 1,
  },
  wordPoolCardDisabled: { opacity: 0.45 },
  wordPoolCardGreen: {
    backgroundColor: 'rgba(26,158,110,0.07)',
    borderColor: 'rgba(26,158,110,0.28)',
    borderLeftWidth: 4, borderLeftColor: C.success,
  },
  wordPoolCardRed: {
    backgroundColor: 'rgba(220,38,38,0.06)',
    borderColor: 'rgba(220,38,38,0.22)',
    borderLeftWidth: 4, borderLeftColor: C.danger,
  },
  wordPoolInner: { flex: 1, flexDirection: 'row', alignItems: 'center', gap: 14 },
  wordPoolIcon: { fontSize: 22, color: C.textDim, width: 24, textAlign: 'center' },
  wordPoolTitle: { fontSize: 15, fontWeight: '700', color: C.success, marginBottom: 2, letterSpacing: 0.1 },
  wordPoolSub: { fontSize: 12, color: C.textFaint, fontWeight: '500' },
  wordPoolChevron: { fontSize: 24, fontWeight: '300', marginLeft: 10, lineHeight: 28, opacity: 0.6 },

  modalBackdrop: {
    flex: 1, backgroundColor: 'rgba(10,20,60,0.45)',
    justifyContent: 'flex-end',
  },
  modalSheet: {
    backgroundColor: C.surface, borderTopLeftRadius: 24, borderTopRightRadius: 24,
    borderWidth: 1, borderColor: C.border, borderBottomWidth: 0,
    maxHeight: '75%',
    paddingBottom: 32,
    shadowColor: '#000', shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.08, shadowRadius: 16, elevation: 8,
  },
  modalHeader: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    paddingHorizontal: 20, paddingTop: 20, paddingBottom: 14,
    borderBottomWidth: 1, borderBottomColor: C.border,
  },
  modalTitle: { fontSize: 16, fontWeight: '800', color: C.text, letterSpacing: 0.2 },
  modalCloseText: { fontSize: 18, color: C.textFaint, fontWeight: '600' },
  modalEmpty: { paddingHorizontal: 24, paddingVertical: 32, alignItems: 'center' },
  modalEmptyText: { fontSize: 14, color: C.textFaint, textAlign: 'center', lineHeight: 22, fontWeight: '500' },
  modalList: { paddingHorizontal: 16, paddingTop: 8, paddingBottom: 16 },
  wordRow: {
    paddingVertical: 12, paddingHorizontal: 4,
    borderBottomWidth: 1, borderBottomColor: C.border, gap: 3,
  },
  wordText: { fontSize: 16, fontWeight: '700', color: C.text, letterSpacing: 0.1 },
  wordExample: { fontSize: 12, color: C.textFaint, fontStyle: 'italic', letterSpacing: 0.1 },

  // Achievements
  achHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 },
  achCount: { fontSize: 12, fontWeight: '700', color: C.textFaint, letterSpacing: 0.5 },
  achGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  achCard: {
    width: '47%',
    borderRadius: 16, padding: 14, gap: 6,
    borderWidth: 1,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06, shadowRadius: 4, elevation: 1,
  },
  achCardUnlocked: {
    backgroundColor: C.primaryBg,
    borderColor: 'rgba(59,91,219,0.28)',
    borderLeftWidth: 4, borderLeftColor: C.primary,
    shadowColor: C.primary,
  },
  achCardLocked: {
    backgroundColor: C.surface,
    borderColor: C.border,
    shadowColor: '#000',
    opacity: 0.55,
  },
  achEmoji: { fontSize: 30 },
  achEmojiLocked: { opacity: 0.5 },
  achTitle: { fontSize: 13, fontWeight: '800', color: C.text, letterSpacing: 0.1 },
  achTitleLocked: { color: C.textFaint },
  achDesc: { fontSize: 11, color: C.textFaint, fontWeight: '400', lineHeight: 15 },
});
