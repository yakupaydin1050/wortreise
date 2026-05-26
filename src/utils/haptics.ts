import * as Haptics from 'expo-haptics';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';

const HAPTICS_KEY = '@lernspiel_haptics';

let _enabled = true;

export async function loadAndApplyHapticsPreference(): Promise<void> {
  try {
    const raw = await AsyncStorage.getItem(HAPTICS_KEY);
    _enabled = raw === null ? true : raw === 'true';
  } catch {
    _enabled = true;
  }
}

export async function saveHapticsEnabled(val: boolean): Promise<void> {
  _enabled = val;
  await AsyncStorage.setItem(HAPTICS_KEY, String(val));
}

export function getHapticsEnabled(): boolean {
  return _enabled;
}

export function triggerHaptic(type: Haptics.NotificationFeedbackType): void {
  if (!_enabled || Platform.OS === 'web') return;
  Haptics.notificationAsync(type).catch(() => {});
}
