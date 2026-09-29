import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MapPin, ArrowRight, ShieldAlert, Package, Info } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { translations, Locale } from '@/lib/translations';
import { CATEGORIES } from '@/data/categories';
import { PRODUCTS } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';
import { GoogleMapEmbed } from '@/components/GoogleMapEmbed';

interface PageProps {
  params: Promise<{ lang: string }> | { lang: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const lang = (resolvedParams.lang === 'en' ? 'en' : 'ne') as Locale;
  const t = translations[lang];

  return {
    title: t.meta.homeTitle,
    description: t.meta.homeDesc,
    alternates: {
      canonical: `${siteConfig.baseUrl}/${lang}`,
      languages: {
        ne: `${siteConfig.baseUrl}/ne`,
        en: `${siteConfig.baseUrl}/en`,
        'x-default': `${siteConfig.baseUrl}/ne`,
      },
    },
  };
}

export default async function HomePage({ params }: PageProps) {
  const resolvedParams = await params;
  const lang = (resolvedParams.lang === 'en' ? 'en' : 'ne') as Locale;
  const t = translations[lang];
  const isNe = lang === 'ne';

  // Preview up to 8 featured products for 4-column balanced desktop grid
  const previewProducts = PRODUCTS.slice(0, 8);

  return (
    <div className="space-y-12 sm:space-y-20 pb-safe">
      {/* Hero Section */}
      <section className="relative hero-pattern text-white pt-12 pb-16 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs sm:text-sm font-semibold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
                <span>{t.home.badge}</span>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight text-white leading-tight">
                {t.home.heroHeading}
              </h1>

              <p className="text-slate-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                {t.home.heroSubtitle}
              </p>

              {/* Call to Actions with 44px min touch height */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5 pt-2">
                <a
                  href={`tel:${siteConfig.phone.raw}`}
                  className="min-h-[48px] px-6 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-center shadow-lg shadow-teal-900/40 transition-all flex items-center justify-center gap-2 text-sm sm:text-base focus-visible:ring-2 focus-visible:ring-white"
                >
                  <Phone className="w-4 h-4" />
                  <span>{t.home.primaryCta}</span>
                </a>
                <a
                  href={siteConfig.coordinates.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[48px] px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-center backdrop-blur transition-all flex items-center justify-center gap-2 text-sm sm:text-base focus-visible:ring-2 focus-visible:ring-white"
                >
                  <MapPin className="w-4 h-4 text-teal-300" />
                  <span>{t.home.secondaryCta}</span>
                </a>
              </div>

              {/* Supply Clarification Notice */}
              <div className="pt-4 border-t border-slate-700/60 flex items-start gap-2.5 text-xs text-slate-300 text-left">
                <ShieldAlert className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  {t.common.availabilityDisclaimer}
                </p>
              </div>
            </div>

            {/* Right Quick Info Card */}
            <div className="lg:col-span-5">
              <div className="bg-navy-800/90 border border-slate-700 p-5 sm:p-7 rounded-3xl shadow-2xl backdrop-blur-xl space-y-5">
                <div className="flex items-center justify-between pb-3.5 border-b border-slate-700">
                  <div>
                    <h2 className="text-white font-bold text-base">
                      {isNe ? 'सोधपुछ तथा सम्पर्क' : 'Direct Enquiries & Location'}
                    </h2>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {siteConfig.legalName}
                    </p>
                  </div>
                  <span className="px-2.5 py-1 text-[11px] font-semibold rounded-full bg-teal-500/20 text-teal-300">
                    {isNe ? 'सम्पर्क खुला' : 'Inquiries Welcome'}
                  </span>
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="p-3.5 rounded-xl bg-navy-900/60 border border-slate-700/60 flex items-start gap-3">
                    <Phone className="w-4 h-4 text-teal-400 shrink-0 mt-1" />
                    <div>
                      <span className="text-slate-400 text-xs block">{t.common.phoneLabel}</span>
                      <a
                        href={`tel:${siteConfig.phone.raw}`}
                        className="text-sm sm:text-base font-bold text-white hover:text-teal-300 transition-colors block mt-0.5"
                      >
                        {siteConfig.phone.display}
                      </a>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-navy-900/60 border border-slate-700/60 flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-1" />
                    <div>
                      <span className="text-slate-400 text-xs block">{t.common.addressLabel}</span>
                      <p className="text-xs sm:text-sm font-medium text-slate-200 mt-0.5 leading-relaxed">
                        {siteConfig.address.fullAddress[lang]}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-1 text-center">
                  <Link
                    href={`/${lang}/products`}
                    className="min-h-[44px] inline-flex items-center justify-center gap-1.5 text-xs sm:text-sm font-bold text-teal-300 hover:text-teal-200"
                  >
                    <span>{t.home.viewAllCategories}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Overview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 lg:p-12 shadow-xs space-y-6">
          <div className="max-w-3xl space-y-3.5">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              {t.nav.about}
            </span>
            <h2 className="text-xl sm:text-3xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
              {t.home.aboutSectionHeading}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {t.home.aboutSectionSnippet}
            </p>
            <div className="pt-2">
              <Link
                href={`/${lang}/about`}
                className="min-h-[44px] inline-flex items-center gap-2 text-sm sm:text-base font-bold text-teal-700 hover:text-teal-900 underline underline-offset-4"
              >
                <span>{t.home.readMoreAbout}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Business Disclaimers Callout */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 flex items-start gap-3">
            <Info className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              {t.common.notHospitalNotice}
            </p>
          </div>
        </div>
      </section>

      {/* Proposed Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-2.5">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            {t.common.proposedCategoryNote}
          </span>
          <h2 className="text-xl sm:text-3xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
            {t.home.categoriesHeading}
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            {t.home.categoriesSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={`/${lang}/products?category=${cat.id}`}
              className="group bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md hover:border-teal-400 transition-all flex flex-col justify-between"
            >
              <div className="space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center group-hover:bg-teal-700 group-hover:text-white transition-colors">
                  <Package className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-sm sm:text-base text-slate-900 group-hover:text-teal-700 transition-colors">
                  {cat.name[lang]}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {cat.shortDescription[lang]}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm font-semibold text-teal-700">
                <span>{isNe ? 'सोधपुछ गर्नुहोस्' : 'View Products'}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Catalogue Preview Grid: 1 col on narrow mobile, 2 on tablet, 3 on laptop, 4 on wide desktop */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              {isNe ? 'सामग्री क्याटलग' : 'Equipment Catalogue'}
            </span>
            <h2 className="text-xl sm:text-3xl font-heading font-extrabold text-slate-900 tracking-tight mt-2 leading-tight">
              {isNe ? 'प्रमुख सामग्रीहरूको सोधपुछ' : 'Featured Equipment Enquiries'}
            </h2>
          </div>
          <Link
            href={`/${lang}/products`}
            className="min-h-[44px] inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-navy-900 hover:bg-teal-800 text-white text-xs sm:text-sm font-bold transition-colors shadow-xs"
          >
            <span>{t.home.viewAllCategories}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
          {previewProducts.map((product, idx) => (
            <ProductCard
              key={product.id}
              product={product}
              locale={lang}
              priority={idx < 2}
            />
          ))}
        </div>
      </section>

      {/* Location & Map Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            {t.common.locationLabel}
          </span>
          <h2 className="text-xl sm:text-3xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
            {t.home.locationHeading}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {t.home.locationSubtitle}
          </p>
        </div>

        <GoogleMapEmbed locale={lang} />
      </section>
    </div>
  );
}
