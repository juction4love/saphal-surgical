import fs from 'fs';

const inv = JSON.parse(fs.readFileSync('scratch-products-inventory.json', 'utf8'));
const byCat = {};
inv.forEach(i => {
  byCat[i.category] = byCat[i.category] || [];
  byCat[i.category].push({ slug: i.slug, name: i.nameEn });
});

for (const [cat, prods] of Object.entries(byCat)) {
  console.log(`\n=== Category: ${cat} (${prods.length} items) ===`);
  for (const p of prods) {
    console.log(`  - ${p.slug}: "${p.name}"`);
  }
}
