export interface ArticleSection {
  heading: {
    en: string;
    ne: string;
  };
  content: {
    en: string[];
    ne: string[];
  };
}

export interface ArticleItem {
  id: string;
  slug: string;
  title: {
    en: string;
    ne: string;
  };
  subtitle: {
    en: string;
    ne: string;
  };
  readTime: {
    en: string;
    ne: string;
  };
  publishedDate: string;
  summary: {
    en: string;
    ne: string;
  };
  intro: {
    en: string;
    ne: string;
  };
  sections: ArticleSection[];
  checklistTitle: {
    en: string;
    ne: string;
  };
  checklist: {
    en: string[];
    ne: string[];
  };
  disclaimer: {
    en: string;
    ne: string;
  };
  enquiryPrompt: {
    en: string;
    ne: string;
  };
  relatedCategories: string[];
}

export const ARTICLES: ArticleItem[] = [
  {
    id: 'planning-surgical-hospital-supplies',
    slug: 'surgical-and-hospital-supplies-planning',
    title: {
      en: 'Surgical and Hospital Supplies: Planning Your Requirements',
      ne: 'सर्जिकल तथा अस्पताल सामग्री: आवश्यकता अनुसार योजना र खरिद मार्गदर्शन',
    },
    subtitle: {
      en: 'A practical procurement guide for clinics, hospitals, laboratories, and care facilities in Nepal.',
      ne: 'नेपालका अस्पताल, क्लिनिक, प्रयोगशाला तथा केयर सेन्टरहरूका लागि व्यावहारिक खरिद योजना।',
    },
    readTime: {
      en: '5 min read',
      ne: '५ मिनेट पढाइ',
    },
    publishedDate: '2026-09-29',
    summary: {
      en: 'How healthcare facilities can systematically evaluate ward needs, determine single-use vs reusable items, verify packaging and sizing, and prepare itemized supply lists.',
      ne: 'स्वास्थ्य संस्थाहरूले वार्ड आवश्यकताको मूल्याङ्कन गर्ने, एकल प्रयोग (Single-use) र पुनःप्रयोगयोग्य सामग्री छुट्याउने र व्यवस्थित खरिद सूची तयार गर्ने विधि।',
    },
    intro: {
      en: 'Planning medical and surgical procurement requires balancing clinical utility, patient safety, storage capacity, and budget. Whether managing a community health post, diagnostic centre, private hospital, or home-care setup, purchasing without a verified inventory plan can lead to stockouts or expired consumables. This guide outlines fundamental factors to consider before placing bulk or regular surgical supply orders.',
      ne: 'चिकित्सीय तथा सर्जिकल सामग्री खरिद गर्दा बिरामीको सुरक्षा, क्लिनिकल उपयोगिता, भण्डारण क्षमता र बजेटबीच सन्तुलन मिलाउनुपर्छ। सामुदायिक स्वास्थ्य चौकी, क्लिनिक, अस्पताल वा घरायसी हेरचाह जुनसुकै ठाउँमा पनि योजनाविहीन खरिद गर्दा सामान अभाव हुने वा म्याद गुज्रिने जोखिम रहन्छ। यस लेखमा सामग्री खरिद गर्नुअघि विचार गर्नुपर्ने मुख्य बुँदाहरू प्रस्तुत गरिएको छ।',
    },
    sections: [
      {
        heading: {
          en: '1. Departmental Needs Assessment and Consumption Patterns',
          ne: '१. शाखागत आवश्यकता र नियमित खपतको मूल्याङ्कन',
        },
        content: {
          en: [
            'Begin by cataloguing regular patient flow and service volumes across specific departments (OPD, emergency, inpatient wards, minor OT, and dressing stations).',
            'Track average monthly consumption for high-turnover consumables such as sterile gauze, cotton rolls, surgical gloves, adhesive plasters, disposable syringes, and IV infusion sets to prevent emergency shortages.',
          ],
          ne: [
            'आफ्नो संस्थाका विभिन्न शाखाहरू (ओपीडी, आकस्मिक कक्ष, अन्तरङ्ग वार्ड, माइनर ओटी र ड्रेसिङ कक्ष) मा आउने बिरामीको औसत संख्या र आवश्यक सामग्रीको विश्लेषण गर्नुहोस्।',
            'नियमित खपत हुने उपभोग्य वस्तुहरू जस्तै स्टेराइल गज, कपास, सर्जिकल पञ्जा, टाँस्ने टेप, सिरिन्ज र आईभी सेटको मासिक खपतको रेकर्ड राखी मौज्दात योजना बनाउनुहोस्।',
          ],
        },
      },
      {
        heading: {
          en: '2. Single-Use (Disposable) vs Reusable Selection Factors',
          ne: '२. एकल प्रयोग (डिस्पोजेबल) र पुनःप्रयोगयोग्य सामग्रीको छनोट',
        },
        content: {
          en: [
            'Single-use items (e.g. sterile cannula, syringes, blood collection tubes, examination gloves, disposable drapes) eliminate reprocessing steps and reduce cross-contamination risks when packaging seals remain intact.',
            'Reusable items (e.g. stainless steel instruments, kidney trays, bedpans, silicone ambu bags) require verified on-site cleaning and autoclave facilities. Ensure that reusable instruments specify medical-grade surgical stainless steel suitable for repeated sterilization cycles.',
          ],
          ne: [
            'एकल प्रयोग हुने (डिस्पोजेबल) सामग्रीहरू (जस्तै क्यानुला, सिरिन्ज, रगत संकलन ट्युब, डिस्पोजेबल पञ्जा) ले निसङ्क्रमणको झन्झट कम गर्छन् र संक्रमण फैलिनबाट बचाउँछन्।',
            'पुनःप्रयोगयोग्य सामग्रीहरू (जस्तै स्टेनलेस स्टिलका औजार, किड्नी ट्रे, बेडप्यान) खरिद गर्दा संस्थामा अटोक्लेभ तथा सरसफाइको उचित सुविधा हुनुपर्छ। यी सामग्री उच्च गुणस्तरको मेडिकल ग्रेड स्टिलको हुनु आवश्यक छ।',
          ],
        },
      },
      {
        heading: {
          en: '3. Sizing, Packaging, and Expiry Dates',
          ne: '३. साइज, प्याकिङ र म्याद (Expiry Date) को प्रमाणीकरण',
        },
        content: {
          en: [
            'Ensure full size distribution is ordered based on patient demographics: glove sizes (6.0 to 8.0), IV cannula gauges (18G to 24G), catheter French sizes (12Fr to 18Fr), and pediatric vs adult dressing pads.',
            'Check packaging integrity on delivery. Sterile consumables must have undamaged barrier packaging with clear manufacturing and expiry date labels.',
          ],
          ne: [
            'बिरामीको उमेर र शारीरिक आवश्यकता अनुसार विभिन्न साइजका सामानहरू मगाउनुहोस्: सर्जिकल पञ्जा (६.० देखि ८.०), आईभी क्यानुला (१८G देखि २४G) र क्याथेटरहरू।',
            'सामग्री प्राप्त गर्दा प्याकिङ च्यातिएको वा बिग्रेको नभएको र उत्पादन तथा म्याद समाप्त हुने मिति स्पष्ट उल्लेख भएको यकिन गर्नुहोस्।',
          ],
        },
      },
      {
        heading: {
          en: '4. Storage and Temperature Considerations',
          ne: '४. भण्डारण, ओस र तापक्रम व्यवस्थापन',
        },
        content: {
          en: [
            'Store surgical dressings, sterile drapes, and paper-pouched supplies in cool, dry, well-ventilated stockrooms away from direct sunlight, pest hazards, and floor contact (use clean pallets or shelving).',
            'Adhere strictly to "First In, First Out" (FIFO) inventory rotation so older batch lots are utilized prior to newer stock.',
          ],
          ne: [
            'सर्जिकल ड्रेसिङ, स्टेराइल कपडा तथा कागजी पाउचमा रहेका सामानहरू ओस नआउने, घाम नपर्ने र सफा र्याकमा जमिनभन्दा माथि राख्नुहोस्।',
            'पहिले आएको सामान पहिले प्रयोग गर्ने (FIFO - First In, First Out) विधि अपनाउनुहोस् जसले गर्दा कुनै पनि सामान म्याद गुज्रिएर खेर जाँदैन।',
          ],
        },
      },
      {
        heading: {
          en: '5. Details to Include When Ordering Syringes, IV Sets, and Cannulas',
          ne: '५. सिरिन्ज, आईभी सेट र क्यानुला अर्डर गर्दा खुलाउनुपर्ने मुख्य विवरण',
        },
        content: {
          en: [
            'Syringes: Specify the required capacity, calibration, and intended use—Insulin Syringes (confirming U-40 or U-100 unit calibration and needle attachment from the manufacturer’s label), Tuberculin Syringes (1ml capacity for diagnostic skin testing or small-volume measurement; verify scale graduations and needle specifications), or General Hypodermic Syringes (2ml, 3ml, 5ml, 10ml, 20ml, 50ml/60ml in Luer slip or Luer lock fittings with or without needles). Always confirm manufacturer model parameters prior to ordering.',
            'IV Infusion Sets: Clarify whether vented (with bacterial air inlet for glass/rigid bottles) or non-vented (for collapsible plastic bags) are needed, plus the required drop rate (standard adult 20 drops/ml vs pediatric micro-drip 60 drops/ml measured burette sets) and blood transfusion sets with clot filters.',
            'IV Cannulas: State the specific ISO color-coded gauge and length (14G/16G for emergency resuscitation, 18G/20G for routine infusions and surgery, 22G for delicate veins, 24G/26G for pediatric care) and confirm port/wing configuration (with injection port and wings vs straight).',
          ],
          ne: [
            'सिरिन्ज: आवश्यक क्षमता, क्यालिब्रेसन र प्रयोगको उद्देश्य खुलाउनुहोस्—इन्सुलिन सिरिन्ज (उत्पादकको लेबल हेरी U-40 वा U-100 क्यालिब्रेसन र सुइको प्रकार यकिन गर्नुहोस्), ट्युबरकुलिन सिरिन्ज (१ मिलि क्षमता, डायग्नोस्टिक छाला परीक्षण तथा सानो परिमाणका लागि मापन स्केल र सुइको विवरण यकिन गर्नुहोस्), वा नियमित डिस्पोजेबल सिरिन्जहरू (२ मिलि, ३ मिलि, ५ मिलि, १० मिलि, २० मिलि, ५० मिलि लुअर स्लिप वा लुअर लक)। अर्डर गर्नुअघि सधैं उत्पादकको प्याकेजिङबाट विवरण पुष्टि गर्नुहोस्।',
            'आईभी सेट: एयर भेन्ट भएको वा नभएको, ड्रप फ्याक्टर (वयस्कका लागि २० थोपा/मिलि वा बालबालिकाका लागि ६० थोपा/मिलि ब्युरेट सेट) र रगत चढाउने ब्लड सेटको माग स्पष्ट खुलाउनुहोस्।',
            'आईभी क्यानुला: अन्तर्राष्ट्रिय रंग कोड अनुसारको गेज (१४G, १६G, १८G, २०G, २२G, २४G, २६G) र औषधि दिन मिल्ने इन्जेक्सन पोर्ट तथा पखेटा (Wings) भएको/नभएको विवरण पठाउनुहोस्।',
          ],
        },
      },
      {
        heading: {
          en: '6. Preparing an ENT Instrument Requirement List',
          ne: '६. ईएनटी (नाक, कान, घाँटी) औजारहरूको खरिद सूची तयार गर्ने तरिका',
        },
        content: {
          en: [
            'Ear Examination & Procedure: Specify Hartmann ear specula sets (sizes 1-4), Jobson-Horne probe/curettes, Hartmann alligator/crocodile micro-ear forceps for foreign body removal, and Tilley ear dressing forceps.',
            'Nasal Diagnostics & Minor Surgery: Include Thudichum nasal specula (sizes 1-3), Killian/Vienna specula, Heymann nasal scissors, and Frazier suction tubes (specifying French gauge 6 Fr to 12 Fr with finger cut-off holes).',
            'Throat & Oral Instruments: Detail stainless steel tongue depressors, Boyle-Davis mouth gags with interchangeable tongue plates, tonsil holding forceps, and rigid Yankauer suction handles.',
            'Complete Sets vs Individual Pieces: Determine whether complete outpatient ENT diagnostic trays or individual high-wear replacement instruments are needed to optimize clinic budgets.',
          ],
          ne: [
            'कानको जाँच तथा उपचार: कानको स्पेकुलम सेट (१ देखि ४ नम्बर), जब्सन-हर्न प्रोब, कानबाट बाहिरी वस्तु निकाल्ने क्रोकोडाइल माइक्रो फोर्सेप्स र टिली फोर्सेप्स सूचीकृत गर्नुहोस्।',
            'नाकको जाँच तथा शल्यक्रिया: थुडिचम स्पेकुलम (१ देखि ३ नम्बर), भियना स्पेकुलम, हेइम्यान कैंची र फ्रेजियर सक्सन ट्युब (६ देखि १२ Fr सम्मको साइज) समावेश गर्नुहोस्।',
            'घाँटी तथा मुखको जाँच: स्टेनलेस स्टिल टङ डिप्रेशर, ब्वायल-डेभिस माउथ ग्याग, टन्सिल फोर्सेप्स र यान्काउर सक्सन ह्यान्डलहरू उल्लेख गर्नुहोस्।',
            'पूर्ण सेट र अतिरिक्त पिस: सम्पूर्ण ईएनटी ओपीडी सेट किन्ने वा पुराना बिग्रेका औजार मात्र थप्ने भन्ने यकिन गरी सूची तयार गर्नुहोस्।',
          ],
        },
      },
      {
        heading: {
          en: '7. Confirming Manufacturer-Stated Analyzer Compatibility for Lab Reagents (Coral, Tulip, Erba)',
          ne: '७. प्रयोगशाला रिअजेन्ट खरिद गर्दा एनालाइजर अनुकूलता (Compatibility) यकिन गर्ने तरिका',
        },
        content: {
          en: [
            'System Packs vs Open-Vial Formats: Verify whether your laboratory clinical analyzer is an open channel system (accepting standard universal vials from Coral, Tulip, or Erba) or a dedicated closed-channel system requiring barcode-matched cartridges (such as dedicated Erba XL series system packs).',
            'Cold Chain & Storage Specifications: Verify that diagnostic reagents (such as enzymatic glucose kits, lipid reagents, blood grouping antisera, and calibrators) are maintained under strict 2°C to 8°C cold chain conditions during transit and storage. Never freeze liquid-stable reagents unless specifically stated.',
            'Controls, Calibrators, and Pack Sizes: Ensure matching multi-constituent calibrators (e.g. Erba Multical, Coral standards) and assayed normal/pathological quality control sera are ordered alongside test packs. Verify number of tests per kit based on expected weekly laboratory workload to prevent expiration of opened vials.',
            'Batch Expiry & Sensitivity: For serology and rapid diagnostic kits (e.g., Tulip Widal, Malaria/Dengue rapid test cards, blood grouping antisera), always verify manufacturer batch lot numbers, sensitivity ratings, and shelf-life validity prior to acceptance.',
          ],
          ne: [
            'ओपन-भाइल र सिस्टम प्याक: आफ्नो प्रयोगशालाको बायोकेमिस्ट्री मेसिन ओपन-सिस्टम हो (जसमा कोरल, ट्युलिप वा एर्बाका सामान्य बोतल प्रयोग गर्न सकिन्छ) वा बारकोड भएको क्लोज्ड सिस्टम प्याक चाहिन्छ, खरिद गर्नुअघि यकिन गर्नुहोस्।',
            'कोल्ड-चेन (२° देखि ८°C): इन्जाइमेटिक किट, लिपिड रिअजेन्ट, ब्लड ग्रुपिङ एन्टिसिरा र क्यालिब्रेटरहरूलाई २ देखि ८ डिग्री सेल्सियसको सुरक्षित चिसो तापक्रममा राख्नुपर्छ।',
            'कन्ट्रोल र क्यालिब्रेटर: रिअजेन्टसँगै आवश्यक क्यालिब्रेटर र नर्मल/प्याथोलोजिकल कन्ट्रोल सिरमहरू पनि अर्डर गर्नुहोस्। मासिक टेस्ट संख्या अनुसार उपयुक्त साइजको किट छनोट गर्दा सामान खेर जाँदैन।',
            'ब्याच म्याद र सेन्सिटिभिटी: सेरोलोजी तथा र्‍यापिड कार्ड (ट्युलिप विडाल, मलेरिया/डेंगु कार्ड, एन्टिसिरा) खरिद गर्दा ब्याच नम्बर र म्याद समाप्त हुने मिति स्पष्ट जाँच गर्नुहोस्।',
          ],
        },
      },
    ],
    checklistTitle: {
      en: 'Requirement Planning Checklist',
      ne: 'खरिद योजना चेकलिस्ट',
    },
    checklist: {
      en: [
        'List exact item names, preferred sizes, gauges, and expected monthly quantity.',
        'Differentiate sterile single-use supplies from reusable instruments.',
        'Verify compatibility of consumables with existing facility equipment (e.g. analyzer open vs closed formats, suction tubing diameter, ECG paper rolls).',
        'Inspect shelf-life requirements and store in appropriate environmental conditions (e.g. 2-8°C cold chain for reagents).',
        'Send an itemized enquiry to confirm available brands, package units (boxes/cases), and current wholesale pricing.',
      ],
      ne: [
        'सामग्रीको स्पष्ट नाम, आवश्यक साइज, गेज र मासिक खपत परिमाण सूचीकृत गर्नुहोस्।',
        'स्टेराइल डिस्पोजेबल सामग्री र पुनःप्रयोगयोग्य औजारहरू स्पष्ट छुट्याउनुहोस्।',
        'संस्थामा रहेका उपकरणसँग नयाँ सामग्री मिल्ने/नमिल्ने जाँच गर्नुहोस् (जस्तै एनालाइजर सिस्टम प्याक, सक्सन ट्युबको मोटाइ, ईसीजी रोल साइज)।',
        'म्याद र भण्डारण वातावरण (जस्तै रिअजेन्टका लागि २-८°C कोल्ड चेन) यकिन गर्नुहोस्।',
        'उपलब्ध ब्रान्ड, प्याकिङ र दररेट बुझ्न सामग्रीहरूको सूचीसहित फोन वा ह्वाट्सएपमा सोधपुछ पठाउनुहोस्।',
      ],
    },
    disclaimer: {
      en: 'General guidance only. Material specifications, sterility protocols, analyzer compatibility, and consumption ratios must conform to your institution’s clinical governance and healthcare regulatory guidelines.',
      ne: 'यो सामान्य जानकारी तथा खरिद मार्गदर्शन मात्र हो। सामग्रीको प्राविधिक छनोट, उपकरण अनुकूलता र प्रयोग संस्थाको आन्तरिक क्लिनिकल निर्देशिका अनुसार हुनुपर्छ।',
    },
    enquiryPrompt: {
      en: 'Have your required hospital, surgical, or laboratory supplies list ready? Contact Saphal Surgical House directly via WhatsApp or telephone for brand options, availability, and quotation.',
      ne: 'तपाईंसँग अस्पताल, सर्जिकल वा ल्याब सामग्रीको खरिद सूची छ? उपलब्ध ब्रान्ड, स्टक तथा दररेट बुझ्न सफल सर्जिकल हाउसमा तुरुन्त फोन वा ह्वाट्सएप गर्नुहोस्।',
    },
    relatedCategories: ['surgical-instruments', 'hospital-furniture', 'consumables-ppe', 'laboratory'],
  },
  {
    id: 'ot-materials-purchasing-checklist',
    slug: 'ot-materials-purchasing-checklist',
    title: {
      en: 'OT Materials: An Equipment and Consumables Purchasing Checklist',
      ne: 'अपरेशन थिएटर (OT) सामग्री: उपकरण तथा उपभोग्य वस्तुहरूको खरिद चेकलिस्ट',
    },
    subtitle: {
      en: 'Key factors when selecting surgical instrument sets, PPE, drapes, sutures, suction units, and sterilization wraps.',
      ne: 'सर्जिकल सेट, पीपीई, ड्रेप्स, सुचर, सक्सन युनिट तथा स्टेरिलाइजेसन सामग्री छनोट गर्दा ध्यान दिनुपर्ने पक्षहरू।',
    },
    readTime: {
      en: '6 min read',
      ne: '६ मिनेट पढाइ',
    },
    publishedDate: '2026-09-29',
    summary: {
      en: 'Comprehensive checklist for operating theatre essentials covering surgical stainless steel instruments, barrier textiles, suture types, fluid management, and sterilization validation indicators.',
      ne: 'शल्यक्रिया कक्ष (OT) का लागि आवश्यक स्टेनलेस स्टिल औजार, सुरक्षात्मक गाउन, ड्रेप्स, सुचर, फ्लुइड व्यवस्थापन र स्टेरिलाइजेसन इन्डिकेटर खरिद सम्बन्धी जानकारी।',
    },
    intro: {
      en: 'Operating theatre (OT) environments demand rigorous reliability in both capital equipment and daily disposable supplies. An effective procurement process ensures surgical teams have consistent access to functional instruments, barrier protection, suction accessories, and validated sterilization supplies without compromising procedural workflows.',
      ne: 'अपरेशन थिएटर (OT) मा प्रयोग हुने उपकरण तथा उपभोग्य सामग्रीहरू भरपर्दो र सुरक्षित हुनुपर्छ। शल्यक्रिया टोलीलाई काम गर्न सहज बनाउन, संक्रमणको जोखिम न्यूनीकरण गर्न र शल्यक्रिया प्रक्रियालाई व्यवस्थित राख्न सही गुणस्तरका औजार, सुरक्षात्मक वस्त्र, सक्सन सामान र स्टेरिलाइजेसन आपूर्तिहरू समयमै खरिद गर्नुपर्छ।',
    },
    sections: [
      {
        heading: {
          en: '1. Surgical Instrument Sets and Material Standards',
          ne: '१. शल्यक्रिया औजार सेट र स्टिलको गुणस्तर',
        },
        content: {
          en: [
            'Surgical instruments (scissors, tissue forceps, needle holders, hemostatic clamps, retractors) should be crafted from medical-grade surgical stainless steel (such as AISI 410/420 series) for corrosion resistance, edge retention, and structural rigidity.',
            'Procure standard procedure sets (General Surgery Set, Minor Surgery / Cutdown Set, Caesarean / OB-GYN Set, Dressing Set) and keep extra individual replacement pieces on hand for high-wear instruments like needle holders and fine dissecting scissors.',
          ],
          ne: [
            'सर्जिकल कैंची, फोर्सेप्स, निडल होल्डर, आर्टरी क्ल्याम्प र रिट्र्याक्टरहरू खिया नलाग्ने र धारिलोपन टिक्ने उच्चस्तरीय मेडिकल स्टेनलेस स्टिलबाट बनेको हुनुपर्छ।',
            'सामान्य शल्यक्रिया, माइनर कटडाउन, प्रसूति (C-Section) तथा ड्रेसिङका लागि आवश्यक सेटहरू र नियमित खिइने औजारका अतिरिक्त पिसहरू स्टकमा राख्नुहोस्।',
          ],
        },
      },
      {
        heading: {
          en: '2. Sterile Barrier Textiles and Surgical PPE',
          ne: '२. सुरक्षात्मक कपडा, सर्जिकल गाउन र ड्रेप्स',
        },
        content: {
          en: [
            'Ensure surgeon gowns and patient drapes provide adequate fluid resistance and barrier protection. Disposable non-woven SMS/SMMS gowns provide reliable single-use fluid repellence, while reusable woven cotton drapes require verified laundering and autoclave wrapping.',
            'Stock multi-ply surgical face masks with high filtration efficiency, disposable bouffant/surgeon caps, shoe covers, and powder-free sterile surgical gloves across accurate hand sizes.',
          ],
          ne: [
            'सर्जिकल गाउन र ड्रेप्सले रगत तथा तरल पदार्थ छेक्ने (फ्लुइड रेसिस्टेन्ट) क्षमता राख्नुपर्छ। डिस्पोजेबल नन-ओभन गाउन एकल प्रयोगका लागि उपयुक्त हुन्छन् भने कपडाका गाउनलाई नियमपूर्वक धुने र अटोक्लेभ गर्ने व्यवस्था हुनुपर्छ।',
            'उच्च गुणस्तरका सर्जिकल मास्क, सर्जन क्याप, सु कभर र विभिन्न साइजका पाउडर-रहित स्टेराइल सर्जिकल पञ्जा नियमित मौज्दातमा राख्नुहोस्।',
          ],
        },
      },
      {
        heading: {
          en: '3. Sutures, Blades, and Wound Closure Materials',
          ne: '३. सुचर (धागो), ब्लेड र घाउ सिलाउने सामग्रीहरू',
        },
        content: {
          en: [
            'Maintain an organized inventory of sterile absorbable sutures (e.g. Polyglactin/PGA, Polydioxanone/PDO, Chromic Catgut) and non-absorbable sutures (e.g. Silk, Nylon, Polypropylene) across common metric/USP sizes (USP 2 down to 6-0) with appropriate round-body and cutting needle profiles.',
            'Stock individual foil-packaged sterile carbon steel and stainless steel surgical blades (Sizes 10, 11, 15, 20, 22, 23) compatible with #3 and #4 scalpel handles.',
          ],
          ne: [
            'शल्यक्रिया अनुसार विभिन्न प्रकारका स्टेराइल सुचरहरू—घुलनशील (Absorbable जस्तै PGA, PDO, Catgut) र नघुलनशील (Non-absorbable जस्तै Silk, Nylon, Prolene)—विभिन्न नम्बर (USP २ देखि ६-० सम्म) र सुइको प्रकार अनुसार स्टकमा राख्नुहोस्।',
            '#३ र #४ स्क्याल्पेल ह्यान्डलमा मिल्ने स्टेराइल सर्जिकल ब्लेडहरू (१०, ११, १५, २०, २२, २३ नम्बर) उचित परिमाणमा राख्नुहोस्।',
          ],
        },
      },
      {
        heading: {
          en: '4. Specifying Suture Material, Size (USP), Needle Profile, and Quantity',
          ne: '४. सुचर धागो, साइज (USP), सुइको प्रकार र परिमाण खुलाउने विधि',
        },
        content: {
          en: [
            'Material Selection: Clearly identify whether synthetic absorbable (PGA / Polyglactin braided for tissue support with predictable absorption), natural absorbable (Chromic Catgut), or non-absorbable (Braided Silk for general ligation, Monofilament Nylon / Polyamide for skin closure, Polypropylene for cardiovascular/fascial repair) is required.',
            'USP Gauge Identification: Provide exact USP numbering—heavier gauges (USP 1, 2, 0) for abdominal wall/fascia closure down to ultra-fine gauges (USP 3-0, 4-0 for sub-cuticular/skin, and 5-0, 6-0 for delicate facial or plastic procedures).',
            'Needle Geometry & Curvature: State needle curvature (3/8 circle for superficial skin, 1/2 circle for confined cavities) and point profile (Reverse Cutting for tough skin penetration without cutting through tissue edges vs Round Body / Taper Point for soft friable tissue like intestines and peritoneum).',
            'Packaging Units: Suture orders should specify foil box counts (standard 12, 24, or 36 sterile foils per box) and required thread lengths (e.g. 70cm, 75cm, 90cm).',
          ],
          ne: [
            'धागोको किसिम: घुलनशील (PGA, क्याटगट) वा नघुलनशील (सिल्क, नाइलन, पोलिप्रोपिलिन) के चाहिएको हो स्पष्ट उल्लेख गर्नुहोस्। छाला सिलाउन नाइलन र भित्री अङ्गका लागि PGA/क्याटगट उपयुक्त मानिन्छ।',
            'USP नम्बर (साइज): मोटो धागो (USP 1, 2, 0) पेट तथा मांसपेशीका लागि, मध्यम (2-0, 3-0, 4-0) नियमित घाउका लागि र मसिनो (5-0, 6-0) अनुहार तथा प्लास्टिक सर्जरीका लागि माग गर्नुहोस्।',
            'सुइको बनावट र घुमाइ: ३/८ रिभर्स कटिङ (छालाका लागि) वा १/२ राउन्ड बडी (भित्री नरम अङ्गका लागि) स्पष्ट खुलाउनुहोस्।',
            'प्याकिङ र परिमाण: बक्समा कति थान रहने (१२, २४ वा ३६ वटाको बक्स) र धागोको लम्बाइ (७० वा ९० सेमी) यकिन गरी अर्डर गर्नुहोस्।',
          ],
        },
      },
      {
        heading: {
          en: '5. Suction Accessories and Sterilization Validation',
          ne: '५. सक्सन उपकरण, पाउच र स्टेरिलाइजेसन प्रमाणीकरण',
        },
        content: {
          en: [
            'Equip OT suction machines with shatterproof collection jars, bacterial overflow filters, Yankauer suction tips, and kink-resistant connecting tubing.',
            'For instrument reprocessing, utilize medical-grade steam sterilization indicator strips (Class 4 or Class 5 chemical indicators), autoclave indicator tape, and heat-sealable or self-seal paper/film sterilization pouches with dual process indicators.',
          ],
          ne: [
            'अपरेशन थिएटर सक्सन मेसिनका लागि बलियो जार, ब्याक्टेरियल फिल्टर, यान्कावर सक्सन टिप र कनेक्टिङ ट्युबिङ तयारी अवस्थामा राख्नुहोस्।',
            'औजार निसङ्क्रमणको गुणस्तर मापनका लागि अटोक्लेभ इन्डिकेटर स्ट्रिप (Class 4/5), अटोक्लेभ टेप र स्टेरिलाइजेसन पाउचहरू नियमित प्रयोग गर्नुहोस्।',
          ],
        },
      },
    ],
    checklistTitle: {
      en: 'OT Procurement Checklist',
      ne: 'ओटी खरिद चेकलिस्ट',
    },
    checklist: {
      en: [
        'Procedure-specific stainless steel instrument sets (Major, Minor, OB-GYN, Ortho essentials).',
        'Sterile surgical gloves (sizes 6.0, 6.5, 7.0, 7.5, 8.0) and protective PPE.',
        'Surgical disposable drapes, towel clamps, and fluid-repellent gowns.',
        'Suture materials: Absorbable & Non-absorbable with varied needle curves and gauges.',
        'Surgical blades (#10, #11, #15, #20, #22, #23) and matching handles.',
        'OT suction tubing, Yankauer handles, collection jars, and bacterial filters.',
        'Autoclave rolls/pouches, chemical indicator strips, and autoclave sealing tape.',
      ],
      ne: [
        'शल्यक्रिया अनुसारका स्टेनलेस स्टिल औजार सेटहरू (मेजर, माइनर, गाइनी आदि)।',
        'विभिन्न साइजका स्टेराइल सर्जिकल पञ्जा (६.० देखि ८.०) र पीपीई।',
        'सर्जिकल ड्रेप्स, टावेल क्ल्याम्प र फ्लुइड-प्रतिरोधी गाउन।',
        'सुचर धागोहरू: घुलनशील र नघुलनशील (आवश्यक सुइ र साइज अनुसार)।',
        'सर्जिकल ब्लेडहरू (#१०, #११, #१५, #२०, #२२, #२३) र ह्यान्डलहरू।',
        'सक्सन ट्युबिङ, यान्कावर ह्यान्डल, जार र ब्याक्टेरियल फिल्टर।',
        'अटोक्लेभ पाउच, केमिकल इन्डिकेटर स्ट्रिप्स र अटोक्लेभ टेप।',
      ],
    },
    disclaimer: {
      en: 'Sterilization cycles, decontamination procedures, and packaging must comply strictly with autoclave manufacturer instructions and facility infection-control policies. Clean, disinfect, and sterilize according to validated protocols.',
      ne: 'स्टेरिलाइजेसन तथा निसङ्क्रमण प्रक्रिया मेसिन उत्पादकको निर्देशिका र संस्थाको संक्रमण नियन्त्रण मापदण्ड अनुसार नै सम्पन्न गर्नुपर्छ।',
    },
    enquiryPrompt: {
      en: 'Need an itemized quotation for OT sets, sutures, drapes, or sterilization packaging? Send your requirements directly to Saphal Surgical House on WhatsApp or call our office.',
      ne: 'ओटी सेट, सुचर, ड्रेप्स वा अटोक्लेभ सामग्रीको दररेट र उपलब्धता बुझ्न चाहनुहुन्छ? आफ्नो खरिद सूचीसहित सफल सर्जिकल हाउसमा सम्पर्क गर्नुहोस्।',
    },
    relatedCategories: ['surgical-instruments', 'sterilization', 'consumables-ppe'],
  },
  {
    id: 'hospital-cleaning-materials-selection',
    slug: 'hospital-cleaning-materials-selection',
    title: {
      en: 'Hospital Cleaning Materials: Choosing Products for Their Intended Use',
      ne: 'अस्पताल सरसफाइ सामग्री: प्रयोगको उद्देश्य अनुसार सही सामग्री छनोट',
    },
    subtitle: {
      en: 'Understanding cleaning vs disinfection vs sterilization, floor systems, hand hygiene, and biomedical waste tools.',
      ne: 'सफाई, निसङ्क्रमण र स्टेरिलाइजेसनबीचको भिन्नता, भुइँ-सतह सफाइ, हातको स्वच्छता र फोहोर व्यवस्थापन।',
    },
    readTime: {
      en: '5 min read',
      ne: '५ मिनेट पढाइ',
    },
    publishedDate: '2026-09-29',
    summary: {
      en: 'A practical framework for selecting environmental surface cleaners, floor mopping trolleys, skin antiseptics, color-coded biomedical waste bins, and sharps disposal containers.',
      ne: 'अस्पताल तथा क्लिनिकको भुइँ र सतह सफाइ, ह्यान्ड हाइजिन, रंग-संकेतयुक्त फोहोरका डस्टबिन र सुइ-ब्लेड व्यवस्थापन सामग्री छनोटको व्यावहारिक मार्गदर्शन।',
    },
    intro: {
      en: 'Environmental hygiene in healthcare settings is a frontline defence against healthcare-associated infections (HAIs). Selecting appropriate cleaning and disinfection products requires understanding their distinct roles: general soil removal (cleaning), microbial reduction on surfaces (disinfection), and complete elimination of viable microorganisms on instruments (sterilization). Using the right tool and chemical for the right zone protects both patients and healthcare workers.',
      ne: 'अस्पताल तथा स्वास्थ्य संस्थामा गरिने वातावरणीय सरसफाइले संक्रमण फैलिनबाट रोक्न मुख्य भूमिका खेल्छ। सरसफाइका सामग्री छनोट गर्दा तीनवटा कुराको भिन्नता बुझ्नुपर्छ: फोहोर हटाउने (Cleaning), सतहको जीवाणु घटाउने (Disinfection) र औजारका सम्पूर्ण जीवाणु नष्ट गर्ने (Sterilization)। सही स्थानमा सही रसायन र सामग्री प्रयोग गर्दा बिरामी तथा स्वास्थ्यकर्मी दुवैको सुरक्षा हुन्छ।',
    },
    sections: [
      {
        heading: {
          en: '1. Distinguishing Cleaning, Disinfection, and Sterilization',
          ne: '१. सरसफाइ (Cleaning), निसङ्क्रमण (Disinfection) र स्टेरिलाइजेसनको भिन्नता',
        },
        content: {
          en: [
            'Cleaning: The physical removal of visible dust, soil, organic material, and blood using water, detergents, and friction. Cleaning must always precede chemical disinfection, as organic matter can neutralize disinfectant action.',
            'Disinfection: The thermal or chemical process that inactivates virtually all recognized pathogenic microorganisms on inanimate surfaces, but not necessarily all bacterial spores.',
            'Sterilization: The validated destruction of all forms of microbial life (including bacterial endospores) using high-pressure steam autoclaves or chemical sterilants, reserved strictly for critical surgical instruments and invasive devices.',
          ],
          ne: [
            'सरसफाइ (Cleaning): पानी, डिटरजेन्ट र घर्षणको सहायताले देखिने धुलो, फोहोर र रगत सफा गर्ने प्रक्रिया। निसङ्क्रमण गर्नुअघि सतह सफा हुनैपर्छ किनकि फोहोरले कीटाणुनाशकको असर कम गर्छ।',
            'निसङ्क्रमण (Disinfection): भुइँ, भित्ता, बेड तथा उपकरणका बाहिरी सतहमा रहेका हानिकारक जीवाणुहरूलाई रासायनिक घोल वा तातोको माध्यमबाट निष्क्रिय बनाउने प्रक्रिया।',
            'स्टेरिलाइजेसन (Sterilization): शल्यक्रियाका औजार तथा भित्री प्रयोग हुने सामग्रीमा रहेका सम्पूर्ण सूक्ष्म जीवाणु र तिनका बीजाणु (Spores) लाई अटोक्लेभ मेसिनबाट पूर्ण रूपमा नष्ट गर्ने प्रक्रिया।',
          ],
        },
      },
      {
        heading: {
          en: '2. Environmental Surface and Floor Cleaning Systems',
          ne: '२. भुइँ तथा सतह सफाइका उपकरण र रसायनहरू',
        },
        content: {
          en: [
            'For high-efficiency ward cleaning, dual-bucket wringer trolleys (separating clean wash solution from dirty rinse water) minimize cross-contamination compared to single-bucket mops.',
            'Utilize color-coded microfiber mops and wiping cloths (e.g. red for toilets/washrooms, yellow for isolation/infectious areas, blue for general wards, green for food/kitchen areas) to prevent transferring bacteria across functional areas.',
            'Always consult manufacturer Safety Data Sheets (SDS) and facility infection control guidelines for specific chemical dilution ratios, water temperature requirements, and wet contact dwell times.',
          ],
          ne: [
            'वार्ड तथा कोरिडोर सफा गर्न सफा पानी र फोहोर पानी छुट्टाछुट्टै राख्ने दुई-बाल्टीयुक्त ट्रली (Double Bucket Mop Trolley) प्रयोग गर्दा फोहोर अन्यत्र फैलिन पाउँदैन।',
            'रंग-संकेत गरिएका कपडा तथा मप (जस्तै शौचालयका लागि रातो, आइसोलेसनका लागि पहेंलो, सामान्य वार्डका लागि निलो) प्रयोग गर्दा एक ठाउँको कीटाणु अर्को ठाउँमा सर्न पाउँदैन।',
            'कुनै पनि निसङ्क्रमण घोल तयार गर्दा उत्पादकको निर्देशिका र संस्थाको कार्यविधि अनुसार सही मात्रामा पानी मिसाउनुपर्छ।',
          ],
        },
      },
      {
        heading: {
          en: '3. Hand Hygiene and Skin Antisepsis Supplies',
          ne: '३. हातको स्वच्छता (Hand Hygiene) र छाला निसङ्क्रमण सामग्री',
        },
        content: {
          en: [
            'Install accessible alcohol-based hand rub (ABHR) dispensers at patient bedside entry points, nursing stations, and clinical examination rooms.',
            'Provide medical liquid hand soaps, Chlorhexidine-based surgical scrubs for OT scrub stations, and disposable single-use paper hand towels to prevent re-contaminating clean hands on shared cloth towels.',
          ],
          ne: [
            'बिरामीको बेड नजिक, नर्सिङ स्टेसन र ओपीडी कोठामा सजिलै प्रयोग गर्न मिल्ने अल्कोहल-आधारित ह्यान्ड रब (Hand Sanitizer) को व्यवस्था गर्नुहोस्।',
            'हात धुनका लागि लिक्विड सोप, ओटीका लागि क्लोरहेक्सिडिन वा पोभिडोन-आयोडिन स्क्रब र हात पुछ्नका लागि डिस्पोजेबल पेपर टावेल प्रयोग गर्नुहोस्।',
          ],
        },
      },
      {
        heading: {
          en: '4. Biomedical Waste Segregation and Sharps Disposal',
          ne: '४. जोखिमयुक्त फोहोर वर्गीकरण र तिखा वस्तु (Sharps) को व्यवस्थापन',
        },
        content: {
          en: [
            'Implement standardized color-coded pedal-operated waste bins with matching heavy-duty biohazard liner bags for infectious, non-infectious, anatomical, and recyclable hospital waste streams.',
            'Position rigid, puncture-resistant, tamper-evident sharps disposal containers and needle burners/syringes destroyers at every clinical station where needles, ampoules, and scalpel blades are handled to protect sanitation workers.',
          ],
          ne: [
            'हातले छुनु नपर्ने खुट्टाले थिचेर खुल्ने (Pedal-operated) रंग-संकेतयुक्त डस्टबिन र बलिया बायोहाजार्ड फोहोरका झोलाहरू प्रयोग गरी फोहोरलाई स्रोतमा नै वर्गीकरण गर्नुहोस्।',
            'प्रयोग गरिएका सुइ, ब्लेड र एम्पुलहरू सुरक्षित रूपमा फाल्नका लागि पन्चर नहुने बलिया प्लास्टिकका सार्प्स कन्टेनर (Sharps Containers) र निडल कटरहरू अनिवार्य राख्नुहोस्।',
          ],
        },
      },
    ],
    checklistTitle: {
      en: 'Cleaning & Waste Supplies Checklist',
      ne: 'सरसफाइ तथा फोहोर व्यवस्थापन चेकलिस्ट',
    },
    checklist: {
      en: [
        'Surface cleaning detergents and hospital-grade surface disinfectants.',
        'Double-bucket mop wringer trolleys with replacement microfiber mop heads.',
        'Color-coded cleaning cloths, scrubbing brushes, and long-handle wipers.',
        'Alcohol hand rubs (70-80% formulations) and wall-mounted dispensers.',
        'OT antiseptic hand scrubs (Povidone Iodine / Chlorhexidine formulations).',
        'Color-coded waste segregation pedal bins (Red, Yellow, Blue, Green, Black).',
        'Heavy-gauge biohazard waste bags and puncture-proof sharps boxes.',
      ],
      ne: [
        'भुइँ तथा सतह सफा गर्ने डिटरजेन्ट र अस्पताल निसङ्क्रमण घोलहरू।',
        'डबल-बाल्टी मोप ट्रली र परिवर्तन गर्न मिल्ने माइक्रोफाइबर मपहरू।',
        'रंग-संकेत गरिएका वाइपिङ कपडा, ब्रस र लामो ह्यान्डल भएका वाइपरहरू।',
        'अल्कोहल ह्यान्ड रब (ह्यान्ड स्यानिटाइजर) र भित्तामा झुन्ड्याउने डिस्पेन्सरहरू।',
        'ओटीका लागि एन्टीसेप्टिक स्क्रब सोलुसनहरू।',
        'खुट्टाले थिच्ने रंगीन फोहोरका डस्टबिनहरू (रातो, पहेंलो, निलो, हरियो)।',
        'बाक्लो बायोहाजार्ड फोहोर झोला र पन्चर-प्रतिरोधी सार्प्स बक्सहरू।',
      ],
    },
    disclaimer: {
      en: 'Do not mix incompatible chemical solutions. Refer to individual product labels and facility safety data sheets for precise dilution guidelines, PPE requirements, and contact times.',
      ne: 'विभिन्न रसायनहरूलाई मनपरी नमिसानुहोस्। प्रयोगको विधि, पानीको मात्रा र सम्पर्क समयका लागि उत्पादनको लेबल र सुरक्षा निर्देशिका पालना गर्नुहोस्।',
    },
    enquiryPrompt: {
      en: 'Looking to replenish hospital hygiene products, mop trolleys, hand sanitizers, or waste segregation bins? Contact Saphal Surgical House for volume availability and delivery details in Chitwan.',
      ne: 'अस्पताल सरसफाइ सामग्री, मोप ट्रली, स्यानिटाइजर वा फोहोरका डस्टबिनहरूको थोक तथा खुद्रा आपूर्तिबारे बुझ्न सफल सर्जिकल हाउसमा तुरुन्त सम्पर्क गर्नुहोस्।',
    },
    relatedCategories: ['cleaning-hygiene', 'waste-handling', 'consumables-ppe'],
  },
];
