import { X, Volume2 } from 'lucide-react';
import { usePhonemeStore } from '@/store/usePhonemeStore';
import AudioPlayer from './AudioPlayer';
import AudioUploader from './AudioUploader';

function MouthPlaceholderLarge() {
  return (
    <div className="w-28 h-28 md:w-36 md:h-36 rounded-3xl bg-gradient-to-br from-coral/10 to-sky-accent/10 flex items-center justify-center mx-auto border-2 border-dashed border-coral/15">
      <span className="text-4xl md:text-5xl opacity-30">👄</span>
    </div>
  );
}

export default function PhonemeDetail() {
  const selectedPhoneme = usePhonemeStore((s) => s.selectedPhoneme);
  const closeDetail = usePhonemeStore((s) => s.closeDetail);

  if (!selectedPhoneme) return null;

  const p = selectedPhoneme;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm animate-fade-in"
      onClick={closeDetail}
    >
      <div
        className="relative bg-white rounded-3xl w-full max-w-lg max-h-[90vh] overflow-y-auto animate-scale-in shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeDetail}
          className="absolute top-4 right-4 p-2 rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="bg-gradient-to-b from-coral/5 to-transparent pt-10 pb-6 px-6 text-center">
          <h2 className="ipa-symbol text-5xl md:text-6xl font-bold text-gray-800 mb-2">
            {p.symbol}
          </h2>
          <p className="text-sm text-gray-400 font-semibold">
            {p.category === 'vowel' ? '单元音' : p.category === 'diphthong' ? '双元音' : '辅音'}
          </p>
        </div>

        <div className="px-6 pb-6">
          <div className="mb-5">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 text-center">
              口型示意图
            </h3>
            <MouthPlaceholderLarge />
            <p className="text-xs text-gray-300 text-center mt-2">
              请替换为实际口型图片
            </p>
          </div>

          <div className="mb-5">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
              例词
            </h3>
            <div className="flex flex-wrap gap-2">
              {p.examples.map((ex) => (
                <span
                  key={ex}
                  className="px-3 py-1.5 bg-coral/5 text-coral font-semibold text-sm rounded-xl"
                >
                  {ex}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
              发音
            </h3>

            <div className="flex items-center justify-between bg-sky-accent/5 rounded-2xl px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm text-sky-accent">英式发音</span>
                {p.fileNameUK && (
                  <span className="text-xs text-gray-300 truncate max-w-[120px]" title={p.fileNameUK}>
                    {p.fileNameUK}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2">
                {p.audioUK ? (
                  <AudioPlayer
                    src={p.audioUK}
                    label="播放英式发音"
                    accentClass="bg-sky-accent text-white"
                    icon={<Volume2 className="w-3.5 h-3.5" />}
                  />
                ) : (
                  <AudioUploader
                    phonemeId={p.id}
                    accent="uk"
                    fileName={p.fileNameUK}
                    accentClass="bg-sky-accent/10 text-sky-accent hover:bg-sky-accent/20"
                    label="英式发音"
                    icon={<span className="text-xs font-bold">UK</span>}
                  />
                )}
              </div>
            </div>

            <div className="flex items-center justify-between bg-sun-accent/5 rounded-2xl px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm text-amber-600">美式发音</span>
                {p.fileNameUS && (
                  <span className="text-xs text-gray-300 truncate max-w-[120px]" title={p.fileNameUS}>
                    {p.fileNameUS}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2">
                {p.audioUS ? (
                  <AudioPlayer
                    src={p.audioUS}
                    label="播放美式发音"
                    accentClass="bg-sun-accent text-amber-700"
                    icon={<Volume2 className="w-3.5 h-3.5" />}
                  />
                ) : (
                  <AudioUploader
                    phonemeId={p.id}
                    accent="us"
                    fileName={p.fileNameUS}
                    accentClass="bg-sun-accent/10 text-amber-600 hover:bg-sun-accent/20"
                    label="美式发音"
                    icon={<span className="text-xs font-bold">US</span>}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
