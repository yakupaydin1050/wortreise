import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../utils/firebase';

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  State
> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    addDoc(collection(db, 'crash_reports'), {
      message: error.message,
      stack: error.stack ?? '',
      componentStack: info.componentStack ?? '',
      platform: Platform.OS,
      platformVersion: String(Platform.Version),
      timestamp: serverTimestamp(),
    }).catch(() => {});
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.emoji}>😵</Text>
          <Text style={styles.title}>Bir şeyler ters gitti</Text>
          <Text style={styles.body}>
            Beklenmedik bir hata oluştu. Sorun otomatik olarak raporlandı.
          </Text>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => this.setState({ hasError: false })}
            activeOpacity={0.85}
          >
            <Text style={styles.btnText}>Yeniden Dene →</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FE',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 32,
    alignItems: 'center',
    gap: 16,
    borderWidth: 1,
    borderColor: '#DDE3F5',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.07,
    shadowRadius: 16,
    elevation: 4,
    width: '100%',
  },
  emoji: { fontSize: 56 },
  title: {
    fontSize: 20,
    fontWeight: '800',
    color: '#1A2340',
    textAlign: 'center',
    letterSpacing: 0.1,
  },
  body: {
    fontSize: 14,
    color: '#4E5C80',
    textAlign: 'center',
    lineHeight: 21,
    fontWeight: '400',
  },
  btn: {
    marginTop: 8,
    backgroundColor: '#3B5BDB',
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 32,
    shadowColor: '#3B5BDB',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.28,
    shadowRadius: 12,
    elevation: 5,
  },
  btnText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: 0.4,
  },
});
