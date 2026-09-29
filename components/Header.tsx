'use client';

import React, { useState, useEffect } from 'react';
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

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: `/${locale}`, label: t.nav.home },
    { href: `/${locale}/about`, label: t.nav.about },
    { href: `/${locale}/products`, label: t.nav.products },
    { href: `/${locale}/articles`, label: t.nav.articles },
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
          <div className="flex items-center space-x-2 text-[11px] sm:text-xs min-w-0">
            <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0" />
            <span className="truncate text-teal-200">
              {siteConfig.address.fullAddress[locale]}
            </span>
          </div>
          <div className="flex items-center space-x-4 shrink-0">
            <a
              href={`tel:${siteConfig.phone.raw}`}
              className="hover:text-teal-300 transition-colors inline-flex items-center gap-1.5 font-bold text-white text-xs sm:text-sm py-1"
              aria-label={`Call ${siteConfig.phone.display}`}
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
            <Link
              href={`/${locale}`}
              className="flex items-center gap-3 group focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 rounded-xl py-1"
              aria-label="Saphal Surgical House Home"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-navy-900 to-teal-700 flex items-center justify-center text-white shadow-md shadow-teal-900/10 group-hover:scale-105 transition-transform shrink-0">
                <Cross className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
              </div>
              <div className="min-w-0">
                <span className="font-heading font-extrabold text-lg sm:text-2xl text-navy-900 tracking-tight block leading-none truncate">
                  {locale === 'ne' ? (
                    <>सफल <span className="text-teal-700">सर्जिकल हाउस</span></>
                  ) : (
                    <>SAPHAL <span className="text-teal-700">SURGICAL HOUSE</span></>
                  )}
                </span>
                <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider text-slate-500 uppercase mt-0.5 sm:mt-1 block truncate">
                  {t.siteTagline}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 text-sm font-semibold text-slate-600" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors py-2 px-1 focus-visible:ring-2 focus-visible:ring-teal-600 rounded ${
                    isActive(link.href)
                      ? 'text-teal-700 font-bold border-b-2 border-teal-600'
                      : 'hover:text-teal-700'
                  }`}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Header Right Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${siteConfig.phone.raw}`}
                className="min-h-[44px] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-navy-900 hover:bg-teal-800 rounded-xl shadow-sm hover:shadow transition-all inline-flex items-center gap-2"
                aria-label={`Call ${siteConfig.phone.display}`}
              >
                <Phone className="w-4 h-4 text-teal-300" />
                <span>{t.nav.callNow}</span>
              </a>
              <a
                href={siteConfig.coordinates.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] px-4 py-2.5 text-xs font-bold text-teal-800 bg-teal-50 hover:bg-teal-100 border border-teal-200 rounded-xl transition-colors inline-flex items-center gap-1.5"
                aria-label={t.nav.getDirections}
              >
                <MapPin className="w-4 h-4 text-teal-700" />
                <span>{t.nav.getDirections}</span>
              </a>
            </div>

            {/* Mobile Header Controls */}
            <div className="flex items-center gap-2 md:hidden">
              <LanguageSwitcher currentLocale={locale} />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-nav-menu"
                className="min-h-[44px] min-w-[44px] p-2.5 rounded-xl text-slate-700 hover:text-navy-900 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 flex items-center justify-center"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Drawer */}
          {mobileMenuOpen && (
            <div
              id="mobile-nav-menu"
              className="md:hidden py-4 border-t border-slate-100 flex flex-col space-y-2 pb-6 animate-in fade-in slide-in-from-top-2 duration-200"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`min-h-[44px] px-4 py-3 rounded-xl font-semibold text-base transition-colors flex items-center ${
                    isActive(link.href)
                      ? 'bg-teal-50 text-teal-800 font-bold'
                      : 'text-slate-800 hover:bg-slate-100'
                  }`}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 flex flex-col gap-2.5">
                <a
                  href={`tel:${siteConfig.phone.raw}`}
                  className="w-full min-h-[44px] text-center py-3 text-xs font-bold uppercase tracking-wider text-white bg-navy-900 hover:bg-teal-800 rounded-xl flex items-center justify-center gap-2 shadow-sm"
                >
                  <Phone className="w-4 h-4 text-teal-300" />
                  <span>{t.nav.callNow}: {siteConfig.phone.display}</span>
                </a>
                <a
                  href={siteConfig.coordinates.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full min-h-[44px] text-center py-3 text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 rounded-xl flex items-center justify-center gap-2"
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
