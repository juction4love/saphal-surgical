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
    <div className={`inline-flex items-center rounded-lg border border-slate-200 bg-white p-1 text-xs font-medium shadow-sm ${className}`} role="navigation" aria-label="Language Switcher">
      <Link
        href={getDestinationPath('ne')}
        className={`px-2.5 py-1 rounded-md transition-colors ${
          currentLocale === 'ne'
            ? 'bg-navy-900 text-white font-semibold'
            : 'text-slate-600 hover:text-navy-900 hover:bg-slate-100'
        }`}
        aria-current={currentLocale === 'ne' ? 'page' : undefined}
      >
        नेपाली
      </Link>
      <span className="text-slate-300 px-0.5" aria-hidden="true">|</span>
      <Link
        href={getDestinationPath('en')}
        className={`px-2.5 py-1 rounded-md transition-colors ${
          currentLocale === 'en'
            ? 'bg-navy-900 text-white font-semibold'
            : 'text-slate-600 hover:text-navy-900 hover:bg-slate-100'
        }`}
        aria-current={currentLocale === 'en' ? 'page' : undefined}
      >
        English
      </Link>
    </div>
  );
};
