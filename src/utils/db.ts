import { openDB, type IDBPDatabase } from 'idb';
import type { AccentType } from '@/data/phonemes';

const DB_NAME = 'phoneme_audio_db';
const DB_VERSION = 1;
const STORE_NAME = 'audio_files';

interface AudioRecord {
  id: string;
  phonemeId: string;
  accent: AccentType;
  blob: Blob;
  fileName: string;
  uploadedAt: number;
}

let dbPromise: Promise<IDBPDatabase> | null = null;

function getDB(): Promise<IDBPDatabase> {
  if (!dbPromise) {
    dbPromise = openDB(DB_NAME, DB_VERSION, {
      upgrade(db) {
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          db.createObjectStore(STORE_NAME, { keyPath: 'id' });
        }
      },
    });
  }
  return dbPromise;
}

export async function saveAudio(
  phonemeId: string,
  accent: AccentType,
  blob: Blob,
  fileName: string,
): Promise<void> {
  const db = await getDB();
  const record: AudioRecord = {
    id: `${phonemeId}_${accent}`,
    phonemeId,
    accent,
    blob,
    fileName,
    uploadedAt: Date.now(),
  };
  await db.put(STORE_NAME, record);
}

export async function getAudio(phonemeId: string, accent: AccentType): Promise<AudioRecord | undefined> {
  const db = await getDB();
  return db.get(STORE_NAME, `${phonemeId}_${accent}`);
}

export async function deleteAudio(phonemeId: string, accent: AccentType): Promise<void> {
  const db = await getDB();
  await db.delete(STORE_NAME, `${phonemeId}_${accent}`);
}

export async function loadAllAudios(): Promise<Map<string, { uk: string | null; us: string | null; fileNameUK: string | null; fileNameUS: string | null }>> {
  const db = await getDB();
  const all = await db.getAll(STORE_NAME);
  const result = new Map<string, { uk: string | null; us: string | null; fileNameUK: string | null; fileNameUS: string | null }>();
  for (const record of all) {
    const existing = result.get(record.phonemeId) || { uk: null, us: null, fileNameUK: null, fileNameUS: null };
    const objectUrl = URL.createObjectURL(record.blob);
    if (record.accent === 'uk') {
      existing.uk = objectUrl;
      existing.fileNameUK = record.fileName;
    } else {
      existing.us = objectUrl;
      existing.fileNameUS = record.fileName;
    }
    result.set(record.phonemeId, existing);
  }
  return result;
}
