import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { accentGradient, alpha, colors } from '../../theme';

interface Props {
  /** 0..1 */
  progress: number;
  height?: number;
  /** Solid accent; defaults to the brand gradient. */
  tint?: string;
}

/**
 * Animated progress bar — fill eases to its new width instead of jumping.
 */
export default function ProgressBar({ progress, height = 8, tint }: Props) {
  const anim = useRef(new Animated.Value(progress)).current;

  useEffect(() => {
    Animated.timing(anim, {
      toValue: Math.min(Math.max(progress, 0), 1),
      duration: 600,
      useNativeDriver: false, // animates width — layout property
    }).start();
  }, [progress, anim]);

  const width = anim.interpolate({ inputRange: [0, 1], outputRange: ['0%', '100%'] });

  return (
    <View style={[styles.track, { height, borderRadius: height / 2 }]}>
      <Animated.View style={{ width, height: '100%' }}>
        {tint ? (
          <View style={[styles.fill, { backgroundColor: tint, borderRadius: height / 2 }]} />
        ) : (
          <LinearGradient
            colors={[...accentGradient]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={[styles.fill, { borderRadius: height / 2 }]}
          />
        )}
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    backgroundColor: alpha(colors.primary, 0.12),
    overflow: 'hidden',
  },
  fill: { flex: 1 },
});
