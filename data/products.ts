export interface ProductItem {
  id: string;
  slug: string;
  categoryId: string;
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
];
