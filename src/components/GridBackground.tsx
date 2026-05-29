import React from 'react';
import { View, StyleSheet } from 'react-native';

const CELL = 28;
const H = 54;
const V = 20;

export default function GridBackground() {
  return null;
}

const styles = StyleSheet.create({
  h: { position: 'absolute', left: 0, right: 0, height: 1, backgroundColor: 'rgba(120,90,50,0.06)' },
  v: { position: 'absolute', top: 0, bottom: 0, width: 1, backgroundColor: 'rgba(120,90,50,0.06)' },
});
