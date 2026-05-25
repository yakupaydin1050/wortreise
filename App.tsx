import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeScreen from './src/screens/HomeScreen';
import GameScreen from './src/screens/GameScreen';
import MatchingScreen from './src/screens/MatchingScreen';
import A1Screen from './src/screens/A1Screen';
import A2Screen from './src/screens/A2Screen';
import B1Screen from './src/screens/B1Screen';
import ArtikelScreen from './src/screens/ArtikelScreen';
import KelimeAviScreen from './src/screens/KelimeAviScreen';
import OnboardingScreen from './src/screens/OnboardingScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import StatsScreen from './src/screens/StatsScreen';
import OyunlarScreen from './src/screens/OyunlarScreen';
import HafizaScreen from './src/screens/HafizaScreen';
import WortdorfScreen from './src/screens/WortdorfScreen';
import NeighborhoodScreen from './src/screens/NeighborhoodScreen';
import DialogScreen from './src/screens/DialogScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BookIcon({ color }: { color: string }) {
  return (
    <View style={{ width: 24, height: 20, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ flexDirection: 'row', height: 14, width: 22 }}>
        <View style={{
          flex: 1,
          borderTopWidth: 1.5, borderBottomWidth: 1.5, borderLeftWidth: 1.5,
          borderColor: color, borderTopLeftRadius: 2, borderBottomLeftRadius: 2,
        }} />
        <View style={{ width: 1.5, backgroundColor: color }} />
        <View style={{
          flex: 1,
          borderTopWidth: 1.5, borderBottomWidth: 1.5, borderRightWidth: 1.5,
          borderColor: color, borderTopRightRadius: 2, borderBottomRightRadius: 2,
        }} />
      </View>
    </View>
  );
}

function ChartIcon({ color }: { color: string }) {
  return (
    <View style={{ width: 24, height: 20, alignItems: 'flex-end', justifyContent: 'flex-end', flexDirection: 'row', gap: 3 }}>
      <View style={{ width: 5, height: 8, backgroundColor: color, borderRadius: 2 }} />
      <View style={{ width: 5, height: 13, backgroundColor: color, borderRadius: 2 }} />
      <View style={{ width: 5, height: 20, backgroundColor: color, borderRadius: 2 }} />
    </View>
  );
}

function GameIcon({ color }: { color: string }) {
  return (
    <View style={{ width: 26, height: 18, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{
        width: 26, height: 16, borderRadius: 8,
        borderWidth: 1.5, borderColor: color,
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
        paddingHorizontal: 5,
      }}>
        <View style={{ gap: 3 }}>
          <View style={{ width: 6, height: 1.5, backgroundColor: color, borderRadius: 1 }} />
          <View style={{ width: 6, height: 1.5, backgroundColor: color, borderRadius: 1 }} />
        </View>
        <View style={{ flexDirection: 'row', gap: 3 }}>
          <View style={{ width: 4, height: 4, borderRadius: 2, backgroundColor: color }} />
          <View style={{ width: 4, height: 4, borderRadius: 2, backgroundColor: color }} />
        </View>
      </View>
    </View>
  );
}

function PersonIcon({ color }: { color: string }) {
  return (
    <View style={{ width: 22, height: 21, alignItems: 'center' }}>
      <View style={{
        width: 9, height: 9, borderRadius: 4.5,
        borderWidth: 1.5, borderColor: color, marginBottom: 3,
      }} />
      <View style={{
        width: 17, height: 8,
        borderTopLeftRadius: 9, borderTopRightRadius: 9,
        borderTopWidth: 1.5, borderLeftWidth: 1.5, borderRightWidth: 1.5,
        borderColor: color,
      }} />
    </View>
  );
}

function TabBarDivider() {
  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF', justifyContent: 'flex-end' }}>
      <View style={{ height: 1.5, backgroundColor: '#B8C4E8' }} />
    </View>
  );
}

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#3B5BDB',
        tabBarInactiveTintColor: '#8896B8',
        tabBarBackground: () => <TabBarDivider />,
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopColor: '#B8C4E8',
          borderTopWidth: 1.5,
          elevation: 4,
        },
        tabBarItemStyle: {
          justifyContent: 'flex-start',
          paddingTop: 10,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '700',
          letterSpacing: 0.3,
        },
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Keşfet',
          tabBarIcon: ({ color }) => <BookIcon color={color} />,
        }}
      />
      <Tab.Screen
        name="OyunlarTab"
        component={OyunlarScreen}
        options={{
          tabBarLabel: 'Oyunlar',
          tabBarIcon: ({ color }) => <GameIcon color={color} />,
        }}
      />
      <Tab.Screen
        name="StatsTab"
        component={StatsScreen}
        options={{
          tabBarLabel: 'İstatistik',
          tabBarIcon: ({ color }) => <ChartIcon color={color} />,
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profil',
          tabBarIcon: ({ color }) => <PersonIcon color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  const [hasProfile, setHasProfile] = useState<boolean | null>(null);

  useEffect(() => {
    AsyncStorage.getItem('@lernspiel_profile').then(val => {
      setHasProfile(val !== null);
    });
  }, []);

  if (hasProfile === null) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#F8F9FE' }}>
        <ActivityIndicator size="large" color="#3B5BDB" />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={hasProfile ? 'Main' : 'Onboarding'}
      >
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Main" component={MainTabs} />
        <Stack.Screen name="Game" component={GameScreen} />
        <Stack.Screen name="Matching" component={MatchingScreen} />
        <Stack.Screen name="A1" component={A1Screen} />
        <Stack.Screen name="A2" component={A2Screen} />
        <Stack.Screen name="B1" component={B1Screen} />
        <Stack.Screen name="Artikel" component={ArtikelScreen} />
        <Stack.Screen name="KelimeAvi" component={KelimeAviScreen} />
        <Stack.Screen name="Hafiza" component={HafizaScreen} />
        <Stack.Screen name="Wortdorf" component={WortdorfScreen} />
        <Stack.Screen name="Neighborhood" component={NeighborhoodScreen} />
        <Stack.Screen name="Dialog" component={DialogScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
}
