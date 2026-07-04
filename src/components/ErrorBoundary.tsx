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
            Beklenmedik bir hata oluştu. Uygulama kararlılığını artırmak için teknik hata bilgisi gönderildi.
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
    backgroundColor: '#080C18',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  card: {
    backgroundColor: '#101830',
    borderRadius: 24,
    padding: 32,
    alignItems: 'center',
    gap: 16,
    borderWidth: 1,
    borderColor: 'rgba(160,175,255,0.24)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.35,
    shadowRadius: 20,
    elevation: 8,
    width: '100%',
  },
  emoji: { fontSize: 56 },
  title: {
    fontSize: 20,
    fontWeight: '800',
    color: '#F2F5FF',
    textAlign: 'center',
    letterSpacing: 0.1,
  },
  body: {
    fontSize: 14,
    color: '#9AA6CC',
    textAlign: 'center',
    lineHeight: 21,
    fontWeight: '400',
  },
  btn: {
    marginTop: 8,
    backgroundColor: '#5B6CF0',
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 32,
    shadowColor: '#5B6CF0',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
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
