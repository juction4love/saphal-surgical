import fs from 'fs';
import path from 'path';

const USER_AGENT = 'SaphalSurgicalBot/1.0 (medical catalogue asset sourcing; https://saphal-surgical.vercel.app)';

async function searchSpecific(query) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(
    query
  )}&gsrnamespace=6&gsrlimit=8&prop=imageinfo&iiprop=url|size|mime|extmetadata&format=json`;

  const res = await fetch(url, { headers: { 'User-Agent': USER_AGENT } });
  if (!res.ok) return [];
  const data = await res.json();
  if (!data.query || !data.query.pages) return [];

  const pages = Object.values(data.query.pages);
  const results = [];

  for (const page of pages) {
    if (!page.imageinfo || !page.imageinfo[0]) continue;
    const info = page.imageinfo[0];
    const meta = info.extmetadata || {};
    if (!['image/jpeg', 'image/png', 'image/webp'].includes(info.mime)) continue;

    const license = meta.LicenseShortName ? meta.LicenseShortName.value : (meta.License ? meta.License.value : 'Unknown');
    const author = meta.Artist ? meta.Artist.value.replace(/<[^>]*>/g, '').trim() : 'Unknown';
    const desc = meta.ImageDescription ? meta.ImageDescription.value.replace(/<[^>]*>/g, '').trim() : '';
    const licenseUrl = meta.LicenseUrl ? meta.LicenseUrl.value : '';

    results.push({
      title: page.title,
      width: info.width,
      height: info.height,
      url: info.url,
      descriptionUrl: info.descriptionurl,
      license,
      licenseUrl,
      author,
      desc: desc.slice(0, 160),
    });
  }
  return results;
}

const queries = {
  'manual-wheelchair': 'intitle:wheelchair (manual OR folding OR standard) filetype:bitmap',
  'electric-wheelchair': 'intitle:wheelchair (motorized OR electric OR power) filetype:bitmap',
  'hospital-bed': 'intitle:"hospital bed" filetype:bitmap',
  'commode-chair': 'intitle:commode OR intitle:"toilet chair" filetype:bitmap',
  'hospital-stretcher': 'intitle:stretcher OR intitle:gurney (hospital OR ambulance) filetype:bitmap',
  'patient-monitor': 'intitle:monitor (patient OR vital OR ICU) filetype:bitmap',
  'oxygen-concentrator': 'intitle:"oxygen concentrator" filetype:bitmap',
  'biochemistry-analyzer': '"chemistry analyzer" OR "biochemistry analyzer" OR "autoanalyzer" filetype:bitmap',
  'microscope': 'intitle:microscope (binocular OR optical OR biological OR laboratory) filetype:bitmap',
  'hot-air-oven': '"laboratory oven" OR "drying oven" OR "hot air oven" filetype:bitmap',
  'laboratory-incubator': '"laboratory incubator" OR "bacteriological incubator" filetype:bitmap',
  'laboratory-water-bath': '"water bath" (laboratory OR digital OR thermostatic) filetype:bitmap',
  'micropipette': 'intitle:micropipette OR intitle:pipette (laboratory OR adjustable) filetype:bitmap',
  'glucometer': 'intitle:"glucose meter" OR intitle:glucometer filetype:bitmap',
  'ecg-machine': 'intitle:electrocardiograph OR "ECG machine" OR "EKG machine" filetype:bitmap',
  'defibrillator': 'intitle:defibrillator OR intitle:AED filetype:bitmap',
  'ultrasound-machine': '"ultrasound machine" OR "ultrasound scanner" OR "sonographic" filetype:bitmap',
  'digital-x-ray-equipment': '"digital radiography" OR "digital x-ray" OR "x-ray machine" filetype:bitmap',
  'film-x-ray-equipment': '"x-ray machine" OR "radiography machine" filetype:bitmap',
  'x-ray-film-developer': '"film developer" OR "developer chemical" OR "x-ray developer" filetype:bitmap',
  'x-ray-film-fixer': '"film fixer" OR "fixer chemical" OR "x-ray fixer" filetype:bitmap',
  'suction-machine': '"suction pump" OR "suction machine" OR "surgical aspirator" filetype:bitmap',
  'physiotherapy-equipment': 'intitle:physiotherapy OR intitle:"physical therapy" filetype:bitmap',
  'exercise-pulley': '"shoulder pulley" OR "exercise pulley" OR "pulley" rehabilitation filetype:bitmap',
  'stationary-exercise-cycle': '"exercise bike" OR "exercise bicycle" OR "ergometer" filetype:bitmap',
  'nebulizer': 'intitle:nebulizer filetype:bitmap'
};

async function main() {
  for (const [key, q] of Object.entries(queries)) {
    console.log(`\n================== ${key} ==================`);
    const results = await searchSpecific(q);
    for (let i = 0; i < Math.min(results.length, 5); i++) {
      const r = results[i];
      console.log(`[${i + 1}] ${r.title}`);
      console.log(`    Dims: ${r.width}x${r.height} | License: ${r.license}`);
      console.log(`    Author: ${r.author}`);
      console.log(`    URL: ${r.url}`);
    }
  }
}

main();
