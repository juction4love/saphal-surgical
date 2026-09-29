export type Locale = 'ne' | 'en';

export interface TranslationDictionary {
  locale: Locale;
  siteTitle: string;
  siteTagline: string;
  meta: {
    homeTitle: string;
    homeDesc: string;
    aboutTitle: string;
    aboutDesc: string;
    productsTitle: string;
    productsDesc: string;
    contactTitle: string;
    contactDesc: string;
  };
  nav: {
    home: string;
    about: string;
    products: string;
    contact: string;
    callNow: string;
    getDirections: string;
  };
  common: {
    phoneLabel: string;
    addressLabel: string;
    locationLabel: string;
    facebookLabel: string;
    followFacebook: string;
    callDirectly: string;
    getDirections: string;
    openInGoogleMaps: string;
    viewCatalog: string;
    inquireByPhone: string;
    inquireByWhatsApp: string;
    phoneNote: string;
    availabilityDisclaimer: string;
    notHospitalNotice: string;
    proposedCategoryNote: string;
    allRightsReserved: string;
    quickLinks: string;
    contactInfo: string;
    businessNotice: string;
    languageSwitch: string;
    otherLanguage: string;
    otherLanguageCode: Locale;
  };
  home: {
    badge: string;
    heroHeading: string;
    heroSubtitle: string;
    primaryCta: string;
    secondaryCta: string;
    aboutSectionHeading: string;
    aboutSectionSnippet: string;
    readMoreAbout: string;
    categoriesHeading: string;
    categoriesSubtitle: string;
    viewAllCategories: string;
    locationHeading: string;
    locationSubtitle: string;
  };
  about: {
    pageHeading: string;
    pageSubtitle: string;
    introTitle: string;
    introP1: string;
    introP2: string;
    locationTitle: string;
    locationP1: string;
    roleTitle: string;
    roleP1: string;
    clarificationTitle: string;
    clarificationP1: string;
  };
  products: {
    pageHeading: string;
    pageSubtitle: string;
    disclaimerBanner: string;
    categories: Array<{
      id: string;
      title: string;
      description: string;
      sampleItems: string[];
      enquiryText: string;
    }>;
  };
  contact: {
    pageHeading: string;
    pageSubtitle: string;
    phoneCardTitle: string;
    phoneCardDesc: string;
    addressCardTitle: string;
    addressCardDesc: string;
    facebookCardTitle: string;
    facebookCardDesc: string;
    mapSectionTitle: string;
    mapSectionDesc: string;
    directEnquiryNotice: string;
  };
}

