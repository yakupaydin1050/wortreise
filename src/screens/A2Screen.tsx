import React from 'react';
import LevelScreenBase from './LevelScreenBase';

export default function A2Screen({ navigation }: { navigation: any }) {
  return (
    <LevelScreenBase
      navigation={navigation}
      level="A2"
      title="A2 Temel"
      subtitleWord="Grundwörter"
    />
  );
}
