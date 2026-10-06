import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Activity, ArrowRight, BookOpen, Building2, Clock, FlaskConical, Info, Layers, Package, Phone, Scissors, ShieldAlert, Sparkles } from 'lucide-react';
import { BrandSymbol } from '@/components/BrandSymbol';
import { ChairmanHero } from '@/components/ChairmanPresentation';
import { siteConfig } from '@/config/site';
import { translations, Locale } from '@/lib/translations';
import { PRODUCTS } from '@/data/products';
import { ARTICLES } from '@/data/articles';
import { ProductCard } from '@/components/ProductCard';
import { BrandsSection } from '@/components/BrandsSection';
import { GoogleMapEmbed } from '@/components/GoogleMapEmbed';

const quickCategories = [
  { id: 'surgical-instruments', label: { en: 'Surgical', ne: 'सर्जिकल' }, Icon: Scissors },
  { id: 'hospital-furniture', label: { en: 'Hospital', ne: 'अस्पताल' }, Icon: Building2 },
  { id: 'ot-supplies', label: { en: 'Operating theatre', ne: 'ओटी' }, Icon: Layers },
  { id: 'laboratory', label: { en: 'Laboratory', ne: 'प्रयोगशाला' }, Icon: FlaskConical },
  { id: 'consumables-ppe', label: { en: 'Consumables', ne: 'उपभोग्य सामग्री' }, Icon: Package },
  { id: 'ent', label: { en: 'ENT', ne: 'ईएनटी' }, Icon: Activity },
  { id: 'cleaning-hygiene', label: { en: 'Cleaning', ne: 'सरसफाइ' }, Icon: Sparkles },
];

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
    <div className="space-y-10 sm:space-y-14 pb-safe bg-white">
      <ChairmanHero locale={lang} />

      {/* Fast paths into real catalogue categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-5 sm:mb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wide text-[#15803D]">
              {isNe ? 'सामग्री खोज्नुहोस्' : 'Find supplies'}
            </span>
            <h2 className="mt-1 font-heading font-bold text-xl sm:text-2xl text-[#17251C]">
              {t.home.categoriesHeading}
            </h2>
          </div>
          <Link href={`/${lang}/products`} className="min-h-[44px] inline-flex items-center gap-1.5 text-sm font-bold text-[#15803D] hover:text-[#166534]">
            <span>{t.home.viewAllCategories}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 sm:gap-3">
          {quickCategories.map(({ id, label, Icon }) => (
            <Link
              key={id}
              href={id === 'ent' ? `/${lang}/products?search=ear%20speculum` : `/${lang}/products?category=${id}`}
              className="group min-h-[104px] rounded-xl border border-[#E3EDE5] bg-white p-3 sm:p-4 flex flex-col justify-center gap-2 transition-colors hover:border-[#86C995] hover:bg-[#F8FCF8] focus-visible:ring-2 focus-visible:ring-[#15803D] focus-visible:ring-offset-2"
            >
              <div className="w-9 h-9 rounded-lg bg-[#F0FDF4] text-[#15803D] flex items-center justify-center group-hover:bg-[#DCFCE7] transition-colors">
                <Icon className="w-[18px] h-[18px]" />
              </div>
              <span className="font-heading font-bold text-xs sm:text-sm leading-snug text-[#17251C] group-hover:text-[#15803D]">
                {label[lang]}
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-[#E3EDE5] bg-[#F8FCF8] px-4 py-3 text-xs sm:text-sm text-[#475569]">
          <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-[#15803D]" />
          <p className="leading-relaxed">{t.prominentIntro}</p>
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
              priority={false}
            />
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 rounded-2xl border border-[#D8EBDD] bg-[#F0FDF4] p-5 sm:p-7 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wide text-[#166534]">
              {isNe ? 'सिधा सोधपुछ' : 'Direct enquiry'}
            </span>
            <h2 className="font-heading font-bold text-xl sm:text-2xl leading-tight text-[#17251C]">
              {isNe ? 'उपलब्धता र मूल्य सोध्नुहोस्' : 'Request availability and price'}
            </h2>
            <p className="text-sm leading-relaxed text-[#475569]">
              {isNe
                ? 'मौज्दात, ब्रान्ड र दररेट फोनमार्फत पुष्टि गर्नुहोस्।'
                : 'Confirm current availability, brands, and pricing by phone.'}
            </p>
          </div>
          <div className="flex flex-col xs:flex-row gap-2.5">
            <a
              href={`tel:${siteConfig.phone.primary.raw}`}
              className="min-h-[48px] px-5 py-3 rounded-xl bg-white hover:bg-[#F8FCF8] text-[#166534] border border-[#CFE3D3] font-bold text-sm inline-flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-[#15803D] focus-visible:ring-offset-2"
            >
              <Phone className="w-4 h-4" />
              <span>{isNe ? siteConfig.phone.primary.displayNe : siteConfig.phone.primary.display}</span>
            </a>
          </div>
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
                    className="min-h-[44px] inline-flex items-center gap-1 hover:text-[#166534]"
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
