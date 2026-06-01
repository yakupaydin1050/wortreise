import { Audio } from 'expo-av';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';

const SOUND_KEY = '@lernspiel_sound';

let _enabled = true;
let _correctSound: Audio.Sound | null = null;

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
  try {
    await Audio.setAudioModeAsync({ playsInSilentModeIOS: true });
    const { sound } = await Audio.Sound.createAsync(
      require('../../assets/sounds/correct.wav'),
      { shouldPlay: false, volume: 1 }
    );
    _correctSound = sound;
  } catch {
    // ses yüklenemezse sessizce devam et
  }
}

export function playCorrectSound(): void {
  if (!_enabled) return;
  if (Platform.OS === 'web') {
    playWebTone();
    return;
  }
  if (!_correctSound) return;
  _correctSound.setPositionAsync(0).then(() => {
    _correctSound!.playAsync().catch(() => {});
  }).catch(() => {});
}

function playWebTone(): void {
  try {
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gain = ctx.createGain();

    osc1.frequency.value = 880;
    osc2.frequency.value = 1108;
    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(ctx.destination);

    const now = ctx.currentTime;
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.25, now + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + 0.22);
    osc2.stop(now + 0.22);
  } catch {
    // Web Audio API desteklenmiyorsa sessizce geç
  }
}
