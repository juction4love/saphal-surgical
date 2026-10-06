import fs from 'fs';

const USER_AGENT = 'SaphalSurgicalBot/1.0 (medical catalogue asset sourcing; https://saphal-surgical.vercel.app)';

async function getCategoryMembersRecursive(categoryName) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=categorymembers&gcmtitle=Category:${encodeURIComponent(
    categoryName
  )}&gcmlimit=25&prop=imageinfo&iiprop=url|size|mime|extmetadata&format=json`;

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
  const cats = [
    'Manual wheelchairs',
    'Motorized wheelchairs',
    'Hospital beds',
    'Commode chairs',
    'Stretchers',
    'Electrocardiographs',
    'Medical suction devices',
    'Medical monitors',
    'Patient monitoring'
  ];

  for (const c of cats) {
    console.log(`\n=================== Category: ${c} ===================`);
    const items = await getCategoryMembersRecursive(c);
    for (const item of items) {
      console.log(`- ${item.title} (${item.width}x${item.height}, ${item.license})`);
      console.log(`  Author: ${item.author}`);
      console.log(`  URL: ${item.url}`);
    }
  }
}

run();
