import { useEffect } from 'react';
import Header from '@/components/Header';
import CategoryTabs from '@/components/CategoryTabs';
import SearchBar from '@/components/SearchBar';
import PhonemeGrid from '@/components/PhonemeGrid';
import PhonemeDetail from '@/components/PhonemeDetail';
import { usePhonemeStore } from '@/store/usePhonemeStore';

export default function Home() {
  const activeCategory = usePhonemeStore((s) => s.activeCategory);
  const searchQuery = usePhonemeStore((s) => s.searchQuery);
  const loadSavedAudios = usePhonemeStore((s) => s.loadSavedAudios);

  useEffect(() => {
    loadSavedAudios();
  }, [loadSavedAudios]);

  return (
    <div className="min-h-screen bg-cream">
      <Header />

      <main className="container mx-auto px-4 pb-16">
        <div className="mt-6 md:mt-8 space-y-5 md:space-y-6">
          <CategoryTabs />
          <SearchBar />
          <PhonemeGrid category={activeCategory} searchQuery={searchQuery} />
        </div>
      </main>

      <footer className="text-center py-6 text-xs text-gray-300 font-semibold">
        音标小课堂 · 基于剑桥词典国际音标体系
      </footer>

      <PhonemeDetail />
    </div>
  );
}
