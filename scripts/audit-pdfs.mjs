import fs from 'node:fs';
import { createRequire } from 'node:module';
const require=createRequire(import.meta.url);
const {createCanvas,DOMMatrix,ImageData,Path2D}=require('../.audit/tools/node_modules/@napi-rs/canvas');
Object.assign(globalThis,{DOMMatrix,ImageData,Path2D});
const {getDocument}=await import('../.audit/tools/node_modules/pdfjs-dist/legacy/build/pdf.mjs');
const results=[];
for(const file of fs.readdirSync('.audit/evidence').filter(x=>x.endsWith('.pdf'))){
 const pdf=await getDocument({data:new Uint8Array(fs.readFileSync('.audit/evidence/'+file)),useSystemFonts:true}).promise;
 for(let number=1;number<=pdf.numPages;number++){
  const page=await pdf.getPage(number);const viewport=page.getViewport({scale:1.5});const canvas=createCanvas(Math.ceil(viewport.width),Math.ceil(viewport.height));
  await page.render({canvasContext:canvas.getContext('2d'),viewport}).promise;
  fs.writeFileSync(`.audit/evidence/${file.replace('.pdf','')}-page-${number}.png`,canvas.toBuffer('image/png'));
 }
 results.push({file,pages:pdf.numPages,bytes:fs.statSync('.audit/evidence/'+file).size,allPagesRendered:true});await pdf.destroy();
}
fs.writeFileSync('.audit/evidence/pdf-results.json',JSON.stringify(results,null,2));console.log(JSON.stringify(results));
