import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, Clock, ArrowRight, ShieldAlert } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { translations, Locale } from '@/lib/translations';
import { ARTICLES } from '@/data/articles';

interface PageProps {
  params: Promise<{ lang: string }> | { lang: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const lang = (resolvedParams.lang === 'en' ? 'en' : 'ne') as Locale;
  const t = translations[lang];

  return {
    title: t.meta.articlesTitle,
    description: t.meta.articlesDesc,
    alternates: {
      canonical: `${siteConfig.baseUrl}/${lang}/articles`,
      languages: {
        ne: `${siteConfig.baseUrl}/ne/articles`,
        en: `${siteConfig.baseUrl}/en/articles`,
        'x-default': `${siteConfig.baseUrl}/ne/articles`,
      },
    },
  };
}

export default async function ArticlesIndexPage({ params }: PageProps) {
  const resolvedParams = await params;
  const lang = (resolvedParams.lang === 'en' ? 'en' : 'ne') as Locale;
  const t = translations[lang];
  const isNe = lang === 'ne';

  return (
    <div className="py-8 sm:py-16 space-y-10 sm:space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-safe bg-white">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#15803D] bg-[#F0FDF4] px-3.5 py-1 rounded-full border border-[#DCFCE7]">
          {t.nav.articles}
        </span>
        <h1 className="text-2xl sm:text-4xl font-heading font-extrabold text-[#17251C] tracking-tight leading-tight">
          {t.articles.pageHeading}
        </h1>
        <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
          {t.articles.pageSubtitle}
        </p>
      </div>

      {/* Prominent Introduction Banner */}
      <div className="bg-[#F0FDF4] text-[#17251C] rounded-3xl p-6 sm:p-8 shadow-2xs border border-[#DCFCE7]">
        <div className="max-w-4xl space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-semibold bg-white text-[#15803D] border border-[#DCFCE7]">
            {isNe ? 'आधिकारिक आपूर्ति सूचना' : 'Official Supply Notice'}
          </span>
          <p className="text-sm sm:text-base text-[#17251C] leading-relaxed">
            {t.prominentIntro}
          </p>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {ARTICLES.map((article) => {
          const title = isNe ? article.title.ne : article.title.en;
          const subtitle = isNe ? article.subtitle.ne : article.subtitle.en;
          const summary = isNe ? article.summary.ne : article.summary.en;
          const readTime = isNe ? article.readTime.ne : article.readTime.en;

          return (
            <article
              key={article.id}
              className="bg-white rounded-3xl border border-slate-200 shadow-2xs hover:shadow-md hover:border-green-300 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              <div className="p-6 sm:p-7 space-y-4">
                <div className="flex items-center justify-between gap-2 text-xs text-[#475569]">
                  <span className="inline-flex items-center gap-1.5 bg-[#F0FDF4] text-[#15803D] font-semibold px-2.5 py-1 rounded-lg border border-[#DCFCE7]">
                    <BookOpen className="w-3.5 h-3.5" />
                    {isNe ? 'मार्गदर्शन' : 'Procurement Guide'}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[#475569]">
                    <Clock className="w-3.5 h-3.5" />
                    {readTime}
                  </span>
                </div>

                <h2 className="font-heading font-bold text-lg sm:text-xl text-[#17251C] group-hover:text-[#15803D] transition-colors leading-snug">
                  <Link href={`/${lang}/articles/${article.slug}`}>
                    {title}
                  </Link>
                </h2>

                <p className="text-xs sm:text-sm text-[#475569] font-medium leading-relaxed">
                  {subtitle}
                </p>

                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed line-clamp-3">
                  {summary}
                </p>
              </div>

              <div className="p-6 sm:p-7 pt-0 border-t border-slate-100 mt-2">
                <div className="pt-4 flex items-center justify-between gap-4">
                  <Link
                    href={`/${lang}/articles/${article.slug}`}
                    className="min-h-[44px] w-full py-2.5 px-4 rounded-xl bg-[#15803D] hover:bg-[#166534] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors shadow-2xs"
                    aria-label={`${t.articles.readArticle}: ${title}`}
                  >
                    <span>{t.articles.readArticle}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Institutional Notice Box */}
      <div className="bg-[#F0FDF4] border border-[#DCFCE7] rounded-3xl p-5 sm:p-6 text-xs sm:text-sm text-[#17251C] space-y-2">
        <div className="flex items-center gap-2 font-bold text-[#17251C] text-sm sm:text-base">
          <ShieldAlert className="w-4 h-4 text-[#15803D] shrink-0" />
          <span>{isNe ? 'सामग्री खरिद तथा परामर्श सूचना' : 'Procurement & Enquiry Notice'}</span>
        </div>
        <p className="leading-relaxed text-[#475569]">
          {isNe
            ? 'यी लेखहरू स्वास्थ्य संस्थाहरूलाई खरिद योजना र गुणस्तर मूल्यांकनमा सहजीकरण गर्न तयार पारिएका हुन्। वास्तविक मौज्दात, उपलब्ध ब्रान्ड, प्याकिङ र दररेटका लागि सफल सर्जिकल हाउसको आधिकारिक फोन ०५६-५९६०६० वा ०५६-५९६१२० वा WhatsApp +९७७ ९८५५०५५०६० मा सिधै सम्पर्क गर्नुहोस्।'
            : 'These guides are prepared to support healthcare facilities in procurement planning and requirement verification. For live stock, specific brands, packaging units, and quotations, contact Saphal Surgical House directly via landlines 056-596060 / 056-596120 or WhatsApp +977 9855055060.'}
        </p>
      </div>
    </div>
  );
}
