import React, { useState, useRef } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  StyleSheet, KeyboardAvoidingView, Platform, ScrollView, Modal,
  Animated,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { saveProfile } from '../utils/storage';
import GridBackground from '../components/GridBackground';
import { POLICY_CONTENT, PolicyType, PolicyLang } from '../data/policies';

const C = {
  bg: '#F8F9FE',
  surface: '#FFFFFF',
  surface2: '#EEF1FF',
  border: '#DDE3F5',
  borderBright: '#B8C4E8',
  primary: '#3B5BDB',
  primaryBg: 'rgba(59,91,219,0.10)',
  warning: '#D97706',
  success: '#1A9E6E',
  text: '#1A2340',
  textDim: '#4E5C80',
  textFaint: '#8896B8',
  danger: '#DC2626',
};

const SLIDES = [
  {
    emoji: '🇩🇪',
    title: 'Schritt für Schritt',
    subtitle: 'Almancayı adım adım öğren',
    desc: 'Her gün küçük bir adım. Günlük kartlar, eğlenceli oyunlar ve streak takibiyle Almanca öğrenmek artık çok daha kolay.',
    accent: '#3B5BDB',
  },
  {
    emoji: '📝',
    title: 'Kelime Kartları',
    subtitle: 'Boşlukları doldur, öğren',
    desc: 'Almanca cümlede eksik kelimeyi bul. 4 seçenekten birini seç — doğru yaparsan öğrenilmiş, yanlış yaparsan tekrar listene girer.',
    accent: '#D97706',
  },
  {
    emoji: '🔗',
    title: 'Eşleştirme Oyunu',
    subtitle: 'Sürükle ve eşleştir',
    desc: 'Sol tarafta Almanca, sağ tarafta Türkçe. Doğru çifti bul ve birbirine bağla. Ne kadar hızlı tamamlayabilirsin?',
    accent: '#7C3AED',
  },
  {
    emoji: '🔥',
    title: 'Streak Kur',
    subtitle: 'Her gün bir adım at',
    desc: 'Günlük hedefini belirle ve her gün tamamla. Streak\'in arttıkça motivasyonun da artar. Tek bir gün bile yeterli.',
    accent: '#DC2626',
  },
  {
    emoji: '🎯',
    title: 'A1, A2, B1',
    subtitle: 'Kendi seviyenden başla',
    desc: 'Temel A1\'den ileri B1\'e uzanan yüzlerce kelime seni bekliyor. Seviyeni seç, kendi hızında ilerle.',
    accent: '#1A9E6E',
  },
];

const GOALS = [
  { label: '5', sub: 'Günlük alışkanlık', value: 5 },
  { label: '15', sub: 'Düzenli pratik', value: 15 },
  { label: '25', sub: 'Yoğun öğrenim', value: 25 },
];

const AVATARS = [
  '👨', '👩', '🧑', '👦', '👧', '👴', '👵', '🧔',
  '👨‍🦱', '👩‍🦱', '👨‍🦰', '👩‍🦰', '👨‍🦳', '👩‍🦳', '👨‍🦲', '🧔‍♀️',
  '😎', '🤓', '🧐', '🤩', '🥸', '🤠', '🥳', '😤',
  '🧙‍♂️', '🧙‍♀️', '🦸', '🦸‍♀️', '🤖', '👽', '🎃', '🧟',
  '🦊', '🐼', '🐸', '🦁', '🐯', '🦝', '🐨', '🦦',
];


