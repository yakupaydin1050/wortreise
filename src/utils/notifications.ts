import * as Notifications from 'expo-notifications';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';
import { AppStats } from './storage';

const NOTIF_PREFS_KEY = '@lernspiel_notif_prefs';
const DAILY_NOTIF_ID_KEY = '@lernspiel_daily_notif_id';
const STREAK_NOTIF_ID_KEY = '@lernspiel_streak_notif_id';

export interface NotifPrefs {
  enabled: boolean;
  hour: number;
  minute: number;
}

const DEFAULT_PREFS: NotifPrefs = { enabled: false, hour: 20, minute: 0 };

export const NOTIF_TIME_PRESETS = [
  { label: '08:00', hour: 8, minute: 0 },
  { label: '12:00', hour: 12, minute: 0 },
  { label: '18:00', hour: 18, minute: 0 },
  { label: '20:00', hour: 20, minute: 0 },
  { label: '22:00', hour: 22, minute: 0 },
];

export function setupNotificationHandler() {
  if (Platform.OS === 'web') return;
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldShowBanner: true,
      shouldShowList: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }),
  });
}

export async function setupAndroidChannel() {
  if (Platform.OS !== 'android') return;
  await Notifications.setNotificationChannelAsync('default', {
    name: 'Genel Bildirimler',
    importance: Notifications.AndroidImportance.DEFAULT,
    vibrationPattern: [0, 250, 250, 250],
    lightColor: '#3B5BDB',
  });
}

export async function loadNotifPrefs(): Promise<NotifPrefs> {
  try {
    const raw = await AsyncStorage.getItem(NOTIF_PREFS_KEY);
    return raw ? { ...DEFAULT_PREFS, ...JSON.parse(raw) } : { ...DEFAULT_PREFS };
  } catch {
    return { ...DEFAULT_PREFS };
  }
}

export async function saveNotifPrefs(prefs: NotifPrefs): Promise<void> {
  await AsyncStorage.setItem(NOTIF_PREFS_KEY, JSON.stringify(prefs));
}

export async function requestNotifPermission(): Promise<boolean> {
  if (Platform.OS === 'web') return false;
  const { status } = await Notifications.requestPermissionsAsync({
    ios: { allowAlert: true, allowBadge: true, allowSound: true },
  });
  return status === 'granted';
}

export async function getNotifPermissionStatus(): Promise<'granted' | 'denied' | 'undetermined'> {
  if (Platform.OS === 'web') return 'denied';
  const { status } = await Notifications.getPermissionsAsync();
  return status;
}

// Schedule or reschedule the daily reminder. Cancels existing before scheduling.
export async function scheduleDailyNotif(prefs: NotifPrefs): Promise<void> {
  if (Platform.OS === 'web') return;

  const existingId = await AsyncStorage.getItem(DAILY_NOTIF_ID_KEY);
  if (existingId) {
    await Notifications.cancelScheduledNotificationAsync(existingId).catch(() => {});
    await AsyncStorage.removeItem(DAILY_NOTIF_ID_KEY);
  }

  if (!prefs.enabled) return;

  const id = await Notifications.scheduleNotificationAsync({
    content: {
      title: 'Almanca vakti! 🇩🇪',
      body: 'Bugünkü kartlarını çözdün mü? Her gün küçük bir adım.',
      sound: true,
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.DAILY,
      hour: prefs.hour,
      minute: prefs.minute,
    },
  });

  await AsyncStorage.setItem(DAILY_NOTIF_ID_KEY, id);
}

// Cancel daily reminder
export async function cancelDailyNotif(): Promise<void> {
  if (Platform.OS === 'web') return;
  try {
    const id = await AsyncStorage.getItem(DAILY_NOTIF_ID_KEY);
    if (id) {
      await Notifications.cancelScheduledNotificationAsync(id).catch(() => {});
      await AsyncStorage.removeItem(DAILY_NOTIF_ID_KEY);
    }
  } catch {}
}

// Schedule a one-time streak-at-risk notification for 22:00 today
export async function scheduleStreakNotif(streakCount: number): Promise<void> {
  if (Platform.OS === 'web') return;

  await cancelStreakNotif();

  const now = new Date();
  const fireTime = new Date();
  fireTime.setHours(22, 0, 0, 0);
  const seconds = Math.floor((fireTime.getTime() - now.getTime()) / 1000);

  if (seconds <= 0) return;

  const id = await Notifications.scheduleNotificationAsync({
    content: {
      title: '🔥 Seriniz tehlikede!',
      body: `${streakCount} günlük serinizi korumak için birkaç kart daha çözün.`,
      sound: true,
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
      seconds,
    },
  });

  await AsyncStorage.setItem(STREAK_NOTIF_ID_KEY, id);
}

// Cancel streak-at-risk notification
export async function cancelStreakNotif(): Promise<void> {
  if (Platform.OS === 'web') return;
  try {
    const id = await AsyncStorage.getItem(STREAK_NOTIF_ID_KEY);
    if (id) {
      await Notifications.cancelScheduledNotificationAsync(id).catch(() => {});
      await AsyncStorage.removeItem(STREAK_NOTIF_ID_KEY);
    }
  } catch {}
}

// Call on app startup and after goal completion.
// Schedules streak notif if at-risk, cancels if goal already met today.
export async function refreshStreakNotification(stats: AppStats): Promise<void> {
  if (Platform.OS === 'web') return;
  try {
    const today = new Date().toISOString().slice(0, 10);
    const goalMetToday = stats.lastGoalDate === today;

    if (stats.streak > 0 && !goalMetToday) {
      await scheduleStreakNotif(stats.streak);
    } else {
      await cancelStreakNotif();
    }
  } catch {}
}
