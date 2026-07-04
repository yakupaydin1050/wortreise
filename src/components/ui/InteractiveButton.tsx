import React from 'react';
import { StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { accentGradient, alpha, colors, radius, shadow, spacing } from '../../theme';
import PressableScale from './PressableScale';

type Variant = 'primary' | 'glass' | 'ghost' | 'danger' | 'success';
type Size = 'sm' | 'md' | 'lg';

interface Props {
  label: string;
  onPress?: () => void;
  variant?: Variant;
  size?: Size;
  disabled?: boolean;
  /** Custom accent — used by glass variant for tinted borders/text. */
  tint?: string;
  icon?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  textStyle?: TextStyle;
  fullWidth?: boolean;
}

const SIZES: Record<Size, { padV: number; padH: number; font: number; minH: number }> = {
  sm: { padV: 8, padH: 14, font: 13, minH: 36 },
  md: { padV: 13, padH: 20, font: 15, minH: 48 },
  lg: { padV: 16, padH: 24, font: 16, minH: 54 },
};

/**
 * Standard app button — spring press, haptic tap, gradient or glass finish.
 */
export default function InteractiveButton({
  label,
  onPress,
  variant = 'primary',
  size = 'md',
  disabled,
  tint,
  icon,
  style,
  textStyle,
  fullWidth,
}: Props) {
  const s = SIZES[size];
  const inner = (
    <View style={styles.row}>
      {icon}
      <Text
        style={[
          styles.label,
          { fontSize: s.font },
          variant === 'primary' && { color: colors.onAccent },
          variant === 'glass' && { color: tint ?? colors.text },
          variant === 'ghost' && { color: tint ?? colors.textDim },
          variant === 'danger' && { color: colors.danger },
          variant === 'success' && { color: colors.success },
          disabled && { color: colors.textFaint },
          textStyle,
        ]}
        numberOfLines={1}
      >
        {label}
      </Text>
    </View>
  );

  const shape: ViewStyle = {
    paddingVertical: s.padV,
    paddingHorizontal: s.padH,
    minHeight: s.minH,
    borderRadius: radius.md,
    alignItems: 'center',
    justifyContent: 'center',
  };

  if (variant === 'primary') {
    return (
      <PressableScale
        onPress={onPress}
        disabled={disabled}
        style={[
          styles.primaryWrap,
          !disabled && shadow.glow(accentGradient[0], 0.4),
          fullWidth && styles.fullWidth,
          style as ViewStyle,
        ]}
        accessibilityLabel={label}
      >
        <LinearGradient
          colors={disabled ? ['#2A3050', '#252B48'] : [...accentGradient]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={shape}
        >
          {inner}
        </LinearGradient>
      </PressableScale>
    );
  }

  const variantStyle: ViewStyle =
    variant === 'glass'
      ? {
          backgroundColor: tint ? alpha(tint, 0.1) : colors.glassStrong,
          borderWidth: 1,
          borderColor: tint ? alpha(tint, 0.32) : colors.glassBorderStrong,
        }
      : variant === 'danger'
        ? { backgroundColor: colors.dangerSoft, borderWidth: 1, borderColor: colors.dangerBorder }
        : variant === 'success'
          ? { backgroundColor: colors.successSoft, borderWidth: 1, borderColor: colors.successBorder }
          : { backgroundColor: 'transparent' };

  return (
    <PressableScale
      onPress={onPress}
      disabled={disabled}
      style={[shape, variantStyle, disabled && styles.disabled, fullWidth && styles.fullWidth, style as ViewStyle]}
      accessibilityLabel={label}
    >
      {inner}
    </PressableScale>
  );
}

const styles = StyleSheet.create({
  primaryWrap: {
    borderRadius: radius.md,
    overflow: 'hidden',
  },
  fullWidth: { alignSelf: 'stretch' },
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: spacing.sm },
  label: { fontWeight: '700', letterSpacing: 0.2 },
  disabled: { opacity: 0.45 },
});
