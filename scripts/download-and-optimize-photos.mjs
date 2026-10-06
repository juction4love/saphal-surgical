import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const USER_AGENT = 'SaphalSurgicalBot/1.0 (medical catalogue asset sourcing; https://saphal-surgical.vercel.app)';

const photoSources = [
  {
    slug: 'manual-wheelchair',
    url: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/121025-A-JH002-075_%288138699430%29.jpg',
    pageUrl: 'https://commons.wikimedia.org/wiki/File:121025-A-JH002-075_(8138699430).jpg',
    author: 'U.S. Army Corps of Engineers Savannah District',
    license: 'Public Domain',
    licenseUrl: 'https://creativecommons.org/publicdomain/mark/1.0/',
    isRepresentative: true,
  },
  {
    slug: 'electric-wheelchair',
    url: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Pride_Jazzy_Select_power_chair_001.JPG',
    pageUrl: 'https://commons.wikimedia.org/wiki/File:Pride_Jazzy_Select_power_chair_001.JPG',
    author: 'BrokenSphere',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
    isRepresentative: true,
  },
  {
    slug: 'hospital-bed',
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/A_Modern_Hospital_Bed_in_Pok_Oi_Hospital.jpg',
    pageUrl: 'https://commons.wikimedia.org/wiki/File:A_Modern_Hospital_Bed_in_Pok_Oi_Hospital.jpg',
    author: 'Pok Oi Hospital / Wikimedia Commons',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    isRepresentative: true,
  },
  {
    slug: 'commode-chair',
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Toilet_chair_%2801%29.jpg',
    pageUrl: 'https://commons.wikimedia.org/wiki/File:Toilet_chair_(01).jpg',
    author: 'Rasbak',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    isRepresentative: true,
  },
  {
    slug: 'hospital-stretcher',
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Emergency_medical_services_03.jpg',
    pageUrl: 'https://commons.wikimedia.org/wiki/File:Emergency_medical_services_03.jpg',
    author: 'Wikimedia Commons contributor',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    isRepresentative: true,
  },
  {
    slug: 'patient-monitor',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Dash_5000_Medical_monitor.jpg',
    pageUrl: 'https://commons.wikimedia.org/wiki/File:Dash_5000_Medical_monitor.jpg',
    author: 'Stefan Bellini',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
    isRepresentative: true,
  },
  {
    slug: 'oxygen-concentrator',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Invacare_Perfecto_2_Oxygen_Concentrator.JPG',
    pageUrl: 'https://commons.wikimedia.org/wiki/File:Invacare_Perfecto_2_Oxygen_Concentrator.JPG',
    author: 'BrokenSphere',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
    isRepresentative: true,
  },
  {
    slug: 'biochemistry-analyzer',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Clinical_Chemistry_Analyzer_%2C_%D0%9A%D0%BB%D0%B8%D0%BD%D0%B8%D1%87%D0%BA%D0%B8_%D0%B1%D0%B8%D0%BE%D1%85%D0%B5%D0%BC%D0%B8%D1%81%D0%BA%D0%B8_%D0%B0%D0%BD%D0%B0%D0%BB%D0%B8%D0%B7%D0%B0%D1%82%D0%BE%D1%80_4.jpg',
    pageUrl: 'https://commons.wikimedia.org/wiki/File:Clinical_Chemistry_Analyzer_,_%D0%9A%D0%BB%D0%B8%D0%BD%D0%B8%D1%87%D0%BA%D0%B8_%D0%B1%D0%B8%D0%BE%D1%85%D0%B5%D0%BC%D0%B8%D1%81%D0%BA%D0%B8_%D0%B0%D0%BD%D0%B0%D0%BB%D0%B8%D0%B7%D0%B0%D1%82%D0%BE%D1%80_4.jpg',
    author: 'Делфина',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    isRepresentative: true,
  },
  {
    slug: 'laboratory-microscope',
    url: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Light_Optical_Microscope.jpg',
    pageUrl: 'https://commons.wikimedia.org/wiki/File:Light_Optical_Microscope.jpg',
    author: 'Jeremyida002',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    isRepresentative: true,
  },
  {
    slug: 'hot-air-oven',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Hot_air_oven.jpg',
    pageUrl: 'https://commons.wikimedia.org/wiki/File:Hot_air_oven.jpg',
    author: 'Balaji Kasirajan',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    isRepresentative: true,
  },
  {
    slug: 'laboratory-incubator',
    url: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Laboratory_Incubator%3B_from_a_medical_laboratory_in_Abuja%2C_Nigeria.png',
    pageUrl: 'https://commons.wikimedia.org/wiki/File:Laboratory_Incubator;_from_a_medical_laboratory_in_Abuja,_Nigeria.png',
    author: 'Frankincense Diala',
    license: 'CC0',
    licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
    isRepresentative: true,
  },
  {
    slug: 'laboratory-water-bath',
    url: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Digital_laboratory_water_bath.jpg',
    pageUrl: 'https://commons.wikimedia.org/wiki/File:Digital_laboratory_water_bath.jpg',
    author: 'Wikimedia Commons contributor',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    isRepresentative: true,
  },
  {
    slug: 'precision-micropipettes',
    url: 'https://upload.wikimedia.org/wikipedia/commons/5/59/Micropipettes_on_a_pipette_stand_01.jpg',
    pageUrl: 'https://commons.wikimedia.org/wiki/File:Micropipettes_on_a_pipette_stand_01.jpg',
    author: 'Gannu03',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    isRepresentative: true,
  },
  {
    slug: 'glucometer',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/%2820250417%29_Blood_glucose_meter_08.jpg',
    pageUrl: 'https://commons.wikimedia.org/wiki/File:(20250417)_Blood_glucose_meter_08.jpg',
    author: 'Roy Zuo',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    isRepresentative: true,
  },
  {
    slug: 'ecg-machine',
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Nihon_kohden_cardiofax_v.jpg',
    pageUrl: 'https://commons.wikimedia.org/wiki/File:Nihon_kohden_cardiofax_v.jpg',
    author: 'Wikimedia Commons contributor',
    license: 'CC0',
    licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
    isRepresentative: true,
  },
  {
    slug: 'defibrillator',
    url: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Automated_External_Defibrillator_-_Orange_and_Black_-_With_Screen_-_Mindray_Brand.jpg',
    pageUrl: 'https://commons.wikimedia.org/wiki/File:Automated_External_Defibrillator_-_Orange_and_Black_-_With_Screen_-_Mindray_Brand.jpg',
    author: 'IM027',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    isRepresentative: true,
  },
  {
    slug: 'ultrasound-machine',
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/A_modern_medical_ultrasound_scanner.jpg',
    pageUrl: 'https://commons.wikimedia.org/wiki/File:A_modern_medical_ultrasound_scanner.jpg',
    author: 'Harrison Keely',
    license: 'CC BY 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
    isRepresentative: true,
  },
  {
    slug: 'digital-x-ray-equipment',
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Digital_radiography_Machine_01.jpg',
    pageUrl: 'https://commons.wikimedia.org/wiki/File:Digital_radiography_Machine_01.jpg',
    author: 'Nahid.rajbd',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    isRepresentative: true,
  },
  {
    slug: 'film-x-ray-equipment',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/02/XRay_machine_for_the_captives%2C_Guantanamo_-a.JPG',
    pageUrl: 'https://commons.wikimedia.org/wiki/File:XRay_machine_for_the_captives,_Guantanamo_-a.JPG',
    author: 'Joseph Scozzari',
    license: 'Public Domain',
    licenseUrl: 'https://creativecommons.org/publicdomain/mark/1.0/',
    isRepresentative: true,
  },
  {
    slug: 'x-ray-film-developer',
    url: 'https://upload.wikimedia.org/wikipedia/commons/5/52/US_Navy_070627-N-1994L-025_Hospitalman_Soukanh_Souriyavong%2C_places_rollers_back_into_an_x-ray_developer_during_routine_maintenance_in_the_dental_clinic_aboard_amphibious_assault_ship_USS_Bonhomme_Richard_%28LHD_6%29.jpg',
    pageUrl: 'https://commons.wikimedia.org/wiki/File:US_Navy_070627-N-1994L-025_Hospitalman_Soukanh_Souriyavong,_places_rollers_back_into_an_x-ray_developer_during_routine_maintenance_in_the_dental_clinic_aboard_amphibious_assault_ship_USS_Bonhomme_Richard_(LHD_6).jpg',
    author: 'U.S. Navy photo by Robert C. Long',
    license: 'Public Domain',
    licenseUrl: 'https://creativecommons.org/publicdomain/mark/1.0/',
    isRepresentative: true,
  },
  {
    slug: 'suction-machine',
    url: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Absaugger%C3%A4t.JPG',
    pageUrl: 'https://commons.wikimedia.org/wiki/File:Absaugger%C3%A4t.JPG',
    author: 'Wikimedia Commons contributor',
    license: 'CC0',
    licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
    isRepresentative: true,
  },
  {
    slug: 'physiotherapy-equipment',
    url: 'https://upload.wikimedia.org/wikipedia/commons/d/db/MEDIMAX_Physiotherapy_Clinic_Tel_Aviv.jpg',
    pageUrl: 'https://commons.wikimedia.org/wiki/File:MEDIMAX_Physiotherapy_Clinic_Tel_Aviv.jpg',
    author: 'Hilahalumit',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    isRepresentative: true,
  },
  {
    slug: 'stationary-exercise-cycle',
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Ergometer_Crane_Power_S9.JPG',
    pageUrl: 'https://commons.wikimedia.org/wiki/File:Ergometer_Crane_Power_S9.JPG',
    author: '4028mdk09',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
    isRepresentative: true,
  },
  {
    slug: 'nebulizer',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Aerosol_Boreal.jpg',
    pageUrl: 'https://commons.wikimedia.org/wiki/File:Aerosol_Boreal.jpg',
    author: 'Air fans',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    isRepresentative: true,
  }
];

