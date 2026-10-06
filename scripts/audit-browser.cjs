const {chromium,webkit} = require(process.env.PLAYWRIGHT_MODULE || '../.audit/tools/node_modules/playwright');
const fs = require('node:fs');
const assert = require('node:assert/strict');
const ts = require('typescript');
function load(p, overrides={}) {const m={exports:{}};new Function('require','module','exports',ts.transpileModule(fs.readFileSync(p,'utf8'),{compilerOptions:{esModuleInterop:true,module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText)(s=>s==='./product-image-review.json'?require('../data/product-image-review.json'):overrides[s]||require(s),m,m.exports);return m.exports;}
const {PRODUCTS}=load('data/products.ts',{'./catalogue-expansion':load('data/catalogue-expansion.ts')});
const base=process.argv[2]||'http://127.0.0.1:3100';
const evidence='.audit/evidence';fs.mkdirSync(evidence,{recursive:true});
const results=[];
(async()=>{
 for(const [engine,type] of Object.entries({chromium,webkit})) {
  const browser=await type.launch({executablePath:engine==='chromium'?'C:/Users/Administrator/AppData/Local/ms-playwright/chromium-1234/chrome-win64/chrome.exe':'C:/Users/Administrator/AppData/Local/ms-playwright/webkit-2336/Playwright.exe'});
  try {
   const context=await browser.newContext({acceptDownloads:true});const page=await context.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));page.on('crash',()=>errors.push('PAGE CRASH'));
   for(const width of [320,390,430,768,1440]) for(const locale of ['en','ne']) for(const route of ['', '/products','/order-slip','/contact','/about']) {
    await page.setViewportSize({width,height:width===320?812:1000});await page.goto(base+'/'+locale+route);await page.locator('main').waitFor();
    const layout=await page.evaluate(()=>({overflow:document.documentElement.scrollWidth>innerWidth,broken:[...document.images].filter(i=>i.complete&&i.naturalWidth===0).map(i=>i.src),lang:document.documentElement.lang,globalWhatsApp:[...document.querySelectorAll('header a,footer a')].filter(a=>a.href.includes('wa.me')).length}));
    results.push({engine,width,locale,route,...layout});
    if(width===390&&locale==='ne')await page.screenshot({path:`${evidence}/${engine}-${locale}-${route.replaceAll('/','')||'home'}.png`,fullPage:route!=='/products'});
   }
   await page.goto(base+'/en/products');await page.locator('article').first().waitFor();assert.equal(await page.locator('article').count(),PRODUCTS.length);
   await page.locator('#catalogue-search-input').fill('glucometer');assert(await page.locator('article').count()>0);
   await page.locator('#catalogue-search-input').fill('ग्लुकोमिटर');assert(await page.locator('article').count()>0);
   await page.locator('#catalogue-search-input').fill('zzzz-no-match');assert.equal(await page.locator('article').count(),0);
   await page.locator('#catalogue-search-input').fill('');await page.getByRole('button',{name:/^Home care \(/}).click();assert(await page.locator('article').count()<PRODUCTS.length);
   await page.getByRole('button',{name:'Reset Filters'}).click();
   await page.locator('article').first().getByRole('button').click();await page.locator('article').first().getByRole('button').click();
   await page.goto(base+'/en/order-slip');await page.getByRole('spinbutton').waitFor();assert.equal(await page.getByRole('spinbutton').inputValue(),'2');
   await page.getByRole('spinbutton').fill('0');await page.getByRole('button',{name:'Download order PDF',exact:true}).click();assert.equal(await page.getByRole('spinbutton').getAttribute('aria-invalid'),'true');
   await page.getByRole('spinbutton').fill('3');await page.reload();assert.equal(await page.getByRole('spinbutton').inputValue(),'3');
   for(const locale of ['en','ne']) {
    await page.evaluate(items=>localStorage.setItem('saphal-surgical-order',JSON.stringify(items)),PRODUCTS.slice(0,60).map(p=>({slug:p.slug,quantity:2})));
    await page.goto(base+'/'+locale+'/order-slip');await page.getByRole('spinbutton').first().waitFor();
    const inputs=page.locator('main input:not([type=number])');await inputs.nth(0).fill(locale==='ne'?'परीक्षण ग्राहक':'Audit Customer');await inputs.nth(2).fill('9800000000');
    await page.locator('main textarea').first().fill(('Audit notes / परीक्षण विवरण ').repeat(100));
    const download=page.waitForEvent('download');await page.getByRole('button',{name:locale==='en'?'Download order PDF':'अर्डर PDF डाउनलोड गर्नुहोस्',exact:true}).click();const file=await download;await file.saveAs(`${evidence}/${engine}-${locale}-multipage.pdf`);
    await page.getByRole('button',{name:locale==='en'?'Review PDF':'PDF हेर्नुहोस्',exact:true}).click();await page.locator('iframe[title]').last().waitFor();
    await page.getByRole('button',{name:locale==='en'?'Share PDF file':'PDF फाइल सेयर गर्नुहोस्',exact:true}).click();
    results.push({engine,locale,pdfSaved:true,preview:true,shareNotice:await page.locator('main [role=status]').allTextContents(),whatsapp:await page.locator('main a[href*="wa.me"]').getAttribute('href'),storage:await page.evaluate(()=>Object.keys(localStorage))});
    await page.reload();assert.equal(await inputs.nth(0).inputValue(),'');
    await page.evaluate(slug=>localStorage.setItem('saphal-surgical-order',JSON.stringify([{slug,quantity:1}])),PRODUCTS[0].slug);
    await page.reload();await page.getByRole('spinbutton').first().waitFor();await inputs.nth(0).fill(locale==='ne'?'परीक्षण ग्राहक':'Audit Customer');await inputs.nth(2).fill('9800000000');
    const singleDownload=page.waitForEvent('download');await page.getByRole('button',{name:locale==='en'?'Download order PDF':'अर्डर PDF डाउनलोड गर्नुहोस्',exact:true}).click();await (await singleDownload).saveAs(`${evidence}/${engine}-${locale}-single.pdf`);
   }
   results.push({engine,errors});await context.close();
  }finally{await browser.close();}
 }
 fs.writeFileSync(`${evidence}/browser-results.json`,JSON.stringify(results,null,2));console.log(JSON.stringify({checks:results.length,failures:results.filter(x=>x.overflow||x.broken?.length||x.errors?.length)}));
})().catch(e=>{fs.writeFileSync(`${evidence}/browser-results.json`,JSON.stringify(results,null,2));console.error(e);process.exitCode=1;});
