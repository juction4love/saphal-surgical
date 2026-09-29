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
    /**
     * Set to true only after the owner confirms the exact WhatsApp number format.
     * The supplied raw number 98550055060 has 11 digits (unusual for standard 10-digit Nepal mobile numbers).
     * DO NOT guess or activate until confirmed by the business owner.
     */
    enabled: boolean;
    rawSuppliedNumber: string;
    confirmedInternationalDigits: string; // e.g. "9779855005506" once verified
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
    // Hidden until owner confirms the exact 10-digit mobile number format
    enabled: false,
    rawSuppliedNumber: "98550055060",
    confirmedInternationalDigits: "", // Insert verified number like "9779855005506"
  },
};

/**
 * Helper to generate WhatsApp URL with prefilled message if enabled
 */
export function getWhatsAppUrl(message: string): string | null {
  if (!siteConfig.whatsapp.enabled || !siteConfig.whatsapp.confirmedInternationalDigits) {
    return null;
  }
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsapp.confirmedInternationalDigits}?text=${encoded}`;
}
