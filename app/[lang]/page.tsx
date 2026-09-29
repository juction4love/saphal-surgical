import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MapPin, ArrowRight, ShieldAlert, Package, Info, BookOpen, Clock, Layers } from 'lucide-react';
import { WhatsAppIcon } from '@/components/Icons';
import { siteConfig, getGeneralWhatsAppUrl } from '@/config/site';
import { translations, Locale } from '@/lib/translations';
import { CATEGORIES } from '@/data/categories';
import { PRODUCTS } from '@/data/products';
import { ARTICLES } from '@/data/articles';
import { ProductCard } from '@/components/ProductCard';
import { BrandsSection } from '@/components/BrandsSection';
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
  const whatsAppUrl = getGeneralWhatsAppUrl(lang);

  // Preview up to 8 featured products for 4-column balanced desktop grid
  const previewProducts = PRODUCTS.slice(0, 8);

  return (
    <div className="space-y-12 sm:space-y-16 pb-safe bg-white">
      {/* Hero Section */}
      <section className="relative hero-clean-bg border-b border-[#DCFCE7] pt-8 pb-12 md:py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#DCFCE7] text-[#15803D] text-xs sm:text-sm font-semibold tracking-wide shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#15803D] animate-pulse"></span>
                <span>{t.home.badge}</span>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight text-[#17251C] leading-tight">
                {t.home.heroHeading}
              </h1>

              <p className="text-[#475569] text-sm sm:text-base lg:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                {t.home.heroSubtitle}
              </p>

              {/* Clear Hero Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5 pt-2">
                <Link
                  href={`/${lang}/products`}
                  className="min-h-[48px] px-6 py-3.5 rounded-xl bg-[#15803D] hover:bg-[#166534] text-white font-heading font-bold text-center shadow-xs transition-all flex items-center justify-center gap-2 text-sm sm:text-base focus-visible:ring-2 focus-visible:ring-[#15803D]"
                >
                  <Package className="w-4 h-4" />
                  <span>{isNe ? 'सामग्री क्याटलग हेर्नुहोस्' : 'Browse Products'}</span>
                </Link>

                {whatsAppUrl && (
                  <a
                    href={whatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[48px] px-6 py-3.5 rounded-xl bg-[#F0FDF4] hover:bg-[#DCFCE7] text-[#15803D] border border-[#DCFCE7] font-heading font-bold text-center transition-all flex items-center justify-center gap-2 text-sm sm:text-base focus-visible:ring-2 focus-visible:ring-[#15803D]"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-[#15803D]" />
                    <span>{t.home.secondaryCta}</span>
                  </a>
                )}

                <a
                  href={`tel:${siteConfig.phone.raw}`}
                  className="min-h-[48px] px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-[#17251C] border border-slate-200 font-heading font-semibold text-center transition-all flex items-center justify-center gap-2 text-sm sm:text-base focus-visible:ring-2 focus-visible:ring-[#15803D]"
                >
                  <Phone className="w-4 h-4 text-[#15803D]" />
                  <span>{siteConfig.phone.display}</span>
                </a>
              </div>

              {/* Supply Clarification Notice */}
              <div className="pt-3 border-t border-[#DCFCE7] flex items-start gap-2.5 text-xs text-[#475569] text-left">
                <ShieldAlert className="w-4 h-4 text-[#15803D] shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  {t.common.availabilityDisclaimer}
                </p>
              </div>
            </div>

            {/* Right Quick Info Card */}
            <div className="lg:col-span-5">
              <div className="bg-white border border-[#DCFCE7] p-5 sm:p-7 rounded-3xl shadow-sm space-y-4">
                <div className="flex items-center justify-between pb-3.5 border-b border-[#DCFCE7]">
                  <div>
                    <h2 className="text-[#17251C] font-bold text-base">
                      {isNe ? 'सोधपुछ तथा सम्पर्क' : 'Direct Enquiries & Location'}
                    </h2>
                    <p className="text-xs text-[#475569] mt-0.5">
                      {siteConfig.legalName}
                    </p>
                  </div>
                  <span className="px-2.5 py-1 text-[11px] font-semibold rounded-full bg-[#F0FDF4] text-[#15803D] border border-[#DCFCE7]">
                    {isNe ? 'सम्पर्क खुला' : 'Inquiries Welcome'}
                  </span>
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="p-3.5 rounded-xl bg-[#F0FDF4] border border-[#DCFCE7] flex items-start gap-3">
                    <Phone className="w-4 h-4 text-[#15803D] shrink-0 mt-1" />
                    <div>
                      <span className="text-[#475569] text-xs block">{t.common.phoneLabel}</span>
                      <a
                        href={`tel:${siteConfig.phone.raw}`}
                        className="text-sm sm:text-base font-bold text-[#17251C] hover:text-[#15803D] transition-colors block mt-0.5"
                      >
                        {siteConfig.phone.display}
                      </a>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#F0FDF4] border border-[#DCFCE7] flex items-start gap-3">
                    <WhatsAppIcon className="w-4 h-4 text-[#15803D] shrink-0 mt-1" />
                    <div>
                      <span className="text-[#475569] text-xs block">WhatsApp</span>
                      {whatsAppUrl ? (
                        <a
                          href={whatsAppUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm sm:text-base font-bold text-[#15803D] hover:underline transition-colors block mt-0.5"
                        >
                          {siteConfig.whatsapp.display}
                        </a>
                      ) : (
                        <span className="text-sm font-bold text-[#17251C] block mt-0.5">
                          {siteConfig.whatsapp.display}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#F0FDF4] border border-[#DCFCE7] flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#15803D] shrink-0 mt-1" />
                    <div>
                      <span className="text-[#475569] text-xs block">{t.common.addressLabel}</span>
                      <p className="text-xs sm:text-sm font-medium text-[#17251C] mt-0.5 leading-relaxed">
                        {siteConfig.address.fullAddress[lang]}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-1 text-center">
                  <Link
                    href={`/${lang}/products`}
                    className="min-h-[44px] inline-flex items-center justify-center gap-1.5 text-xs sm:text-sm font-bold text-[#15803D] hover:text-[#166534]"
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

      {/* Prominent Introduction Panel & Category Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F0FDF4] text-[#17251C] rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#DCFCE7] shadow-xs">
          <div className="space-y-4 max-w-5xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-[#15803D] border border-[#DCFCE7]">
              <Package className="w-3.5 h-3.5 text-[#15803D]" />
              {isNe ? 'आधिकारिक आपूर्ति दायरा तथा सोधपुछ' : 'Scope of Supply & Procurement'}
            </span>
            <p className="text-sm sm:text-base lg:text-lg font-normal text-[#17251C] leading-relaxed">
              {t.prominentIntro}
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              {whatsAppUrl && (
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] px-5 py-2.5 rounded-xl bg-[#15803D] hover:bg-[#166534] text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 transition-all shadow-xs"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>{t.common.sendRequirementList}</span>
                </a>
              )}
              <a
                href={`tel:${siteConfig.phone.raw}`}
                className="min-h-[44px] px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 border border-[#DCFCE7] text-[#17251C] font-bold text-xs sm:text-sm inline-flex items-center gap-2 transition-all"
              >
                <Phone className="w-4 h-4 text-[#15803D]" />
                <span>{siteConfig.phone.display}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid (Expanded 10 domains) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#15803D] bg-[#F0FDF4] px-3 py-1 rounded-full border border-[#DCFCE7]">
            {t.common.proposedCategoryNote}
          </span>
          <h2 className="text-xl sm:text-3xl font-heading font-extrabold text-[#17251C] tracking-tight leading-tight">
            {t.home.categoriesHeading}
          </h2>
          <p className="text-[#475569] text-xs sm:text-sm leading-relaxed">
            {t.home.categoriesSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={`/${lang}/products?category=${cat.id}`}
              className="group bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-2xs hover:shadow-md hover:border-green-300 transition-all flex flex-col justify-between"
            >
              <div className="space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-[#F0FDF4] text-[#15803D] border border-[#DCFCE7] flex items-center justify-center group-hover:bg-[#15803D] group-hover:text-white transition-colors">
                  <Package className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-sm sm:text-base text-[#17251C] group-hover:text-[#15803D] transition-colors">
                  {cat.name[lang]}
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed line-clamp-2">
                  {cat.shortDescription[lang]}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm font-semibold text-[#15803D]">
                <span>{isNe ? 'सामग्री हेर्नुहोस्' : 'View Supplies'}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brands We Carry Section (Coral, Tulip, Erba) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BrandsSection locale={lang} />
      </div>

      {/* Featured Catalogue Preview Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#15803D] bg-[#F0FDF4] px-3 py-1 rounded-full border border-[#DCFCE7]">
              {isNe ? 'सामग्री क्याटलग' : 'Equipment Catalogue'}
            </span>
            <h2 className="text-xl sm:text-3xl font-heading font-extrabold text-[#17251C] tracking-tight mt-2 leading-tight">
              {isNe ? 'प्रमुख सामग्रीहरूको सोधपुछ' : 'Featured Equipment Enquiries'}
            </h2>
          </div>
          <Link
            href={`/${lang}/products`}
            className="min-h-[44px] inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#15803D] hover:bg-[#166534] text-white text-xs sm:text-sm font-bold transition-colors shadow-2xs"
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

      {/* Featured Articles Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#15803D] bg-[#F0FDF4] px-3 py-1 rounded-full border border-[#DCFCE7]">
              {t.nav.articles}
            </span>
            <h2 className="text-xl sm:text-3xl font-heading font-extrabold text-[#17251C] tracking-tight mt-2 leading-tight">
              {t.home.articlesHeading}
            </h2>
            <p className="text-[#475569] text-xs sm:text-sm mt-1">
              {t.home.articlesSubtitle}
            </p>
          </div>
          <Link
            href={`/${lang}/articles`}
            className="min-h-[44px] inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#F0FDF4] hover:bg-[#DCFCE7] text-[#15803D] border border-[#DCFCE7] text-xs sm:text-sm font-bold transition-colors"
          >
            <span>{t.home.viewAllArticles}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ARTICLES.map((article) => {
            const title = isNe ? article.title.ne : article.title.en;
            const subtitle = isNe ? article.subtitle.ne : article.subtitle.en;
            const readTime = isNe ? article.readTime.ne : article.readTime.en;

            return (
              <article
                key={article.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs hover:shadow-md hover:border-green-300 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#475569]">
                    <span className="inline-flex items-center gap-1 bg-[#F0FDF4] text-[#15803D] border border-[#DCFCE7] font-bold px-2.5 py-1 rounded-md">
                      <BookOpen className="w-3 h-3" />
                      {isNe ? 'मार्गदर्शन' : 'Guide'}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[#475569]">
                      <Clock className="w-3 h-3" />
                      {readTime}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-base sm:text-lg text-[#17251C] group-hover:text-[#15803D] transition-colors leading-snug">
                    <Link href={`/${lang}/articles/${article.slug}`}>
                      {title}
                    </Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed line-clamp-3">
                    {subtitle}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#15803D]">
                  <Link
                    href={`/${lang}/articles/${article.slug}`}
                    className="min-h-[40px] inline-flex items-center gap-1 hover:text-[#166534]"
                  >
                    <span>{t.articles.readArticle}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* About Overview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#DCFCE7] p-6 sm:p-10 lg:p-12 shadow-2xs space-y-6">
          <div className="max-w-3xl space-y-3.5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#15803D] bg-[#F0FDF4] px-3 py-1 rounded-full border border-[#DCFCE7]">
              {t.nav.about}
            </span>
            <h2 className="text-xl sm:text-3xl font-heading font-extrabold text-[#17251C] tracking-tight leading-tight">
              {t.home.aboutSectionHeading}
            </h2>
            <p className="text-[#475569] text-sm sm:text-base leading-relaxed">
              {t.home.aboutSectionSnippet}
            </p>
            <div className="pt-2">
              <Link
                href={`/${lang}/about`}
                className="min-h-[44px] inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#15803D] hover:text-[#166534] underline underline-offset-4"
              >
                <span>{t.home.readMoreAbout}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Business Disclaimers Callout */}
          <div className="p-4 rounded-2xl bg-[#F0FDF4] border border-[#DCFCE7] text-xs sm:text-sm text-[#17251C] flex items-start gap-3">
            <Info className="w-5 h-5 text-[#15803D] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              {t.common.notHospitalNotice}
            </p>
          </div>
        </div>
      </section>

      {/* Location & Map Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#15803D] bg-[#F0FDF4] px-3 py-1 rounded-full border border-[#DCFCE7]">
            {t.common.locationLabel}
          </span>
          <h2 className="text-xl sm:text-3xl font-heading font-extrabold text-[#17251C] tracking-tight leading-tight">
            {t.home.locationHeading}
          </h2>
          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
            {t.home.locationSubtitle}
          </p>
        </div>

        <GoogleMapEmbed locale={lang} />
      </section>
    </div>
  );
}


