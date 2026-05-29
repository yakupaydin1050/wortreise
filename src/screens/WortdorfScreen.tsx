import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NEIGHBORHOODS, BUILDINGS } from '../data/wortdorf';
import GridBackground from '../components/GridBackground';

const C = {
  bg: '#FAF8F4', surface: '#FFFFFF',
  border: '#DDE3F5',
  text: '#1A2340', textDim: '#4E5C80', textFaint: '#8896B8',
  warning: '#D97706', warningBg: 'rgba(217,119,6,0.12)',
};

export default function WortdorfScreen({ navigation }: { navigation: any }) {
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
            <Text style={styles.headerTitle}>🏙️ Wortstadt</Text>
            <Text style={styles.headerSub}>Das Leben in Deutschland</Text>
          </View>
          <View style={{ width: 38 }} />
        </View>

        {/* Neighborhood cards */}
        {NEIGHBORHOODS.map(hood => {
          const buildings = BUILDINGS.filter(b => hood.buildingIds.includes(b.id));
          const activeCount = buildings.filter(b => b.active !== false).length;
          const icons = buildings.filter(b => b.active !== false).slice(0, 3).map(b => b.icon).join(' ');

          return (
            <TouchableOpacity
              key={hood.id}
              style={[styles.hoodCard, { borderLeftColor: hood.color }]}
              onPress={() => navigation.navigate('Neighborhood', { neighborhoodId: hood.id })}
              activeOpacity={0.85}
            >
              <View style={styles.cardHeaderRow}>
                <View style={[styles.hoodIconBadge, { backgroundColor: hood.bgColor, borderColor: hood.color + '55' }]}>
                  <Text style={styles.hoodIconText}>{hood.icon}</Text>
                </View>
                <View style={[styles.countPill, { backgroundColor: hood.bgColor, borderColor: hood.color + '55' }]}>
                  <Text style={[styles.countPillText, { color: hood.color }]}>
                    {activeCount} / {buildings.length}
                  </Text>
                </View>
              </View>
              <Text style={styles.hoodName}>{hood.name}</Text>
              <Text style={styles.hoodNameTR}>{hood.nameTR}</Text>
              <Text style={styles.hoodDesc}>{hood.description}</Text>
              <View style={styles.cardFooterRow}>
                <Text style={styles.hoodIcons}>{icons}</Text>
                <Text style={[styles.cardArrow, { color: hood.color }]}>→</Text>
              </View>
            </TouchableOpacity>
          );
        })}

        <Text style={styles.footer}>Jedes Gespräch bringt dich weiter! 🚀</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: C.bg },
  container: { paddingHorizontal: 20, paddingTop: 16, paddingBottom: 48, gap: 0 },

  header: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    marginBottom: 24,
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
  headerTitle: { fontSize: 18, fontWeight: '800', color: C.text },
  headerSub: { fontSize: 11, color: C.textFaint, fontWeight: '500', marginTop: 1 },

  hoodCard: {
    backgroundColor: C.surface, borderRadius: 18, padding: 18, marginBottom: 12,
    borderWidth: 1, borderColor: C.border, borderLeftWidth: 4,
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08, shadowRadius: 10, elevation: 3,
  },

  cardHeaderRow: {
    flexDirection: 'row', justifyContent: 'space-between',
    alignItems: 'center', marginBottom: 12,
  },
  cardFooterRow: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    borderTopWidth: 1, borderTopColor: C.border, paddingTop: 12, marginTop: 4,
  },

  hoodIconBadge: {
    width: 44, height: 44, borderRadius: 14,
    borderWidth: 1.5, alignItems: 'center', justifyContent: 'center',
  },
  hoodIconText: { fontSize: 22 },

  countPill: {
    borderRadius: 8, paddingHorizontal: 10, paddingVertical: 4, borderWidth: 1,
  },
  countPillText: { fontSize: 11, fontWeight: '700', letterSpacing: 0.4 },

  hoodName: { fontSize: 18, fontWeight: '800', color: C.text, marginBottom: 2 },
  hoodNameTR: { fontSize: 12, fontWeight: '600', color: C.textFaint, marginBottom: 6 },
  hoodDesc: { fontSize: 13, color: C.textDim, lineHeight: 19 },

  hoodIcons: { fontSize: 20, letterSpacing: 4 },
  cardArrow: { fontSize: 20, fontWeight: '700' },

  footer: {
    textAlign: 'center', fontSize: 12, color: C.textFaint,
    marginTop: 24, fontWeight: '500', letterSpacing: 0.3,
  },
});
