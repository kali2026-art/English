import { create } from 'zustand';
import type { AccentType, PhonemeCategory, PhonemeData } from '@/data/phonemes';
import { phonemes as presetPhonemes } from '@/data/phonemes';
import { saveAudio, deleteAudio, loadAllAudios } from '@/utils/db';

interface PhonemeStore {
  phonemes: PhonemeData[];
  activeCategory: PhonemeCategory | 'all';
  searchQuery: string;
  selectedPhoneme: PhonemeData | null;

  setCategory: (category: PhonemeCategory | 'all') => void;
  setSearchQuery: (query: string) => void;
  selectPhoneme: (id: string) => void;
  closeDetail: () => void;
  updateAudio: (id: string, accent: AccentType, blob: Blob, fileName: string) => Promise<void>;
  removeAudio: (id: string, accent: AccentType) => Promise<void>;
  loadSavedAudios: () => Promise<void>;
}

export const usePhonemeStore = create<PhonemeStore>((set, get) => ({
  phonemes: [...presetPhonemes],
  activeCategory: 'all',
  searchQuery: '',
  selectedPhoneme: null,

  setCategory: (category) => set({ activeCategory: category }),
  setSearchQuery: (query) => set({ searchQuery: query }),

  selectPhoneme: (id) => {
    const phoneme = get().phonemes.find((p) => p.id === id) || null;
    set({ selectedPhoneme: phoneme });
  },

  closeDetail: () => set({ selectedPhoneme: null }),

  updateAudio: async (id, accent, blob, fileName) => {
    await saveAudio(id, accent, blob, fileName);
    const objectUrl = URL.createObjectURL(blob);
    const oldPhoneme = get().phonemes.find((p) => p.id === id);
    if (oldPhoneme) {
      if (accent === 'uk') {
        if (oldPhoneme.audioUK) URL.revokeObjectURL(oldPhoneme.audioUK);
      } else {
        if (oldPhoneme.audioUS) URL.revokeObjectURL(oldPhoneme.audioUS);
      }
    }
    set((state) => ({
      phonemes: state.phonemes.map((p) =>
        p.id === id
          ? {
              ...p,
              ...(accent === 'uk'
                ? { audioUK: objectUrl, fileNameUK: fileName }
                : { audioUS: objectUrl, fileNameUS: fileName }),
            }
          : p,
      ),
      selectedPhoneme:
        state.selectedPhoneme?.id === id
          ? {
              ...state.selectedPhoneme,
              ...(accent === 'uk'
                ? { audioUK: objectUrl, fileNameUK: fileName }
                : { audioUS: objectUrl, fileNameUS: fileName }),
            }
          : state.selectedPhoneme,
    }));
  },

  removeAudio: async (id, accent) => {
    const phoneme = get().phonemes.find((p) => p.id === id);
    if (accent === 'uk' && phoneme?.audioUK) {
      URL.revokeObjectURL(phoneme.audioUK);
    } else if (accent === 'us' && phoneme?.audioUS) {
      URL.revokeObjectURL(phoneme.audioUS);
    }
    await deleteAudio(id, accent);
    set((state) => ({
      phonemes: state.phonemes.map((p) =>
        p.id === id
          ? {
              ...p,
              ...(accent === 'uk'
                ? { audioUK: null, fileNameUK: null }
                : { audioUS: null, fileNameUS: null }),
            }
          : p,
      ),
      selectedPhoneme:
        state.selectedPhoneme?.id === id
          ? {
              ...state.selectedPhoneme,
              ...(accent === 'uk'
                ? { audioUK: null, fileNameUK: null }
                : { audioUS: null, fileNameUS: null }),
            }
          : state.selectedPhoneme,
    }));
  },

  loadSavedAudios: async () => {
    const savedAudios = await loadAllAudios();
    set((state) => ({
      phonemes: state.phonemes.map((p) => {
        const saved = savedAudios.get(p.id);
        if (saved) {
          return {
            ...p,
            audioUK: saved.uk || p.audioUK,
            audioUS: saved.us || p.audioUS,
            fileNameUK: saved.fileNameUK || p.fileNameUK,
            fileNameUS: saved.fileNameUS || p.fileNameUS,
          };
        }
        return p;
      }),
    }));
  },
}));
