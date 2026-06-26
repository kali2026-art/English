import { useRef, useState, useCallback } from 'react';
import { Play, Pause } from 'lucide-react';
import clsx from 'clsx';

interface AudioPlayerProps {
  src: string | null;
  label: string;
  accentClass: string;
  icon: React.ReactNode;
}

export default function AudioPlayer({ src, label, accentClass, icon }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [error, setError] = useState(false);

  const handleToggle = useCallback(() => {
    if (!src) return;
    if (!audioRef.current) {
      const audio = new Audio(src);
      audioRef.current = audio;
      audio.onended = () => setPlaying(false);
      audio.onerror = () => { setError(true); setPlaying(false); };
      audio.play().then(() => setPlaying(true)).catch(() => setError(true));
    } else {
      if (playing) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setPlaying(false);
      } else {
        audioRef.current.play().then(() => setPlaying(true)).catch(() => setError(true));
      }
    }
  }, [src, playing]);

  if (error) {
    return null;
  }

  return (
    <button
      onClick={handleToggle}
      disabled={!src}
      className={clsx(
        'flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl font-semibold text-xs transition-all duration-200',
        accentClass,
        src ? 'cursor-pointer hover:scale-105 active:scale-95' : 'opacity-50 cursor-not-allowed',
      )}
      title={label}
    >
      {playing ? (
        <Pause className="w-3.5 h-3.5" />
      ) : (
        <Play className="w-3.5 h-3.5" />
      )}
      {icon}
    </button>
  );
}
