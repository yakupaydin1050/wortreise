import React from 'react';
import LevelScreenBase from './LevelScreenBase';

export default function A1Screen({ navigation }: { navigation: any }) {
  return (
    <LevelScreenBase
      navigation={navigation}
      level="A1"
      title="A1 Başlangıç"
      subtitleWord="Grundwörter"
    />
  );
}
