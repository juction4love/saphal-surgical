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
    id: 'sterilization',
    slug: 'sterilization',
    name: { en: 'Sterilizers & Sterilization Supplies', ne: 'स्टेरिलाइजर तथा स्टेरिलाइजेसन सामग्री' },
    shortDescription: {
      en: 'Autoclaves, sterilization pouches and indicators; contact to confirm models and availability.',
      ne: 'अटोक्लेभ, स्टेरिलाइजेसन पाउच तथा इन्डिकेटर; मोडेल र उपलब्धता बुझ्न सम्पर्क गर्नुहोस्।',
    },
    iconName: 'ShieldAlert',
  },
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
  {
    id: 'orthopedics-supports-braces',
    slug: 'orthopedics-supports-braces',
    name: {
      en: 'Orthopedic Supports, Braces & Casting Supplies',
      ne: 'अर्थोपेडिक सपोर्ट, ब्रेस तथा कास्टिङ सामग्री',
    },
    shortDescription: {
      en: 'Enquiry catalogue for orthopedic braces, supports, casting supplies, traction and related instruments.',
      ne: 'अर्थोपेडिक ब्रेस, सपोर्ट, कास्टिङ सामग्री, ट्र्याक्सन तथा सम्बन्धित उपकरणका लागि सोधपुछ क्याटलग।',
    },
    iconName: 'HeartPulse',
  },
  {
    id: 'obstetrics-gynaecology-urology',
    slug: 'obstetrics-gynaecology-urology',
    name: {
      en: 'Obstetrics, Gynaecology & Urology Supplies',
      ne: 'प्रसूति, स्त्रीरोग तथा युरोलोजी सामग्री',
    },
    shortDescription: {
      en: 'Enquiry catalogue for obstetric, gynaecological and urinary-care instruments and supplies.',
      ne: 'प्रसूति, स्त्रीरोग तथा मूत्र हेरचाहका उपकरण र सामग्रीका लागि सोधपुछ क्याटलग।',
    },
    iconName: 'ShieldAlert',
  },
  {
    id: 'airway-anesthesia-respiratory',
    slug: 'airway-anesthesia-respiratory',
    name: {
      en: 'Airway, Anaesthesia & Respiratory Supplies',
      ne: 'एयरवे, एनेस्थेसिया तथा श्वासप्रश्वास सामग्री',
    },
    shortDescription: {
      en: 'Enquiry catalogue for hospital airway, anaesthesia and respiratory equipment and consumables.',
      ne: 'अस्पताल प्रयोजनका एयरवे, एनेस्थेसिया तथा श्वासप्रश्वास उपकरण र उपभोग्य सामग्रीका लागि सोधपुछ क्याटलग।',
    },
    iconName: 'Wind',
  },
  {
    id: 'emergency-critical-care',
    slug: 'emergency-critical-care',
    name: {
      en: 'Emergency & Critical-Care Equipment',
      ne: 'आकस्मिक तथा सघन हेरचाह उपकरण',
    },
    shortDescription: {
      en: 'Enquiry catalogue for hospital emergency and critical-care equipment.',
      ne: 'अस्पतालका आकस्मिक तथा सघन हेरचाह उपकरणका लागि सोधपुछ क्याटलग।',
    },
    iconName: 'Activity',
  },
  {
    id: 'dressings-drains-procedure',
    slug: 'dressings-drains-procedure',
    name: {
      en: 'Dressings, Drains & Procedure Supplies',
      ne: 'ड्रेसिङ, ड्रेन तथा प्रोसिजर सामग्री',
    },
    shortDescription: {
      en: 'Enquiry catalogue for dressings, drainage supplies and procedure consumables.',
      ne: 'ड्रेसिङ, ड्रेनेज सामग्री तथा प्रोसिजर उपभोग्य सामग्रीका लागि सोधपुछ क्याटलग।',
    },
    iconName: 'Package',
  },
  {
    id: 'sterilization-infection-control',
    slug: 'sterilization-infection-control',
    name: {
      en: 'Sterilization & Infection-Control Supplies',
      ne: 'निर्जीविकरण तथा संक्रमण नियन्त्रण सामग्री',
    },
    shortDescription: {
      en: 'Enquiry catalogue for sterilization equipment, packaging and process indicators.',
      ne: 'निर्जीविकरण उपकरण, प्याकेजिङ तथा प्रक्रिया सूचकका लागि सोधपुछ क्याटलग।',
    },
    iconName: 'ShieldAlert',
  },
  {
    id: 'ward-patient-support',
    slug: 'ward-patient-support',
    name: {
      en: 'Ward, Patient-Handling & Support Supplies',
      ne: 'वार्ड, बिरामी स्थानान्तरण तथा सहायक सामग्री',
    },
    shortDescription: {
      en: 'Enquiry catalogue for ward equipment, patient handling and support supplies.',
      ne: 'वार्ड उपकरण, बिरामी स्थानान्तरण तथा सहायक सामग्रीका लागि सोधपुछ क्याटलग।',
    },
    iconName: 'Bed',
  },
  {
    id: 'baby-maternity',
    slug: 'baby-maternity',
    name: {
      en: 'Baby & Maternity Care',
      ne: 'शिशु तथा मातृ हेरचाह',
    },
    shortDescription: {
      en: 'Enquiry catalogue for baby daily-care and feeding accessories, maternity supplies and related equipment.',
      ne: 'शिशु दैनिक हेरचाह तथा खुवाउने सामग्री, मातृ सामग्री र सम्बन्धित उपकरणका लागि सोधपुछ क्याटलग।',
    },
    iconName: 'HeartPulse',
  },
];
