import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const inv = JSON.parse(fs.readFileSync('scratch-products-inventory.json', 'utf8'));
const candidates = JSON.parse(fs.readFileSync('scratch-available-candidates.json', 'utf8'));

// Negative keywords that disqualify an image
const NEGATIVE_KEYWORDS = [
  'diagram', 'drawing', 'illustration', 'sketch', 'icon', 'logo', 'car', 'automobile', 'cat', 'kitten',
  'dog', 'puppy', 'street', 'road', 'building', 'house', 'city', 'museum', 'statue', 'sculpture', 'painting',
  'mosaic', 'coil', 'mosquito coil', 'tree', 'plant', 'flower', 'insect', 'animal', 'micrograph', 'histology',
  'cell', 'tissue section', 'stained', 'staining', 'graph', 'chart', 'plot', 'curve', 'portrait', 'face of',
  'selfie', 'protest', 'crowd', 'soldier', 'military uniform', 'bedroom', 'kitchen', 'hotel'
];

function scoreCandidate(slug, cand, product) {
  const title = cand.candTitle.toLowerCase();
  const desc = cand.desc.toLowerCase();
  const combined = title + ' ' + desc;

  // Check negative keywords
  for (const neg of NEGATIVE_KEYWORDS) {
    if (combined.includes(neg)) return -100;
  }

  let score = 10;
  const nameEnWords = product.nameEn.toLowerCase().split(/[^a-z0-9]+/).filter(w => w.length > 3);
  for (const word of nameEnWords) {
    if (combined.includes(word)) score += 15;
  }

  // Bonus for clear equipment/instrument markers
  if (combined.includes('medical') || combined.includes('surgical') || combined.includes('hospital') || combined.includes('clinical') || combined.includes('laboratory')) {
    score += 10;
  }

  // Aspect ratio sanity
  const ratio = cand.width / cand.height;
  if (ratio >= 0.7 && ratio <= 1.5) score += 5; // Good product photo ratio

  return score;
}

async function curate() {
  const bySlug = {};
  for (const cand of candidates) {
    bySlug[cand.slug] = bySlug[cand.slug] || [];
    bySlug[cand.slug].push(cand);
  }

  const selected = {};
  const unselected = [];

  for (const p of inv) {
    const cands = bySlug[p.slug] || [];
    let best = null;
    let bestScore = 0;

    for (const c of cands) {
      const s = scoreCandidate(p.slug, c, p);
      if (s > bestScore) {
        bestScore = s;
        best = c;
      }
    }

    if (best && bestScore >= 25) {
      selected[p.slug] = { cand: best, score: bestScore };
    } else {
      unselected.push({ slug: p.slug, category: p.category, title: p.nameEn, bestScore });
    }
  }

  console.log(`Auto-curated matches: ${Object.keys(selected).length} out of ${inv.length}`);
  console.log(`Unselected: ${unselected.length}`);

  fs.writeFileSync('scratch-curated-matches.json', JSON.stringify({ selected, unselected }, null, 2));
}

curate();
