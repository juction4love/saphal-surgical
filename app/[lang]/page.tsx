import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MapPin, ArrowRight, ShieldAlert, Package, CheckCircle2, Info } from 'lucide-react';
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

  // Preview 6 featured products
  const previewProducts = PRODUCTS.slice(0, 6);

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* Hero Section */}
      <section className="relative hero-pattern text-white pt-16 pb-20 md:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs font-semibold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
                <span>{t.home.badge}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight text-white leading-tight">
                {t.home.heroHeading}
              </h1>

              <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                {t.home.heroSubtitle}
              </p>

              {/* Call to Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href={`tel:${siteConfig.phone.raw}`}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-center shadow-lg shadow-teal-900/40 transition-all flex items-center justify-center gap-2 text-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>{t.home.primaryCta}</span>
                </a>
                <a
                  href={siteConfig.coordinates.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-center backdrop-blur transition-all flex items-center justify-center gap-2 text-sm"
                >
                  <MapPin className="w-4 h-4 text-teal-300" />
                  <span>{t.home.secondaryCta}</span>
                </a>
              </div>

              {/* Supply Clarification Notice */}
              <div className="pt-4 border-t border-slate-700/60 flex items-start gap-2.5 text-xs text-slate-300">
                <ShieldAlert className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  {t.common.availabilityDisclaimer}
                </p>
              </div>
            </div>

            {/* Right Quick Info Card */}
            <div className="lg:col-span-5">
              <div className="bg-navy-800/90 border border-slate-700 p-6 sm:p-8 rounded-3xl shadow-2xl backdrop-blur-xl space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-700">
                  <div>
                    <h2 className="text-white font-bold text-base">
                      {isNe ? 'सोधपुछ तथा सम्पर्क' : 'Direct Enquiries & Location'}
                    </h2>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {siteConfig.legalName}
                    </p>
                  </div>
                  <span className="px-2.5 py-1 text-[11px] font-semibold rounded-full bg-teal-500/20 text-teal-300">
                    {isNe ? 'सम्पर्क खुला' : 'Ready for Inquiries'}
                  </span>
                </div>

                <div className="space-y-3.5 text-xs">
                  <div className="p-3.5 rounded-xl bg-navy-900/60 border border-slate-700/60 flex items-start gap-3">
                    <Phone className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-400 block">{t.common.phoneLabel}</span>
                      <a href={`tel:${siteConfig.phone.raw}`} className="text-sm font-bold text-white hover:text-teal-300 transition-colors">
                        {siteConfig.phone.display}
                      </a>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-navy-900/60 border border-slate-700/60 flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-400 block">{t.common.addressLabel}</span>
                      <p className="text-sm font-medium text-slate-200">
                        {siteConfig.address.fullAddress[lang]}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 text-center">
                  <Link
                    href={`/${lang}/products`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-300 hover:text-teal-200"
                  >
                    <span>{t.home.viewAllCategories}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Overview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-12 shadow-sm">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200/60">
              {t.nav.about}
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 tracking-tight">
              {t.home.aboutSectionHeading}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {t.home.aboutSectionSnippet}
            </p>
            <div className="pt-2">
              <Link
                href={`/${lang}/about`}
                className="inline-flex items-center gap-2 text-sm font-bold text-teal-700 hover:text-teal-900 underline underline-offset-4"
              >
                <span>{t.home.readMoreAbout}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Business Disclaimers Callout */}
          <div className="mt-8 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-start gap-3">
            <Info className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              {t.common.notHospitalNotice}
            </p>
          </div>
        </div>
      </section>

      {/* Proposed Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200/60">
            {t.common.proposedCategoryNote}
          </span>
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 tracking-tight">
            {t.home.categoriesHeading}
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            {t.home.categoriesSubtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={`/${lang}/products?category=${cat.id}`}
              className="group bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-teal-400 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center group-hover:bg-teal-700 group-hover:text-white transition-colors">
                  <Package className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-base text-slate-900 group-hover:text-teal-700 transition-colors">
                  {cat.name[lang]}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {cat.shortDescription[lang]}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-teal-700">
                <span>{isNe ? 'सोधपुछ गर्नुहोस्' : 'View Products'}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Catalogue Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200/60">
              {isNe ? 'सामग्री क्याटलग' : 'Equipment Catalogue'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 tracking-tight mt-2">
              {isNe ? 'प्रमुख सामग्रीहरूको सोधपुछ' : 'Featured Equipment Enquiries'}
            </h2>
          </div>
          <Link
            href={`/${lang}/products`}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-navy-900 hover:bg-teal-800 text-white text-xs font-bold transition-colors"
          >
            <span>{t.home.viewAllCategories}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {previewProducts.map((product) => (
            <ProductCard key={product.id} product={product} locale={lang} />
          ))}
        </div>
      </section>

      {/* Location & Map Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200/60">
            {t.common.locationLabel}
          </span>
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 tracking-tight">
            {t.home.locationHeading}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            {t.home.locationSubtitle}
          </p>
        </div>

        <GoogleMapEmbed locale={lang} />
      </section>
    </div>
  );
}
