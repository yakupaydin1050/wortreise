import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NEIGHBORHOODS, BUILDINGS } from '../data/wortdorf';
import { alpha, colors, gameAccent, radius, spacing, type } from '../theme';
import { ScreenBackground, GlassPanel, PressableScale, ScreenHeader, Pill } from '../components/ui';

export default function WortdorfScreen({ navigation }: { navigation: any }) {
  return (
    <SafeAreaView style={styles.safe}>
      <ScreenBackground tint={gameAccent.wortdorf} />

      <ScreenHeader
        title="🏙️ Wortstadt"
        subtitle="Das Leben in Deutschland"
        onBack={() => navigation.goBack()}
      />

      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        {NEIGHBORHOODS.map(hood => {
          const buildings = BUILDINGS.filter(b => hood.buildingIds.includes(b.id));
          const activeCount = buildings.filter(b => b.active !== false).length;
          const icons = buildings.filter(b => b.active !== false).slice(0, 3).map(b => b.icon).join(' ');

          return (
            <PressableScale
              key={hood.id}
              onPress={() => navigation.navigate('Neighborhood', { neighborhoodId: hood.id })}
              accessibilityLabel={hood.name}
            >
              <GlassPanel padding={spacing.xl} raised tint={hood.color} style={styles.hoodCard}>
                <View style={styles.cardHeaderRow}>
                  <View style={[styles.hoodIconBadge, {
                    backgroundColor: alpha(hood.color, 0.14),
                    borderColor: alpha(hood.color, 0.32),
                  }]}>
                    <Text style={styles.hoodIconText}>{hood.icon}</Text>
                  </View>
                  <Pill label={`${activeCount} / ${buildings.length}`} tint={hood.color} />
                </View>
                <Text style={styles.hoodName}>{hood.name}</Text>
                <Text style={styles.hoodNameTR}>{hood.nameTR}</Text>
                <Text style={styles.hoodDesc}>{hood.description}</Text>
                <View style={styles.cardFooterRow}>
                  <Text style={styles.hoodIcons}>{icons}</Text>
                  <Text style={[styles.chevron, { color: hood.color }]}>›</Text>
                </View>
              </GlassPanel>
            </PressableScale>
          );
        })}

        <Text style={styles.footer}>Jedes Gespräch bringt dich weiter! 🚀</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  container: {
    paddingHorizontal: spacing.xl, paddingTop: spacing.sm, paddingBottom: 56, gap: spacing.md,
  },

  hoodCard: { gap: 2 },
  cardHeaderRow: {
    flexDirection: 'row', justifyContent: 'space-between',
    alignItems: 'center', marginBottom: spacing.md,
  },
  cardFooterRow: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    borderTopWidth: 1, borderTopColor: colors.glassBorder,
    paddingTop: spacing.md, marginTop: spacing.md,
  },

  hoodIconBadge: {
    width: 48, height: 48, borderRadius: radius.md,
    borderWidth: 1, alignItems: 'center', justifyContent: 'center',
  },
  hoodIconText: { fontSize: 24 },

  hoodName: { ...type.heading, marginBottom: 1 },
  hoodNameTR: { fontSize: 12, fontWeight: '600', color: colors.textFaint, marginBottom: 6 },
  hoodDesc: { ...type.body, fontSize: 13, lineHeight: 19 },

  hoodIcons: { fontSize: 20, letterSpacing: 4 },
  chevron: { fontSize: 24, fontWeight: '400', opacity: 0.8 },

  footer: {
    textAlign: 'center', fontSize: 12, color: colors.textFaint,
    marginTop: spacing.xl, fontWeight: '500', letterSpacing: 0.3,
  },
});
