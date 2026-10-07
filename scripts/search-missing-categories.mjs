import fs from 'fs';

const USER_AGENT = 'SaphalSurgicalBot/1.0 (medical catalogue asset sourcing; https://saphal-surgical.vercel.app)';

async function searchCommons(query, limit = 5) {
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

    // Must be permissible license
    if (!/^(CC BY|CC0|Public domain)/i.test(license) || /NC|ND/i.test(license)) continue;

    results.push({
      title: page.title,
      width: info.width,
      height: info.height,
      mime: info.mime,
      url: info.url,
      sourcePage: info.descriptionurl,
      license,
      licenseUrl,
      author,
      desc: desc.slice(0, 160),
    });
  }
  return results;
}

const targets = [
  { slug: 'puncture-proof-sharps-containers-needle-destroyers', q: 'sharps container OR "sharps box" filetype:bitmap' },
  { slug: 'color-coded-biomedical-waste-bins-bags', q: '"biohazard" waste (bin OR bag OR container) filetype:bitmap' },
  { slug: 'double-bucket-mop-trolleys-cleaning-tools', q: '"mop trolley" OR "janitor cart" OR "wringer bucket" filetype:bitmap' },
  { slug: 'hospital-surface-floor-disinfectants', q: 'disinfectant hospital cleaning surface bottle filetype:bitmap' },
  { slug: 'alcohol-hand-rubs-antiseptic-scrubs', q: 'hand sanitizer dispenser bottle "hand rub" filetype:bitmap' },
  { slug: 'sterilization-pouches-indicator-supplies', q: '"sterilization pouch" OR "autoclave tape" filetype:bitmap' },
  { slug: 'ultrasonic-instrument-cleaners', q: 'ultrasonic cleaner bath laboratory medical filetype:bitmap' },
  { slug: 'oxygen-cylinders-and-regulator-sets', q: 'oxygen cylinder regulator medical hospital filetype:bitmap' },
  { slug: 'cpap-masks', q: 'CPAP mask nasal sleep apnea filetype:bitmap' },
  { slug: 'surgical-sutures-sterile-blades', q: 'surgical blade scalpel suture sterile pack filetype:bitmap' },
  { slug: 'sterile-surgical-gowns-drapes-ot-packs', q: 'surgical gown surgeon sterile operating filetype:bitmap' },
  { slug: 'electrosurgical-units', q: 'electrosurgical unit diathermy generator filetype:bitmap' },
  { slug: 'autoclaves-steam-sterilizers', q: 'autoclave sterilizer hospital laboratory steam filetype:bitmap' },
  { slug: 'pulse-oximeters-bp-monitors-thermometers', q: 'pulse oximeter fingertip medical device filetype:bitmap' },
  { slug: 'stethoscopes', q: 'stethoscope medical acoustic filetype:bitmap -drawing' },
  { slug: 'digital-blood-pressure-monitors', q: 'digital blood pressure monitor sphygmomanometer filetype:bitmap' },
  { slug: 'infusion-pumps', q: 'infusion pump medical hospital IV filetype:bitmap' },
  { slug: 'syringe-pumps', q: 'syringe pump driver infusion medical filetype:bitmap' },
  { slug: 'emergency-crash-carts', q: 'crash cart resuscitation trolley hospital filetype:bitmap' },
  { slug: 'medical-ventilators', q: 'mechanical ventilator ICU hospital medical filetype:bitmap' },
  { slug: 'endotracheal-tubes', q: 'endotracheal tube cuffed airway medical filetype:bitmap' },
  { slug: 'laryngoscope-sets', q: 'laryngoscope macintosh blades handle airway filetype:bitmap' },
  { slug: 'foley-urinary-catheters', q: 'foley catheter urinary balloon latex silicone filetype:bitmap' },
  { slug: 'vaginal-specula', q: 'vaginal speculum graves cusco gynaecology filetype:bitmap' },
  { slug: 'urine-collection-bags', q: 'urine drainage bag catheter collection filetype:bitmap' },
  { slug: 'knee-supports-including-hinged-braces-immobilizers-and-patellar-straps', q: 'knee brace support orthopedic hinged filetype:bitmap' },
  { slug: 'walking-boots', q: 'walking boot fracture orthosis CAM boot filetype:bitmap' },
  { slug: 'crutches-including-forearm-crutches', q: 'forearm crutches medical walking aid filetype:bitmap' },
  { slug: 'rollators', q: 'rollator walker four wheeled seat filetype:bitmap' },
  { slug: 'shower-chairs', q: 'shower chair disability bath commode filetype:bitmap' },
  { slug: 'baby-bathtubs', q: 'baby bathtub infant bath tub filetype:bitmap' },
  { slug: 'feeding-bottles', q: 'baby feeding bottle infant nursing filetype:bitmap' },
  { slug: 'breast-milk-storage-bags', q: 'breast milk storage bag nursing filetype:bitmap' },
  { slug: 'manual-breast-pumps', q: 'manual breast pump lactation nursing filetype:bitmap' },
  { slug: 'electric-breast-pumps', q: 'electric breast pump lactation nursing filetype:bitmap' },
  { slug: 'pacifiers', q: 'baby pacifier dummy silicone infant filetype:bitmap' },
  { slug: 'baby-diapers', q: 'baby diapers nappy pack infant filetype:bitmap' },
];

async function run() {
  console.log(`Searching for ${targets.length} targets...`);
  const found = {};
  for (const t of targets) {
    try {
      const res = await searchCommons(t.q, 4);
      console.log(`\n=== ${t.slug} (${res.length} candidates) ===`);
      if (res.length > 0) {
        found[t.slug] = res;
        res.forEach((r, i) => {
          console.log(`[${i}] ${r.title} | ${r.license} | ${r.width}x${r.height}`);
          console.log(`    URL: ${r.url}`);
        });
      }
    } catch (e) {
      console.error(`Error searching ${t.slug}:`, e.message);
    }
  }
  fs.writeFileSync('scratch-targeted-search-results.json', JSON.stringify(found, null, 2));
  console.log(`\nDone! Saved ${Object.keys(found).length} results.`);
}

run();
