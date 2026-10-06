import Image from 'next/image';
import Link from 'next/link';
import { CATEGORIES } from '@/data/categories';
import { getCategoryPhoto } from '@/lib/category-photos';
import type { Locale } from '@/lib/translations';
import { PhotoAttribution } from './PhotoAttribution';

export function CategoryCovers({ locale }: { locale: Locale }) {
  const isNe = locale === 'ne';
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3" data-category-covers>
      {CATEGORIES.map(category => {
        const product = getCategoryPhoto(category.id);
        return (
          <div key={category.id} className="rounded-xl border border-[#E3EDE5] overflow-hidden bg-white">
            <Link href={`/${locale}/products?category=${category.id}`} className="block focus-visible:ring-2 focus-visible:ring-green-700">
              <div className="relative aspect-[4/3] bg-[#F7FAF7] flex items-center justify-center">
                {product?.image.url ? (
                  <Image src={product.image.url} alt={`${category.name[locale]}: ${product.image.alt[locale]}`} fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw" className="object-contain p-2" />
                ) : (
                  <p className="p-3 text-center text-xs text-slate-500">{isNe ? 'श्रेणीको तस्बिर उपलब्ध छैन' : 'Category photograph unavailable'}</p>
                )}
              </div>
              <h3 className="p-3 font-bold text-xs sm:text-sm text-[#17251C] min-h-[44px]">{category.name[locale]}</h3>
            </Link>
            {product && <div className="px-3 pb-3 space-y-1">
              <p className="text-[11px] text-slate-600 leading-relaxed">{isNe ? 'यस श्रेणीको उदाहरण: ' : 'Example in this category: '}{product.name[locale]}</p>
              <p className="text-[11px] text-slate-600 leading-relaxed">{isNe ? 'प्रतिनिधि सामानको तस्बिर; उपलब्ध मोडेल फरक हुन सक्छ।' : 'Representative product photo; supplied model may differ.'}</p>
              <PhotoAttribution image={product.image} locale={locale} />
            </div>}
          </div>
        );
      })}
    </div>
  );
}
