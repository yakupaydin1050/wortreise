import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, spacing, type } from '../../theme';

interface Props {
  title: string;
  trailing?: string;
  /** Extra top spacing when the section follows dense content. */
  spaced?: boolean;
}

/**
 * Quiet uppercase section label — sections are separated by whitespace
 * and typography, not by boxes.
 */
export default function SectionHeader({ title, trailing, spaced }: Props) {
  return (
    <View style={[styles.row, spaced && { marginTop: spacing.md }]}>
      <Text style={type.label}>{title}</Text>
      {trailing != null && <Text style={styles.trailing}>{trailing}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.xs,
    marginBottom: 2,
  },
  trailing: { fontSize: 12, fontWeight: '700', color: colors.textDim, letterSpacing: 0.4 },
});
