import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  BookOpen,
  Clock,
  ArrowLeft,
  Phone,
  CheckCircle2,
  AlertTriangle,
  Send,
  HelpCircle,
} from 'lucide-react';
import { WhatsAppIcon } from '@/components/Icons';
import { siteConfig, getArticleWhatsAppUrl } from '@/config/site';
import { translations, Locale } from '@/lib/translations';
import { ARTICLES, ArticleItem } from '@/data/articles';

interface PageProps {
  params: Promise<{ lang: string; slug: string }> | { lang: string; slug: string };
}

export function generateStaticParams() {
  const params: Array<{ lang: string; slug: string }> = [];
  for (const lang of ['ne', 'en']) {
    for (const article of ARTICLES) {
      params.push({
        lang,
        slug: article.slug,
      });
    }
  }
  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const lang = (resolvedParams.lang === 'en' ? 'en' : 'ne') as Locale;
  const article = ARTICLES.find((a) => a.slug === resolvedParams.slug);

  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  const isNe = lang === 'ne';
  const title = `${isNe ? article.title.ne : article.title.en} | ${siteConfig.legalName}`;
  const description = isNe ? article.summary.ne : article.summary.en;

  return {
    title,
    description,
    alternates: {
      canonical: `${siteConfig.baseUrl}/${lang}/articles/${article.slug}`,
      languages: {
        ne: `${siteConfig.baseUrl}/ne/articles/${article.slug}`,
        en: `${siteConfig.baseUrl}/en/articles/${article.slug}`,
        'x-default': `${siteConfig.baseUrl}/ne/articles/${article.slug}`,
      },
    },
  };
}

export default async function ArticleDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const lang = (resolvedParams.lang === 'en' ? 'en' : 'ne') as Locale;
  const article = ARTICLES.find((a) => a.slug === resolvedParams.slug);

  if (!article) {
    notFound();
  }

  const t = translations[lang];
  const isNe = lang === 'ne';

  const title = isNe ? article.title.ne : article.title.en;
  const subtitle = isNe ? article.subtitle.ne : article.subtitle.en;
  const intro = isNe ? article.intro.ne : article.intro.en;
  const readTime = isNe ? article.readTime.ne : article.readTime.en;
  const checklistTitle = isNe ? article.checklistTitle.ne : article.checklistTitle.en;
  const checklist = isNe ? article.checklist.ne : article.checklist.en;
  const disclaimer = isNe ? article.disclaimer.ne : article.disclaimer.en;
  const enquiryPrompt = isNe ? article.enquiryPrompt.ne : article.enquiryPrompt.en;

  const whatsAppUrl = getArticleWhatsAppUrl(title, article.slug, lang);

  return (
    <div className="py-8 sm:py-14 space-y-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-safe">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center flex-wrap gap-2 text-xs sm:text-sm text-slate-500" aria-label="Breadcrumb">
        <Link href={`/${lang}`} className="hover:text-teal-700 min-h-[36px] flex items-center">
          {t.nav.home}
        </Link>
        <span aria-hidden="true">/</span>
        <Link href={`/${lang}/articles`} className="hover:text-teal-700 min-h-[36px] flex items-center">
          {t.nav.articles}
        </Link>
        <span aria-hidden="true">/</span>
        <span className="text-slate-900 font-bold truncate max-w-[260px] sm:max-w-none" aria-current="page">
          {title}
        </span>
      </nav>

      {/* Article Header */}
      <header className="space-y-4">
        <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-500 flex-wrap">
          <span className="inline-flex items-center gap-1.5 bg-teal-50 text-teal-800 font-bold px-3 py-1 rounded-full border border-teal-200">
            <BookOpen className="w-3.5 h-3.5" />
            {isNe ? 'स्वास्थ्य सामग्री खरिद गाइड' : 'Procurement Guide'}
          </span>
          <span className="inline-flex items-center gap-1 text-slate-500">
            <Clock className="w-3.5 h-3.5" />
            {readTime}
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
          {title}
        </h1>

        <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
          {subtitle}
        </p>
      </header>

      {/* Prominent Intro Callout */}
      <div className="p-6 sm:p-7 rounded-3xl bg-teal-50/80 border border-teal-200/80 text-teal-950 space-y-2.5">
        <h2 className="font-heading font-bold text-sm uppercase tracking-wider text-teal-900">
          {isNe ? 'विषय प्रवेश तथा पृष्ठभूमि' : 'Context & Introduction'}
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-slate-800">
          {intro}
        </p>
      </div>

      {/* Structured Practical Sections */}
      <div className="space-y-8 sm:space-y-10 pt-2">
        {article.sections.map((section, idx) => {
          const sectionHeading = isNe ? section.heading.ne : section.heading.en;
          const paragraphs = isNe ? section.content.ne : section.content.en;

          return (
            <section key={idx} className="space-y-3 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-xs">
              <h2 className="text-lg sm:text-2xl font-heading font-bold text-slate-900 leading-snug">
                {sectionHeading}
              </h2>
              <div className="space-y-3 text-sm sm:text-base text-slate-700 leading-relaxed">
                {paragraphs.map((para, pIdx) => (
                  <p key={pIdx}>{para}</p>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* Actionable Purchasing Checklist Box */}
      <section className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 space-y-5 shadow-m3-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-teal-500/20 text-teal-300 flex items-center justify-center">
            <CheckCircle2 className="w-6 h-6 text-teal-400" />
          </div>
          <div>
            <h2 className="font-heading font-bold text-lg sm:text-xl text-white">
              {checklistTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              {isNe ? 'खरिद प्रक्रिया अगाडि बढाउँदा यी बुँदाहरू यकिन गर्नुहोस्:' : 'Verify these points before placing procurement orders:'}
            </p>
          </div>
        </div>

        <ul className="space-y-3 pt-2 text-xs sm:text-sm text-slate-200">
          {checklist.map((item, cIdx) => (
            <li key={cIdx} className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-teal-700 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                {cIdx + 1}
              </span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Disclaimer Notice Box */}
      <div className="p-4 sm:p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 text-xs sm:text-sm flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          {disclaimer}
        </p>
      </div>

      {/* Requirement List Enquiry Action Card */}
      <section className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-teal-900 to-navy-900 text-white space-y-5 shadow-m3-4">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-300 bg-teal-800/40 px-3 py-1 rounded-full border border-teal-500/30">
            {t.articles.enquiryCardTitle}
          </span>
          <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-white">
            {isNe ? 'आफ्नो आवश्यकता अनुसारको सामग्री सूची पठाउनुहोस्' : 'Send Your Requirement List to Saphal Surgical'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
            {enquiryPrompt}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          {whatsAppUrl && (
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-h-[48px] py-3 px-5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-heading font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-xs"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>{t.articles.whatsappEnquiry}</span>
            </a>
          )}

          <a
            href={`tel:${siteConfig.phone.raw}`}
            className="flex-1 min-h-[48px] py-3 px-5 rounded-2xl bg-navy-950 hover:bg-navy-800 text-white font-heading font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 border border-slate-700 transition-all"
            aria-label={`Call ${siteConfig.phone.display}`}
          >
            <Phone className="w-4 h-4 text-teal-300" />
            <span>{t.articles.phoneEnquiry}: {siteConfig.phone.display}</span>
          </a>
        </div>
      </section>

      {/* Back to Articles Link */}
      <div className="pt-2">
        <Link
          href={`/${lang}/articles`}
          className="min-h-[44px] inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-700 hover:text-teal-700"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t.articles.backToArticles}</span>
        </Link>
      </div>
    </div>
  );
}
