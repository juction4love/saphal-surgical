'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, MapPin, Menu, X, ShoppingBag } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { translations, Locale } from '@/lib/translations';
import { LanguageSwitcher } from './LanguageSwitcher';
import { BrandSymbol } from './BrandSymbol';
import { ORDER_UPDATED_EVENT, readOrder } from '@/lib/order';

interface HeaderProps {
  locale: Locale;
}

export const Header: React.FC<HeaderProps> = ({ locale }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [orderCount, setOrderCount] = useState(0);
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

  useEffect(() => {
    const updateCount = () => {
      setOrderCount(readOrder().reduce((total, line) => total + line.quantity, 0));
    };
    updateCount();
    window.addEventListener(ORDER_UPDATED_EVENT, updateCount);
    window.addEventListener('storage', updateCount);
    return () => {
      window.removeEventListener(ORDER_UPDATED_EVENT, updateCount);
      window.removeEventListener('storage', updateCount);
    };
  }, []);

  const orderLink = (
    <Link
      href={`/${locale}/order-slip`}
      className="relative min-h-[44px] min-w-[44px] inline-flex items-center justify-center rounded-xl border border-[#DCFCE7] bg-[#F0FDF4] text-[#15803D] hover:bg-[#DCFCE7] focus-visible:ring-2 focus-visible:ring-[#15803D]"
      aria-label={`${locale === 'ne' ? 'अर्डर सूची' : 'Order slip'} (${orderCount})`}
      title={locale === 'ne' ? 'अर्डर सूची' : 'Order slip'}
    >
      <ShoppingBag className="h-5 w-5" aria-hidden="true" />
      <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#15803D] px-1 text-[10px] font-bold text-white">
        {orderCount}
      </span>
    </Link>
  );

  const navLinks = [
    { href: `/${locale}`, label: t.nav.home },
    { href: `/${locale}/about`, label: t.nav.about },
    { href: `/${locale}/products`, label: t.nav.products },
    { href: `/${locale}/order-slip`, label: locale === 'ne' ? 'अर्डर सूची' : 'Order slip' },
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
      <div className="bg-[#F4FBF5] text-[#17251C] text-xs py-2 border-b border-[#E3EDE5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center space-x-2 text-[11px] sm:text-xs min-w-0">
            <MapPin className="w-3.5 h-3.5 text-[#15803D] shrink-0" />
            <span className="truncate text-slate-700 font-medium">
              {siteConfig.address.fullAddress[locale]}
            </span>
          </div>
          <div className="flex items-center space-x-4 shrink-0">
            <a
              href={`tel:${siteConfig.phone.raw}`}
              className="min-h-[44px] px-1 hover:text-[#166534] transition-colors inline-flex items-center gap-1.5 font-bold text-[#15803D] text-xs sm:text-sm"
              aria-label={`Call ${siteConfig.phone.display}`}
            >
              <Phone className="w-3.5 h-3.5 text-[#15803D]" />
              <span>{locale === 'ne' ? siteConfig.phone.displayNe : siteConfig.phone.display}</span>
            </a>
            <div className="hidden sm:block">
              <LanguageSwitcher currentLocale={locale} />
            </div>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-40 bg-white shadow-xs border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 gap-y-2 py-3 sm:py-3.5">
            {/* Brand Logo */}
            <Link
              href={`/${locale}`}
              className="col-span-2 sm:col-span-1 min-w-0 flex items-center gap-3 group focus-visible:ring-2 focus-visible:ring-[#15803D] focus-visible:ring-offset-2 rounded-xl py-1"
              aria-label={`${siteConfig.name[locale]} home`}
            >
              <BrandSymbol size={44} className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 transition-transform group-hover:scale-[1.03]" />
              <div className="min-w-0">
                <span lang={locale} className="font-heading font-extrabold text-[24px] sm:text-[26px] lg:text-[34px] text-[#15803D] tracking-tight block leading-[1.5]">
                  {locale === 'ne' ? 'सफल सर्जिकल हाउस' : 'Saphal Surgical House'}
                </span>
                <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider text-slate-500 uppercase mt-0.5 sm:mt-1 block truncate">
                  {t.siteTagline}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex col-span-2 row-start-2 items-center gap-8 text-sm font-semibold text-slate-700" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`min-h-[44px] inline-flex items-center transition-colors py-2 px-1 focus-visible:ring-2 focus-visible:ring-[#15803D] rounded ${
                    isActive(link.href)
                      ? 'text-[#15803D] font-bold border-b-2 border-[#15803D]'
                      : 'hover:text-[#15803D]'
                  }`}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Header Right Actions */}
            <div className="hidden lg:flex col-start-2 row-start-1 items-center gap-3 whitespace-nowrap">
              {orderLink}
              <a
                href={`tel:${siteConfig.phone.raw}`}
                className="min-h-[44px] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#15803D] hover:bg-[#166534] rounded-xl shadow-xs hover:shadow transition-all inline-flex items-center gap-2"
                aria-label={`Call ${siteConfig.phone.display}`}
              >
                <Phone className="w-4 h-4 text-white" />
                <span>{t.nav.callNow}</span>
              </a>
              <a
                href={siteConfig.coordinates.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] px-4 py-2.5 text-xs font-bold text-[#15803D] bg-[#F0FDF4] hover:bg-[#DCFCE7] border border-[#DCFCE7] rounded-xl transition-colors inline-flex items-center gap-1.5"
                aria-label={t.nav.getDirections}
              >
                <MapPin className="w-4 h-4 text-[#15803D]" />
                <span>{t.nav.getDirections}</span>
              </a>
            </div>

            {/* Mobile Header Controls */}
            <div className="col-span-2 sm:col-span-1 flex justify-end items-center gap-2 lg:hidden">
              <LanguageSwitcher currentLocale={locale} />
              {orderLink}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-nav-menu"
                className="min-h-[44px] min-w-[44px] p-2.5 rounded-xl text-slate-700 hover:text-[#15803D] hover:bg-green-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#15803D] flex items-center justify-center"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Drawer */}
          {mobileMenuOpen && (
            <nav
              id="mobile-nav-menu"
              className="lg:hidden py-4 border-t border-slate-100 flex flex-col space-y-2 pb-6 animate-in fade-in slide-in-from-top-2 duration-200"
              aria-label="Mobile Navigation"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`min-h-[44px] px-4 py-3 rounded-xl font-semibold text-base transition-colors flex items-center ${
                    isActive(link.href)
                      ? 'bg-[#F0FDF4] text-[#15803D] font-bold border-l-4 border-[#15803D]'
                      : 'text-slate-800 hover:bg-slate-50'
                  }`}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 flex flex-col gap-2.5">
                <a
                  href={`tel:${siteConfig.phone.raw}`}
                  className="w-full min-h-[44px] text-center py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#15803D] hover:bg-[#166534] rounded-xl flex items-center justify-center gap-2 shadow-xs"
                >
                  <Phone className="w-4 h-4 text-white" />
                  <span>{t.nav.callNow}: {locale === 'ne' ? siteConfig.phone.displayNe : siteConfig.phone.display}</span>
                </a>
                <a
                  href={siteConfig.coordinates.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full min-h-[44px] text-center py-3 text-xs font-bold text-[#15803D] bg-[#F0FDF4] border border-[#DCFCE7] rounded-xl flex items-center justify-center gap-2"
                >
                  <MapPin className="w-4 h-4 text-[#15803D]" />
                  <span>{t.nav.getDirections}</span>
                </a>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};
