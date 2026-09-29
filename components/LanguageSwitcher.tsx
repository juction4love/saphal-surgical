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
      className={`inline-flex items-center rounded-xl border border-green-200 bg-white p-1 text-xs sm:text-sm font-medium shadow-xs ${className}`}
      role="navigation"
      aria-label="Language Selector / भाषा चयन"
    >
      <Link
        href={getDestinationPath('ne')}
        className={`min-h-[44px] min-w-[58px] px-3 py-1.5 rounded-lg flex items-center justify-center transition-colors ${
          currentLocale === 'ne'
            ? 'bg-[#15803D] text-white font-bold shadow-xs'
            : 'text-slate-700 hover:text-green-800 hover:bg-green-50'
        }`}
        aria-current={currentLocale === 'ne' ? 'page' : undefined}
        aria-label="नेपाली भाषा छान्नुहोस्"
      >
        नेपाली
      </Link>
      <span className="text-green-200 px-1 font-light" aria-hidden="true">|</span>
      <Link
        href={getDestinationPath('en')}
        className={`min-h-[44px] min-w-[58px] px-3 py-1.5 rounded-lg flex items-center justify-center transition-colors ${
          currentLocale === 'en'
            ? 'bg-[#15803D] text-white font-bold shadow-xs'
            : 'text-slate-700 hover:text-green-800 hover:bg-green-50'
        }`}
        aria-current={currentLocale === 'en' ? 'page' : undefined}
        aria-label="Switch to English"
      >
        English
      </Link>
    </div>
  );
};
