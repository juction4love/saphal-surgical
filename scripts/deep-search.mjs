import fs from 'fs';

const USER_AGENT = 'SaphalSurgicalBot/1.0 (medical catalogue asset sourcing; https://saphal-surgical.vercel.app)';

async function searchImages(query, limit = 10) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(
    query
  )}&gsrnamespace=6&gsrlimit=${limit}&prop=imageinfo&iiprop=url|size|mime|extmetadata&format=json`;

  const res = await fetch(url, { headers: { 'User-Agent': USER_AGENT } });
  if (!res.ok) return [];
  const data = await res.json();
  if (!data.query || !data.query.pages) return [];

  const results = [];
  for (const page of Object.values(data.query.pages)) {
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

async function deepSearch() {
  const tests = [
    { name: 'manual-wheelchair', q: 'wheelchair hospital standard -electric -motorized filetype:bitmap' },
    { name: 'electric-wheelchair', q: 'motorized wheelchair joystick OR "power wheelchair" filetype:bitmap' },
    { name: 'hospital-bed', q: 'hospital bed ward adjustable -diagram filetype:bitmap' },
    { name: 'commode-chair', q: 'commode chair OR "bedside commode" OR "commode" medical filetype:bitmap' },
    { name: 'stretcher', q: 'hospital stretcher wheeled OR "stretcher trolley" filetype:bitmap' },
    { name: 'patient-monitor', q: 'patient monitor vital signs ICU hospital filetype:bitmap' },
    { name: 'oxygen-concentrator', q: '"oxygen concentrator" medical filetype:bitmap' },
    { name: 'ecg-machine', q: 'electrocardiograph machine OR "ecg recorder" OR "12-lead ecg" filetype:bitmap' },
    { name: 'suction-machine', q: 'surgical suction pump OR "medical suction" OR "aspirator" phlegm filetype:bitmap' },
    { name: 'exercise-pulley', q: 'shoulder pulley physiotherapy OR "pulley exercise" physical therapy' },
    { name: 'x-ray-fixer', q: 'radiographic fixer OR "x-ray fixer" OR "darkroom fixer"' },
    { name: 'hot-air-oven', q: 'drying oven Memmert OR "laboratory drying oven" OR "hot air oven" filetype:bitmap' },
    { name: 'laboratory-incubator', q: '"bacteriological incubator" OR "laboratory incubator" culture filetype:bitmap' }
  ];

  for (const t of tests) {
    console.log(`\n================ Deep Search: ${t.name} ("${t.q}") ================`);
    const res = await searchImages(t.q, 8);
    for (let i = 0; i < res.length; i++) {
      const r = res[i];
      console.log(`[${i + 1}] ${r.title} (${r.width}x${r.height}, ${r.license})`);
      console.log(`    Author: ${r.author}`);
      console.log(`    URL: ${r.url}`);
      console.log(`    Desc: ${r.desc}`);
    }
  }
}

deepSearch();
