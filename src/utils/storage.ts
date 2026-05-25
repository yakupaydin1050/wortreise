import AsyncStorage from '@react-native-async-storage/async-storage';

const PROFILE_KEY = '@lernspiel_profile';
const STATS_KEY = '@lernspiel_stats';
const ALL_PROGRESS_KEY = '@lernspiel_all_progress';
const LEGACY_PROGRESS_KEY = '@lernspiel_progress';
const GAME_STATS_KEY = '@lernspiel_game_stats';

export const MASTERY_THRESHOLD = 5;

export type LevelId = 'A1' | 'A2' | 'B1';

export interface LevelProgress {
  correctCounts: Record<string, number>;
  wrongIds: string[];
  masteredIds: string[];
}

export type AllProgress = Record<LevelId, LevelProgress>;

// Keep alias for any imports that still use WordProgress
export type WordProgress = LevelProgress;

export interface SingleGameStats {
  sessions: number;
  totalAnswered: number;
  totalCorrect: number;
  bestStreak: number;
  bestStreakSeconds: number;
}

export interface MatchingStats {
  sessions: number;
  totalPairs: number;
  bestTime: number; // seconds, 0 = no timed game completed
}

export interface HafizaStats {
  sessions: number;
  bestTime: number;
  bestMoves: number;
}

export interface GameStats {
  artikel: SingleGameStats;
  kelimeAvi: SingleGameStats;
  eslestirme: MatchingStats;
  hafiza: HafizaStats;
}

function defaultSingleGame(): SingleGameStats {
  return { sessions: 0, totalAnswered: 0, totalCorrect: 0, bestStreak: 0, bestStreakSeconds: 0 };
}

function defaultHafiza(): HafizaStats {
  return { sessions: 0, bestTime: 0, bestMoves: 0 };
}

function defaultGameStats(): GameStats {
  return {
    artikel: defaultSingleGame(),
    kelimeAvi: defaultSingleGame(),
    eslestirme: { sessions: 0, totalPairs: 0, bestTime: 0 },
    hafiza: defaultHafiza(),
  };
}

export type CharacterType = 'erkek' | 'kadin' | 'cesit';

export interface UserProfile {
  name: string;
  dailyGoal: number;
  character?: CharacterType;
  avatar?: string;
}

export function getCharacter(profile: UserProfile | null): string {
  if (profile?.avatar) return profile.avatar;
  const fallbacks: Record<CharacterType, string> = { erkek: '👨', kadin: '👩', cesit: '🧑' };
  return fallbacks[profile?.character ?? 'erkek'];
}

export interface AppStats {
  streak: number;
  longestStreak: number;
  lastGoalDate: string | null;
  totalCards: number;
  totalWords: number;
  totalCorrect: number;
  totalAnswered: number;
  todayCards: number;
  todayDate: string;
  coins: number;
}

function todayISO(): string {
  return new Date().toISOString().slice(0, 10);
}

function yesterdayISO(): string {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toISOString().slice(0, 10);
}

const DEFAULT_STATS: AppStats = {
  streak: 0,
  longestStreak: 0,
  lastGoalDate: null,
  totalCards: 0,
  totalWords: 0,
  totalCorrect: 0,
  totalAnswered: 0,
  todayCards: 0,
  todayDate: todayISO(),
  coins: 0,
};

function emptyLevel(): LevelProgress {
  return { correctCounts: {}, wrongIds: [], masteredIds: [] };
}

function defaultAll(): AllProgress {
  return { A1: emptyLevel(), A2: emptyLevel(), B1: emptyLevel() };
}

// ─── Profile ──────────────────────────────────────────────────────────────────

