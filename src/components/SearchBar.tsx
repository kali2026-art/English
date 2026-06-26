import { Search } from 'lucide-react';
import { usePhonemeStore } from '@/store/usePhonemeStore';

export default function SearchBar() {
  const searchQuery = usePhonemeStore((s) => s.searchQuery);
  const setSearchQuery = usePhonemeStore((s) => s.setSearchQuery);

  return (
    <div className="relative max-w-md mx-auto w-full">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-coral/50" />
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="搜索音标或例词..."
        className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white border-2 border-transparent focus:border-coral/30 focus:outline-none text-gray-700 placeholder-gray-400 font-semibold text-sm md:text-base card-3d transition-all duration-200"
      />
    </div>
  );
}
