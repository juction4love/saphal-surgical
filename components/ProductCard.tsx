import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, ArrowRight, Tag, HelpCircle, AlertCircle } from 'lucide-react';
import { ProductItem } from '@/data/products';
import { siteConfig, getWhatsAppUrl } from '@/config/site';
import { Locale } from '@/lib/translations';

interface ProductCardProps {
  product: ProductItem;
  locale: Locale;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, locale }) => {
  const isNe = locale === 'ne';
  const productName = isNe ? product.name.ne : product.name.en;
  const productAlt = isNe ? product.image.alt.ne : product.image.alt.en;
  const productDesc = isNe ? product.shortDesc.ne : product.shortDesc.en;

  const priceLabel = isNe
    ? 'मूल्य कुराकानीमा — सम्पर्क गर्नुहोस्'
    : 'Price negotiable — contact us';

  const availabilityLabel = isNe
    ? 'उपलब्धता बुझ्न सम्पर्क गर्नुहोस्'
    : 'Contact to confirm availability';

  const enquireActionLabel = isNe
    ? 'फोन सोधपुछ'
    : 'Call to Inquire';

  const detailLabel = isNe
    ? 'विस्तृत विवरण'
    : 'View Details';

  const waMessage = isNe
    ? `नमस्ते, म सफल सर्जिकल हाउसबाट "${product.name.ne}" बारे सोधपुछ गर्न चाहन्छु।`
    : `Hello, I would like to inquire about "${product.name.en}" from Saphal Surgical House.`;

  const whatsAppUrl = getWhatsAppUrl(waMessage);

  return (
    <div className="group bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Product Image Box */}
        <div className="relative h-52 w-full overflow-hidden bg-slate-100">
          <Image
            src={product.image.url}
            alt={productAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          {/* Subtle Illustrative Badge */}
          <div className="absolute top-2.5 right-2.5 bg-navy-900/80 backdrop-blur-sm text-slate-200 text-[10px] font-medium px-2 py-0.5 rounded-md flex items-center gap-1">
            <HelpCircle className="w-3 h-3 text-teal-400" />
            <span>{isNe ? 'सांकेतिक तस्बिर' : 'Illustrative'}</span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 sm:p-6 space-y-3">
          {/* Price & Availability Badges */}
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-teal-800 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-200/60">
              <Tag className="w-3.5 h-3.5 text-teal-700" />
              <span>{priceLabel}</span>
            </div>
            <div>
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                <AlertCircle className="w-3 h-3 text-slate-500" />
                {availabilityLabel}
              </span>
            </div>
          </div>

          {/* Product Title */}
          <h3 className="font-heading font-bold text-lg text-slate-900 group-hover:text-teal-700 transition-colors line-clamp-2">
            <Link href={`/${locale}/products/${product.slug}`}>
              {productName}
            </Link>
          </h3>

          {/* Product Short Description */}
          <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
            {productDesc}
          </p>
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="p-5 sm:p-6 pt-0 border-t border-slate-100 mt-4">
        <div className="pt-3 flex items-center justify-between gap-2">
          {/* Direct Landline Call Action */}
          <a
            href={`tel:${siteConfig.phone.raw}`}
            className="flex-1 py-2 px-3 text-xs font-bold text-white bg-navy-900 hover:bg-teal-800 rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-sm"
            aria-label={`${enquireActionLabel} for ${productName}`}
          >
            <Phone className="w-3.5 h-3.5 text-teal-300" />
            <span>{enquireActionLabel}</span>
          </a>

          {/* View Details Link */}
          <Link
            href={`/${locale}/products/${product.slug}`}
            className="py-2 px-3 text-xs font-semibold text-slate-700 hover:text-teal-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center gap-1"
          >
            <span>{detailLabel}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* WhatsApp Button (Shown only when confirmed & enabled in config) */}
        {whatsAppUrl && (
          <div className="mt-2">
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-1.5 px-3 text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded-lg transition-colors flex items-center justify-center gap-1.5"
            >
              <span>{isNe ? 'ह्वाट्सएपमा सोधपुछ' : 'Inquire on WhatsApp'}</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
