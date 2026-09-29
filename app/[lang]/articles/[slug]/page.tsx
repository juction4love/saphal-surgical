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
    <div className="py-8 sm:py-14 space-y-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-safe bg-white">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center flex-wrap gap-2 text-xs sm:text-sm text-[#475569]" aria-label="Breadcrumb">
        <Link href={`/${lang}`} className="hover:text-[#15803D] min-h-[44px] flex items-center">
          {t.nav.home}
        </Link>
        <span aria-hidden="true">/</span>
        <Link href={`/${lang}/articles`} className="hover:text-[#15803D] min-h-[44px] flex items-center">
          {t.nav.articles}
        </Link>
        <span aria-hidden="true">/</span>
        <span className="text-[#17251C] font-bold truncate max-w-[260px] sm:max-w-none" aria-current="page">
          {title}
        </span>
      </nav>

      {/* Article Header */}
      <header className="space-y-4">
        <div className="flex items-center gap-3 text-xs sm:text-sm text-[#475569] flex-wrap">
          <span className="inline-flex items-center gap-1.5 bg-[#F0FDF4] text-[#15803D] font-bold px-3 py-1 rounded-full border border-[#DCFCE7]">
            <BookOpen className="w-3.5 h-3.5" />
            {isNe ? 'स्वास्थ्य सामग्री खरिद गाइड' : 'Procurement Guide'}
          </span>
          <span className="inline-flex items-center gap-1 text-[#475569]">
            <Clock className="w-3.5 h-3.5" />
            {readTime}
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-heading font-extrabold text-[#17251C] tracking-tight leading-tight">
          {title}
        </h1>

        <p className="text-base sm:text-lg text-[#475569] font-medium leading-relaxed">
          {subtitle}
        </p>
      </header>

      {/* Prominent Intro Callout */}
      <div className="p-6 sm:p-7 rounded-3xl bg-[#F0FDF4] border border-[#DCFCE7] text-[#17251C] space-y-2.5">
        <h2 className="font-heading font-bold text-sm uppercase tracking-wider text-[#15803D]">
          {isNe ? 'विषय प्रवेश तथा पृष्ठभूमि' : 'Context & Introduction'}
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-[#17251C]">
          {intro}
        </p>
      </div>

      {/* Structured Practical Sections */}
      <div className="space-y-8 sm:space-y-10 pt-2">
        {article.sections.map((section, idx) => {
          const sectionHeading = isNe ? section.heading.ne : section.heading.en;
          const paragraphs = isNe ? section.content.ne : section.content.en;

          return (
            <section key={idx} className="space-y-3 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs">
              <h2 className="text-lg sm:text-2xl font-heading font-bold text-[#17251C] leading-snug">
                {sectionHeading}
              </h2>
              <div className="space-y-3 text-sm sm:text-base text-[#475569] leading-relaxed">
                {paragraphs.map((para, pIdx) => (
                  <p key={pIdx}>{para}</p>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* Actionable Purchasing Checklist Box */}
      <section className="bg-white border border-[#DCFCE7] text-[#17251C] rounded-3xl p-6 sm:p-8 space-y-5 shadow-xs">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-[#F0FDF4] border border-[#DCFCE7] text-[#15803D] flex items-center justify-center">
            <CheckCircle2 className="w-6 h-6 text-[#15803D]" />
          </div>
          <div>
            <h2 className="font-heading font-bold text-lg sm:text-xl text-[#17251C]">
              {checklistTitle}
            </h2>
            <p className="text-xs sm:text-sm text-[#475569]">
              {isNe ? 'खरिद प्रक्रिया अगाडि बढाउँदा यी बुँदाहरू यकिन गर्नुहोस्:' : 'Verify these points before placing procurement orders:'}
            </p>
          </div>
        </div>

        <ul className="space-y-3 pt-2 text-xs sm:text-sm text-[#17251C]">
          {checklist.map((item, cIdx) => (
            <li key={cIdx} className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-[#15803D] text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                {cIdx + 1}
              </span>
              <span className="leading-relaxed text-[#475569]">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Disclaimer Notice Box */}
      <div className="p-4 sm:p-5 rounded-2xl bg-[#F0FDF4] border border-[#DCFCE7] text-[#17251C] text-xs sm:text-sm flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-[#15803D] shrink-0 mt-0.5" />
        <p className="leading-relaxed text-[#475569]">
          {disclaimer}
        </p>
      </div>

      {/* Requirement List Enquiry Action Card */}
      <section className="p-6 sm:p-8 rounded-3xl bg-[#F0FDF4] border border-[#DCFCE7] text-[#17251C] space-y-5 shadow-xs">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#15803D] bg-white px-3 py-1 rounded-full border border-[#DCFCE7]">
            {t.articles.enquiryCardTitle}
          </span>
          <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-[#17251C]">
            {isNe ? 'आफ्नो आवश्यकता अनुसारको सामग्री सूची पठाउनुहोस्' : 'Send Your Requirement List to Saphal Surgical'}
          </h2>
          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
            {enquiryPrompt}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          {whatsAppUrl && (
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-h-[48px] py-3 px-5 rounded-2xl bg-[#15803D] hover:bg-[#166534] text-white font-heading font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-2xs"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>{t.articles.whatsappEnquiry}</span>
            </a>
          )}

          <a
            href={`tel:${siteConfig.phone.raw}`}
            className="flex-1 min-h-[48px] py-3 px-5 rounded-2xl bg-white hover:bg-slate-50 text-[#17251C] font-heading font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 border border-[#DCFCE7] transition-all"
            aria-label={`Call ${siteConfig.phone.display}`}
          >
            <Phone className="w-4 h-4 text-[#15803D]" />
            <span>{t.articles.phoneEnquiry}: {isNe ? siteConfig.phone.displayNe : siteConfig.phone.display}</span>
          </a>
        </div>
      </section>

      {/* Back to Articles Link */}
      <div className="pt-2">
        <Link
          href={`/${lang}/articles`}
          className="min-h-[44px] inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#475569] hover:text-[#15803D]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t.articles.backToArticles}</span>
        </Link>
      </div>
    </div>
  );
}
