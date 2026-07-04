import { Audio } from 'expo-av';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';

const SOUND_KEY = '@lernspiel_sound';

let _enabled = true;
let _correctSound: Audio.Sound | null = null;
let _wrongSound: Audio.Sound | null = null;

export async function loadAndApplySoundPreference(): Promise<void> {
  try {
    const raw = await AsyncStorage.getItem(SOUND_KEY);
    _enabled = raw === null ? true : raw === 'true';
  } catch {
    _enabled = true;
  }
}

export async function saveSoundEnabled(val: boolean): Promise<void> {
  _enabled = val;
  await AsyncStorage.setItem(SOUND_KEY, String(val));
}

export function getSoundEnabled(): boolean {
  return _enabled;
}

export async function preloadSounds(): Promise<void> {
  if (Platform.OS === 'web') return;
  if (_correctSound && _wrongSound) return;
  try {
    await Audio.setAudioModeAsync({ playsInSilentModeIOS: true });
    const [c, w] = await Promise.all([
      Audio.Sound.createAsync(require('../../assets/sounds/correct.wav'), { shouldPlay: false, volume: 1 }),
      Audio.Sound.createAsync(require('../../assets/sounds/wrong.wav'), { shouldPlay: false, volume: 1 }),
    ]);
    _correctSound = c.sound;
    _wrongSound = w.sound;
  } catch {}
}

export function playCorrectSound(): void {
  if (!_enabled) return;
  if (Platform.OS === 'web') {
    // Soft two-note bell chime, matches the native correct.wav (D5 -> A5)
    playWebNotes([
      { freq: 587.33, start: 0, dur: 0.32, vol: 0.16 },
      { freq: 880.0, start: 0.08, dur: 0.48, vol: 0.2 },
    ]);
    return;
  }
  if (!_correctSound) return;
  _correctSound.setPositionAsync(0).then(() => _correctSound!.playAsync().catch(() => {})).catch(() => {});
}

export function playWrongSound(): void {
  if (!_enabled) return;
  if (Platform.OS === 'web') {
    // Gentle low double-knock, matches the native wrong.wav (G3 -> Eb3)
    playWebNotes([
      { freq: 196.0, start: 0, dur: 0.28, vol: 0.24 },
      { freq: 155.56, start: 0.115, dur: 0.38, vol: 0.26 },
    ]);
    return;
  }
  if (!_wrongSound) return;
  _wrongSound.setPositionAsync(0).then(() => _wrongSound!.playAsync().catch(() => {})).catch(() => {});
}

interface WebNote { freq: number; start: number; dur: number; vol: number }

function playWebNotes(notes: WebNote[]): void {
  try {
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const now = ctx.currentTime;
    for (const n of notes) {
      const t0 = now + n.start;
      // fundamental + quiet 2nd harmonic for a rounder, bell-like body
      for (const [mult, amp] of [[1, 1], [2, 0.25]] as const) {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.frequency.value = n.freq * mult;
        osc.connect(gain);
        gain.connect(ctx.destination);
        gain.gain.setValueAtTime(0, t0);
        gain.gain.linearRampToValueAtTime(n.vol * amp, t0 + 0.008);
        gain.gain.exponentialRampToValueAtTime(0.0008, t0 + n.dur);
        osc.start(t0);
        osc.stop(t0 + n.dur + 0.02);
      }
    }
  } catch {
    // Web Audio API desteklenmiyorsa sessizce geç
  }
}
