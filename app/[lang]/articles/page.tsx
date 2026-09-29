import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, Clock, ArrowRight, CheckCircle2, ShieldAlert } from 'lucide-react';
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
    <div className="py-8 sm:py-16 space-y-10 sm:space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-safe">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-3.5 py-1 rounded-full border border-teal-200">
          {t.nav.articles}
        </span>
        <h1 className="text-2xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
          {t.articles.pageHeading}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          {t.articles.pageSubtitle}
        </p>
      </div>

      {/* Prominent Introduction Banner */}
      <div className="bg-gradient-to-r from-teal-900 via-navy-900 to-navy-800 text-white rounded-3xl p-6 sm:p-8 shadow-m3-2 border border-teal-700/30">
        <div className="max-w-4xl space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-semibold bg-teal-500/20 text-teal-300 border border-teal-400/30">
            {isNe ? 'आधिकारिक आपूर्ति सूचना' : 'Official Supply Notice'}
          </span>
          <p className="text-sm sm:text-base text-slate-100 leading-relaxed">
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
              className="bg-white rounded-3xl border border-slate-200/90 shadow-xs hover:shadow-m3-3 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              <div className="p-6 sm:p-7 space-y-4">
                <div className="flex items-center justify-between gap-2 text-xs text-slate-500">
                  <span className="inline-flex items-center gap-1.5 bg-teal-50 text-teal-800 font-semibold px-2.5 py-1 rounded-lg border border-teal-200/60">
                    <BookOpen className="w-3.5 h-3.5" />
                    {isNe ? 'मार्गदर्शन' : 'Procurement Guide'}
                  </span>
                  <span className="inline-flex items-center gap-1 text-slate-500">
                    <Clock className="w-3.5 h-3.5" />
                    {readTime}
                  </span>
                </div>

                <h2 className="font-heading font-bold text-lg sm:text-xl text-slate-900 group-hover:text-teal-700 transition-colors leading-snug">
                  <Link href={`/${lang}/articles/${article.slug}`}>
                    {title}
                  </Link>
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                  {subtitle}
                </p>

                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed line-clamp-3">
                  {summary}
                </p>
              </div>

              <div className="p-6 sm:p-7 pt-0 border-t border-slate-100 mt-2">
                <div className="pt-4 flex items-center justify-between gap-4">
                  <Link
                    href={`/${lang}/articles/${article.slug}`}
                    className="min-h-[44px] w-full py-2.5 px-4 rounded-xl bg-navy-900 hover:bg-teal-800 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors shadow-xs"
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
      <div className="bg-slate-100/90 border border-slate-200 rounded-3xl p-5 sm:p-6 text-xs sm:text-sm text-slate-700 space-y-2">
        <div className="flex items-center gap-2 font-bold text-slate-900 text-sm sm:text-base">
          <ShieldAlert className="w-4 h-4 text-teal-700 shrink-0" />
          <span>{isNe ? 'सामग्री खरिद तथा परामर्श सूचना' : 'Procurement & Enquiry Notice'}</span>
        </div>
        <p className="leading-relaxed">
          {isNe
            ? 'यी लेखहरू स्वास्थ्य संस्थाहरूलाई खरिद योजना र गुणस्तर मूल्यांकनमा सहजीकरण गर्न तयार पारिएका हुन्। वास्तविक मौज्दात, उपलब्ध ब्रान्ड, प्याकिङ र दररेटका लागि सफल सर्जिकल हाउसको आधिकारिक फोन +९७७ ५६-५७२०६० वा WhatsApp +९७७ ९८५५०५५०६० मा सिधै सम्पर्क गर्नुहोस्।'
            : 'These guides are prepared to support healthcare facilities in procurement planning and requirement verification. For live stock, specific brands, packaging units, and quotations, contact Saphal Surgical House directly via landline +977 56-572060 or WhatsApp +977 9855055060.'}
        </p>
      </div>
    </div>
  );
}
