import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDEGEDwt_739ouF8-CcqaJoAfT__e8WolE',
  authDomain: 'wortreise-6cefb.firebaseapp.com',
  projectId: 'wortreise-6cefb',
  storageBucket: 'wortreise-6cefb.firebasestorage.app',
  messagingSenderId: '337094314945',
  appId: '1:337094314945:web:a12934b0624781b141c7d40',
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const db = getFirestore(app);
