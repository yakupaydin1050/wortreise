import React, { useCallback, useState } from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Alert, Modal, Share, Linking,
  TouchableWithoutFeedback, Platform, Switch,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  loadProfile, loadStats, saveProfile,
  resetStats, resetProgress, resetGameStats, resetAchievements,
  UserProfile, AppStats, getCharacter,
} from '../utils/storage';
import * as StoreReview from 'expo-store-review';
import { POLICY_CONTENT, PolicyType, PolicyLang } from '../data/policies';
import {
  loadNotifPrefs, saveNotifPrefs, requestNotifPermission, getNotifPermissionStatus,
  scheduleDailyNotif, cancelDailyNotif, NotifPrefs, NOTIF_TIME_PRESETS,
} from '../utils/notifications';
import { saveHapticsEnabled, getHapticsEnabled } from '../utils/haptics';

const AVATARS = [
  '👨', '👩', '🧑', '👦', '👧', '👴', '👵', '🧔',
  '👨‍🦱', '👩‍🦱', '👨‍🦰', '👩‍🦰', '👨‍🦳', '👩‍🦳', '👨‍🦲', '🧔‍♀️',
  '😎', '🤓', '🧐', '🤩', '🥸', '🤠', '🥳', '😤',
  '🧙‍♂️', '🧙‍♀️', '🦸', '🦸‍♀️', '🤖', '👽', '🎃', '🧟',
  '🦊', '🐼', '🐸', '🦁', '🐯', '🦝', '🐨', '🦦',
];
import GridBackground from '../components/GridBackground';

const C = {
  bg: '#F8F9FE',
  surface: '#FFFFFF',
  surface2: '#EEF1FF',
  border: '#DDE3F5',
  borderBright: '#B8C4E8',
  primary: '#3B5BDB',
  primaryBg: 'rgba(59,91,219,0.10)',
  text: '#1A2340',
  textDim: '#4E5C80',
  textFaint: '#8896B8',
  success: '#1A9E6E',
  successBg: 'rgba(26,158,110,0.12)',
  warning: '#D97706',
  danger: '#DC2626',
  resetColor: '#B45E2A',
  logoutColor: '#A33050',
};

const GOAL_OPTIONS = [5, 15, 25];

