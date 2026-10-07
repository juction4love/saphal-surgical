import fs from 'fs';

const d = JSON.parse(fs.readFileSync('scratch-curated-matches.json', 'utf8'));

// Strict validation: candidate title or desc must clearly be the medical product
// If suspicious (e.g. church, animal, kitten, art, architecture, book, graph, museum, battle, war), reject it!
const suspiciousPatterns = [
  /church/i, /temple/i, /bodorna/i, /estradiol/i, /hormone/i, /menstrual/i, /cat/i, /kitten/i,
  /dog/i, /animal/i, /horse/i, /art/i, /mosaic/i, /statue/i, /sculpture/i, /monument/i,
  /coin/i, /stamp/i, /postage/i, /portrait/i, /painting/i, /building/i, /hotel/i, /street/i,
  /diagram/i, /drawing/i, /sketch/i, /graph/i, /chart/i, /plot/i, /table/i, /map/i,
  /hirst/i, /fig\d+/i, /fibers/i, /muscle-fibers/i, /histology/i, /micrograph/i, /cell/i,
  /dpla/i, /archive/i, /ancient/i, /roman/i, /greek/i, /medieval/i, /archaeolog/i
];

const confirmed = {};
const rejected = {};

for (const [slug, item] of Object.entries(d.selected)) {
  const cand = item.cand;
  const fullText = (cand.candTitle + ' ' + (cand.desc || '') + ' ' + cand.file).toLowerCase();

  let isBad = false;
  for (const pat of suspiciousPatterns) {
    if (pat.test(fullText)) {
      isBad = true;
      break;
    }
  }

  if (isBad) {
    rejected[slug] = { cand, reason: 'Matched suspicious pattern' };
  } else {
    confirmed[slug] = item;
  }
}

console.log(`Confirmed valid medical product photos: ${Object.keys(confirmed).length}`);
console.log(`Rejected suspicious: ${Object.keys(rejected).length}`);

fs.writeFileSync('scratch-confirmed-matches.json', JSON.stringify({ confirmed, rejected }, null, 2));
