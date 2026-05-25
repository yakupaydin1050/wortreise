import React from 'react';
import { View, StyleSheet } from 'react-native';

const CELL = 28;
const H = 54;
const V = 20;

export default function GridBackground() {
  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="none">
      {Array.from({ length: H }, (_, i) => (
        <View key={`h${i}`} style={[styles.h, { top: i * CELL }]} />
      ))}
      {Array.from({ length: V }, (_, i) => (
        <View key={`v${i}`} style={[styles.v, { left: i * CELL }]} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  h: { position: 'absolute', left: 0, right: 0, height: 1, backgroundColor: 'rgba(80,110,220,0.07)' },
  v: { position: 'absolute', top: 0, bottom: 0, width: 1, backgroundColor: 'rgba(80,110,220,0.07)' },
});
