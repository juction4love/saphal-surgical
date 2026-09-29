export interface CategoryData {
  id: string;
  slug: string;
  name: {
    en: string;
    ne: string;
  };
  shortDescription: {
    en: string;
    ne: string;
  };
  iconName: string;
}

export const CATEGORIES: CategoryData[] = [
  {
    id: 'laboratory',
    slug: 'laboratory',
    name: {
      en: 'Laboratory Equipment & Supplies',
      ne: 'प्रयोगशाला उपकरण तथा सामग्रीहरू',
    },
    shortDescription: {
      en: 'Clinical laboratory analyzers, microscopes, centrifuges, and specimen testing consumables.',
      ne: 'क्लिनिकल ल्याब एनालाइजर, माइक्रोस्कोप, सेन्ट्रिफ्यूज तथा परीक्षण उपभोग्य सामग्रीहरू।',
    },
    iconName: 'FlaskConical',
  },
  {
    id: 'surgical-instruments',
    slug: 'surgical-instruments',
    name: {
      en: 'Surgical Instruments',
      ne: 'शल्यक्रिया औजारहरू',
    },
    shortDescription: {
      en: 'Stainless steel surgical scissors, forceps, needle holders, clamps, and procedure sets.',
      ne: 'स्टेनलेस स्टिल सर्जिकल कैंची, फोर्सेप्स, निडल होल्डर, क्ल्याम्प तथा बेसिक सेटहरू।',
    },
    iconName: 'Scissors',
  },
  {
    id: 'sterilization',
    slug: 'sterilization',
    name: {
      en: 'Sterilization & Infection Control',
      ne: 'स्टेरिलाइजेसन तथा निसङ्क्रमण',
    },
    shortDescription: {
      en: 'Steam autoclaves, sterilization pouches, indicators, and disinfection supplies.',
      ne: 'अटोक्लेभ, स्टेरिलाइजेसन पाउच, इन्डिकेटर स्ट्रिप्स तथा निसङ्क्रमण सामग्री।',
    },
    iconName: 'ShieldAlert',
  },
  {
    id: 'monitoring-diagnostics',
    slug: 'monitoring-diagnostics',
    name: {
      en: 'Monitoring & Diagnostics',
      ne: 'मोनिटरिङ तथा डायग्नोस्टिक्स',
    },
    shortDescription: {
      en: 'Multi-parameter monitors, ECG machines, pulse oximeters, BP monitors, and thermometers.',
      ne: 'बिरामी मोनिटर, ईसीजी मेसिन, पल्स अक्सिमिटर, रक्तचाप नाप्ने यन्त्र र थर्मोमिटर।',
    },
    iconName: 'Activity',
  },
  {
    id: 'respiratory-care',
    slug: 'respiratory-care',
    name: {
      en: 'Respiratory Care',
      ne: 'श्वासप्रश्वास सम्बन्धी उपकरणहरू',
    },
    shortDescription: {
      en: 'Medical oxygen concentrators, regulators, nebulizers, suction units, and accessories.',
      ne: 'अक्सिजन कन्सेन्ट्रेटर, रेगुलेटर, नेबुलाइजर, सक्सन मेसिन तथा मास्क-ट्युबिङ।',
    },
    iconName: 'Wind',
  },
  {
    id: 'hospital-furniture',
    slug: 'hospital-furniture',
    name: {
      en: 'Hospital Furniture',
      ne: 'अस्पताल तथा क्लिनिकल फर्निचर',
    },
    shortDescription: {
      en: 'Patient beds, examination couches, trolleys, wheelchairs, stretchers, and IV stands.',
      ne: 'बिरामी बेड, परीक्षण काउच, मेडिकल ट्रली, ह्विलचेयर, स्ट्रेचर र आईभी स्ट्यान्ड।',
    },
    iconName: 'Bed',
  },
  {
    id: 'consumables-ppe',
    slug: 'consumables-ppe',
    name: {
      en: 'Consumables & PPE',
      ne: 'उपभोग्य सामग्री तथा पीपीई',
    },
    shortDescription: {
      en: 'Surgical gloves, masks, disposable gowns, syringes, cannulas, catheters, and dressings.',
      ne: 'पञ्जा, मास्क, डिस्पोजेबल गाउन, सिरिन्ज, क्यानुला, क्याथेटर र ड्रेसिङ सामग्री।',
    },
    iconName: 'Package',
  },
  {
    id: 'rehabilitation-home-care',
    slug: 'rehabilitation-home-care',
    name: {
      en: 'Rehabilitation & Home Care',
      ne: 'पुनर्स्थापना तथा होम केयर',
    },
    shortDescription: {
      en: 'Walkers, crutches, walking sticks, orthopedic supports, air mattresses, and commode chairs.',
      ne: 'वाकर, वैशाखी, वाकिङ स्टिक, अर्थोपेडिक सपोर्ट, एयर म्याट्रेस र कमोड चेयर।',
    },
    iconName: 'HeartPulse',
  },
];
