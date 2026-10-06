type CatalogueAudienceId = 'home-care' | 'hospital-use' | 'pharmacy-retail';

export interface CatalogueExpansionSeed {
  slug: string;
  legacySlug?: string;
  categoryId: string;
  additionalCategoryIds?: string[];
  name: { en: string; ne: string };
  description: { en: string; ne: string };
  keywords: { en: string[]; ne: string[] };
  orderFields: { en: string[]; ne: string[] };
  audienceIds: CatalogueAudienceId[];
  illustrationKey: `product-${string}`;
}

type SeedGroup = {
  categoryId: string;
  audiences: CatalogueAudienceId[];
  kind: 'instrument' | 'equipment' | 'consumable' | 'support' | 'retail' | 'baby';
  items: Array<[en: string, ne: string, legacySlug?: string]>;
};

const groups: SeedGroup[] = [
  {
    categoryId: 'surgical-instruments',
    audiences: ['hospital-use'],
    kind: 'instrument',
    items: [
      ['Surgical scissors', 'शल्यक्रिया कैंची', 'surgical-scissors-forceps'],
      ['Dressing scissors', 'ड्रेसिङ कैंची'],
      ['Plain dissecting forceps', 'प्लेन डिसेक्टिङ फोर्सेप्स'],
      ['Toothed dissecting forceps', 'टुथ्ड डिसेक्टिङ फोर्सेप्स'],
      ['Artery forceps', 'आर्टरी फोर्सेप्स', 'hemostatic-clamps-needle-holders'],
      ['Mosquito forceps', 'मस्किटो फोर्सेप्स'],
      ['Needle holder', 'निडल होल्डर'],
      ['Scalpel handle', 'स्काल्पेल ह्यान्डल'],
      ['Surgical blades', 'सर्जिकल ब्लेड', 'surgical-sutures-sterile-blades'],
      ['Allis tissue forceps', 'एलिस टिस्यु फोर्सेप्स'],
      ['Babcock tissue forceps', 'ब्याबकक टिस्यु फोर्सेप्स'],
      ['Sponge-holding forceps', 'स्पन्ज होल्डिङ फोर्सेप्स'],
      ['Towel clips', 'टावेल क्लिप्स'],
      ['Surgical retractors', 'सर्जिकल रिट्रयाक्टर', 'surgical-retractors-scalpels-sets'],
      ['Surgical instrument trays', 'सर्जिकल इन्स्ट्रुमेन्ट ट्रे'],
      ['Kidney trays', 'किड्नी ट्रे'],
      ['Dressing drums', 'ड्रेसिङ ड्रम'],
      ['Ear specula', 'कानको स्पेकुलम'],
      ['Nasal specula', 'नाकको स्पेकुलम'],
      ['ENT instrument sets', 'ईएनटी इन्स्ट्रुमेन्ट सेट', 'ent-instruments-specula-forceps-sets'],
      ['Right-angle forceps', 'राइट-एङ्गल फोर्सेप्स'],
      ['Kocher forceps', 'कोचर फोर्सेप्स'],
      ['Bulldog vascular clamps', 'बुलडग भास्कुलर क्ल्याम्प'],
      ['Vascular clamps', 'भास्कुलर क्ल्याम्प'],
      ['Intestinal clamps', 'इन्टेस्टाइनल क्ल्याम्प'],
      ['Bone-holding forceps', 'बोन-होल्डिङ फोर्सेप्स'],
      ['Bone cutters', 'बोन कटर'],
      ['Bone rongeurs', 'बोन रन्जर'],
      ['Periosteal elevators', 'पेरिओस्टियल एलिभेटर'],
      ['Surgical osteotomes', 'सर्जिकल ओस्टियोटोम'],
      ['Surgical chisels', 'सर्जिकल छिनो'],
      ['Bone curettes', 'बोन क्युरेट'],
      ['Surgical mallets', 'सर्जिकल मालेट'],
      ['Skin hooks', 'स्किन हुक'],
      ['Surgical probes', 'सर्जिकल प्रोब'],
      ['Grooved directors', 'ग्रुभ्ड डाइरेक्टर'],
      ['Sinus forceps', 'साइनस फोर्सेप्स'],
      ['Suction cannulas', 'सक्सन क्यानुला'],
      ['Ligature carriers', 'लिगेचर क्यारियर'],
      ['Suture-removal scissors', 'टाँका हटाउने कैंची'],
      ['Vaginal specula', 'भ्याजाइनल स्पेकुलम'],
      ['Uterine sounds', 'युटेराइन साउन्ड'],
      ['Cervical dilators', 'सर्भिकल डाइलेटर'],
      ['Uterine curettes', 'युटेराइन क्युरेट'],
      ['Ovum forceps', 'ओभम फोर्सेप्स'],
      ['Vulsellum forceps', 'भल्सेलम फोर्सेप्स'],
      ['Umbilical cord clamps', 'नाभीको डोरी क्ल्याम्प'],
      ['Obstetric delivery instrument sets', 'प्रसूति इन्स्ट्रुमेन्ट सेट'],
      ['Orthopedic instrument sets', 'अर्थोपेडिक इन्स्ट्रुमेन्ट सेट'],
      ['Orthopedic measuring instruments', 'अर्थोपेडिक मापन उपकरण'],
      ['Surgical bone drills', 'सर्जिकल बोन ड्रिल'],
      ['Surgical bone saws', 'सर्जिकल बोन स'],
    ],
  },
  {
    categoryId: 'consumables-ppe',
    audiences: ['hospital-use', 'pharmacy-retail'],
    kind: 'consumable',
    items: [
      ['General disposable syringes', 'साधारण डिस्पोजेबल सिरिन्ज', 'disposable-syringes-luer-slip-lock'],
      ['Insulin syringes U-40/U-100', 'U-40/U-100 इन्सुलिन सिरिन्ज', 'insulin-syringes-u-40-u-100'],
      ['Tuberculin syringes', 'ट्युबरकुलिन सिरिन्ज', 'tuberculin-syringes-1ml'],
      ['Hypodermic needles', 'हाइपोडर्मिक सुई'],
      ['IV infusion sets', 'आईभी इन्फ्युजन सेट', 'iv-infusion-sets-blood-administration'],
      ['Blood administration sets', 'रगत चढाउने सेट'],
      ['IV cannulas', 'आईभी क्यानुला', 'iv-cannulas-color-coded-gauges'],
      ['Three-way stopcocks', 'थ्री-वे स्टपकक'],
      ['IV extension lines', 'आईभी एक्सटेन्सन लाइन'],
      ['Absorbable sutures', 'घुलनशील सर्जिकल धागो', 'surgical-sutures-absorbable-non-absorbable'],
      ['Non-absorbable sutures', 'नघुल्ने सर्जिकल धागो'],
      ['Sterile surgical gloves', 'स्टेराइल सर्जिकल पञ्जा'],
      ['Examination gloves', 'जाँचका लागि मेडिकल पञ्जा', 'medical-gloves-masks-disposable-gowns'],
      ['Surgical masks', 'सर्जिकल मास्क'],
      ['Surgical gowns', 'सर्जिकल गाउन', 'sterile-surgical-gowns-drapes-ot-packs'],
      ['Surgical drapes', 'सर्जिकल ड्रेप'],
      ['Gauze swabs', 'गज स्वाब'],
      ['Cotton rolls', 'कटन रोल'],
      ['Adhesive medical tape', 'टाँसिने मेडिकल टेप'],
      ['Urine collection bags', 'पिसाब सङ्कलन ब्याग'],
      ['Elastic compression bandages', 'इलास्टिक कम्प्रेसन ब्यान्डेज'],
      ['Crepe bandages', 'क्रेप ब्यान्डेज'],
      ['Plaster-of-Paris bandages', 'प्लास्टर अफ पेरिस ब्यान्डेज'],
      ['Fibreglass casting tape', 'फाइबरग्लास कास्टिङ टेप'],
      ['Transparent film dressings', 'पारदर्शी फिल्म ड्रेसिङ'],
      ['Foam wound dressings', 'फोम घाउ ड्रेसिङ'],
      ['Hydrocolloid dressings', 'हाइड्रोकोलोइड ड्रेसिङ'],
      ['Non-adherent wound dressings', 'नटाँसिने घाउ ड्रेसिङ'],
      ['Wound-closure adhesive strips', 'घाउ बन्द गर्ने टाँसिने स्ट्रिप'],
      ['Surgical skin staplers', 'सर्जिकल स्किन स्ट्यापलर'],
      ['Skin staple removers', 'स्किन स्ट्यापल हटाउने उपकरण'],
      ['Closed wound-drainage sets', 'बन्द घाउ ड्रेनेज सेट'],
      ['Penrose drains', 'पेनरोज ड्रेन'],
      ['Chest drainage systems', 'छाती ड्रेनेज प्रणाली'],
      ['Nasogastric feeding tubes', 'नाकबाट पेटसम्म जाने फिडिङ ट्युब'],
      ['Sterilization pouches', 'स्टेरिलाइजेसन पाउच', 'sterilization-pouches-indicator-supplies'],
      ['Sterilization wrapping sheets', 'स्टेरिलाइजेसन र्‍यापिङ पाना'],
      ['Autoclave indicator tape', 'अटोक्लेभ इन्डिकेटर टेप'],
      ['Chemical sterilization indicators', 'केमिकल स्टेरिलाइजेसन इन्डिकेटर'],
      ['Biological sterilization indicators', 'बायोलोजिकल स्टेरिलाइजेसन इन्डिकेटर'],
      ['Bowie–Dick test packs', 'बोवी–डिक परीक्षण प्याक'],
      ['Disposable shoe covers', 'डिस्पोजेबल जुत्ता कभर'],
      ['Oxygen face masks', 'अक्सिजन फेस मास्क'],
      ['Nasal oxygen cannulas', 'नाकको अक्सिजन क्यानुला'],
      ['Anaesthesia face masks', 'एनेस्थेसिया फेस मास्क'],
      ['Heat-and-moisture exchange filters', 'हिट-मोइस्चर एक्सचेन्ज फिल्टर'],
      ['Bacterial/viral breathing filters', 'ब्याक्टेरियल/भाइरल ब्रीदिङ फिल्टर'],
      ['Breathing circuits', 'ब्रीदिङ सर्किट'],
      ['Endotracheal tubes', 'एन्डोट्राकियल ट्युब'],
      ['Tracheostomy tubes', 'ट्र्याकियोस्टोमी ट्युब'],
      ['Laryngeal mask airways', 'लारिन्जियल मास्क एयरवे'],
      ['Oropharyngeal airways', 'ओरोफारिन्जियल एयरवे'],
      ['Nasopharyngeal airways', 'नासोफारिन्जियल एयरवे'],
      ['Suction catheters', 'सक्सन क्याथेटर'],
      ['Manual resuscitator bags', 'म्यानुअल रिससिटेटर ब्याग'],
      ['Laryngoscope sets', 'ल्यारिङ्गोस्कोप सेट'],
      ['Foley urinary catheters', 'फोली पिसाबको क्याथेटर'],
      ['Intermittent urinary catheters', 'इन्टरमिटेन्ट पिसाबको क्याथेटर'],
      ['Urometer drainage systems', 'युरोमिटर ड्रेनेज प्रणाली'],
      ['Urinary catheterization kits', 'युरिनरी क्याथेटराइजेसन किट'],
      ['Suprapubic catheter kits', 'सुप्राप्युबिक क्याथेटर किट'],
      ['Bladder irrigation sets', 'ब्लाडर इरिगेसन सेट'],
    ],
  },
  {
    categoryId: 'hospital-furniture',
    audiences: ['hospital-use'],
    kind: 'equipment',
    items: [
      ['Hospital beds', 'अस्पतालका बिरामी बेड', 'hospital-beds-examination-couches'],
      ['Hospital mattresses', 'अस्पतालका म्याट्रेस'],
      ['Bedside lockers', 'बेडसाइड लकर'],
      ['Overbed tables', 'बेडमाथि राख्ने टेबल'],
      ['IV stands', 'आईभी स्ट्यान्ड', 'wheelchairs-trolleys-stretchers-iv-stands'],
      ['Hospital stretchers', 'अस्पताल स्ट्रेचर'],
      ['Examination couches', 'जाँच काउच'],
      ['Instrument trolleys', 'इन्स्ट्रुमेन्ट ट्रली'],
      ['Dressing trolleys', 'ड्रेसिङ ट्रली'],
      ['Operating tables', 'अपरेशन टेबल'],
      ['Operating lights', 'अपरेशन लाइट'],
      ['Emergency crash carts', 'इमर्जेन्सी क्र्यास कार्ट'],
      ['Patient privacy screens', 'बिरामी गोपनीयता स्क्रिन'],
      ['Medication trolleys', 'औषधि ट्रली'],
      ['Linen trolleys', 'लिनेन ट्रली'],
      ['Laundry collection carts', 'लुगा सङ्कलन कार्ट'],
      ['Gynaecological examination tables', 'स्त्रीरोग जाँच टेबल'],
      ['Baby changing tables', 'शिशु फेर्ने टेबल'],
    ],
  },
  {
    categoryId: 'ot-supplies',
    audiences: ['hospital-use'],
    kind: 'equipment',
    items: [
      ['Electrosurgical units', 'इलेक्ट्रोसर्जिकल युनिट'],
      ['Medical suction machines', 'मेडिकल सक्सन मेसिन'],
      ['Autoclaves', 'अटोक्लेभ', 'autoclaves-steam-sterilizers'],
      ['Patient monitors', 'बिरामी मोनिटर', 'patient-monitors-ecg-machines'],
      ['ECG machines', 'ईसीजी मेसिन'],
      ['Defibrillators', 'डिफिब्रिलेटर'],
      ['Anaesthesia machines', 'एनेस्थेसिया मेसिन'],
      ['Infusion pumps', 'इन्फ्युजन पम्प'],
      ['Syringe pumps', 'सिरिन्ज पम्प'],
      ['Medical ventilators', 'मेडिकल भेन्टिलेटर'],
      ['Capnography monitors', 'क्याप्नोग्राफी मोनिटर'],
      ['Patient warming systems', 'बिरामी न्यानो राख्ने प्रणाली'],
      ['Ultrasonic instrument cleaners', 'अल्ट्रासोनिक इन्स्ट्रुमेन्ट क्लिनर'],
      ['Instrument washer-disinfectors', 'इन्स्ट्रुमेन्ट धुने तथा निसङ्क्रमण मेसिन'],
      ['Sterilization container systems', 'स्टेरिलाइजेसन कन्टेनर प्रणाली'],
      ['Hospital weighing scales', 'अस्पतालका तौल मेसिन'],
      ['Height-measuring stadiometers', 'उचाइ नाप्ने स्ट्याडियोमिटर'],
      ['Enteral feeding pumps', 'इन्टरल फिडिङ पम्प'],
      ['Enteral feeding bags and sets', 'इन्टरल फिडिङ ब्याग तथा सेट'],
      ['Sequential compression devices', 'क्रमिक कम्प्रेसन उपकरण'],
      ['Oxygen concentrators', 'अक्सिजन कन्सेन्ट्रेटर', 'oxygen-concentrators-regulators'],
      ['Oxygen cylinders and regulator sets', 'अक्सिजन सिलिन्डर तथा रेगुलेटर सेट'],
      ['Nebulizers', 'नेबुलाइजर', 'medical-nebulizers-suction-machines'],
      ['Portable suction units', 'पोर्टेबल सक्सन युनिट'],
      ['CPAP devices', 'सीप्याप उपकरण'],
      ['TENS devices', 'टेन्स उपकरण'],
      ['Electrical muscle stimulators', 'विद्युतीय मांसपेशी स्टिमुलेटर'],
      ['Therapeutic ultrasound units', 'थेराप्युटिक अल्ट्रासाउन्ड युनिट'],
    ],
  },
  {
    categoryId: 'monitoring-diagnostics',
    audiences: ['home-care', 'hospital-use', 'pharmacy-retail'],
    kind: 'equipment',
    items: [
      ['Digital blood-pressure monitors', 'डिजिटल रक्तचाप मोनिटर', 'pulse-oximeters-bp-monitors-thermometers'],
      ['Manual blood-pressure apparatus', 'म्यानुअल रक्तचाप उपकरण'],
      ['Stethoscopes', 'स्टेथोस्कोप'],
      ['Digital thermometers', 'डिजिटल थर्मोमिटर'],
      ['Infrared thermometers', 'इन्फ्रारेड थर्मोमिटर'],
      ['Pulse oximeters', 'पल्स अक्सिमिटर'],
      ['Glucometers', 'ग्लुकोमिटर'],
      ['Glucose test strips', 'ग्लुकोज जाँच स्ट्रिप'],
      ['Peak-flow meters', 'पिक-फ्लो मिटर'],
      ['Incentive spirometers', 'इन्सेन्टिभ स्पाइरोमिटर'],
    ],
  },
  {
    categoryId: 'laboratory',
    audiences: ['hospital-use'],
    kind: 'equipment',
    items: [
      ['Hematology analyzers', 'हेमाटोलोजी एनालाइजर', 'hematology-analyzer'],
      ['Biochemistry analyzers', 'बायोकेमिस्ट्री एनालाइजर', 'biochemistry-analyzer'],
      ['Electrolyte analyzers', 'इलेक्ट्रोलाइट एनालाइजर', 'electrolyte-analyzer'],
      ['Laboratory microscopes', 'प्रयोगशाला माइक्रोस्कोप', 'laboratory-microscope'],
      ['Laboratory centrifuges', 'प्रयोगशाला सेन्ट्रिफ्युज', 'laboratory-centrifuge'],
      ['Micropipettes', 'माइक्रोपिपेट'],
      ['Micropipette tips', 'माइक्रोपिपेट टिप्स'],
      ['Laboratory incubators', 'प्रयोगशाला इन्क्युबेटर', 'laboratory-incubator-hot-air-oven'],
      ['Laboratory hot-air ovens', 'प्रयोगशाला हट-एयर ओभन'],
      ['Laboratory water baths', 'प्रयोगशाला वाटर बाथ', 'water-bath-micropipettes'],
      ['Blood collection tubes', 'रगत सङ्कलन ट्युब', 'lab-refrigerator-specimen-containers'],
      ['Specimen containers', 'नमुना सङ्कलन कन्टेनर'],
      ['Coral laboratory reagents', 'कोरल प्रयोगशाला रिअजेन्ट', 'coral-clinical-systems-biochemistry-reagents'],
      ['Tulip diagnostic reagents and kits', 'ट्युलिप डायग्नोस्टिक रिअजेन्ट तथा किट', 'tulip-diagnostics-serology-rapid-test-kits'],
      ['Erba laboratory reagents', 'एर्बा प्रयोगशाला रिअजेन्ट', 'erba-mannheim-clinical-chemistry-reagents-controls'],
    ],
  },
  {
    categoryId: 'emergency-critical-care',
    audiences: ['hospital-use'],
    kind: 'equipment',
    items: [
      ['Spine boards', 'स्पाइन बोर्ड'],
      ['Cervical immobilization collars', 'घाँटी स्थिर राख्ने कलर'],
      ['Scoop stretchers', 'स्कुप स्ट्रेचर'],
      ['Fluid and blood warmers', 'तरल तथा रगत न्यानो पार्ने उपकरण'],
    ],
  },
  {
    categoryId: 'ward-patient-support',
    audiences: ['hospital-use'],
    kind: 'equipment',
    items: [
      ['Patient transfer boards', 'बिरामी सार्ने बोर्ड'],
      ['Patient hoists', 'बिरामी उठाउने होइस्ट'],
      ['Transfer slings', 'बिरामी सार्ने स्लिङ'],
      ['Bedpans', 'बेडप्यान'],
      ['Urinal bottles', 'युरिनल बोतल'],
    ],
  },
  {
    categoryId: 'rehabilitation-home-care',
    audiences: ['home-care', 'pharmacy-retail'],
    kind: 'support',
    items: [
      ['Manual wheelchairs', 'म्यानुअल ह्विलचेयर', 'wheelchairs-trolleys-stretchers-iv-stands'],
      ['Electric wheelchairs', 'विद्युतीय ह्विलचेयर'],
      ['Commode chairs', 'कमोड चेयर'],
      ['Walkers / folding walking frames', 'वाकर / फोल्डिङ वाकिङ फ्रेम', 'walkers-crutches-orthopedic-supports'],
      ['Walking sticks (quadripod / tripod)', 'वाकिङ स्टिक (क्वाड्रिपोड / ट्राइपोड)'],
      ['Crutches (including forearm crutches)', 'वैशाखी (फोरआर्म क्रचसहित)'],
      ['Rollators', 'रोलाटर'],
      ['Air mattresses for pressure care', 'प्रेसर केयर एयर म्याट्रेस', 'air-mattresses-commode-chairs'],
      ['Home-care adjustable beds', 'घरायसी समायोज्य बेड'],
      ['Knee supports (including hinged braces, immobilizers and patellar straps)', 'घुँडा सपोर्ट (हिन्ज्ड ब्रेस, इम्मोबिलाइजर र पटेलर स्ट्र्यापसहित)'],
      ['Lumbar supports (including thoracolumbar braces and sacroiliac belts)', 'कम्मर सपोर्ट (थोराको-लम्बर ब्रेस र स्याक्रोइलियाक बेल्टसहित)'],
      ['Exercise pulleys', 'व्यायाम पुली'],
      ['Stationary exercise cycles', 'स्थिर व्यायाम साइकल'],
      ['Ankle supports', 'खुट्टाको गोलीगाँठो सपोर्ट'],
      ['Ankle stabilizing braces', 'गोलीगाँठो स्थिर राख्ने ब्रेस'],
      ['Walking boots', 'हिँड्ने बुट'],
      ['Foot-drop splints', 'फुट-ड्रप स्प्लिन्ट'],
      ['Wrist supports', 'कलाई सपोर्ट'],
      ['Wrist cock-up splints', 'कलाई सीधा राख्ने स्प्लिन्ट'],
      ['Thumb-spica splints', 'औँठा स्पाइका स्प्लिन्ट'],
      ['Finger splints', 'औँला स्प्लिन्ट'],
      ['Elbow supports', 'कुहिनो सपोर्ट'],
      ['Tennis-elbow straps', 'टे니스 एल्बो स्ट्र्याप'],
      ['Shoulder immobilizers', 'काँध स्थिर राख्ने सपोर्ट'],
      ['Arm slings', 'हातको स्लिङ'],
      ['Clavicle braces', 'कलर बोन ब्रेस'],
      ['Rib belts', 'करङको बेल्ट'],
      ['Abdominal binders', 'पेट बाँध्ने बेल्ट'],
      ['Postoperative abdominal supports', 'शल्यक्रियापछिको पेट सपोर्ट'],
      ['Maternity support belts', 'गर्भावस्था सपोर्ट बेल्ट'],
      ['Soft cervical collars', 'नरम घाँटी कलर'],
      ['Heel cushions', 'एडी कुशन'],
      ['Heel cups', 'एडी कप'],
      ['Arch-support insoles', 'खुट्टाको आर्च सपोर्ट इनसोल'],
      ['Metatarsal pads', 'मेटाटार्सल प्याड'],
      ['Toe separators', 'खुट्टाका औँला छुट्याउने प्याड'],
      ['Bunion supports', 'बनियन सपोर्ट'],
      ['Orthopedic seat cushions', 'अर्थोपेडिक सिट कुशन'],
      ['Casting stockinette', 'कास्टिङ स्टकनेट'],
      ['Undercast padding', 'कास्टमुनिको प्याडिङ'],
      ['Plaster splints', 'प्लास्टर स्प्लिन्ट'],
      ['Aluminium foam splints', 'आल्मुनियम फोम स्प्लिन्ट'],
      ['Traction kits', 'ट्र्याक्सन किट'],
      ['Traction weights', 'ट्र्याक्सन तौल'],
      ['Orthopedic traction frames', 'अर्थोपेडिक ट्र्याक्सन फ्रेम'],
      ['Cast shoes', 'कास्ट जुत्ता'],
      ['Cast saws', 'कास्ट काट्ने स'],
      ['Cast spreaders', 'कास्ट स्प्रेडर'],
      ['Cast-removal shears', 'कास्ट हटाउने कैंची'],
      ['Wheelchair cushions', 'ह्विलचेयर कुशन'],
      ['Wheelchair positioning belts', 'ह्विलचेयर पोजिसनिङ बेल्ट'],
      ['Raised toilet seats', 'अग्लो ट्वाइलेट सिट'],
      ['Toilet safety frames', 'ट्वाइलेट सेफ्टी फ्रेम'],
      ['Shower chairs', 'शावर चेयर'],
      ['Bath transfer benches', 'बाथ ट्रान्सफर बेन्च'],
      ['Bedside grab rails', 'बेडसाइड समाउने रेल'],
      ['Patient transfer belts', 'बिरामी सार्ने बेल्ट'],
      ['Slide sheets', 'स्लाइड सिट'],
      ['Portable access ramps', 'पोर्टेबल पहुँच र्‍याम्प'],
    ],
  },
  {
    categoryId: 'consumables-ppe',
    audiences: ['home-care', 'pharmacy-retail'],
    kind: 'retail',
    items: [
      ['Hot-water bags', 'तातोपानी ब्याग'],
      ['Reusable cold packs', 'पुनःप्रयोग गर्न मिल्ने चिसो प्याक'],
      ['Reusable hot/cold gel packs', 'पुनःप्रयोग गर्न मिल्ने तातो/चिसो जेल प्याक'],
      ['Electric heating pads', 'विद्युतीय तताउने प्याड'],
      ['Reusable finger-prick devices', 'पुनःप्रयोग गर्न मिल्ने औँला छेड्ने उपकरण'],
      ['Blood-glucose lancets', 'रगतमा चिनी जाँच्ने ल्यान्सेट'],
      ['Insulin pen needles', 'इन्सुलिन पेन सुई'],
      ['Pill organizers', 'औषधि मिलाएर राख्ने बाकस'],
      ['Tablet cutters', 'ट्याब्लेट काट्ने उपकरण'],
      ['Tablet crushers', 'ट्याब्लेट पिस्ने उपकरण'],
      ['Oral dosing syringes', 'मुखबाट औषधि दिने सिरिन्ज'],
      ['Medicine measuring cups', 'औषधि नाप्ने कप'],
      ['Adult incontinence briefs', 'वयस्क इनकन्टिनेन्स ब्रीफ'],
      ['Disposable underpads', 'डिस्पोजेबल अन्डरप्याड'],
      ['Reusable bed-protection pads', 'पुनःप्रयोग गर्न मिल्ने ओछ्यान सुरक्षा प्याड'],
      ['Waterproof mattress protectors', 'पानी नछिर्ने म्याट्रेस कभर'],
      ['Graduated compression stockings', 'ग्राजुएटेड कम्प्रेसन मोजा'],
      ['Anti-embolism stockings', 'एन्टी-एम्बोलिज्म मोजा'],
      ['Ostomy pouches', 'ओस्टोमी पाउच'],
      ['Ostomy skin barriers', 'ओस्टोमी स्किन ब्यारियर'],
      ['Ostomy support accessories', 'ओस्टोमी सपोर्ट सामग्री'],
      ['Nebulizer replacement kits', 'नेबुलाइजर बदल्ने पार्ट्स किट'],
      ['Inhaler spacers', 'इनहेलर स्पेसर'],
      ['CPAP masks', 'सीप्याप मास्क'],
      ['CPAP tubing', 'सीप्याप ट्युबिङ'],
      ['Portable oxygen-concentrator carrying accessories', 'पोर्टेबल अक्सिजन कन्सेन्ट्रेटर बोक्ने सामग्री'],
    ],
  },
  {
    categoryId: 'rehabilitation-home-care',
    audiences: ['home-care', 'pharmacy-retail'],
    kind: 'support',
    items: [
      ['Resistance exercise bands', 'प्रतिरोध व्यायाम ब्यान्ड'],
      ['Hand exercise balls', 'हातको व्यायाम बल'],
      ['Therapy putty', 'थेरापी पुट्टी'],
      ['Finger exercisers', 'औँलाको व्यायाम उपकरण'],
      ['Pedal exercisers', 'पेडल व्यायाम उपकरण'],
      ['Balance boards', 'सन्तुलन बोर्ड'],
      ['Foam exercise rollers', 'फोम व्यायाम रोलर'],
    ],
  },
  {
    categoryId: 'cleaning-hygiene',
    audiences: ['hospital-use'],
    kind: 'consumable',
    items: [
      ['Surface-cleaning and disinfection products', 'सतह सफाइ तथा निसङ्क्रमण सामग्री', 'hospital-surface-floor-disinfectants'],
      ['Instrument-cleaning detergents', 'इन्स्ट्रुमेन्ट सफा गर्ने डिटरजेन्ट'],
      ['Hand-hygiene products', 'हात स्वच्छता सामग्री', 'alcohol-hand-rubs-antiseptic-scrubs'],
    ],
  },
  {
    categoryId: 'waste-handling',
    audiences: ['hospital-use'],
    kind: 'equipment',
    items: [
      ['Sharps containers', 'सुई तथा धारिला सामग्रीको कन्टेनर', 'puncture-proof-sharps-containers-needle-destroyers'],
      ['Biomedical-waste segregation bins', 'बायोमेडिकल फोहोर छुट्याउने डस्टबिन', 'color-coded-biomedical-waste-bins-bags'],
    ],
  },
  {
    categoryId: 'baby-maternity',
    audiences: ['home-care', 'pharmacy-retail'],
    kind: 'baby',
    items: [
      ['Baby diapers', 'बेबी डाइपर'],
      ['Baby wipes', 'बेबी वाइप्स'],
      ['Baby changing mats', 'बेबी चेन्जिङ म्याट'],
      ['Baby cotton wool', 'बेबी कटन'],
      ['Baby washcloths', 'बेबी वाशक्लोथ'],
      ['Baby bath towels', 'बेबी बाथ टावेल'],
      ['Baby bathtubs', 'बेबी बाथटब'],
      ['Baby bath supports', 'बेबी बाथ सपोर्ट'],
      ['Baby cleansers', 'बेबी क्लिन्जर'],
      ['Baby shampoos', 'बेबी स्याम्पु'],
      ['Baby moisturizers', 'बेबी मोइस्चराइजर'],
      ['Diaper barrier creams', 'डाइपर ब्यारियर क्रिम'],
      ['Baby grooming kits', 'बेबी ग्रुमिङ किट'],
      ['Baby nail clippers', 'बेबी नङ काट्ने क्लिपर'],
      ['Baby hairbrushes', 'बेबी हेयरब्रस'],
      ['Baby combs', 'बेबी काइँयो'],
      ['Feeding bottles', 'फिडिङ बोतल'],
      ['Replacement bottle teats', 'बोतलका बदल्ने टिट'],
      ['Bottle-cleaning brushes', 'बोतल सफा गर्ने ब्रस'],
      ['Bottle drying racks', 'बोतल सुकाउने र्‍याक'],
      ['Feeding-bottle sterilizers', 'फिडिङ बोतल स्टेरिलाइजर'],
      ['Bottle warmers', 'बोतल न्यानो पार्ने उपकरण'],
      ['Breast-milk storage bags', 'आमाको दूध राख्ने ब्याग'],
      ['Breast-milk storage containers', 'आमाको दूध राख्ने कन्टेनर'],
      ['Manual breast pumps', 'म्यानुअल ब्रेस्ट पम्प'],
      ['Electric breast pumps', 'विद्युतीय ब्रेस्ट पम्प'],
      ['Breast-pump replacement accessories', 'ब्रेस्ट पम्पका बदल्ने सामग्री'],
      ['Baby feeding cups', 'बेबी फिडिङ कप'],
      ['Baby feeding spoons', 'बेबी फिडिङ चम्चा'],
      ['Baby feeding bowls', 'बेबी फिडिङ कचौरा'],
      ['Feeding bibs', 'फिडिङ बिब'],
      ['Pacifiers', 'प्यासिफायर'],
      ['Pacifier storage cases', 'प्यासिफायर राख्ने केस'],
      ['Teething rings', 'दाँत उम्रँदा चपाउने रिङ'],
      ['Nasal aspirators', 'नाक सफा गर्ने एस्पिरेटर'],
      ['Nasal aspirator replacement accessories', 'नाक एस्पिरेटरका बदल्ने सामग्री'],
      ['Infant medicine droppers', 'शिशुलाई औषधि दिने ड्रपर'],
      ['Baby and infant weighing scales', 'शिशु तौल मेसिन'],
      ['Infant length-measuring boards', 'शिशुको लम्बाइ नाप्ने बोर्ड'],
      ['Baby changing tables', 'शिशु फेर्ने टेबल'],
      ['Nursing pads', 'स्तनपान प्याड'],
      ['Maternity pads', 'प्रसूति प्याड'],
      ['Nursing pillows', 'स्तनपान तकिया'],
      ['Nursing bras', 'स्तनपान ब्रा'],
      ['Breast-milk collection cups', 'आमाको दूध सङ्कलन कप'],
    ],
  },
];

