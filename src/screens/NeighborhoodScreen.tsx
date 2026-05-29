import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
  ScrollView, Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NEIGHBORHOODS, BUILDINGS, Building } from '../data/wortdorf';
import GridBackground from '../components/GridBackground';

const { width } = Dimensions.get('window');
const CARD_SIZE = (width - 20 * 2 - 12) / 2;

const C = {
  bg: '#FAF8F4', surface: '#FFFFFF',
  border: '#DDE3F5',
  text: '#1A2340', textDim: '#4E5C80', textFaint: '#8896B8',
};

export default function NeighborhoodScreen({ route, navigation }: { route: any; navigation: any }) {
  const { neighborhoodId } = route.params as { neighborhoodId: string };
  const hood = NEIGHBORHOODS.find(n => n.id === neighborhoodId)!;
  const buildings: Building[] = BUILDINGS.filter(b => hood.buildingIds.includes(b.id));

  return (
    <SafeAreaView style={styles.safe}>
      <GridBackground />
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>

        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backBtn}
            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          >
            <Text style={styles.backBtnText}>←</Text>
          </TouchableOpacity>
          <View style={styles.headerCenter}>
            <Text style={styles.headerTitle}>{hood.icon} {hood.name}</Text>
            <Text style={styles.headerSub}>{hood.nameTR}</Text>
          </View>
          <View style={{ width: 38 }} />
        </View>

        {/* Description */}
        <View style={[styles.descBanner, { backgroundColor: hood.bgColor, borderColor: hood.color + '44' }]}>
          <Text style={[styles.descText, { color: hood.color }]}>{hood.description}</Text>
        </View>

        {/* Building grid */}
        <View style={styles.grid}>
          {buildings.map(building =>
            building.active !== false ? (
              <TouchableOpacity
                key={building.id}
                style={[styles.card, { borderTopColor: building.color, borderTopWidth: 3 }]}
                onPress={() => navigation.navigate('Dialog', { buildingId: building.id })}
                activeOpacity={0.82}
              >
                <Text style={styles.cardIcon}>{building.icon}</Text>
                <Text style={styles.cardName}>{building.name}</Text>
                <Text style={styles.cardNameTR}>{building.nameTR}</Text>
              </TouchableOpacity>
            ) : (
              <View
                key={building.id}
                style={[styles.card, styles.cardDisabled, { borderTopColor: building.color + '66', borderTopWidth: 3 }]}
              >
                <Text style={[styles.cardIcon, { opacity: 0.45 }]}>{building.icon}</Text>
                <Text style={styles.cardNameDim}>{building.name}</Text>
                <Text style={styles.cardNameTRDim}>{building.nameTR}</Text>
                <View style={styles.soonBadge}>
                  <Text style={styles.soonBadgeText}>Demnächst</Text>
                </View>
              </View>
            )
          )}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: C.bg },
  container: { paddingHorizontal: 20, paddingTop: 16, paddingBottom: 48, gap: 16 },

  header: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
  },
  backBtn: {
    width: 38, height: 38, borderRadius: 19,
    backgroundColor: C.surface, borderWidth: 1, borderColor: C.border,
    alignItems: 'center', justifyContent: 'center',
    shadowColor: '#000', shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06, shadowRadius: 4, elevation: 2,
  },
  backBtnText: { fontSize: 20, color: C.text, fontWeight: '700', lineHeight: 24 },
  headerCenter: { flex: 1, alignItems: 'center' },
  headerTitle: { fontSize: 17, fontWeight: '800', color: C.text },
  headerSub: { fontSize: 11, color: C.textFaint, fontWeight: '500', marginTop: 1 },

  descBanner: {
    borderRadius: 14, paddingVertical: 12, paddingHorizontal: 16,
    borderWidth: 1,
  },
  descText: { fontSize: 13, fontWeight: '600', textAlign: 'center' },

  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },

  card: {
    width: CARD_SIZE,
    backgroundColor: C.surface, borderRadius: 16,
    padding: 16, alignItems: 'center',
    borderWidth: 1, borderColor: C.border,
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06, shadowRadius: 6, elevation: 2,
    gap: 6,
  },
  cardIcon: { fontSize: 40 },
  cardName: { fontSize: 14, fontWeight: '800', color: C.text, textAlign: 'center' },
  cardNameTR: { fontSize: 11, color: C.textFaint, fontWeight: '500', textAlign: 'center' },
  cardDisabled: { opacity: 0.6 },
  cardNameDim: { fontSize: 13, fontWeight: '700', color: C.textFaint, textAlign: 'center' },
  cardNameTRDim: { fontSize: 10, color: C.textFaint, fontWeight: '500', textAlign: 'center', opacity: 0.7 },
  soonBadge: {
    backgroundColor: 'rgba(217,119,6,0.12)', borderRadius: 6,
    paddingHorizontal: 8, paddingVertical: 3,
    borderWidth: 1, borderColor: 'rgba(217,119,6,0.25)',
  },
  soonBadgeText: { fontSize: 9, fontWeight: '700', color: '#D97706', letterSpacing: 0.5 },
});
