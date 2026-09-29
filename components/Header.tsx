'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, MapPin, Menu, X, Cross } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { translations, Locale } from '@/lib/translations';
import { LanguageSwitcher } from './LanguageSwitcher';

interface HeaderProps {
  locale: Locale;
}

export const Header: React.FC<HeaderProps> = ({ locale }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname() || `/${locale}`;
  const t = translations[locale];

  const navLinks = [
    { href: `/${locale}`, label: t.nav.home },
    { href: `/${locale}/about`, label: t.nav.about },
    { href: `/${locale}/products`, label: t.nav.products },
    { href: `/${locale}/contact`, label: t.nav.contact },
  ];

  const isActive = (href: string) => {
    if (href === `/${locale}`) {
      return pathname === `/${locale}` || pathname === `/${locale}/`;
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Top Utility Bar */}
      <div className="bg-navy-900 text-slate-300 text-xs py-2 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center space-x-3 text-[11px] sm:text-xs">
            <span className="inline-flex items-center gap-1.5 text-teal-300">
              <MapPin className="w-3.5 h-3.5 text-teal-400" />
              {siteConfig.address.fullAddress[locale]}
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href={`tel:${siteConfig.phone.raw}`}
              className="hover:text-teal-300 transition-colors inline-flex items-center gap-1.5 font-medium text-white"
            >
              <Phone className="w-3.5 h-3.5 text-teal-400" />
              <span>{siteConfig.phone.display}</span>
            </a>
            <div className="hidden sm:block">
              <LanguageSwitcher currentLocale={locale} />
            </div>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo */}
            <Link href={`/${locale}`} className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-navy-900 to-teal-700 flex items-center justify-center text-white shadow-md shadow-teal-900/10 group-hover:scale-105 transition-transform">
                <Cross className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div>
                <span className="font-heading font-extrabold text-xl sm:text-2xl text-navy-900 tracking-tight block leading-none">
                  {locale === 'ne' ? (
                    <>सफल <span className="text-teal-700">सर्जिकल हाउस</span></>
                  ) : (
                    <>SAPHAL <span className="text-teal-700">SURGICAL HOUSE</span></>
                  )}
                </span>
                <span className="text-[11px] font-medium tracking-wider text-slate-500 uppercase mt-1 block">
                  {t.siteTagline}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 text-sm font-semibold text-slate-600">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors py-1 ${
                    isActive(link.href)
                      ? 'text-teal-700 font-bold border-b-2 border-teal-600'
                      : 'hover:text-teal-700'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Header Right Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${siteConfig.phone.raw}`}
                className="px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-navy-900 hover:bg-teal-800 rounded-lg shadow-sm hover:shadow transition-all inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-teal-300" />
                <span>{t.nav.callNow}</span>
              </a>
              <a
                href={siteConfig.coordinates.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 text-xs font-semibold text-teal-800 bg-teal-50 hover:bg-teal-100 border border-teal-200 rounded-lg transition-colors inline-flex items-center gap-1.5"
              >
                <MapPin className="w-4 h-4 text-teal-700" />
                <span>{t.nav.getDirections}</span>
              </a>
            </div>

            {/* Mobile Header Controls */}
            <div className="flex items-center gap-2 sm:gap-3 md:hidden">
              <LanguageSwitcher currentLocale={locale} />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Menu"
                aria-expanded={mobileMenuOpen}
                className="p-2 rounded-lg text-slate-700 hover:text-navy-900 hover:bg-slate-100 focus:outline-none"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Drawer */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-100 flex flex-col space-y-3 pb-6 animate-in fade-in slide-in-from-top-2 duration-200">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-md font-medium text-sm transition-colors ${
                    isActive(link.href)
                      ? 'bg-teal-50 text-teal-800 font-bold'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={`tel:${siteConfig.phone.raw}`}
                  className="w-full text-center py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-navy-900 hover:bg-teal-800 rounded-lg flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-teal-300" />
                  <span>{t.nav.callNow}: {siteConfig.phone.display}</span>
                </a>
                <a
                  href={siteConfig.coordinates.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-2.5 text-xs font-semibold text-teal-800 bg-teal-50 border border-teal-200 rounded-lg flex items-center justify-center gap-2"
                >
                  <MapPin className="w-4 h-4 text-teal-700" />
                  <span>{t.nav.getDirections}</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};