export const translations: Record<Locale, TranslationDictionary> = {
  ne: {
    locale: 'ne',
    siteTitle: 'सफल सर्जिकल हाउस',
    siteTagline: 'शल्यक्रिया तथा चिकित्सीय सामग्री आपूर्तिकर्ता',
    meta: {
      homeTitle: 'सफल सर्जिकल हाउस | शल्यक्रिया तथा चिकित्सीय सामग्री, नारायणगढ, चितवन',
      homeDesc: 'सफल सर्जिकल हाउस, कमल नगर मार्ग, नारायणगढ, चितवन। शल्यक्रिया औजार, मेडिकल कन्ज्युमेबल्स, डायग्नोस्टिक तथा होम-केयर उपकरणको सोधपुछका लागि सम्पर्क: +९७७ ५६-५७२०६०।',
      aboutTitle: 'हाम्रो बारेमा | सफल सर्जिकल हाउस, नारायणगढ, चितवन',
      aboutDesc: 'सफल सर्जिकल हाउसको परिचय र स्थान। कमल नगर मार्ग, नारायणगढ, चितवनमा अवस्थित सर्जिकल तथा मेडिकल सामग्री आपूर्तिकर्ता।',
      productsTitle: 'सामग्री तथा उपकरण सोधपुछ | सफल सर्जिकल हाउस',
      productsDesc: 'शल्यक्रिया औजार, चिकित्सीय उपभोग्य सामग्री, रोग निदान तथा होम-केयर उपकरणका प्रस्तावित श्रेणीहरू। उपलब्धता र मूल्यको लागि फोन गर्नुहोस्: +९७७ ५६-५७२०६०।',
      contactTitle: 'सम्पर्क तथा ठेगाना | सफल सर्जिकल हाउस, नारायणगढ',
      contactDesc: 'सफल सर्जिकल हाउसलाई +९७७ ५६-५७२०६० मा फोन गर्नुहोस् वा कमल नगर मार्ग, नारायणगढ, चितवनमा सिधै भेट्नुहोस्।',
    },
    nav: {
      home: 'गृहपृष्ठ',
      about: 'हाम्रो बारेमा',
      products: 'सामग्री सोधपुछ',
      contact: 'सम्पर्क तथा नक्सा',
      callNow: 'फोन गर्नुहोस्',
      getDirections: 'नक्सा हेर्नुहोस्',
    },
    common: {
      phoneLabel: 'सम्पर्क फोन',
      addressLabel: 'ठेगाना',
      locationLabel: 'स्थान',
      facebookLabel: 'फेसबुक पेज',
      followFacebook: 'हाम्रो फेसबुक पेज हेर्नुहोस्',
      callDirectly: 'सिधै फोन सम्पर्क गर्नुहोस्',
      getDirections: 'गुगल म्याप्समा दिशा हेर्नुहोस्',
      openInGoogleMaps: 'गुगल म्याप्समा खोल्नुहोस्',
      viewCatalog: 'सामग्री श्रेणीहरू हेर्नुहोस्',
      inquireByPhone: 'फोनबाट उपलब्धता बुझ्नुहोस्',
      inquireByWhatsApp: 'ह्वाट्सएपमा सोधपुछ गर्नुहोस्',
      phoneNote: 'सामग्री मौज्दात र मूल्य पुष्टि गर्न सिधै फोन गर्नुहोस्।',
      availabilityDisclaimer: 'सुझाव: यी प्रस्तावित श्रेणीहरू हुन्। कुनै पनि सामानको मौज्दात, प्राविधिक विवरण र मूल्यको पुष्टि फोन (+९७७ ५६-५७२०६०) मार्फत मात्र गरिन्छ।',
      notHospitalNotice: 'जानकारी: सफल सर्जिकल हाउस शल्यक्रिया तथा चिकित्सीय सामग्री बिक्री गर्ने व्यवसाय हो। हामी कुनै पनि अस्पताल सेवा, डाक्टर परामर्श वा उपचार सेवा प्रदान गर्दैनौं।',
      proposedCategoryNote: 'प्रस्तावित सोधपुछ श्रेणी',
      allRightsReserved: 'सर्वाधिकार सुरक्षित।',
      quickLinks: 'द्रुत लिङ्कहरू',
      contactInfo: 'सम्पर्क विवरण',
      businessNotice: 'व्यावसायिक सूचना',
      languageSwitch: 'English',
      otherLanguage: 'English',
      otherLanguageCode: 'en',
    },
    home: {
      badge: 'सर्जिकल तथा मेडिकल सामग्री आपूर्तिकर्ता • नारायणगढ, चितवन',
      heroHeading: 'शल्यक्रिया तथा चिकित्सीय सामग्रीको विश्वसनीय आपूर्ति',
      heroSubtitle: 'कमल नगर मार्ग, नारायणगढ, चितवनमा अवस्थित सफल सर्जिकल हाउस। शल्यक्रिया औजार, मेडिकल कन्ज्युमेबल्स, डायग्नोस्टिक र होम-केयर उपकरण सम्बन्धी सोधपुछका लागि हामीलाई सम्पर्क गर्नुहोस्।',
      primaryCta: 'अहिले फोन गर्नुहोस् (+९७७ ५६-५७२०६०)',
      secondaryCta: 'नक्सा तथा बाटो हेर्नुहोस्',
      aboutSectionHeading: 'सफल सर्जिकल हाउसको परिचय',
      aboutSectionSnippet: 'सफल सर्जिकल हाउस चितवनको मुख्य व्यापारिक केन्द्र नारायणगढ (कमल नगर मार्ग) मा अवस्थित सर्जिकल तथा मेडिकल सामग्रीको आपूर्ति गर्ने संस्था हो। हामी विभिन्न प्रकारका शल्यक्रिया सामग्री तथा स्वास्थ्य उपकरणहरूको सोधपुछ सहज बनाउँछौं।',
      readMoreAbout: 'हाम्रो बारेमा विस्तृत पढ्नुहोस्',
      categoriesHeading: 'प्रस्तावित सामग्री सोधपुछ श्रेणीहरू',
      categoriesSubtitle: 'निम्न श्रेणीका सामग्रीहरू बारे जानकारी लिन हामीलाई सिधै फोन सम्पर्क गर्न सक्नुहुन्छ।',
      viewAllCategories: 'सबै श्रेणीहरू र सोधपुछ विवरण हेर्नुहोस्',
      locationHeading: 'हाम्रो पसलको अवस्थिति',
      locationSubtitle: 'कमल नगर मार्ग, नारायणगढ, चितवन, बागमती प्रदेश, नेपाल',
    },
    about: {
      pageHeading: 'हाम्रो बारेमा',
      pageSubtitle: 'सफल सर्जिकल हाउस, कमल नगर मार्ग, नारायणगढ, चितवन',
      introTitle: 'संक्षिप्त परिचय',
      introP1: 'सफल सर्जिकल हाउस नेपालको बागमती प्रदेश अन्तर्गत चितवन जिल्लाको नारायणगढस्थित कमल नगर मार्गमा अवस्थित एक सर्जिकल तथा चिकित्सीय सामग्री आपूर्तिकर्ता संस्था हो।',
      introP2: 'हामी स्वास्थ्य क्षेत्रका विभिन्न आवश्यकताहरू जस्तै शल्यक्रिया औजारहरू, चिकित्सीय उपभोग्य सामग्रीहरू, डायग्नोस्टिक उपकरणहरू र होम-केयर सामग्रीहरूको आपूर्तिमा सहजीकरण गर्दछौं।',
      locationTitle: 'भौगोलिक अवस्थिति र पहुँच',
      locationP1: 'हाम्रो व्यवसाय नारायणगढको मुख्य क्षेत्र कमल नगर मार्ग (भौगोलिक निर्देशांक: २७.६९४७३, ८४.४२१६१) मा रहेको छ। चितवन तथा आसपासका क्षेत्रहरूबाट यहाँ सहजै पुग्न सकिन्छ।',
      roleTitle: 'हाम्रो कार्यक्षेत्र',
      roleP1: 'हाम्रो प्राथमिक उद्देश्य क्लिनिक, स्वास्थ्य संस्था तथा व्यक्तिगत आवश्यकताका लागि आवश्यक सर्जिकल र मेडिकल सामग्रीहरूको आपूर्ति उपलब्ध गराउनु हो।',
      clarificationTitle: 'आवश्यक स्पष्टीकरण',
      clarificationP1: 'हामी शल्यक्रिया तथा चिकित्सीय सामग्री बिक्री-वितरण गर्ने व्यवसाय हौं। हामी कुनै पनि प्रकारको अस्पताल, क्लिनिक, डाक्टर सेवा, बिरामी भर्ना वा उपचार सेवा सञ्चालन गर्दैनौं।',
    },
    products: {
      pageHeading: 'सामग्री तथा उपकरण सोधपुछ',
      pageSubtitle: 'प्रस्तावित सामग्री श्रेणीहरू — उपलब्धता र मूल्यको लागि कृपया फोन गर्नुहोस्',
      disclaimerBanner: 'महत्त्वपूर्ण जानकारी: तल दिइएका श्रेणीहरू केवल सोधपुछको सहजताका लागि प्रस्तावित गरिएका हुन्। कुनै पनि सामानको वास्तविक मौज्दात, ब्रान्ड, स्पेसिफिकेसन तथा मूल्यको पुष्टि गर्न कृपया हाम्रो फोन +९७७ ५६-५७२०६० मा सम्पर्क गर्नुहोस्।',
      categories: [
        {
          id: 'surgical-instruments',
          title: 'शल्यक्रिया औजारहरू (Surgical Instruments)',
          description: 'विभिन्न सामान्य तथा विशिष्ट शल्यक्रियामा प्रयोग हुने धातुका औजारहरू सम्बन्धी सोधपुछ।',
          sampleItems: ['सर्जिकल कैंची तथा फोर्सेप्स', 'स्काल्पेल ह्यान्डल तथा ब्लेड', 'रिट्रयाक्टर तथा निडल होल्डर', 'बेसिक सर्जिकल सेटहरू'],
          enquiryText: 'शल्यक्रिया औजार सम्बन्धी सोधपुछ',
        },
        {
          id: 'medical-consumables',
          title: 'चिकित्सीय उपभोग्य सामग्रीहरू (Medical Consumables)',
          description: 'नियमित स्वास्थ्य सेवा तथा क्लिनिकल प्रयोगमा चाहिने डिस्पोजेबल र उपभोग्य सामग्रीहरू।',
          sampleItems: ['सर्जिकल तथा एक्जामिनेसन पञ्जा', 'गज, ब्यान्डेज र कटन', 'सिरिन्ज तथा आईभी सेट', 'मास्क, क्याप र डिस्पोजेबल एप्रोन'],
          enquiryText: 'चिकित्सीय उपभोग्य सामग्री सम्बन्धी सोधपुछ',
        },
        {
          id: 'diagnostic-equipment',
          title: 'रोग निदान तथा परीक्षण उपकरणहरू (Diagnostic Equipment)',
          description: 'बिरामीको आधारभूत स्वास्थ्य अवस्था जाँच तथा अनुगमन गर्न प्रयोग हुने उपकरणहरू।',
          sampleItems: ['स्टेथस्कोप', 'रक्तचाप नाप्ने यन्त्र (BP Monitor)', 'पल्स अक्सिमिटर', 'डिजिटल तथा क्लिनिकल थर्मोमिटर'],
          enquiryText: 'डायग्नोस्टिक उपकरण सम्बन्धी सोधपुछ',
        },
        {
          id: 'home-care-equipment',
          title: 'घरेलु स्वास्थ्य उपचार उपकरणहरू (Home-Care Equipment)',
          description: 'घरमै बिरामीको हेरचाह, पुनस्र्थापना तथा दैनिक सहयोगका लागि आवश्यक सामग्रीहरू।',
          sampleItems: ['नेबुलाइजर मेसिन', 'वाकिङ स्टिक तथा वाकर', 'सपोर्ट बेल्ट तथा ब्रेसहरू', 'बिरामी सहायक सामग्रीहरू'],
          enquiryText: 'होम-केयर उपकरण सम्बन्धी सोधपुछ',
        },
      ],
    },
    contact: {
      pageHeading: 'सम्पर्क तथा नक्सा',
      pageSubtitle: 'सफल सर्जिकल हाउससँग सिधै सम्पर्क गर्नुहोस् वा हाम्रो स्थानमा आउनुहोस्',
      phoneCardTitle: 'सिधै फोन सम्पर्क',
      phoneCardDesc: 'सामग्रीको सोधपुछ, उपलब्धता तथा जानकारीका लागि हामीलाई कल गर्नुहोस्।',
      addressCardTitle: 'हाम्रो ठेगाना',
      addressCardDesc: 'कमल नगर मार्ग, नारायणगढ, चितवन, बागमती प्रदेश, नेपाल',
      facebookCardTitle: 'फेसबुक पेज',
      facebookCardDesc: 'हाम्रो आधिकारिक फेसबुक पेजमा जोडिनुहोस्।',
      mapSectionTitle: 'गुगल म्याप्समा हाम्रो स्थान',
      mapSectionDesc: 'निर्देशांक: २७.६९४७३, ८४.४२१६१ (कमल नगर मार्ग, नारायणगढ)',
      directEnquiryNotice: 'कुनै पनि जानकारी, दररेट वा मौज्दात सोधपुछका लागि हाम्रो आधिकारिक फोन नम्बर +९७७ ५६-५७२०६० मा सम्पर्क गर्नुहोला।',
    },
  },
  en: {
    locale: 'en',
    siteTitle: 'Saphal Surgical House',
    siteTagline: 'Surgical & Medical Supplies Supplier',
    meta: {
      homeTitle: 'Saphal Surgical House | Surgical & Medical Supplies in Narayangarh, Chitwan',
      homeDesc: 'Saphal Surgical House, located at Kamal Nagar Marg, Narayangarh, Chitwan. Enquire for surgical instruments, medical consumables, diagnostic tools, and home-care equipment at +977 56-572060.',
      aboutTitle: 'About Us | Saphal Surgical House, Narayangarh, Chitwan',
      aboutDesc: 'Learn about Saphal Surgical House and our location at Kamal Nagar Marg, Narayangarh, Chitwan, Nepal. Surgical and medical supplies business.',
      productsTitle: 'Product Categories & Enquiries | Saphal Surgical House',
      productsDesc: 'Proposed enquiry categories for surgical instruments, medical consumables, diagnostic equipment, and home-care devices. Call +977 56-572060 for availability.',
      contactTitle: 'Contact & Directions | Saphal Surgical House, Narayangarh',
      contactDesc: 'Call Saphal Surgical House at +977 56-572060 or find directions to Kamal Nagar Marg, Narayangarh, Chitwan, Nepal.',
    },
    nav: {
      home: 'Home',
      about: 'About Us',
      products: 'Products & Enquiry',
      contact: 'Contact & Map',
      callNow: 'Call Now',
      getDirections: 'Get Directions',
    },
    common: {
      phoneLabel: 'Phone Number',
      addressLabel: 'Address',
      locationLabel: 'Location',
      facebookLabel: 'Facebook Page',
      followFacebook: 'Visit our Facebook Page',
      callDirectly: 'Call us directly',
      getDirections: 'Get Directions on Google Maps',
      openInGoogleMaps: 'Open in Google Maps',
      viewCatalog: 'View Enquiry Categories',
      inquireByPhone: 'Inquire by Phone',
      inquireByWhatsApp: 'Inquire on WhatsApp',
      phoneNote: 'Call directly to confirm current stock, availability, and pricing.',
      availabilityDisclaimer: 'Notice: These are proposed categories. Please confirm item availability, current specifications, and pricing directly by calling +977 56-572060.',
      notHospitalNotice: 'Clarification: Saphal Surgical House is a surgical and medical supplies business. We do not provide hospital services, clinical consultations, doctors, or medical treatments.',
      proposedCategoryNote: 'Proposed Enquiry Category',
      allRightsReserved: 'All rights reserved.',
      quickLinks: 'Quick Links',
      contactInfo: 'Contact Information',
      businessNotice: 'Business Notice',
      languageSwitch: 'नेपाली',
      otherLanguage: 'नेपाली',
      otherLanguageCode: 'ne',
    },
    home: {
      badge: 'Surgical & Medical Supplies • Narayangarh, Chitwan',
      heroHeading: 'Reliable Surgical & Medical Supplies in Narayangarh',
      heroSubtitle: 'Located at Kamal Nagar Marg, Narayangarh, Chitwan. Contact Saphal Surgical House directly for enquiries regarding surgical instruments, medical consumables, diagnostic tools, and home-care equipment.',
      primaryCta: 'Call Now (+977 56-572060)',
      secondaryCta: 'Get Directions',
      aboutSectionHeading: 'About Saphal Surgical House',
      aboutSectionSnippet: 'Saphal Surgical House is a surgical and medical supplies enterprise situated on Kamal Nagar Marg in the commercial hub of Narayangarh, Chitwan. We facilitate enquiries and supplies for healthcare materials and essential equipment.',
      readMoreAbout: 'Read More About Us',
      categoriesHeading: 'Proposed Product Enquiry Categories',
      categoriesSubtitle: 'You are welcome to call us directly to inquire about any of the following supply categories.',
      viewAllCategories: 'View All Categories & Enquiries',
      locationHeading: 'Our Location in Narayangarh',
      locationSubtitle: 'Kamal Nagar Marg, Narayangarh, Chitwan, Bagmati Province, Nepal',
    },
    about: {
      pageHeading: 'About Saphal Surgical House',
      pageSubtitle: 'Kamal Nagar Marg, Narayangarh, Chitwan, Bagmati Province, Nepal',
      introTitle: 'Business Introduction',
      introP1: 'Saphal Surgical House is a medical and surgical supply business located at Kamal Nagar Marg in Narayangarh, Chitwan District, Bagmati Province, Nepal.',
      introP2: 'We provide supplies and handle enquiries for surgical instruments, daily medical consumables, diagnostic devices, and home-care health equipment.',
      locationTitle: 'Location & Accessibility',
      locationP1: 'Our premises are situated at Kamal Nagar Marg, Narayangarh (Coordinates: 27.69473, 84.42161), accessible to clinics, healthcare personnel, and the public across the Chitwan region.',
      roleTitle: 'Our Scope of Supply',
      roleP1: 'Our primary function is the provision and distribution of certified medical and surgical supplies for clinical and personal healthcare needs.',
      clarificationTitle: 'Important Clarification',
      clarificationP1: 'Saphal Surgical House operates strictly as a commercial surgical and medical supplies distributor. We do not provide hospital facilities, medical treatments, clinical admissions, or physician consultations.',
    },
    products: {
      pageHeading: 'Products & Enquiries',
      pageSubtitle: 'Proposed supply categories — Please call to confirm availability and pricing',
      disclaimerBanner: 'Important Notice: The categories listed below represent proposed enquiry areas. Please contact us directly at +977 56-572060 to confirm live stock, manufacturer specifications, and pricing before placing orders.',
      categories: [
        {
          id: 'surgical-instruments',
          title: 'Surgical Instruments',
          description: 'Inquiries regarding stainless steel surgical instruments for general and specialized procedures.',
          sampleItems: ['Surgical Scissors & Forceps', 'Scalpel Handles & Blades', 'Retractors & Needle Holders', 'Basic Surgical Sets'],
          enquiryText: 'Enquiry regarding Surgical Instruments',
        },
        {
          id: 'medical-consumables',
          title: 'Medical Consumables',
          description: 'Disposables and single-use supplies required for routine medical, nursing, and clinical operations.',
          sampleItems: ['Surgical & Examination Gloves', 'Gauze, Bandages & Cotton', 'Syringes & IV Infusion Sets', 'Face Masks, Caps & Disposables'],
          enquiryText: 'Enquiry regarding Medical Consumables',
        },
        {
          id: 'diagnostic-equipment',
          title: 'Diagnostic Equipment',
          description: 'Fundamental devices used for patient health assessment, vital monitoring, and routine clinical checks.',
          sampleItems: ['Stethoscopes', 'Blood Pressure Monitors (Sphygmomanometers)', 'Pulse Oximeters', 'Digital & Clinical Thermometers'],
          enquiryText: 'Enquiry regarding Diagnostic Equipment',
        },
        {
          id: 'home-care-equipment',
          title: 'Home-Care Equipment',
          description: 'Supportive healthcare equipment and mobility aids designed for home nursing and patient recovery.',
          sampleItems: ['Nebulizer Machines', 'Walking Sticks & Walkers', 'Orthopedic Belts & Braces', 'Patient Support Accessories'],
          enquiryText: 'Enquiry regarding Home-Care Equipment',
        },
      ],
    },
    contact: {
      pageHeading: 'Contact & Directions',
      pageSubtitle: 'Reach Saphal Surgical House by phone or find our location in Narayangarh',
      phoneCardTitle: 'Direct Telephone Contact',
      phoneCardDesc: 'For all equipment availability, price queries, and general inquiries, call us directly.',
      addressCardTitle: 'Physical Address',
      addressCardDesc: 'Kamal Nagar Marg, Narayangarh, Chitwan, Bagmati Province, Nepal',
      facebookCardTitle: 'Facebook Page',
      facebookCardDesc: 'Connect with our official Facebook page for updates and announcements.',
      mapSectionTitle: 'Location on Google Maps',
      mapSectionDesc: 'Coordinates: 27.69473, 84.42161 (Kamal Nagar Marg, Narayangarh)',
      directEnquiryNotice: 'Please use our verified landline phone +977 56-572060 for all authentic stock and supply enquiries.',
    },
  },
};
