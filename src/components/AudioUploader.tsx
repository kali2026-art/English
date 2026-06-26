import { useRef } from 'react';
import { Upload, X } from 'lucide-react';
import clsx from 'clsx';
import type { AccentType } from '@/data/phonemes';
import { usePhonemeStore } from '@/store/usePhonemeStore';

interface AudioUploaderProps {
  phonemeId: string;
  accent: AccentType;
  fileName: string | null;
  accentClass: string;
  label: string;
  icon: React.ReactNode;
}

export default function AudioUploader({ phonemeId, accent, fileName, accentClass, label, icon }: AudioUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const updateAudio = usePhonemeStore((s) => s.updateAudio);
  const removeAudio = usePhonemeStore((s) => s.removeAudio);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    await updateAudio(phonemeId, accent, file, file.name);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="flex items-center gap-2">
      <input
        ref={fileInputRef}
        type="file"
        accept="audio/*"
        onChange={handleFileChange}
        className="hidden"
      />
      <button
        onClick={() => fileInputRef.current?.click()}
        className={clsx(
          'flex items-center gap-1 px-3 py-1.5 rounded-xl font-semibold text-xs transition-all duration-200 card-3d hover:scale-105 active:scale-95',
          accentClass,
        )}
        title={`上传${label}`}
      >
        <Upload className="w-3 h-3" />
        {icon}
        <span className="hidden sm:inline">
          {fileName ? '替换' : '上传'}
        </span>
      </button>
      {fileName && (
        <button
          onClick={() => removeAudio(phonemeId, accent)}
          className="p-1 rounded-lg text-gray-400 hover:text-red-400 hover:bg-red-50 transition-colors"
          title="删除音频"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      )}
      {fileName && (
        <span className="text-xs text-gray-400 truncate max-w-[80px] hidden sm:inline" title={fileName}>
          {fileName}
        </span>
      )}
    </div>
  );
}
