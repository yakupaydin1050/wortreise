import { wordBank, WordEntry } from './wordBank';
import { wordBankA2 } from './wordBankA2';
import { wordBankB1 } from './wordBankB1';
import { Card } from '../types';
import type { LevelId } from '../utils/storage';

export const wordsByLevel: Record<LevelId, WordEntry[]> = {
  A1: wordBank,
  A2: wordBankA2,
  B1: wordBankB1,
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export const TOTAL_WORD_COUNT = wordBank.length;

/**
 * Generates a card with `count` sentences.
 * - excludeIds: skip these word IDs (mastered words)
 * - onlyFromIds: pick ONLY from these word IDs (review mode) — no padding, count adapts to pool size
 * - level: which word bank to draw from (default A1)
 */
export function generateCard(count = 5, excludeIds: string[] = [], onlyFromIds?: string[], level: LevelId = 'A1'): Card {
  const bank = wordsByLevel[level];
  let pool: WordEntry[];
  let effectiveCount = count;

  if (onlyFromIds && onlyFromIds.length > 0) {
    pool = bank.filter(e => onlyFromIds.includes(e.id));
    effectiveCount = Math.min(pool.length, count);
  } else {
    pool = bank.filter(e => !excludeIds.includes(e.id));
    if (pool.length < count) pool = [...bank];
  }

  const selected = shuffle(pool).slice(0, effectiveCount);

  const sentences = selected.map((entry, i) => {
    const sentence = entry.sentences[Math.floor(Math.random() * entry.sentences.length)];
    return { ...sentence, id: `s${i}`, wordBankId: entry.id };
  });

  return {
    id: `card-${Date.now()}`,
    theme: `Grundwörter ${level}`,
    sentences,
  };
}

/**
 * Returns words from the bank that are NOT part of the current card.
 * Used for picking a distractor that isn't a correct answer.
 */
export function getDistractors(card: Card, allEntries: WordEntry[] = wordBank): string[] {
  const correctWords = new Set(card.sentences.map(s => s.targetWord.toLowerCase()));
  return allEntries
    .map(e => e.word)
    .filter(w => !correctWords.has(w.toLowerCase()));
}

export interface WordPair {
  german: string;
  turkish: string;
}

/**
 * Collects all glossary entries from the word bank and returns a random sample.
 * Glossary entries are the supporting words in each sentence (not the blank/target word),
 * and they all have confirmed Turkish translations — perfect for the matching game.
 */
export function getRandomWordPairs(count = 10, level: LevelId = 'A1'): WordPair[] {
  const bank = wordsByLevel[level];
  const seenKey = new Set<string>();
  const seenDE  = new Set<string>();
  const pairs: WordPair[] = [];
  for (const entry of bank) {
    for (const sentence of entry.sentences) {
      if (!sentence.glossary) continue;
      for (const [key, trans] of Object.entries(sentence.glossary)) {
        if (seenKey.has(key) || key.length <= 1) continue;
        seenKey.add(key);
        let displayDE = trans.de ?? key;
        if (!trans.de) {
          const regex = new RegExp(`\\b${key}\\b`, 'gi');
          const found = sentence.german.match(regex);
          if (found) displayDE = found[0];
        }
        // Skip if the same dictionary form was already collected (e.g. mach + machst → machen)
        if (seenDE.has(displayDE.toLowerCase())) continue;
        seenDE.add(displayDE.toLowerCase());
        const rawTR = trans.trDict ?? trans.tr;
        const displayTR = rawTR
          ? rawTR.replace(/\s*\(o\/o\/o\)/g, '').replace(/,\s*o\/o\/o/g, '')
          : undefined;
        if (displayTR) pairs.push({ german: displayDE, turkish: displayTR });
      }
    }
  }
  // If there weren't enough glossary-based pairs (common for A2/B1),
  // fall back to using the entry `word` and `tr` fields where available.
  if (pairs.length < count) {
    const fallback: WordPair[] = bank
      .map(e => {
        const bare = e.word.replace(/^(der|die|das)\s+/i, '');
        const tr = (e as any).tr || '';
        return tr ? { german: bare, turkish: tr } : null;
      })
      .filter((x): x is WordPair => x !== null);

    for (const p of shuffle(fallback)) {
      if (pairs.length >= count) break;
      const key = p.german.toLowerCase();
      if (seenDE.has(key)) continue;
      seenDE.add(key);
      pairs.push(p);
    }
  }

  return shuffle(pairs).slice(0, count);
}

/**
 * Looks up word entries by their IDs for the profile word list.
 * Returns { id, word, example } where example is the germanWithBlank sentence.
 */
export function getWordEntries(ids: string[], level: LevelId = 'A1'): Array<{ id: string; word: string; example: string }> {
  const bank = wordsByLevel[level];
  return ids
    .map(id => {
      const entry = bank.find(e => e.id === id);
      if (!entry) return null;
      return {
        id: entry.id,
        word: entry.word,
        example: entry.sentences[0]?.germanWithBlank ?? '',
      };
    })
    .filter((x): x is { id: string; word: string; example: string } => x !== null);
}
