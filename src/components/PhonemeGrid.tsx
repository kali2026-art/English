import { useMemo } from 'react';
import type { PhonemeCategory } from '@/data/phonemes';
import { usePhonemeStore } from '@/store/usePhonemeStore';
import PhonemeCard from './PhonemeCard';

interface PhonemeGridProps {
  category: PhonemeCategory | 'all';
  searchQuery: string;
}

export default function PhonemeGrid({ category, searchQuery }: PhonemeGridProps) {
  const phonemes = usePhonemeStore((s) => s.phonemes);

  const filtered = useMemo(() => {
    let result = category === 'all' ? phonemes : phonemes.filter((p) => p.category === category);
    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      result = result.filter(
        (p) =>
          p.symbol.toLowerCase().includes(q) ||
          p.examples.some((ex) => ex.toLowerCase().includes(q)),
      );
    }
    return result;
  }, [phonemes, category, searchQuery]);

  if (filtered.length === 0) {
    return (
      <div className="text-center py-16">
        <span className="text-5xl">🔍</span>
        <p className="mt-4 text-gray-400 font-semibold text-lg">没有找到匹配的音标</p>
        <p className="text-gray-300 text-sm mt-1">试试其他关键词吧</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4">
      {filtered.map((phoneme, index) => (
        <PhonemeCard key={phoneme.id} phoneme={phoneme} index={index} />
      ))}
    </div>
  );
}