function toSlug(value: string): string {
  return value
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[–—/]/g, ' ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function ordering(kind: SeedGroup['kind']): CatalogueExpansionSeed['orderFields'] {
  switch (kind) {
    case 'instrument':
      return { en: ['Instrument type', 'Size or length', 'Quantity'], ne: ['औजारको प्रकार', 'साइज वा लम्बाइ', 'परिमाण'] };
    case 'equipment':
      return { en: ['Intended setting', 'Configuration or capacity', 'Quantity'], ne: ['प्रयोग गर्ने ठाउँ', 'बनोट वा क्षमता', 'परिमाण'] };
    case 'consumable':
      return { en: ['Type or material', 'Size or specification', 'Pack quantity'], ne: ['प्रकार वा सामग्री', 'साइज वा विवरण', 'प्याक परिमाण'] };
    case 'support':
      return { en: ['Body area or item fit', 'Size', 'Quantity'], ne: ['शरीरको भाग वा मिल्ने उपकरण', 'साइज', 'परिमाण'] };
    case 'retail':
      return { en: ['Type or compatibility', 'Size or pack quantity'], ne: ['प्रकार वा अनुकूलता', 'साइज वा प्याक परिमाण'] };
    case 'baby':
      return { en: ['Age range or compatibility', 'Size or capacity', 'Quantity'], ne: ['उमेर समूह वा अनुकूलता', 'साइज वा क्षमता', 'परिमाण'] };
  }
}

