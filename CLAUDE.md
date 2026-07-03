@AGENTS.md

# Wortreise — Project Guide

Wortreise (package name `lernspiel`) is an **Expo / React Native** mobile app that
teaches German vocabulary to **Turkish speakers** through fill-in-the-blank cards
and mini-games. UI language is Turkish; learning content is German.

> Expo has changed — read the versioned docs at
> https://docs.expo.dev/versions/v54.0.0/ before writing any code. SDK is **54**.

## Running the app

```
npm install          # first time (node_modules is not committed)
npx expo start       # starts Metro + shows QR code for Expo Go
```

- Test on a phone with **Expo Go** on the same Wi-Fi; scan the QR or enter
  `exp://<LAN-IP>:8081` manually.
- If `expo`/`babel-preset-expo` versions drift from the SDK, run
  `npx expo install --fix`.
- If port 8081 is held by a stale `node` process, kill it before restarting.

## Architecture

- **Entry:** `index.ts` → `App.tsx`. `App.tsx` holds all navigation: a native
  stack (`Onboarding`, `Main`, and each game screen) wrapping a bottom-tab
  navigator (`Keşfet`, `Oyunlar`, `Gelişim`, `Profil`).
- **First launch** shows `OnboardingScreen` until a profile exists in
  AsyncStorage (`@lernspiel_profile`); afterwards it lands on `Main`.
- **Screens:** `src/screens/` — level browsers (`A1/A2/B1Screen`), games
  (`GameScreen` fill-in-blank, `MatchingScreen`, `HafizaScreen` memory,
  `KelimeAviScreen` word hunt, `ArtikelScreen` der/die/das), story mode
  (`WortdorfScreen` / `NeighborhoodScreen` / `DialogScreen`), plus
  `Home/Stats/Profile`.
- **Components:** `src/components/` — `SentenceRow`, `WordChip`, `WordListModal`,
  `GridBackground`, `ErrorBoundary`.
- **Utils:** `src/utils/` — `storage` (AsyncStorage, progress/mastery/stats),
  `notifications`, `sound`, `haptics`, `firebase`.

## Data model

- **Types:** `src/types/index.ts` — `Sentence` (`german`, `germanWithBlank`,
  `targetWord`, `translationTR`, `translationEN`, optional `glossary`), `Card`.
- **Word banks:** `src/data/wordBankA1.ts` (~16k lines), `wordBankA2.ts`,
  `wordBankB1.ts` (~22.5k lines, largest). Each entry: `{ id, word, tr, sentences[] }`.
- **Card generation:** `src/data/generateCard.ts` — `generateCard(count,
  excludeIds, onlyFromIds, level)` draws sentences from the level's bank;
  supports review mode (`onlyFromIds`) and skipping mastered words.
- **Progress:** `src/utils/storage.ts` — per-level `correctCounts` / `wrongIds` /
  `masteredIds`; a word is mastered at `MASTERY_THRESHOLD = 3` correct answers.
  Per-game stats live under `@lernspiel_game_stats`.
- **Other content:** `wortdorf.ts` (dialog game), `achievements.ts`,
  `conjugations.ts`, `policies.ts` (privacy policy).

## Content quality rules

The learning content is user-facing and should read as professionally written.
When editing word banks or UI strings:

- **Separable verbs** (`targetWord` / `germanWithBlank`): follow the two-case rule
  documented in `AGENTS.md` (full verb when clause-final; only the prefix when the
  verb is split in Präsens/Präteritum).
- **German:** every noun capitalized; comma before subordinate clauses
  (`dass/weil/wenn/ob/…`) and extended `zu`-infinitive clauses; verb-final order in
  subordinate clauses. Some B1 entries use intentional Austrian/Swiss regionalisms.
- **Turkish:** `de/da` and `ki` conjunctions written separately; `mı/mi/mu/mü`
  question suffix always separate; watch vowel harmony; no stray Turkish words
  inside German sentences.
- Keep sentences complete — no `...`-truncated fragments as example sentences.
- **Do not touch app logic** for pure content/copy fixes; only change text.

## Git

- Default branch: `master`, remote `origin`
  (https://github.com/yakupaydin1050/wortreise.git).
- Group unrelated changes into separate commits (e.g. dependency bumps vs.
  content fixes). Commit and push only when asked.
- `node_modules/` is not tracked; do not commit local scratch/backup folders.
