import fs from 'fs';

const USER_AGENT = 'SaphalSurgicalBot/1.0 (medical catalogue asset sourcing; https://saphal-surgical.vercel.app)';

async function searchImages(query, limit = 8) {
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

async function run() {
  const list = [
    { name: 'manual wheelchair', q: 'wheelchair hospital filetype:bitmap -electric -motorized' },
    { name: 'electric wheelchair', q: 'wheelchair motorized OR "electric wheelchair" filetype:bitmap' },
    { name: 'hospital bed', q: '"hospital bed" ward filetype:bitmap -drawing -diagram' },
    { name: 'commode chair', q: '"commode chair" OR "commode" disabled OR "bedside commode"' },
    { name: 'stretcher', q: 'stretcher ambulance OR "hospital stretcher" wheeled filetype:bitmap' },
    { name: 'patient monitor', q: '"patient monitor" OR "vital signs monitor" -drawing filetype:bitmap' },
    { name: 'oxygen concentrator', q: '"oxygen concentrator" filetype:bitmap' },
    { name: 'suction machine', q: '"suction pump" OR "suction unit" OR "aspirator" surgical filetype:bitmap' },
    { name: 'ecg machine device', q: '"electrocardiograph" machine OR "ecg machine" filetype:bitmap -tracing -graph' },
    { name: 'physiotherapy clinic equipment', q: '"physiotherapy" clinic OR "physical therapy clinic" equipment' },
    { name: 'microscope clinical', q: '"microscope" laboratory binocular biological filetype:bitmap' },
    { name: 'glucometer', q: '"glucose meter" OR "glucometer" filetype:bitmap' }
  ];

  for (const item of list) {
    console.log(`\n=== Query: ${item.name} ===`);
    const res = await searchImages(item.q, 6);
    for (let i = 0; i < res.length; i++) {
      const r = res[i];
      console.log(`[${i+1}] ${r.title} (${r.width}x${r.height}, ${r.license})`);
      console.log(`    Author: ${r.author}`);
      console.log(`    URL: ${r.url}`);
    }
  }
}

run();
