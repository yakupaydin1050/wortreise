import React from 'react';
import {
  View, Text, StyleSheet, ScrollView, useWindowDimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NEIGHBORHOODS, BUILDINGS, Building } from '../data/wortdorf';
import { alpha, colors, gameAccent, radius, spacing, type } from '../theme';
import { ScreenBackground, GlassPanel, PressableScale, ScreenHeader, Pill } from '../components/ui';

export default function NeighborhoodScreen({ route, navigation }: { route: any; navigation: any }) {
  const { neighborhoodId } = route.params as { neighborhoodId: string };
  const { width } = useWindowDimensions();
  const cardSize = (width - spacing.xl * 2 - spacing.md) / 2;
  const hood = NEIGHBORHOODS.find(n => n.id === neighborhoodId)!;
  const buildings: Building[] = BUILDINGS.filter(b => hood.buildingIds.includes(b.id));

  return (
    <SafeAreaView style={styles.safe}>
      <ScreenBackground tint={hood.color ?? gameAccent.wortdorf} />

      <ScreenHeader
        title={`${hood.icon} ${hood.name}`}
        subtitle={hood.nameTR}
        onBack={() => navigation.goBack()}
      />

      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>

        {/* Description */}
        <View style={[styles.descBanner, {
          backgroundColor: alpha(hood.color, 0.12),
          borderColor: alpha(hood.color, 0.3),
        }]}>
          <Text style={[styles.descText, { color: colors.text }]}>{hood.description}</Text>
        </View>

        {/* Building grid */}
        <View style={styles.grid}>
          {buildings.map(building =>
            building.active !== false ? (
              <PressableScale
                key={building.id}
                onPress={() => navigation.navigate('Dialog', { buildingId: building.id })}
                accessibilityLabel={building.name}
              >
                <GlassPanel
                  padding={spacing.lg}
                  raised
                  tint={building.color}
                  style={[styles.card, { width: cardSize }]}
                >
                  <Text style={styles.cardIcon}>{building.icon}</Text>
                  <Text style={styles.cardName}>{building.name}</Text>
                  <Text style={styles.cardNameTR}>{building.nameTR}</Text>
                </GlassPanel>
              </PressableScale>
            ) : (
              <GlassPanel
                key={building.id}
                padding={spacing.lg}
                style={[styles.card, styles.cardDisabled, {
                  width: cardSize, borderTopColor: alpha(building.color, 0.4), borderTopWidth: 2,
                }]}
              >
                <Text style={[styles.cardIcon, { opacity: 0.45 }]}>{building.icon}</Text>
                <Text style={styles.cardNameDim}>{building.name}</Text>
                <Text style={styles.cardNameTRDim}>{building.nameTR}</Text>
                <Pill label="Demnächst" tint={colors.warning} />
              </GlassPanel>
            )
          )}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  container: {
    paddingHorizontal: spacing.xl, paddingTop: spacing.sm, paddingBottom: 56, gap: spacing.lg,
  },

  descBanner: {
    borderRadius: radius.md, paddingVertical: 12, paddingHorizontal: 16,
    borderWidth: 1,
  },
  descText: { fontSize: 13, fontWeight: '600', textAlign: 'center' },

  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.md },

  card: { alignItems: 'center', gap: 6 },
  cardIcon: { fontSize: 40 },
  cardName: { fontSize: 14, fontWeight: '800', color: colors.text, textAlign: 'center' },
  cardNameTR: { fontSize: 11, color: colors.textFaint, fontWeight: '500', textAlign: 'center' },
  cardDisabled: { opacity: 0.6 },
  cardNameDim: { fontSize: 13, fontWeight: '700', color: colors.textFaint, textAlign: 'center' },
  cardNameTRDim: { fontSize: 10, color: colors.textFaint, fontWeight: '500', textAlign: 'center', opacity: 0.7 },
});
