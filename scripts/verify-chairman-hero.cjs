// Run with Playwright installed: node scripts/verify-chairman-hero.cjs <base-url>
const { chromium, webkit } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const base = process.argv[2] || 'http://127.0.0.1:3100';
const viewports = [[320, 812], [375, 812], [390, 844], [414, 896], [430, 932], [768, 1024], [1440, 900]];

(async () => {
  for (const [engine, browserType] of Object.entries({ chromium, webkit })) {
    const browser = await browserType.launch();
    try {
      for (const [width, height] of viewports) {
        for (const locale of ['ne', 'en']) {
          const context = await browser.newContext({ viewport: { width, height }, isMobile: width < 768, hasTouch: width < 768, deviceScaleFactor: width < 768 ? 3 : 1 });
          const page = await context.newPage();
          const response = await page.goto(`${base}/${locale}`, { waitUntil: 'load' });
          assert.equal(response.status(), 200);
          await page.locator('[data-chairman-hero]').waitFor();
          await page.evaluate(() => document.fonts.ready);
          const result = await page.evaluate(async () => {
            const img = document.querySelector('[data-chairman-hero]');
            await img.decode();
            const rect = img.getBoundingClientRect();
            const header = document.querySelector('header').getBoundingClientRect();
            const bar = document.querySelector('[role="region"].fixed');
            const barTop = bar && getComputedStyle(bar).display !== 'none' ? bar.getBoundingClientRect().top : innerHeight;
            const section = img.closest('section');
            const heading = section.querySelector('h1').getBoundingClientRect();
            const preloads = [...document.querySelectorAll('link[rel="preload"][as="image"]')];
            const style = getComputedStyle(img);
            const points = [[rect.left + 24, rect.top + 24], [rect.right - 24, rect.bottom - 24], [rect.left + rect.width / 2, rect.top + rect.height / 2]];
            return {
              naturalWidth: img.naturalWidth, currentSrc: img.currentSrc,
              top: rect.top, bottom: rect.bottom, width: rect.width, height: rect.height,
              fullyVisible: rect.top >= header.bottom && rect.bottom <= barTop && rect.left >= 0 && rect.right <= innerWidth && points.every(([x, y]) => document.elementFromPoint(x, y) === img),
              overflow: document.documentElement.scrollWidth > innerWidth,
              photoFirst: rect.bottom <= heading.top,
              fit: style.objectFit, ratio: style.aspectRatio, loading: img.loading,
              explicitDimensions: img.getAttribute('width') === '960' && img.getAttribute('height') === '1280',
              preloadCount: preloads.length,
              matchingPreload: preloads.length === 1 && preloads[0].imageSrcset === img.srcset && preloads[0].imageSizes === img.sizes,
              bilingual: Boolean(section.querySelector('p[lang="en"]') && section.querySelector('p[lang="ne"]')),
              heroRequests: performance.getEntriesByType('resource').filter(r => /portrait-02-.*webp/.test(r.name)).length,
            };
          });
          console.log(JSON.stringify({ engine, locale, viewport: `${width}x${height}`, ...result }));
          assert(result.naturalWidth > 0 && result.fullyVisible, 'Hero must load and be fully visible above the fold');
          assert(!result.overflow, 'No horizontal overflow');
          assert(result.explicitDimensions && result.matchingPreload && result.bilingual);
          assert.equal(result.fit, 'cover');
          assert.equal(result.loading, 'eager');
          assert.equal(result.heroRequests, 1, 'Download only the selected hero source');
          if (width < 768) assert(result.photoFirst, 'Photo precedes name on mobile');
          if (process.env.SCREENSHOT_DIR && [320, 390, 1440].includes(width)) {
            fs.mkdirSync(process.env.SCREENSHOT_DIR, { recursive: true });
            await page.screenshot({ path: `${process.env.SCREENSHOT_DIR}/${engine}-${locale}-${width}.png` });
          }
          await context.close();
        }
      }
    } finally { await browser.close(); }
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
