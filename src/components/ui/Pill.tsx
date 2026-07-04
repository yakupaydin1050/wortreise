import React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import { alpha, colors, radius } from '../../theme';

interface Props {
  label: string;
  tint?: string;
  /** Filled pill (solid accent) instead of translucent. */
  solid?: boolean;
  style?: ViewStyle;
}

/** Small status/badge pill (level tags, BETA, streak, …). */
export default function Pill({ label, tint = colors.primary, solid, style }: Props) {
  return (
    <View
      style={[
        styles.base,
        solid
          ? { backgroundColor: tint }
          : { backgroundColor: alpha(tint, 0.12), borderWidth: 1, borderColor: alpha(tint, 0.32) },
        style,
      ]}
    >
      <Text style={[styles.text, { color: solid ? colors.onAccent : tint }]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: radius.pill,
    paddingHorizontal: 10,
    paddingVertical: 4,
    alignSelf: 'flex-start',
  },
  text: { fontSize: 11, fontWeight: '800', letterSpacing: 0.8 },
});
