'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Locale } from '@/lib/translations';

interface LanguageSwitcherProps {
  currentLocale: Locale;
  className?: string;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ currentLocale, className = '' }) => {
  const pathname = usePathname() || `/${currentLocale}`;

  // Calculate destination path by replacing the leading locale segment
  const getDestinationPath = (targetLocale: Locale) => {
    const segments = pathname.split('/').filter(Boolean);
    if (segments.length === 0) {
      return `/${targetLocale}`;
    }
    if (segments[0] === 'ne' || segments[0] === 'en') {
      segments[0] = targetLocale;
      return `/${segments.join('/')}`;
    }
    return `/${targetLocale}/${segments.join('/')}`;
  };

  return (
    <div
      className={`inline-flex items-center rounded-xl border border-slate-200 bg-white/95 p-1 text-xs sm:text-sm font-medium shadow-sm backdrop-blur ${className}`}
      role="navigation"
      aria-label="Language Selector / भाषा चयन"
    >
      <Link
        href={getDestinationPath('ne')}
        className={`min-h-[38px] sm:min-h-[36px] min-w-[54px] px-3 py-1.5 rounded-lg flex items-center justify-center transition-all ${
          currentLocale === 'ne'
            ? 'bg-navy-900 text-white font-bold shadow-xs'
            : 'text-slate-700 hover:text-navy-900 hover:bg-slate-100'
        }`}
        aria-current={currentLocale === 'ne' ? 'page' : undefined}
        aria-label="नेपाली भाषा छान्नुहोस्"
      >
        नेपाली
      </Link>
      <span className="text-slate-300 px-1 font-light" aria-hidden="true">|</span>
      <Link
        href={getDestinationPath('en')}
        className={`min-h-[38px] sm:min-h-[36px] min-w-[54px] px-3 py-1.5 rounded-lg flex items-center justify-center transition-all ${
          currentLocale === 'en'
            ? 'bg-navy-900 text-white font-bold shadow-xs'
            : 'text-slate-700 hover:text-navy-900 hover:bg-slate-100'
        }`}
        aria-current={currentLocale === 'en' ? 'page' : undefined}
        aria-label="Switch to English"
      >
        English
      </Link>
    </div>
  );
};
