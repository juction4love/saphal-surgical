import fs from 'fs';

const USER_AGENT = 'SaphalSurgicalBot/1.0 (medical catalogue asset sourcing; https://saphal-surgical.vercel.app)';

async function getCategoryMembers(categoryName, limit = 20) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&list=categorymembers&cmtitle=Category:${encodeURIComponent(
    categoryName
  )}&cmlimit=${limit}&cmtype=file&format=json`;

  const res = await fetch(url, { headers: { 'User-Agent': USER_AGENT } });
  if (!res.ok) return [];
  const data = await res.json();
  if (!data.query || !data.query.categorymembers) return [];
  return data.query.categorymembers.map((m) => m.title);
}

async function getImageDetails(titles) {
  if (titles.length === 0) return [];
  const url = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(
    titles.join('|')
  )}&prop=imageinfo&iiprop=url|size|mime|extmetadata&format=json`;

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

async function inspectCategories() {
  const categories = [
    'Manual wheelchairs',
    'Motorized wheelchairs',
    'Hospital beds',
    'Commode chairs',
    'Stretchers',
    'Patient monitoring',
    'Oxygen concentrators',
    'Automated clinical chemistry analyzers',
    'Optical microscopes',
    'Laboratory ovens',
    'Laboratory incubators',
    'Laboratory water baths',
    'Micropipettes',
    'Blood glucose meters',
    'Electrocardiographs',
    'Automated external defibrillators',
    'Medical ultrasound equipment',
    'X-ray machines',
    'Medical suction devices',
    'Physical therapy equipment',
    'Exercise bicycles',
    'Nebulizers'
  ];

  for (const cat of categories) {
    console.log(`\n================ Category: ${cat} ================`);
    const titles = await getCategoryMembers(cat, 15);
    const details = await getImageDetails(titles.slice(0, 10));
    for (const d of details) {
      console.log(`- ${d.title} (${d.width}x${d.height}, ${d.license})`);
      console.log(`  Author: ${d.author}`);
      console.log(`  URL: ${d.url}`);
    }
  }
}

inspectCategories();
