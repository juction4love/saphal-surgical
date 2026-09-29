import React from 'react';
import { siteConfig } from '@/config/site';

interface LocalBusinessSchemaProps {
  lang?: 'ne' | 'en';
}

export const LocalBusinessSchema: React.FC<LocalBusinessSchemaProps> = ({ lang = 'ne' }) => {
  const isNe = lang === 'ne';

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalSupplyStore",
        "@id": `${siteConfig.baseUrl}/#business`,
        "name": isNe ? siteConfig.name.ne : siteConfig.name.en,
        "legalName": siteConfig.legalName,
        "url": siteConfig.baseUrl,
        "logo": `${siteConfig.baseUrl}/logo.svg`,
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
        "sameAs": [siteConfig.social.facebook]
      },
      {
        "@type": "Person",
        "@id": `${siteConfig.baseUrl}/#chairman`,
        "name": isNe ? "अर्जुन रणाभाट" : "Arjun Ranabhat",
        "alternateName": isNe ? "Arjun Ranabhat" : "अर्जुन रणाभाट",
        "jobTitle": isNe ? "अध्यक्ष" : "Chairman",
        "url": `${siteConfig.baseUrl}/${lang}/about#chairman-profile-heading`,
        "worksFor": { "@id": `${siteConfig.baseUrl}/#business` }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};
