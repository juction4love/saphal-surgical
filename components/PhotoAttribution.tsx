import type { ProductItem } from '@/data/products';
import type { Locale } from '@/lib/translations';

export function PhotoAttribution({ image, locale }: { image: ProductItem['image']; locale: Locale }) {
  if (!image.url || !image.attribution) return null;
  const attribution = image.attribution;
  return (
    <p className="text-[11px] leading-relaxed text-slate-600 break-words">
      {locale === 'ne' ? 'तस्बिर: ' : 'Photo: '}{attribution.creator}{' · '}
      <a href={attribution.sourceURL} target="_blank" rel="noreferrer" className="underline underline-offset-2 hover:text-green-800">{locale === 'ne' ? 'स्रोत' : 'Source'}</a>{' · '}
      {attribution.licenseURL ? (
        <a href={attribution.licenseURL} target="_blank" rel="noreferrer" className="underline underline-offset-2 hover:text-green-800">{attribution.license}</a>
      ) : attribution.license}
      {attribution.changes && <span>{' · '}{locale === 'ne' ? 'आकार घटाइएको र WebP मा रूपान्तरण गरिएको।' : 'Resized and converted to WebP.'}</span>}
    </p>
  );
}
