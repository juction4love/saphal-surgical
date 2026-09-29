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
    <article className="group bg-white rounded-2xl border border-[#E3EDE5] shadow-sm hover:shadow-md hover:border-[#86C995] transition-all duration-300 flex flex-col justify-between h-full overflow-hidden">
      <div>
        {/* Product Image Box with object-contain to prevent device cropping */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F7FAF7] p-2 flex items-center justify-center border-b border-[#EDF2ED]">
          <Image
            src={product.image.url}
            alt={productAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
            className="object-contain p-2 transition-transform duration-300 group-hover:scale-[1.02]"
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
      <div className="p-4 sm:p-5 pt-0 border-t border-[#EDF2ED] mt-3">
        {/* WhatsApp Button (Shown only when confirmed & enabled in config) */}
        {whatsAppUrl && (
          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 w-full min-h-[46px] py-2.5 px-3 text-xs font-bold text-white bg-[#15803D] hover:bg-[#166534] rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-sm focus-visible:ring-2 focus-visible:ring-[#15803D] focus-visible:ring-offset-2"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>{isNe ? 'ह्वाट्सएपमा सोधपुछ' : 'Inquire on WhatsApp'}</span>
          </a>
        )}

        <div className="mt-2 grid grid-cols-2 gap-2">
          <a
            href={`tel:${siteConfig.phone.raw}`}
            className="min-h-[44px] py-2 px-2.5 text-xs font-bold text-[#166534] bg-white hover:bg-[#F0FDF4] border border-[#DCE9DE] rounded-xl transition-colors flex items-center justify-center gap-1.5 focus-visible:ring-2 focus-visible:ring-[#15803D]"
            aria-label={`${enquireActionLabel} for ${productName} on ${siteConfig.phone.display}`}
          >
            <Phone className="w-3.5 h-3.5 shrink-0" />
            <span>{enquireActionLabel}</span>
          </a>
          <Link
            href={`/${locale}/products/${product.slug}`}
            className="min-h-[44px] py-2 px-2.5 text-xs font-bold text-[#166534] bg-[#F0FDF4] hover:bg-[#DCFCE7] border border-[#DCE9DE] rounded-xl transition-colors flex items-center justify-center gap-1 focus-visible:ring-2 focus-visible:ring-[#15803D]"
            aria-label={`${detailLabel} - ${productName}`}
          >
            <span>{detailLabel}</span>
            <ArrowRight className="w-3.5 h-3.5 shrink-0" />
          </Link>
        </div>
      </div>
    </article>
  );
};
