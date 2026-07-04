import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { alpha, colors, gameAccent, radius, spacing, type } from '../theme';
import { ScreenBackground, GlassPanel, PressableScale } from '../components/ui';

const GAMES = [
  {
    key: 'Matching',
    icon: '🔗',
    title: 'Eşleştirme',
    desc: 'Almanca ve Türkçe kelimeleri eşleştir.',
    meta: '10 çift · sınırsız tur',
    accent: gameAccent.matching,
  },
  {
    key: 'Artikel',
    icon: '⚔️',
    title: 'Artikel Savaşları',
    desc: 'der · die · das — kaç kelimeyi hatasız yaparsın?',
    meta: 'Seri rekoru · kendi kendine rekabet',
    accent: gameAccent.artikel,
  },
  {
    key: 'KelimeAvi',
    icon: '🎯',
    title: 'Kelime Avı',
    desc: 'Türkçe anlamı gör, doğru Almancayı seç!',
    meta: 'Çoktan seçmeli · seri rekoru',
    accent: gameAccent.kelimeAvi,
  },
  {
    key: 'Hafiza',
    icon: '🃏',
    title: 'Hafıza',
    desc: '20 kartı çevir, Almanca-Türkçe eşleşmeleri bul.',
    meta: '10 çift · en hızlı süre',
    accent: gameAccent.hafiza,
  },
];

export default function OyunlarScreen({ navigation }: { navigation: any }) {
  return (
    <SafeAreaView style={styles.safe}>
      <ScreenBackground tint={gameAccent.matching} />
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={type.display}>Oyunlar</Text>
          <Text style={styles.headerSub}>Bilgini pekiştir, rekorunu kır</Text>
        </View>

        <View style={styles.list}>
          {GAMES.map(g => (
            <PressableScale
              key={g.key}
              onPress={() => navigation.navigate(g.key)}
              accessibilityLabel={g.title}
            >
              <GlassPanel padding={spacing.xl} raised tint={g.accent} style={styles.card}>
                <View style={styles.cardTop}>
                  <View style={[styles.iconBubble, {
                    backgroundColor: alpha(g.accent, 0.18),
                    borderColor: alpha(g.accent, 0.4),
                  }]}>
                    <Text style={styles.iconText}>{g.icon}</Text>
                  </View>
                  <View style={styles.cardTitleWrap}>
                    <Text style={styles.cardTitle}>{g.title}</Text>
                    <Text style={styles.cardDesc} numberOfLines={2}>{g.desc}</Text>
                  </View>
                </View>
                <View style={styles.cardFooter}>
                  <Text style={[styles.cardMeta, { color: g.accent }]}>{g.meta}</Text>
                  <Text style={[styles.chevron, { color: g.accent }]}>›</Text>
                </View>
              </GlassPanel>
            </PressableScale>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  container: {
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.xxl,
    paddingBottom: 56,
    gap: spacing.xl,
  },
  header: { gap: 4 },
  headerSub: { ...type.body, fontSize: 14 },

  list: { gap: spacing.md },
  card: { gap: spacing.lg },
  cardTop: { flexDirection: 'row', alignItems: 'center', gap: spacing.lg },
  iconBubble: {
    width: 52, height: 52, borderRadius: radius.md,
    borderWidth: 1, alignItems: 'center', justifyContent: 'center',
  },
  iconText: { fontSize: 24 },
  cardTitleWrap: { flex: 1, gap: 3 },
  cardTitle: { ...type.heading, fontSize: 16 },
  cardDesc: { ...type.caption, lineHeight: 17 },
  cardFooter: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    borderTopWidth: 1, borderTopColor: colors.glassBorder, paddingTop: spacing.md,
  },
  cardMeta: { fontSize: 12.5, fontWeight: '700', letterSpacing: 0.3 },
  chevron: { fontSize: 24, fontWeight: '400', opacity: 0.8 },
});
