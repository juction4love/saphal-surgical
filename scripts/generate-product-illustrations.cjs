const fs = require('node:fs');
const path = require('node:path');
const React = require('react');
const ts = require('typescript');
const { renderToStaticMarkup } = require('react-dom/server');

const root = process.cwd();

function loadTypeScriptModule(relativePath, moduleOverrides = {}) {
  const filePath = path.join(root, relativePath);
  const source = fs.readFileSync(filePath, 'utf8');
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: {
      esModuleInterop: true,
      jsx: ts.JsxEmit.React,
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
    },
  });
  const loaded = { exports: {} };
  const localRequire = (specifier) => Object.hasOwn(moduleOverrides, specifier)
    ? moduleOverrides[specifier]
    : require(specifier);
  new Function('require', 'module', 'exports', outputText)(localRequire, loaded, loaded.exports);
  return loaded.exports;
}

const catalogueExpansion = loadTypeScriptModule('data/catalogue-expansion.ts');
const { PRODUCTS } = loadTypeScriptModule('data/products.ts', { './catalogue-expansion': catalogueExpansion, './product-image-review.json': require('../data/product-image-review.json') });
const { ProductIllustration } = loadTypeScriptModule('components/ProductIllustration.tsx');
const outputDirectory = path.join(root, 'public', 'products', 'illustrations');
const manifestPath = path.join(root, 'data', 'product-image-sources.json');

fs.mkdirSync(outputDirectory, { recursive: true });

const seen = new Set();
const missingIllustrations = [];
const manifest = PRODUCTS.map((product) => {
  if (!product.image.url) return { slug: product.slug, path: null, kind: 'unavailable', reason: 'Unrelated generic illustration withheld after title-to-template review', alt: product.image.alt };
  if (seen.has(product.slug)) {
    throw new Error(`Duplicate catalogue slug: ${product.slug}`);
  }
  seen.add(product.slug);

  if (product.image.kind === 'photo') {
    const sourceFile = product.image.photoSourceFile;
    if (!sourceFile || path.basename(sourceFile) !== sourceFile) {
      throw new Error(`Invalid supplied photo source for ${product.slug}`);
    }
    if (!product.image.url?.startsWith('/products/user-supplied/')) {
      throw new Error(`Invalid supplied photo output path for ${product.slug}`);
    }
    if (!product.image.photoSourcePermission) {
      throw new Error(`Missing supplied photo permission record for ${product.slug}`);
    }
    const sourcePath = path.join(root, sourceFile);
    const publicRoot = path.resolve(root, 'public');
    const assetPath = path.resolve(publicRoot, product.image.url.slice(1));
    if (!assetPath.startsWith(`${publicRoot}${path.sep}`)) {
      throw new Error(`Supplied photo output path escapes public for ${product.slug}`);
    }
    if (!fs.existsSync(sourcePath)) {
      throw new Error(`Supplied photo ${sourceFile} is missing for ${product.slug}`);
    }
    fs.mkdirSync(path.dirname(assetPath), { recursive: true });
    fs.copyFileSync(sourcePath, assetPath);
    return {
      slug: product.slug,
      path: product.image.url,
      kind: 'photo',
      source: `User-supplied photograph (${sourceFile})`,
      creator: 'Original creator not identified; supplied by the project owner',
      license: product.image.photoSourcePermission,
      alt: product.image.alt,
    };
  }

  if (!product.image.illustration || product.image.kind !== 'illustration') {
    throw new Error(`Missing illustration metadata for ${product.slug}`);
  }

  const fileName = `${product.slug}.svg`;
  const assetPath = path.join(outputDirectory, fileName);
  let svg;
  try {
    svg = renderToStaticMarkup(React.createElement(ProductIllustration, {
      kind: product.image.illustration,
      productName: product.name.en,
      locale: 'en',
    }));
  } catch (error) {
    if (!(error instanceof Error) || !error.message.startsWith('No product-specific illustration template is defined for ')) {
      throw error;
    }
    missingIllustrations.push(`${product.slug} (${product.image.illustration})`);
    return null;
  }
  if (!svg.includes('Product illustration; actual model may differ.')
      || !svg.includes('सामानको चित्रण; वास्तविक मोडेल फरक हुन सक्छ।')) {
    throw new Error(`Bilingual illustration disclaimer is missing for ${product.slug}`);
  }
  fs.writeFileSync(assetPath, `${svg}\n`, 'utf8');

  return {
    slug: product.slug,
    path: `/products/illustrations/${fileName}`,
    kind: 'illustration',
    illustration: product.image.illustration,
    source: 'Original SVG artwork stored in this repository',
    creator: 'Saphal Surgical House catalogue project',
    license: 'Original repository-authored artwork; no third-party image used',
    alt: product.image.alt,
  };
});

if (missingIllustrations.length) {
  throw new Error(`Missing product illustration templates:\n${missingIllustrations.join('\n')}`);
}

fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');
console.log(`Generated ${manifest.length} product illustrations and source records.`);