export default function OnboardingScreen({ navigation }: { navigation: any }) {
  const [phase, setPhase] = useState<'slides' | 'setup'>('slides');
  const [slideIndex, setSlideIndex] = useState(0);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const [name, setName] = useState('');
  const [goal, setGoal] = useState(15);
  const [avatar, setAvatar] = useState('');
  const [avatarModalVisible, setAvatarModalVisible] = useState(false);
  const [policyVisible, setPolicyVisible] = useState(false);
  const [policyType, setPolicyType] = useState<PolicyType>('privacy');
  const [policyLang, setPolicyLang] = useState<PolicyLang>('tr');

  function fadeTransition(action: () => void) {
    Animated.timing(fadeAnim, { toValue: 0, duration: 160, useNativeDriver: true }).start(() => {
      action();
      Animated.timing(fadeAnim, { toValue: 1, duration: 200, useNativeDriver: true }).start();
    });
  }

  function nextSlide() {
    if (slideIndex < SLIDES.length - 1) {
      fadeTransition(() => setSlideIndex(i => i + 1));
    } else {
      fadeTransition(() => setPhase('setup'));
    }
  }

  function skipSlides() {
    fadeTransition(() => setPhase('setup'));
  }

  function openPolicy(type: PolicyType) {
    setPolicyType(type);
    setPolicyVisible(true);
  }

  const canContinue = name.trim().length >= 3;

  async function handleStart() {
    if (!canContinue) return;
    await saveProfile({ name: name.trim(), dailyGoal: goal, avatar: avatar || undefined });
    navigation.replace('Main');
  }

  if (phase === 'slides') {
    const slide = SLIDES[slideIndex];
    return (
      <SafeAreaView style={styles.safe}>
        <GridBackground />
        <Animated.View style={[styles.slideFlex, { opacity: fadeAnim }]}>
          {/* Top row */}
          <View style={styles.slideTopRow}>
            <Text style={styles.slideCounter}>{slideIndex + 1} / {SLIDES.length}</Text>
            <TouchableOpacity onPress={skipSlides} style={styles.skipBtn} activeOpacity={0.7}>
              <Text style={styles.skipText}>Geç</Text>
            </TouchableOpacity>
          </View>

          {/* Main content */}
          <View style={styles.slideContent}>
            <View style={[
              styles.slideIconCard,
              { backgroundColor: slide.accent + '18', borderColor: slide.accent + '55' },
            ]}>
              <Text style={styles.slideEmoji}>{slide.emoji}</Text>
            </View>

            <Text style={styles.slideTitle}>{slide.title}</Text>
            <Text style={[styles.slideSubtitle, { color: slide.accent }]}>{slide.subtitle}</Text>
            <Text style={styles.slideDesc}>{slide.desc}</Text>
          </View>

          {/* Bottom */}
          <View style={styles.slideBottom}>
            <View style={styles.dotRow}>
              {SLIDES.map((_, i) => (
                <View
                  key={i}
                  style={[
                    styles.dot,
                    i === slideIndex
                      ? { backgroundColor: slide.accent, width: 22 }
                      : { backgroundColor: C.border },
                  ]}
                />
              ))}
            </View>

            <TouchableOpacity
              style={[styles.slideBtn, { backgroundColor: slide.accent, shadowColor: slide.accent }]}
              onPress={nextSlide}
              activeOpacity={0.85}
            >
              <Text style={styles.slideBtnText}>
                {slideIndex === SLIDES.length - 1 ? 'Hadi başlayalım →' : 'İleri →'}
              </Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safe}>
      <GridBackground />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.hero}>
            <View style={styles.heroRow}>
              <View style={styles.flagWrap}>
                <Text style={styles.flag}>🇩🇪</Text>
              </View>
              <View style={styles.heroText}>
                <Text style={styles.title}>Schritt für Schritt</Text>
                <Text style={styles.subtitle}>Haydi başlayalım!</Text>
              </View>
            </View>
          </View>

          <View style={[styles.sectionCard, { backgroundColor: 'rgba(59,91,219,0.07)', borderColor: 'rgba(59,91,219,0.28)' }]}>
            <View style={[styles.sectionAccent, { backgroundColor: C.primary }]} />
            <View style={styles.sectionInner}>
              <View style={styles.labelRow}>
                <Text style={styles.label}>KULLANICI ADI</Text>
                <Text style={styles.labelRequired}> *</Text>
              </View>
              <TextInput
                style={styles.input}
                placeholder="kullanıcı adı"
                placeholderTextColor={C.textFaint}
                value={name}
                onChangeText={setName}
                autoCapitalize="none"
                returnKeyType="done"
                maxLength={24}
                selectionColor={C.primary}
              />
              {name.length > 0 && name.trim().length < 3 && (
                <Text style={styles.inputHint}>En az 3 karakter gerekli</Text>
              )}
            </View>
          </View>

          <View style={[styles.sectionCard, { backgroundColor: 'rgba(217,119,6,0.07)', borderColor: 'rgba(217,119,6,0.28)' }]}>
            <View style={[styles.sectionAccent, { backgroundColor: C.warning }]} />
            <View style={styles.sectionInner}>
              <Text style={styles.label}>GÜNLÜK KAÇ KART ÇÖZMEK İSTERSİN?</Text>
              <View style={styles.goalGrid}>
                {GOALS.map(g => (
                  <TouchableOpacity
                    key={g.value}
                    style={[styles.goalCard, goal === g.value && styles.goalCardActive]}
                    onPress={() => setGoal(g.value)}
                    activeOpacity={0.7}
                  >
                    <Text style={[styles.goalNumber, goal === g.value && styles.goalNumberActive]}>
                      {g.label}
                    </Text>
                    <Text style={[styles.goalUnit, goal === g.value && styles.goalUnitActive]}>
                      kart
                    </Text>
                    <Text style={[styles.goalSub, goal === g.value && styles.goalSubActive]}>
                      {g.sub}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>

          <View style={[styles.sectionCard, { backgroundColor: 'rgba(26,158,110,0.07)', borderColor: 'rgba(26,158,110,0.28)' }]}>
            <View style={[styles.sectionAccent, { backgroundColor: C.success }]} />
            <View style={styles.sectionInner}>
              <Text style={styles.label}>AVATARINI SEÇ</Text>
            <TouchableOpacity
              style={styles.avatarTrigger}
              onPress={() => setAvatarModalVisible(true)}
              activeOpacity={0.8}
            >
              <View style={[styles.avatarTriggerCircle, avatar ? styles.avatarTriggerCircleSelected : {}]}>
                <Text style={avatar ? styles.avatarTriggerEmoji : styles.avatarTriggerQuestion}>
                  {avatar || '?'}
                </Text>
              </View>
              <View style={styles.avatarTriggerInfo}>
                <Text style={styles.avatarTriggerTitle}>
                  {avatar ? 'Avatar seçildi' : 'Avatar seç (isteğe bağlı)'}
                </Text>
                <Text style={styles.avatarTriggerHint}>
                  Değiştirmek için dokun
                </Text>
              </View>
              <Text style={styles.avatarTriggerArrow}>›</Text>
            </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity
            style={[styles.startBtn, !canContinue && styles.startBtnDisabled]}
            onPress={handleStart}
            activeOpacity={0.85}
            disabled={!canContinue}
          >
            <Text style={styles.startBtnText}>Başla →</Text>
          </TouchableOpacity>

          <Text style={styles.footer}>
            Her gün {goal} kart — küçük adımlar, büyük sonuçlar
          </Text>

          <Text style={styles.policyNotice}>
            {'Başla\'ya basarak '}
            <Text style={styles.policyLink} onPress={() => openPolicy('terms')}>
              Kullanım Koşulları
            </Text>
            {'\'nı ve '}
            <Text style={styles.policyLink} onPress={() => openPolicy('privacy')}>
              Gizlilik Politikası
            </Text>
            {'\'nı kabul etmiş olursunuz.'}
          </Text>
        </ScrollView>
      </KeyboardAvoidingView>

      <Modal
        visible={avatarModalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setAvatarModalVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setAvatarModalVisible(false)}
        >
          <View style={styles.bottomSheet} onStartShouldSetResponder={() => true}>
            <View style={styles.sheetHandle} />
            <Text style={styles.sheetTitle}>Avatarını Seç</Text>
            <Text style={styles.sheetHint}>İsteğe bağlı — seçmesen de olur</Text>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.sheetScroll}>
              <View style={styles.emojiGrid}>
                {AVATARS.map(em => (
                  <TouchableOpacity
                    key={em}
                    style={[styles.emojiBtn, avatar === em && styles.emojiBtnActive]}
                    onPress={() => { setAvatar(em); setAvatarModalVisible(false); }}
                    activeOpacity={0.7}
                  >
                    <Text style={styles.emojiText}>{em}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
            {avatar ? (
              <TouchableOpacity
                style={styles.clearBtn}
                onPress={() => { setAvatar(''); setAvatarModalVisible(false); }}
                activeOpacity={0.7}
              >
                <Text style={styles.clearBtnText}>Seçimi temizle</Text>
              </TouchableOpacity>
            ) : null}
          </View>
        </TouchableOpacity>
      </Modal>
      {/* Policy modal */}
      <Modal
        visible={policyVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setPolicyVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setPolicyVisible(false)}
        >
          <View style={styles.bottomSheet} onStartShouldSetResponder={() => true}>
            <View style={styles.sheetHandle} />

            {/* Lang toggle */}
            <View style={styles.policyLangRow}>
              <TouchableOpacity
                style={[styles.policyLangBtn, policyLang === 'tr' && styles.policyLangBtnActive]}
                onPress={() => setPolicyLang('tr')}
                activeOpacity={0.7}
              >
                <Text style={[styles.policyLangText, policyLang === 'tr' && styles.policyLangTextActive]}>🇹🇷 TR</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.policyLangBtn, policyLang === 'de' && styles.policyLangBtnActive]}
                onPress={() => setPolicyLang('de')}
                activeOpacity={0.7}
              >
                <Text style={[styles.policyLangText, policyLang === 'de' && styles.policyLangTextActive]}>🇩🇪 DE</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.policyLangBtn, policyLang === 'en' && styles.policyLangBtnActive]}
                onPress={() => setPolicyLang('en')}
                activeOpacity={0.7}
              >
                <Text style={[styles.policyLangText, policyLang === 'en' && styles.policyLangTextActive]}>🇬🇧 EN</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.sheetTitle}>{POLICY_CONTENT[policyType][policyLang].title}</Text>

            <View>
              <Text style={styles.policyBody}>{POLICY_CONTENT[policyType][policyLang].body}</Text>
            </View>

            <TouchableOpacity
              style={styles.policyCloseBtn}
              onPress={() => setPolicyVisible(false)}
              activeOpacity={0.8}
            >
              <Text style={styles.policyCloseBtnText}>Kapat</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: C.bg },

  // Slides
  slideFlex: { flex: 1, paddingHorizontal: 28, paddingBottom: 24 },
  slideTopRow: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingTop: 16, marginBottom: 8,
  },
  slideCounter: { fontSize: 13, fontWeight: '600', color: C.textFaint, letterSpacing: 0.5 },
  skipBtn: { paddingHorizontal: 12, paddingVertical: 6 },
  skipText: { fontSize: 14, fontWeight: '600', color: C.textDim, letterSpacing: 0.2 },
  slideContent: {
    flex: 1, alignItems: 'center', justifyContent: 'center', gap: 20,
  },
  slideIconCard: {
    width: 140, height: 140, borderRadius: 36,
    borderWidth: 2, alignItems: 'center', justifyContent: 'center',
    shadowColor: '#000', shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08, shadowRadius: 20, elevation: 4,
    marginBottom: 8,
  },
  slideEmoji: { fontSize: 72, lineHeight: 88 },
  slideTitle: {
    fontSize: 26, fontWeight: '800', color: C.text,
    textAlign: 'center', letterSpacing: 0.1,
  },
  slideSubtitle: {
    fontSize: 15, fontWeight: '700',
    textAlign: 'center', letterSpacing: 0.2, marginTop: -8,
  },
  slideDesc: {
    fontSize: 15, color: C.textDim, fontWeight: '400',
    textAlign: 'center', lineHeight: 23, letterSpacing: 0.1,
    paddingHorizontal: 8,
  },
  slideBottom: { gap: 24, paddingBottom: 8 },
  dotRow: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 8 },
  dot: { width: 8, height: 8, borderRadius: 4 },
  slideBtn: {
    borderRadius: 16, paddingVertical: 18, alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25, shadowRadius: 14, elevation: 5,
  },
  slideBtnText: { fontSize: 17, fontWeight: '800', color: '#FFFFFF', letterSpacing: 0.4 },

  // Setup form (existing)
  container: { paddingHorizontal: 24, paddingTop: 48, paddingBottom: 48, gap: 36 },

  hero: {},
  heroRow: { flexDirection: 'row', alignItems: 'center', gap: 16 },
  flagWrap: {
    width: 60, height: 60, borderRadius: 18,
    backgroundColor: C.surface, alignItems: 'center', justifyContent: 'center',
    borderWidth: 1.5, borderColor: C.borderBright,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08, shadowRadius: 8, elevation: 3,
    flexShrink: 0,
  },
  flag: { fontSize: 34 },
  heroText: { flex: 1, gap: 3 },
  title: { fontSize: 22, fontWeight: '800', color: C.text, letterSpacing: 0.1 },
  subtitle: { fontSize: 14, color: C.textDim, fontWeight: '500', letterSpacing: 0.1 },

  sectionCard: {
    flexDirection: 'row',
    borderRadius: 18,
    borderWidth: 1,
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06, shadowRadius: 8, elevation: 2,
    overflow: 'hidden',
  },
  sectionAccent: { width: 4 },
  sectionInner: { flex: 1, padding: 18, gap: 12 },
  labelRow: { flexDirection: 'row', alignItems: 'center' },
  label: { fontSize: 10, fontWeight: '700', color: C.textDim, letterSpacing: 2 },
  labelRequired: { fontSize: 12, fontWeight: '700', color: C.danger },
  inputHint: { fontSize: 12, color: C.danger, fontWeight: '500', marginTop: -4 },
  input: {
    backgroundColor: C.surface2,
    borderRadius: 12, paddingHorizontal: 16, paddingVertical: 14,
    fontSize: 17, color: C.text, fontWeight: '500', letterSpacing: 0.2,
    borderWidth: 1.5, borderColor: C.borderBright,
  },

  goalGrid: { flexDirection: 'row', gap: 10 },
  goalCard: {
    flex: 1, backgroundColor: C.surface, borderRadius: 14,
    paddingVertical: 18, paddingHorizontal: 8, alignItems: 'center',
    borderWidth: 1.5, borderColor: C.border, gap: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04, shadowRadius: 4, elevation: 1,
  },
  goalCardActive: {
    borderColor: C.primary, backgroundColor: C.primaryBg,
    shadowColor: C.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.18, shadowRadius: 10, elevation: 3,
  },
  goalNumber: { fontSize: 28, fontWeight: '800', color: C.textFaint },
  goalNumberActive: { color: C.primary },
  goalUnit: { fontSize: 10, color: C.textFaint, fontWeight: '700', letterSpacing: 0.5 },
  goalUnitActive: { color: C.primary },
  goalSub: { fontSize: 9, color: C.textFaint, fontWeight: '500', textAlign: 'center', marginTop: 2, letterSpacing: 0.2 },
  goalSubActive: { color: C.textDim },

  avatarTrigger: {
    flexDirection: 'row', alignItems: 'center', gap: 14,
    backgroundColor: C.surface, borderRadius: 16,
    paddingHorizontal: 16, paddingVertical: 14,
    borderWidth: 1.5, borderColor: C.borderBright,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04, shadowRadius: 4, elevation: 1,
  },
  avatarTriggerCircle: {
    width: 54, height: 54, borderRadius: 27,
    backgroundColor: C.surface2, borderWidth: 2, borderColor: C.borderBright,
    alignItems: 'center', justifyContent: 'center',
  },
  avatarTriggerCircleSelected: {
    borderColor: C.primary, backgroundColor: C.primaryBg,
  },
  avatarTriggerEmoji: { fontSize: 30 },
  avatarTriggerQuestion: { fontSize: 24, color: C.textFaint, fontWeight: '700' },
  avatarTriggerInfo: { flex: 1, gap: 3 },
  avatarTriggerTitle: { fontSize: 15, fontWeight: '700', color: C.text, letterSpacing: 0.1 },
  avatarTriggerHint: { fontSize: 12, color: C.textFaint, fontWeight: '500' },
  avatarTriggerArrow: { fontSize: 22, color: C.textFaint, fontWeight: '300', lineHeight: 26 },

  startBtn: {
    backgroundColor: C.primary, borderRadius: 14, paddingVertical: 18, alignItems: 'center',
    shadowColor: C.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3, shadowRadius: 14, elevation: 6,
  },
  startBtnDisabled: { backgroundColor: C.border, shadowOpacity: 0 },
  startBtnText: { fontSize: 17, fontWeight: '800', color: '#FFFFFF', letterSpacing: 0.5 },

  footer: {
    textAlign: 'center', fontSize: 13, color: C.textFaint, fontWeight: '500', lineHeight: 20, letterSpacing: 0.2,
  },
  policyNotice: {
    textAlign: 'center', fontSize: 11, color: C.textFaint,
    fontWeight: '400', lineHeight: 17, letterSpacing: 0.1,
    paddingHorizontal: 12,
  },
  policyLink: {
    color: C.primary, fontWeight: '600', textDecorationLine: 'underline',
  },

  policyLangRow: {
    flexDirection: 'row', gap: 8, marginBottom: 16, justifyContent: 'center',
  },
  policyLangBtn: {
    paddingHorizontal: 16, paddingVertical: 7, borderRadius: 20,
    borderWidth: 1.5, borderColor: C.border, backgroundColor: C.surface,
  },
  policyLangBtnActive: {
    borderColor: C.primary, backgroundColor: C.primaryBg,
  },
  policyLangText: { fontSize: 13, fontWeight: '600', color: C.textDim },
  policyLangTextActive: { color: C.primary },
  policyBody: {
    fontSize: 12, color: C.textDim, lineHeight: 18,
    fontWeight: '400', paddingBottom: 16,
  },
  policyCloseBtn: {
    marginTop: 12, backgroundColor: C.primary,
    borderRadius: 14, paddingVertical: 14, alignItems: 'center',
  },
  policyCloseBtnText: { fontSize: 15, fontWeight: '800', color: '#fff', letterSpacing: 0.3 },

  // Modal bottom sheet
  modalOverlay: {
    flex: 1, backgroundColor: 'rgba(10,20,60,0.45)', justifyContent: 'flex-end',
  },
  bottomSheet: {
    backgroundColor: C.surface,
    borderTopLeftRadius: 28, borderTopRightRadius: 28,
    paddingTop: 12, paddingHorizontal: 20, paddingBottom: 40,
    maxHeight: '88%',
    shadowColor: '#000', shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.08, shadowRadius: 16, elevation: 8,
    borderTopWidth: 1, borderColor: C.border,
  },
  sheetHandle: {
    width: 40, height: 4, borderRadius: 2,
    backgroundColor: C.border, alignSelf: 'center', marginBottom: 16,
  },
  sheetTitle: {
    fontSize: 18, fontWeight: '800', color: C.text,
    textAlign: 'center', letterSpacing: 0.2, marginBottom: 4,
  },
  sheetHint: {
    fontSize: 12, color: C.textFaint, fontWeight: '500',
    textAlign: 'center', marginBottom: 20, letterSpacing: 0.2,
  },
  sheetScroll: { flexGrow: 0 },
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
  clearBtn: {
    marginTop: 16, paddingVertical: 12, alignItems: 'center',
    borderWidth: 1.5, borderColor: C.border, borderRadius: 14,
    backgroundColor: C.surface,
  },
  clearBtnText: { fontSize: 14, fontWeight: '700', color: C.textDim, letterSpacing: 0.2 },
});