function purchaseDescription(
  kind: SeedGroup['kind'],
  en: string,
  ne: string,
): CatalogueExpansionSeed['description'] {
  switch (kind) {
    case 'instrument':
      return { en: `${en}: confirm instrument type, size and quantity when ordering.`, ne: `${ne} अर्डर गर्दा प्रकार, साइज र परिमाण बताउनुहोस्।` };
    case 'equipment':
      return { en: `${en}: confirm intended setting, configuration and capacity when ordering.`, ne: `${ne} अर्डर गर्दा प्रयोग गर्ने ठाउँ, बनोट र क्षमता यकिन गर्नुहोस्।` };
    case 'consumable':
      return { en: `${en}: specify material, size and pack quantity when ordering.`, ne: `${ne} अर्डर गर्दा सामग्री, साइज र प्याक परिमाण बताउनुहोस्।` };
    case 'support':
      return { en: `${en} for mobility or daily support; confirm fit and size when ordering.`, ne: `${ne} अर्डर गर्दा प्रयोग हुने भागसँगको मिलान र साइज यकिन गर्नुहोस्।` };
    case 'retail':
      return { en: `${en} for home-care needs; confirm type, compatibility and pack quantity.`, ne: `${ne} घरायसी हेरचाहका लागि; अर्डर गर्दा प्रकार, अनुकूलता र प्याक परिमाण यकिन गर्नुहोस्।` };
    case 'baby':
      return { en: `${en} for baby care; confirm age suitability, size or capacity and compatibility.`, ne: `${ne} अर्डर गर्दा उमेरअनुसारको उपयुक्तता, साइज वा क्षमता यकिन गर्नुहोस्।` };
  }
}

