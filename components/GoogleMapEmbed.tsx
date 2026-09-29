import React from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Locale } from '@/lib/translations';

interface GoogleMapEmbedProps {
  locale: Locale;
  className?: string;
}

export const GoogleMapEmbed: React.FC<GoogleMapEmbedProps> = ({ locale, className = '' }) => {
  const isNe = locale === 'ne';

  return (
    <div className={`bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs flex flex-col ${className}`}>
      <div className="p-4 sm:p-5 bg-slate-50/90 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-start sm:items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 min-w-0">
          <MapPin className="w-4 h-4 text-teal-600 shrink-0 mt-0.5 sm:mt-0" />
          <span className="leading-snug">{siteConfig.address.fullAddress[locale]}</span>
        </div>
        <a
          href={siteConfig.coordinates.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="min-h-[44px] px-4 py-2.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-xs sm:text-sm font-bold transition-colors shadow-xs flex items-center justify-center gap-2 shrink-0 self-stretch sm:self-auto"
        >
          <Navigation className="w-4 h-4" />
          <span>{isNe ? 'गुगल म्याप्समा दिशा खोल्नुहोस्' : 'Get Google Maps Directions'}</span>
        </a>
      </div>

      <div className="relative w-full h-72 sm:h-96 md:h-[420px] bg-slate-100">
        <iframe
          title="Saphal Surgical House Location Map"
          src={siteConfig.coordinates.mapEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        />
      </div>

      <div className="p-3 bg-white text-center text-xs text-slate-500 border-t border-slate-100">
        <span>
          {isNe
            ? `भौगोलिक निर्देशांक: ${siteConfig.coordinates.lat}, ${siteConfig.coordinates.lng} (कमल नगर मार्ग, नारायणगढ, चितवन)`
            : `Coordinates: ${siteConfig.coordinates.lat}, ${siteConfig.coordinates.lng} (Kamal Nagar Marg, Narayangarh, Chitwan)`}
        </span>
      </div>
    </div>
  );
};
