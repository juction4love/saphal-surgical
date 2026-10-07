import fs from 'fs';
import sharp from 'sharp';

const search = JSON.parse(fs.readFileSync('.audit/real-photo-search.json', 'utf8'));

async function inspectCandidates() {
  const verifiedList = [];
  for (const item of search) {
    if (!item.candidates || item.candidates.length === 0) continue;
    for (let i = 0; i < item.candidates.length; i++) {
      const c = item.candidates[i];
      if (!fs.existsSync(c.file)) continue;

      try {
        const meta = await sharp(c.file).metadata();
        // Discard extreme aspect ratios or tiny thumbnails
        if (meta.width < 150 || meta.height < 150) continue;
        const ratio = meta.width / meta.height;
        if (ratio > 3.5 || ratio < 0.28) continue;

        verifiedList.push({
          slug: item.slug,
          candIndex: i,
          title: item.title,
          candTitle: c.title,
          file: c.file,
          width: meta.width,
          height: meta.height,
          author: c.author,
          license: c.license,
          licenseURL: c.licenseURL,
          sourcePage: c.sourcePage,
          originalURL: c.originalURL,
          desc: c.description || '',
        });
      } catch (err) {
        // Not a valid image
      }
    }
  }

  fs.writeFileSync('scratch-available-candidates.json', JSON.stringify(verifiedList, null, 2));
  console.log(`Verified ${verifiedList.length} downloaded candidates.`);
  const uniqueSlugs = new Set(verifiedList.map(v => v.slug));
  console.log(`Unique product slugs with downloaded candidates: ${uniqueSlugs.size}`);
}

inspectCandidates();
