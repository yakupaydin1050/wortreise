import React, { useCallback, useState } from 'react';
import {
  View, Text, StyleSheet, ScrollView, TextInput, Alert, Modal, Share, Linking,
  TouchableWithoutFeedback, Platform, Switch, TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  loadProfile, loadStats, saveProfile,
  resetStats, resetProgress, resetGameStats, resetAchievements,
  UserProfile, AppStats, getCharacter,
} from '../utils/storage';
import { POLICY_CONTENT, PolicyType, PolicyLang } from '../data/policies';
import {
  loadNotifPrefs, saveNotifPrefs, requestNotifPermission, getNotifPermissionStatus,
  scheduleDailyNotif, cancelDailyNotif, NotifPrefs, NOTIF_TIME_PRESETS,
} from '../utils/notifications';
import { saveHapticsEnabled, getHapticsEnabled, triggerSelect } from '../utils/haptics';
import { saveSoundEnabled, getSoundEnabled } from '../utils/sound';
import { alpha, colors, radius, spacing, type } from '../theme';
import {
  ScreenBackground, GlassPanel, PressableScale, SectionHeader, ProgressBar, InteractiveButton, Pill,
} from '../components/ui';

const AVATARS = [
  '👨', '👩', '🧑', '👦', '👧', '👴', '👵', '🧔',
  '👨‍🦱', '👩‍🦱', '👨‍🦰', '👩‍🦰', '👨‍🦳', '👩‍🦳', '👨‍🦲', '🧔‍♀️',
  '😎', '🤓', '🧐', '🤩', '🥸', '🤠', '🥳', '😤',
  '🧙‍♂️', '🧙‍♀️', '🦸', '🦸‍♀️', '🤖', '👽', '🎃', '🧟',
  '🦊', '🐼', '🐸', '🦁', '🐯', '🦝', '🐨', '🦦',
];

const GOAL_OPTIONS = [5, 15, 25];

function StatBox({ value, label }: { value: string | number; label: string }) {
  return (
    <GlassPanel padding={spacing.lg} style={styles.statBox}>
      <Text style={[type.numeral, { fontSize: 24 }]}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </GlassPanel>
  );
}

function SettingsRow({
  icon, title, sub, tint, onPress, chevron = true,
}: {
  icon: string;
  title: string;
  sub: string;
  tint?: string;
  onPress: () => void;
  chevron?: boolean;
}) {
  const accent = tint ?? colors.primary;
  return (
    <PressableScale onPress={onPress} accessibilityLabel={title}>
      <GlassPanel padding={spacing.lg} raised tint={accent} style={styles.rowCard}>
        <View style={[styles.rowIcon, {
          backgroundColor: alpha(accent, 0.12), borderColor: alpha(accent, 0.28),
        }]}>
          <Text style={styles.rowIconText}>{icon}</Text>
        </View>
        <View style={styles.rowTextWrap}>
          <Text style={[styles.rowTitle, tint ? { color: tint } : null]}>{title}</Text>
          <Text style={styles.rowSub}>{sub}</Text>
        </View>
        {chevron && <Text style={[styles.chevron, { color: accent }]}>›</Text>}
      </GlassPanel>
    </PressableScale>
  );
}

