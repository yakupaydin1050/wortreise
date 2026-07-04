import React, { useRef } from 'react';
import { Animated, Pressable, StyleProp, ViewStyle } from 'react-native';
import { triggerTap } from '../../utils/haptics';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

interface Props {
  onPress?: () => void;
  onLongPress?: () => void;
  disabled?: boolean;
  /** Scale when pressed; keep subtle for large surfaces. */
  pressedScale?: number;
  haptic?: boolean;
  style?: StyleProp<ViewStyle>;
  hitSlop?: { top: number; bottom: number; left: number; right: number };
  children: React.ReactNode;
  accessibilityLabel?: string;
  accessibilityRole?: 'button';
  testID?: string;
}

/**
 * Micro-interaction wrapper: spring scale-down on touch + light haptic.
 * Every tappable surface in the app goes through this so touch feedback
 * is standardized (mission: buttons must feel like pressable objects).
 *
 * The style is applied to the Pressable node itself (via an animated
 * Pressable) so flex styles like `flex: 1` keep working inside rows —
 * a nested wrapper view would collapse them to zero size.
 */
export default function PressableScale({
  onPress,
  onLongPress,
  disabled,
  pressedScale = 0.97,
  haptic = true,
  style,
  hitSlop,
  children,
  accessibilityLabel,
  testID,
}: Props) {
  const scale = useRef(new Animated.Value(1)).current;

  const animateTo = (value: number) =>
    Animated.spring(scale, {
      toValue: value,
      useNativeDriver: true,
      speed: 40,
      bounciness: 5,
    }).start();

  // Pressing also nudges the surface down slightly — together with the
  // raised key-cap finish it reads as a physical button being pushed in.
  const translateY = pressedScale < 1
    ? scale.interpolate({
        inputRange: [pressedScale, 1],
        outputRange: [3, 0],
        extrapolate: 'clamp',
      })
    : 0;

  return (
    <AnimatedPressable
      onPressIn={() => animateTo(pressedScale)}
      onPressOut={() => animateTo(1)}
      onPress={() => {
        if (disabled) return;
        if (haptic) triggerTap();
        onPress?.();
      }}
      onLongPress={onLongPress}
      disabled={disabled}
      hitSlop={hitSlop}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      testID={testID}
      style={[style, { transform: [{ scale }, { translateY }] }]}
    >
      {children}
    </AnimatedPressable>
  );
}
