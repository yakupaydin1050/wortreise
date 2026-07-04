import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, hitSlop, radius, spacing } from '../../theme';
import PressableScale from './PressableScale';

interface Props {
  title: string;
  subtitle?: string;
  onBack?: () => void;
  /** Right-side slot (badge, timer, …). */
  right?: React.ReactNode;
}

/**
 * Floating in-canvas header — no opaque bar, sits on the gradient
 * so screens feel like one continuous surface.
 */
export default function ScreenHeader({ title, subtitle, onBack, right }: Props) {
  return (
    <View style={styles.row}>
      {onBack ? (
        <PressableScale onPress={onBack} style={styles.backBtn} hitSlop={hitSlop} accessibilityLabel="Geri">
          <Text style={styles.backIcon}>‹</Text>
        </PressableScale>
      ) : (
        <View style={styles.backSpacer} />
      )}
      <View style={styles.center}>
        <Text style={styles.title} numberOfLines={1}>{title}</Text>
        {subtitle != null && <Text style={styles.subtitle} numberOfLines={1}>{subtitle}</Text>}
      </View>
      <View style={styles.right}>{right ?? <View style={styles.backSpacer} />}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    gap: spacing.md,
  },
  backBtn: {
    width: 44,
    height: 44,
    borderRadius: radius.md,
    backgroundColor: colors.glassStrong,
    borderWidth: 1,
    borderColor: colors.glassBorder,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: { fontSize: 26, color: colors.text, marginTop: -3, fontWeight: '600' },
  backSpacer: { width: 44, height: 44 },
  center: { flex: 1, alignItems: 'center', gap: 1 },
  title: { fontSize: 17, fontWeight: '800', color: colors.text, letterSpacing: -0.2 },
  subtitle: { fontSize: 12, fontWeight: '500', color: colors.textFaint, letterSpacing: 0.2 },
  right: { minWidth: 44, alignItems: 'flex-end' },
});
