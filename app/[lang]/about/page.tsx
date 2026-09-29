import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MapPin, Building2, ShieldAlert, ArrowRight, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { translations, Locale } from '@/lib/translations';
import { GoogleMapEmbed } from '@/components/GoogleMapEmbed';

interface PageProps {
  params: Promise<{ lang: string }> | { lang: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const lang = (resolvedParams.lang === 'en' ? 'en' : 'ne') as Locale;
  const t = translations[lang];

  return {
    title: t.meta.aboutTitle,
    description: t.meta.aboutDesc,
    alternates: {
      canonical: `${siteConfig.baseUrl}/${lang}/about`,
      languages: {
        ne: `${siteConfig.baseUrl}/ne/about`,
        en: `${siteConfig.baseUrl}/en/about`,
        'x-default': `${siteConfig.baseUrl}/ne/about`,
      },
    },
  };
}

export default async function AboutPage({ params }: PageProps) {
  const resolvedParams = await params;
  const lang = (resolvedParams.lang === 'en' ? 'en' : 'ne') as Locale;
  const t = translations[lang];
  const isNe = lang === 'ne';

  return (
    <div className="py-8 sm:py-16 space-y-10 sm:space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-safe">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-3.5 py-1 rounded-full border border-teal-200">
          {t.nav.about}
        </span>
        <h1 className="text-2xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
          {t.about.pageHeading}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          {t.about.pageSubtitle}
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Business Facts */}
        <div className="lg:col-span-8 space-y-6 sm:space-y-8">
          {/* Introduction Card */}
          <div className="bg-white p-5 sm:p-8 rounded-3xl border border-slate-200/90 shadow-xs space-y-3.5">
            <h2 className="text-lg sm:text-xl font-heading font-bold text-slate-900 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-teal-700 shrink-0" />
              <span>{t.about.introTitle}</span>
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              {t.about.introP1}
            </p>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              {t.about.introP2}
            </p>
          </div>

          {/* Scope of Supply */}
          <div className="bg-white p-5 sm:p-8 rounded-3xl border border-slate-200/90 shadow-xs space-y-3.5">
            <h2 className="text-lg sm:text-xl font-heading font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-teal-700 shrink-0" />
              <span>{t.about.roleTitle}</span>
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              {t.about.roleP1}
            </p>
          </div>

          {/* Location & Accessibility */}
          <div className="bg-white p-5 sm:p-8 rounded-3xl border border-slate-200/90 shadow-xs space-y-3.5">
            <h2 className="text-lg sm:text-xl font-heading font-bold text-slate-900 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-teal-700 shrink-0" />
              <span>{t.about.locationTitle}</span>
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              {t.about.locationP1}
            </p>
          </div>

          {/* Regulatory Clarification */}
          <div className="bg-amber-50 border border-amber-200 p-5 sm:p-6 rounded-3xl space-y-2">
            <div className="flex items-center gap-2 text-amber-900 font-bold text-sm sm:text-base">
              <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0" />
              <span>{t.about.clarificationTitle}</span>
            </div>
            <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
              {t.about.clarificationP1}
            </p>
          </div>
        </div>

        {/* Right Column: Contact & Quick Links */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-navy-900 text-white p-5 sm:p-8 rounded-3xl shadow-xl space-y-5">
            <h3 className="font-heading font-bold text-lg text-white">
              {isNe ? 'सोधपुछ तथा सम्पर्क' : 'Direct Inquiries'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {t.common.phoneNote}
            </p>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-3.5 bg-navy-800 rounded-2xl">
                <span className="text-slate-400 text-xs block">{t.common.phoneLabel}</span>
                <a
                  href={`tel:${siteConfig.phone.raw}`}
                  className="text-base sm:text-lg font-bold text-teal-300 hover:text-white transition-colors block mt-1"
                >
                  {siteConfig.phone.display}
                </a>
              </div>

              <div className="p-3.5 bg-navy-800 rounded-2xl">
                <span className="text-slate-400 text-xs block">{t.common.addressLabel}</span>
                <p className="text-slate-200 font-medium mt-1 leading-relaxed">
                  {siteConfig.address.fullAddress[lang]}
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href={`/${lang}/products`}
                className="w-full min-h-[48px] py-3 px-4 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors shadow-xs"
              >
                <span>{t.common.viewCatalog}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <section className="pt-4">
        <GoogleMapEmbed locale={lang} />
      </section>
    </div>
  );
}