export async function loadProfile(): Promise<UserProfile | null> {
  try {
    const raw = await AsyncStorage.getItem(PROFILE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export async function saveProfile(profile: UserProfile): Promise<void> {
  await AsyncStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
}

export async function clearProfile(): Promise<void> {
  await AsyncStorage.removeItem(PROFILE_KEY);
}

// ─── Stats ────────────────────────────────────────────────────────────────────

export async function loadStats(): Promise<AppStats> {
  try {
    const raw = await AsyncStorage.getItem(STATS_KEY);
    if (!raw) return { ...DEFAULT_STATS, todayDate: todayISO() };

    const stored = JSON.parse(raw);
    const stats: AppStats = {
      ...DEFAULT_STATS,
      ...stored,
      todayCards: stored.todayCards ?? stored.todayWords ?? 0,
    };
    const today = todayISO();

    if (stats.todayDate !== today) {
      stats.todayCards = 0;
      stats.todayDate = today;
    }

    if (stats.lastGoalDate && stats.lastGoalDate < yesterdayISO()) {
      stats.streak = 0;
    }

    return stats;
  } catch {
    return { ...DEFAULT_STATS, todayDate: todayISO() };
  }
}

export async function saveStats(stats: AppStats): Promise<void> {
  await AsyncStorage.setItem(STATS_KEY, JSON.stringify(stats));
}

export async function resetStats(): Promise<void> {
  await AsyncStorage.removeItem(STATS_KEY);
}

export async function addCoins(amount: number): Promise<number> {
  const stats = await loadStats();
  stats.coins = (stats.coins ?? 0) + amount;
  await saveStats(stats);
  return stats.coins;
}

// ─── Progress (level-aware) ───────────────────────────────────────────────────

export async function loadAllProgress(): Promise<AllProgress> {
  try {
    const raw = await AsyncStorage.getItem(ALL_PROGRESS_KEY);
    if (raw) {
      const stored = JSON.parse(raw);
      const all = defaultAll();
      for (const level of ['A1', 'A2', 'B1'] as LevelId[]) {
        if (stored[level]) {
          all[level] = { ...emptyLevel(), ...stored[level] };
        }
      }
      return all;
    }

    // Migrate from old flat key → A1
    const legacy = await AsyncStorage.getItem(LEGACY_PROGRESS_KEY);
    if (legacy) {
      const old = JSON.parse(legacy);
      const all = defaultAll();
      all.A1 = {
        correctCounts: old.correctCounts ?? {},
        wrongIds: old.wrongIds ?? [],
        masteredIds: old.masteredIds ?? [],
      };
      await AsyncStorage.setItem(ALL_PROGRESS_KEY, JSON.stringify(all));
      await AsyncStorage.removeItem(LEGACY_PROGRESS_KEY);
      return all;
    }

    return defaultAll();
  } catch {
    return defaultAll();
  }
}

export async function loadLevelProgress(level: LevelId): Promise<LevelProgress> {
  const all = await loadAllProgress();
  return all[level];
}

// Legacy alias — loads A1 (used by any code not yet updated)
export async function loadProgress(): Promise<LevelProgress> {
  return loadLevelProgress('A1');
}

export async function saveAllProgress(all: AllProgress): Promise<void> {
  await AsyncStorage.setItem(ALL_PROGRESS_KEY, JSON.stringify(all));
}

export async function resetProgress(level?: LevelId): Promise<void> {
  if (level) {
    const all = await loadAllProgress();
    all[level] = emptyLevel();
    await saveAllProgress(all);
  } else {
    await AsyncStorage.removeItem(ALL_PROGRESS_KEY);
    await AsyncStorage.removeItem(LEGACY_PROGRESS_KEY);
  }
}

export async function recordWordResults(
  level: LevelId,
  correctWordIds: string[],
  wrongWordIds: string[],
): Promise<{ newlyMastered: number }> {
  const all = await loadAllProgress();
  const p = all[level];
  let newlyMastered = 0;

  for (const id of correctWordIds) {
    p.correctCounts[id] = (p.correctCounts[id] ?? 0) + 1;
    if (p.correctCounts[id] >= MASTERY_THRESHOLD && !p.masteredIds.includes(id)) {
      p.masteredIds.push(id);
      p.wrongIds = p.wrongIds.filter(w => w !== id);
      newlyMastered++;
    }
  }

  for (const id of wrongWordIds) {
    if (!p.masteredIds.includes(id) && !p.wrongIds.includes(id)) {
      p.wrongIds.push(id);
    }
  }

  await saveAllProgress(all);
  return { newlyMastered };
}

// ─── Game Stats ───────────────────────────────────────────────────────────────

export async function loadGameStats(): Promise<GameStats> {
  try {
    const raw = await AsyncStorage.getItem(GAME_STATS_KEY);
    if (!raw) return defaultGameStats();
    const stored = JSON.parse(raw);
    const def = defaultGameStats();
    return {
      artikel: { ...def.artikel, ...stored.artikel },
      kelimeAvi: { ...def.kelimeAvi, ...stored.kelimeAvi },
      eslestirme: { ...def.eslestirme, ...stored.eslestirme },
      hafiza: { ...def.hafiza, ...(stored.hafiza ?? {}) },
    };
  } catch {
    return defaultGameStats();
  }
}

export async function saveGameStats(gs: GameStats): Promise<void> {
  await AsyncStorage.setItem(GAME_STATS_KEY, JSON.stringify(gs));
}

export async function resetGameStats(): Promise<void> {
  await AsyncStorage.removeItem(GAME_STATS_KEY);
}

export async function recordStreakGame(
  game: 'artikel' | 'kelimeAvi',
  streak: number,
  seconds: number,
): Promise<void> {
  const gs = await loadGameStats();
  const s = gs[game];
  s.sessions += 1;
  s.totalAnswered += streak + 1; // streak correct + 1 wrong/timeout
  s.totalCorrect += streak;
  if (streak > s.bestStreak || (streak === s.bestStreak && streak > 0 && seconds < s.bestStreakSeconds)) {
    s.bestStreak = streak;
    s.bestStreakSeconds = seconds;
  }
  await saveGameStats(gs);
}

export async function recordHafizaGame(time: number, moves: number): Promise<void> {
  const gs = await loadGameStats();
  const h = gs.hafiza;
  h.sessions += 1;
  if (h.bestTime === 0 || time < h.bestTime) h.bestTime = time;
  if (h.bestMoves === 0 || moves < h.bestMoves) h.bestMoves = moves;
  await saveGameStats(gs);
}

export async function recordMatchingGame(
  pairsMatched: number,
  timeUsed: number, // 0 = untimed
): Promise<void> {
  const gs = await loadGameStats();
  const s = gs.eslestirme;
  s.sessions += 1;
  s.totalPairs += pairsMatched;
  if (timeUsed > 0 && pairsMatched === 10) {
    s.bestTime = s.bestTime === 0 ? timeUsed : Math.min(s.bestTime, timeUsed);
  }
  await saveGameStats(gs);
}

export async function recordCardCompleted(
  correctCount: number,
  dailyGoal: number,
): Promise<{ stats: AppStats; goalJustMet: boolean }> {
  const stats = await loadStats();
  const today = todayISO();
  const yesterday = yesterdayISO();

  const goalWasAlreadyMet = stats.lastGoalDate === today;

  stats.totalCards += 1;
  stats.totalWords += 5;
  stats.totalCorrect += correctCount;
  stats.totalAnswered += 5;
  stats.todayCards += 1;

  let goalJustMet = false;
  if (!goalWasAlreadyMet && stats.todayCards >= dailyGoal) {
    goalJustMet = true;
    if (stats.lastGoalDate === yesterday) {
      stats.streak += 1;
    } else {
      stats.streak = 1;
    }
    stats.lastGoalDate = today;
    if (stats.streak > stats.longestStreak) {
      stats.longestStreak = stats.streak;
    }
  }

  await saveStats(stats);
  return { stats, goalJustMet };
}