const seedsBySlug = new Map<string, CatalogueExpansionSeed>();
const legacySlugsByName: Record<string, string> = {
  'Surgical scissors': 'surgical-scissors-forceps',
  'Artery forceps': 'hemostatic-clamps-needle-holders',
  'Surgical blades': 'surgical-sutures-sterile-blades',
  'Surgical retractors': 'surgical-retractors-scalpels-sets',
  'ENT instrument sets': 'ent-instruments-specula-forceps-sets',
  'General disposable syringes': 'disposable-syringes-luer-slip-lock',
  'Insulin syringes U-40/U-100': 'insulin-syringes-u-40-u-100',
  'Tuberculin syringes': 'tuberculin-syringes-1ml',
  'IV infusion sets': 'iv-infusion-sets-blood-administration',
  'IV cannulas': 'iv-cannulas-color-coded-gauges',
  'Absorbable sutures': 'surgical-sutures-absorbable-non-absorbable',
  'Examination gloves': 'medical-gloves-masks-disposable-gowns',
  'Surgical gowns': 'sterile-surgical-gowns-drapes-ot-packs',
  'Autoclaves': 'autoclaves-steam-sterilizers',
  'Patient monitors': 'patient-monitors-ecg-machines',
  'Pulse oximeters': 'pulse-oximeters-bp-monitors-thermometers',
  'Digital thermometers': 'pulse-oximeters-bp-monitors-thermometers',
  'Oxygen concentrators': 'oxygen-concentrators-regulators',
  'Nebulizers': 'medical-nebulizers-suction-machines',
  'Hospital beds': 'hospital-beds-examination-couches',
  'Manual wheelchairs': 'wheelchairs-trolleys-stretchers-iv-stands',
  'Walkers / folding walking frames': 'walkers-crutches-orthopedic-supports',
  'Air mattresses for pressure care': 'air-mattresses-commode-chairs',
  'Sterilization pouches': 'sterilization-pouches-indicator-supplies',
  'Surface-cleaning and disinfection products': 'hospital-surface-floor-disinfectants',
  'Hand-hygiene products': 'alcohol-hand-rubs-antiseptic-scrubs',
  'Biomedical-waste segregation bins': 'color-coded-biomedical-waste-bins-bags',
  'Sharps containers': 'puncture-proof-sharps-containers-needle-destroyers',
  'Blood collection tubes': 'lab-refrigerator-specimen-containers',
  'Laboratory water baths': 'water-bath-micropipettes',
  'Hematology analyzers': 'hematology-analyzer',
  'Biochemistry analyzers': 'biochemistry-analyzer',
  'Electrolyte analyzers': 'electrolyte-analyzer',
  'Laboratory microscopes': 'laboratory-microscope',
  'Laboratory centrifuges': 'laboratory-centrifuge',
  'Laboratory incubators': 'laboratory-incubator-hot-air-oven',
  'Coral laboratory reagents': 'coral-clinical-systems-biochemistry-reagents',
  'Tulip diagnostic reagents and kits': 'tulip-diagnostics-serology-rapid-test-kits',
  'Erba laboratory reagents': 'erba-mannheim-clinical-chemistry-reagents',
};

