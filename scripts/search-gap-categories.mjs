import fs from 'fs';

const USER_AGENT = 'SaphalSurgicalBot/1.0 (medical catalogue asset sourcing; https://saphal-surgical.vercel.app)';

async function searchCommons(query) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(
    query
  )}&gsrnamespace=6&gsrlimit=6&prop=imageinfo&iiprop=url|size|mime|extmetadata&format=json`;

  const res = await fetch(url, { headers: { 'User-Agent': USER_AGENT } });
  if (!res.ok) return [];
  const data = await res.json();
  if (!data.query || !data.query.pages) return [];

  const results = [];
  for (const page of Object.values(data.query.pages)) {
    if (!page.imageinfo || !page.imageinfo[0]) continue;
    const info = page.imageinfo[0];
    const meta = info.extmetadata || {};
    if (!['image/jpeg', 'image/png'].includes(info.mime)) continue;

    const license = meta.LicenseShortName ? meta.LicenseShortName.value : (meta.License ? meta.License.value : 'Unknown');
    if (!/^(CC BY|CC0|Public domain)/i.test(license) || /NC|ND/i.test(license)) continue;

    results.push({
      title: page.title,
      width: info.width,
      height: info.height,
      url: info.url,
      sourcePage: info.descriptionurl,
      license,
      licenseUrl: meta.LicenseUrl?.value || '',
      author: meta.Artist ? meta.Artist.value.replace(/<[^>]*>/g, '').trim() : 'Unknown',
      desc: meta.ImageDescription ? meta.ImageDescription.value.replace(/<[^>]*>/g, '').trim() : '',
    });
  }
  return results;
}

const queries = {
  'autoclave': 'autoclave sterilizer laboratory hospital filetype:bitmap',
  'sharps-box': 'sharps container disposal hospital filetype:bitmap',
  'biohazard-bin': 'biohazard medical waste bin filetype:bitmap',
  'hand-sanitizer': 'hand sanitizer dispenser bottle hospital filetype:bitmap',
  'mop-wringer': 'mop wringer bucket trolley filetype:bitmap'
};

async function test() {
  for (const [k, q] of Object.entries(queries)) {
    console.log(`\n=== Search for ${k}: "${q}" ===`);
    const res = await searchCommons(q);
    res.forEach((r, i) => {
      console.log(`[${i}] ${r.title} (${r.license})`);
      console.log(`    URL: ${r.url}`);
    });
  }
}

test();
