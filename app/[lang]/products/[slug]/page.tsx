import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Phone, Tag, AlertCircle, ArrowLeft, HelpCircle, CheckCircle2, ShieldAlert } from 'lucide-react';
import { siteConfig, getWhatsAppUrl } from '@/config/site';
import { translations, Locale } from '@/lib/translations';
import { PRODUCTS, ProductItem } from '@/data/products';
import { CATEGORIES } from '@/data/categories';
import { ProductCard } from '@/components/ProductCard';

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

  // Pre-filled WhatsApp message (if enabled in siteConfig)
  const waMessage = isNe
    ? `नमस्ते, म सफल सर्जिकल हाउसबाट "${product.name.ne}" बारे सोधपुछ गर्न चाहन्छु।`
    : `Hello, I would like to inquire about "${product.name.en}" from Saphal Surgical House.`;
  const whatsAppUrl = getWhatsAppUrl(waMessage);

  // Related products from the same category
  const relatedProducts = PRODUCTS.filter(
    (p) => p.categoryId === product.categoryId && p.id !== product.id
  ).slice(0, 3);

  return (
    <div className="py-10 sm:py-16 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-slate-500">
        <Link href={`/${lang}`} className="hover:text-teal-700">
          {t.nav.home}
        </Link>
        <span>/</span>
        <Link href={`/${lang}/products`} className="hover:text-teal-700">
          {t.nav.products}
        </Link>
        {category && (
          <>
            <span>/</span>
            <Link
              href={`/${lang}/products?category=${category.id}`}
              className="hover:text-teal-700"
            >
              {isNe ? category.name.ne : category.name.en}
            </Link>
          </>
        )}
        <span>/</span>
        <span className="text-slate-900 font-semibold truncate max-w-xs">{productName}</span>
      </nav>

      {/* Main Product Layout */}
      <div className="grid lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Product Image */}
        <div className="lg:col-span-6 space-y-3">
          <div className="relative h-80 sm:h-[420px] w-full rounded-3xl overflow-hidden border border-slate-200 bg-slate-100 shadow-sm">
            <Image
              src={product.image.url}
              alt={productAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
            {/* Illustrative Notice Badge */}
            <div className="absolute bottom-3 left-3 right-3 bg-navy-900/85 backdrop-blur-sm text-slate-200 text-xs p-2.5 rounded-xl flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-teal-400 shrink-0" />
              <span className="text-[11px] leading-tight">
                {product.image.sourceLabel} — {isNe ? 'वास्तविक सामानको ब्रान्ड र स्वरूप मौज्दात अनुसार फरक पर्न सक्छ।' : 'Actual brand appearance and specs depend on current stock.'}
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Product Information & Enquiry */}
        <div className="lg:col-span-6 space-y-6">
          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
              {category ? (isNe ? category.name.ne : category.name.en) : t.common.proposedCategoryNote}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
            {productName}
          </h1>

          {/* Pricing & Availability Status */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex items-center gap-2 text-sm font-bold text-teal-800">
              <Tag className="w-4 h-4 text-teal-700" />
              <span>{priceLabel}</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
              <AlertCircle className="w-4 h-4 text-slate-500" />
              <span>{availabilityLabel}</span>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              {isNe ? 'सामग्री विवरण' : 'Product Description'}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {productDesc}
            </p>
          </div>

          {/* Key Points / Highlights */}
          {keyPoints.length > 0 && (
            <div className="space-y-2.5 pt-2">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                {isNe ? 'प्रमुख विशेषताहरू तथा सोधपुछ बुँदा' : 'Key Specifications & Highlights'}
              </h2>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {keyPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Enquiry Actions Box */}
          <div className="p-6 rounded-2xl bg-navy-900 text-white space-y-4 shadow-xl">
            <h3 className="font-heading font-bold text-base text-white">
              {isNe ? 'यो सामग्री सोधपुछ गर्नुहोस्' : 'Enquire About This Item'}
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {isNe
                ? `सफल सर्जिकल हाउसको आधिकारिक फोन नम्बर ${siteConfig.phone.display} मा फोन गरेर यस सामग्रीको उपलब्धता, ब्रान्ड तथा दररेट बुझ्न सक्नुहुन्छ।`
                : `Please call our official landline ${siteConfig.phone.display} to verify live stock availability, technical brands, and wholesale/retail pricing.`}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={`tel:${siteConfig.phone.raw}`}
                className="flex-1 py-3 px-4 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>{t.common.inquireByPhone}: {siteConfig.phone.display}</span>
              </a>

              {whatsAppUrl && (
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                >
                  <span>{t.common.inquireByWhatsApp}</span>
                </a>
              )}
            </div>
          </div>

          {/* Notice Banner */}
          <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-2.5">
            <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              {t.common.availabilityDisclaimer}
            </p>
          </div>
        </div>
      </div>

      {/* Related Products from Category */}
      {relatedProducts.length > 0 && (
        <section className="pt-10 border-t border-slate-200 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-slate-900">
              {isNe ? 'यस श्रेणीका अन्य सामग्रीहरू' : 'More Items in This Category'}
            </h2>
            <Link
              href={`/${lang}/products?category=${product.categoryId}`}
              className="text-xs font-bold text-teal-700 hover:text-teal-900 underline underline-offset-4"
            >
              {isNe ? 'सबै हेर्नुहोस्' : 'View All'} &rarr;
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((relProduct) => (
              <ProductCard key={relProduct.id} product={relProduct} locale={lang} />
            ))}
          </div>
        </section>
      )}

      {/* Back to Catalogue */}
      <div className="pt-4">
        <Link
          href={`/${lang}/products`}
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-teal-700"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{isNe ? 'क्याटलग सूचीमा फर्कनुहोस्' : 'Back to Product Catalogue'}</span>
        </Link>
      </div>
    </div>
  );
}
