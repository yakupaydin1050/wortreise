import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loadStats } from './src/utils/storage';
import { setupNotificationHandler, setupAndroidChannel, refreshStreakNotification } from './src/utils/notifications';
import { loadAndApplyHapticsPreference } from './src/utils/haptics';
import ErrorBoundary from './src/components/ErrorBoundary';
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
    <View style={{ width: 30, height: 26, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ flexDirection: 'row', height: 18, width: 28 }}>
        <View style={{
          flex: 1,
          borderTopWidth: 2, borderBottomWidth: 2, borderLeftWidth: 2,
          borderColor: color, borderTopLeftRadius: 3, borderBottomLeftRadius: 3,
        }} />
        <View style={{ width: 2, backgroundColor: color }} />
        <View style={{
          flex: 1,
          borderTopWidth: 2, borderBottomWidth: 2, borderRightWidth: 2,
          borderColor: color, borderTopRightRadius: 3, borderBottomRightRadius: 3,
        }} />
      </View>
    </View>
  );
}

function ChartIcon({ color }: { color: string }) {
  return (
    <View style={{ width: 30, height: 26, alignItems: 'flex-end', justifyContent: 'flex-end', flexDirection: 'row', gap: 4 }}>
      <View style={{ width: 6, height: 10, backgroundColor: color, borderRadius: 2 }} />
      <View style={{ width: 6, height: 16, backgroundColor: color, borderRadius: 2 }} />
      <View style={{ width: 6, height: 24, backgroundColor: color, borderRadius: 2 }} />
    </View>
  );
}

function GameIcon({ color }: { color: string }) {
  return (
    <View style={{ width: 32, height: 22, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{
        width: 32, height: 20, borderRadius: 10,
        borderWidth: 2, borderColor: color,
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
        paddingHorizontal: 6,
      }}>
        <View style={{ gap: 4 }}>
          <View style={{ width: 7, height: 2, backgroundColor: color, borderRadius: 1 }} />
          <View style={{ width: 7, height: 2, backgroundColor: color, borderRadius: 1 }} />
        </View>
        <View style={{ flexDirection: 'row', gap: 4 }}>
          <View style={{ width: 5, height: 5, borderRadius: 2.5, backgroundColor: color }} />
          <View style={{ width: 5, height: 5, borderRadius: 2.5, backgroundColor: color }} />
        </View>
      </View>
    </View>
  );
}

function PersonIcon({ color }: { color: string }) {
  return (
    <View style={{ width: 28, height: 26, alignItems: 'center' }}>
      <View style={{
        width: 11, height: 11, borderRadius: 5.5,
        borderWidth: 2, borderColor: color, marginBottom: 4,
      }} />
      <View style={{
        width: 22, height: 10,
        borderTopLeftRadius: 11, borderTopRightRadius: 11,
        borderTopWidth: 2, borderLeftWidth: 2, borderRightWidth: 2,
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
  const insets = useSafeAreaInsets();
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
          elevation: 8,
          height: 60 + insets.bottom,
          paddingBottom: insets.bottom + 6,
          paddingTop: 8,
        },
        tabBarItemStyle: {
          paddingTop: 0,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '700',
          letterSpacing: 0.3,
          marginTop: 2,
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
          tabBarLabel: 'Gelişim',
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
    setupNotificationHandler();
    setupAndroidChannel();
    loadAndApplyHapticsPreference();
    AsyncStorage.getItem('@lernspiel_profile').then(val => {
      setHasProfile(val !== null);
      if (val !== null) {
        loadStats().then(stats => refreshStreakNotification(stats));
      }
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
    <GestureHandlerRootView style={{ flex: 1 }}>
    <SafeAreaProvider>
    <ErrorBoundary>
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
    </ErrorBoundary>
    </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
