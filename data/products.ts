export interface ProductItem {
  id: string;
  slug: string;
  categoryId: string;
  brand?: string;
  name: {
    en: string;
    ne: string;
  };
  shortDesc: {
    en: string;
    ne: string;
  };
  description: {
    en: string;
    ne: string;
  };
  keyPoints: {
    en: string[];
    ne: string[];
  };
  enquiryOptions?: {
    en: string[];
    ne: string[];
  };
  image: {
    url: string;
    alt: {
      en: string;
      ne: string;
    };
    sourceLabel: string;
  };
  tags: string[];
}

export const PRODUCTS: ProductItem[] = [
  // 1. LABORATORY
  {
    id: 'lab-hematology-analyzer',
    slug: 'hematology-analyzer',
    categoryId: 'laboratory',
    name: {
      en: 'Hematology Analyzer',
      ne: 'हेमाटोलोजी एनालाइजर',
    },
    shortDesc: {
      en: 'Automated blood cell counter for complete blood count (CBC) testing in clinical laboratories.',
      ne: 'क्लिनिकल प्रयोगशालाहरूमा कम्प्लिट ब्लड काउन्ट (सीबीसी) जाँचका लागि स्वचालित रगत परीक्षण यन्त्र।',
    },
    description: {
      en: 'Automated hematology analyzer designed for clinical laboratory blood cell profiling and differential counting. Please contact our Narayangarh office to verify current model availability, reagent compatibility, and quotation terms.',
      ne: 'क्लिनिकल प्रयोगशालामा रगतका कोषहरू तथा सीबीसी परीक्षणका लागि उपयुक्त हेमाटोलोजी एनालाइजर। उपलब्ध मोडेल, रिअजेन्ट उपलब्धता र दररेट बुझ्न नारायणगढ कार्यालयमा फोन सम्पर्क गर्नुहोस्।',
    },
    keyPoints: {
      en: [
        'Automated CBC & 3-part / 5-part differential blood analysis',
        'Built-in display and automated sample aspiration',
        'Reagent compatibility and installation assistance on enquiry',
      ],
      ne: [
        'सीबीसी तथा ब्लड सेल परीक्षणका लागि उपयुक्त',
        'डिजिटल डिस्प्ले तथा स्वचालित नमुना विश्लेषण',
        'रिअजेन्ट तथा जडान सहजीकरणका लागि सोधपुछ गर्नुहोस्',
      ],
    },
    image: {
      url: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80',
      alt: {
        en: 'Illustrative photo of laboratory hematology analyzer equipment',
        ne: 'प्रयोगशाला हेमाटोलोजी एनालाइजर उपकरणको सांकेतिक तस्बिर',
      },
      sourceLabel: 'Photo via Unsplash (Illustrative representation)',
    },
    tags: ['hematology', 'cbc', 'blood analyzer', 'lab', 'हेमाटोलोजी', 'सीबीसी', 'रगत', 'ल्याब'],
  },
  {
    id: 'lab-biochemistry-analyzer',
    slug: 'biochemistry-analyzer',
    categoryId: 'laboratory',
    name: {
      en: 'Biochemistry Analyzer (Semi / Fully Automated)',
      ne: 'बायोकेमिस्ट्री एनालाइजर (सेमी / फुल्ली अटोमेटेड)',
    },
    shortDesc: {
      en: 'Clinical chemistry analyzer for liver function, renal panel, glucose, and lipid profile diagnostics.',
      ne: 'कलेजो, मिर्गौला, ग्लुकोज तथा लिपिड प्रोफाइल परीक्षणका लागि क्लिनिकल बायोकेमिस्ट्री विश्लेषक।',
    },
    description: {
      en: 'Essential clinical biochemistry analysis unit for routine hospital and diagnostic center testing. Contact Saphal Surgical House for available options, photometric filters, and consumable requirements.',
      ne: 'अस्पताल तथा डायग्नोस्टिक सेन्टरमा नियमित बायोकेमिकल परीक्षणका लागि प्रयोग हुने बायोकेमिस्ट्री एनालाइजर। उपलब्ध विकल्प र जानकारीका लागि सम्पर्क गर्नुहोस्।',
    },
    keyPoints: {
      en: [
        'Routine clinical chemistry testing (LFT, RFT, Sugar, Lipids)',
        'Built-in thermal printer and flow cell system',
        'Availability and training support to be confirmed on enquiry',
      ],
      ne: [
        'कलेजो, मिर्गौला, सुगर र लिपिड परीक्षणका लागि',
        'थर्मल प्रिन्टर तथा फ्लो सेल प्रणाली',
        'उपलब्धता तथा आवश्यक जानकारीका लागि फोन गर्नुहोस्',
      ],
    },
    image: {
      url: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=800&q=80',
      alt: {
        en: 'Illustrative photo of clinical biochemistry analyzer',
        ne: 'क्लिनिकल बायोकेमिस्ट्री विश्लेषक उपकरणको सांकेतिक तस्बिर',
      },
      sourceLabel: 'Photo via Unsplash (Illustrative representation)',
    },
    tags: ['biochemistry', 'lft', 'rft', 'chemistry analyzer', 'बायोकेमिस्ट्री', 'ल्याब', 'परीक्षण'],
  },
  {
    id: 'lab-electrolyte-analyzer',
    slug: 'electrolyte-analyzer',
    categoryId: 'laboratory',
    name: {
      en: 'Electrolyte Analyzer (ISE)',
      ne: 'इलेक्ट्रोलाइट एनालाइजर',
    },
    shortDesc: {
      en: 'Ion-selective electrode system for rapid measurement of Na+, K+, Cl-, and Ca++ in serum.',
      ne: 'रगतको सिरममा सोडियम, पोटासियम, क्लोराइड तथा क्याल्सियम नाप्ने आयन-सेलेक्टिभ इलेक्ट्रोड यन्त्र।',
    },
    description: {
      en: 'Direct ISE electrolyte analyzer suitable for emergency departments and hospital labs. Confirm electrode packs and calibrator stock by phone.',
      ne: 'आपतकालीन तथा नियमित ल्याब परीक्षणका लागि इलेक्ट्रोलाइट एनालाइजर। इलेक्ट्रोड प्याक तथा थप जानकारीका लागि फोन गर्नुहोस्।',
    },
    keyPoints: {
      en: ['Rapid electrolyte measurement (Na, K, Cl, iCa)', 'Low sample volume requirement', 'Direct telephone consultation for stock availability'],
      ne: ['द्रुत इलेक्ट्रोलाइट जाँच (सोडियम, पोटासियम, क्लोराइड)', 'थोरै नमुना परिमाण आवश्यक', 'मौज्दात तथा मूल्यका लागि सिधै फोन गर्नुहोस्'],
    },
    image: {
      url: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80',
      alt: {
        en: 'Illustrative photo of laboratory electrolyte testing instrument',
        ne: 'इलेक्ट्रोलाइट परीक्षण यन्त्रको सांकेतिक तस्बिर',
      },
      sourceLabel: 'Photo via Unsplash (Illustrative representation)',
    },
    tags: ['electrolyte', 'ise', 'sodium', 'potassium', 'इलेक्ट्रोलाइट', 'ल्याब'],
  },
  {
    id: 'lab-immunoassay-analyzer',
    slug: 'immunoassay-analyzer',
    categoryId: 'laboratory',
    name: {
      en: 'Immunoassay Analyzer (ELISA / CLIA / FIA)',
      ne: 'इम्युनोएस्से एनालाइजर',
    },
    shortDesc: {
      en: 'Diagnostic system for hormone, thyroid, infectious disease, and tumor marker profiling.',
      ne: 'हर्मोन, थाइरोइड, संक्रामक रोग तथा ट्युमर मार्कर परीक्षणका लागि इम्युनोएस्से विश्लेषक।',
    },
    description: {
      en: 'Laboratory diagnostic system for specialized immunoassay tests. Please call +977 56-572060 to verify current technical formats and platform availability.',
      ne: 'विशिष्ट इम्युनोएस्से तथा हर्मोन परीक्षणका लागि ल्याब विश्लेषक। उपलब्ध प्रविधि र मोडेलको जानकारीका लागि फोन गर्नुहोस्।',
    },
    keyPoints: {
      en: ['Thyroid, cardiac markers, fertility & infectious disease testing', 'High sensitivity diagnostic readout', 'Confirm operational specifications on enquiry'],
      ne: ['थाइरोइड, कार्डियाक मार्कर र हर्मोन परीक्षण', 'उच्च संवेदनशीलता डायग्नोस्टिक प्रणाली', 'विवरण बुझ्न सम्पर्क गर्नुहोस्'],
    },
    image: {
      url: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=800&q=80',
      alt: {
        en: 'Illustrative photo of laboratory immunoassay diagnostic platform',
        ne: 'इम्युनोएस्से डायग्नोस्टिक उपकरणको सांकेतिक तस्बिर',
      },
      sourceLabel: 'Photo via Unsplash (Illustrative representation)',
    },
    tags: ['immunoassay', 'elisa', 'clia', 'hormone', 'इम्युनोएस्से', 'थाइरोइड'],
  },
  {
    id: 'lab-urine-analyzer',
    slug: 'urine-analyzer',
    categoryId: 'laboratory',
    name: {
      en: 'Urine Chemistry Analyzer',
      ne: 'युरिन एनालाइजर',
    },
    shortDesc: {
      en: 'Automated test-strip reader for routine urine chemistry and urinalysis diagnostics.',
      ne: 'पिसाबमा ग्लुकोज, प्रोटिन तथा अन्य तत्वहरूको द्रुत जाँचका लागि स्वचालित स्ट्रिप रिडर।',
    },
    description: {
      en: 'Semi-automated urine test strip reader for fast, accurate routine urinalysis. Contact us to inquire about strip compatibility and unit pricing.',
      ne: 'नियमित पिसाब परीक्षणका लागि उपयोगी युरिन एनालाइजर। स्ट्रिप अनुकूलता तथा मूल्यका लागि सम्पर्क गर्नुहोस्।',
    },
    keyPoints: {
      en: ['10 / 11 / 14 parameter urine strip reading', 'Fast throughput for diagnostic laboratories', 'Call to confirm live availability'],
      ne: ['१० देखि १४ प्यारामिटर युरिन स्ट्रिप रिडिङ', 'द्रुत र भरपर्दो नतिजा', 'उपलब्धता बुझ्न सम्पर्क गर्नुहोस्'],
    },
    image: {
      url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
      alt: {
        en: 'Illustrative photo of clinical urine analyzer',
        ne: 'युरिन एनालाइजर उपकरणको सांकेतिक तस्बिर',
      },
      sourceLabel: 'Photo via Unsplash (Illustrative representation)',
    },
    tags: ['urine analyzer', 'urinalysis', 'strips', 'युरिन', 'पिसाब परीक्षण'],
  },
  {
    id: 'lab-microscope',
    slug: 'laboratory-microscope',
    categoryId: 'laboratory',
    name: {
      en: 'Binocular / Trinocular Laboratory Microscope',
      ne: 'प्रयोगशाला माइक्रोस्कोप (बाइनोकुलर / ट्राइनोकुलर)',
    },
    shortDesc: {
      en: 'High-clarity optical microscope for pathology, microbiology, and clinical slide examination.',
      ne: 'प्याथोलोजी, माइक्रोबायोलोजी तथा स्लाइड जाँचका लागि उच्च गुणस्तरको अप्टिकल माइक्रोस्कोप।',
    },
    description: {
      en: 'Precision optical microscope equipped with multi-objective lenses, LED illumination, and ergonomic mechanical stage. Contact us for binocular and digital trinocular options.',
      ne: 'अप्टिकल लेन्स, एलईडी लाइट तथा मेकानिकल स्टेजसहितको प्रयोगशाला माइक्रोस्कोप। बाइनोकुलर तथा ट्राइनोकुलर विकल्पहरूको सोधपुछका लागि फोन गर्नुहोस्।',
    },
    keyPoints: {
      en: ['Achromatic objectives: 4x, 10x, 40x, 100x (oil)', 'Coaxial coarse and fine focusing controls', 'Direct enquiry for pathology & student configurations'],
      ne: ['४x, १०x, ४०x र १००x लेन्स क्षमता', 'फाइन र कोर्स फोकस नियन्त्रण', 'प्याथोलोजी तथा क्लिनिकका लागि उपयुक्त'],
    },
    image: {
      url: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
      alt: {
        en: 'Illustrative photo of clinical laboratory microscope',
        ne: 'प्रयोगशाला माइक्रोस्कोपको सांकेतिक तस्बिर',
      },
      sourceLabel: 'Photo via Unsplash (Illustrative representation)',
    },
    tags: ['microscope', 'pathology', 'slides', 'माइक्रोस्कोप', 'ल्याब'],
  },
  {
    id: 'lab-centrifuge',
    slug: 'laboratory-centrifuge',
    categoryId: 'laboratory',
    name: {
      en: 'Clinical Laboratory Centrifuge',
      ne: 'सेन्ट्रिफ्यूज मेसिन',
    },
    shortDesc: {
      en: 'Benchtop centrifuge for separation of blood serum, plasma, and biological fluid samples.',
      ne: 'रगतको सिरम, प्लाज्मा तथा जैविक तरल पदार्थ छुट्याउन प्रयोग हुने सेन्ट्रिफ्यूज मेसिन।',
    },
    description: {
      en: 'Digital speed-controlled benchtop centrifuge with multi-tube rotor capacity. Please call our Narayangarh office to check available tube bucket sizes and RPM specifications.',
      ne: 'डिजिटल गति नियन्त्रणसहितको बेन्चटप सेन्ट्रिफ्यूज मेसिन। ट्युब क्षमता तथा आरपीएम विवरण बुझ्न फोन सम्पर्क गर्नुहोस्।',
    },
    keyPoints: {
      en: ['Variable RPM speed regulation with digital timer', 'Multi-tube angled rotor heads', 'Call for capacity and quotation details'],
      ne: ['डिजिटल टाइमर तथा गति नियन्त्रण', 'विभिन्न ट्युब साइज क्षमता', 'मूल्य तथा उपलब्ध मोडेल बुझ्न फोन गर्नुहोस्'],
    },
    image: {
      url: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=800&q=80',
      alt: {
        en: 'Illustrative photo of laboratory centrifuge machine',
        ne: 'सेन्ट्रिफ्यूज मेसिनको सांकेतिक तस्बिर',
      },
      sourceLabel: 'Photo via Unsplash (Illustrative representation)',
    },
    tags: ['centrifuge', 'serum', 'plasma', 'सेन्ट्रिफ्यूज', 'ल्याब'],
  },
  {
    id: 'lab-incubator-oven',
    slug: 'laboratory-incubator-hot-air-oven',
    categoryId: 'laboratory',
    name: {
      en: 'Laboratory Bacteriological Incubator & Hot-Air Oven',
      ne: 'इन्क्युबेटर तथा हट-एयर ओभन',
    },
    shortDesc: {
      en: 'Microprocessor temperature-controlled chambers for microbiological culture and dry heat sterilization.',
      ne: 'माइक्रोबायोलोजी कल्चर तथा सुक्खा ताप निसङ्क्रमणका लागि प्रयोग हुने इन्क्युबेटर र हट-एयर ओभन।',
    },
    description: {
      en: 'Bacteriological incubators and hot air ovens with digital PID temperature controllers and stainless steel chambers. Inquire for chamber volumes and delivery options.',
      ne: 'डिजिटल तापक्रम नियन्त्रकसहितको ब्याक्टेरियोलोजिकल इन्क्युबेटर तथा हट-एयर ओभन। साइज तथा क्षमता बुझ्न सम्पर्क गर्नुहोस्।',
    },
    keyPoints: {
      en: ['Digital temperature display with uniform air circulation', 'Heavy duty stainless steel interior', 'Confirm dimensions and power specs by phone'],
      ne: ['डिजिटल डिस्प्ले तथा समान ताप वितरण', 'स्टेनलेस स्टिल भित्री संरचना', 'साइज तथा स्पेसिफिकेसनका लागि सम्पर्क गर्नुहोस्'],
    },
    image: {
      url: 'https://images.unsplash.com/photo-1581093458791-9d58946cc552?auto=format&fit=crop&w=800&q=80',
      alt: {
        en: 'Illustrative photo of laboratory heating incubator and oven equipment',
        ne: 'ल्याब इन्क्युबेटर तथा ओभन उपकरणको सांकेतिक तस्बिर',
      },
      sourceLabel: 'Photo via Unsplash (Illustrative representation)',
    },
    tags: ['incubator', 'hot air oven', 'culture', 'इन्क्युबेटर', 'ओभन'],
  },
  {
    id: 'lab-water-bath-pipettes',
    slug: 'water-bath-micropipettes',
    categoryId: 'laboratory',
    name: {
      en: 'Laboratory Water Bath & Precision Micropipettes',
      ne: 'वाटर बाथ तथा माइक्रोपिपेट',
    },
    shortDesc: {
      en: 'Thermostatic water baths and adjustable volume micropipettes for accurate clinical liquid handling.',
      ne: 'थर्मोस्ट्याटिक वाटर बाथ र सटीक तरल मापनका लागि भोल्युम-समायोज्य माइक्रोपिपेटहरू।',
    },
    description: {
      en: 'Precision liquid handling tools and constant-temperature water baths for diagnostic sample preparation. Inquire for single-channel, multi-channel micropipettes and water bath capacities.',
      ne: 'सटीक ल्याब परीक्षणका लागि वाटर बाथ र विभिन्न क्षमताका माइक्रोपिपेटहरू। थप जानकारीका लागि सम्पर्क गर्नुहोस्।',
    },
    keyPoints: {
      en: ['Adjustable micropipettes (0.5µL to 1000µL / 5mL)', 'Digital thermostatic water bath baths', 'Call to verify live stock'],
      ne: ['समायोज्य माइक्रोपिपेट (विभिन्न क्षमता)', 'डिजिटल कन्ट्रोल वाटर बाथ', 'उपलब्धता बुझ्न फोन गर्नुहोस्'],
    },
    image: {
      url: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80',
      alt: {
        en: 'Illustrative photo of laboratory water bath and micropipettes',
        ne: 'वाटर बाथ तथा माइक्रोपिपेटको सांकेतिक तस्बिर',
      },
      sourceLabel: 'Photo via Unsplash (Illustrative representation)',
    },
    tags: ['micropipette', 'water bath', 'pipette', 'माइक्रोपिपेट', 'वाटर बाथ'],
  },
  {
    id: 'lab-refrigerator-tubes',
    slug: 'lab-refrigerator-specimen-containers',
    categoryId: 'laboratory',
    name: {
      en: 'Laboratory Refrigerators, Test Tubes & Specimen Containers',
      ne: 'ल्याब रेफ्रिजरेटर, टेस्ट ट्युब तथा नमुना कन्टेनर',
    },
    shortDesc: {
      en: 'Medical-grade cold storage, blood collection vacuum tubes (EDTA, Gel, Plain), and sterile specimen cups.',
      ne: 'मेडिकल कोल्ड स्टोरेज, भ्याक्युटेनर रगत संकलन ट्युब तथा जीवाणुरहित नमुना कन्टेनरहरू।',
    },
    description: {
      en: 'Temperature-monitored reagent refrigerators along with comprehensive blood collection tubes (EDTA, Clot Activator, Sodium Citrate) and urine/stool specimen containers. Bulk enquiries welcome.',
      ne: 'रिअजेन्ट सुरक्षित राख्ने मेडिकल फ्रिज, रगत संकलन ट्युब तथा नमुना कन्टेनरहरू। थोक तथा खुद्रा सोधपुछका लागि सम्पर्क गर्नुहोस्।',
    },
    keyPoints: {
      en: ['Vacuum blood collection tubes (EDTA, Plain, Fluoride, Gel)', 'Sterile urine & sputum containers', 'Call for bulk carton availability'],
      ne: ['विभिन्न रगत संकलन भ्याक्युम ट्युबहरू', 'जीवाणुरहित नमुना कन्टेनर', 'थोक मौज्दातका लागि फोन गर्नुहोस्'],
    },
    image: {
      url: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80',
      alt: {
        en: 'Illustrative photo of laboratory tubes, specimen containers and storage',
        ne: 'टेस्ट ट्युब, कन्टेनर तथा ल्याब भण्डारणको सांकेतिक तस्बिर',
      },
      sourceLabel: 'Photo via Unsplash (Illustrative representation)',
    },
    tags: ['test tubes', 'edta', 'containers', 'specimen', 'ल्याब रेफ्रिजरेटर', 'टेस्ट ट्युब'],
  },

  // 2. SURGICAL INSTRUMENTS
  {
    id: 'surg-scissors-forceps',
    slug: 'surgical-scissors-forceps',
    categoryId: 'surgical-instruments',
    name: {
      en: 'Surgical Scissors & Forceps (Dissecting / Tissue)',
      ne: 'शल्यक्रिया कैंची तथा फोर्सेप्स',
    },
    shortDesc: {
      en: 'High-grade stainless steel Mayo, Metzenbaum scissors, and plain/toothed tissue dissecting forceps.',
      ne: 'स्टेनलेस स्टिलबाट बनेका मायो, मेट्जेनबाम कैंची तथा टिस्यु फोर्सेप्सहरू।',
    },
    description: {
      en: 'Precision surgical dissecting scissors (straight and curved) and tissue-holding forceps forged from medical-grade stainless steel. Call to check sizes and set combinations.',
      ne: 'शल्यक्रिया तथा ड्रेसिङमा प्रयोग हुने विभिन्न साइजका कैंची तथा फोर्सेप्सहरू। आवश्यक साइज र विवरणका लागि सम्पर्क गर्नुहोस्।',
    },
    keyPoints: {
      en: ['Corrosion-resistant medical stainless steel', 'Straight and curved scissor profiles', 'Fine, plain, and tooth-tipped forceps'],
      ne: ['खिया नलाग्ने गुणस्तरीय मेडिकल स्टिल', 'सिधा तथा घुमाउरो कैंचीहरू', 'टुथ र प्लेन फोर्सेप्स उपलब्ध'],
    },
    image: {
      url: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
      alt: {
        en: 'Illustrative photo of surgical scissors and forceps',
        ne: 'शल्यक्रिया कैंची तथा फोर्सेप्सको सांकेतिक तस्बिर',
      },
      sourceLabel: 'Photo via Unsplash (Illustrative representation)',
    },
    tags: ['surgical scissors', 'forceps', 'mayo', 'metzenbaum', 'सर्जिकल कैंची', 'फोर्सेप्स', 'औजार'],
  },
  {
    id: 'surg-clamps-needle-holders',
    slug: 'hemostatic-clamps-needle-holders',
    categoryId: 'surgical-instruments',
    name: {
      en: 'Hemostatic Clamps & Needle Holders (Artery Forceps)',
      ne: 'हेमोस्ट्याटिक क्ल्याम्प तथा निडल होल्डर (धमनी फोर्सेप्स)',
    },
    shortDesc: {
      en: 'Kelly, Crile, and Mosquito artery forceps with Mayo-Hegar suture needle holders.',
      ne: 'केली, क्राइल, मस्किटो आर्टरी फोर्सेप्स तथा मायो-हेगर स्युचर निडल होल्डरहरू।',
    },
    description: {
      en: 'Essential surgical hemostatic clamps and tungsten-carbide / stainless steel needle drivers for minor and major surgical procedures. Contact for specific length options.',
      ne: 'रक्तस्राव रोक्न र टाँका लगाउन प्रयोग हुने आर्टरी फोर्सेप्स तथा निडल होल्डरहरू। लम्बाइ र विकल्प बुझ्न सम्पर्क गर्नुहोस्।',
    },
    keyPoints: {
      en: ['Locking ratchet mechanism for secure grip', 'Straight & curved artery forceps', 'Tungsten carbide and stainless steel jaws'],
      ne: ['बलियो लकिङ प्रणाली', 'सिधा र घुमाउरो आर्टरी फोर्सेप्स', 'टाँका लगाउन उपयुक्त निडल होल्डर'],
    },
    image: {
      url: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
      alt: {
        en: 'Illustrative photo of hemostatic clamps and needle holders',
        ne: 'हेमोस्ट्याटिक क्ल्याम्प र निडल होल्डरको सांकेतिक तस्बिर',
      },
      sourceLabel: 'Photo via Unsplash (Illustrative representation)',
    },
    tags: ['artery forceps', 'needle holder', 'clamp', 'hemostat', 'क्ल्याम्प', 'निडल होल्डर'],
  },
  {
    id: 'surg-retractors-scalpels',
    slug: 'surgical-retractors-scalpels-sets',
    categoryId: 'surgical-instruments',
    name: {
      en: 'Surgical Retractors, Scalpel Handles & Instrument Sets',
      ne: 'सर्जिकल रिट्रयाक्टर, स्काल्पेल ह्यान्डल तथा औजार सेटहरू',
    },
    shortDesc: {
      en: 'Handheld tissue retractors, scalpel blade handles (#3, #4), and complete minor/major surgical trays.',
      ne: 'ह्यान्डहेल्ड रिट्रयाक्टर, स्काल्पेल ह्यान्डल (नम्बर ३, ४) तथा माइनर/मेजर सर्जिकल सेटहरू।',
    },
    description: {
      en: 'Comprehensive surgical sets including Langenbeck/Army-Navy retractors, scalpel handles, probe directors, and custom minor procedure trays. Call to discuss custom hospital set configurations.',
      ne: 'विभिन्न रिट्रयाक्टर, स्काल्पेल ह्यान्डल तथा क्लिनिकल शल्यक्रियाका लागि तयार गरिएका बेसिक इन्स्ट्रुमेन्ट सेटहरू। थप जानकारीका लागि सम्पर्क गर्नुहोस्।',
    },
    keyPoints: {
      en: ['Minor surgical sets, suture removal sets, delivery sets', 'Scalpel handles #3 and #4', 'Standard stainless steel sterilization trays'],
      ne: ['माइनर सर्जरी सेट, स्युचर रिमुभल सेट, डेलिभरी सेट', 'स्काल्पेल ह्यान्डल ३ र ४', 'स्टेरिलाइजेसन ट्रे सहित'],
    },
    image: {
      url: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
      alt: {
        en: 'Illustrative photo of surgical retractors and instrument sets',
        ne: 'सर्जिकल रिट्रयाक्टर र औजार सेटको सांकेतिक तस्बिर',
      },
      sourceLabel: 'Photo via Unsplash (Illustrative representation)',
    },
    tags: ['retractor', 'scalpel', 'surgical set', 'trays', 'रिट्रयाक्टर', 'स्काल्पेल', 'सर्जिकल सेट'],
  },

  // 3. STERILIZATION
  {
    id: 'steril-autoclaves',
    slug: 'autoclaves-steam-sterilizers',
    categoryId: 'sterilization',
    name: {
      en: 'Autoclaves & Steam Sterilizers (Vertical / Tabletop)',
      ne: 'अटोक्लेभ तथा स्टिम स्टेरिलाइजर (भर्टिकल / टेबलटप)',
    },
    shortDesc: {
      en: 'High-pressure steam autoclaves for sterilizing surgical instruments, dressings, and laboratory glassware.',
      ne: 'शल्यक्रिया औजार, ड्रेसिङ तथा प्रयोगशालाका सामान निसङ्क्रमण गर्ने उच्च चापीय अटोक्लेभ मेसिन।',
    },
    description: {
      en: 'Electric vertical and tabletop front-loading autoclaves engineered for clinic and hospital sterilization protocols. Contact us to confirm chamber capacities (e.g. 18L, 24L, 50L) and heating features.',
      ne: 'क्लिनिक तथा अस्पतालका लागि उपयोगी भर्टिकल र टेबलटप अटोक्लेभहरू। क्षमता (लिटर) र विशेषता बुझ्न फोन सम्पर्क गर्नुहोस्।',
    },
    keyPoints: {
      en: ['Pressure safety valve and temperature gauge', 'Stainless steel sterilization drum/chamber', 'Call to verify capacity options & prices'],
      ne: ['सुरक्षा भल्भ तथा प्रेसर गज', 'स्टेनलेस स्टिल चेम्बर', 'विभिन्न क्षमता र मूल्य बुझ्न सम्पर्क गर्नुहोस्'],
    },
    image: {
      url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
      alt: {
        en: 'Illustrative photo of medical autoclave sterilizer',
        ne: 'मेडिकल अटोक्लेभ स्टेरिलाइजरको सांकेतिक तस्बिर',
      },
      sourceLabel: 'Photo via Unsplash (Illustrative representation)',
    },
    tags: ['autoclave', 'sterilizer', 'steam', 'अटोक्लेभ', 'स्टेरिलाइजर', 'निसङ्क्रमण'],
  },
  {
    id: 'steril-pouches-indicators',
    slug: 'sterilization-pouches-indicator-supplies',
    categoryId: 'sterilization',
    name: {
      en: 'Sterilization Pouches, Rolls & Chemical Indicator Tapes',
      ne: 'स्टेरिलाइजेसन पाउच, रोल तथा इन्डिकेटर टेप',
    },
    shortDesc: {
      en: 'Self-sealing and heat-sealing sterilization pouches with chemical indicators for autoclave cycles.',
      ne: 'अटोक्लेभमा औजार सुरक्षित राख्न प्रयोग हुने सेल्फ-सिलिङ पाउच, रोल तथा केमिकल इन्डिकेटर टेप।',
    },
    description: {
      en: 'Medical-grade paper and film sterilization rolls, self-adhesive pouches, and steam/ETO chemical indicator tapes to verify sterilization efficacy. Inquire for size rolls.',
      ne: 'विभिन्न साइजका स्टेरिलाइजेसन पाउच, रोल तथा स्टिम इन्डिकेटर स्ट्रिप/टेपहरू। थोक तथा खुद्रा दररेटका लागि सम्पर्क गर्नुहोस्।',
    },
    keyPoints: {
      en: ['Self-sealing pouches in multiple sizes', 'Steam and gas chemical indicators', 'Call for carton pricing and availability'],
      ne: ['विभिन्न साइजका सेल्फ-सिलिङ पाउच', 'स्टिम इन्डिकेटर टेप तथा स्ट्रिप', 'थोक मूल्य बुझ्न फोन गर्नुहोस्'],
    },
    image: {
      url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
      alt: {
        en: 'Illustrative photo of sterilization packaging supplies and indicator tape',
        ne: 'स्टेरिलाइजेसन पाउच तथा इन्डिकेटर टेपको सांकेतिक तस्बिर',
      },
      sourceLabel: 'Photo via Unsplash (Illustrative representation)',
    },
    tags: ['sterilization pouch', 'autoclave tape', 'indicators', 'पाउच', 'इन्डिकेटर टेप'],
  },

  // 4. MONITORING AND DIAGNOSTICS
  {
    id: 'diag-patient-monitors',
    slug: 'patient-monitors-ecg-machines',
    categoryId: 'monitoring-diagnostics',
    name: {
      en: 'Multi-Parameter Patient Monitors & ECG Machines',
      ne: 'मल्टी-प्यारामिटर बिरामी मोनिटर तथा ईसीजी मेसिन',
    },
    shortDesc: {
      en: 'Bedside ICU/OT patient vital signs monitors (ECG, SpO2, NIBP, Temp) and 3/12-channel ECG machines.',
      ne: 'आईसीयू तथा ओटीमा बिरामीको मुटुको चाल, अक्सिजन र रक्तचाप हेर्ने मोनिटर तथा ईसीजी यन्त्र।',
    },
    description: {
      en: 'Hospital-grade multi-parameter vital signs monitors and portable ECG recording units with digital waveform analysis. Contact us for screen sizes and lead configurations.',
      ne: 'अस्पताल तथा क्लिनिकका लागि बिरामी मोनिटर र ईसीजी मेसिन। उपलब्ध स्क्रिन साइज र फिचर बुझ्न फोन सम्पर्क गर्नुहोस्।',
    },
    keyPoints: {
      en: ['Standard 5-parameter & 6-parameter monitoring', 'Audio-visual alarms and rechargeable battery backup', '3-channel and 12-channel ECG options on enquiry'],
      ne: ['ईसीजी, अक्सिजन, रक्तचाप, तापक्रम मोनिटरिङ', 'अलार्म तथा ब्याट्री ब्याकअप', '३ र १२ च्यानल ईसीजी विकल्पहरू'],
    },
    image: {
      url: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
      alt: {
        en: 'Illustrative photo of hospital multi-parameter patient monitor',
        ne: 'बिरामी मोनिटर उपकरणको सांकेतिक तस्बिर',
      },
      sourceLabel: 'Photo via Unsplash (Illustrative representation)',
    },
    tags: ['patient monitor', 'ecg', 'icu', 'vitals', 'बिरामी मोनिटर', 'ईसीजी', 'मोनिटरिङ'],
  },
  {
    id: 'diag-oximeters-bp-glucometer',
    slug: 'pulse-oximeters-bp-monitors-thermometers',
    categoryId: 'monitoring-diagnostics',
    name: {
      en: 'Pulse Oximeters, BP Monitors, Thermometers & Glucometers',
      ne: 'पल्स अक्सिमिटर, बीपी मोनिटर, थर्मोमिटर तथा ग्लुकोमिटर',
    },
    shortDesc: {
      en: 'Fingertip pulse oximeters, digital/mercury BP machines, infrared thermometers, and blood glucose meters.',
      ne: 'औंलामा लगाउने अक्सिमिटर, डिजिटल/म्यानुअल रक्तचाप नाप्ने यन्त्र, थर्मोमिटर र सुगर नाप्ने ग्लुकोमिटर।',
    },
    description: {
      en: 'Compact clinical and home diagnostic essentials including SpO2 pulse oximeters, aneroid and digital blood pressure monitors, non-contact infrared thermometers, and glucose test kits. Inquire for bulk clinic packages.',
      ne: 'क्लिनिक तथा घरमै स्वास्थ्य जाँचका लागि आवश्यक अक्सिमिटर, रक्तचाप मेसिन, डिजिटल थर्मोमिटर तथा ग्लुकोमिटर। थोक तथा खुद्रा सोधपुछका लागि सम्पर्क गर्नुहोस्।',
    },
    keyPoints: {
      en: ['Fingertip SpO2 & pulse rate display', 'Upper arm digital and aneroid BP monitors', 'Non-contact infrared & digital thermometers'],
      ne: ['सटीक अक्सिजन तथा पल्स दर मापन', 'डिजिटल तथा म्यानुअल बीपी मोनिटर', 'इन्फ्रारेड तथा डिजिटल थर्मोमिटर'],
    },
    image: {
      url: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
      alt: {
        en: 'Illustrative photo of pulse oximeter and diagnostic monitoring devices',
        ne: 'पल्स अक्सिमिटर तथा डायग्नोस्टिक उपकरणको सांकेतिक तस्बिर',
      },
      sourceLabel: 'Photo via Unsplash (Illustrative representation)',
    },
    tags: ['oximeter', 'bp monitor', 'thermometer', 'glucometer', 'पल्स अक्सिमिटर', 'रक्तचाप', 'सुगर'],
  },

  // 5. RESPIRATORY CARE
  {
    id: 'resp-oxygen-concentrators',
    slug: 'oxygen-concentrators-regulators',
    categoryId: 'respiratory-care',
    name: {
      en: 'Medical Oxygen Concentrators & Cylinder Regulators',
      ne: 'अक्सिजन कन्सेन्ट्रेटर तथा सिलिन्डर रेगुलेटर',
    },
    shortDesc: {
      en: 'Continuous-flow medical oxygen generators (5L / 10L) and precision cylinder flowmeter regulators.',
      ne: '५ लिटर तथा १० लिटर क्षमताका अक्सिजन कन्सेन्ट्रेटर र अक्सिजन सिलिन्डर रेगुलेटरहरू।',
    },
    description: {
      en: 'High-purity oxygen concentrator units designed for clinical wards and home patient respiratory therapy, along with robust medical oxygen regulators and humidifier bottles. Inquire for availability and flow capacity.',
      ne: 'अस्पताल तथा घरमै अक्सिजन थेरापीका लागि उपयुक्त अक्सिजन कन्सेन्ट्रेटर र सिलिन्डर रेगुलेटर/फ्लोमिटर। मौज्दात र दररेट बुझ्न सम्पर्क गर्नुहोस्।',
    },
    keyPoints: {
      en: ['5LPM and 10LPM high-purity oxygen flow', 'Medical cylinder regulators with humidifiers', 'Call to confirm unit stock and accessories'],
      ne: ['५ र १० लिटर प्रतिमिनेट अक्सिजन क्षमता', 'ह्युमिडिफायर सहितको सिलिन्डर रेगुलेटर', 'उपलब्धता र दररेटका लागि फोन गर्नुहोस्'],
    },
    image: {
      url: 'https://images.unsplash.com/photo-1583912267670-6575ad373678?auto=format&fit=crop&w=800&q=80',
      alt: {
        en: 'Illustrative photo of medical oxygen concentrator',
        ne: 'मेडिकल अक्सिजन कन्सेन्ट्रेटरको सांकेतिक तस्बिर',
      },
      sourceLabel: 'Photo via Unsplash (Illustrative representation)',
    },
    tags: ['oxygen concentrator', 'oxygen regulator', 'respiratory', 'अक्सिजन', 'कन्सेन्ट्रेटर', 'रेगुलेटर'],
  },
  {
    id: 'resp-nebulizers-suction',
    slug: 'medical-nebulizers-suction-machines',
    categoryId: 'respiratory-care',
    name: {
      en: 'Medical Nebulizers & Suction Machines',
      ne: 'नेबुलाइजर मेसिन तथा सक्सन मेसिन',
    },
    shortDesc: {
      en: 'Compressor nebulizers for aerosol medication delivery and electric surgical/phlegm suction machines.',
      ne: 'श्वासप्रश्वास औषधिका लागि कम्प्रेसर नेबुलाइजर तथा खकार/तरल तान्न प्रयोग हुने सक्सन मेसिन।',
    },
    description: {
      en: 'Aerosol compressor nebulizers for asthma and COPD medication, paired with high-vacuum electric suction units for clinical fluid aspiration. Contact us for technical details and replacement masks/tubing.',
      ne: 'दम तथा श्वासप्रश्वासका बिरामीका लागि नेबुलाइजर मेसिन र क्लिनिकल सक्सन मेसिनहरू। थप जानकारीका लागि सम्पर्क गर्नुहोस्।',
    },
    keyPoints: {
      en: ['Piston compressor nebulizer with adult & pediatric masks', 'Portable and hospital-grade electric suction units', 'Call for live stock and price negotiation'],
      ne: ['बालबालिका र वयस्कका लागि नेबुलाइजर मास्क सहित', 'पोर्टेबल तथा अस्पताल सक्सन मेसिन', 'सोधपुछका लागि सिधै फोन गर्नुहोस्'],
    },
    image: {
      url: 'https://images.unsplash.com/photo-1583912267670-6575ad373678?auto=format&fit=crop&w=800&q=80',
      alt: {
        en: 'Illustrative photo of medical nebulizer and suction equipment',
        ne: 'नेबुलाइजर तथा सक्सन उपकरणको सांकेतिक तस्बिर',
      },
      sourceLabel: 'Photo via Unsplash (Illustrative representation)',
    },
    tags: ['nebulizer', 'suction machine', 'respiratory', 'नेबुलाइजर', 'सक्सन मेसिन'],
  },

  // 6. HOSPITAL FURNITURE
  {
    id: 'furn-beds-couches',
    slug: 'hospital-beds-examination-couches',
    categoryId: 'hospital-furniture',
    name: {
      en: 'Hospital Patient Beds & Examination Couches',
      ne: 'अस्पताल बिरामी बेड तथा परीक्षण काउच',
    },
    shortDesc: {
      en: 'Manual crank and semi-fowler hospital beds with side rails, plus clinical patient examination couches.',
      ne: 'साइड रेलसहितका म्यानुअल तथा सेमी-फाउलर अस्पताल बेड र क्लिनिकल जाँच काउच/टेबल।',
    },
    description: {
      en: 'Durable steel-framed hospital patient beds, Fowler and semi-Fowler adjustable beds, and examination tables with upholstered foam tops. Contact our team to confirm dimensions and delivery arrangements.',
      ne: 'मजबुत स्टिल फ्रेम भएका बिरामी बेड, एडजस्टेबल बेड तथा डाक्टर जाँच टेबल/काउचहरू। साइज तथा डेलिभरी विवरणका लागि सम्पर्क गर्नुहोस्।',
    },
    keyPoints: {
      en: ['Semi-Fowler and full Fowler adjustable backrest/kneerest', 'Collapsible safety side rails and IV pole attachments', 'Call to discuss institutional requirements'],
      ne: ['ब्याकरेस्ट तथा खुट्टा उठाउन मिल्ने समायोज्य बेड', 'सुरक्षा रेल तथा आईभी स्ट्यान्ड राख्ने सुविधा', 'अस्पताल तथा क्लिनिकका लागि सोधपुछ गर्नुहोस्'],
    },
    image: {
      url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
      alt: {
        en: 'Illustrative photo of hospital patient bed furniture',
        ne: 'अस्पताल बिरामी बेडको सांकेतिक तस्बिर',
      },
      sourceLabel: 'Photo via Unsplash (Illustrative representation)',
    },
    tags: ['hospital bed', 'examination table', 'couch', 'fowler bed', 'अस्पताल बेड', 'परीक्षण टेबल'],
  },
  {
    id: 'furn-wheelchairs-trolleys-iv',
    slug: 'wheelchairs-trolleys-stretchers-iv-stands',
    categoryId: 'hospital-furniture',
    name: {
      en: 'Wheelchairs, Medical Trolleys, Stretchers & IV Stands',
      ne: 'ह्विलचेयर, मेडिकल ट्रली, स्ट्रेचर तथा आईभी स्ट्यान्ड',
    },
    shortDesc: {
      en: 'Folding patient wheelchairs, stainless steel dressing trolleys, emergency stretchers, and mobile IV stands.',
      ne: 'फोल्डिङ ह्विलचेयर, स्टेनलेस स्टिल ड्रेसिङ ट्रली, आकस्मिक स्ट्रेचर र आईभी ड्रिप स्ट्यान्ड।',
    },
    description: {
      en: 'Mobility and hospital utility solutions including chrome/powder-coated wheelchairs, mobile emergency stretchers, instrument trolleys, and height-adjustable IV drip poles. Inquire for options.',
      ne: 'बिरामी ओसारपसार तथा क्लिनिकल प्रयोगका लागि ह्विलचेयर, स्ट्रेचर, ड्रेसिङ ट्रली तथा आईभी स्ट्यान्डहरू। उपलब्धता बुझ्न सम्पर्क गर्नुहोस्।',
    },
    keyPoints: {
      en: ['Foldable lightweight and standard wheelchairs', 'Stainless steel instrument and medication trolleys', 'Heavy base height-adjustable IV stands'],
      ne: ['फोल्ड गर्न मिल्ने आरामदायी ह्विलचेयर', 'स्टेनलेस स्टिल ड्रेसिङ र इन्स्ट्रुमेन्ट ट्रली', 'उचाइ मिलाउन मिल्ने आईभी स्ट्यान्ड'],
    },
    image: {
      url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
      alt: {
        en: 'Illustrative photo of wheelchair and hospital mobile furniture',
        ne: 'ह्विलचेयर तथा अस्पताल फर्निचरको सांकेतिक तस्बिर',
      },
      sourceLabel: 'Photo via Unsplash (Illustrative representation)',
    },
    tags: ['wheelchair', 'trolley', 'stretcher', 'iv stand', 'ह्विलचेयर', 'ट्रली', 'स्ट्रेचर', 'आईभी स्ट्यान्ड'],
  },

  // 7. CONSUMABLES AND PPE
  {
    id: 'cons-gloves-masks-gowns',
    slug: 'medical-gloves-masks-disposable-gowns',
    categoryId: 'consumables-ppe',
    name: {
      en: 'Medical Gloves, 3-Ply Masks & Disposable Surgical Gowns',
      ne: 'मेडिकल पञ्जा, ३-प्लाई मास्क तथा डिस्पोजेबल सर्जिकल गाउन',
    },
    shortDesc: {
      en: 'Latex/Nitrile examination gloves, sterile surgical gloves, 3-ply meltblown masks, and non-woven gowns.',
      ne: 'लेटेक्स तथा नाइट्राइल पञ्जा, जीवाणुरहित सर्जिकल पञ्जा, ३-प्लाई मास्क र डिस्पोजेबल गाउन।',
    },
    description: {
      en: 'Daily infection prevention consumables including powdered/powder-free examination gloves, surgical sterile gloves, medical face masks, surgical drapes, and disposable protective gowns. Wholesale carton pricing on enquiry.',
      ne: 'दैनिक स्वास्थ्य सेवामा चाहिने एक्जामिनेसन र सर्जिकल पञ्जा, मेडिकल मास्क, क्याप र डिस्पोजेबल गाउनहरू। थोक खरिदका लागि सम्पर्क गर्नुहोस्।',
    },
    keyPoints: {
      en: ['Latex & Nitrile gloves (Small, Medium, Large)', 'BFE certified 3-ply disposable surgical masks', 'Bulk wholesale carton supplies on enquiry'],
      ne: ['लेटेक्स र नाइट्राइल पञ्जा (विभिन्न साइज)', '३-प्लाई सर्जिकल फेस मास्क', 'थोक कार्टन उपलब्धताबारे फोन गर्नुहोस्'],
    },
    image: {
      url: 'https://images.unsplash.com/photo-1584744982491-665216d95f8b?auto=format&fit=crop&w=800&q=80',
      alt: {
        en: 'Illustrative photo of medical gloves, masks, and disposable supplies',
        ne: 'मेडिकल पञ्जा, मास्क र डिस्पोजेबल सामग्रीको सांकेतिक तस्बिर',
      },
      sourceLabel: 'Photo via Unsplash (Illustrative representation)',
    },
    tags: ['gloves', 'masks', 'gowns', 'ppe', 'पञ्जा', 'मास्क', 'गाउन', 'उपभोग्य सामग्री'],
  },
  {
    id: 'cons-syringes-cannulas-dressings',
    slug: 'syringes-iv-cannulas-catheters-gauze-dressings',
    categoryId: 'consumables-ppe',
    name: {
      en: 'Syringes, IV Cannulas, Catheters & Gauze Bandages',
      ne: 'सिरिन्ज, आईभी क्यानुला, क्याथेटर तथा गज ब्यान्डेज',
    },
    shortDesc: {
      en: 'Disposable syringes (1ml to 50ml), IV infusion sets, Foley catheters, absorbent cotton, and rolled gauze bandages.',
      ne: 'डिस्पोजेबल सिरिन्ज, आईभी क्यानुला, क्याथेटर, कटन, गज ब्यान्डेज र ड्रेसिङ सामग्री।',
    },
    description: {
      en: 'High-turnover clinical disposables including luer-lock disposable syringes, color-coded IV cannulas (18G to 24G), Foley urinary catheters, sterile gauze swabs, and elastic crepe bandages. Call for supply availability.',
      ne: 'नियमित प्रयोग हुने विभिन्न साइजका सिरिन्ज, आईभी क्यानुला, फ Foley क्याथेटर, कटन, गज र ब्यान्डेजहरू। आवश्यक परिमाण बुझ्न सम्पर्क गर्नुहोस्।',
    },
    keyPoints: {
      en: ['Sterile disposable syringes (2ml, 5ml, 10ml, 20ml, 50ml)', 'IV cannulas with injection port (18G, 20G, 22G, 24G)', 'Absorbent cotton wool and roller gauze bandages'],
      ne: ['विभिन्न साइजका सिरिन्ज र सुईहरू', 'आईभी क्यानुला तथा इन्फ्युजन सेट', 'कटन, रोल ब्यान्डेज र ड्रेसिङ गज'],
    },
    image: {
      url: 'https://images.unsplash.com/photo-1584744982491-665216d95f8b?auto=format&fit=crop&w=800&q=80',
      alt: {
        en: 'Illustrative photo of medical syringes, cannulas and bandages',
        ne: 'सिरिन्ज, क्यानुला तथा ब्यान्डेजको सांकेतिक तस्बिर',
      },
      sourceLabel: 'Photo via Unsplash (Illustrative representation)',
    },
    tags: ['syringes', 'iv cannula', 'catheter', 'gauze', 'bandages', 'सिरिन्ज', 'क्यानुला', 'ब्यान्डेज', 'ड्रेसिङ'],
  },

  // 8. REHABILITATION AND HOME CARE
  {
    id: 'rehab-walkers-crutches-supports',
    slug: 'walkers-crutches-orthopedic-supports',
    categoryId: 'rehabilitation-home-care',
    name: {
      en: 'Walkers, Crutches, Walking Sticks & Orthopedic Supports',
      ne: 'वाकर, वैशाखी, वाकिङ स्टिक तथा अर्थोपेडिक सपोर्ट',
    },
    shortDesc: {
      en: 'Adjustable aluminum walking frames, elbow/underarm crutches, cervical collars, and lumbar support belts.',
      ne: 'समायोज्य आल्मुनियम वाकर, वैशाखी, वाकिङ स्टिक, कम्मरको बेल्ट र नेक कलर।',
    },
    description: {
      en: 'Patient rehabilitation aids for post-surgical recovery, elderly mobility, and injury rehabilitation. Includes lightweight foldable walkers, height-adjustable crutches, knee braces, and abdominal support belts. Call for sizing.',
      ne: 'शल्यक्रियापछिको स्वास्थ्य लाभ तथा हिँडडुलमा सहयोग पुर्‍याउने वाकर, वैशाखी, वाकिङ स्टिक, घुँडा तथा कम्मरको बेल्टहरू। साइज र विवरणका लागि फोन गर्नुहोस्।',
    },
    keyPoints: {
      en: ['Height adjustable aluminum folding walkers', 'Underarm and elbow crutches', 'Lumbar sacro belts, knee braces, and cervical collars'],
      ne: ['उचाइ मिलाउन मिल्ने फोल्डिङ वाकर', 'अन्डरआर्म तथा एल्बो वैशाखी', 'ढाडको बेल्ट, नि-ब्रेस र नेक कलर'],
    },
    image: {
      url: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
      alt: {
        en: 'Illustrative photo of rehabilitation mobility aids and supports',
        ne: 'पुनर्स्थापना तथा मोबिलिटी सहायक उपकरणको सांकेतिक तस्बिर',
      },
      sourceLabel: 'Photo via Unsplash (Illustrative representation)',
    },
    tags: ['walker', 'crutches', 'orthopedic', 'belts', 'braces', 'वाकर', 'वैशाखी', 'बेल्ट', 'अर्थोपेडिक'],
  },
  {
    id: 'rehab-air-mattress-commode',
    slug: 'air-mattresses-commode-chairs',
    categoryId: 'rehabilitation-home-care',
    name: {
      en: 'Anti-Decubitus Air Mattresses & Commode Chairs',
      ne: 'एंटी-बेडसोर एयर म्याट्रेस तथा कमोड चेयर',
    },
    shortDesc: {
      en: 'Alternating pressure bubble air mattresses for bed-sore prevention, plus folding commode chairs.',
      ne: 'लामो समय ओछ्यानमा रहने बिरामीका लागि घाउ (बेडसोर) रोकथाम गर्ने एयर म्याट्रेस र कमोड चेयर।',
    },
    description: {
      en: 'Home-care nursing solutions for bedridden and mobility-impaired patients, featuring motor-driven alternating pressure air mattresses to prevent pressure ulcers, and foldable bedside commode chairs. Inquire for availability.',
      ne: 'दीर्घ बिरामीहरूको हेरचाहका लागि एयर पम्पसहितको एंटी-बेडसोर एयर म्याट्रेस र फोल्डिङ कमोड चेयर। मूल्य तथा मौज्दात बुझ्न सम्पर्क गर्नुहोस्।',
    },
    keyPoints: {
      en: ['Alternating bubble cell air mattress with quiet electric compressor pump', 'Bed-sore prevention for long-term patient care', 'Folding commode chair with removable pan'],
      ne: ['विद्युतीय पम्पसहितको एयर म्याट्रेस', 'बेडसोर (घाउ) हुनबाट बचाउन सहयोगी', 'सफा गर्न सजिलो फोल्डिङ कमोड चेयर'],
    },
    image: {
      url: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
      alt: {
        en: 'Illustrative photo of patient home care air mattress and assistive chair',
        ne: 'एयर म्याट्रेस तथा होम केयर उपकरणको सांकेतिक तस्बिर',
      },
      sourceLabel: 'Photo via Unsplash (Illustrative representation)',
    },
    tags: ['air mattress', 'commode chair', 'bed sore', 'home care', 'एयर म्याट्रेस', 'कमोड चेयर', 'होम केयर'],
  },

  // 9. OPERATING THEATRE (OT) SUPPLIES
  {
    id: 'ot-gowns-drapes-packs',
    slug: 'sterile-surgical-gowns-drapes-ot-packs',
    categoryId: 'ot-supplies',
    name: {
      en: 'Sterile Surgical Gowns, Drapes & OT Procedure Packs',
      ne: 'स्टेराइल सर्जिकल गाउन, ड्रेप्स तथा ओटी प्याक',
    },
    shortDesc: {
      en: 'Reinforced fluid-resistant surgeon gowns, sterile surgical drapes, and specialized procedure drape packs.',
      ne: 'रगत तथा तरल प्रतिरोधी सर्जिकल गाउन, स्टेराइल शल्यक्रिया ड्रेप्स र ओटी प्रोसिजर प्याकहरू।',
    },
    description: {
      en: 'High-barrier disposable non-woven surgical gowns, sterile surgical drapes with adhesive aperture, and custom OT linen packs designed for surgical sterility. Contact us to inquire about specific drape sets and sizes.',
      ne: 'शल्यक्रिया कक्षका लागि आवश्यक उच्चस्तरीय तरल प्रतिरोधी गाउन, ड्रेप्स र स्टेराइल कपडाहरू। आवश्यक साइज तथा प्याकिङका लागि सम्पर्क गर्नुहोस्।',
    },
    keyPoints: {
      en: ['SMS/SMMS reinforced fluid-resistant surgical gowns', 'Adhesive surgical drape sheets and aperture towels', 'Bulk hospital carton supply on enquiry'],
      ne: ['फ्लुइड-प्रतिरोधी सर्जिकल गाउन', 'टाँस्ने स्टेराइल ड्रेप्स र टावेलहरू', 'अस्पतालका लागि थोक उपलब्धताबारे फोन गर्नुहोस्'],
    },
    image: {
      url: 'https://images.unsplash.com/photo-1584744982491-665216d95f8b?auto=format&fit=crop&w=800&q=80',
      alt: {
        en: 'Illustrative photo of sterile surgical gowns and OT textiles',
        ne: 'सर्जिकल गाउन तथा ओटी ड्रेप्सको सांकेतिक तस्बिर',
      },
      sourceLabel: 'Photo via Unsplash (Illustrative representation)',
    },
    tags: ['surgical gowns', 'ot drapes', 'sterile drape', 'ot packs', 'सर्जिकल गाउन', 'ड्रेप्स', 'ओटी सामग्री'],
  },
  {
    id: 'ot-sutures-blades-accessories',
    slug: 'surgical-sutures-sterile-blades',
    categoryId: 'ot-supplies',
    name: {
      en: 'Surgical Sutures & Sterile Carbon / Stainless Blades',
      ne: 'सर्जिकल सुचर धागो तथा स्टेराइल ब्लेड',
    },
    shortDesc: {
      en: 'Absorbable (PGA, Catgut) and non-absorbable (Silk, Nylon) sutures with sterile surgical blades (#10 to #24).',
      ne: 'घुलनशील (PGA) तथा नघुलनशील (सिल्क, नाइलन) सुचर धागो र स्टेराइल सर्जिकल ब्लेडहरू।',
    },
    description: {
      en: 'Comprehensive range of sterile surgical suture materials with varied curved needles (cutting / round body) alongside foil-sealed surgical scalpel blades. Inquire for USP sizes and needle gauges.',
      ne: 'शल्यक्रिया तथा घाउ सिलाउन प्रयोग हुने विभिन्न प्रकारका सुचर धागोहरू र १० देखि २४ नम्बर सम्मका स्टेराइल सर्जिकल ब्लेडहरू। थप जानकारीका लागि सम्पर्क गर्नुहोस्।',
    },
    keyPoints: {
      en: ['Absorbable PGA & Chromic Catgut sutures', 'Non-absorbable Braided Silk, Nylon, Polypropylene', 'Sterile scalpel blades sizes 10, 11, 15, 20, 22, 23, 24'],
      ne: ['घुलनशील र नघुलनशील सुचर धागोहरू', 'विभिन्न सुइ र साइजका विकल्पहरू', '१० देखि २४ नम्बर सम्मका सर्जिकल ब्लेडहरू'],
    },
    image: {
      url: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
      alt: {
        en: 'Illustrative photo of surgical sutures and surgical blades',
        ne: 'सर्जिकल सुचर र ब्लेडको सांकेतिक तस्बिर',
      },
      sourceLabel: 'Photo via Unsplash (Illustrative representation)',
    },
    tags: ['sutures', 'surgical blades', 'silk', 'nylon', 'pga', 'सुचर', 'ब्लेड', 'ओटी धागो'],
  },

  // 10. CLEANING AND HYGIENE PRODUCTS
  {
    id: 'clean-surface-floor-disinfectant',
    slug: 'hospital-surface-floor-disinfectants',
    categoryId: 'cleaning-hygiene',
    name: {
      en: 'Hospital Surface Disinfectants & Floor Cleaning Solutions',
      ne: 'अस्पताल सतह निसङ्क्रमण घोल तथा भुइँ सफाइ रसायन',
    },
    shortDesc: {
      en: 'Medical-grade surface disinfectant concentrates, floor cleaning detergents, and rapid surface wiping solutions.',
      ne: 'अस्पतालको भुइँ तथा सतह निसङ्क्रमण गर्ने मेडिकल ग्रेड घोल र क्लिनिङ डिटरजेन्टहरू।',
    },
    description: {
      en: 'Environmental hygiene solutions for clinical wards, ICUs, and OPD areas. Refer to individual product labels and facility safety data sheets for dilution instructions and contact time. Contact us for bulk containers.',
      ne: 'अस्पताल, क्लिनिक तथा वार्डको सरसफाइका लागि उच्च गुणस्तरका भुइँ सफाइ रसायन तथा सतह निसङ्क्रमण घोलहरू। थोक तथा खुद्रा दररेटका लागि सम्पर्क गर्नुहोस्।',
    },
    keyPoints: {
      en: ['Concentrated hospital-grade floor and surface cleaners', 'Suitable for wards, corridors, and clinical surfaces', 'Bulk 5-litre and 1-litre packaging on enquiry'],
      ne: ['भुइँ तथा सतह सफा गर्ने डिटरजेन्ट र निसङ्क्रमण रसायन', 'अस्पताल वार्ड तथा कोरिडोरका लागि उपयुक्त', '१ लिटर र ५ लिटरका जारहरू उपलब्ध'],
    },
    image: {
      url: 'https://images.unsplash.com/photo-1584744982491-665216d95f8b?auto=format&fit=crop&w=800&q=80',
      alt: {
        en: 'Illustrative photo of hospital cleaning and disinfectant supplies',
        ne: 'अस्पताल सरसफाइ तथा निसङ्क्रमण सामग्रीको सांकेतिक तस्बिर',
      },
      sourceLabel: 'Photo via Unsplash (Illustrative representation)',
    },
    tags: ['disinfectant', 'floor cleaner', 'surface disinfectant', 'cleaning', 'निसङ्क्रमण', 'सरसफाइ', 'डिसइन्फेक्टेन्ट'],
  },
  {
    id: 'clean-hand-hygiene-sanitizers',
    slug: 'alcohol-hand-rubs-antiseptic-scrubs',
    categoryId: 'cleaning-hygiene',
    name: {
      en: 'Alcohol Hand Rub Sanitizers & Antiseptic Hand Scrubs',
      ne: 'अल्कोहल ह्यान्ड रब स्यानिटाइजर तथा एन्टीसेप्टिक स्क्रब',
    },
    shortDesc: {
      en: 'Hospital-grade alcohol-based hand rubs (70-80%), Chlorhexidine/Povidone surgical hand scrubs, and dispensers.',
      ne: 'अल्कोहल-आधारित ह्यान्ड स्यानिटाइजर, क्लोरहेक्सिडिन तथा पोभिडोन सर्जिकल ह्यान्ड स्क्रब।',
    },
    description: {
      en: 'Point-of-care hand hygiene solutions including alcohol hand rubs (500ml pump bottles and 5L refills) and surgical scrub solutions for OT wash stations. Contact us for dispenser brackets and institutional pricing.',
      ne: 'हातको स्वच्छताका लागि अल्कोहल ह्यान्ड स्यानिटाइजर र अपरेशन थिएटरका लागि एन्टीसेप्टिक ह्यान्ड स्क्रब। संस्थागत खरिदका लागि सम्पर्क गर्नुहोस्।',
    },
    keyPoints: {
      en: ['70-80% alcohol formulations for rapid hand antisepsis', 'OT scrub solutions (Chlorhexidine / Povidone Iodine)', '500ml pump dispensers and 5-litre bulk refill jars'],
      ne: ['द्रुत हात स्वच्छताका लागि अल्कोहल स्यानिटाइजर', 'ओटीका लागि एन्टीसेप्टिक स्क्रब', '५०० मिलि पम्प र ५ लिटर जार उपलब्ध'],
    },
    image: {
      url: 'https://images.unsplash.com/photo-1584744982491-665216d95f8b?auto=format&fit=crop&w=800&q=80',
      alt: {
        en: 'Illustrative photo of alcohol hand rub sanitizer and antiseptic wash',
        ne: 'ह्यान्ड स्यानिटाइजर तथा एन्टीसेप्टिक स्क्रबको सांकेतिक तस्बिर',
      },
      sourceLabel: 'Photo via Unsplash (Illustrative representation)',
    },
    tags: ['hand sanitizer', 'hand rub', 'surgical scrub', 'antiseptic', 'स्यानिटाइजर', 'ह्यान्ड रब', 'स्क्रब'],
  },
  {
    id: 'clean-mop-trolleys-accessories',
    slug: 'double-bucket-mop-trolleys-cleaning-tools',
    categoryId: 'cleaning-hygiene',
    name: {
      en: 'Double-Bucket Wringer Mop Trolleys & Cleaning Tools',
      ne: 'डबल-बाल्टी मोप ट्रली तथा सरसफाइ सामग्री',
    },
    shortDesc: {
      en: 'Dual-bucket wringer mop trolleys, replacement microfiber mop heads, scrubbing brushes, and floor wipers.',
      ne: 'सफा र फोहोर पानी छुट्याउने डबल-बाल्टी मोप ट्रली, माइक्रोफाइबर मप, ब्रस र फ्लोर वाइपर।',
    },
    description: {
      en: 'Ergonomic hospital floor cleaning systems designed to isolate contaminated rinse water from fresh disinfectant solution. Includes heavy-duty castor trolleys, press wringers, and color-coded microfiber mop heads.',
      ne: 'अस्पतालको भुइँ प्रभावकारी रूपमा सफा गर्न प्रयोग हुने दुई बाल्टीयुक्त मोप ट्रली, निचोर्ने मेकानिज्म र माइक्रोफाइबर मपहरू। साइज र मूल्यका लागि सम्पर्क गर्नुहोस्।',
    },
    keyPoints: {
      en: ['Heavy-duty dual-bucket chassis with side-press wringer', 'Prevents cross-contamination during large area mopping', 'Replacement mop heads, handles, and squeegees available'],
      ne: ['बलियो फ्रेम र निचोर्ने मेकानिज्मसहितको ट्रली', 'फोहोर पानी र सफा पानी छुट्टाछुट्टै राख्ने प्रणाली', 'अतिरिक्त मप हेड र वाइपरहरू उपलब्ध'],
    },
    image: {
      url: 'https://images.unsplash.com/photo-1584744982491-665216d95f8b?auto=format&fit=crop&w=800&q=80',
      alt: {
        en: 'Illustrative photo of hospital double bucket mop trolley and cleaning tools',
        ne: 'मोप ट्रली तथा सरसफाइ उपकरणको सांकेतिक तस्बिर',
      },
      sourceLabel: 'Photo via Unsplash (Illustrative representation)',
    },
    tags: ['mop trolley', 'wringer trolley', 'microfiber mop', 'cleaning tools', 'मोप ट्रली', 'सरसफाइ ट्रली', 'मप'],
  },

  // 11. BIOMEDICAL WASTE & SHARPS HANDLING
  {
    id: 'waste-pedal-bins-bags',
    slug: 'color-coded-biomedical-waste-bins-bags',
    categoryId: 'waste-handling',
    name: {
      en: 'Color-Coded Biomedical Waste Bins & Biohazard Bags',
      ne: 'रंग-संकेतयुक्त बायोमेडिकल फोहोर पेडल डस्टबिन तथा झोला',
    },
    shortDesc: {
      en: 'Hands-free foot pedal segregation bins (Red, Yellow, Blue, Green, Black) and heavy-duty biohazard bags.',
      ne: 'खुट्टाले थिचेर खुल्ने रंग-संकेतयुक्त डस्टबिन (रातो, पहेंलो, निलो, हरियो, कालो) र बायोहाजार्ड फोहोर झोला।',
    },
    description: {
      en: 'Standardized healthcare waste segregation bins with foot-pedal lids for hands-free operation across wards and laboratories, paired with durable printed biohazard waste collection bags. Contact us for bulk institutional orders.',
      ne: 'अस्पताल तथा ल्याबमा फोहोर वर्गीकरण गर्न प्रयोग हुने विभिन्न रंगका पेडल डस्टबिन र बलिया बायोहाजार्ड झोलाहरू। थोक खरिदका लागि सम्पर्क गर्नुहोस्।',
    },
    keyPoints: {
      en: ['Color-coded segregation (Yellow, Red, Blue, Green, Black)', 'Hands-free foot pedal operation prevents contact contamination', 'Heavy-gauge leak-resistant biohazard collection bags'],
      ne: ['रंग अनुसार फोहोर वर्गीकरण गर्ने पेडल डस्टबिन', 'हातले छुन नपर्ने खुट्टाले खुल्ने प्रणाली', 'बलियो र लिक-प्रतिरोधी फोहोर झोलाहरू'],
    },
    image: {
      url: 'https://images.unsplash.com/photo-1584744982491-665216d95f8b?auto=format&fit=crop&w=800&q=80',
      alt: {
        en: 'Illustrative photo of medical waste segregation bins and biohazard bags',
        ne: 'फोहोर व्यवस्थापन डस्टबिन तथा बायोहाजार्ड झोलाको सांकेतिक तस्बिर',
      },
      sourceLabel: 'Photo via Unsplash (Illustrative representation)',
    },
    tags: ['waste bin', 'dustbin', 'biohazard bags', 'pedal bin', 'डस्टबिन', 'फोहोर व्यवस्थापन', 'बायोहाजार्ड'],
  },
  {
    id: 'waste-sharps-boxes-destroyers',
    slug: 'puncture-proof-sharps-containers-needle-destroyers',
    categoryId: 'waste-handling',
    name: {
      en: 'Puncture-Proof Sharps Containers & Needle Destroyers',
      ne: 'सार्प्स कन्टेनर तथा निडल कटर/डिस्ट्रोयर',
    },
    shortDesc: {
      en: 'Rigid puncture-resistant containers for discarded needles/blades and electrical needle burner destroyers.',
      ne: 'प्रयोग गरिएका सुइ र ब्लेड सुरक्षित राख्ने पन्चर-प्रतिरोधी सार्प्स बक्स र निडल कटर मेसिन।',
    },
    description: {
      en: 'Essential sharps injury prevention tools including rigid puncture-resistant plastic sharps collection boxes with tamper-evident lids and electric/manual needle destroyers. Inquire for sizes (1L, 3L, 5L, 10L).',
      ne: 'सुइ र ब्लेडबाट स्वास्थ्यकर्मी तथा सरसफाइकर्मीलाई चोट लाग्नबाट बचाउने सार्प्स कन्टेनर र निडल कटरहरू। उपलब्ध साइज र मूल्य बुझ्न सम्पर्क गर्नुहोस्।',
    },
    keyPoints: {
      en: ['Puncture-resistant rigid plastic construction with lockable lids', 'Dedicated opening for safe needle separation and drop-in', '1-litre, 3-litre, 5-litre, and 10-litre sizes available'],
      ne: ['पन्चर नहुने बलियो प्लास्टिक संरचना र लकिङ बिर्को', 'सुइ र ब्लेड सजिलै खसाल्ने सुरक्षित प्वाल', 'विभिन्न साइजका कन्टेनर र निडल डिस्ट्रोयर'],
    },
    image: {
      url: 'https://images.unsplash.com/photo-1584744982491-665216d95f8b?auto=format&fit=crop&w=800&q=80',
      alt: {
        en: 'Illustrative photo of medical sharps disposal container and needle safety equipment',
        ne: 'सार्प्स कन्टेनर तथा निडल सुरक्षा उपकरणको सांकेतिक तस्बिर',
      },
      sourceLabel: 'Photo via Unsplash (Illustrative representation)',
    },
    tags: ['sharps container', 'needle destroyer', 'needle cutter', 'sharps box', 'सार्प्स कन्टेनर', 'निडल कटर', 'सुइ व्यवस्थापन'],
  },

  // 12. EXPANDED CONSUMABLES & OT SUPPLIES
  {
    id: 'cons-insulin-syringes-u40-u100',
    slug: 'insulin-syringes-u-40-u-100',
    categoryId: 'consumables-ppe',
    name: {
      en: 'Insulin Syringes (U-40 & U-100 Calibrations)',
      ne: 'इन्सुलिन सिरिन्जहरू (U-40 तथा U-100 क्यालिब्रेसन)',
    },
    shortDesc: {
      en: 'Sterile single-use insulin syringes available in U-40 and U-100 unit calibrations. Inquire to confirm capacity, needle specification, and packaging.',
      ne: 'U-40 र U-100 युनिट क्यालिब्रेसनमा उपलब्ध स्टेराइल एकल प्रयोग इन्सुलिन सिरिन्जहरू। क्षमता, सुइको विवरण र प्याकिङ यकिन गर्न सम्पर्क गर्नुहोस्।',
    },
    description: {
      en: 'Single-use sterile insulin syringes for subcutaneous insulin administration. Available in standard insulin unit calibrations: U-40 and U-100. Specific barrel capacities, needle attachment styles (fixed vs detachable), and needle gauge/length specifications depend on the manufacturer brand. Customers are requested to verify their required capacity, unit calibration, needle configuration, and packaging from the manufacturer’s label when placing an enquiry.',
      ne: 'इन्सुलिन दिन प्रयोग हुने स्टेराइल एकल प्रयोग इन्सुलिन सिरिन्जहरू। U-40 र U-100 युनिट क्यालिब्रेसनमा उपलब्ध। ब्यारेल क्षमता, सुइको प्रकार (जडित वा छुट्टै) र सुइको नाप उत्पादक अनुसार फरक हुने भएकाले अर्डर गर्दा उत्पादकको लेबल हेरी आवश्यक क्षमता, क्यालिब्रेसन र सुइको विवरण यकिन गर्नुहोस्।',
    },
    keyPoints: {
      en: [
        'Supplied in standard U-40 and U-100 insulin unit calibrations',
        'Transparent barrel with clear unit markings for dosage reading',
        'Single-use sterile packaging (boxes of 100 pcs or standard pack sizes)',
        'Please confirm exact capacity, needle gauge, and needle length from the manufacturer label',
      ],
      ne: [
        'U-40 र U-100 इन्सुलिन युनिट क्यालिब्रेसनमा उपलब्ध',
        'युनिट अंक स्पष्ट देखिने पारदर्शी बडी',
        'एकल प्रयोग स्टेराइल बक्स प्याकिङ',
        'क्षमता, सुइको गेज र लम्बाइ उत्पादकको लेबलबाट यकिन गर्नुहोस्',
      ],
    },
    enquiryOptions: {
      en: [
        'U-40 Insulin Syringe (confirm capacity and needle configuration from label)',
        'U-100 Insulin Syringe (confirm capacity and needle configuration from label)',
        'Bulk box / carton packaging enquiry',
      ],
      ne: [
        'U-40 इन्सुलिन सिरिन्ज (क्षमता र सुइको विवरण लेबलबाट यकिन गर्नुहोस्)',
        'U-100 इन्सुलिन सिरिन्ज (क्षमता र सुइको विवरण लेबलबाट यकिन गर्नुहोस्)',
        'बक्स तथा कार्टन प्याकिङ सोधपुछ',
      ],
    },
    image: {
      url: 'https://images.unsplash.com/photo-1584744982491-665216d95f8b?auto=format&fit=crop&w=800&q=80',
      alt: {
        en: 'Representative photo of sterile insulin syringes',
        ne: 'स्टेराइल इन्सुलिन सिरिन्जको सांकेतिक तस्बिर',
      },
      sourceLabel: 'Photo via Unsplash (Representative illustration)',
    },
    tags: ['insulin syringe', 'u-40', 'u-100', 'diabetes', 'इन्सुलिन सिरिन्ज', 'इन्सुलिन', 'सुइ'],
  },
  {
    id: 'cons-tuberculin-syringes-1ml',
    slug: 'tuberculin-syringes-1ml',
    categoryId: 'consumables-ppe',
    name: {
      en: 'Tuberculin Syringes (1ml Diagnostic / Small-Volume)',
      ne: 'ट्युबरकुलिन सिरिन्जहरू (१ मिलि डायग्नोस्टिक / सानो परिमाण)',
    },
    shortDesc: {
      en: '1ml sterile single-use syringes for diagnostic testing and small-volume fluid measurement. Confirm calibration scale and needle specifications on enquiry.',
      ne: 'डायग्नोस्टिक परीक्षण तथा थोरै परिमाणको मापनका लागि १ मिलि स्टेराइल सिरिन्जहरू। क्यालिब्रेसन र सुइको विवरण यकिन गर्न सम्पर्क गर्नुहोस्।',
    },
    description: {
      en: '1ml single-use sterile hypodermic syringes for diagnostic skin testing (such as Mantoux tuberculin testing) and small-volume clinical applications. Graduation increments and needle configurations (pre-attached short needle vs bare Luer nozzle) depend on the manufacturer brand. Please confirm the required scale markings, needle gauge, and intended application from the manufacturer packaging before ordering.',
      ne: 'डायग्नोस्टिक छाला परीक्षण (जस्तै मन्टु टिबी परीक्षण) र सानो परिमाणको क्लिनिकल औषधिका लागि प्रयोग हुने १ मिलि स्टेराइल सिरिन्जहरू। मापन स्केल र सुइको प्रकार उत्पादकको मोडल अनुसार फरक हुने भएकाले अर्डर गर्नुअघि उत्पादकको प्याकेजिङबाट आवश्यक विवरण यकिन गर्नुहोस्।',
    },
    keyPoints: {
      en: [
        '1 ml barrel capacity for diagnostic testing and small-volume measurements',
        'Luer slip nozzle fitting (with short needle or bare barrel depending on model)',
        'Individual sterile packaging',
        'Please verify graduation scale, needle specification, and intended use from the product label',
      ],
      ne: [
        'डायग्नोस्टिक परीक्षण र थोरै परिमाणको मापनका लागि १ मिलि क्षमता',
        'लुअर स्लिप नोजल (मोडल अनुसार सुइ सहित वा बिना)',
        'एकल प्रयोग स्टेराइल बक्स प्याक',
        'मापन स्केल, सुइको विवरण र प्रयोगको उद्देश्य उत्पादकको लेबलबाट यकिन गर्नुहोस्',
      ],
    },
    enquiryOptions: {
      en: [
        '1 ml Tuberculin syringe with attached needle (confirm needle gauge/length from label)',
        '1 ml Tuberculin syringe bare barrel (Luer slip)',
        'Bulk carton packaging enquiry',
      ],
      ne: [
        '१ मिलि ट्युबरकुलिन सिरिन्ज (सुइ सहित - सुइको नाप लेबलबाट यकिन गर्नुहोस्)',
        '१ मिलि ट्युबरकुलिन सिरिन्ज ब्यारेल (सुइ बिना)',
        'कार्टन प्याकिङ सोधपुछ',
      ],
    },
    image: {
      url: 'https://images.unsplash.com/photo-1584744982491-665216d95f8b?auto=format&fit=crop&w=800&q=80',
      alt: {
        en: 'Representative photo of 1ml precision tuberculin syringe',
        ne: '१ मिलि ट्युबरकुलिन सिरिन्जको सांकेतिक तस्बिर',
      },
      sourceLabel: 'Photo via Unsplash (Representative illustration)',
    },
    tags: ['tuberculin syringe', '1ml syringe', 'mantoux', 'allergy testing', 'ट्युबरकुलिन सिरिन्ज', '१ मिलि सिरिन्ज', 'मन्टु टेस्ट'],
  },
  {
    id: 'cons-syringes-disposable-luer',
    slug: 'disposable-syringes-luer-slip-lock',
    categoryId: 'consumables-ppe',
    name: {
      en: 'General Disposable Syringes (2ml to 50ml / 60ml)',
      ne: 'नियमित डिस्पोजेबल सिरिन्जहरू (२ मिलि देखि ५०/६० मिलि)',
    },
    shortDesc: {
      en: 'Sterile single-use hypodermic syringes (2ml, 3ml, 5ml, 10ml, 20ml, 50ml/60ml) in Luer Slip and Luer Lock formats.',
      ne: '२ मिलि देखि ५०/६० मिलि सम्मका स्टेराइल एकल प्रयोग मेडिकल सिरिन्जहरू (लुअर स्लिप तथा लुअर लक)।',
    },
    description: {
      en: 'Comprehensive range of sterile disposable hypodermic syringes for routine hospital injections, intravenous medication administration, blood withdrawal, and feeding aspiration. Available in standard friction-fit Luer Slip and secure screw-threaded Luer Lock formats. Please contact our office to confirm required barrel size, needle gauge, and wholesale packaging.',
      ne: 'अस्पताल तथा क्लिनिकमा नियमित इन्जेक्सन, औषधि दिन, रगत तान्न तथा फिडिङका लागि प्रयोग हुने स्टेराइल डिस्पोजेबल सिरिन्जहरू। लुअर स्लिप र लुअर लक दुवै प्रकारमा उपलब्ध। आवश्यक साइज र सुइको विवरणका लागि सम्पर्क गर्नुहोस्।',
    },
    keyPoints: {
      en: [
        'Capacities: 2ml, 3ml, 5ml, 10ml, 20ml, 50ml/60ml',
        'Available in standard Luer Slip and threaded Luer Lock fittings',
        'Options with pre-mounted hypodermic needles or barrels only',
        'Smooth plunger movement with clear, indelible volume graduation',
      ],
      ne: [
        'क्षमता: २ मिलि, ३ मिलि, ५ मिलि, १० मिलि, २० मिलि, ५० मिलि र ६० मिलि',
        'लुअर स्लिप र लक हुने लुअर लक विकल्पहरू',
        'सुइ जडान भएको र सुइ बिनाको ब्यारेल उपलब्ध',
        'सहजै चल्ने प्लन्जर र स्पष्ट अंकहरू',
      ],
    },
    enquiryOptions: {
      en: [
        '2 ml / 3 ml Standard injection syringe (with 23G / 24G needle or bare)',
        '5 ml Syringe (with 22G / 23G needle or bare)',
        '10 ml Syringe (Luer Slip / Luer Lock)',
        '20 ml Syringe (Luer Slip / Luer Lock)',
        '50 ml / 60 ml Infusion, irrigation & catheter-tip feeding syringe',
      ],
      ne: [
        '२ मिलि / ३ मिलि नियमित सिरिन्ज (२३G / २४G सुइ सहित वा बिना)',
        '५ मिलि सिरिन्ज (२२G / २३G सुइ सहित वा बिना)',
        '१० मिलि सिरिन्ज (लुअर स्लिप / लुअर लक)',
        '२० मिलि सिरिन्ज (लुअर स्लिप / लुअर लक)',
        '५० मिलि / ६० मिलि इन्फ्युजन तथा फिडिङ क्याथेटर सिरिन्ज',
      ],
    },
    image: {
      url: 'https://images.unsplash.com/photo-1584744982491-665216d95f8b?auto=format&fit=crop&w=800&q=80',
      alt: {
        en: 'Representative photo of sterile disposable medical syringes and needles',
        ne: 'स्टेराइल मेडिकल डिस्पोजेबल सिरिन्ज र सुइहरूको सांकेतिक तस्बिर',
      },
      sourceLabel: 'Photo via Unsplash (Representative illustration)',
    },
    tags: ['syringes', 'disposable syringe', 'luer lock', '5ml', '10ml', '50ml', 'सिरिन्ज', 'सुइ', 'डिस्पोजेबल सिरिन्ज'],
  },
  {
    id: 'cons-iv-infusion-sets-blood',
    slug: 'iv-infusion-sets-blood-administration',
    categoryId: 'consumables-ppe',
    name: {
      en: 'IV Infusion Sets & Blood Administration Sets',
      ne: 'आईभी इन्फ्युजन सेट तथा ब्लड ट्रान्सफ्युजन सेट',
    },
    shortDesc: {
      en: 'Gravity IV infusion drip sets (vented/non-vented), pediatric measured volume burette sets, and filtered blood sets.',
      ne: 'स्लाइन पानी चढाउने आईभी सेट (भेन्टेड/नन-भेन्टेड), बालबालिकाका लागि ब्युरेट सेट र रगत चढाउने ब्लड सेट।',
    },
    description: {
      en: 'Sterile gravity infusion giving sets designed for controlled intravenous fluid and blood product administration. Includes standard adult infusion sets, measured volume burette sets for pediatric fluid delivery, and blood transfusion sets with built-in clot filters. Because drop factor calibrations (e.g. 20 drops/ml vs 60 drops/ml) and filter specifications vary by manufacturer, please confirm your required facility specifications when placing an enquiry.',
      ne: 'बिरामीलाई स्लाइन पानी तथा रगत चढाउन प्रयोग हुने स्टेराइल आईभी इन्फ्युजन र ब्लड ट्रान्सफ्युजन सेटहरू। वयस्कका लागि नियमित सेट, बालबालिकाका लागि ब्युरेट सेट र रगतका लागि फिल्टर सहितको ब्लड सेट। ड्रप फ्याक्टर (२० वा ६० थोपा/मिलि) र फिल्टरको विवरण उत्पादक अनुसार फरक हुन सक्ने भएकाले खरिद सोधपुछ गर्दा आफ्नो संस्थाको स्पेसिफिकेसन यकिन गर्नुहोस्।',
    },
    keyPoints: {
      en: [
        'Adult IV Infusion Sets available with bacterial air vent or non-vented for collapsible containers',
        'Pediatric Measured-Volume Burette Sets (e.g. 100ml / 150ml graduated cylinder chamber)',
        'Blood Administration Sets with integrated aggregate mesh filter for blood and blood components',
        'Clear flexible tubing with roller clamp regulator and Y-injection site',
        'Confirm specific drop rate and filter parameters with our office upon ordering',
      ],
      ne: [
        'वयस्क आईभी सेट: एयर भेन्ट सहित र नन-भेन्टेड विकल्पहरू',
        'बालबालिका ब्युरेट सेट: १०० मिलि / १५० मिलि मापन चेम्बर सहित',
        'ब्लड सेट: रगतका क्लट रोक्ने जालीदार फिल्टर सहित',
        'रोलर क्लैम्प र इन्जेक्सन साइट सहितको बलियो नली',
        'आवश्यक ड्रप दर र स्पेसिफिकेसन फोनबाट यकिन गर्नुहोस्',
      ],
    },
    enquiryOptions: {
      en: [
        'Standard Adult Gravity IV Infusion Set with Air Vent',
        'Non-Vented IV Set for flexible plastic bottles/bags',
        'Pediatric Measured Volume Burette Infusion Set (100ml / 150ml)',
        'Blood Administration / Transfusion Set with in-line filter',
      ],
      ne: [
        'एयर भेन्ट सहितको वयस्क आईभी सेट',
        'नन-भेन्टेड आईभी सेट (प्लास्टिक स्लाइन बोतलका लागि)',
        'बालबालिका ब्युरेट सेट १०० मिलि / १५० मिलि',
        'फिल्टर सहितको ब्लड ट्रान्सफ्युजन सेट',
      ],
    },
    image: {
      url: 'https://images.unsplash.com/photo-1584744982491-665216d95f8b?auto=format&fit=crop&w=800&q=80',
      alt: {
        en: 'Representative photo of medical IV infusion giving set and tubing',
        ne: 'मेडिकल आईभी इन्फ्युजन सेट र ड्रिप नलीको सांकेतिक तस्बिर',
      },
      sourceLabel: 'Photo via Unsplash (Representative illustration)',
    },
    tags: ['iv set', 'infusion set', 'blood set', 'burette set', 'pediatric iv', 'आईभी सेट', 'स्लाइन सेट', 'ब्लड सेट'],
  },
  {
    id: 'cons-iv-cannulas-color-coded',
    slug: 'iv-cannulas-color-coded-gauges',
    categoryId: 'consumables-ppe',
    name: {
      en: 'Color-Coded IV Cannulas / Catheters (14G to 26G)',
      ne: 'रंग-संकेतयुक्त आईभी क्यानुला / क्याथेटरहरू (१४G देखि २६G)',
    },
    shortDesc: {
      en: 'Sterile intravenous cannulas with injection port, fixation wings, and stainless steel flashback needles.',
      ne: 'इन्जेक्सन पोर्ट र पखेटा (Wings) सहितका रंग-संकेतयुक्त स्टेराइल आईभी क्यानुलाहरू।',
    },
    description: {
      en: 'ISO color-coded peripheral intravenous cannulas manufactured from biocompatible polymer with radio-opaque lines for smooth venipuncture. Integrated with one-way injection port valve for intermittent medication delivery. Inquire for required gauge distribution, box packaging (50/100 pcs), and manufacturer brands.',
      ne: 'नसामा सहजै सुइ राख्न प्रयोग हुने अन्तर्राष्ट्रिय रंग कोड अनुसारका स्टेराइल आईभी क्यानुलाहरू। औषधि दिन मिल्ने इन्जेक्सन पोर्ट र सुरक्षित पखेटा सहित। आवश्यक गेज (साइज), बक्स प्याकिङ र मौज्दातका लागि सम्पर्क गर्नुहोस्।',
    },
    keyPoints: {
      en: [
        'Standard Color Coding: 14G (Orange), 16G (Grey), 18G (Green), 20G (Pink), 22G (Blue), 24G (Yellow), 26G (Violet)',
        'Sharp bevel stainless steel needle for smooth venipuncture',
        'Transparent flashback chamber for immediate blood visualization',
        'One-way injection port valve with snap cap for intermittent medication',
      ],
      ne: [
        'रंग कोड: १४G (सुन्तला), १६G (खैरो), १८G (हरियो), २०G (गुलाबी), २२G (निलो), २४G (पहेंलो), २६G (बैजनी)',
        'बिरामीलाई कम दुख्ने धारिलो स्टिल निडल',
        'रगत आएको तुरुन्त देखिने पारदर्शी फ्ल्यासब्याक चेम्बर',
        'औषधि दिन मिल्ने वान-वे इन्जेक्सन पोर्ट र बिर्को',
      ],
    },
    enquiryOptions: {
      en: [
        '14G Orange & 16G Grey for rapid fluid/blood resuscitation',
        '18G Green for surgery, trauma, and blood transfusion',
        '20G Pink for routine adult hospital medication and infusions',
        '22G Blue for adult delicate veins and elderly patients',
        '24G Yellow & 26G Violet for pediatric & neonatal care',
        'Ported with wings vs non-ported straight options',
      ],
      ne: [
        '१४G सुन्तला र १६G खैरो: आकस्मिक रगत तथा स्लाइन छिटो चढाउन',
        '१८G हरियो: शल्यक्रिया, ट्रमा र ब्लड ट्रान्सफ्युजनका लागि',
        '२०G गुलाबी: वयस्क बिरामीको नियमित स्लाइन तथा औषधिका लागि',
        '२२G निलो: कमजोर नसा भएका वृद्ध तथा महिला बिरामीका लागि',
        '२४G पहेंलो र २६G बैजनी: बालबालिका तथा नवजात शिशुका लागि',
        'इन्जेक्सन पोर्ट सहित र पोर्ट बिनाको विकल्प',
      ],
    },
    image: {
      url: 'https://images.unsplash.com/photo-1584744982491-665216d95f8b?auto=format&fit=crop&w=800&q=80',
      alt: {
        en: 'Representative photo of color-coded medical IV cannulas',
        ne: 'विभिन्न रंगका मेडिकल आईभी क्यानुलाहरूको सांकेतिक तस्बिर',
      },
      sourceLabel: 'Photo via Unsplash (Representative illustration)',
    },
    tags: ['iv cannula', 'cannula', 'intravenous catheter', '18g', '20g', '22g', '24g', 'क्यानुला', 'आईभी क्यानुला', 'सुइ'],
  },
  {
    id: 'ot-surgical-sutures-absorbable-nonabsorbable',
    slug: 'surgical-sutures-absorbable-non-absorbable',
    categoryId: 'ot-supplies',
    name: {
      en: 'Sterile Surgical Sutures (Absorbable & Non-Absorbable)',
      ne: 'स्टेराइल सर्जिकल सुचर धागोहरू (घुलनशील तथा नघुलनशील)',
    },
    shortDesc: {
      en: 'Wide selection of sterile surgical sutures (PGA, Polyglactin, PDO, Catgut, Silk, Nylon, Prolene) across USP sizes 2 to 6-0.',
      ne: 'घाउ तथा शल्यक्रिया सिलाउने विभिन्न प्रकारका घुलनशील र नघुलनशील स्टेराइल सुचर धागोहरू (USP २ देखि ६-०)।',
    },
    description: {
      en: 'Broad catalogue of sterile surgical suture threads swaged to curved needles (reverse cutting, round body taper point, and conventional cutting). Suture materials include synthetic absorbable polymers (PGA, Polyglactin 910, PDO), natural absorbables (Chromic / Plain Catgut), and permanent non-absorbables (Black Braided Silk, Monofilament Polyamide/Nylon, Polypropylene). Please specify your required material, USP gauge, needle curvature, and box quantity when contacting us.',
      ne: 'शल्यक्रिया तथा घाउ सिलाउन प्रयोग हुने विभिन्न किसिमका स्टेराइल सुचर धागोहरू। विभिन्न घुमाउरो सुइ (रिभर्स कटिङ, राउन्ड बडी) सहित। घुलनशील (PGA, क्याटगट) र नघुलनशील (सिल्क, नाइलन, पोलिप्रोपिलिन) सबै प्रकारका धागो उपलब्ध छन्। आवश्यक धागोको नाम, USP नम्बर, सुइको प्रकार र बक्स परिमाणबारे फोन वा WhatsApp मार्फत बुझ्नुहोस्।',
    },
    keyPoints: {
      en: [
        'Absorbable Range: Polyglycolic Acid (PGA braided), Polyglactin 910, Polydioxanone (PDO), Chromic & Plain Catgut',
        'Non-Absorbable Range: Black Braided Silk, Monofilament Polyamide (Nylon), Monofilament Polypropylene',
        'USP Sizes available: USP 2, 1, 0, 2-0, 3-0, 4-0, 5-0, 6-0',
        'Needle Types: 3/8 circle reverse cutting, 1/2 circle round-bodied taper point, straight cutting needles',
        'Foil-sealed sterile packaging in 12, 24, or 36 foil boxes',
      ],
      ne: [
        'घुलनशील (Absorbable): पोलिग्ल्याइकोलिक एसिड (PGA), पोलिग्ल्याक्टिन, क्याटगट, पीडीओ',
        'नघुलनशील (Non-absorbable): ब्ल्याक ब्रेडेड सिल्क, नाइलन, पोलिप्रोपिलिन',
        'USP साइजहरू: USP २, १, ०, २-०, ३-०, ४-०, ५-०, ६-०',
        'सुइको प्रकार: ३/८ रिभर्स कटिङ, १/२ राउन्ड बडी, सिधा सुइ',
        'वायुरोधी स्टेराइल प्याकिङ (१२, २४ वा ३६ वटाको बक्स)',
      ],
    },
    enquiryOptions: {
      en: [
        'PGA / Polyglactin Synthetic Absorbable Braided Suture (USP 2 to 5-0)',
        'Chromic Catgut & Plain Catgut Natural Absorbable Suture (USP 2 to 3-0)',
        'Black Braided Silk Non-Absorbable Suture (USP 2 to 5-0)',
        'Monofilament Polyamide / Nylon Skin Suture (USP 2-0 to 6-0)',
        'Monofilament Polypropylene / Prolene Suture (USP 1 to 6-0)',
        'Needle: 3/8 circle reverse cutting vs 1/2 circle round body taper',
      ],
      ne: [
        'PGA / पोलिग्ल्याक्टिन घुलनशील ब्रेडेड सुचर (USP २ देखि ५-०)',
        'क्रोमिक क्याटगट तथा प्लेन क्याटगट घुलनशील सुचर (USP २ देखि ३-०)',
        'ब्ल्याक ब्रेडेड सिल्क नघुलनशील सुचर (USP २ देखि ५-०)',
        'नाइलन छाला सिलाउने नघुलनशील सुचर (USP २-० देखि ६-०)',
        'पोलिप्रोपिलिन / प्रोलिन नघुलनशील सुचर (USP १ देखि ६-०)',
        'सुइ: ३/८ रिभर्स कटिङ अथवा १/२ राउन्ड बडी',
      ],
    },
    image: {
      url: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
      alt: {
        en: 'Representative photo of sterile surgical suture packaging and needles',
        ne: 'स्टेराइल सर्जिकल सुचर धागो र सुइको सांकेतिक तस्बिर',
      },
      sourceLabel: 'Photo via Unsplash (Representative illustration)',
    },
    tags: ['sutures', 'surgical thread', 'pga', 'silk suture', 'nylon suture', 'catgut', 'prolene', 'सुचर धागो', 'टाँका धागो', 'ओटी धागो'],
  },
  {
    id: 'surg-ent-instruments-specula-forceps',
    slug: 'ent-instruments-specula-forceps-sets',
    categoryId: 'surgical-instruments',
    name: {
      en: 'ENT Instruments (Ear, Nose & Throat Specula, Forceps & Sets)',
      ne: 'ईएनटी औजारहरू (कान, नाक तथा घाँटीका स्पेकुलम, फोर्सेप्स तथा सेट)',
    },
    shortDesc: {
      en: 'Comprehensive range of Ear, Nose, and Throat instruments including specula, micro alligator forceps, nasal scissors, suction tips, and sets.',
      ne: 'कान, नाक तथा घाँटी जाँच र माइनर शल्यक्रियाका लागि स्पेकुलम, माइक्रो फोर्सेप्स, कैंची, सक्सन ट्युब र सेटहरू।',
    },
    description: {
      en: 'Precision surgical stainless steel Ear, Nose, and Throat (ENT) diagnostic and procedural instruments for outpatient departments and surgical suites. Categories include ear specula sets, Jobson-Horne probes, Hartmann crocodile micro-ear forceps, Tilley dressing forceps, Thudichum / Vienna nasal specula, Frazier suction tubes, tongue depressors, and complete ENT diagnostic sets. Contact us to verify individual instrument sizes and set compositions.',
      ne: 'नाक, कान र घाँटी (ENT) को जाँच तथा शल्यक्रियामा प्रयोग हुने उच्च गुणस्तरका स्टेनलेस स्टिल औजारहरू। कानको स्पेकुलम, जब्सन-हर्न प्रोब, हार्टम्यान क्रोकोडाइल माइक्रो फोर्सेप्स, टिली फोर्सेप्स, थुडिचम/भियना नाकको स्पेकुलम, फ्रेजियर सक्सन ट्युब र टङ डिप्रेरहरू उपलब्ध छन्। आवश्यक साइज र इन्स्ट्रुमेन्ट सेटबारे जानकारी लिन सम्पर्क गर्नुहोस्।',
    },
    keyPoints: {
      en: [
        'Ear Instruments: Jobson-Horne probes, Hartmann ear specula (sizes 1-4), Hartmann crocodile micro-forceps, Tilley ear forceps',
        'Nose Instruments: Thudichum nasal specula (sizes 1-3), Killian/Vienna nasal specula, Heymann nasal scissors, Frazier suction tubes',
        'Throat Instruments: Stainless steel & wooden tongue depressors, Boyle-Davis mouth gags, tonsil holding forceps, Yankauer suction tips',
        'Manufactured from corrosion-resistant medical stainless steel suitable for repeated autoclave cycles',
      ],
      ne: [
        'कानका औजार: जब्सन-हर्न प्रोब, हार्टम्यान कान स्पेकुलम सेट, क्रोकोडाइल माइक्रो फोर्सेप्स, टिली फोर्सेप्स',
        'नाकका औजार: थुडिचम स्पेकुलम (१-३ नम्बर), भियना स्पेकुलम, हेइम्यान कैंची, फ्रेजियर सक्सन ट्युब',
        'घाँटीका औजार: टङ डिप्रेशर, ब्वायल-डेभिस माउथ ग्याग, टन्सिल फोर्सेप्स, याङ्काउर सक्सन टिप',
        'खिया नलाग्ने मेडिकल स्टेनलेस स्टिल, बारम्बार अटोक्लेभ गर्न मिल्ने',
      ],
    },
    enquiryOptions: {
      en: [
        'Ear Specula set (Hartmann sizes 1, 2, 3, 4)',
        'Hartmann Alligator / Crocodile Micro Ear Forceps',
        'Tilley Ear / Nasal Dressing Forceps',
        'Thudichum Nasal Specula (sizes 1, 2, 3)',
        'Frazier Suction Tubes with finger cut-off valve',
        'Complete ENT Outpatient Diagnostic & Procedure Tray Set',
      ],
      ne: [
        'हार्टम्यान कान स्पेकुलम सेट (१, २, ३, ४ नम्बर)',
        'हार्टम्यान एलिगेटर / क्रोकोडाइल माइक्रो कान फोर्सेप्स',
        'टिली कान तथा नाक ड्रेसिङ फोर्सेप्स',
        'थुडिचम नाक स्पेकुलम (१, २, ३ नम्बर)',
        'फ्रेजियर सक्सन ट्युब',
        'पूर्ण ईएनटी ओपीडी जाँच तथा प्रोसिजर ट्रे सेट',
      ],
    },
    image: {
      url: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
      alt: {
        en: 'Representative photo of ENT surgical and diagnostic instruments',
        ne: 'ईएनटी (नाक, कान, घाँटी) औजारहरूको सांकेतिक तस्बिर',
      },
      sourceLabel: 'Photo via Unsplash (Representative illustration)',
    },
    tags: ['ent instruments', 'ear speculum', 'crocodile forceps', 'nasal speculum', 'thudichum', 'frazier suction', 'ईएनटी औजार', 'कानको औजार', 'नाकको औजार'],
  },

  // 13. LABORATORY REAGENTS & BRANDS (CORAL, TULIP, ERBA)
  {
    id: 'lab-coral-clinical-systems-reagents',
    slug: 'coral-clinical-systems-biochemistry-reagents',
    categoryId: 'laboratory',
    brand: 'Coral',
    name: {
      en: 'Coral Clinical Systems Biochemistry Reagents & Test Kits',
      ne: 'कोरल क्लिनिकल सिस्टम्स बायोकेमिस्ट्री रिअजेन्ट तथा टेस्ट किटहरू',
    },
    shortDesc: {
      en: 'Clinical chemistry diagnostic reagents from Coral for routine glucose, kidney, liver, and lipid biochemistry panels.',
      ne: 'सुगर, मिर्गौला, कलेजो र लिपिड परीक्षणका लागि कोरल (Coral) ब्रान्डका क्लिनिकल बायोकेमिस्ट्री रिअजेन्टहरू।',
    },
    description: {
      en: 'Diagnostic reagents manufactured by Coral Clinical Systems for routine and special clinical biochemistry diagnostics. Suitable for open semi-automated biochemistry analyzers and photometers. Reagents include Glucose, Urea / BUN, Creatinine, Bilirubin (Total & Direct), SGOT/AST, SGPT/ALT, Alkaline Phosphatase, Total Protein, Albumin, Uric Acid, Cholesterol, and Triglycerides. Analyzer compatibility, packaging format, and kit sizes depend on your laboratory instrument and stock availability. Please provide your exact analyzer model and required test count to confirm compatibility and quotation.',
      ne: 'प्रयोगशालामा नियमित बायोकेमिकल परीक्षणका लागि प्रयोग हुने कोरल (Coral Clinical Systems) का गुणस्तरीय रिअजेन्टहरू। सेमी-अटोमेटेड बायोकेमिस्ट्री एनालाइजरमा प्रयोग गर्न उपयुक्त। सुगर, युरिया, क्रिएटिनिन, बिलिरुबिन, एसजीओटी, एसजीपिटी, एएलपी, प्रोटिन, युरिक एसिड, कोलेस्ट्रोल आदि परीक्षणका किटहरू उपलब्ध छन्। आफ्नो एनालाइजरको मोडेल र ब्याच उपलब्धताबारे बुझ्न सम्पर्क गर्नुहोस्।',
    },
    keyPoints: {
      en: [
        'Verified Brand: Coral (Coral Clinical Systems)',
        'Routine Chemistry: Blood Glucose, Renal Function (Urea, Creatinine, Uric Acid), Liver Function (Bilirubin, SGOT, SGPT, ALP, Protein/Albumin)',
        'Lipid Profile: Total Cholesterol, Triglycerides, and Direct HDL reagents',
        'Cold-chain (2-8°C) storage compliant distribution',
        'Please confirm analyzer model compatibility and kit packaging with our office',
      ],
      ne: [
        'प्रमाणित ब्रान्ड: कोरल (Coral Clinical Systems)',
        'नियमित प्यानल: सुगर, मिर्गौला जाँच (युरिया, क्रिएटिनिन, युरिक एसिड), कलेजो जाँच (बिलिरुबिन, SGOT, SGPT, ALP, प्रोटिन)',
        'लिपिड प्रोफाइल: कोलेस्ट्रोल, ट्राइग्लिसराइड्स, एचडीएल रिअजेन्ट',
        '२ देखि ८ डिग्री सेल्सियस तापक्रममा सुरक्षित भण्डारण',
        'आफ्नो मेसिनको मोडेल र अनुकूलता बुझ्न फोन सम्पर्क गर्नुहोस्',
      ],
    },
    enquiryOptions: {
      en: [
        'Coral Glucose diagnostic reagent kit',
        'Coral Urea (BUN) kinetic reagent kit',
        'Coral Creatinine diagnostic reagent kit',
        'Coral SGOT / AST & SGPT / ALT reagent kits',
        'Coral Bilirubin (Total & Direct) reagent kit',
        'Coral Cholesterol & Triglycerides reagent kits',
      ],
      ne: [
        'कोरल ग्लुकोज रिअजेन्ट किट',
        'कोरल युरिया किट',
        'कोरल क्रिएटिनिन किट',
        'कोरल एसजीओटी तथा एसजीपिटी किट',
        'कोरल बिलिरुबिन किट (Total & Direct)',
        'कोरल कोलेस्ट्रोल तथा ट्राइग्लिसराइड्स किट',
      ],
    },
    image: {
      url: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80',
      alt: {
        en: 'Representative photo of clinical biochemistry reagent kits and laboratory diagnostic vials',
        ne: 'बायोकेमिस्ट्री रिअजेन्ट किट तथा ल्याब डायग्नोस्टिक बोतलहरूको सांकेतिक तस्बिर',
      },
      sourceLabel: 'Photo via Unsplash (Representative illustration)',
    },
    tags: ['coral', 'biochemistry reagents', 'coral clinical systems', 'glucose kit', 'creatinine', 'sgpt', 'कोरल', 'बायोकेमिस्ट्री रिअजेन्ट', 'ल्याब किट'],
  },
  {
    id: 'lab-tulip-diagnostics-rapid-serology',
    slug: 'tulip-diagnostics-serology-rapid-test-kits',
    categoryId: 'laboratory',
    brand: 'Tulip',
    name: {
      en: 'Tulip Diagnostics Serology Reagents & Rapid Test Kits',
      ne: 'ट्युलिप डायग्नोस्टिक्स सेरोलोजी रिअजेन्ट तथा र्‍यापिड टेस्ट किटहरू',
    },
    shortDesc: {
      en: 'Blood grouping antisera, Widal agglutination antigen kits, rapid infectious disease cards, and latex serology from Tulip.',
      ne: 'ब्लड ग्रुपिङ एन्टिसिरा, विडाल टेस्ट किट, र्‍यापिड कार्ड तथा ट्युलिप (Tulip) का सेरोलोजी डायग्नोस्टिक किटहरू।',
    },
    description: {
      en: 'Serology, immunology, and rapid diagnostic screening test kits manufactured by Tulip Diagnostics. Products include monoclonal Blood Grouping Antisera (Anti-A, Anti-B, Anti-D / Rho), Widal Salmonella agglutination antigens, Rapid Malaria (Pf/Pv) antigen cards, Dengue NS1 & Combo rapid cassettes, HIV, HBsAg, and HCV screening cards, Pregnancy (hCG) test strips, and Latex agglutination kits (ASO, CRP, RA factor). Please contact us with your required test parameters and pack quantities to verify live batch lot availability.',
      ne: 'ट्युलिप (Tulip Diagnostics) का सेरोलोजी, इम्युनोलोजी र र्‍यापिड डायग्नोस्टिक टेस्ट किटहरू। रगत समूह छुट्याउने ब्लड ग्रुपिङ एन्टिसिरा (Anti-A, Anti-B, Anti-D/Rh), टाइफाइड जाँच गर्ने विडाल किट, मलेरिया, डेंगु, एचआईभी, एचबीएसएजी, एचसीभी र्‍यापिड कार्ड, प्रेग्नेन्सी स्ट्रिप तथा ASO, CRP, RA लेटेक्स किटहरू उपलब्ध छन्। ब्याच विवरण र दररेटका लागि सम्पर्क गर्नुहोस्।',
    },
    keyPoints: {
      en: [
        'Verified Brand: Tulip (Tulip Diagnostics)',
        'Blood Grouping: Monoclonal Anti-A, Anti-B, Anti-D antisera vials',
        'Febrile Serology: Widal Salmonella Typhi slide/tube antigens with controls',
        'Infectious Disease Rapid Cards: Malaria Antigen (Pf/Pv), Dengue NS1/Combo, HIV, HBsAg, HCV',
        'Latex Agglutination Kits: CRP, ASO, RA / RF Factor',
        'Pregnancy hCG rapid diagnostic test cassettes/strips',
      ],
      ne: [
        'प्रमाणित ब्रान्ड: ट्युलिप (Tulip Diagnostics)',
        'ब्लड ग्रुपिङ: मोनोक्लोनल Anti-A, Anti-B, Anti-D एन्टिसिरा',
        'विडाल किट: साल्मोनेला टाइफी एन्टिजन सेट',
        'र्‍यापिड कार्ड: मलेरिया (Pf/Pv), डेंगु, एचआईभी, एचबीएसएजी, एचसीभी',
        'लेटेक्स किट: सीआरपी (CRP), एएसओ (ASO), बाथ ज्वरो (RA factor)',
        'गर्भ जाँच गर्ने प्रेग्नेन्सी (hCG) र्‍यापिड टेस्ट स्ट्रिप',
      ],
    },
    enquiryOptions: {
      en: [
        'Tulip Blood Grouping Antisera Kit (Anti-A, Anti-B, Anti-D)',
        'Tulip Widal Antigen Set (O, H, AH, BH with positive control)',
        'Tulip Malaria Pf/Pv Antigen Rapid Test Cards',
        'Tulip Dengue NS1 / Combo Rapid Cards',
        'Tulip CRP / ASO / RA Latex Agglutination Kits',
        'Tulip Rapid Pregnancy hCG Card / Strip tests',
      ],
      ne: [
        'ट्युलिप ब्लड ग्रुपिङ किट (Anti-A, Anti-B, Anti-D)',
        'ट्युलिप विडाल एन्टिजन सेट (O, H, AH, BH)',
        'ट्युलिप मलेरिया र्‍यापिड कार्ड',
        'ट्युलिप डेंगु NS1 र्‍यापिड टेस्ट कार्ड',
        'ट्युलिप CRP / ASO / RA लेटेक्स किट',
        'ट्युलिप प्रेग्नेन्सी hCG र्‍यापिड टेस्ट कार्ड/स्ट्रिप',
      ],
    },
    image: {
      url: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80',
      alt: {
        en: 'Representative photo of rapid diagnostic test cards and blood grouping antisera',
        ne: 'र्‍यापिड टेस्ट कार्ड तथा ब्लड ग्रुपिङ एन्टिसिराको सांकेतिक तस्बिर',
      },
      sourceLabel: 'Photo via Unsplash (Representative illustration)',
    },
    tags: ['tulip', 'tulip diagnostics', 'blood grouping', 'widal', 'rapid test', 'dengue kit', 'malaria kit', 'crp kit', 'ट्युलिप', 'ब्लड ग्रुपिङ', 'विडाल'],
  },
  {
    id: 'lab-erba-mannheim-reagents',
    slug: 'erba-mannheim-clinical-chemistry-reagents-controls',
    categoryId: 'laboratory',
    brand: 'Erba',
    name: {
      en: 'Erba Mannheim Clinical Chemistry Reagents, Hematology & Controls',
      ne: 'एर्बा म्यानहाइम क्लिनिकल बायोकेमिस्ट्री रिअजेन्ट, हेमाटोलोजी तथा कन्ट्रोल',
    },
    shortDesc: {
      en: 'System-pack & open-channel clinical chemistry reagents, hematology cell counter solutions, and quality controls from Erba.',
      ne: 'एर्बा (Erba Mannheim) का बायोकेमिस्ट्री रिअजेन्ट, हेमाटोलोजी डाइल्युएन्ट/लाइज तथा क्यालिब्रेटर कन्ट्रोलहरू।',
    },
    description: {
      en: 'Clinical laboratory diagnostic solutions manufactured by Erba Mannheim. Enquiry items include dedicated system reagent cartridges and open-channel chemistry reagents for clinical chemistry analyzers, hematology 3-part / 5-part cell counter solutions (Diluent, Lyse, Rinse), and multiconstituent calibrators/controls (such as Erba Multical and assayed normal/pathological control sera). Because cartridge fittings and barcode compatibility depend strictly on your analyzer model, please provide your exact instrument details when submitting an enquiry.',
      ne: 'एर्बा (Erba Mannheim) का क्लिनिकल प्रयोगशाला सामग्रीहरू। बायोकेमिस्ट्री एनालाइजरका लागि रिअजेन्ट प्याक, हेमाटोलोजी सेल काउन्टरका लागि डाइल्युएन्ट, लाइज, क्लिनिङ सोलुसन र क्यालिब्रेटर/कन्ट्रोल सिरमहरू। बारकोड र कार्ट्रिजको अनुकूलता मेसिनको मोडेल अनुसार फरक हुने भएकाले सोधपुछ गर्दा आफ्नो एनालाइजरको मोडेल स्पष्ट गराउनुहोला।',
    },
    keyPoints: {
      en: [
        'Verified Brand: Erba (Erba Mannheim)',
        'Clinical Chemistry: Reagents for automated and semi-automated clinical chemistry analyzers',
        'Hematology Consumables: Dedicated Diluent, Lyse, and Enzymatic Cleaning Solutions',
        'Quality Assurance: Assayed multiconstituent calibrators and normal/pathological control sera',
        'Please confirm your exact analyzer model and barcode compatibility when inquiring',
      ],
      ne: [
        'प्रमाणित ब्रान्ड: एर्बा (Erba Mannheim)',
        'क्लिनिकल बायोकेमिस्ट्री: अटोमेटेड र सेमी-अटोमेटेड एनालाइजरका लागि रिअजेन्ट',
        'हेमाटोलोजी सोलुसन: डाइल्युएन्ट, लाइज र इन्जाइमेटिक क्लिनर',
        'गुणस्तर नियन्त्रण: क्यालिब्रेटर र नर्मल/प्याथोलोजिकल कन्ट्रोल सिरम',
        'आफ्नो मेसिनको मोडेल र अनुकूलता बुझ्न फोन सम्पर्क गर्नुहोस्',
      ],
    },
    enquiryOptions: {
      en: [
        'Erba Dedicated & Open-Vial Clinical Chemistry Reagents',
        'Erba 3-Part & 5-Part Hematology Diluent, Lyse & Rinse Solutions',
        'Erba Multical Multiconstituent Calibrator sets',
        'Erba Assayed Normal & Pathological Control Sera',
      ],
      ne: [
        'एर्बा बायोकेमिस्ट्री रिअजेन्टहरू',
        'एर्बा हेमाटोलोजी डाइल्युएन्ट, लाइज र क्लिनर सोलुसन',
        'एर्बा मल्टिकल क्यालिब्रेटर',
        'एर्बा नर्मल तथा प्याथोलोजिकल कन्ट्रोल सिरम',
      ],
    },
    image: {
      url: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80',
      alt: {
        en: 'Representative photo of automated analyzer reagents and calibrator controls',
        ne: 'अटोमेटेड एनालाइजर रिअजेन्ट तथा क्यालिब्रेटर कन्ट्रोलको सांकेतिक तस्बिर',
      },
      sourceLabel: 'Photo via Unsplash (Representative illustration)',
    },
    tags: ['erba', 'erba mannheim', 'chemistry analyzer', 'hematology diluent', 'lyse', 'multical', 'control serum', 'एर्बा', 'एनालाइजर रिअजेन्ट', 'कन्ट्रोल सिरम'],
  },
];
