import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import GridBackground from '../components/GridBackground';

const C = {
  bg: '#F8F9FE', surface: '#FFFFFF',
  border: '#DDE3F5', borderBright: '#B8C4E8',
  primary: '#3B5BDB', primaryBg: 'rgba(59,91,219,0.10)',
  text: '#1A2340', textDim: '#4E5C80', textFaint: '#8896B8',
};

const GAMES = [
  {
    key: 'Matching',
    icon: '🔗',
    title: 'Eşleştirme',
    desc: 'Almanca ve Türkçe kelimeleri eşleştir.',
    meta: '10 çift · sınırsız tur',
    color: '#7C3AED',
    colorBg: 'rgba(124,58,237,0.07)',
    colorBorder: '#E0D4F7',
    iconBg: 'rgba(124,58,237,0.12)',
  },
  {
    key: 'Artikel',
    icon: '⚔️',
    title: 'Artikel Savaşları',
    desc: 'der · die · das — kaç kelimeyi hatasız yaparsın?',
    meta: 'Seri rekoru · kendi kendine rekabet',
    color: '#EC4899',
    colorBg: 'rgba(236,72,153,0.07)',
    colorBorder: 'rgba(236,72,153,0.25)',
    iconBg: 'rgba(236,72,153,0.12)',
  },
  {
    key: 'KelimeAvi',
    icon: '🎯',
    title: 'Kelime Avı',
    desc: 'Türkçe anlamı gör, doğru Almancayı seç!',
    meta: 'Çoktan seçmeli · seri rekoru',
    color: '#0891B2',
    colorBg: 'rgba(8,145,178,0.07)',
    colorBorder: 'rgba(8,145,178,0.25)',
    iconBg: 'rgba(8,145,178,0.12)',
  },
  {
    key: 'Hafiza',
    icon: '🃏',
    title: 'Hafıza',
    desc: '20 kartı çevir, Almanca-Türkçe eşleşmeleri bul.',
    meta: '10 çift · en hızlı süre',
    color: '#6366F1',
    colorBg: 'rgba(99,102,241,0.07)',
    colorBorder: 'rgba(99,102,241,0.25)',
    iconBg: 'rgba(99,102,241,0.12)',
  },
];

export default function OyunlarScreen({ navigation }: { navigation: any }) {
  return (
    <SafeAreaView style={styles.safe}>
      <GridBackground />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Oyunlar</Text>
        <Text style={styles.headerSub}>Bilgini pekiştir, rekorunu kır</Text>
      </View>

      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        {GAMES.map(g => (
          <TouchableOpacity
            key={g.key}
            style={[styles.card, {
              backgroundColor: g.colorBg,
              borderColor: g.colorBorder,
              borderLeftColor: g.color,
              shadowColor: g.color,
            }]}
            onPress={() => navigation.navigate(g.key)}
            activeOpacity={0.85}
          >
            <View style={styles.cardHeaderRow}>
              <View style={styles.cardTitleRow}>
                <View style={[styles.cardIconBox, { backgroundColor: g.iconBg }]}>
                  <Text style={styles.cardIconText}>{g.icon}</Text>
                </View>
                <Text style={styles.cardTitle}>{g.title}</Text>
              </View>
              <View style={[styles.pill, { borderColor: `${g.color}40` }]}>
                <Text style={[styles.pillText, { color: g.color }]}>● OYUN</Text>
              </View>
            </View>
            <Text style={styles.cardDesc}>{g.desc}</Text>
            <View style={styles.cardFooter}>
              <Text style={styles.cardMeta}>{g.meta}</Text>
              <Text style={[styles.cardArrow, { color: g.color }]}>→</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: C.bg },
  header: {
    paddingHorizontal: 20, paddingVertical: 16,
    backgroundColor: C.surface,
    borderBottomWidth: 1, borderBottomColor: C.border,
  },
  headerTitle: { fontSize: 22, fontWeight: '800', color: C.text, letterSpacing: 0.1 },
  headerSub: { fontSize: 13, color: C.textDim, marginTop: 3, fontWeight: '500', letterSpacing: 0.1 },

  container: { paddingHorizontal: 20, paddingTop: 20, paddingBottom: 48, gap: 12 },

  card: {
    borderRadius: 18, padding: 18,
    borderWidth: 1, borderLeftWidth: 4,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12, shadowRadius: 10, elevation: 4,
  },
  cardHeaderRow: {
    flexDirection: 'row', justifyContent: 'space-between',
    alignItems: 'center', marginBottom: 10,
  },
  cardTitleRow: {
    flexDirection: 'row', alignItems: 'center', gap: 10, flex: 1,
  },
  cardIconBox: {
    borderRadius: 12, width: 40, height: 40,
    alignItems: 'center', justifyContent: 'center',
  },
  cardIconText: { fontSize: 20 },
  pill: {
    backgroundColor: 'rgba(0,0,0,0.04)', borderRadius: 8,
    paddingHorizontal: 10, paddingVertical: 4, borderWidth: 1,
  },
  pillText: { fontSize: 10, fontWeight: '700', letterSpacing: 0.8 },
  cardTitle: { fontSize: 16, fontWeight: '800', color: C.text, letterSpacing: 0.1, flex: 1 },
  cardDesc: { fontSize: 13, color: C.textDim, lineHeight: 19, marginBottom: 8, letterSpacing: 0.1 },
  cardFooter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  cardMeta: { fontSize: 12, fontWeight: '600', color: C.textDim },
  cardArrow: { fontSize: 20, fontWeight: '700' },
});
