import React, { useEffect, useRef } from 'react';
import { Text, StyleSheet, Pressable, Animated } from 'react-native';

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
      onPress={onPress}
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
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#C8D0E8',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 9,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 1,
  },
  chipSelected: {
    backgroundColor: 'rgba(59,91,219,0.09)',
    borderColor: '#3B5BDB',
    shadowColor: '#3B5BDB',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.18,
    shadowRadius: 8,
    elevation: 3,
  },
  text: {
    color: '#1A2340',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.2,
  },
  textSelected: {
    color: '#3B5BDB',
    fontWeight: '700',
  },
});