export default function ProfileScreen({ navigation }: { navigation: any }) {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [stats, setStats] = useState<AppStats | null>(null);
  const [editing, setEditing] = useState(false);
  const [editName, setEditName] = useState('');
  const [editGoal, setEditGoal] = useState(15);
  const [editAvatar, setEditAvatar] = useState('👤');
  const [avatarSheetVisible, setAvatarSheetVisible] = useState(false);
  const [policyVisible, setPolicyVisible] = useState(false);
  const [policyType, setPolicyType] = useState<PolicyType>('privacy');
  const [policyLang, setPolicyLang] = useState<PolicyLang>('tr');
  const [notifPrefs, setNotifPrefs] = useState<NotifPrefs>({ enabled: false, hour: 20, minute: 0 });
  const [hapticsEnabled, setHapticsEnabled] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [tab, setTab] = useState<'profile' | 'settings'>('profile');

  function openPolicy(type: PolicyType) {
    setPolicyType(type);
    setPolicyVisible(true);
  }

  useFocusEffect(
    useCallback(() => {
      Promise.all([loadProfile(), loadStats(), loadNotifPrefs()]).then(([p, s, n]) => {
        setProfile(p);
        setStats(s);
        setNotifPrefs(n);
        setHapticsEnabled(getHapticsEnabled());
        setSoundEnabled(getSoundEnabled());
      });
    }, []),
  );

  async function handleNotifToggle(value: boolean) {
    if (Platform.OS === 'web') return;
    if (value) {
      const status = await getNotifPermissionStatus();
      let granted = status === 'granted';
      if (status !== 'granted') {
        granted = await requestNotifPermission();
      }
      if (!granted) {
        Alert.alert(
          'Bildirim İzni Gerekli',
          'Bildirim almak için lütfen ayarlardan izin verin.',
          [{ text: 'Tamam' }],
        );
        return;
      }
    }
    const updated: NotifPrefs = { ...notifPrefs, enabled: value };
    setNotifPrefs(updated);
    await saveNotifPrefs(updated);
    if (value) {
      await scheduleDailyNotif(updated);
    } else {
      await cancelDailyNotif();
    }
  }

  async function handleHapticsToggle(val: boolean) {
    setHapticsEnabled(val);
    await saveHapticsEnabled(val);
  }

  async function handleSoundToggle(val: boolean) {
    setSoundEnabled(val);
    await saveSoundEnabled(val);
  }

  async function handleNotifTimeChange(hour: number, minute: number) {
    triggerSelect();
    const updated: NotifPrefs = { ...notifPrefs, hour, minute };
    setNotifPrefs(updated);
    await saveNotifPrefs(updated);
    if (updated.enabled) {
      await scheduleDailyNotif(updated);
    }
  }

  function startEdit() {
    if (!profile) return;
    setEditName(profile.name);
    setEditGoal(profile.dailyGoal);
    setEditAvatar(getCharacter(profile));
    setEditing(true);
  }

  async function saveEdit() {
    const trimmed = editName.trim();
    if (trimmed.length < 3) return;
    const updated: UserProfile = { ...profile!, name: trimmed, dailyGoal: editGoal, avatar: editAvatar };
    await saveProfile(updated);
    setProfile(updated);
    setEditing(false);
  }

  function accuracy() {
    if (!stats || stats.totalAnswered === 0) return '—';
    return `%${Math.round((stats.totalCorrect / stats.totalAnswered) * 100)}`;
  }

  function handleResetStats() {
    const doReset = async () => {
      await Promise.all([resetStats(), resetProgress(), resetGameStats(), resetAchievements()]);
      const s = await loadStats();
      setStats(s);
    };
    if (Platform.OS === 'web') {
      if (window.confirm('İstatistikleri sıfırla?\n\nSeri ve tüm istatistikler silinecek. Kullanıcı adın ve günlük hedefin korunur.')) {
        doReset();
      }
      return;
    }
    Alert.alert(
      'İstatistikleri Sıfırla',
      'Seri ve tüm istatistikler silinecek.\n\nKullanıcı adın ve günlük hedefin korunur.',
      [
        { text: 'Vazgeç', style: 'cancel' },
        { text: 'Sıfırla', style: 'destructive', onPress: doReset },
      ],
    );
  }

  const IOS_REVIEW_URL  = 'https://apps.apple.com/app/id6774772723?action=write-review';
  const IOS_APP_URL     = 'https://apps.apple.com/app/id6774772723';
  const ANDROID_MARKET  = 'market://details?id=com.yaay.wortreise';
  const ANDROID_WEB_URL = 'https://play.google.com/store/apps/details?id=com.yaay.wortreise';

  async function handleReview() {
    try {
      if (Platform.OS === 'ios') {
        await Linking.openURL(IOS_REVIEW_URL);
      } else if (Platform.OS === 'android') {
        const opened = await Linking.canOpenURL(ANDROID_MARKET);
        await Linking.openURL(opened ? ANDROID_MARKET : ANDROID_WEB_URL);
      } else {
        await Linking.openURL(IOS_APP_URL);
      }
    } catch {
      Alert.alert('Hata', 'Mağaza açılamadı.');
    }
  }

  function handleShare() {
    const shareMsg =
      'Wortreise\'yi denedin mi? 🇩🇪\n\nAlmanca kelimeler, eşleştirme oyunları ve hafıza kartlarıyla günde birkaç dakikada Almanca öğrenebiliyorsun.\n\nHemen indir, birlikte öğrenelim! 🚀';
    Share.share(
      Platform.OS === 'ios'
        ? { message: shareMsg, url: IOS_APP_URL, title: 'Wortreise — Almanca Öğren' }
        : { message: `${shareMsg}\n${ANDROID_WEB_URL}`, title: 'Wortreise — Almanca Öğren' },
    );
  }

  function handleLogout() {
    const doLogout = async () => {
      await AsyncStorage.clear();
      navigation.getParent()?.replace('Onboarding');
    };
    if (Platform.OS === 'web') {
      if (window.confirm('Çıkış yap?\n\nTüm veriler kalıcı olarak silinecek. Bu işlem geri alınamaz.')) {
        doLogout();
      }
      return;
    }
    Alert.alert(
      'Çıkış Yap',
      'Hesabın kalıcı olarak silinecek.\n\nİstatistikler ve günlük veriler kaybolacak.\n\nBu işlem geri alınamaz.',
      [
        { text: 'Vazgeç', style: 'cancel' },
        { text: 'Çıkış Yap', style: 'destructive', onPress: doLogout },
      ],
    );
  }

  if (!profile || !stats) return null;

  const goalProgress = Math.min(stats.todayCards / profile.dailyGoal, 1);
  const goalDone = stats.todayCards >= profile.dailyGoal;

  return (
    <SafeAreaView style={styles.safe}>
      <ScreenBackground />

      <View style={styles.headerArea}>
        <Text style={type.display}>Profil</Text>
        <View style={styles.segment}>
          {([
            { key: 'profile', label: '👤  Profil' },
            { key: 'settings', label: '⚙️  Ayarlar' },
          ] as const).map(s => {
            const active = tab === s.key;
            return (
              <PressableScale
                key={s.key}
                onPress={() => setTab(s.key)}
                style={[styles.segmentBtn, active && styles.segmentBtnActive]}
                accessibilityLabel={s.label}
              >
                <Text style={[styles.segmentText, active && styles.segmentTextActive]}>{s.label}</Text>
              </PressableScale>
            );
          })}
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {tab === 'profile' && (
          <>
            {editing ? (
              <GlassPanel emphasis="strong" style={styles.editCard}>
                <Text style={styles.editTitle}>Profili Düzenle</Text>
                <Text style={type.label}>Kullanıcı Adı</Text>
                <TextInput
                  style={styles.editInput}
                  value={editName}
                  onChangeText={setEditName}
                  autoCapitalize="words"
                  maxLength={24}
                  autoFocus
                  placeholderTextColor={colors.textFaint}
                  selectionColor={colors.primary}
                />
                <Text style={type.label}>Avatar</Text>
                <PressableScale onPress={() => setAvatarSheetVisible(true)} accessibilityLabel="Avatar seç">
                  <View style={styles.avatarTrigger}>
                    <View style={[
                      styles.avatarTriggerCircle,
                      editAvatar && editAvatar !== '👤' && styles.avatarTriggerCircleSelected,
                    ]}>
                      <Text style={styles.avatarTriggerEmoji}>{editAvatar || '?'}</Text>
                    </View>
                    <View style={{ flex: 1, gap: 2 }}>
                      <Text style={styles.avatarTriggerTitle}>
                        {editAvatar && editAvatar !== '👤' ? 'Avatar seçildi' : 'Avatar seç'}
                      </Text>
                      <Text style={styles.avatarTriggerHint}>Değiştirmek için dokun</Text>
                    </View>
                    <Text style={styles.chevron}>›</Text>
                  </View>
                </PressableScale>
                <Text style={type.label}>Günlük Hedef</Text>
                <View style={styles.goalRow}>
                  {GOAL_OPTIONS.map(g => {
                    const active = editGoal === g;
                    return (
                      <PressableScale
                        key={g}
                        onPress={() => { triggerSelect(); setEditGoal(g); }}
                        style={[styles.goalChip, active && styles.goalChipActive]}
                        accessibilityLabel={`${g} kart`}
                      >
                        <Text style={[styles.goalChipText, active && styles.goalChipTextActive]}>
                          {g} kart
                        </Text>
                      </PressableScale>
                    );
                  })}
                </View>
                <View style={styles.editActions}>
                  <InteractiveButton label="Vazgeç" variant="glass" onPress={() => setEditing(false)} style={{ flex: 1 }} />
                  <InteractiveButton
                    label="Kaydet"
                    onPress={saveEdit}
                    disabled={editName.trim().length < 2}
                    style={{ flex: 1 }}
                  />
                </View>
              </GlassPanel>
            ) : (
              <GlassPanel emphasis="strong" padding={spacing.xl} style={styles.heroCard}>
                <View style={styles.avatarCircle}>
                  <Text style={styles.avatarEmoji}>{getCharacter(profile)}</Text>
                </View>
                <Text style={styles.nameText} numberOfLines={1}>{profile.name}</Text>
                <InteractiveButton label="Düzenle" variant="glass" size="sm" onPress={startEdit} />
              </GlassPanel>
            )}

            <GlassPanel tint={colors.gold} padding={spacing.lg} style={styles.streakCard}>
              <Text style={styles.streakIcon}>🔥</Text>
              <View style={{ flex: 1 }}>
                <Text style={styles.streakNumber}>{stats.streak} günlük seri</Text>
                <Text style={styles.streakSub}>En uzun seri: {stats.longestStreak} gün</Text>
              </View>
              {stats.streak > 0 && (
                <Text style={[type.numeral, { color: colors.gold, fontSize: 26 }]}>{stats.streak}</Text>
              )}
            </GlassPanel>

            <SectionHeader title="Bugün İlerleme" spaced />
            <GlassPanel padding={spacing.xl} style={styles.todayCard}>
              <View style={styles.todayMetrics}>
                <View style={styles.todayMetric}>
                  <Text style={[type.numeral, { fontSize: 26 }]}>{stats.todayCards}</Text>
                  <Text style={styles.todayMetricLabel}>Kart Açıldı</Text>
                </View>
                <View style={styles.todayMetricSep} />
                <View style={styles.todayMetric}>
                  <Text style={[type.numeral, { fontSize: 26 }]}>{profile.dailyGoal}</Text>
                  <Text style={styles.todayMetricLabel}>Günlük Hedef</Text>
                </View>
              </View>
              {goalDone ? (
                <View style={styles.goalDonePill}>
                  <Text style={styles.goalDoneText}>✓ Hedef tamamlandı!</Text>
                </View>
              ) : (
                <ProgressBar progress={goalProgress} height={6} />
              )}
            </GlassPanel>

            <SectionHeader title="Toplam" spaced />
            <View style={styles.statsGrid}>
              <StatBox value={stats.totalCards} label="Kart" />
              <StatBox value={stats.totalWords} label="Kelime" />
              <StatBox value={stats.totalCorrect} label="Doğru" />
              <StatBox value={accuracy()} label="İsabet" />
            </View>
          </>
        )}

        {tab === 'settings' && (
          <>
            {Platform.OS !== 'web' && (
              <>
                <SectionHeader title="Bildirimler" />
                <GlassPanel padding={spacing.lg} style={styles.notifCard}>
                  <View style={styles.notifToggleRow}>
                    <View style={styles.notifIconWrap}>
                      <Text style={styles.notifIcon}>📳</Text>
                    </View>
                    <View style={styles.notifTextWrap}>
                      <Text style={styles.notifTitle}>Titreşim</Text>
                      <Text style={styles.notifSub}>Doğru/yanlış cevaplarda titreşim</Text>
                    </View>
                    <Switch
                      value={hapticsEnabled}
                      onValueChange={handleHapticsToggle}
                      trackColor={{ false: 'rgba(94,106,146,0.35)', true: alpha(colors.primary, 0.45) }}
                      thumbColor={hapticsEnabled ? colors.primary : colors.textFaint}
                    />
                  </View>
                  <View style={styles.notifDivider} />
                  <View style={styles.notifToggleRow}>
                    <View style={styles.notifIconWrap}>
                      <Text style={styles.notifIcon}>🔊</Text>
                    </View>
                    <View style={styles.notifTextWrap}>
                      <Text style={styles.notifTitle}>Ses</Text>
                      <Text style={styles.notifSub}>Doğru/yanlış cevaplarda ses efekti</Text>
                    </View>
                    <Switch
                      value={soundEnabled}
                      onValueChange={handleSoundToggle}
                      trackColor={{ false: 'rgba(94,106,146,0.35)', true: alpha(colors.primary, 0.45) }}
                      thumbColor={soundEnabled ? colors.primary : colors.textFaint}
                    />
                  </View>
                  <View style={styles.notifDivider} />
                  <View style={styles.notifToggleRow}>
                    <View style={styles.notifIconWrap}>
                      <Text style={styles.notifIcon}>🔔</Text>
                    </View>
                    <View style={styles.notifTextWrap}>
                      <Text style={styles.notifTitle}>Günlük Hatırlatıcı</Text>
                      <Text style={styles.notifSub}>
                        {notifPrefs.enabled
                          ? `Her gün ${String(notifPrefs.hour).padStart(2, '0')}:${String(notifPrefs.minute).padStart(2, '0')}'de hatırlat`
                          : 'Belirli bir saatte hatırlatma al'}
                      </Text>
                    </View>
                    <Switch
                      value={notifPrefs.enabled}
                      onValueChange={handleNotifToggle}
                      trackColor={{ false: 'rgba(94,106,146,0.35)', true: alpha(colors.primary, 0.45) }}
                      thumbColor={notifPrefs.enabled ? colors.primary : colors.textFaint}
                    />
                  </View>
                  {notifPrefs.enabled && (
                    <View style={styles.notifTimeRow}>
                      {NOTIF_TIME_PRESETS.map(preset => {
                        const active = preset.hour === notifPrefs.hour && preset.minute === notifPrefs.minute;
                        return (
                          <PressableScale
                            key={preset.label}
                            onPress={() => handleNotifTimeChange(preset.hour, preset.minute)}
                            style={[styles.notifTimeChip, active && styles.notifTimeChipActive]}
                            accessibilityLabel={preset.label}
                          >
                            <Text style={[styles.notifTimeText, active && styles.notifTimeTextActive]}>
                              {preset.label}
                            </Text>
                          </PressableScale>
                        );
                      })}
                    </View>
                  )}
                </GlassPanel>
              </>
            )}

            <SectionHeader title="Uygulama" spaced />
            <SettingsRow
              icon="⭐" title="Uygulamayı Değerlendir" sub="Görüşlerin bizim için değerli"
              tint={colors.gold} onPress={handleReview}
            />
            <SettingsRow
              icon="📤" title="Uygulamayı Tavsiye Et" sub="Arkadaşlarına öner, birlikte öğrenin"
              onPress={handleShare}
            />

            <SectionHeader title="Hesap" spaced />
            <SettingsRow
              icon="↺" title="İstatistikleri Sıfırla" sub="Seri ve istatistikler silinir, profil kalır"
              tint={colors.warning} onPress={handleResetStats}
            />
            <SettingsRow
              icon="⏻" title="Çıkış Yap" sub="Tüm veriler kalıcı olarak silinir"
              tint={colors.danger} onPress={handleLogout}
            />

            <SectionHeader title="Yasal" spaced />
            <SettingsRow
              icon="🔒" title="Gizlilik Politikası" sub="Verilerin nasıl işlendiğini öğren"
              onPress={() => openPolicy('privacy')}
            />
            <SettingsRow
              icon="📋" title="Kullanım Koşulları" sub="Hizmet şartlarını incele"
              onPress={() => openPolicy('terms')}
            />

            <SectionHeader title="Hakkında" spaced />
            <GlassPanel padding={spacing.xl} style={styles.footerCard}>
              <Text style={styles.footerFlag}>🇩🇪</Text>
              <Text style={styles.footerAppName}>Wortreise</Text>
              <Text style={styles.footerVersion}>Versiyon 1.0.1</Text>
              <View style={styles.footerDivider} />
              <Text style={styles.footerCredit}>YAAY tarafından hayata geçirildi</Text>
              <Text style={styles.footerAI}>Claude ile geliştirildi 🤖</Text>
            </GlassPanel>
          </>
        )}
      </ScrollView>

      {/* Policy modal */}
      <Modal
        visible={policyVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setPolicyVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setPolicyVisible(false)}>
          <View style={styles.sheetOverlay}>
            <TouchableWithoutFeedback>
              <View style={styles.sheet}>
                <View style={styles.sheetHandle} />
                <View style={styles.policyLangRow}>
                  {(['tr', 'de', 'en'] as PolicyLang[]).map(lang => (
                    <PressableScale
                      key={lang}
                      onPress={() => setPolicyLang(lang)}
                      style={[styles.policyLangBtn, policyLang === lang && styles.policyLangBtnActive]}
                      accessibilityLabel={lang}
                    >
                      <Text style={[styles.policyLangText, policyLang === lang && styles.policyLangTextActive]}>
                        {lang === 'tr' ? '🇹🇷 TR' : lang === 'de' ? '🇩🇪 DE' : '🇬🇧 EN'}
                      </Text>
                    </PressableScale>
                  ))}
                </View>
                <Text style={styles.policyTitle}>{POLICY_CONTENT[policyType][policyLang].title}</Text>
                <ScrollView showsVerticalScrollIndicator={false} style={styles.policyScroll}>
                  <Text style={styles.policyBody}>{POLICY_CONTENT[policyType][policyLang].body}</Text>
                </ScrollView>
                <InteractiveButton label="Kapat" onPress={() => setPolicyVisible(false)} fullWidth />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      {/* Avatar picker bottom sheet */}
      <Modal
        visible={avatarSheetVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setAvatarSheetVisible(false)}
      >
        <TouchableOpacity
          style={styles.sheetOverlay}
          activeOpacity={1}
          onPress={() => setAvatarSheetVisible(false)}
        >
          <View style={[styles.sheet, { maxHeight: '72%' }]} onStartShouldSetResponder={() => true}>
            <View style={styles.sheetHandle} />
            <Text style={styles.avatarSheetTitle}>Avatarını Seç</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.emojiGrid}>
                {AVATARS.map(em => {
                  const active = editAvatar === em;
                  return (
                    <PressableScale
                      key={em}
                      onPress={() => { setEditAvatar(em); setAvatarSheetVisible(false); }}
                      style={[styles.emojiBtn, active && styles.emojiBtnActive]}
                      accessibilityLabel={`Avatar ${em}`}
                    >
                      <Text style={styles.emojiText}>{em}</Text>
                    </PressableScale>
                  );
                })}
              </View>
            </ScrollView>
          </View>
        </TouchableOpacity>
      </Modal>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  headerArea: {
    paddingHorizontal: spacing.xl, paddingTop: spacing.xl, gap: spacing.lg,
  },
  segment: {
    flexDirection: 'row', gap: spacing.xs,
    backgroundColor: colors.glass,
    borderWidth: 1, borderColor: colors.glassBorder,
    borderRadius: radius.md, padding: 4,
  },
  segmentBtn: {
    flex: 1, paddingVertical: 10, borderRadius: radius.sm, alignItems: 'center',
  },
  segmentBtnActive: {
    backgroundColor: colors.primarySoft,
    borderWidth: 1, borderColor: colors.primaryBorder,
  },
  segmentText: { fontSize: 13.5, fontWeight: '700', color: colors.textFaint, letterSpacing: 0.2 },
  segmentTextActive: { color: colors.text },

  container: {
    paddingHorizontal: spacing.xl, paddingTop: spacing.xl, paddingBottom: 56, gap: spacing.md,
  },

  heroCard: { flexDirection: 'row', alignItems: 'center', gap: spacing.lg },
  avatarCircle: {
    width: 60, height: 60, borderRadius: 30,
    backgroundColor: colors.primarySoft, alignItems: 'center', justifyContent: 'center',
    borderWidth: 1.5, borderColor: colors.primaryBorder,
    flexShrink: 0,
  },
  avatarEmoji: { fontSize: 32 },
  nameText: { flex: 1, ...type.title, fontSize: 21 },

  editCard: { gap: spacing.md },
  editTitle: { ...type.heading, marginBottom: 2 },
  editInput: {
    backgroundColor: 'rgba(8,12,24,0.55)', borderRadius: radius.sm,
    paddingHorizontal: 14, paddingVertical: 12,
    fontSize: 16, color: colors.text, fontWeight: '500', letterSpacing: 0.2,
    borderWidth: 1, borderColor: colors.glassBorderStrong,
  },
  avatarTrigger: {
    flexDirection: 'row', alignItems: 'center', gap: spacing.md,
    backgroundColor: 'rgba(8,12,24,0.4)', borderRadius: radius.md,
    paddingHorizontal: 14, paddingVertical: 12,
    borderWidth: 1, borderColor: colors.glassBorder,
  },
  avatarTriggerCircle: {
    width: 48, height: 48, borderRadius: 24,
    backgroundColor: colors.glass, borderWidth: 1.5, borderColor: colors.glassBorderStrong,
    alignItems: 'center', justifyContent: 'center',
  },
  avatarTriggerCircleSelected: {
    borderColor: colors.primary, backgroundColor: colors.primarySoft,
  },
  avatarTriggerEmoji: { fontSize: 26 },
  avatarTriggerTitle: { fontSize: 14, fontWeight: '700', color: colors.text, letterSpacing: 0.1 },
  avatarTriggerHint: { fontSize: 11, color: colors.textFaint, fontWeight: '500' },

  goalRow: { flexDirection: 'row', gap: spacing.sm },
  goalChip: {
    flex: 1, borderWidth: 1, borderColor: colors.glassBorder,
    borderRadius: radius.sm, paddingVertical: 11, alignItems: 'center',
    backgroundColor: colors.glass,
  },
  goalChipActive: { borderColor: colors.primaryBorder, backgroundColor: colors.primarySoft },
  goalChipText: { fontSize: 13, fontWeight: '700', color: colors.textDim, letterSpacing: 0.2 },
  goalChipTextActive: { color: colors.primary },
  editActions: { flexDirection: 'row', gap: spacing.md, marginTop: spacing.xs },

  streakCard: { flexDirection: 'row', alignItems: 'center', gap: spacing.lg },
  streakIcon: { fontSize: 32 },
  streakNumber: { fontSize: 18, fontWeight: '800', color: colors.text, letterSpacing: 0.1 },
  streakSub: { fontSize: 13, color: colors.textDim, marginTop: 2, letterSpacing: 0.1 },

  todayCard: { gap: spacing.lg },
  todayMetrics: { flexDirection: 'row', alignItems: 'center' },
  todayMetric: { flex: 1, alignItems: 'center', gap: 4 },
  todayMetricLabel: { fontSize: 12, fontWeight: '600', color: colors.textDim, letterSpacing: 0.3 },
  todayMetricSep: { width: 1, height: 38, backgroundColor: colors.glassBorder, marginHorizontal: 12 },
  goalDonePill: {
    backgroundColor: colors.successSoft, borderRadius: radius.sm,
    paddingVertical: 10, paddingHorizontal: 14, alignItems: 'center',
    borderWidth: 1, borderColor: colors.successBorder,
  },
  goalDoneText: { fontSize: 13, fontWeight: '700', color: colors.success, letterSpacing: 0.2 },

  statsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.md },
  statBox: { flexGrow: 1, minWidth: '44%', alignItems: 'center', gap: 4 },
  statLabel: { fontSize: 12, color: colors.textDim, fontWeight: '700', letterSpacing: 0.5 },

  rowCard: { flexDirection: 'row', alignItems: 'center', gap: spacing.lg },
  rowIcon: {
    width: 44, height: 44, borderRadius: radius.sm,
    borderWidth: 1, alignItems: 'center', justifyContent: 'center', flexShrink: 0,
  },
  rowIconText: { fontSize: 19, color: colors.text },
  rowTextWrap: { flex: 1, gap: 3 },
  rowTitle: { fontSize: 15, fontWeight: '700', color: colors.text, letterSpacing: 0.1 },
  rowSub: { fontSize: 12, color: colors.textFaint, fontWeight: '500', letterSpacing: 0.1 },
  chevron: { fontSize: 24, fontWeight: '400', color: colors.textFaint, opacity: 0.8 },

  footerCard: { alignItems: 'center', gap: 4 },
  footerFlag: { fontSize: 28, marginBottom: 4 },
  footerAppName: { fontSize: 18, fontWeight: '800', color: colors.text, letterSpacing: 0.5 },
  footerVersion: { fontSize: 12, fontWeight: '600', color: colors.textFaint, letterSpacing: 0.5, marginTop: 2 },
  footerDivider: { width: 32, height: 1, backgroundColor: colors.glassBorder, marginVertical: 10 },
  footerCredit: { fontSize: 12, color: colors.textDim, fontWeight: '500', letterSpacing: 0.2 },
  footerAI: { fontSize: 11, color: colors.textFaint, fontWeight: '400', letterSpacing: 0.2, marginTop: 2 },

  notifCard: { gap: spacing.md },
  notifToggleRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.md },
  notifIconWrap: {
    width: 40, height: 40, borderRadius: radius.sm,
    backgroundColor: colors.glass, borderWidth: 1, borderColor: colors.glassBorder,
    alignItems: 'center', justifyContent: 'center', flexShrink: 0,
  },
  notifIcon: { fontSize: 18 },
  notifTextWrap: { flex: 1, gap: 2 },
  notifTitle: { fontSize: 15, fontWeight: '700', color: colors.text, letterSpacing: 0.1 },
  notifSub: { fontSize: 12, color: colors.textFaint, fontWeight: '500', letterSpacing: 0.1 },
  notifDivider: { height: 1, backgroundColor: colors.glassBorder },
  notifTimeRow: { flexDirection: 'row', gap: spacing.sm, flexWrap: 'wrap' },
  notifTimeChip: {
    paddingHorizontal: 14, paddingVertical: 8, borderRadius: radius.sm,
    borderWidth: 1, borderColor: colors.glassBorder, backgroundColor: colors.glass,
  },
  notifTimeChipActive: { borderColor: colors.primaryBorder, backgroundColor: colors.primarySoft },
  notifTimeText: { fontSize: 13, fontWeight: '700', color: colors.textDim, letterSpacing: 0.3 },
  notifTimeTextActive: { color: colors.primary },

  sheetOverlay: { flex: 1, backgroundColor: colors.backdrop, justifyContent: 'flex-end' },
  sheet: {
    backgroundColor: colors.bgSheet,
    borderTopLeftRadius: radius.xl, borderTopRightRadius: radius.xl,
    paddingTop: 12, paddingHorizontal: spacing.xl, paddingBottom: 40,
    maxHeight: '88%',
    borderWidth: 1, borderColor: colors.glassBorderStrong, borderBottomWidth: 0,
  },
  sheetHandle: {
    width: 40, height: 4, borderRadius: 2,
    backgroundColor: colors.glassBorderStrong, alignSelf: 'center', marginBottom: 16,
  },
  avatarSheetTitle: {
    ...type.heading, fontSize: 17, textAlign: 'center', marginBottom: spacing.xl,
  },
  emojiGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, paddingBottom: 8 },
  emojiBtn: {
    width: 54, height: 54, borderRadius: radius.md,
    backgroundColor: colors.glass, borderWidth: 1, borderColor: colors.glassBorder,
    alignItems: 'center', justifyContent: 'center',
  },
  emojiBtnActive: { borderColor: colors.primaryBorder, backgroundColor: colors.primarySoft },
  emojiText: { fontSize: 28 },

  policyLangRow: { flexDirection: 'row', gap: spacing.sm, marginBottom: spacing.lg, justifyContent: 'center' },
  policyLangBtn: {
    paddingHorizontal: 14, paddingVertical: 7, borderRadius: radius.pill,
    borderWidth: 1, borderColor: colors.glassBorder, backgroundColor: colors.glass,
  },
  policyLangBtnActive: { borderColor: colors.primaryBorder, backgroundColor: colors.primarySoft },
  policyLangText: { fontSize: 13, fontWeight: '600', color: colors.textDim },
  policyLangTextActive: { color: colors.primary },
  policyTitle: { ...type.heading, textAlign: 'center', marginBottom: spacing.md },
  policyScroll: { flexGrow: 0, marginBottom: spacing.md },
  policyBody: { fontSize: 12.5, color: colors.textDim, lineHeight: 19, fontWeight: '400', paddingBottom: 8 },
});
