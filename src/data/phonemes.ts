export type AccentType = 'uk' | 'us';
export type PhonemeCategory = 'vowel' | 'diphthong' | 'consonant';

export interface PhonemeData {
  id: string;
  symbol: string;
  category: PhonemeCategory;
  examples: string[];
  mouthImage: string | null;
  audioUK: string | null;
  audioUS: string | null;
  fileNameUK: string | null;
  fileNameUS: string | null;
}

export const phonemeCategories: { key: PhonemeCategory; label: string; icon: string }[] = [
  { key: 'vowel', label: '单元音', icon: '🔤' },
  { key: 'diphthong', label: '双元音', icon: '🔡' },
  { key: 'consonant', label: '辅音', icon: '🔠' },
];

export const phonemes: PhonemeData[] = [
  { id: 'vowel-iː', symbol: '/iː/', category: 'vowel', examples: ['sheep', 'sleep', 'green'], mouthImage: null, audioUK: null, audioUS: null, fileNameUK: null, fileNameUS: null },
  { id: 'vowel-ɪ', symbol: '/ɪ/', category: 'vowel', examples: ['ship', 'big', 'sit'], mouthImage: null, audioUK: null, audioUS: null, fileNameUK: null, fileNameUS: null },
  { id: 'vowel-e', symbol: '/e/', category: 'vowel', examples: ['bed', 'head', 'red'], mouthImage: null, audioUK: null, audioUS: null, fileNameUK: null, fileNameUS: null },
  { id: 'vowel-æ', symbol: '/æ/', category: 'vowel', examples: ['cat', 'apple', 'hat'], mouthImage: null, audioUK: null, audioUS: null, fileNameUK: null, fileNameUS: null },
  { id: 'vowel-ɑː', symbol: '/ɑː/', category: 'vowel', examples: ['father', 'car', 'start'], mouthImage: null, audioUK: null, audioUS: null, fileNameUK: null, fileNameUS: null },
  { id: 'vowel-ɒ', symbol: '/ɒ/', category: 'vowel', examples: ['hot', 'dog', 'shop'], mouthImage: null, audioUK: null, audioUS: null, fileNameUK: null, fileNameUS: null },
  { id: 'vowel-ɔː', symbol: '/ɔː/', category: 'vowel', examples: ['door', 'four', 'horse'], mouthImage: null, audioUK: null, audioUS: null, fileNameUK: null, fileNameUS: null },
  { id: 'vowel-ʊ', symbol: '/ʊ/', category: 'vowel', examples: ['put', 'book', 'foot'], mouthImage: null, audioUK: null, audioUS: null, fileNameUK: null, fileNameUS: null },
  { id: 'vowel-uː', symbol: '/uː/', category: 'vowel', examples: ['boot', 'blue', 'food'], mouthImage: null, audioUK: null, audioUS: null, fileNameUK: null, fileNameUS: null },
  { id: 'vowel-ʌ', symbol: '/ʌ/', category: 'vowel', examples: ['cup', 'sun', 'bus'], mouthImage: null, audioUK: null, audioUS: null, fileNameUK: null, fileNameUS: null },
  { id: 'vowel-ɜː', symbol: '/ɜː/', category: 'vowel', examples: ['bird', 'word', 'girl'], mouthImage: null, audioUK: null, audioUS: null, fileNameUK: null, fileNameUS: null },
  { id: 'vowel-ə', symbol: '/ə/', category: 'vowel', examples: ['about', 'banana', 'teacher'], mouthImage: null, audioUK: null, audioUS: null, fileNameUK: null, fileNameUS: null },

  { id: 'diph-eɪ', symbol: '/eɪ/', category: 'diphthong', examples: ['day', 'cake', 'rain'], mouthImage: null, audioUK: null, audioUS: null, fileNameUK: null, fileNameUS: null },
  { id: 'diph-aɪ', symbol: '/aɪ/', category: 'diphthong', examples: ['eye', 'bike', 'fly'], mouthImage: null, audioUK: null, audioUS: null, fileNameUK: null, fileNameUS: null },
  { id: 'diph-ɔɪ', symbol: '/ɔɪ/', category: 'diphthong', examples: ['boy', 'toy', 'coin'], mouthImage: null, audioUK: null, audioUS: null, fileNameUK: null, fileNameUS: null },
  { id: 'diph-əʊ', symbol: '/əʊ/', category: 'diphthong', examples: ['go', 'home', 'boat'], mouthImage: null, audioUK: null, audioUS: null, fileNameUK: null, fileNameUS: null },
  { id: 'diph-aʊ', symbol: '/aʊ/', category: 'diphthong', examples: ['now', 'house', 'cow'], mouthImage: null, audioUK: null, audioUS: null, fileNameUK: null, fileNameUS: null },
  { id: 'diph-ɪə', symbol: '/ɪə/', category: 'diphthong', examples: ['ear', 'near', 'here'], mouthImage: null, audioUK: null, audioUS: null, fileNameUK: null, fileNameUS: null },
  { id: 'diph-eə', symbol: '/eə/', category: 'diphthong', examples: ['hair', 'chair', 'bear'], mouthImage: null, audioUK: null, audioUS: null, fileNameUK: null, fileNameUS: null },
  { id: 'diph-ʊə', symbol: '/ʊə/', category: 'diphthong', examples: ['tour', 'poor', 'sure'], mouthImage: null, audioUK: null, audioUS: null, fileNameUK: null, fileNameUS: null },

  { id: 'cons-p', symbol: '/p/', category: 'consonant', examples: ['pen', 'apple', 'cup'], mouthImage: null, audioUK: null, audioUS: null, fileNameUK: null, fileNameUS: null },
  { id: 'cons-b', symbol: '/b/', category: 'consonant', examples: ['book', 'baby', 'crab'], mouthImage: null, audioUK: null, audioUS: null, fileNameUK: null, fileNameUS: null },
  { id: 'cons-t', symbol: '/t/', category: 'consonant', examples: ['town', 'water', 'cat'], mouthImage: null, audioUK: null, audioUS: null, fileNameUK: null, fileNameUS: null },
  { id: 'cons-d', symbol: '/d/', category: 'consonant', examples: ['day', 'ladder', 'bed'], mouthImage: null, audioUK: null, audioUS: null, fileNameUK: null, fileNameUS: null },
  { id: 'cons-k', symbol: '/k/', category: 'consonant', examples: ['cat', 'school', 'back'], mouthImage: null, audioUK: null, audioUS: null, fileNameUK: null, fileNameUS: null },
  { id: 'cons-ɡ', symbol: '/ɡ/', category: 'consonant', examples: ['go', 'bigger', 'dog'], mouthImage: null, audioUK: null, audioUS: null, fileNameUK: null, fileNameUS: null },
  { id: 'cons-f', symbol: '/f/', category: 'consonant', examples: ['fish', 'coffee', 'leaf'], mouthImage: null, audioUK: null, audioUS: null, fileNameUK: null, fileNameUS: null },
  { id: 'cons-v', symbol: '/v/', category: 'consonant', examples: ['very', 'river', 'five'], mouthImage: null, audioUK: null, audioUS: null, fileNameUK: null, fileNameUS: null },
  { id: 'cons-θ', symbol: '/θ/', category: 'consonant', examples: ['think', 'three', 'bath'], mouthImage: null, audioUK: null, audioUS: null, fileNameUK: null, fileNameUS: null },
  { id: 'cons-ð', symbol: '/ð/', category: 'consonant', examples: ['this', 'mother', 'breathe'], mouthImage: null, audioUK: null, audioUS: null, fileNameUK: null, fileNameUS: null },
  { id: 'cons-s', symbol: '/s/', category: 'consonant', examples: ['say', 'dress', 'bus'], mouthImage: null, audioUK: null, audioUS: null, fileNameUK: null, fileNameUS: null },
  { id: 'cons-z', symbol: '/z/', category: 'consonant', examples: ['zoo', 'lazy', 'nose'], mouthImage: null, audioUK: null, audioUS: null, fileNameUK: null, fileNameUS: null },
  { id: 'cons-ʃ', symbol: '/ʃ/', category: 'consonant', examples: ['she', 'fish', 'shop'], mouthImage: null, audioUK: null, audioUS: null, fileNameUK: null, fileNameUS: null },
  { id: 'cons-ʒ', symbol: '/ʒ/', category: 'consonant', examples: ['vision', 'measure', 'garage'], mouthImage: null, audioUK: null, audioUS: null, fileNameUK: null, fileNameUS: null },
  { id: 'cons-tʃ', symbol: '/tʃ/', category: 'consonant', examples: ['cheese', 'church', 'watch'], mouthImage: null, audioUK: null, audioUS: null, fileNameUK: null, fileNameUS: null },
  { id: 'cons-dʒ', symbol: '/dʒ/', category: 'consonant', examples: ['jump', 'orange', 'bridge'], mouthImage: null, audioUK: null, audioUS: null, fileNameUK: null, fileNameUS: null },
  { id: 'cons-m', symbol: '/m/', category: 'consonant', examples: ['moon', 'summer', 'home'], mouthImage: null, audioUK: null, audioUS: null, fileNameUK: null, fileNameUS: null },
  { id: 'cons-n', symbol: '/n/', category: 'consonant', examples: ['name', 'dinner', 'sun'], mouthImage: null, audioUK: null, audioUS: null, fileNameUK: null, fileNameUS: null },
  { id: 'cons-ŋ', symbol: '/ŋ/', category: 'consonant', examples: ['sing', 'long', 'ring'], mouthImage: null, audioUK: null, audioUS: null, fileNameUK: null, fileNameUS: null },
  { id: 'cons-h', symbol: '/h/', category: 'consonant', examples: ['hat', 'hello', 'horse'], mouthImage: null, audioUK: null, audioUS: null, fileNameUK: null, fileNameUS: null },
  { id: 'cons-l', symbol: '/l/', category: 'consonant', examples: ['look', 'hello', 'ball'], mouthImage: null, audioUK: null, audioUS: null, fileNameUK: null, fileNameUS: null },
  { id: 'cons-r', symbol: '/r/', category: 'consonant', examples: ['run', 'rabbit', 'red'], mouthImage: null, audioUK: null, audioUS: null, fileNameUK: null, fileNameUS: null },
  { id: 'cons-j', symbol: '/j/', category: 'consonant', examples: ['yes', 'yellow', 'you'], mouthImage: null, audioUK: null, audioUS: null, fileNameUK: null, fileNameUS: null },
  { id: 'cons-w', symbol: '/w/', category: 'consonant', examples: ['we', 'water', 'window'], mouthImage: null, audioUK: null, audioUS: null, fileNameUK: null, fileNameUS: null },
];