function StatBox({ value, label }: { value: string | number; label: string }) {
  return (
    <View style={styles.statBox}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
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

  async function handleNotifTimeChange(hour: number, minute: number) {
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

  async function handleReview() {
    if (Platform.OS === 'web') {
      Linking.openURL('https://wortreise.app');
      return;
    }
    const available = await StoreReview.isAvailableAsync();
    if (available) {
      await StoreReview.requestReview();
    } else {
      Alert.alert(
        'Uygulamayı Değerlendir',
        'Değerlendirme yapmak için uygulama mağazasına yönlendirileceksiniz.',
        [
          { text: 'Vazgeç', style: 'cancel' },
          { text: 'Git', onPress: () => Linking.openURL('https://wortreise.app') },
        ],
      );
    }
  }

  function handleShare() {
    Share.share({
      message:
        'Wortreise\'yi denedin mi? 🇩🇪\n\nAlmanca kelimeler, eşleştirme oyunları ve hafıza kartlarıyla günde birkaç dakikada Almanca öğrenebiliyorsun.\n\nHemen indir, birlikte öğrenelim! 🚀',
      title: 'Wortreise — Almanca Öğren',
    });
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
      <GridBackground />
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {editing ? (
          <View style={styles.editCard}>
            <Text style={styles.editTitle}>Profili Düzenle</Text>
            <Text style={styles.editLabel}>KULLANICI ADI</Text>
            <TextInput
              style={styles.editInput}
              value={editName}
              onChangeText={setEditName}
              autoCapitalize="words"
              maxLength={24}
              autoFocus
              placeholderTextColor={C.textFaint}
              selectionColor={C.primary}
            />
            <Text style={styles.editLabel}>AVATAR</Text>
            <TouchableOpacity
              style={styles.avatarTrigger}
              onPress={() => setAvatarSheetVisible(true)}
              activeOpacity={0.8}
            >
              <View style={[styles.avatarTriggerCircle, editAvatar && editAvatar !== '👤' ? styles.avatarTriggerCircleSelected : {}]}>
                <Text style={styles.avatarTriggerEmoji}>{editAvatar || '?'}</Text>
              </View>
              <View style={styles.avatarTriggerInfo}>
                <Text style={styles.avatarTriggerTitle}>
                  {editAvatar && editAvatar !== '👤' ? 'Avatar seçildi' : 'Avatar seç'}
                </Text>
                <Text style={styles.avatarTriggerHint}>Değiştirmek için dokun</Text>
              </View>
              <Text style={styles.avatarTriggerArrow}>›</Text>
            </TouchableOpacity>
            <Text style={styles.editLabel}>GÜNLÜK HEDEF</Text>
            <View style={styles.goalRow}>
              {GOAL_OPTIONS.map(g => (
                <TouchableOpacity
                  key={g}
                  style={[styles.goalChip, editGoal === g && styles.goalChipActive]}
                  onPress={() => setEditGoal(g)}
                >
                  <Text style={[styles.goalChipText, editGoal === g && styles.goalChipTextActive]}>
                    {g} kart
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            <View style={styles.editActions}>
              <TouchableOpacity style={styles.cancelBtn} onPress={() => setEditing(false)}>
                <Text style={styles.cancelBtnText}>Vazgeç</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.saveBtn, editName.trim().length < 2 && styles.saveBtnDisabled]}
                onPress={saveEdit}
                disabled={editName.trim().length < 2}
              >
                <Text style={styles.saveBtnText}>Kaydet</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View style={styles.heroCard}>
            <View style={styles.avatarCircle}>
              <Text style={styles.avatarEmoji}>{getCharacter(profile)}</Text>
            </View>
            <Text style={styles.nameText} numberOfLines={1}>{profile.name}</Text>
            <TouchableOpacity style={styles.editBtn} onPress={startEdit}>
              <Text style={styles.editBtnText}>Düzenle</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Streak */}
        <View style={styles.streakCard}>
          <Text style={styles.streakIcon}>🔥</Text>
          <View style={{ flex: 1 }}>
            <Text style={styles.streakNumber}>{stats.streak} günlük seri</Text>
            <Text style={styles.streakSub}>En uzun seri: {stats.longestStreak} gün</Text>
          </View>
          {stats.streak > 0 && (
            <View style={styles.streakBadge}>
              <Text style={styles.streakBadgeNum}>{stats.streak}</Text>
            </View>
          )}
        </View>

        {/* Today */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>BUGÜN İLERLEME</Text>
          <View style={styles.todayCard}>
            <View style={styles.todayMetrics}>
              <View style={styles.todayMetric}>
                <Text style={styles.todayMetricNum}>{stats.todayCards}</Text>
                <Text style={styles.todayMetricLabel}>Kart Açıldı</Text>
              </View>
              <View style={styles.todayMetricSep} />
              <View style={styles.todayMetric}>
                <Text style={styles.todayMetricNum}>{profile.dailyGoal}</Text>
                <Text style={styles.todayMetricLabel}>Günlük Hedef</Text>
              </View>
            </View>
            {goalDone ? (
              <View style={styles.goalDonePill}>
                <Text style={styles.goalDoneText}>✓ Hedef tamamlandı!</Text>
              </View>
            ) : (
              <View style={styles.progressTrack}>
                <View style={[styles.progressFill, { width: `${goalProgress * 100}%` as any }]} />
              </View>
            )}
          </View>
        </View>

        {/* Stats */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>TOPLAM</Text>
          <View style={styles.statsGrid}>
            <StatBox value={stats.totalCards} label="Kart" />
            <StatBox value={stats.totalWords} label="Kelime" />
            <StatBox value={stats.totalCorrect} label="Doğru" />
            <StatBox value={accuracy()} label="İsabet" />
          </View>
        </View>

        {/* Notifications */}
        {Platform.OS !== 'web' && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>BİLDİRİMLER</Text>
            <View style={styles.notifCard}>
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
                  trackColor={{ false: C.border, true: 'rgba(59,91,219,0.35)' }}
                  thumbColor={hapticsEnabled ? C.primary : C.textFaint}
                />
              </View>
              <View style={{ height: 1, backgroundColor: C.border }} />
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
                  trackColor={{ false: C.border, true: 'rgba(59,91,219,0.35)' }}
                  thumbColor={notifPrefs.enabled ? C.primary : C.textFaint}
                />
              </View>
              {notifPrefs.enabled && (
                <View style={styles.notifTimeRow}>
                  {NOTIF_TIME_PRESETS.map(preset => {
                    const active = preset.hour === notifPrefs.hour && preset.minute === notifPrefs.minute;
                    return (
                      <TouchableOpacity
                        key={preset.label}
                        style={[styles.notifTimeChip, active && styles.notifTimeChipActive]}
                        onPress={() => handleNotifTimeChange(preset.hour, preset.minute)}
                        activeOpacity={0.7}
                      >
                        <Text style={[styles.notifTimeText, active && styles.notifTimeTextActive]}>
                          {preset.label}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              )}
            </View>
          </View>
        )}

        {/* App actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>UYGULAMA</Text>
          <TouchableOpacity style={styles.shareCard} onPress={handleReview} activeOpacity={0.75}>
            <View style={[styles.shareIconWrap, { backgroundColor: 'rgba(217,119,6,0.10)', borderColor: 'rgba(217,119,6,0.25)' }]}>
              <Text style={styles.shareIcon}>⭐</Text>
            </View>
            <View style={styles.shareTextWrap}>
              <Text style={[styles.shareTitle, { color: C.warning }]}>Uygulamayı Değerlendir</Text>
              <Text style={styles.shareSub}>Görüşlerin bizim için değerli</Text>
            </View>
            <Text style={[styles.shareChevron, { color: C.warning }]}>›</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.shareCard} onPress={handleShare} activeOpacity={0.75}>
            <View style={styles.shareIconWrap}>
              <Text style={styles.shareIcon}>📤</Text>
            </View>
            <View style={styles.shareTextWrap}>
              <Text style={styles.shareTitle}>Uygulamayı Tavsiye Et</Text>
              <Text style={styles.shareSub}>Arkadaşlarına öner, birlikte öğrenin</Text>
            </View>
            <Text style={styles.shareChevron}>›</Text>
          </TouchableOpacity>
        </View>

        {/* Account actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>HESAP</Text>
          <TouchableOpacity style={[styles.actionCard, styles.actionRowReset]} onPress={handleResetStats} activeOpacity={0.7}>
            <View style={styles.actionRowInner}>
              <Text style={styles.actionResetText}>İstatistikleri Sıfırla</Text>
              <Text style={styles.actionSub}>Seri ve istatistikler silinir, profil kalır</Text>
            </View>
            <Text style={[styles.actionChevron, { color: C.resetColor }]}>›</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.actionCard, styles.actionRowLogout]} onPress={handleLogout} activeOpacity={0.7}>
            <View style={styles.actionRowInner}>
              <Text style={styles.actionLogoutText}>Çıkış Yap</Text>
              <Text style={styles.actionSub}>Tüm veriler kalıcı olarak silinir</Text>
            </View>
            <Text style={[styles.actionChevron, { color: C.logoutColor }]}>›</Text>
          </TouchableOpacity>
        </View>

        {/* Legal */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>YASAL</Text>
          <TouchableOpacity style={styles.legalCard} onPress={() => openPolicy('privacy')} activeOpacity={0.7}>
            <View style={styles.legalIconWrap}>
              <Text style={styles.legalIconEmoji}>🔒</Text>
            </View>
            <Text style={styles.legalLabel}>Gizlilik Politikası</Text>
            <Text style={styles.legalChevron}>›</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.legalCard} onPress={() => openPolicy('terms')} activeOpacity={0.7}>
            <View style={styles.legalIconWrap}>
              <Text style={styles.legalIconEmoji}>📋</Text>
            </View>
            <Text style={styles.legalLabel}>Kullanım Koşulları</Text>
            <Text style={styles.legalChevron}>›</Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>HAKKINDA</Text>
        <View style={styles.footerCard}>
          <Text style={styles.footerFlag}>🇩🇪</Text>
          <Text style={styles.footerAppName}>Wortreise</Text>
          <Text style={styles.footerVersion}>Versiyon 1.0.1</Text>
          <View style={styles.footerDivider} />
          <Text style={styles.footerCredit}>YAAY tarafından hayata geçirildi</Text>
          <Text style={styles.footerAI}>Claude ile geliştirildi 🤖</Text>
        </View>
        </View>

      </ScrollView>

      {/* Policy modal */}
      <Modal
        visible={policyVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setPolicyVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setPolicyVisible(false)}>
          <View style={styles.policyOverlay}>
            <TouchableWithoutFeedback>
              <View style={styles.policySheet}>
                <View style={styles.policyHandle} />
                <View style={styles.policyLangRow}>
                  {(['tr', 'de', 'en'] as PolicyLang[]).map((lang, i) => (
                    <TouchableOpacity
                      key={lang}
                      style={[styles.policyLangBtn, policyLang === lang && styles.policyLangBtnActive]}
                      onPress={() => setPolicyLang(lang)}
                      activeOpacity={0.7}
                    >
                      <Text style={[styles.policyLangText, policyLang === lang && styles.policyLangTextActive]}>
                        {lang === 'tr' ? '🇹🇷 TR' : lang === 'de' ? '🇩🇪 DE' : '🇬🇧 EN'}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
                <Text style={styles.policyTitle}>{POLICY_CONTENT[policyType][policyLang].title}</Text>
                <ScrollView showsVerticalScrollIndicator={false} style={styles.policyScroll}>
                  <Text style={styles.policyBody}>{POLICY_CONTENT[policyType][policyLang].body}</Text>
                </ScrollView>
                <TouchableOpacity
                  style={styles.policyCloseBtn}
                  onPress={() => setPolicyVisible(false)}
                  activeOpacity={0.8}
                >
                  <Text style={styles.policyCloseBtnText}>Kapat</Text>
                </TouchableOpacity>
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
          style={styles.avatarSheetOverlay}
          activeOpacity={1}
          onPress={() => setAvatarSheetVisible(false)}
        >
          <View style={styles.avatarSheet} onStartShouldSetResponder={() => true}>
            <View style={styles.avatarSheetHandle} />
            <Text style={styles.avatarSheetTitle}>Avatarını Seç</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.emojiGrid}>
                {AVATARS.map(em => (
                  <TouchableOpacity
                    key={em}
                    style={[styles.emojiBtn, editAvatar === em && styles.emojiBtnActive]}
                    onPress={() => { setEditAvatar(em); setAvatarSheetVisible(false); }}
                    activeOpacity={0.7}
                  >
                    <Text style={styles.emojiText}>{em}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          </View>
        </TouchableOpacity>
      </Modal>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: C.bg },
  container: { paddingHorizontal: 20, paddingTop: 16, paddingBottom: 32, gap: 16 },

  heroCard: {
    flexDirection: 'row', alignItems: 'center', gap: 14,
    backgroundColor: C.primaryBg, borderRadius: 18, padding: 16,
    borderWidth: 1, borderColor: 'rgba(59,91,219,0.28)',
    borderLeftWidth: 4, borderLeftColor: C.primary,
    shadowColor: C.primary, shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1, shadowRadius: 8, elevation: 2,
  },
  avatarCircle: {
    width: 56, height: 56, borderRadius: 28,
    backgroundColor: C.primaryBg, alignItems: 'center', justifyContent: 'center',
    borderWidth: 2, borderColor: C.primary,
    flexShrink: 0,
  },
  avatarEmoji: { fontSize: 30 },
  nameText: { flex: 1, fontSize: 20, fontWeight: '800', color: C.text, letterSpacing: 0.1 },
  avatarTrigger: {
    flexDirection: 'row', alignItems: 'center', gap: 12,
    backgroundColor: C.surface2, borderRadius: 14,
    paddingHorizontal: 14, paddingVertical: 12,
    borderWidth: 1.5, borderColor: C.borderBright,
  },
  avatarTriggerCircle: {
    width: 48, height: 48, borderRadius: 24,
    backgroundColor: C.surface, borderWidth: 2, borderColor: C.borderBright,
    alignItems: 'center', justifyContent: 'center',
  },
  avatarTriggerCircleSelected: {
    borderColor: C.primary, backgroundColor: C.primaryBg,
  },
  avatarTriggerEmoji: { fontSize: 26 },
  avatarTriggerInfo: { flex: 1, gap: 2 },
  avatarTriggerTitle: { fontSize: 14, fontWeight: '700', color: C.text, letterSpacing: 0.1 },
  avatarTriggerHint: { fontSize: 11, color: C.textFaint, fontWeight: '500' },
  avatarTriggerArrow: { fontSize: 20, color: C.textFaint, fontWeight: '300', lineHeight: 24 },
  avatarSheetOverlay: {
    flex: 1, backgroundColor: 'rgba(10,20,60,0.45)', justifyContent: 'flex-end',
  },
  avatarSheet: {
    backgroundColor: C.surface,
    borderTopLeftRadius: 28, borderTopRightRadius: 28,
    paddingTop: 12, paddingHorizontal: 20, paddingBottom: 40,
    maxHeight: '72%',
    borderTopWidth: 1, borderColor: C.border,
    shadowColor: '#000', shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.08, shadowRadius: 16, elevation: 8,
  },
  avatarSheetHandle: {
    width: 40, height: 4, borderRadius: 2,
    backgroundColor: C.border, alignSelf: 'center', marginBottom: 16,
  },
  avatarSheetTitle: {
    fontSize: 17, fontWeight: '800', color: C.text,
    textAlign: 'center', letterSpacing: 0.2, marginBottom: 20,
  },
  emojiGrid: {
    flexDirection: 'row', flexWrap: 'wrap', gap: 10, paddingBottom: 8,
  },
  emojiBtn: {
    width: 54, height: 54, borderRadius: 16,
    backgroundColor: C.surface2, borderWidth: 1.5, borderColor: C.border,
    alignItems: 'center', justifyContent: 'center',
  },
  emojiBtnActive: {
    borderColor: C.primary, backgroundColor: C.primaryBg,
    shadowColor: C.primary, shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2, shadowRadius: 6, elevation: 3,
  },
  emojiText: { fontSize: 28 },
  editBtn: {
    paddingHorizontal: 14, paddingVertical: 7,
    borderRadius: 10, borderWidth: 1.5, borderColor: C.borderBright,
    backgroundColor: C.surface2, flexShrink: 0,
  },
  editBtnText: { fontSize: 12, fontWeight: '700', color: C.textDim, letterSpacing: 0.3 },

  editCard: {
    backgroundColor: C.surface, borderRadius: 20, padding: 20, gap: 12,
    borderWidth: 1, borderColor: C.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07, shadowRadius: 10, elevation: 3,
  },
  editTitle: { fontSize: 17, fontWeight: '800', color: C.text, marginBottom: 4, letterSpacing: 0.2 },
  editLabel: { fontSize: 10, fontWeight: '700', color: C.textFaint, letterSpacing: 2 },
  editInput: {
    backgroundColor: C.surface2, borderRadius: 12,
    paddingHorizontal: 14, paddingVertical: 12,
    fontSize: 16, color: C.text, fontWeight: '500', letterSpacing: 0.2,
    borderWidth: 1.5, borderColor: C.borderBright,
  },
  goalRow: { flexDirection: 'row', gap: 8 },
  goalChip: {
    flex: 1, borderWidth: 1.5, borderColor: C.border,
    borderRadius: 12, paddingVertical: 10, alignItems: 'center',
    backgroundColor: C.surface,
  },
  goalChipActive: {
    borderColor: C.primary, backgroundColor: C.primaryBg,
    shadowColor: C.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15, shadowRadius: 8, elevation: 2,
  },
  goalChipText: { fontSize: 13, fontWeight: '700', color: C.textDim, letterSpacing: 0.2 },
  goalChipTextActive: { color: C.primary },
  editActions: { flexDirection: 'row', gap: 10, marginTop: 4 },
  cancelBtn: {
    flex: 1, borderWidth: 1.5, borderColor: C.border,
    borderRadius: 12, paddingVertical: 12, alignItems: 'center',
    backgroundColor: C.surface,
  },
  cancelBtnText: { fontSize: 14, fontWeight: '700', color: C.textDim, letterSpacing: 0.2 },
  saveBtn: {
    flex: 1, backgroundColor: C.primary,
    borderRadius: 12, paddingVertical: 12, alignItems: 'center',
    shadowColor: C.primary,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25, shadowRadius: 10, elevation: 4,
  },
  saveBtnDisabled: { backgroundColor: C.border, shadowOpacity: 0 },
  saveBtnText: { fontSize: 14, fontWeight: '700', color: '#FFFFFF', letterSpacing: 0.3 },

  streakCard: {
    backgroundColor: 'rgba(217,119,6,0.07)',
    borderRadius: 18, padding: 14,
    flexDirection: 'row', alignItems: 'center', gap: 14,
    borderWidth: 1, borderColor: 'rgba(217,119,6,0.28)',
    borderLeftWidth: 4, borderLeftColor: C.warning,
    shadowColor: C.warning,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1, shadowRadius: 8, elevation: 2,
  },
  streakIcon: { fontSize: 34 },
  streakNumber: { fontSize: 19, fontWeight: '800', color: C.text, letterSpacing: 0.1 },
  streakSub: { fontSize: 13, color: C.textDim, marginTop: 2, letterSpacing: 0.1 },
  streakBadge: {
    backgroundColor: 'rgba(217,119,6,0.12)',
    borderRadius: 12, paddingHorizontal: 12, paddingVertical: 6,
    borderWidth: 1, borderColor: 'rgba(217,119,6,0.3)',
    alignItems: 'center', justifyContent: 'center',
  },
  streakBadgeNum: { fontSize: 20, fontWeight: '800', color: C.warning },

  section: { gap: 8 },
  sectionTitle: { fontSize: 10, fontWeight: '700', color: C.textDim, letterSpacing: 2 },

  todayCard: {
    backgroundColor: C.primaryBg,
    borderRadius: 18, padding: 14, gap: 10,
    borderWidth: 1, borderColor: 'rgba(59,91,219,0.28)',
    borderLeftWidth: 4, borderLeftColor: C.primary,
    shadowColor: C.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1, shadowRadius: 8, elevation: 2,
  },
  todayMetrics: { flexDirection: 'row', alignItems: 'center' },
  todayMetric: { flex: 1, alignItems: 'center', gap: 4 },
  todayMetricNum: { fontSize: 26, fontWeight: '800', color: C.text, letterSpacing: -0.5 },
  todayMetricLabel: { fontSize: 12, fontWeight: '600', color: C.textDim, letterSpacing: 0.3 },
  todayMetricSep: { width: 1, height: 38, backgroundColor: C.border, marginHorizontal: 12 },
  goalDonePill: {
    backgroundColor: C.successBg, borderRadius: 10,
    paddingVertical: 10, paddingHorizontal: 14, alignItems: 'center',
    borderWidth: 1, borderColor: 'rgba(26,158,110,0.3)',
  },
  goalDoneText: { fontSize: 13, fontWeight: '700', color: C.success, letterSpacing: 0.2 },
  progressTrack: { height: 5, backgroundColor: C.border, borderRadius: 3, overflow: 'hidden' },
  progressFill: { height: '100%', backgroundColor: C.primary, borderRadius: 3 },

  statsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  statBox: {
    flex: 1, minWidth: '44%',
    backgroundColor: C.successBg,
    borderRadius: 16, padding: 14, alignItems: 'center', gap: 4,
    borderWidth: 1, borderColor: 'rgba(26,158,110,0.28)',
    borderLeftWidth: 4, borderLeftColor: C.success,
    shadowColor: C.success,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1, shadowRadius: 4, elevation: 1,
  },
  statValue: { fontSize: 24, fontWeight: '800', color: C.text, letterSpacing: -0.5 },
  statLabel: { fontSize: 12, color: C.textDim, fontWeight: '700', letterSpacing: 0.5 },

  shareCard: {
    flexDirection: 'row', alignItems: 'center', gap: 14,
    paddingHorizontal: 16, paddingVertical: 12,
    borderRadius: 18, borderWidth: 1,
    backgroundColor: 'rgba(59,91,219,0.07)',
    borderColor: 'rgba(59,91,219,0.28)',
    borderLeftWidth: 4, borderLeftColor: C.primary,
    shadowColor: C.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12, shadowRadius: 8, elevation: 2,
  },
  shareIconWrap: {
    width: 44, height: 44, borderRadius: 14,
    backgroundColor: C.primaryBg,
    borderWidth: 1.5, borderColor: 'rgba(59,91,219,0.25)',
    alignItems: 'center', justifyContent: 'center',
    flexShrink: 0,
  },
  shareIcon: { fontSize: 20 },
  shareTextWrap: { flex: 1, gap: 3 },
  shareTitle: { fontSize: 15, fontWeight: '700', color: C.primary, letterSpacing: 0.1 },
  shareSub: { fontSize: 12, color: C.textFaint, fontWeight: '500', letterSpacing: 0.1 },
  shareChevron: { fontSize: 24, fontWeight: '300', color: C.primary, lineHeight: 28, opacity: 0.6 },

  actionCard: {
    flexDirection: 'row', alignItems: 'center',
    paddingHorizontal: 16, paddingVertical: 14,
    borderRadius: 18, borderWidth: 1,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08, shadowRadius: 4, elevation: 1,
  },
  actionRowReset: {
    backgroundColor: 'rgba(180,94,42,0.07)',
    borderColor: 'rgba(180,94,42,0.28)', borderLeftWidth: 4, borderLeftColor: C.resetColor,
    shadowColor: C.resetColor,
  },
  actionRowLogout: {
    backgroundColor: 'rgba(163,48,80,0.07)',
    borderColor: 'rgba(163,48,80,0.28)', borderLeftWidth: 4, borderLeftColor: C.logoutColor,
    shadowColor: C.logoutColor,
  },
  actionRowInner: { flex: 1 },
  actionResetText: { fontSize: 15, fontWeight: '700', color: C.resetColor, marginBottom: 4, letterSpacing: 0.1 },
  actionLogoutText: { fontSize: 15, fontWeight: '700', color: C.logoutColor, marginBottom: 4, letterSpacing: 0.1 },
  actionSub: { fontSize: 12, color: C.textFaint, fontWeight: '500', lineHeight: 17, letterSpacing: 0.1 },
  actionChevron: { fontSize: 24, fontWeight: '300', marginLeft: 10, lineHeight: 28, opacity: 0.5 },

  legalCard: {
    flexDirection: 'row', alignItems: 'center', gap: 12,
    paddingHorizontal: 18, paddingVertical: 14,
    borderRadius: 16, borderWidth: 1,
    backgroundColor: 'rgba(78,92,128,0.07)',
    borderColor: 'rgba(78,92,128,0.25)',
    borderLeftWidth: 4, borderLeftColor: C.textDim,
    shadowColor: C.textDim, shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08, shadowRadius: 4, elevation: 1,
  },
  legalIconWrap: {
    width: 38, height: 38, borderRadius: 11,
    backgroundColor: C.surface2, borderWidth: 1, borderColor: C.border,
    alignItems: 'center', justifyContent: 'center', flexShrink: 0,
  },
  legalIconEmoji: { fontSize: 18 },
  legalLabel: { flex: 1, fontSize: 14, fontWeight: '600', color: C.textDim, letterSpacing: 0.1 },
  legalChevron: { fontSize: 22, fontWeight: '300', color: C.textFaint, lineHeight: 26, opacity: 0.7 },

  footerCard: {
    alignItems: 'center', gap: 4,
    paddingVertical: 18, paddingHorizontal: 20,
    borderRadius: 20, borderWidth: 1,
    backgroundColor: C.primaryBg,
    borderColor: 'rgba(59,91,219,0.28)',
    borderLeftWidth: 4, borderLeftColor: C.primary,
    shadowColor: C.primary, shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1, shadowRadius: 8, elevation: 2,
  },
  footerFlag: { fontSize: 28, marginBottom: 4 },
  footerAppName: { fontSize: 18, fontWeight: '800', color: C.text, letterSpacing: 0.5 },
  footerVersion: { fontSize: 12, fontWeight: '600', color: C.textFaint, letterSpacing: 0.5, marginTop: 2 },
  footerDivider: { width: 32, height: 1, backgroundColor: C.border, marginVertical: 10 },
  footerCredit: { fontSize: 12, color: C.textDim, fontWeight: '500', letterSpacing: 0.2 },
  footerAI: { fontSize: 11, color: C.textFaint, fontWeight: '400', letterSpacing: 0.2, marginTop: 2 },

  notifCard: {
    backgroundColor: C.primaryBg,
    borderRadius: 18, padding: 16, gap: 14,
    borderWidth: 1, borderColor: 'rgba(59,91,219,0.28)',
    borderLeftWidth: 4, borderLeftColor: C.primary,
    shadowColor: C.primary, shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1, shadowRadius: 8, elevation: 2,
  },
  notifToggleRow: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  notifIconWrap: {
    width: 40, height: 40, borderRadius: 12,
    backgroundColor: C.surface, borderWidth: 1.5, borderColor: C.borderBright,
    alignItems: 'center', justifyContent: 'center', flexShrink: 0,
  },
  notifIcon: { fontSize: 18 },
  notifTextWrap: { flex: 1, gap: 2 },
  notifTitle: { fontSize: 15, fontWeight: '700', color: C.text, letterSpacing: 0.1 },
  notifSub: { fontSize: 12, color: C.textFaint, fontWeight: '500', letterSpacing: 0.1 },
  notifTimeRow: { flexDirection: 'row', gap: 8, flexWrap: 'wrap' },
  notifTimeChip: {
    paddingHorizontal: 14, paddingVertical: 8, borderRadius: 10,
    borderWidth: 1.5, borderColor: C.borderBright, backgroundColor: C.surface,
  },
  notifTimeChipActive: {
    borderColor: C.primary, backgroundColor: C.surface,
    shadowColor: C.primary, shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2, shadowRadius: 6, elevation: 2,
  },
  notifTimeText: { fontSize: 13, fontWeight: '700', color: C.textDim, letterSpacing: 0.3 },
  notifTimeTextActive: { color: C.primary },

  policyOverlay: {
    flex: 1, backgroundColor: 'rgba(10,20,60,0.45)', justifyContent: 'flex-end',
  },
  policySheet: {
    backgroundColor: C.surface,
    borderTopLeftRadius: 28, borderTopRightRadius: 28,
    paddingTop: 12, paddingHorizontal: 20, paddingBottom: 40,
    maxHeight: '88%',
    borderTopWidth: 1, borderColor: C.border,
    shadowColor: '#000', shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.08, shadowRadius: 16, elevation: 8,
  },
  policyHandle: {
    width: 40, height: 4, borderRadius: 2,
    backgroundColor: C.border, alignSelf: 'center', marginBottom: 16,
  },
  policyLangRow: { flexDirection: 'row', gap: 8, marginBottom: 16, justifyContent: 'center' },
  policyLangBtn: {
    paddingHorizontal: 14, paddingVertical: 7, borderRadius: 20,
    borderWidth: 1.5, borderColor: C.border, backgroundColor: C.surface,
  },
  policyLangBtnActive: { borderColor: C.primary, backgroundColor: C.primaryBg },
  policyLangText: { fontSize: 13, fontWeight: '600', color: C.textDim },
  policyLangTextActive: { color: C.primary },
  policyTitle: {
    fontSize: 18, fontWeight: '800', color: C.text,
    textAlign: 'center', letterSpacing: 0.2, marginBottom: 12,
  },
  policyScroll: { flexGrow: 0, marginBottom: 8 },
  policyBody: { fontSize: 12, color: C.textDim, lineHeight: 18, fontWeight: '400', paddingBottom: 8 },
  policyCloseBtn: {
    marginTop: 8, backgroundColor: C.primary,
    borderRadius: 14, paddingVertical: 14, alignItems: 'center',
  },
  policyCloseBtnText: { fontSize: 15, fontWeight: '800', color: '#fff', letterSpacing: 0.3 },

});
