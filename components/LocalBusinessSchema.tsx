import React from 'react';
import { siteConfig } from '@/config/site';

interface LocalBusinessSchemaProps {
  lang?: 'ne' | 'en';
}

export const LocalBusinessSchema: React.FC<LocalBusinessSchemaProps> = ({ lang = 'ne' }) => {
  const isNe = lang === 'ne';

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalSupplyStore",
    "name": isNe ? siteConfig.name.ne : siteConfig.name.en,
    "legalName": siteConfig.legalName,
    "url": siteConfig.baseUrl,
    "telephone": [siteConfig.phone.primary.raw, siteConfig.phone.secondary.raw],
    "description": isNe
      ? "कमल नगर मार्ग, नारायणगढ, चितवनमा अवस्थित शल्यक्रिया तथा चिकित्सीय सामग्री आपूर्तिकर्ता।"
      : "Supplier of surgical instruments, medical consumables, diagnostic tools, and home-care equipment in Narayangarh, Chitwan.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": isNe ? siteConfig.address.street.ne : siteConfig.address.street.en,
      "addressLocality": isNe ? siteConfig.address.city.ne : siteConfig.address.city.en,
      "addressRegion": isNe ? siteConfig.address.province.ne : siteConfig.address.province.en,
      "addressCountry": "NP"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": siteConfig.coordinates.lat,
      "longitude": siteConfig.coordinates.lng
    },
    "hasMap": siteConfig.coordinates.directionsUrl,
    "sameAs": [
      siteConfig.social.facebook
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};
