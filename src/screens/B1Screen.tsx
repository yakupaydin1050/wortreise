import React from 'react';
import LevelScreenBase from './LevelScreenBase';

export default function B1Screen({ navigation }: { navigation: any }) {
  return (
    <LevelScreenBase
      navigation={navigation}
      level="B1"
      title="B1 Orta"
      subtitleWord="Mittelwörter"
    />
  );
}
