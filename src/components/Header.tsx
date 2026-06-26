import { Volume2, BookOpen } from 'lucide-react';

export default function Header() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-b from-coral to-coral-dark py-8 md:py-12">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-white/10 animate-pulse-soft" />
        <div className="absolute top-4 right-12 w-16 h-16 rounded-full bg-white/8" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-2 left-1/4 w-12 h-12 rounded-full bg-white/6" style={{ animationDelay: '1s' }} />
        <div className="absolute -top-4 right-1/3 w-8 h-8 rounded-full bg-sun-accent/30" style={{ animationDelay: '0.7s' }} />
        <div className="absolute bottom-6 right-1/4 w-20 h-20 rounded-full bg-sky-accent/20" style={{ animationDelay: '1.2s' }} />
      </div>
      <div className="relative container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <BookOpen className="w-8 h-8 md:w-10 md:h-10 text-white" />
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            肖欣语专用音标小课堂
          </h1>
          <Volume2 className="w-8 h-8 md:w-10 md:h-10 text-sun-accent" />
        </div>
        <p className="text-white/80 text-sm md:text-lg font-semibold">
          基于剑桥词典国际音标体系 · 听说结合 · 快乐学习
        </p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-cream to-transparent" />
    </header>
  );
}
