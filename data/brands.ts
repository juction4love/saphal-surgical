export interface BrandItem {
  id: string;
  name: string;
  label: {
    en: string;
    ne: string;
  };
  shortDescription: {
    en: string;
    ne: string;
  };
  productTypes: {
    en: string[];
    ne: string[];
  };
}

export const BRANDS: BrandItem[] = [
  {
    id: 'coral',
    name: 'Coral',
    label: {
      en: 'Coral (Coral Clinical Systems)',
      ne: 'कोरल (Coral Clinical Systems)',
    },
    shortDescription: {
      en: 'Clinical chemistry reagents and diagnostic test kits for routine biochemistry laboratory diagnostics.',
      ne: 'क्लिनिकल बायोकेमिस्ट्री प्रयोगशालाका लागि नियमित केमिकल रिअजेन्ट तथा डायग्नोस्टिक किटहरू।',
    },
    productTypes: {
      en: [
        'Routine clinical chemistry reagents (Glucose, Urea, Creatinine, Bilirubin, SGOT/AST, SGPT/ALT, Lipids)',
        'System packs and open-vial reagents for semi-automated and automated analyzers',
        'Calibrators and quality control sera (on enquiry)',
      ],
      ne: [
        'क्लिनिकल बायोकेमिस्ट्री रिअजेन्टहरू (सुगर, युरिया, क्रिएटिनिन, बिलिरुबिन, एसजीओटी, एसजीपिटी, लिपिड)',
        'सेमी तथा फुल्ली अटोमेटेड एनालाइजरका लागि उपयुक्त सिस्टम तथा ओपन प्याकहरू',
        'क्यालिब्रेटर तथा गुणस्तर नियन्त्रण सिरम (सोधपुछ अनुसार)',
      ],
    },
  },
  {
    id: 'tulip',
    name: 'Tulip',
    label: {
      en: 'Tulip (Tulip Diagnostics)',
      ne: 'ट्युलिप (Tulip Diagnostics)',
    },
    shortDescription: {
      en: 'Serology, immunology reagents, blood grouping antisera, and rapid diagnostic screening tests.',
      ne: 'सेरोलोजी, इम्युनोलोजी रिअजेन्ट, ब्लड ग्रुपिङ एन्टिसिरा तथा र्‍यापिड डायग्नोस्टिक टेस्ट किटहरू।',
    },
    productTypes: {
      en: [
        'Blood Grouping Antisera (Anti-A, Anti-B, Anti-D / Rh monoclonal)',
        'Widal antigen slide and tube agglutination test kits',
        'Rapid diagnostic test cards & strips (Malaria, Dengue, HIV, HBsAg, HCV, Pregnancy hCG)',
        'Turbidimetric & latex agglutination kits (ASO, CRP, RA / RF factor)',
      ],
      ne: [
        'ब्लड ग्रुपिङ एन्टिसिरा (Anti-A, Anti-B, Anti-D / Rh)',
        'विडाल एन्टिजन स्लाइड तथा ट्युब टेस्ट किटहरू',
        'र्‍यापिड डायग्नोस्टिक टेस्ट कार्ड तथा स्ट्रिपहरू (मलेरिया, डेंगु, एचआईभी, एचबीएसएजी, एचसीभी, प्रेग्नेन्सी)',
        'लेटेक्स तथा टर्बिडिमेट्रिक किटहरू (ASO, CRP, RA फ्याक्टर)',
      ],
    },
  },
  {
    id: 'erba',
    name: 'Erba',
    label: {
      en: 'Erba (Erba Mannheim)',
      ne: 'एर्बा (Erba Mannheim)',
    },
    shortDescription: {
      en: 'Clinical chemistry reagents, hematology solutions, and clinical laboratory consumables.',
      ne: 'क्लिनिकल बायोकेमिस्ट्री रिअजेन्ट, हेमाटोलोजी सोलुसन तथा क्लिनिकल ल्याब उपभोग्य वस्तुहरू।',
    },
    productTypes: {
      en: [
        'Clinical chemistry reagent packs and dedicated analyzer system reagents',
        'Hematology cell counter lyse, diluent, and enzymatic cleaner solutions',
        'Multiconstituent calibrators and normal / pathological control sera',
      ],
      ne: [
        'क्लिनिकल बायोकेमिस्ट्री रिअजेन्ट प्याक तथा सिस्टम रिअजेन्टहरू',
        'हेमाटोलोजी सेल काउन्टरका लागि लाइज, डाइल्युएन्ट र क्लिनिङ सोलुसन',
        'मल्टिकन्स्टिट्युएन्ट क्यालिब्रेटर र नर्मल/प्याथोलोजिकल कन्ट्रोल सिरम',
      ],
    },
  },
];
