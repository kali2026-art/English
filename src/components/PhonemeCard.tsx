import type { PhonemeData } from '@/data/phonemes';
import { usePhonemeStore } from '@/store/usePhonemeStore';
import AudioPlayer from './AudioPlayer';
import AudioUploader from './AudioUploader';

interface PhonemeCardProps {
  phoneme: PhonemeData;
  index: number;
}

function MouthPlaceholder() {
  return (
    <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-coral/10 to-sky-accent/10 flex items-center justify-center mx-auto">
      <span className="text-2xl md:text-3xl opacity-30">👄</span>
    </div>
  );
}

export default function PhonemeCard({ phoneme, index }: PhonemeCardProps) {
  const selectPhoneme = usePhonemeStore((s) => s.selectPhoneme);

  const hasUK = !!phoneme.audioUK;
  const hasUS = !!phoneme.audioUS;

  return (
    <div
      onClick={() => selectPhoneme(phoneme.id)}
      className="group bg-white rounded-2xl p-4 md:p-5 cursor-pointer card-3d animate-float-up border border-transparent hover:border-coral/20"
      style={{ animationDelay: `${index * 40}ms` }}
    >
      <MouthPlaceholder />

      <div className="mt-3 text-center">
        <span className="ipa-symbol text-xl md:text-2xl font-bold text-gray-800">
          {phoneme.symbol}
        </span>
      </div>

      <div className="mt-2 flex justify-center gap-1 flex-wrap">
        {phoneme.examples.slice(0, 2).map((ex) => (
          <span
            key={ex}
            className="text-xs text-gray-400 bg-gray-50 px-2 py-0.5 rounded-lg font-medium"
          >
            {ex}
          </span>
        ))}
      </div>

      <div
        className="mt-3 flex justify-center gap-2"
        onClick={(e) => e.stopPropagation()}
      >
        {hasUK ? (
          <AudioPlayer
            src={phoneme.audioUK}
            label="英式发音"
            accentClass="bg-sky-accent/10 text-sky-accent"
            icon={<span className="text-xs font-bold">UK</span>}
          />
        ) : (
          <AudioUploader
            phonemeId={phoneme.id}
            accent="uk"
            fileName={phoneme.fileNameUK}
            accentClass="bg-sky-accent/10 text-sky-accent"
            label="英式发音"
            icon={<span className="text-xs font-bold">UK</span>}
          />
        )}
        {hasUS ? (
          <AudioPlayer
            src={phoneme.audioUS}
            label="美式发音"
            accentClass="bg-sun-accent/10 text-amber-600"
            icon={<span className="text-xs font-bold">US</span>}
          />
        ) : (
          <AudioUploader
            phonemeId={phoneme.id}
            accent="us"
            fileName={phoneme.fileNameUS}
            accentClass="bg-sun-accent/10 text-amber-600"
            label="美式发音"
            icon={<span className="text-xs font-bold">US</span>}
          />
        )}
      </div>

      <div className="mt-3 text-center">
        <span className="text-xs text-coral/40 font-semibold group-hover:text-coral/70 transition-colors">
          点击查看详情 →
        </span>
      </div>
    </div>
  );
}