const outDir = path.resolve('public/products');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function downloadAndOptimize() {
  console.log('Starting download and optimization into public/products/ ...');
  const results = [];

  for (const item of photoSources) {
    console.log(`\nProcessing ${item.slug}...`);
    try {
      const res = await fetch(item.url, { headers: { 'User-Agent': USER_AGENT } });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buffer = Buffer.from(await res.arrayBuffer());

      const outPath = path.join(outDir, `${item.slug}.webp`);
      
      const image = sharp(buffer);
      const metadata = await image.metadata();

      // Resize to max 1200px on longest side, maintain aspect ratio, webp quality 85
      let transform = image.rotate(); // auto-rotate based on EXIF
      if (metadata.width > 1200 || metadata.height > 1200) {
        transform = transform.resize({
          width: metadata.width >= metadata.height ? 1200 : undefined,
          height: metadata.height > metadata.width ? 1200 : undefined,
          fit: 'inside',
          withoutEnlargement: true,
        });
      }

      await transform
        .webp({ quality: 85 })
        .toFile(outPath);

      const stats = fs.statSync(outPath);
      const optimizedMeta = await sharp(outPath).metadata();

      console.log(`✓ Saved ${item.slug}.webp: ${optimizedMeta.width}x${optimizedMeta.height} (${Math.round(stats.size / 1024)} KB)`);

      results.push({
        slug: item.slug,
        localPath: `/products/${item.slug}.webp`,
        width: optimizedMeta.width,
        height: optimizedMeta.height,
        sizeBytes: stats.size,
        author: item.author,
        license: item.license,
        licenseUrl: item.licenseUrl,
        sourceUrl: item.pageUrl,
        isRepresentative: item.isRepresentative,
      });
    } catch (err) {
      console.error(`✗ Error processing ${item.slug}:`, err.message);
    }
  }

  const manifestPath = path.resolve('data/photo-sources.ts');
  const tsContent = `export interface PhotoSourceRecord {
  slug: string;
  localPath: string;
  width: number;
  height: number;
  sizeBytes: number;
  author: string;
  license: string;
  licenseUrl: string;
  sourceUrl: string;
  isRepresentative: boolean;
}

export const PHOTO_SOURCES: Record<string, PhotoSourceRecord> = ${JSON.stringify(
    results.reduce((acc, cur) => {
      acc[cur.slug] = cur;
      return acc;
    }, {}),
    null,
    2
  )};
`;

  fs.writeFileSync(manifestPath, tsContent, 'utf8');
  console.log(`\nManifest written to ${manifestPath}`);
}

downloadAndOptimize();
