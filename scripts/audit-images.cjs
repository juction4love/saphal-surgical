// Review the actual first matching SVG template for every catalogue entry.
const fs=require('node:fs');const ts=require('typescript');
function load(p,o={}){const m={exports:{}};new Function('require','module','exports',ts.transpileModule(fs.readFileSync(p,'utf8'),{compilerOptions:{esModuleInterop:true,module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText)(s=>s==='./product-image-review.json'?require('../data/product-image-review.json'):o[s]||require(s),m,m.exports);return m.exports;}
const {PRODUCTS}=load('data/products.ts',{'./catalogue-expansion':load('data/catalogue-expansion.ts')});
const source=fs.readFileSync('components/ProductIllustration.tsx','utf8');const ast=ts.createSourceFile('art.tsx',source,ts.ScriptTarget.Latest,true,ts.ScriptKind.TSX);
const fn=ast.statements.find(s=>ts.isFunctionDeclaration(s)&&s.name.text==='catalogueProductArt');
const rules=fn.body.statements.filter(ts.isIfStatement).map(s=>({condition:s.expression.getText(ast),line:ast.getLineAndCharacterOfPosition(s.getStart(ast)).line+1}));
const visuallyRejected=new Set(['towel-clips','bulldog-vascular-clamps','vascular-clamps','skin-hooks','sinus-forceps','finger-exercisers','reusable-finger-prick-devices','blood-glucose-lancets','insulin-pen-needles']);
// Dedicated depictions plus the clearly related scissors, cutters, mallets,
// compression stockings, gloves and diapers. Broad keyword fallbacks depict
// different equipment and must not be presented as product-specific artwork.
const rows=PRODUCTS.map(p=>{const kind=p.image.illustration;const rule=kind?.startsWith('product-')?rules.find(r=>new Function('slug',`return ${r.condition}`)(kind.slice(8))):null;return {slug:p.slug,title:p.name.en,kind:p.image.kind,template:kind,ruleLine:rule?.line,review:visuallyRejected.has(p.slug)?'withhold-unrelated-template':p.image.kind==='photo'?'representative-photo':!rule?'related-category-illustration':rule.line<140||[176,179,215].includes(rule.line)?'related-illustration':'withhold-unrelated-template'};});
fs.writeFileSync('data/product-image-review.json',JSON.stringify(rows,null,2)+'\n');
console.log(JSON.stringify(rows.reduce((a,r)=>(a[r.review]=(a[r.review]||0)+1,a),{})));
