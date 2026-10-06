import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const USER_AGENT = 'SaphalSurgicalBot/1.0 (medical catalogue asset sourcing; https://saphal-surgical.vercel.app)';

async function searchCommons(query, limit = 8) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(
    query
  )}&gsrnamespace=6&gsrlimit=${limit}&prop=imageinfo&iiprop=url|size|mime|extmetadata&format=json`;
  
  const res = await fetch(url, { headers: { 'User-Agent': USER_AGENT } });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  if (!data.query || !data.query.pages) return [];

  const pages = Object.values(data.query.pages);
  const results = [];

  for (const page of pages) {
    if (!page.imageinfo || !page.imageinfo[0]) continue;
    const info = page.imageinfo[0];
    const meta = info.extmetadata || {};
    
    // Only real images (jpg, png, webp)
    if (!['image/jpeg', 'image/png', 'image/webp'].includes(info.mime)) continue;

    const license = meta.LicenseShortName ? meta.LicenseShortName.value : (meta.License ? meta.License.value : 'Unknown');
    const author = meta.Artist ? meta.Artist.value.replace(/<[^>]*>/g, '').trim() : 'Unknown';
    const desc = meta.ImageDescription ? meta.ImageDescription.value.replace(/<[^>]*>/g, '').trim() : '';
    const licenseUrl = meta.LicenseUrl ? meta.LicenseUrl.value : '';

    results.push({
      pageId: page.pageid,
      title: page.title,
      width: info.width,
      height: info.height,
      mime: info.mime,
      url: info.url,
      descriptionUrl: info.descriptionurl,
      license,
      licenseUrl,
      author,
      desc: desc.slice(0, 200),
    });
  }

  return results;
}

async function test() {
  const queries = {
    'manual-wheelchair': 'wheelchair filetype:bitmap -electric -diagram -icon',
    'electric-wheelchair': 'motorized wheelchair filetype:bitmap -manual',
    'hospital-bed': 'hospital bed filetype:bitmap -diagram',
    'commode-chair': 'commode chair filetype:bitmap OR bedside commode',
    'stretcher': 'stretcher trolley hospital filetype:bitmap',
    'patient-monitor': 'patient monitor medical vital signs filetype:bitmap',
    'oxygen-concentrator': 'oxygen concentrator medical filetype:bitmap',
    'biochemistry-analyzer': 'biochemistry analyzer clinical chemistry filetype:bitmap',
    'microscope': 'binocular optical laboratory microscope filetype:bitmap',
    'hot-air-oven': 'hot air oven laboratory sterilizer filetype:bitmap',
    'laboratory-incubator': 'bacteriological incubator laboratory culture filetype:bitmap -neonatal',
    'laboratory-water-bath': 'laboratory water bath thermostatic filetype:bitmap',
    'micropipette': 'micropipette laboratory pipette filetype:bitmap',
    'glucometer': 'glucometer blood glucose meter filetype:bitmap',
    'ecg-machine': 'electrocardiograph ECG machine filetype:bitmap',
    'defibrillator': 'defibrillator medical AED filetype:bitmap',
    'ultrasound-machine': 'ultrasound machine medical scanner filetype:bitmap',
    'digital-x-ray-equipment': 'digital radiography x-ray machine medical filetype:bitmap',
    'film-x-ray-equipment': 'x-ray machine medical radiology room filetype:bitmap',
    'x-ray-film-developer': 'radiography film developer OR x-ray developer chemical',
    'x-ray-film-fixer': 'radiography film fixer OR x-ray fixer chemical',
    'suction-machine': 'medical suction pump aspirator surgical phlegm filetype:bitmap',
    'physiotherapy-equipment': 'physiotherapy equipment clinic rehabilitation filetype:bitmap',
    'exercise-pulley': 'shoulder exercise pulley physiotherapy rehabilitation',
    'stationary-exercise-cycle': 'rehabilitation stationary exercise bicycle therapy',
    'nebulizer': 'medical nebulizer compressor inhaler filetype:bitmap'
  };

  for (const [key, q] of Object.entries(queries)) {
    console.log(`\n=== Query for ${key}: "${q}" ===`);
    try {
      const res = await searchCommons(q, 4);
      for (const r of res) {
        console.log(`- [${r.license}] ${r.title} (${r.width}x${r.height})`);
        console.log(`  Author: ${r.author} | URL: ${r.url}`);
      }
    } catch (e) {
      console.error(`  Error: ${e.message}`);
    }
  }
}

test();