const categoryOverrides: Record<string, string> = {};
const setCategory = (categoryId: string, names: string[]) => {
  for (const name of names) categoryOverrides[toSlug(name)] = categoryId;
};

setCategory('orthopedics-supports-braces', [
  'Orthopedic instrument sets', 'Orthopedic measuring instruments', 'Surgical bone drills', 'Surgical bone saws',
  'Knee supports (including hinged braces, immobilizers and patellar straps)',
  'Lumbar supports (including thoracolumbar braces and sacroiliac belts)',
  'Ankle supports', 'Ankle stabilizing braces', 'Walking boots', 'Foot-drop splints', 'Wrist supports',
  'Wrist cock-up splints', 'Thumb-spica splints', 'Finger splints', 'Elbow supports', 'Tennis-elbow straps',
  'Shoulder immobilizers', 'Arm slings', 'Clavicle braces', 'Rib belts', 'Abdominal binders',
  'Postoperative abdominal supports', 'Soft cervical collars', 'Heel cushions', 'Heel cups',
  'Arch-support insoles', 'Metatarsal pads', 'Toe separators', 'Bunion supports', 'Orthopedic seat cushions',
  'Casting stockinette', 'Undercast padding', 'Plaster splints', 'Aluminium foam splints', 'Traction kits',
  'Traction weights', 'Orthopedic traction frames', 'Cast shoes', 'Cast saws', 'Cast spreaders',
  'Cast-removal shears',
]);
setCategory('obstetrics-gynaecology-urology', [
  'Vaginal specula', 'Uterine sounds', 'Cervical dilators', 'Uterine curettes', 'Ovum forceps',
  'Vulsellum forceps', 'Umbilical cord clamps', 'Obstetric delivery instrument sets',
  'Gynaecological examination tables', 'Foley urinary catheters', 'Intermittent urinary catheters',
  'Urometer drainage systems', 'Urinary catheterization kits', 'Suprapubic catheter kits',
  'Bladder irrigation sets', 'Urine collection bags',
]);
setCategory('airway-anesthesia-respiratory', [
  'Endotracheal tubes', 'Tracheostomy tubes', 'Laryngeal mask airways', 'Oropharyngeal airways',
  'Nasopharyngeal airways', 'Manual resuscitator bags', 'Laryngoscope sets', 'Anaesthesia face masks',
  'Breathing circuits', 'Heat-and-moisture exchange filters', 'Bacterial/viral breathing filters',
  'Oxygen face masks', 'Nasal oxygen cannulas', 'Suction catheters', 'Anaesthesia machines',
]);
setCategory('emergency-critical-care', [
  'Infusion pumps', 'Syringe pumps', 'Medical ventilators', 'Capnography monitors', 'Emergency crash carts',
  'Spine boards', 'Cervical immobilization collars', 'Scoop stretchers', 'Patient warming systems',
  'Fluid and blood warmers', 'Defibrillators',
]);
setCategory('respiratory-care', [
  'Medical suction machines', 'Oxygen concentrators', 'Oxygen cylinders and regulator sets', 'Nebulizers',
  'Portable suction units', 'CPAP devices', 'CPAP masks', 'CPAP tubing',
  'Portable oxygen-concentrator carrying accessories',
]);
setCategory('ot-supplies', ['Electrosurgical units']);
setCategory('monitoring-diagnostics', ['ECG machines']);
setCategory('rehabilitation-home-care', [
  'TENS devices', 'Electrical muscle stimulators', 'Therapeutic ultrasound units',
  'Resistance exercise bands', 'Hand exercise balls', 'Therapy putty', 'Finger exercisers',
  'Pedal exercisers', 'Balance boards', 'Foam exercise rollers',
]);
setCategory('consumables-ppe', [
  'Hot-water bags', 'Reusable cold packs', 'Reusable hot/cold gel packs', 'Electric heating pads',
  'Reusable finger-prick devices', 'Blood-glucose lancets', 'Insulin pen needles', 'Pill organizers',
  'Tablet cutters', 'Tablet crushers', 'Oral dosing syringes', 'Medicine measuring cups',
  'Adult incontinence briefs', 'Disposable underpads', 'Reusable bed-protection pads',
  'Waterproof mattress protectors', 'Graduated compression stockings', 'Anti-embolism stockings',
  'Ostomy pouches', 'Ostomy skin barriers', 'Ostomy support accessories', 'Nebulizer replacement kits',
  'Inhaler spacers',
]);
setCategory('dressings-drains-procedure', [
  'Elastic compression bandages', 'Crepe bandages', 'Plaster-of-Paris bandages', 'Fibreglass casting tape',
  'Transparent film dressings', 'Foam wound dressings', 'Hydrocolloid dressings', 'Non-adherent wound dressings',
  'Wound-closure adhesive strips', 'Surgical skin staplers', 'Skin staple removers', 'Closed wound-drainage sets',
  'Penrose drains', 'Chest drainage systems', 'Nasogastric feeding tubes', 'Gauze swabs', 'Cotton rolls',
  'Adhesive medical tape',
]);
setCategory('sterilization-infection-control', [
  'Autoclaves', 'Sterilization pouches', 'Sterilization wrapping sheets', 'Autoclave indicator tape',
  'Chemical sterilization indicators', 'Biological sterilization indicators', 'Bowie–Dick test packs',
  'Ultrasonic instrument cleaners', 'Instrument washer-disinfectors', 'Sterilization container systems',
  'Disposable shoe covers',
]);
setCategory('ward-patient-support', [
  'Patient transfer boards', 'Patient hoists', 'Transfer slings', 'Bedpans', 'Urinal bottles',
  'Patient privacy screens', 'Medication trolleys', 'Linen trolleys', 'Laundry collection carts',
  'Hospital weighing scales', 'Infant weighing scales', 'Height-measuring stadiometers',
  'Enteral feeding pumps', 'Enteral feeding bags and sets', 'Sequential compression devices',
]);
setCategory('baby-maternity', [
  'Baby diapers', 'Baby wipes', 'Baby changing mats', 'Baby cotton wool', 'Baby washcloths',
  'Baby bath towels', 'Baby bathtubs', 'Baby bath supports', 'Baby cleansers', 'Baby shampoos',
  'Baby moisturizers', 'Diaper barrier creams', 'Baby grooming kits', 'Baby nail clippers',
  'Baby hairbrushes', 'Baby combs', 'Feeding bottles', 'Replacement bottle teats',
  'Bottle-cleaning brushes', 'Bottle drying racks', 'Feeding-bottle sterilizers', 'Bottle warmers',
  'Breast-milk storage bags', 'Breast-milk storage containers', 'Manual breast pumps',
  'Electric breast pumps', 'Breast-pump replacement accessories', 'Baby feeding cups',
  'Baby feeding spoons', 'Baby feeding bowls', 'Feeding bibs', 'Pacifiers', 'Pacifier storage cases',
  'Teething rings', 'Baby and infant weighing scales', 'Nasal aspirators',
  'Nasal aspirator replacement accessories', 'Infant medicine droppers', 'Infant oral dosing syringes',
  'Baby and infant weighing scales', 'Infant length-measuring boards', 'Baby changing tables', 'Nursing pads', 'Maternity pads',
  'Nursing pillows', 'Nursing bras', 'Breast-milk collection cups', 'Maternity support belts',
]);

