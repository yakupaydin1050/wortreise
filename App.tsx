import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loadStats } from './src/utils/storage';
import { setupNotificationHandler, setupAndroidChannel, refreshStreakNotification } from './src/utils/notifications';
import { loadAndApplyHapticsPreference } from './src/utils/haptics';
import { loadAndApplySoundPreference, preloadSounds } from './src/utils/sound';
import { alpha, colors } from './src/theme';
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

const navTheme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.bg,
    card: colors.bg,
    text: colors.text,
    border: colors.glassBorder,
  },
};

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

// Active tab gets a glowing pill behind its icon so the selected section
// stands out beyond a plain color change.
function TabIcon({ focused, children }: { focused: boolean; children: React.ReactNode }) {
  return (
    <View
      style={{
        width: 58,
        height: 32,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: focused ? alpha(colors.primary, 0.18) : 'transparent',
        borderWidth: 1,
        borderColor: focused ? alpha(colors.primary, 0.45) : 'transparent',
        shadowColor: colors.primary,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: focused ? 0.5 : 0,
        shadowRadius: 10,
        elevation: focused ? 6 : 0,
      }}
    >
      {children}
    </View>
  );
}

// Glass tab bar: gradient fade into the canvas + hairline light edge
function TabBarBackground() {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={['rgba(13,20,48,0.97)', 'rgba(8,12,24,0.99)']}
        style={{ flex: 1 }}
      />
      <View style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 1,
        backgroundColor: colors.glassBorder,
      }} />
    </View>
  );
}

function MainTabs() {
  const insets = useSafeAreaInsets();
  // On some Android devices with edgeToEdgeEnabled, insets.bottom is incorrectly
  // reported as 0 even when a navigation bar exists. Use a minimum floor so
  // tab labels are never hidden behind the system navigation bar.
  const bottomInset = Platform.OS === 'android'
    ? Math.max(insets.bottom, 24)
    : insets.bottom;
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#A9B4FF',
        tabBarInactiveTintColor: colors.textFaint,
        tabBarBackground: () => <TabBarBackground />,
        tabBarStyle: {
          backgroundColor: 'transparent',
          borderTopWidth: 0,
          elevation: 0,
          height: 64 + bottomInset,
          paddingBottom: bottomInset + 8,
          paddingTop: 6,
        },
        tabBarItemStyle: {
          paddingTop: 0,
        },
        tabBarLabelStyle: {
          fontSize: 11.5,
          fontWeight: '700',
          letterSpacing: 0.3,
          marginTop: 3,
        },
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Keşfet',
          tabBarIcon: ({ color, focused }) => (
            <TabIcon focused={focused}><BookIcon color={color} /></TabIcon>
          ),
        }}
      />
      <Tab.Screen
        name="OyunlarTab"
        component={OyunlarScreen}
        options={{
          tabBarLabel: 'Oyunlar',
          tabBarIcon: ({ color, focused }) => (
            <TabIcon focused={focused}><GameIcon color={color} /></TabIcon>
          ),
        }}
      />
      <Tab.Screen
        name="StatsTab"
        component={StatsScreen}
        options={{
          tabBarLabel: 'Gelişim',
          tabBarIcon: ({ color, focused }) => (
            <TabIcon focused={focused}><ChartIcon color={color} /></TabIcon>
          ),
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profil',
          tabBarIcon: ({ color, focused }) => (
            <TabIcon focused={focused}><PersonIcon color={color} /></TabIcon>
          ),
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
    loadAndApplySoundPreference().then(() => preloadSounds());
    AsyncStorage.getItem('@lernspiel_profile').then(val => {
      setHasProfile(val !== null);
      if (val !== null) {
        loadStats().then(stats => refreshStreakNotification(stats));
      }
    });
  }, []);

  if (hasProfile === null) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.bg }}>
        <StatusBar style="light" />
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <SafeAreaProvider>
    <ErrorBoundary>
    <NavigationContainer theme={navTheme}>
      <StatusBar style="light" />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
          animationDuration: 260,
          contentStyle: { backgroundColor: colors.bg },
        }}
        initialRouteName={hasProfile ? 'Main' : 'Onboarding'}
      >
        <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{ animation: 'fade' }} />
        <Stack.Screen name="Main" component={MainTabs} options={{ animation: 'fade' }} />
        <Stack.Screen name="Game" component={GameScreen} options={{ animation: 'fade_from_bottom' }} />
        <Stack.Screen name="Matching" component={MatchingScreen} options={{ animation: 'fade_from_bottom' }} />
        <Stack.Screen name="A1" component={A1Screen} />
        <Stack.Screen name="A2" component={A2Screen} />
        <Stack.Screen name="B1" component={B1Screen} />
        <Stack.Screen name="Artikel" component={ArtikelScreen} options={{ animation: 'fade_from_bottom' }} />
        <Stack.Screen name="KelimeAvi" component={KelimeAviScreen} options={{ animation: 'fade_from_bottom' }} />
        <Stack.Screen name="Hafiza" component={HafizaScreen} options={{ animation: 'fade_from_bottom' }} />
        <Stack.Screen name="Wortdorf" component={WortdorfScreen} />
        <Stack.Screen name="Neighborhood" component={NeighborhoodScreen} />
        <Stack.Screen name="Dialog" component={DialogScreen} options={{ animation: 'fade_from_bottom' }} />
      </Stack.Navigator>
    </NavigationContainer>
    </ErrorBoundary>
    </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
