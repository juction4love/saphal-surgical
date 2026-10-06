// Discovery only: downloaded candidates never become catalogue assets automatically.
const fs = require('node:fs');
const products = JSON.parse(fs.readFileSync(process.argv[2] || '.audit/all-products.json', 'utf8'));
const destination = process.argv[4] || '.audit/real-photo-candidates';
fs.mkdirSync(destination, { recursive: true });
const output = process.argv[3] || '.audit/real-photo-search.json';
const previous = fs.existsSync(output) ? JSON.parse(fs.readFileSync(output, 'utf8')) : [];
const cached = new Map(previous.map(row => [row.slug, row]));
const headers = { 'User-Agent': 'SaphalCataloguePhotoReview/1.0 (https://saphal-surgical.vercel.app)' };
const plain = value => (value || '').replace(/<[^>]*>/g, '').trim();
async function search(product) {
  if (cached.has(product.slug)) return cached.get(product.slug);
  const query = (product.photoQuery || product.name.en.replace(/\s*\(.*?\)/g, '').replace(/ including .*/i, '')) + ' filetype:bitmap -diagram -illustration -drawing -icon';
  const row = { slug: product.slug, title: product.name.en, query, searchedAt: new Date().toISOString(), candidates: [] };
  try {
    const url = new URL('https://commons.wikimedia.org/w/api.php');
    url.search = new URLSearchParams({ action: 'query', generator: 'search', gsrsearch: query, gsrnamespace: '6', gsrlimit: '3', prop: 'imageinfo', iiprop: 'url|extmetadata|mime', iiurlwidth: '700', format: 'json' });
    row.searchURL = url.href;
    const response = await fetch(url, { headers, signal: AbortSignal.timeout(30000) });
    if (!response.ok) throw Error(`Search HTTP ${response.status}`);
    const data = await response.json();
    for (const page of Object.values(data.query?.pages || {})) {
      const info = page.imageinfo?.[0], meta = info?.extmetadata;
      if (!meta || !['image/jpeg', 'image/png', 'image/webp'].includes(info.mime)) continue;
      const license = plain(meta.LicenseShortName?.value);
      if (!/^(CC BY|CC0|Public domain)/i.test(license) || /NC|ND/i.test(license)) continue;
      const sourcePage = info.descriptionurl, author = plain(meta.Artist?.value), licenseURL = meta.LicenseUrl?.value || '';
      if (!sourcePage || !author || (!licenseURL && !/^Public domain$/i.test(license))) continue;
      const image = await fetch(info.thumburl || info.url, { headers, signal: AbortSignal.timeout(25000) });
      if (!image.ok) continue;
      const file = `${destination}/${product.slug}-${row.candidates.length}.jpg`;
      fs.writeFileSync(file, Buffer.from(await image.arrayBuffer()));
      row.candidates.push({ file, title: page.title, sourcePage, originalURL: info.url, license, licenseURL, author, description: plain(meta.ImageDescription?.value), credit: plain(meta.Credit?.value) });
    }
  } catch (error) { row.error = error.message; }
  cached.set(product.slug, row);
  fs.writeFileSync(output, JSON.stringify([...cached.values()], null, 2) + '\n');
  console.log(`${product.slug}: ${row.candidates.length}${row.error ? ' ' + row.error : ''}`);
  return row;
}
let cursor = 0;
async function worker() { while (cursor < products.length) await search(products[cursor++]); }
Promise.all([worker(), worker(), worker()]).catch(error => { console.error(error); process.exitCode = 1; });