for (const group of groups) {
  for (const [en, ne, legacySlug] of group.items) {
    const slug = toSlug(en);
    const existing = seedsBySlug.get(slug);
    if (existing) {
      if (existing.name.en !== en) {
        throw new Error(`Different catalogue items resolve to the same slug "${slug}".`);
      }
      existing.audienceIds = [...new Set([...existing.audienceIds, ...group.audiences])];
      continue;
    }

    const babyThermometer = en === 'Digital thermometers';
    const dosingSyringe = en === 'Oral dosing syringes';
    const babyRelated = babyThermometer || dosingSyringe || en === 'Maternity support belts';
    seedsBySlug.set(slug, {
      slug,
      ...(legacySlugsByName[en] && legacySlugsByName[en] === legacySlug
        ? { legacySlug }
        : legacySlugsByName[en]
          ? { legacySlug: legacySlugsByName[en] }
          : {}),
      categoryId: babyThermometer ? 'monitoring-diagnostics' : categoryOverrides[slug] ?? group.categoryId,
      ...(babyRelated ? { additionalCategoryIds: ['baby-maternity'] } : {}),
      name: { en, ne },
      description: purchaseDescription(group.kind, en, ne),
      keywords: {
        en: [
          en,
          ...en.toLowerCase().split(/[^a-z0-9]+/).filter((word) => word.length > 2),
          ...(babyThermometer ? ['Baby digital thermometers', 'Infant thermometers'] : []),
          ...(dosingSyringe ? ['Infant oral dosing syringes', 'Baby medicine syringes'] : []),
        ],
        ne: [
          ne,
          ...(babyThermometer ? ['शिशुको डिजिटल थर्मोमिटर'] : []),
          ...(dosingSyringe ? ['शिशुलाई औषधि दिने सिरिन्ज'] : []),
        ],
      },
      orderFields: ordering(group.kind),
      audienceIds: [
        ...new Set([
          ...group.audiences,
          ...(en === 'Maternity support belts' ? (['pharmacy-retail'] as CatalogueAudienceId[]) : []),
          ...(en === 'Baby and infant weighing scales' ? (['hospital-use'] as CatalogueAudienceId[]) : []),
        ]),
      ],
      illustrationKey: `product-${slug}`,
    });
  }
}

export const CATALOGUE_EXPANSION_SEEDS: CatalogueExpansionSeed[] = [...seedsBySlug.values()];

if (new Set(CATALOGUE_EXPANSION_SEEDS.map(({ illustrationKey }) => illustrationKey)).size !== CATALOGUE_EXPANSION_SEEDS.length) {
  throw new Error('Each distinct catalogue item must have a unique illustration key.');
}
