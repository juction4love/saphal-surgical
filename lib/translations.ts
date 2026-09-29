export type Locale = 'ne' | 'en';

export interface TranslationDictionary {
  locale: Locale;
  siteTitle: string;
  siteTagline: string;
  prominentIntro: string;
  brands: {
    sectionHeading: string;
    sectionSubtitle: string;
    disclaimer: string;
    verifiedBrandNote: string;
    enquiryOptionsLabel: string;
    priceNegotiable: string;
    confirmAvailability: string;
  };
  meta: {
    homeTitle: string;
    homeDesc: string;
    aboutTitle: string;
    aboutDesc: string;
    productsTitle: string;
    productsDesc: string;
    articlesTitle: string;
    articlesDesc: string;
    contactTitle: string;
    contactDesc: string;
  };
  nav: {
    home: string;
    about: string;
    products: string;
    articles: string;
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
    readMore: string;
    viewDetails: string;
    sendRequirementList: string;
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
    articlesHeading: string;
    articlesSubtitle: string;
    viewAllArticles: string;
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
  articles: {
    pageHeading: string;
    pageSubtitle: string;
    readArticle: string;
    backToArticles: string;
    checklistHeading: string;
    enquiryCardTitle: string;
    enquiryCardSubtitle: string;
    whatsappEnquiry: string;
    phoneEnquiry: string;
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
    siteTagline: 'सर्जिकल, अस्पताल, ओटी तथा सरसफाइ सामग्री आपूर्तिकर्ता',
    prominentIntro:
      'सफल सर्जिकल हाउसमा सर्जिकल उपकरण, अस्पताल तथा अपरेशन थिएटर (OT) मा प्रयोग हुने सामग्री, प्रयोगशालाका उपकरण र सरसफाइका सामानको विस्तृत दायराबारे जानकारी तथा खरिद सोधपुछ गर्न सक्नुहुन्छ। हामीकहाँ Coral, Tulip र Erba का प्रयोगशाला सामग्री तथा टेस्ट किटहरू, दैनिक प्रयोग हुने मेडिकल उपभोग्य वस्तुहरू (सिरिन्ज, आईभी सेट, क्यानुला), विभिन्न प्रकारका सुचर धागो र ENT (नाक, कान, घाँटी) औजारहरू उपलब्ध छन्। आफ्नो अस्पताल, क्लिनिक, प्रयोगशाला वा घरायसी हेरचाहका लागि आवश्यक सामानको सूची हामीलाई पठाउनुहोस्। उपलब्धता, ब्रान्ड, साइज, प्याकिङ र मूल्यबारे फोन (+९७७ ५६-५७२०६०) वा WhatsApp (+९७७ ९८५५०५५०६०) मार्फत बुझ्नुहोस्।',
    brands: {
      sectionHeading: 'हामीले आपूर्ति गर्ने प्रमुख ब्रान्डहरू (Brands We Carry)',
      sectionSubtitle: 'प्रयोगशाला रिअजेन्ट, डायग्नोस्टिक टेस्ट किट तथा स्वास्थ्य सेवाका प्रमाणित ब्रान्डहरू',
      disclaimer: 'सूचना: हामी यी स्थापित ब्रान्डका सामग्रीहरू बजार उपलब्धता अनुसार आपूर्ति गर्दछौं। हामी आधिकारिक डिलर वा निर्माताको प्रत्यक्ष साझेदार भएको दाबी गर्दैनौं। मौज्दात र ब्याच विवरण बुझ्न सम्पर्क गर्नुहोस्।',
      verifiedBrandNote: 'प्रमाणित ब्रान्ड',
      enquiryOptionsLabel: 'उपलब्ध सोधपुछ विकल्प तथा साइजहरू',
      priceNegotiable: 'मूल्य कुराकानीमा',
      confirmAvailability: 'उपलब्धता बुझ्नुहोस्',
    },
    meta: {
      homeTitle: 'सफल सर्जिकल हाउस | सर्जिकल, अस्पताल, ओटी तथा ल्याब सामग्री, नारायणगढ',
      homeDesc: 'सफल सर्जिकल हाउस, कमल नगर मार्ग, नारायणगढ, चितवन। सर्जिकल औजार, अस्पताल/ओटी आपूर्ति, ल्याब उपकरण र सरसफाइ सामग्रीको सोधपुछका लागि सम्पर्क: +९७७ ५६-५७२०६० / WhatsApp: +९७७ ९८५५०५५०६०।',
      aboutTitle: 'हाम्रो बारेमा | सफल सर्जिकल हाउस, नारायणगढ, चितवन',
      aboutDesc: 'सफल सर्जिकल हाउसको परिचय र स्थान। कमल नगर मार्ग, नारायणगढ, चितवनमा अवस्थित सर्जिकल, अस्पताल तथा ल्याब सामग्री आपूर्तिकर्ता।',
      productsTitle: 'सामग्री तथा उपकरण क्याटलग | सफल सर्जिकल हाउस',
      productsDesc: 'सर्जिकल औजार, ड्रेसिङ, अस्पताल फर्निचर, ओटी सामग्री, सरसफाइ रसायन, फोहोर व्यवस्थापन र ल्याब उपकरण। उपलब्धता र दररेट बुझ्न सम्पर्क गर्नुहोस्।',
      articlesTitle: 'स्वास्थ्य सामग्री खरिद मार्गदर्शन तथा लेखहरू | सफल सर्जिकल हाउस',
      articlesDesc: 'अस्पताल, ओटी, सरसफाइ तथा सर्जिकल सामग्री खरिद योजना र चेकलिस्ट सम्बन्धी उपयोगी लेखहरू।',
      contactTitle: 'सम्पर्क तथा नक्सा | सफल सर्जिकल हाउस, नारायणगढ',
      contactDesc: 'सफल सर्जिकल हाउसलाई +९७७ ५६-५७२०६० मा फोन गर्नुहोस् वा WhatsApp +९७७ ९८५५०५५०६० मार्फत सिधै च्याट गर्नुहोस्। कमल नगर मार्ग, नारायणगढ, चितवन।',
    },
    nav: {
      home: 'गृहपृष्ठ',
      about: 'हाम्रो बारेमा',
      products: 'सामग्री क्याटलग',
      articles: 'लेख तथा जानकारी',
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
      viewCatalog: 'सामग्री क्याटलग हेर्नुहोस्',
      inquireByPhone: 'फोनबाट उपलब्धता बुझ्नुहोस्',
      inquireByWhatsApp: 'ह्वाट्सएपमा सोधपुछ गर्नुहोस्',
      phoneNote: 'सामग्री मौज्दात, ब्रान्ड र मूल्य पुष्टि गर्न सिधै फोन वा WhatsApp गर्नुहोस्।',
      availabilityDisclaimer: 'सुझाव: यी प्रस्तावित सोधपुछ श्रेणीहरू हुन्। कुनै पनि सामानको मौज्दात, प्राविधिक विवरण र मूल्यको पुष्टि फोन (+९७७ ५६-५७२०६०) वा WhatsApp (+९७७ ९८५५०५५०६०) मार्फत मात्र गरिन्छ।',
      notHospitalNotice: 'जानकारी: सफल सर्जिकल हाउस शल्यक्रिया, अस्पताल, ओटी तथा सरसफाइ सामग्री बिक्री गर्ने व्यवसाय हो। हामी कुनै पनि अस्पताल सेवा, डाक्टर परामर्श वा उपचार सेवा प्रदान गर्दैनौं।',
      proposedCategoryNote: 'प्रस्तावित सोधपुछ श्रेणी',
      allRightsReserved: 'सर्वाधिकार सुरक्षित।',
      quickLinks: 'द्रुत लिङ्कहरू',
      contactInfo: 'सम्पर्क विवरण',
      businessNotice: 'व्यावसायिक सूचना',
      languageSwitch: 'English',
      otherLanguage: 'English',
      otherLanguageCode: 'en',
      readMore: 'थप पढ्नुहोस्',
      viewDetails: 'विस्तृत विवरण हेर्नुहोस्',
      sendRequirementList: 'आवश्यक सामानको सूची पठाउनुहोस्',
    },
    home: {
      badge: 'सर्जिकल, अस्पताल, ओटी तथा ल्याब सामग्री • नारायणगढ, चितवन',
      heroHeading: 'सर्जिकल, अस्पताल, ओटी तथा सरसफाइ सामग्रीको भरपर्दो आपूर्ति',
      heroSubtitle: 'कमल नगर मार्ग, नारायणगढ, चितवनमा अवस्थित सफल सर्जिकल हाउस। शल्यक्रिया औजार, अस्पताल आपूर्ति, ओटी सामग्री, ल्याब उपकरण र सरसफाइ उत्पादन सम्बन्धी सोधपुछका लागि हामीलाई सम्पर्क गर्नुहोस्।',
      primaryCta: 'अहिले फोन गर्नुहोस् (+९७७ ५६-५७२०६०)',
      secondaryCta: 'ह्वाट्सएपमा च्याट गर्नुहोस्',
      aboutSectionHeading: 'सफल सर्जिकल हाउसको परिचय',
      aboutSectionSnippet: 'सफल सर्जिकल हाउस चितवनको मुख्य व्यापारिक केन्द्र नारायणगढ (कमल नगर मार्ग) मा अवस्थित सर्जिकल, अस्पताल, ओटी, ल्याब तथा सरसफाइ सामग्रीको आपूर्ति गर्ने संस्था हो।',
      readMoreAbout: 'हाम्रो बारेमा विस्तृत पढ्नुहोस्',
      categoriesHeading: 'सामग्री तथा उपकरण सोधपुछ श्रेणीहरू',
      categoriesSubtitle: 'निम्न श्रेणीका सामग्रीहरू बारे जानकारी लिन हामीलाई फोन वा WhatsApp मार्फत सम्पर्क गर्न सक्नुहुन्छ।',
      viewAllCategories: 'सबै सामग्री क्याटलग हेर्नुहोस्',
      articlesHeading: 'स्वास्थ्य सामग्री खरिद मार्गदर्शन तथा लेखहरू',
      articlesSubtitle: 'अस्पताल, क्लिनिक तथा स्वास्थ्य संस्थाका लागि सामग्री छनोट, योजना र चेकलिस्ट सम्बन्धी जानकारी।',
      viewAllArticles: 'सबै लेखहरू पढ्नुहोस्',
      locationHeading: 'हाम्रो पसलको अवस्थिति',
      locationSubtitle: 'कमल नगर मार्ग, नारायणगढ, चितवन, बागमती प्रदेश, नेपाल',
    },
    about: {
      pageHeading: 'हाम्रो बारेमा',
      pageSubtitle: 'सफल सर्जिकल हाउस, कमल नगर मार्ग, नारायणगढ, चितवन',
      introTitle: 'संक्षिप्त परिचय',
      introP1: 'सफल सर्जिकल हाउस नेपालको बागमती प्रदेश अन्तर्गत चितवन जिल्लाको नारायणगढस्थित कमल नगर मार्गमा अवस्थित एक सर्जिकल, अस्पताल, ओटी तथा ल्याब सामग्री आपूर्तिकर्ता संस्था हो।',
      introP2: 'हामी स्वास्थ्य क्षेत्रका विभिन्न आवश्यकताहरू जस्तै शल्यक्रिया औजारहरू, अस्पताल तथा ओटी सामग्री, प्रयोगशालाका उपकरण र सरसफाइका सामानहरूको आपूर्तिमा सहजीकरण गर्दछौं।',
      locationTitle: 'भौगोलिक अवस्थिति र पहुँच',
      locationP1: 'हाम्रो व्यवसाय नारायणगढको मुख्य क्षेत्र कमल नगर मार्ग (भौगोलिक निर्देशांक: २७.६९४७३, ८४.४२१६१) मा रहेको छ। चितवन तथा आसपासका क्षेत्रहरूबाट यहाँ सहजै पुग्न सकिन्छ।',
      roleTitle: 'हाम्रो कार्यक्षेत्र',
      roleP1: 'हाम्रो प्राथमिक उद्देश्य अस्पताल, क्लिनिक, प्रयोगशाला तथा घरायसी हेरचाहका लागि आवश्यक सर्जिकल र मेडिकल सामग्रीहरूको आपूर्ति उपलब्ध गराउनु हो।',
      clarificationTitle: 'आवश्यक स्पष्टीकरण',
      clarificationP1: 'हामी शल्यक्रिया तथा चिकित्सीय सामग्री बिक्री-वितरण गर्ने व्यवसाय हौं। हामी कुनै पनि प्रकारको अस्पताल, क्लिनिक, डाक्टर सेवा, बिरामी भर्ना वा उपचार सेवा सञ्चालन गर्दैनौं।',
    },
    products: {
      pageHeading: 'सामग्री तथा उपकरण क्याटलग',
      pageSubtitle: 'प्रस्तावित सामग्री श्रेणीहरू — उपलब्धता र मूल्यको लागि कृपया फोन वा WhatsApp गर्नुहोस्',
      disclaimerBanner: 'महत्त्वपूर्ण जानकारी: तल दिइएका श्रेणीहरू केवल सोधपुछको सहजताका लागि प्रस्तावित गरिएका हुन्। कुनै पनि सामानको वास्तविक मौज्दात, ब्रान्ड, स्पेसिफिकेसन तथा मूल्यको पुष्टि गर्न कृपया हाम्रो फोन +९७७ ५६-५७२०६० वा WhatsApp +९७७ ९८५५०५५०६० मा सम्पर्क गर्नुहोस्।',
      categories: [
        {
          id: 'surgical-instruments',
          title: 'सर्जिकल औजार तथा ड्रेसिङ सामग्रीहरू',
          description: 'स्टेनलेस स्टिल सर्जिकल कैंची, फोर्सेप्स, निडल होल्डर, ब्लेड, स्टेराइल गज, कपास र ब्यान्डेजहरू।',
          sampleItems: ['सर्जिकल कैंची तथा फोर्सेप्स', 'स्काल्पेल ह्यान्डल तथा ब्लेड', 'रिट्रयाक्टर तथा निडल होल्डर', 'स्टेराइल गज र ब्यान्डेज'],
          enquiryText: 'सर्जिकल औजार तथा ड्रेसिङ सामग्री सम्बन्धी सोधपुछ',
        },
        {
          id: 'hospital-furniture',
          title: 'अस्पताल सामग्री तथा वार्ड फर्निचर',
          description: 'बिरामी बेड, परीक्षण काउच, ड्रेसिङ तथा औषधि ट्रली, आईभी स्ट्यान्ड, बेडसिट र वार्ड सामग्री।',
          sampleItems: ['सेमी-फाउलर अस्पताल बेड', 'परीक्षण काउच/टेबल', 'ड्रेसिङ तथा मेडिसिन ट्रली', 'ह्विलचेयर र स्ट्रेचर'],
          enquiryText: 'अस्पताल फर्निचर सम्बन्धी सोधपुछ',
        },
        {
          id: 'ot-supplies',
          title: 'अपरेशन थिएटर (OT) सामग्रीहरू',
          description: 'शल्यक्रिया सेट, स्टेराइल गाउन, ड्रेप्स, क्याप, मास्क, सुचर धागो, सक्सन मेसिन र अटोक्लेभ।',
          sampleItems: ['मेजर/माइनर सर्जिकल सेट', 'स्टेराइल सर्जिकल गाउन र ड्रेप्स', 'सुचर धागो (PGA, Silk)', 'सक्सन मेसिन र अटोक्लेभ'],
          enquiryText: 'ओटी सामग्री सम्बन्धी सोधपुछ',
        },
        {
          id: 'cleaning-hygiene',
          title: 'सरसफाइ तथा स्वच्छता सामग्रीहरू',
          description: 'सतह निसङ्क्रमण घोल, स्यानिटाइजर, भुइँ सफाइ रसायन, डबल-बाल्टी मोप ट्रली र ब्रसहरू।',
          sampleItems: ['अस्पताल भुइँ/सतह निसङ्क्रमण घोल', 'अल्कोहल ह्यान्ड रब स्यानिटाइजर', 'ओटी एन्टीसेप्टिक स्क्रब', 'डबल बाल्टी मोप ट्रली'],
          enquiryText: 'सरसफाइ सामग्री सम्बन्धी सोधपुछ',
        },
      ],
    },
    articles: {
      pageHeading: 'स्वास्थ्य सामग्री खरिद मार्गदर्शन तथा लेखहरू',
      pageSubtitle: 'अस्पताल, क्लिनिक तथा स्वास्थ्य संस्थाका लागि व्यावहारिक खरिद योजना, ओटी चेकलिस्ट र सरसफाइ मार्गदर्शन',
      readArticle: 'लेख पढ्नुहोस्',
      backToArticles: 'सबै लेखहरूमा फर्कनुहोस्',
      checklistHeading: 'व्यावहारिक खरिद चेकलिस्ट',
      enquiryCardTitle: 'यस विषय सम्बन्धी सामग्री सोधपुछ गर्नुहोस्',
      enquiryCardSubtitle: 'तपाईंको संस्थाका लागि आवश्यक सामग्रीको सूची हामीलाई फोन वा WhatsApp मार्फत पठाउनुहोस्।',
      whatsappEnquiry: 'WhatsApp मा खरिद सूची पठाउनुहोस्',
      phoneEnquiry: 'फोनबाट दररेट बुझ्नुहोस्',
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
      directEnquiryNotice: 'कुनै पनि जानकारी, दररेट वा मौज्दात सोधपुछका लागि हाम्रो आधिकारिक फोन नम्बर +९७७ ५६-५७२०६० वा WhatsApp +९७७ ९८५५०५५०६० मा सम्पर्क गर्नुहोला।',
    },
  },
  en: {
    locale: 'en',
    siteTitle: 'Saphal Surgical House',
    siteTagline: 'Surgical, Hospital, OT & Cleaning Supplies Supplier',
    prominentIntro:
      'Saphal Surgical House supplies a broad range of surgical instruments, hospital and operating-theatre essentials, laboratory equipment and cleaning materials. Customers can enquire about laboratory products from Coral, Tulip and Erba, everyday medical consumables (syringes, IV sets, cannulas), sutures, and ENT instruments for hospitals, clinics, laboratories and operating theatres. Send us your requirements for your hospital, clinic, laboratory or home-care needs. Contact us by phone (+977 56-572060) or WhatsApp (+977 9855055060) to confirm availability, brands, sizes, packaging and prices.',
    brands: {
      sectionHeading: 'Brands We Carry',
      sectionSubtitle: 'Clinical laboratory reagents, diagnostic kits, and verified medical healthcare brands',
      disclaimer: 'Notice: We supply products from these recognized manufacturers based on market availability. We do not claim authorized dealership, exclusivity, or direct manufacturer partnership. Please contact us to confirm batch availability, pack size, and delivery.',
      verifiedBrandNote: 'Verified Brand',
      enquiryOptionsLabel: 'Available Enquiry Specifications & Sizes',
      priceNegotiable: 'Price Negotiable',
      confirmAvailability: 'Confirm Availability',
    },
    meta: {
      homeTitle: 'Saphal Surgical House | Surgical, Hospital, OT & Lab Supplies in Chitwan',
      homeDesc: 'Saphal Surgical House, Kamal Nagar Marg, Narayangarh, Chitwan. Enquire for surgical instruments, OT essentials, hospital supplies, lab equipment and cleaning materials. Phone: +977 56-572060 / WhatsApp: +977 9855055060.',
      aboutTitle: 'About Us | Saphal Surgical House, Narayangarh, Chitwan',
      aboutDesc: 'Learn about Saphal Surgical House at Kamal Nagar Marg, Narayangarh, Chitwan, Nepal. Surgical, hospital, and laboratory supplies business.',
      productsTitle: 'Product Catalogue & Enquiries | Saphal Surgical House',
      productsDesc: 'Explore surgical instruments, hospital furniture, OT supplies, cleaning disinfectants, waste handling tools, and lab equipment. Inquire for availability and prices.',
      articlesTitle: 'Healthcare Procurement Guides & Articles | Saphal Surgical House',
      articlesDesc: 'Practical purchasing checklists, OT equipment guides, hospital cleaning product selection, and requirement planning.',
      contactTitle: 'Contact & Directions | Saphal Surgical House, Narayangarh',
      contactDesc: 'Call Saphal Surgical House at +977 56-572060 or WhatsApp +977 9855055060. Visit Kamal Nagar Marg, Narayangarh, Chitwan, Nepal.',
    },
    nav: {
      home: 'Home',
      about: 'About Us',
      products: 'Products & Catalogue',
      articles: 'Articles & Guides',
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
      viewCatalog: 'View Product Catalogue',
      inquireByPhone: 'Inquire by Phone',
      inquireByWhatsApp: 'Inquire on WhatsApp',
      phoneNote: 'Call or WhatsApp directly to confirm live stock, available brands, and pricing.',
      availabilityDisclaimer: 'Notice: These represent proposed supply categories. Please confirm item availability, current specifications, and pricing directly by calling +977 56-572060 or via WhatsApp +977 9855055060.',
      notHospitalNotice: 'Clarification: Saphal Surgical House is a surgical, hospital, and medical supplies business. We do not provide hospital services, clinical consultations, doctors, or medical treatments.',
      proposedCategoryNote: 'Proposed Enquiry Category',
      allRightsReserved: 'All rights reserved.',
      quickLinks: 'Quick Links',
      contactInfo: 'Contact Information',
      businessNotice: 'Business Notice',
      languageSwitch: 'नेपाली',
      otherLanguage: 'नेपाली',
      otherLanguageCode: 'ne',
      readMore: 'Read More',
      viewDetails: 'View Details',
      sendRequirementList: 'Send Requirement List',
    },
    home: {
      badge: 'Surgical, Hospital, OT & Lab Supplies • Narayangarh, Chitwan',
      heroHeading: 'Reliable Surgical, Hospital, OT & Cleaning Supplies',
      heroSubtitle: 'Located at Kamal Nagar Marg, Narayangarh, Chitwan. Contact Saphal Surgical House directly for enquiries regarding surgical instruments, hospital supplies, OT essentials, laboratory equipment, and environmental hygiene products.',
      primaryCta: 'Call Now (+977 56-572060)',
      secondaryCta: 'Chat on WhatsApp',
      aboutSectionHeading: 'About Saphal Surgical House',
      aboutSectionSnippet: 'Saphal Surgical House is a surgical and healthcare supplies enterprise situated on Kamal Nagar Marg in Narayangarh, Chitwan. We facilitate institutional and individual supplies for hospitals, clinics, labs, and home-care.',
      readMoreAbout: 'Read More About Us',
      categoriesHeading: 'Product & Supply Categories',
      categoriesSubtitle: 'Send your requirement list or call us to inquire about any of the following healthcare supplies.',
      viewAllCategories: 'View Full Product Catalogue',
      articlesHeading: 'Procurement Guides & Practical Articles',
      articlesSubtitle: 'Actionable checklists and insights for hospital purchasing, OT supplies, and clinical cleaning products.',
      viewAllArticles: 'Browse All Articles',
      locationHeading: 'Our Location in Narayangarh',
      locationSubtitle: 'Kamal Nagar Marg, Narayangarh, Chitwan, Bagmati Province, Nepal',
    },
    about: {
      pageHeading: 'About Saphal Surgical House',
      pageSubtitle: 'Kamal Nagar Marg, Narayangarh, Chitwan, Bagmati Province, Nepal',
      introTitle: 'Business Introduction',
      introP1: 'Saphal Surgical House is a surgical, hospital, and laboratory supplies business located at Kamal Nagar Marg in Narayangarh, Chitwan District, Bagmati Province, Nepal.',
      introP2: 'We supply a broad spectrum of surgical instruments, hospital ward furniture, operating theatre essentials, laboratory equipment, and cleaning/disinfection supplies.',
      locationTitle: 'Location & Accessibility',
      locationP1: 'Our premises are situated at Kamal Nagar Marg, Narayangarh (Coordinates: 27.69473, 84.42161), accessible to clinics, hospitals, laboratories, and the public across Chitwan.',
      roleTitle: 'Our Scope of Supply',
      roleP1: 'Our primary function is the provision and distribution of reliable medical, surgical, and hygiene supplies for institutional and personal healthcare needs.',
      clarificationTitle: 'Important Clarification',
      clarificationP1: 'Saphal Surgical House operates strictly as a commercial surgical and medical supplies distributor. We do not provide hospital facilities, medical treatments, clinical admissions, or physician consultations.',
    },
    products: {
      pageHeading: 'Products & Equipment Catalogue',
      pageSubtitle: 'Explore our product categories — Contact us by Phone or WhatsApp to verify stock & prices',
      disclaimerBanner: 'Important Notice: The categories listed below represent proposed enquiry areas. Please contact us directly at +977 56-572060 or WhatsApp +977 9855055060 to confirm live stock, manufacturer specifications, and pricing.',
      categories: [
        {
          id: 'surgical-instruments',
          title: 'Surgical Instruments & Dressings',
          description: 'Precision surgical steel scissors, forceps, needle holders, scalpels, sterile gauze, cotton, and bandages.',
          sampleItems: ['Surgical Scissors & Forceps', 'Scalpel Handles & Blades', 'Retractors & Needle Holders', 'Sterile Gauze & Bandages'],
          enquiryText: 'Enquiry regarding Surgical Instruments & Dressings',
        },
        {
          id: 'hospital-furniture',
          title: 'Hospital Supplies & Ward Essentials',
          description: 'Patient beds, examination couches, dressing & medicine trolleys, IV stands, linen, and ward accessories.',
          sampleItems: ['Semi-Fowler Hospital Beds', 'Examination Couches', 'Dressing & Medication Trolleys', 'Wheelchairs & Stretchers'],
          enquiryText: 'Enquiry regarding Hospital Furniture',
        },
        {
          id: 'ot-supplies',
          title: 'Operating Theatre (OT) Supplies',
          description: 'Procedure sets, sterile gowns, surgical drapes, caps, masks, sutures, suction units, and autoclaves.',
          sampleItems: ['Major / Minor Surgery Sets', 'Fluid-Resistant Surgical Gowns', 'Suture Materials (PGA, Silk)', 'OT Suction Machines & Autoclaves'],
          enquiryText: 'Enquiry regarding OT Supplies',
        },
        {
          id: 'cleaning-hygiene',
          title: 'Cleaning & Hygiene Products',
          description: 'Surface disinfectants, hand sanitizers, floor cleaning chemicals, wringer mops, buckets, and cleaning trolleys.',
          sampleItems: ['Hospital Floor Disinfectants', 'Alcohol Hand Rub Sanitizers', 'OT Antiseptic Scrubs', 'Double Bucket Mop Trolleys'],
          enquiryText: 'Enquiry regarding Cleaning & Hygiene Products',
        },
      ],
    },
    articles: {
      pageHeading: 'Healthcare Procurement Guides & Articles',
      pageSubtitle: 'Practical purchasing checklists, OT equipment guides, hospital cleaning product selection, and requirement planning',
      readArticle: 'Read Full Guide',
      backToArticles: 'Back to All Articles',
      checklistHeading: 'Actionable Procurement Checklist',
      enquiryCardTitle: 'Enquire About Materials in This Guide',
      enquiryCardSubtitle: 'Send your itemized requirements list to Saphal Surgical House via phone or WhatsApp.',
      whatsappEnquiry: 'Send Requirements on WhatsApp',
      phoneEnquiry: 'Call for Pricing & Stock',
    },
    contact: {
      pageHeading: 'Contact & Directions',
      pageSubtitle: 'Reach Saphal Surgical House by phone, WhatsApp, or find our location in Narayangarh',
      phoneCardTitle: 'Direct Telephone Contact',
      phoneCardDesc: 'For all equipment availability, price queries, and general inquiries, call us directly.',
      addressCardTitle: 'Physical Address',
      addressCardDesc: 'Kamal Nagar Marg, Narayangarh, Chitwan, Bagmati Province, Nepal',
      facebookCardTitle: 'Facebook Page',
      facebookCardDesc: 'Connect with our official Facebook page for updates and announcements.',
      mapSectionTitle: 'Location on Google Maps',
      mapSectionDesc: 'Coordinates: 27.69473, 84.42161 (Kamal Nagar Marg, Narayangarh)',
      directEnquiryNotice: 'Please use our verified landline phone +977 56-572060 or WhatsApp +977 9855055060 for all authentic stock and supply enquiries.',
    },
  },
};
