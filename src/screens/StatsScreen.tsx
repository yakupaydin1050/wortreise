import React, { useCallback, useState } from 'react';
import {
  View, Text, StyleSheet, ScrollView, Modal, FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect } from '@react-navigation/native';
import {
  loadAllProgress, loadGameStats, loadStats, loadUnlockedAchievements,
  AllProgress, LevelId, GameStats, AppStats, UnlockedAchievement,
} from '../utils/storage';
import { getWordEntries, wordsByLevel } from '../data/generateCard';
import { ACHIEVEMENTS } from '../data/achievements';
import { alpha, colors, gameAccent, levelAccent, radius, spacing, type } from '../theme';
import { ScreenBackground, GlassPanel, PressableScale, SectionHeader, Pill } from '../components/ui';

function fmtTime(secs: number): string {
  const m = Math.floor(secs / 60);
  const s = secs % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

function GameStatPanel({
  icon, title, sub, accent, best, cells,
}: {
  icon: string;
  title: string;
  sub: string;
  accent: string;
  best?: string | null;
  cells: { value: string | number; label: string }[];
}) {
  return (
    <GlassPanel padding={spacing.lg} style={styles.gamePanel}>
      <View style={styles.gameHeader}>
        <View style={[styles.gameIcon, {
          backgroundColor: alpha(accent, 0.14), borderColor: alpha(accent, 0.3),
        }]}>
          <Text style={styles.gameIconText}>{icon}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.gameTitle}>{title}</Text>
          <Text style={styles.gameSub}>{sub}</Text>
        </View>
        {best ? <Pill label={best} tint={colors.gold} /> : null}
      </View>
      <View style={styles.gameStatRow}>
        {cells.map((c, i) => (
          <React.Fragment key={c.label}>
            {i > 0 && <View style={styles.gameStatDivider} />}
            <View style={styles.gameStatItem}>
              <Text style={styles.gameStatNum} numberOfLines={1}>{c.value}</Text>
              <Text style={styles.gameStatLabel} numberOfLines={1}>{c.label}</Text>
            </View>
          </React.Fragment>
        ))}
      </View>
    </GlassPanel>
  );
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

  const pct = (correct: number, answered: number) =>
    answered > 0 ? `%${Math.round((correct / answered) * 100)}` : '—';

  return (
    <SafeAreaView style={styles.safe}>
      <ScreenBackground tint={levelAccent.B1} />

      <View style={styles.headerArea}>
        <Text style={type.display}>Gelişim</Text>
        {/* Segmented control */}
        <View style={styles.segment}>
          {([
            { key: 'stats', label: '📊  İstatistik' },
            { key: 'words', label: '📚  Kelimeler' },
          ] as const).map(s => {
            const active = tab === s.key;
            return (
              <PressableScale
                key={s.key}
                onPress={() => setTab(s.key)}
                style={[styles.segmentBtn, active && styles.segmentBtnActive]}
                accessibilityLabel={s.label}
              >
                <Text style={[styles.segmentText, active && styles.segmentTextActive]}>{s.label}</Text>
              </PressableScale>
            );
          })}
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {tab === 'stats' && gameStats && (
          <View style={styles.section}>
            <SectionHeader title="Oyun İstatistikleri" />
            <GameStatPanel
              icon="🎯" title="Artikel Savaşları" accent={gameAccent.artikel}
              sub={`${gameStats.artikel.sessions} oturum oynandı`}
              best={gameStats.artikel.bestStreak > 0 ? `🏆 ${gameStats.artikel.bestStreak}` : null}
              cells={[
                { value: gameStats.artikel.totalAnswered, label: 'Cevaplanan' },
                { value: pct(gameStats.artikel.totalCorrect, gameStats.artikel.totalAnswered), label: 'Doğruluk' },
                { value: gameStats.artikel.bestStreak > 0 ? `${gameStats.artikel.bestStreakSeconds}sn` : '—', label: 'En İyi Süre' },
              ]}
            />
            <GameStatPanel
              icon="🏹" title="Kelime Avı" accent={gameAccent.kelimeAvi}
              sub={`${gameStats.kelimeAvi.sessions} oturum oynandı`}
              best={gameStats.kelimeAvi.bestStreak > 0 ? `🏆 ${gameStats.kelimeAvi.bestStreak}` : null}
              cells={[
                { value: gameStats.kelimeAvi.totalAnswered, label: 'Cevaplanan' },
                { value: pct(gameStats.kelimeAvi.totalCorrect, gameStats.kelimeAvi.totalAnswered), label: 'Doğruluk' },
                { value: gameStats.kelimeAvi.bestStreak > 0 ? `${gameStats.kelimeAvi.bestStreakSeconds}sn` : '—', label: 'En İyi Süre' },
              ]}
            />
            <GameStatPanel
              icon="🔗" title="Eşleştirme" accent={gameAccent.matching}
              sub={`${gameStats.eslestirme.sessions} tur oynandı`}
              best={gameStats.eslestirme.bestTime > 0 ? `⚡ ${gameStats.eslestirme.bestTime}sn` : null}
              cells={[
                { value: gameStats.eslestirme.totalPairs, label: 'Toplam Eşleşme' },
                { value: gameStats.eslestirme.bestTime > 0 ? `${gameStats.eslestirme.bestTime}sn` : '—', label: 'En İyi Süre' },
                { value: gameStats.eslestirme.sessions, label: 'Tur' },
              ]}
            />
            <GameStatPanel
              icon="🃏" title="Hafıza" accent={gameAccent.hafiza}
              sub={`${gameStats.hafiza.sessions} oyun tamamlandı`}
              best={gameStats.hafiza.bestTime > 0 ? `⚡ ${fmtTime(gameStats.hafiza.bestTime)}` : null}
              cells={[
                { value: gameStats.hafiza.sessions, label: 'Oyun' },
                { value: gameStats.hafiza.bestTime > 0 ? fmtTime(gameStats.hafiza.bestTime) : '—', label: 'En İyi Süre' },
                { value: gameStats.hafiza.bestMoves > 0 ? `${gameStats.hafiza.bestMoves}` : '—', label: 'En İyi Deneme' },
              ]}
            />
          </View>
        )}

        {tab === 'stats' && (
          <View style={styles.section}>
            <SectionHeader title="Rozetler" trailing={`${unlockedCount} / ${ACHIEVEMENTS.length}`} spaced />
            <View style={styles.achGrid}>
              {ACHIEVEMENTS.map(a => {
                const isUnlocked = unlockedIds.has(a.id);
                return (
                  <GlassPanel
                    key={a.id}
                    padding={spacing.lg}
                    tint={isUnlocked ? colors.gold : undefined}
                    style={[styles.achCard, !isUnlocked && styles.achCardLocked]}
                  >
                    <Text style={[styles.achEmoji, !isUnlocked && { opacity: 0.5 }]}>
                      {isUnlocked ? a.emoji : '🔒'}
                    </Text>
                    <Text style={[styles.achTitle, !isUnlocked && { color: colors.textFaint }]}>{a.title}</Text>
                    <Text style={styles.achDesc}>{a.desc}</Text>
                  </GlassPanel>
                );
              })}
            </View>
          </View>
        )}

        {tab === 'words' && (
          <View style={styles.section}>
            <SectionHeader title="Kelime Havuzu" />
            {(['A1', 'A2', 'B1'] as LevelId[]).map(lvl => {
              const lvlProgress = progress?.[lvl];
              const isActive = wordsByLevel[lvl].length > 0;
              const mastered = lvlProgress?.masteredIds.length ?? 0;
              const review = lvlProgress?.wrongIds.length ?? 0;
              const accent = levelAccent[lvl];
              return (
                <View key={lvl} style={styles.poolBlock}>
                  <View style={styles.poolHeader}>
                    <Pill label={lvl} tint={isActive ? accent : colors.textFaint} solid={isActive} />
                    {!isActive && <Text style={styles.poolSoon}>YAKINDA</Text>}
                  </View>
                  <PressableScale
                    onPress={() => isActive && setActiveModal({ type: 'mastered', level: lvl })}
                    disabled={!isActive}
                    accessibilityLabel={`${lvl} öğrenilen kelimeler`}
                  >
                    <GlassPanel padding={spacing.lg} raised={isActive} tint={colors.success} style={[styles.poolCard, !isActive && styles.poolCardDisabled]}>
                      <Text style={[styles.poolIcon, { color: colors.success }]}>✓</Text>
                      <View style={{ flex: 1 }}>
                        <Text style={[styles.poolTitle, { color: colors.success }]}>Öğrenilen Kelimeler</Text>
                        <Text style={styles.poolSub}>{mastered} kelime öğrenildi</Text>
                      </View>
                      {isActive && <Text style={[styles.chevron, { color: colors.success }]}>›</Text>}
                    </GlassPanel>
                  </PressableScale>
                  <PressableScale
                    onPress={() => isActive && setActiveModal({ type: 'wrong', level: lvl })}
                    disabled={!isActive}
                    accessibilityLabel={`${lvl} tekrar çalışılacaklar`}
                  >
                    <GlassPanel padding={spacing.lg} raised={isActive} tint={colors.danger} style={[styles.poolCard, !isActive && styles.poolCardDisabled]}>
                      <Text style={[styles.poolIcon, { color: colors.danger }]}>↺</Text>
                      <View style={{ flex: 1 }}>
                        <Text style={[styles.poolTitle, { color: colors.danger }]}>Tekrar Çalışılacaklar</Text>
                        <Text style={styles.poolSub}>{review} kelime tekrar bekliyor</Text>
                      </View>
                      {isActive && <Text style={[styles.chevron, { color: colors.danger }]}>›</Text>}
                    </GlassPanel>
                  </PressableScale>
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
            <View style={styles.modalHandle} />
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>
                {activeModal?.type === 'mastered'
                  ? `✓ ${activeModal.level} — Öğrenilen Kelimeler`
                  : `↺ ${activeModal?.level} — Tekrar Çalışılacaklar`}
              </Text>
              <PressableScale
                onPress={() => setActiveModal(null)}
                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                accessibilityLabel="Kapat"
              >
                <Text style={styles.modalCloseText}>✕</Text>
              </PressableScale>
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
                        ? 'Henüz öğrenilen kelime yok.\nBir kelimeyi 3 kez doğru yapınca buraya gelir.'
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
  safe: { flex: 1, backgroundColor: colors.bg },
  headerArea: {
    paddingHorizontal: spacing.xl, paddingTop: spacing.xl, gap: spacing.lg,
  },
  segment: {
    flexDirection: 'row', gap: spacing.xs,
    backgroundColor: colors.glass,
    borderWidth: 1, borderColor: colors.glassBorder,
    borderRadius: radius.md, padding: 4,
  },
  segmentBtn: {
    flex: 1, paddingVertical: 10, borderRadius: radius.sm, alignItems: 'center',
  },
  segmentBtnActive: {
    backgroundColor: colors.primarySoft,
    borderWidth: 1, borderColor: colors.primaryBorder,
  },
  segmentText: { fontSize: 13.5, fontWeight: '700', color: colors.textFaint, letterSpacing: 0.2 },
  segmentTextActive: { color: colors.text },

  container: {
    paddingHorizontal: spacing.xl, paddingTop: spacing.xl, paddingBottom: 56, gap: spacing.xxl,
  },
  section: { gap: spacing.md },

  gamePanel: { gap: spacing.md },
  gameHeader: { flexDirection: 'row', alignItems: 'center', gap: spacing.md },
  gameIcon: {
    width: 44, height: 44, borderRadius: radius.sm,
    borderWidth: 1, alignItems: 'center', justifyContent: 'center',
  },
  gameIconText: { fontSize: 20 },
  gameTitle: { ...type.heading, fontSize: 15.5 },
  gameSub: { ...type.caption, marginTop: 1 },
  gameStatRow: {
    flexDirection: 'row', alignItems: 'center',
    borderTopWidth: 1, borderTopColor: colors.glassBorder, paddingTop: spacing.md,
  },
  gameStatItem: { flex: 1, alignItems: 'center', gap: 3 },
  gameStatNum: { ...type.numeral, fontSize: 20 },
  gameStatLabel: { fontSize: 11.5, fontWeight: '600', color: colors.textFaint, letterSpacing: 0.3 },
  gameStatDivider: { width: 1, height: 30, backgroundColor: colors.glassBorder },

  achGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.md },
  achCard: { width: '47.5%', flexGrow: 1, gap: 6 },
  achCardLocked: { opacity: 0.55 },
  achEmoji: { fontSize: 30 },
  achTitle: { fontSize: 13, fontWeight: '800', color: colors.text, letterSpacing: 0.1 },
  achDesc: { fontSize: 11, color: colors.textFaint, fontWeight: '400', lineHeight: 15 },

  poolBlock: { gap: spacing.sm, marginBottom: spacing.md },
  poolHeader: { flexDirection: 'row', alignItems: 'center', gap: spacing.md, marginBottom: 2 },
  poolSoon: { fontSize: 10, fontWeight: '700', color: colors.warning, letterSpacing: 1 },
  poolCard: { flexDirection: 'row', alignItems: 'center', gap: spacing.lg },
  poolCardDisabled: { opacity: 0.45 },
  poolIcon: { fontSize: 22, width: 26, textAlign: 'center', fontWeight: '700' },
  poolTitle: { fontSize: 15, fontWeight: '700', marginBottom: 2, letterSpacing: 0.1 },
  poolSub: { ...type.caption },
  chevron: { fontSize: 24, fontWeight: '400', opacity: 0.7 },

  modalBackdrop: { flex: 1, backgroundColor: colors.backdrop, justifyContent: 'flex-end' },
  modalSheet: {
    backgroundColor: colors.bgSheet,
    borderTopLeftRadius: radius.xl, borderTopRightRadius: radius.xl,
    borderWidth: 1, borderColor: colors.glassBorderStrong, borderBottomWidth: 0,
    maxHeight: '75%',
    paddingBottom: 32,
  },
  modalHandle: {
    width: 40, height: 4, borderRadius: 2,
    backgroundColor: colors.glassBorderStrong, alignSelf: 'center', marginTop: 10,
  },
  modalHeader: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    paddingHorizontal: spacing.xl, paddingTop: spacing.lg, paddingBottom: spacing.md,
    borderBottomWidth: 1, borderBottomColor: colors.glassBorder,
  },
  modalTitle: { fontSize: 16, fontWeight: '800', color: colors.text, letterSpacing: 0.2 },
  modalCloseText: { fontSize: 18, color: colors.textDim, fontWeight: '600' },
  modalEmpty: { paddingHorizontal: 24, paddingVertical: 32, alignItems: 'center' },
  modalEmptyText: { fontSize: 14, color: colors.textDim, textAlign: 'center', lineHeight: 22, fontWeight: '500' },
  modalList: { paddingHorizontal: spacing.lg, paddingTop: spacing.sm, paddingBottom: spacing.lg },
  wordRow: {
    paddingVertical: 12, paddingHorizontal: 4,
    borderBottomWidth: 1, borderBottomColor: colors.glassBorder, gap: 3,
  },
  wordText: { fontSize: 16, fontWeight: '700', color: colors.text, letterSpacing: 0.1 },
  wordExample: { fontSize: 12, color: colors.textFaint, fontStyle: 'italic', letterSpacing: 0.1 },
});
