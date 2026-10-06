import fs from 'fs';

const USER_AGENT = 'SaphalSurgicalBot/1.0 (medical catalogue asset sourcing; https://saphal-surgical.vercel.app)';

async function searchCommons(query, limit = 6) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(
    query
  )}&gsrnamespace=6&gsrlimit=${limit}&prop=imageinfo&iiprop=url|size|mime|extmetadata&format=json`;

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
      mime: info.mime,
      url: info.url,
      descriptionUrl: info.descriptionurl,
      license,
      licenseUrl,
      author,
      desc: desc.slice(0, 150),
    });
  }

  return results;
}

const itemQueries = {
  'manual-wheelchair': ['wheelchair folding', 'manual wheelchair hospital', 'wheelchair chrome'],
  'electric-wheelchair': ['motorized wheelchair', 'electric wheelchair joystick', 'power wheelchair'],
  'hospital-bed': ['modern hospital bed', 'hospital bed adjustable', 'hospital ward bed'],
  'commode-chair': ['commode chair', 'bedside commode', 'toilet wheelchair'],
  'stretcher': ['hospital stretcher', 'ambulance stretcher', 'gurney hospital'],
  'patient-monitor': ['patient monitor', 'vital signs monitor', 'hospital patient monitor'],
  'oxygen-concentrator': ['oxygen concentrator', 'medical oxygen concentrator', 'portable oxygen concentrator'],
  'biochemistry-analyzer': ['clinical chemistry analyzer', 'chemistry analyzer laboratory', 'biochemical analyzer'],
  'microscope': ['binocular microscope laboratory', 'optical microscope clinical', 'laboratory microscope'],
  'hot-air-oven': ['laboratory oven', 'drying oven laboratory', 'hot air sterilizer'],
  'laboratory-incubator': ['laboratory incubator', 'bacteriological incubator', 'microbiology incubator'],
  'laboratory-water-bath': ['laboratory water bath', 'water bath laboratory', 'thermostatic water bath'],
  'micropipette': ['micropipette laboratory', 'adjustable micropipette', 'pipettor laboratory'],
  'glucometer': ['blood glucose meter', 'glucometer test strip', 'glucose meter'],
  'ecg-machine': ['electrocardiograph', 'ECG machine 12 lead', 'electrocardiogram machine'],
  'defibrillator': ['automated external defibrillator', 'defibrillator AED', 'biphasic defibrillator'],
  'ultrasound-machine': ['ultrasound machine hospital', 'medical ultrasound system', 'sonography machine'],
  'digital-x-ray-equipment': ['digital radiography system', 'medical x-ray machine modern', 'x-ray room digital'],
  'film-x-ray-equipment': ['radiography x-ray machine', 'x-ray machine tube', 'analog x-ray unit'],
  'x-ray-film-developer': ['x-ray film processing', 'darkroom developer x-ray', 'radiographic film chemical'],
  'x-ray-film-fixer': ['x-ray fixer solution', 'darkroom chemicals radiography', 'radiographic fixer'],
  'suction-machine': ['medical suction pump', 'surgical aspirator suction', 'electric suction machine'],
  'physiotherapy-equipment': ['physiotherapy clinic', 'physical therapy clinic equipment', 'rehabilitation equipment physical therapy'],
  'exercise-pulley': ['shoulder pulley rehabilitation', 'exercise pulley physical therapy', 'wall pulley physiotherapy'],
  'stationary-exercise-cycle': ['rehabilitation exercise bike', 'medical stationary cycle', 'therapy exercise bicycle'],
  'nebulizer': ['compressor nebulizer', 'medical nebulizer machine', 'nebulizer inhaler']
};

async function run() {
  const selected = {};

  for (const [key, qList] of Object.entries(itemQueries)) {
    console.log(`\n================== ${key} ==================`);
    let found = [];
    for (const q of qList) {
      const res = await searchCommons(q, 4);
      found.push(...res);
    }
    // Remove duplicates by title
    const unique = [];
    const seen = new Set();
    for (const f of found) {
      if (!seen.has(f.title)) {
        seen.add(f.title);
        unique.push(f);
      }
    }

    for (let i = 0; i < Math.min(unique.length, 5); i++) {
      const u = unique[i];
      console.log(`[${i + 1}] ${u.title}`);
      console.log(`    Dims: ${u.width}x${u.height} | License: ${u.license}`);
      console.log(`    Author: ${u.author}`);
      console.log(`    URL: ${u.url}`);
      console.log(`    Desc: ${u.desc}`);
    }
  }
}

run();
