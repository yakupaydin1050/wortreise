import { AppStats, GameStats } from '../utils/storage';

export interface AchievementDef {
  id: string;
  emoji: string;
  title: string;
  desc: string;
  category: 'kelime' | 'streak' | 'oyun' | 'dogruluk';
  check: (stats: AppStats, gameStats: GameStats, masteredCount: number) => boolean;
}

export const ACHIEVEMENTS: AchievementDef[] = [
  // Kelime öğrenme
  {
    id: 'first_word',
    emoji: '🌱',
    title: 'İlk Adım',
    desc: 'İlk kelimenı öğrendin',
    category: 'kelime',
    check: (_, __, m) => m >= 1,
  },
  {
    id: 'words_10',
    emoji: '📖',
    title: 'Kelime Avcısı',
    desc: '10 kelime öğrendin',
    category: 'kelime',
    check: (_, __, m) => m >= 10,
  },
  {
    id: 'words_50',
    emoji: '🎓',
    title: 'Sözcük Ustası',
    desc: '50 kelime öğrendin',
    category: 'kelime',
    check: (_, __, m) => m >= 50,
  },
  {
    id: 'words_100',
    emoji: '🏆',
    title: 'Kelime Şampiyonu',
    desc: '100 kelime öğrendin',
    category: 'kelime',
    check: (_, __, m) => m >= 100,
  },

  // Streak
  {
    id: 'streak_3',
    emoji: '🔥',
    title: 'Ritim',
    desc: '3 günlük seri yaptın',
    category: 'streak',
    check: (s) => s.longestStreak >= 3,
  },
  {
    id: 'streak_7',
    emoji: '⚡',
    title: 'Haftalık Kahraman',
    desc: '7 günlük seri yaptın',
    category: 'streak',
    check: (s) => s.longestStreak >= 7,
  },
  {
    id: 'streak_30',
    emoji: '💎',
    title: 'Aylık Efsane',
    desc: '30 günlük seri yaptın',
    category: 'streak',
    check: (s) => s.longestStreak >= 30,
  },

  // Kart & oyun
  {
    id: 'cards_10',
    emoji: '🃏',
    title: 'İlk Tur',
    desc: '10 kart çözdün',
    category: 'oyun',
    check: (s) => s.totalCards >= 10,
  },
  {
    id: 'cards_100',
    emoji: '🎴',
    title: 'Kartçı',
    desc: '100 kart çözdün',
    category: 'oyun',
    check: (s) => s.totalCards >= 100,
  },
  {
    id: 'all_games',
    emoji: '🎮',
    title: 'Kâşif',
    desc: 'Tüm oyunları denedin',
    category: 'oyun',
    check: (_, gs) =>
      gs.artikel.sessions > 0 &&
      gs.kelimeAvi.sessions > 0 &&
      gs.eslestirme.sessions > 0 &&
      gs.hafiza.sessions > 0,
  },
  {
    id: 'matching_10',
    emoji: '🧩',
    title: 'Eşleştirme Ustası',
    desc: '10 eşleştirme oyunu oynadın',
    category: 'oyun',
    check: (_, gs) => gs.eslestirme.sessions >= 10,
  },

  // Doğruluk
  {
    id: 'accuracy_80',
    emoji: '🎯',
    title: 'Keskin Zeka',
    desc: 'Min 50 soruda %80 doğruluk',
    category: 'dogruluk',
    check: (s) =>
      s.totalAnswered >= 50 &&
      s.totalCorrect / s.totalAnswered >= 0.8,
  },
];

export function checkNewAchievements(
  stats: AppStats,
  gameStats: GameStats,
  masteredCount: number,
  alreadyUnlockedIds: string[],
): AchievementDef[] {
  return ACHIEVEMENTS.filter(
    a => !alreadyUnlockedIds.includes(a.id) && a.check(stats, gameStats, masteredCount),
  );
}
