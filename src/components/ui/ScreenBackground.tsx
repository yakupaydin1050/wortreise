import React from 'react';
import { StyleSheet, View, useWindowDimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { alpha, canvasGradient, colors } from '../../theme';

/**
 * Full-bleed canvas: vertical night gradient with soft ambient glows.
 * Replaces flat solid backgrounds and gives every screen depth.
 */
export default function ScreenBackground({ tint = colors.primary }: { tint?: string }) {
  const { width, height } = useWindowDimensions();
  const blob = Math.max(width, 380);
  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="none">
      <LinearGradient
        colors={[...canvasGradient]}
        style={StyleSheet.absoluteFill}
        start={{ x: 0.2, y: 0 }}
        end={{ x: 0.6, y: 1 }}
      />
      {/* Ambient accent glow, top-right */}
      <View
        style={{
          position: 'absolute',
          top: -blob * 0.55,
          right: -blob * 0.35,
          width: blob,
          height: blob,
          borderRadius: blob / 2,
          backgroundColor: alpha(tint, 0.13),
        }}
      />
      {/* Faint counter-glow, bottom-left */}
      <View
        style={{
          position: 'absolute',
          bottom: -blob * 0.6,
          left: -blob * 0.45,
          width: blob,
          height: blob,
          borderRadius: blob / 2,
          backgroundColor: alpha(tint, 0.06),
        }}
      />
      {/* Vignette to keep content area calm on tall screens */}
      <LinearGradient
        colors={['transparent', 'rgba(5,8,18,0.55)']}
        style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: height * 0.35 }}
      />
    </View>
  );
}
