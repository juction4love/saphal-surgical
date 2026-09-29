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
    id: 'surgical-instruments',
    slug: 'surgical-instruments',
    name: {
      en: 'Surgical Instruments & Dressing Materials',
      ne: 'सर्जिकल औजार तथा ड्रेसिङ सामग्रीहरू',
    },
    shortDescription: {
      en: 'Precision surgical steel scissors, forceps, needle holders, scalpels, sterile gauze, cotton, and bandages.',
      ne: 'स्टेनलेस स्टिल सर्जिकल कैंची, फोर्सेप्स, निडल होल्डर, ब्लेड, स्टेराइल गज, कपास र ब्यान्डेजहरू।',
    },
    iconName: 'Scissors',
  },
  {
    id: 'hospital-furniture',
    slug: 'hospital-furniture',
    name: {
      en: 'Hospital Supplies & Ward Essentials',
      ne: 'अस्पताल सामग्री तथा वार्ड फर्निचर',
    },
    shortDescription: {
      en: 'Patient beds, examination couches, dressing & medicine trolleys, IV stands, linen, and ward accessories.',
      ne: 'बिरामी बेड, परीक्षण काउच, ड्रेसिङ तथा औषधि ट्रली, आईभी स्ट्यान्ड, बेडसिट र वार्ड सामग्री।',
    },
    iconName: 'Bed',
  },
  {
    id: 'ot-supplies',
    slug: 'ot-supplies',
    name: {
      en: 'Operating Theatre (OT) Supplies',
      ne: 'अपरेशन थिएटर (OT) सामग्रीहरू',
    },
    shortDescription: {
      en: 'Procedure sets, sterile gowns, surgical drapes, caps, masks, sutures, suction units, and autoclaves.',
      ne: 'शल्यक्रिया सेट, स्टेराइल गाउन, ड्रेप्स, क्याप, मास्क, सुचर धागो, सक्सन मेसिन र अटोक्लेभ।',
    },
    iconName: 'ShieldAlert',
  },
  {
    id: 'cleaning-hygiene',
    slug: 'cleaning-hygiene',
    name: {
      en: 'Cleaning & Hygiene Products',
      ne: 'सरसफाइ तथा स्वच्छता सामग्रीहरू',
    },
    shortDescription: {
      en: 'Surface disinfectants, hand sanitizers, floor cleaning chemicals, wringer mops, buckets, and cleaning trolleys.',
      ne: 'सतह निसङ्क्रमण घोल, स्यानिटाइजर, भुइँ सफाइ रसायन, डबल-बाल्टी मोप ट्रली र ब्रसहरू।',
    },
    iconName: 'Sparkles',
  },
  {
    id: 'waste-handling',
    slug: 'waste-handling',
    name: {
      en: 'Biomedical Waste & Sharps Handling',
      ne: 'फोहोर व्यवस्थापन तथा सार्प्स सामग्री',
    },
    shortDescription: {
      en: 'Color-coded segregation pedal bins, biohazard waste bags, puncture-proof sharps boxes, and needle destroyers.',
      ne: 'रंग-संकेतयुक्त पेडल डस्टबिन, बायोहाजार्ड फोहोरका झोला, सार्प्स बक्स र निडल कटरहरू।',
    },
    iconName: 'Trash2',
  },
  {
    id: 'laboratory',
    slug: 'laboratory',
    name: {
      en: 'Laboratory Equipment & Consumables',
      ne: 'प्रयोगशाला उपकरण तथा उपभोग्य सामग्रीहरू',
    },
    shortDescription: {
      en: 'Clinical analyzers, binocular microscopes, centrifuges, micropipettes, test tubes, and vacutainers.',
      ne: 'ल्याब एनालाइजर, माइक्रोस्कोप, सेन्ट्रिफ्यूज, माइक्रोपिपेट, टेस्ट ट्युब र भ्याकुटेनरहरू।',
    },
    iconName: 'FlaskConical',
  },
  {
    id: 'monitoring-diagnostics',
    slug: 'monitoring-diagnostics',
    name: {
      en: 'Monitoring & Diagnostics',
      ne: 'मोनिटरिङ तथा डायग्नोस्टिक्स',
    },
    shortDescription: {
      en: 'Multi-parameter monitors, ECG machines, pulse oximeters, digital BP monitors, and thermometers.',
      ne: 'बिरामी मोनिटर, ईसीजी मेसिन, पल्स अक्सिमिटर, रक्तचाप नाप्ने यन्त्र र थर्मोमिटर।',
    },
    iconName: 'Activity',
  },
  {
    id: 'respiratory-care',
    slug: 'respiratory-care',
    name: {
      en: 'Respiratory & Emergency Care',
      ne: 'श्वासप्रश्वास तथा आकस्मिक उपकरण',
    },
    shortDescription: {
      en: 'Medical oxygen concentrators, regulators, nebulizers, emergency suction units, and oxygen masks.',
      ne: 'अक्सिजन कन्सेन्ट्रेटर, रेगुलेटर, नेबुलाइजर, आकस्मिक सक्सन मेसिन तथा अक्सिजन मास्क।',
    },
    iconName: 'Wind',
  },
  {
    id: 'consumables-ppe',
    slug: 'consumables-ppe',
    name: {
      en: 'General Consumables & PPE',
      ne: 'सामान्य उपभोग्य सामग्री तथा पीपीई',
    },
    shortDescription: {
      en: 'Examination gloves, disposable masks, plastic aprons, syringes, IV cannulas, and catheters.',
      ne: 'एक्जामिनेसन पञ्जा, डिस्पोजेबल मास्क, प्लास्टिक एप्रोन, सिरिन्ज, क्यानुला र क्याथेटर।',
    },
    iconName: 'Package',
  },
  {
    id: 'rehabilitation-home-care',
    slug: 'rehabilitation-home-care',
    name: {
      en: 'Rehabilitation & Home Care',
      ne: 'पुनर्स्थापना तथा घरायसी हेरचाह',
    },
    shortDescription: {
      en: 'Folding wheelchairs, walkers, crutches, walking sticks, air mattresses, and commode chairs.',
      ne: 'फोल्डिङ ह्विलचेयर, वाकर, वैशाखी, वाकिङ स्टिक, एयर म्याट्रेस र कमोड चेयर।',
    },
    iconName: 'HeartPulse',
  },
];
