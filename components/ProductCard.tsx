import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, ArrowRight, Tag, HelpCircle, AlertCircle } from 'lucide-react';
import { WhatsAppIcon } from '@/components/Icons';
import { ProductItem } from '@/data/products';
import { siteConfig, getProductWhatsAppUrl } from '@/config/site';
import { Locale } from '@/lib/translations';

interface ProductCardProps {
  product: ProductItem;
  locale: Locale;
  priority?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, locale, priority = false }) => {
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

  const whatsAppUrl = getProductWhatsAppUrl(productName, product.slug, locale, product.brand);

  return (
    <article className="group bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md hover:border-green-300 transition-all duration-300 flex flex-col justify-between h-full">
      <div>
        {/* Product Image Box with object-contain to prevent device cropping */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-50 p-2 flex items-center justify-center border-b border-slate-100">
          <Image
            src={product.image.url}
            alt={productAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
            className="object-contain p-2 group-hover:scale-102 transition-transform duration-300"
            loading={priority ? undefined : 'lazy'}
            priority={priority}
          />
          {/* Illustrative Tag */}
          <div className="absolute top-2.5 right-2.5 bg-white/95 backdrop-blur-xs text-slate-700 border border-slate-200 text-[10px] font-medium px-2 py-0.5 rounded-md flex items-center gap-1 shadow-xs pointer-events-none">
            <HelpCircle className="w-3 h-3 text-[#15803D]" />
            <span>{isNe ? 'सांकेतिक' : 'Illustrative'}</span>
          </div>

          {/* Verified Brand badge if available */}
          {product.brand && (
            <div className="absolute top-2.5 left-2.5 bg-[#F0FDF4] text-[#15803D] text-[10px] font-bold px-2 py-0.5 rounded-md border border-[#DCFCE7] shadow-xs pointer-events-none">
              <span>{isNe ? `ब्रान्ड: ${product.brand}` : `Brand: ${product.brand}`}</span>
            </div>
          )}
        </div>

        {/* Card Body */}
        <div className="p-4 sm:p-5 space-y-3">
          {/* Price & Availability Badges */}
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-[#15803D] bg-[#F0FDF4] px-2.5 py-1 rounded-lg border border-[#DCFCE7]">
              <Tag className="w-3.5 h-3.5 text-[#15803D] shrink-0" />
              <span>{priceLabel}</span>
            </div>
            <div>
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-md">
                <AlertCircle className="w-3 h-3 text-slate-500 shrink-0" />
                <span>{availabilityLabel}</span>
              </span>
            </div>
          </div>

          {/* Product Title */}
          <h3 className="font-heading font-bold text-base sm:text-lg text-[#17251C] group-hover:text-[#15803D] transition-colors leading-snug">
            <Link
              href={`/${locale}/products/${product.slug}`}
              className="focus-visible:ring-2 focus-visible:ring-[#15803D] rounded"
            >
              {productName}
            </Link>
          </h3>

          {/* Product Short Description */}
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
            {productDesc}
          </p>
        </div>
      </div>

      {/* Card Footer Actions with 44px minimum touch targets */}
      <div className="p-4 sm:p-5 pt-0 border-t border-slate-100 mt-3">
        <div className="pt-3 flex flex-col xs:flex-row items-stretch gap-2">
          {/* Direct Landline Call Action */}
          <a
            href={`tel:${siteConfig.phone.raw}`}
            className="flex-1 min-h-[44px] py-2.5 px-3 text-xs font-bold text-white bg-[#15803D] hover:bg-[#166534] rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-xs focus-visible:ring-2 focus-visible:ring-[#15803D]"
            aria-label={`${enquireActionLabel} for ${productName} on ${siteConfig.phone.display}`}
          >
            <Phone className="w-3.5 h-3.5 text-white" />
            <span>{enquireActionLabel}</span>
          </a>

          {/* View Details Link */}
          <Link
            href={`/${locale}/products/${product.slug}`}
            className="min-h-[44px] py-2.5 px-3.5 text-xs font-bold text-[#15803D] hover:text-[#166534] bg-[#F0FDF4] hover:bg-[#DCFCE7] border border-[#DCFCE7] rounded-xl transition-colors flex items-center justify-center gap-1 focus-visible:ring-2 focus-visible:ring-[#15803D]"
            aria-label={`${detailLabel} - ${productName}`}
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
              className="w-full min-h-[44px] py-2 px-3 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-xs"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              <span>{isNe ? 'ह्वाट्सएपमा सोधपुछ' : 'Inquire on WhatsApp'}</span>
            </a>
          </div>
        )}
      </div>
    </article>
  );
};
