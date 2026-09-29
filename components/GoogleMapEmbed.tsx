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
    <div className={`bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col ${className}`}>
      <div className="p-4 sm:p-5 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
          <MapPin className="w-4 h-4 text-teal-600 shrink-0" />
          <span>{siteConfig.address.fullAddress[locale]}</span>
        </div>
        <a
          href={siteConfig.coordinates.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold transition-colors shadow-sm"
        >
          <Navigation className="w-3.5 h-3.5" />
          <span>{isNe ? 'गुगल म्याप्समा दिशा खोल्नुहोस्' : 'Open Directions in Google Maps'}</span>
        </a>
      </div>

      <div className="relative w-full h-80 sm:h-96 bg-slate-100">
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

      <div className="p-3 bg-white text-center text-[11px] text-slate-500 border-t border-slate-100">
        <span>
          {isNe
            ? `भौगोलिक निर्देशांक: ${siteConfig.coordinates.lat}, ${siteConfig.coordinates.lng} (कमल नगर मार्ग, नारायणगढ, चितवन)`
            : `Coordinates: ${siteConfig.coordinates.lat}, ${siteConfig.coordinates.lng} (Kamal Nagar Marg, Narayangarh, Chitwan)`}
        </span>
      </div>
    </div>
  );
};
