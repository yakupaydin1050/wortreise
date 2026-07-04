import React, { useEffect, useRef } from 'react';
import { Text, StyleSheet, Pressable, Animated } from 'react-native';
import { alpha, colors } from '../theme';
import { triggerTap } from '../utils/haptics';

interface Props {
  word: string;
  onPress?: () => void;
  placed?: boolean;
  selected?: boolean;
}

export default function WordChip({ word, onPress, placed, selected }: Props) {
  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.spring(scale, {
      toValue: selected ? 1.06 : 1,
      useNativeDriver: true,
      speed: 20,
      bounciness: 5,
    }).start();
  }, [selected]);

  if (placed) return null;

  return (
    <Pressable
      onPressIn={() => {
        Animated.spring(scale, {
          toValue: 0.88,
          useNativeDriver: true,
          speed: 40,
          bounciness: 0,
        }).start();
      }}
      onPressOut={() => {
        Animated.spring(scale, {
          toValue: selected ? 1.06 : 1,
          useNativeDriver: true,
          speed: 20,
          bounciness: 5,
        }).start();
      }}
      onPress={() => {
        triggerTap();
        onPress?.();
      }}
    >
      <Animated.View
        style={[
          styles.chip,
          selected && styles.chipSelected,
          { transform: [{ scale }] },
        ]}
      >
        <Text style={[styles.text, selected && styles.textSelected]}>{word}</Text>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  chip: {
    backgroundColor: colors.glassStrong,
    borderWidth: 1,
    borderColor: colors.glassBorderStrong,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 9,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 2,
  },
  chipSelected: {
    backgroundColor: alpha(colors.primary, 0.16),
    borderColor: colors.primary,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 4,
  },
  text: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.2,
  },
  textSelected: {
    color: colors.primary,
    fontWeight: '700',
  },
});
