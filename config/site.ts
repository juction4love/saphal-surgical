export interface SiteConfig {
  name: {
    en: string;
    ne: string;
  };
  legalName: string;
  domain: string;
  baseUrl: string;
  phone: {
    raw: string; // E.164 format for tel: link
    display: string;
  };
  address: {
    street: {
      en: string;
      ne: string;
    };
    city: {
      en: string;
      ne: string;
    };
    district: {
      en: string;
      ne: string;
    };
    province: {
      en: string;
      ne: string;
    };
    country: {
      en: string;
      ne: string;
    };
    fullAddress: {
      en: string;
      ne: string;
    };
  };
  coordinates: {
    lat: number;
    lng: number;
    directionsUrl: string;
    mapEmbedUrl: string;
  };
  social: {
    facebook: string;
  };
  whatsapp: {
    enabled: boolean;
    rawSuppliedNumber: string;
    confirmedInternationalDigits: string;
    display: string;
  };
}

export const siteConfig: SiteConfig = {
  name: {
    en: "Saphal Surgical House",
    ne: "सफल सर्जिकल हाउस",
  },
  legalName: "Saphal Surgical House",
  domain: "saphal-surgical.vercel.app",
  baseUrl: "https://saphal-surgical.vercel.app",
  phone: {
    raw: "+97756572060",
    display: "+977 56-572060",
  },
  address: {
    street: {
      en: "Kamal Nagar Marg",
      ne: "कमल नगर मार्ग",
    },
    city: {
      en: "Narayangarh",
      ne: "नारायणगढ",
    },
    district: {
      en: "Chitwan",
      ne: "चितवन",
    },
    province: {
      en: "Bagmati Province",
      ne: "बागमती प्रदेश",
    },
    country: {
      en: "Nepal",
      ne: "नेपाल",
    },
    fullAddress: {
      en: "Kamal Nagar Marg, Narayangarh, Chitwan, Bagmati Province, Nepal",
      ne: "कमल नगर मार्ग, नारायणगढ, चितवन, बागमती प्रदेश, नेपाल",
    },
  },
  coordinates: {
    lat: 27.69473,
    lng: 84.42161,
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=27.69473,84.42161",
    mapEmbedUrl: "https://maps.google.com/maps?q=27.69473,84.42161&hl=en&z=16&output=embed",
  },
  social: {
    facebook: "https://www.facebook.com/1032544950288241",
  },
  whatsapp: {
    enabled: true,
    rawSuppliedNumber: "9855055060",
    confirmedInternationalDigits: "9779855055060",
    display: "+977 9855055060",
  },
};

/**
 * Helper to generate direct WhatsApp URL with prefilled message if enabled
 */
export function getWhatsAppUrl(message: string): string | null {
  if (!siteConfig.whatsapp.enabled || !siteConfig.whatsapp.confirmedInternationalDigits) {
    return null;
  }
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsapp.confirmedInternationalDigits}?text=${encoded}`;
}

/**
 * Helper to generate product-specific WhatsApp inquiry URL including name, brand, absolute product link, and size/quantity confirmation
 */
export function getProductWhatsAppUrl(
  productName: string,
  productSlug: string,
  locale: 'ne' | 'en',
  brand?: string
): string | null {
  const absoluteUrl = `${siteConfig.baseUrl}/${locale}/products/${productSlug}`;
  const brandSuffix = brand ? (locale === 'ne' ? ` (ब्रान्ड: ${brand})` : ` (Brand: ${brand})`) : '';
  const message = locale === 'ne'
    ? `नमस्ते सफल सर्जिकल हाउस, म "${productName}"${brandSuffix} बारे सोधपुछ गर्न चाहन्छु।\nसामग्री लिङ्क: ${absoluteUrl}\nकृपया मलाई आवश्यक साइज/प्रकार, प्याकिङ, परिमाण (Quantity) र मूल्य उपलब्धताबारे जानकारी गराइदिनुहोला।`
    : `Hello Saphal Surgical House, I would like to inquire about "${productName}"${brandSuffix}.\nProduct Link: ${absoluteUrl}\nPlease let me know the availability, required size/type options, packaging, quantity, and pricing.`;

  return getWhatsAppUrl(message);
}

/**
 * Helper to generate general WhatsApp inquiry URL
 */
export function getGeneralWhatsAppUrl(locale: 'ne' | 'en'): string | null {
  const message = locale === 'ne'
    ? `नमस्ते सफल सर्जिकल हाउस, म शल्यक्रिया तथा चिकित्सीय सामग्रीहरू बारे जानकारी लिन चाहन्छु।`
    : `Hello Saphal Surgical House, I would like to inquire about medical and surgical supplies.`;

  return getWhatsAppUrl(message);
}

/**
 * Helper to generate article-specific WhatsApp requirement list inquiry URL
 */
export function getArticleWhatsAppUrl(articleTitle: string, articleSlug: string, locale: 'ne' | 'en'): string | null {
  const absoluteUrl = `${siteConfig.baseUrl}/${locale}/articles/${articleSlug}`;
  const message = locale === 'ne'
    ? `नमस्ते सफल सर्जिकल हाउस, मैले "${articleTitle}" लेख पढेको छु र हाम्रो संस्थाका लागि आवश्यक सामग्रीहरूको सूची पठाउन चाहन्छु। लिङ्क: ${absoluteUrl}`
    : `Hello Saphal Surgical House, I read your article "${articleTitle}" and would like to send our required equipment/supplies list. Link: ${absoluteUrl}`;

  return getWhatsAppUrl(message);
}
