import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase';

/**
 * Error/crash report delivery.
 *
 * Primary channel: Firestore (archive — nothing is ever lost).
 * Notification channel: Telegram Bot API, called directly from the app so
 * reports arrive as instant push messages without any server or paid plan.
 *
 * Config, repo public olduğu için git'e girmeyen .env dosyasında tutulur
 * (proje kökü, .gitignore'da):
 *   EXPO_PUBLIC_TELEGRAM_BOT_TOKEN=...   (@BotFather → /newbot)
 *   EXPO_PUBLIC_TELEGRAM_CHAT_ID=...     (bota mesaj at → getUpdates → chat.id)
 * Değerler boşsa Telegram adımı sessizce atlanır, Firestore çalışmaya devam eder.
 *
 * Not: EXPO_PUBLIC_* değerleri derlenen uygulama paketine gömülür; kötüye
 * kullanım olursa BotFather'dan /revoke ile token'ı yenile.
 */
const TELEGRAM_BOT_TOKEN = process.env.EXPO_PUBLIC_TELEGRAM_BOT_TOKEN ?? '';
const TELEGRAM_CHAT_ID = process.env.EXPO_PUBLIC_TELEGRAM_CHAT_ID ?? '';

type ReportKind = 'reports' | 'crash_reports';

const KIND_TITLES: Record<ReportKind, string> = {
  reports: '🐛 Wortreise — Hata Bildirimi',
  crash_reports: '💥 Wortreise — Çökme Raporu',
};

function formatTelegramMessage(kind: ReportKind, payload: Record<string, unknown>): string {
  const lines = [KIND_TITLES[kind], ''];
  for (const [key, value] of Object.entries(payload)) {
    if (value === undefined || value === null || value === '') continue;
    const text = String(value);
    // Keep stack traces readable but bounded (Telegram limit is 4096 chars)
    lines.push(`${key}: ${text.length > 600 ? text.slice(0, 600) + '…' : text}`);
  }
  return lines.join('\n').slice(0, 4000);
}

/** Best-effort Telegram notification — never throws, never blocks the caller. */
function notifyTelegram(kind: ReportKind, payload: Record<string, unknown>): void {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) return;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);
  fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: TELEGRAM_CHAT_ID,
      text: formatTelegramMessage(kind, payload),
      disable_web_page_preview: true,
    }),
    signal: controller.signal,
  })
    .catch(() => {})
    .finally(() => clearTimeout(timeout));
}

/**
 * Persists the report to Firestore (throws on failure, matching the previous
 * per-screen addDoc behavior) and fires a Telegram notification in parallel.
 */
export async function submitReport(
  kind: ReportKind,
  payload: Record<string, unknown>,
): Promise<void> {
  notifyTelegram(kind, payload);
  await addDoc(collection(db, kind), { ...payload, createdAt: serverTimestamp() });
}
