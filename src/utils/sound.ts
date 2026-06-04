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
  if (Platform.OS === 'web') { playWebTone(880, 1108, 0.22); return; }
  if (!_correctSound) return;
  _correctSound.setPositionAsync(0).then(() => _correctSound!.playAsync().catch(() => {})).catch(() => {});
}

export function playWrongSound(): void {
  if (!_enabled) return;
  if (Platform.OS === 'web') { playWebTone(220, 311, 0.28); return; }
  if (!_wrongSound) return;
  _wrongSound.setPositionAsync(0).then(() => _wrongSound!.playAsync().catch(() => {})).catch(() => {});
}

function playWebTone(freq1: number, freq2: number, dur: number): void {
  try {
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gain = ctx.createGain();

    osc1.frequency.value = freq1;
    osc2.frequency.value = freq2;
    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(ctx.destination);

    const now = ctx.currentTime;
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.22, now + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.001, now + dur);

    osc1.start(now); osc2.start(now);
    osc1.stop(now + dur); osc2.stop(now + dur);
  } catch {
    // Web Audio API desteklenmiyorsa sessizce geç
  }
}
