import React from 'react';
import { StyleSheet, View, useWindowDimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { alpha, canvasGradient, colors } from '../../theme';

/**
 * Soft aurora glow — two stacked circles give a gentler falloff than a single
 * hard-edged disc, so on the dark canvas it reads as light rather than a shape.
 */
function Glow({
  color, size, opacity, top, left, right, bottom,
}: {
  color: string; size: number; opacity: number;
  top?: number; left?: number; right?: number; bottom?: number;
}) {
  return (
    <View style={{ position: 'absolute', width: size, height: size, top, left, right, bottom }}>
      <View style={{
        position: 'absolute', width: size, height: size, borderRadius: size / 2,
        backgroundColor: alpha(color, opacity * 0.45),
      }} />
      <View style={{
        position: 'absolute',
        top: size * 0.18, left: size * 0.18,
        width: size * 0.64, height: size * 0.64, borderRadius: size * 0.32,
        backgroundColor: alpha(color, opacity),
      }} />
    </View>
  );
}

/**
 * Full-bleed canvas: a night gradient overlaid with a multi-colour aurora.
 * `tint` (per-screen accent) drives one of the glows so each screen keeps its
 * identity, while fixed violet / cyan / indigo glows add depth and colour.
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
      {/* Top-right: violet + the screen's own accent layered for a richer corner */}
      <Glow color={colors.violet} size={blob * 1.05} opacity={0.20} top={-blob * 0.5} right={-blob * 0.32} />
      <Glow color={tint} size={blob * 0.7} opacity={0.16} top={-blob * 0.28} right={-blob * 0.1} />
      {/* Bottom-left: cyan */}
      <Glow color="#22D3EE" size={blob} opacity={0.15} bottom={-blob * 0.5} left={-blob * 0.4} />
      {/* Bottom-right counter-glow: indigo */}
      <Glow color={colors.primary} size={blob * 0.75} opacity={0.12} bottom={-blob * 0.42} right={-blob * 0.3} />
      {/* Vignette to keep the content area calm on tall screens */}
      <LinearGradient
        colors={['transparent', 'rgba(5,8,18,0.55)']}
        style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: height * 0.35 }}
      />
    </View>
  );
}
