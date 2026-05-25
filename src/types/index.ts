export interface WordItem {
  id: string;
  word: string;
}

export interface GlossaryEntry {
  tr: string;
  en?: string;      // Optional: English translation removed for consistency
  de?: string;     // dictionary/infinitive form for display (e.g. 'trinken' not 'trinke')
  trDict?: string; // Turkish translation of the dictionary form (e.g. 'içmek' not 'içiyorum')
}

export interface Sentence {
  id: string;
  wordBankId?: string;
  targetWord: string;
  german: string;
  germanWithBlank: string;
  translationTR: string;
  translationEN: string;
  glossary?: Record<string, GlossaryEntry>;
}

export interface Card {
  id: string;
  theme: string;
  sentences: Sentence[];
}
