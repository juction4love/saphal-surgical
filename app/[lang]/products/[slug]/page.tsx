import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Phone, Tag, AlertCircle, ArrowLeft, ArrowRight, HelpCircle, CheckCircle2, ShieldAlert } from 'lucide-react';
import { WhatsAppIcon } from '@/components/Icons';
import { siteConfig, getProductWhatsAppUrl } from '@/config/site';
import { translations, Locale } from '@/lib/translations';
import { PRODUCTS, ProductItem } from '@/data/products';
import { CATEGORIES } from '@/data/categories';
import { ProductCard } from '@/components/ProductCard';
import { ProductImageUnavailable } from '@/components/ProductImageUnavailable';

interface PageProps {
  params: Promise<{ lang: string; slug: string }> | { lang: string; slug: string };
}

export function generateStaticParams() {
  const params: Array<{ lang: string; slug: string }> = [];
  for (const lang of ['ne', 'en']) {
    for (const product of PRODUCTS) {
      params.push({
        lang,
        slug: product.slug,
      });
    }
  }
  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const lang = (resolvedParams.lang === 'en' ? 'en' : 'ne') as Locale;
  const product = PRODUCTS.find((p) => p.slug === resolvedParams.slug);

  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  const isNe = lang === 'ne';
  const title = `${isNe ? product.name.ne : product.name.en} | ${siteConfig.legalName}`;
  const description = isNe ? product.shortDesc.ne : product.shortDesc.en;

  return {
    title,
    description,
    alternates: {
      canonical: `${siteConfig.baseUrl}/${lang}/products/${product.slug}`,
      languages: {
        ne: `${siteConfig.baseUrl}/ne/products/${product.slug}`,
        en: `${siteConfig.baseUrl}/en/products/${product.slug}`,
        'x-default': `${siteConfig.baseUrl}/ne/products/${product.slug}`,
      },
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const lang = (resolvedParams.lang === 'en' ? 'en' : 'ne') as Locale;
  const product = PRODUCTS.find((p) => p.slug === resolvedParams.slug);

  if (!product) {
    notFound();
  }

  const t = translations[lang];
  const isNe = lang === 'ne';
  const category = CATEGORIES.find((c) => c.id === product.categoryId);

  const productName = isNe ? product.name.ne : product.name.en;
  const productDesc = isNe ? product.description.ne : product.description.en;
  const productAlt = isNe ? product.image.alt.ne : product.image.alt.en;
  const keyPoints = isNe ? product.keyPoints.ne : product.keyPoints.en;

  const priceLabel = isNe ? 'मूल्य कुराकानीमा — सम्पर्क गर्नुहोस्' : 'Price negotiable — contact us';
  const availabilityLabel = isNe ? 'उपलब्धता बुझ्न सम्पर्क गर्नुहोस्' : 'Contact to confirm availability';

  // Pre-filled WhatsApp message with brand, item link, and size/quantity inquiry
  const whatsAppUrl = getProductWhatsAppUrl(productName, product.slug, lang, product.brand);

  const enquiryOptions = product.enquiryOptions
    ? (isNe ? product.enquiryOptions.ne : product.enquiryOptions.en)
    : [];

  // Related products from the same category
  const relatedProducts = PRODUCTS.filter(
    (p) => p.categoryId === product.categoryId && p.id !== product.id
  ).slice(0, 4);

  return (
    <div className="py-8 sm:py-14 space-y-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-safe bg-white">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center flex-wrap gap-2 text-xs sm:text-sm text-[#475569]" aria-label="Breadcrumb">
        <Link href={`/${lang}`} className="hover:text-[#15803D] min-h-[44px] flex items-center">
          {t.nav.home}
        </Link>
        <span aria-hidden="true">/</span>
        <Link href={`/${lang}/products`} className="hover:text-[#15803D] min-h-[44px] flex items-center">
          {t.nav.products}
        </Link>
        {category && (
          <>
            <span aria-hidden="true">/</span>
            <Link
              href={`/${lang}/products?category=${category.id}`}
              className="hover:text-[#15803D] min-h-[44px] flex items-center truncate max-w-[200px]"
            >
              {isNe ? category.name.ne : category.name.en}
            </Link>
          </>
        )}
        <span aria-hidden="true">/</span>
        <span className="text-[#17251C] font-bold truncate max-w-[240px] sm:max-w-none" aria-current="page">
          {productName}
        </span>
      </nav>

      {/* Main Product Layout */}
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Product Image with object-contain */}
        <div className="lg:col-span-6 space-y-3">
          <div className="relative aspect-[4/3] sm:aspect-square w-full rounded-3xl overflow-hidden border border-slate-200 bg-slate-50 shadow-2xs flex items-center justify-center p-4">
            {product.image.url ? (
              <Image
                src={product.image.url}
                alt={productAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain p-4"
                priority
              />
            ) : (
              <ProductImageUnavailable locale={lang} alt={productAlt} />
            )}
            {/* Illustrative Notice Badge */}
            {product.image.url && (
              <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-sm border border-[#DCFCE7] text-[#17251C] text-xs p-3 rounded-2xl flex items-center gap-2 shadow-2xs pointer-events-none">
                <HelpCircle className="w-4 h-4 text-[#15803D] shrink-0" />
                <span className="text-[11px] sm:text-xs leading-tight text-[#475569]">
                  {product.image.sourceLabel} — {isNe ? 'वास्तविक सामानको ब्रान्ड र स्वरूप मौज्दात अनुसार फरक पर्न सक्छ।' : 'Actual brand appearance and specs depend on current stock.'}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Product Information & Enquiry */}
        <div className="lg:col-span-6 space-y-6">
          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#15803D] bg-[#F0FDF4] border border-[#DCFCE7] px-3.5 py-1 rounded-full">
              {category ? (isNe ? category.name.ne : category.name.en) : t.common.proposedCategoryNote}
            </span>
            {product.brand && (
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#15803D] bg-[#F0FDF4] border border-[#DCFCE7] px-3.5 py-1 rounded-full">
                {isNe ? `प्रमाणित ब्रान्ड: ${product.brand}` : `Verified Brand: ${product.brand}`}
              </span>
            )}
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-[#17251C] tracking-tight leading-tight">
            {productName}
          </h1>

          {/* Pricing & Availability Status */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#F0FDF4] border border-[#DCFCE7] space-y-2.5">
            <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-[#15803D]">
              <Tag className="w-4 h-4 text-[#15803D] shrink-0" />
              <span>{priceLabel}</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#475569]">
              <AlertCircle className="w-4 h-4 text-[#475569] shrink-0" />
              <span>{availabilityLabel}</span>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2.5">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#475569]">
              {isNe ? 'सामग्री विवरण' : 'Product Description'}
            </h2>
            <p className="text-sm sm:text-base text-[#17251C] leading-relaxed">
              {productDesc}
            </p>
          </div>

          {/* Key Points / Highlights */}
          {keyPoints.length > 0 && (
            <div className="space-y-2.5 pt-1">
              <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#475569]">
                {isNe ? 'प्रमुख विशेषताहरू तथा विवरण' : 'Key Specifications & Highlights'}
              </h2>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#17251C]">
                {keyPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#15803D] shrink-0 mt-0.5" />
                    <span className="leading-relaxed text-[#475569]">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Enquiry Options (Sizes / Variants) */}
          {enquiryOptions.length > 0 && (
            <div className="p-4 sm:p-5 rounded-2xl bg-[#F0FDF4] border border-[#DCFCE7] space-y-3">
              <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#15803D] flex items-center gap-2">
                <Tag className="w-4 h-4 text-[#15803D]" />
                <span>{t.brands.enquiryOptionsLabel}</span>
              </h2>
              <ul className="space-y-2 text-xs sm:text-sm text-[#17251C]">
                {enquiryOptions.map((opt, index) => (
                  <li key={index} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#15803D] mt-2 shrink-0" />
                    <span className="leading-relaxed font-medium text-[#17251C]">{opt}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[11px] text-[#15803D] font-medium italic pt-1">
                {isNe
                  ? '* विशिष्ट साइज तथा प्याकिङको मौज्दात पुष्टि गर्न हामीलाई फोन वा WhatsApp गर्नुहोस्।'
                  : '* Please contact us via phone or WhatsApp to verify availability for your specific size and packaging.'}
              </p>
            </div>
          )}

          {/* Enquiry Actions Box with min 44px buttons */}
          <div className="p-5 sm:p-7 rounded-2xl bg-white border border-[#DCFCE7] text-[#17251C] space-y-4 shadow-xs">
            <h3 className="font-heading font-bold text-base sm:text-lg text-[#17251C]">
              {isNe ? 'यो सामग्री सोधपुछ गर्नुहोस्' : 'Enquire About This Item'}
            </h3>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              {isNe
                ? `सफल सर्जिकल हाउसको आधिकारिक फोन नम्बर ${siteConfig.phone.displayNe} वा ह्वाट्सएप ${siteConfig.whatsapp.display} मार्फत यस सामग्रीको उपलब्धता, ब्रान्ड तथा दररेट सोधपुछ गर्न सक्नुहुन्छ।`
                : `Please call our official landline ${siteConfig.phone.display} or WhatsApp ${siteConfig.whatsapp.display} to verify live stock availability, technical brands, and pricing.`}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={`tel:${siteConfig.phone.raw}`}
                className="flex-1 min-h-[48px] py-3 px-4 rounded-xl bg-[#15803D] hover:bg-[#166534] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors shadow-2xs"
              >
                <Phone className="w-4 h-4" />
                <span>{t.common.inquireByPhone}: {isNe ? siteConfig.phone.displayNe : siteConfig.phone.display}</span>
              </a>

              {whatsAppUrl && (
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-h-[48px] py-3 px-4 rounded-xl bg-[#F0FDF4] hover:bg-[#DCFCE7] text-[#15803D] border border-[#DCFCE7] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>{t.common.inquireByWhatsApp}</span>
                </a>
              )}
            </div>
          </div>

          {/* Notice Banner */}
          <div className="p-4 rounded-xl bg-[#F0FDF4] border border-[#DCFCE7] text-[#17251C] text-xs sm:text-sm flex items-start gap-2.5">
            <ShieldAlert className="w-4 h-4 text-[#15803D] shrink-0 mt-0.5" />
            <p className="leading-relaxed text-[#475569]">
              {t.common.availabilityDisclaimer}
            </p>
          </div>
        </div>
      </div>

      {/* Related Products from Category (1 to 4 cols) */}
      {relatedProducts.length > 0 && (
        <section className="pt-10 border-t border-[#DCFCE7] space-y-6">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-[#17251C]">
              {isNe ? 'यस श्रेणीका अन्य सामग्रीहरू' : 'More Items in This Category'}
            </h2>
            <Link
              href={`/${lang}/products?category=${product.categoryId}`}
              className="min-h-[44px] flex items-center text-xs sm:text-sm font-bold text-[#15803D] hover:text-[#166534] underline underline-offset-4"
            >
              <span>{isNe ? 'सबै हेर्नुहोस्' : 'View All'}</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
            {relatedProducts.map((relProduct) => (
              <ProductCard key={relProduct.id} product={relProduct} locale={lang} />
            ))}
          </div>
        </section>
      )}

      {/* Back to Catalogue */}
      <div className="pt-2">
        <Link
          href={`/${lang}/products`}
          className="min-h-[44px] inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#475569] hover:text-[#15803D]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{isNe ? 'क्याटलग सूचीमा फर्कनुहोस्' : 'Back to Product Catalogue'}</span>
        </Link>
      </div>
    </div>
  );
}
