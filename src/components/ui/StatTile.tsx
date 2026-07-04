import React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import { colors, spacing, type } from '../../theme';

interface Props {
  value: string | number;
  label: string;
  tint?: string;
  style?: ViewStyle;
}

/** Big-number stat cell for dashboards — typography-first, no box chrome. */
export default function StatTile({ value, label, tint, style }: Props) {
  return (
    <View style={[styles.tile, style]}>
      <Text style={[type.numeral, tint ? { color: tint } : null]} numberOfLines={1}>
        {value}
      </Text>
      <Text style={styles.label} numberOfLines={1}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tile: { alignItems: 'center', gap: 2, paddingVertical: spacing.sm },
  label: { fontSize: 12, fontWeight: '600', color: colors.textFaint, letterSpacing: 0.4 },
});
