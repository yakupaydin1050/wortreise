import React from 'react';
import { StyleProp, StyleSheet, View, ViewProps, ViewStyle } from 'react-native';
import { alpha, colors, radius, shade, shadow, spacing } from '../../theme';

interface Props extends ViewProps {
  /** Accent color — tints the fill/border and adds a soft glow. */
  tint?: string;
  /** Stronger fill for panels that must stand out (modals, heroes). */
  emphasis?: 'default' | 'strong';
  /**
   * Tactile "key-cap" finish for tappable cards: opaque face catching light
   * on top, thick extruded bottom edge, accent glow. Static info panels stay
   * flat glass so pressable surfaces read as real buttons.
   */
  raised?: boolean;
  padding?: number;
  style?: StyleProp<ViewStyle>;
}

/**
 * Translucent glass surface — the base building block replacing boxed cards.
 * Depth comes from layered transparency, a light top border and a soft shadow.
 */
export default function GlassPanel({
  tint,
  emphasis = 'default',
  raised = false,
  padding = spacing.xl,
  style,
  children,
  ...rest
}: Props) {
  const tinted: ViewStyle | null = tint
    ? {
        backgroundColor: alpha(tint, emphasis === 'strong' ? 0.14 : 0.09),
        borderColor: alpha(tint, 0.3),
        ...shadow.glow(tint, 0.22),
      }
    : null;
  const raisedStyle: ViewStyle | null = raised
    ? {
        backgroundColor: tint ? shade(tint, 0.26) : '#1D2648',
        borderWidth: 1,
        borderColor: tint ? alpha(tint, 0.55) : 'rgba(170,184,255,0.34)',
        borderTopColor: 'rgba(255,255,255,0.22)',
        borderBottomWidth: 5,
        borderBottomColor: tint ? shade(tint, 0.1) : '#070B18',
        ...shadow.glow(tint ?? colors.primaryDeep, 0.4),
      }
    : null;
  return (
    <View
      style={[
        styles.base,
        emphasis === 'strong' && styles.strong,
        { padding },
        tinted,
        raisedStyle,
        style,
      ]}
      {...rest}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    backgroundColor: colors.glass,
    borderWidth: 1,
    borderColor: colors.glassBorder,
    borderRadius: radius.lg,
    ...shadow.soft,
  },
  strong: {
    backgroundColor: colors.glassStrong,
    borderColor: colors.glassBorderStrong,
  },
});
