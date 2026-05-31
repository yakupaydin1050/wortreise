import React, { useState, useEffect, useMemo } from 'react';
import {
  View, Text, StyleSheet, Modal, TouchableOpacity,
  TextInput, ScrollView, KeyboardAvoidingView, Platform, Dimensions,
} from 'react-native';

const SHEET_MAX_H = Dimensions.get('window').height * 0.88;
import type { LevelId } from '../utils/storage';
import { loadFavorites, toggleFavorite } from '../utils/storage';
import type { WordEntry } from '../data/wordBank';

const C = {
  bg: '#FAF8F4', surface: '#FFFFFF', surface2: '#EEF1FF',
  border: '#DDE3F5', borderBright: '#B8C4E8',
  primary: '#3B5BDB',
  text: '#1A2340', textDim: '#4E5C80', textFaint: '#8896B8',
  warning: '#D97706',
};

interface Props {
  visible: boolean;
  onClose: () => void;
  level: LevelId;
  words: WordEntry[];
  title: string;
  favoritesOnly?: boolean;
}

export default function WordListModal({ visible, onClose, level, words, title, favoritesOnly = false }: Props) {
  const [query, setQuery] = useState('');
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

  useEffect(() => {
    if (visible) {
      loadFavorites().then(f => setFavoriteIds(f[level]));
      setQuery('');
    }
  }, [visible, level]);

  const displayWords = useMemo(() => {
    const base = favoritesOnly ? words.filter(w => favoriteIds.includes(w.id)) : words;
    if (!query.trim()) return base;
    const q = query.toLowerCase();
    return base.filter(w =>
      w.word.toLowerCase().includes(q) || (w.tr ?? '').toLowerCase().includes(q),
    );
  }, [words, query, favoriteIds, favoritesOnly]);

  async function handleToggle(wordId: string) {
    await toggleFavorite(level, wordId);
    const favs = await loadFavorites();
    setFavoriteIds(favs[level]);
  }

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <View style={styles.overlay}>
        <TouchableOpacity style={styles.backdrop} onPress={onClose} activeOpacity={1} />
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={styles.kav}
        >
          <View style={styles.sheet}>
                <View style={styles.handle} />

                <View style={styles.header}>
                  <Text style={styles.title}>{title}</Text>
                  <TouchableOpacity onPress={onClose} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
                    <Text style={styles.closeBtn}>✕</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.searchWrap}>
                  <Text style={styles.searchIcon}>🔍</Text>
                  <TextInput
                    style={styles.searchInput}
                    value={query}
                    onChangeText={setQuery}
                    placeholder="Almanca veya Türkçe ara..."
                    placeholderTextColor={C.textFaint}
                    selectionColor={C.primary}
                    clearButtonMode="while-editing"
                    autoCorrect={false}
                  />
                </View>

                {displayWords.length === 0 ? (
                  <View style={styles.empty}>
                    <Text style={styles.emptyText}>
                      {favoritesOnly
                        ? 'Henüz favori kelime yok.\nKelime listesinden ★ ile ekleyebilirsin.'
                        : 'Kelime bulunamadı.'}
                    </Text>
                  </View>
                ) : (
                  <ScrollView
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={styles.list}
                  >
                    {displayWords.map(item => {
                      const isFav = favoriteIds.includes(item.id);
                      return (
                        <View key={item.id} style={styles.row}>
                          <View style={styles.rowWords}>
                            <Text style={styles.german}>{item.word}</Text>
                            {item.tr ? <Text style={styles.turkish}>{item.tr}</Text> : null}
                          </View>
                          <TouchableOpacity
                            onPress={() => handleToggle(item.id)}
                            style={[styles.starBtn, isFav && styles.starBtnActive]}
                            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                          >
                            <Text style={[styles.star, isFav && styles.starActive]}>★</Text>
                          </TouchableOpacity>
                        </View>
                      );
                    })}
                  </ScrollView>
                )}
          </View>
        </KeyboardAvoidingView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1, backgroundColor: 'rgba(10,20,60,0.45)', justifyContent: 'flex-end',
  },
  backdrop: { ...StyleSheet.absoluteFillObject },
  kav: { width: '100%' },
  sheet: {
    backgroundColor: C.surface,
    borderTopLeftRadius: 28, borderTopRightRadius: 28,
    maxHeight: SHEET_MAX_H, paddingBottom: 32,
    borderTopWidth: 1, borderColor: C.border,
    shadowColor: '#000', shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.08, shadowRadius: 16, elevation: 8,
  },
  handle: {
    width: 40, height: 4, borderRadius: 2,
    backgroundColor: C.border, alignSelf: 'center', marginTop: 12, marginBottom: 4,
  },
  header: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    paddingHorizontal: 20, paddingTop: 12, paddingBottom: 12,
    borderBottomWidth: 1, borderBottomColor: C.border,
  },
  title: { fontSize: 16, fontWeight: '800', color: C.text, letterSpacing: 0.2 },
  closeBtn: { fontSize: 18, color: C.textFaint, fontWeight: '600' },
  searchWrap: {
    flexDirection: 'row', alignItems: 'center', gap: 10,
    marginHorizontal: 16, marginVertical: 12,
    backgroundColor: C.surface2, borderRadius: 14,
    paddingHorizontal: 14, paddingVertical: 10,
    borderWidth: 1.5, borderColor: C.borderBright,
  },
  searchIcon: { fontSize: 16 },
  searchInput: { flex: 1, fontSize: 15, color: C.text, fontWeight: '500' },
  list: { paddingHorizontal: 16, paddingBottom: 16 },
  row: {
    flexDirection: 'row', alignItems: 'center',
    paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: C.border,
    gap: 12,
  },
  rowWords: { flex: 1, gap: 2 },
  german: { fontSize: 16, fontWeight: '700', color: C.text, letterSpacing: 0.1 },
  turkish: { fontSize: 13, color: C.textDim, fontWeight: '500' },
  starBtn: {
    width: 36, height: 36, borderRadius: 10,
    alignItems: 'center', justifyContent: 'center',
    backgroundColor: C.surface2, borderWidth: 1.5, borderColor: C.borderBright,
  },
  starBtnActive: {
    backgroundColor: 'rgba(217,119,6,0.12)',
    borderColor: 'rgba(217,119,6,0.4)',
  },
  star: { fontSize: 18, color: C.textFaint },
  starActive: { color: C.warning },
  empty: { paddingHorizontal: 24, paddingVertical: 40, alignItems: 'center' },
  emptyText: { fontSize: 14, color: C.textFaint, textAlign: 'center', lineHeight: 22, fontWeight: '500' },
});
