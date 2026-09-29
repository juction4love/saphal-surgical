'use client';

import React from 'react';
import { Phone } from 'lucide-react';
import { WhatsAppIcon } from '@/components/Icons';
import { siteConfig, getGeneralWhatsAppUrl } from '@/config/site';
import { Locale, translations } from '@/lib/translations';

interface StickyContactBarProps {
  locale: Locale;
}

export const StickyContactBar: React.FC<StickyContactBarProps> = ({ locale }) => {
  const isNe = locale === 'ne';
  const t = translations[locale];
  const whatsAppUrl = getGeneralWhatsAppUrl(locale);

  return (
    <>
      {/* Mobile & Tablet Sticky Bottom Bar */}
      <div
        className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-m3-4 pb-safe transition-all"
        role="region"
        aria-label={isNe ? 'द्रुत सम्पर्क पट्टी' : 'Quick Contact Bar'}
      >
        <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center gap-2.5">
          {/* Direct Phone Call Button */}
          <a
            href={`tel:${siteConfig.phone.raw}`}
            className="flex-1 min-h-[48px] py-2.5 px-3 rounded-2xl bg-m3-navy hover:bg-m3-navy-container text-white font-heading font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-m3-1 active:scale-98 transition-all"
            aria-label={`Call Saphal Surgical House at ${siteConfig.phone.display}`}
          >
            <Phone className="w-4 h-4 text-teal-300 shrink-0" />
            <span className="truncate">{t.nav.callNow}</span>
          </a>

          {/* Direct WhatsApp Button */}
          {whatsAppUrl && (
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-h-[48px] py-2.5 px-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-m3-1 active:scale-98 transition-all"
              aria-label={isNe ? 'ह्वाट्सएप च्याट सुरु गर्नुहोस्' : 'Start WhatsApp Chat'}
            >
              <WhatsAppIcon className="w-4 h-4 shrink-0" />
              <span className="truncate">{isNe ? 'ह्वाट्सएप' : 'WhatsApp'}</span>
            </a>
          )}
        </div>
      </div>

      {/* Desktop Floating Action Button (FAB) */}
      {whatsAppUrl && (
        <aside
          className="hidden md:flex fixed bottom-6 right-6 z-30"
          aria-label={isNe ? 'ह्वाट्सएप द्रुत सम्पर्क' : 'WhatsApp Quick Contact'}
        >
          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[52px] inline-flex items-center gap-3 px-5 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-bold text-sm shadow-m3-3 hover:shadow-m3-4 hover:scale-105 active:scale-98 transition-all focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
          >
            <div className="w-6 h-6 flex items-center justify-center bg-white/20 rounded-full">
              <WhatsAppIcon className="w-4 h-4 text-white" />
            </div>
            <span>{isNe ? 'ह्वाट्सएपमा कुरा गर्नुहोस्' : 'Chat on WhatsApp'}</span>
          </a>
        </aside>
      )}
    </>
  );
};
