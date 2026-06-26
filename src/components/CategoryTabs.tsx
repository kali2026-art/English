import { phonemeCategories } from '@/data/phonemes';
import type { PhonemeCategory } from '@/data/phonemes';
import { usePhonemeStore } from '@/store/usePhonemeStore';
import clsx from 'clsx';

export default function CategoryTabs() {
  const activeCategory = usePhonemeStore((s) => s.activeCategory);
  const setCategory = usePhonemeStore((s) => s.setCategory);

  const tabs: { key: PhonemeCategory | 'all'; label: string; icon: string }[] = [
    { key: 'all', label: '全部', icon: '🌟' },
    ...phonemeCategories,
  ];

  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-3 px-2">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => setCategory(tab.key)}
          className={clsx(
            'px-4 py-2 md:px-6 md:py-3 rounded-2xl font-bold text-sm md:text-base transition-all duration-200 btn-ripple card-3d',
            activeCategory === tab.key
              ? 'bg-coral text-white scale-105'
              : 'bg-white text-gray-600 hover:text-coral hover:bg-coral/5',
          )}
        >
          <span className="mr-1.5">{tab.icon}</span>
          {tab.label}
        </button>
      ))}
    </div>
  );
}
