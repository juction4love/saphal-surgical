import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, MapPin, ShieldAlert, ArrowRight, CheckCircle2, Package } from 'lucide-react';
import { WhatsAppIcon } from '@/components/Icons';
import { siteConfig, getGeneralWhatsAppUrl } from '@/config/site';
import { translations, Locale } from '@/lib/translations';
import { GoogleMapEmbed } from '@/components/GoogleMapEmbed';
import { BrandsSection } from '@/components/BrandsSection';
import { BrandSymbol } from '@/components/BrandSymbol';
import { ChairmanGallery, ChairmanProfile } from '@/components/ChairmanPresentation';

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
  const whatsAppUrl = getGeneralWhatsAppUrl(lang);

  return (
    <div className="py-8 sm:py-16 space-y-10 sm:space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-safe bg-white">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#15803D] bg-[#F0FDF4] px-3.5 py-1 rounded-full border border-[#DCFCE7]">
          {t.nav.about}
        </span>
        <h1 className="text-2xl sm:text-4xl font-heading font-extrabold text-[#17251C] tracking-tight leading-tight">
          {t.about.pageHeading}
        </h1>
        <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
          {t.about.pageSubtitle}
        </p>
      </div>

      {/* Prominent Introduction Banner */}
      <div className="bg-[#F0FDF4] text-[#17251C] rounded-3xl p-6 sm:p-8 shadow-2xs border border-[#DCFCE7]">
        <div className="max-w-4xl space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white text-[#15803D] border border-[#DCFCE7]">
            <Package className="w-3.5 h-3.5 text-[#15803D]" />
            {isNe ? 'आधिकारिक आपूर्ति सूचना' : 'Official Supply Scope'}
          </span>
          <p className="text-sm sm:text-base lg:text-lg font-normal text-[#17251C] leading-relaxed">
            {t.prominentIntro}
          </p>
        </div>
      </div>

      <ChairmanProfile locale={lang} />
      <ChairmanGallery locale={lang} />

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Business Facts */}
        <div className="lg:col-span-8 space-y-6 sm:space-y-8">
          {/* Introduction Card */}
          <div className="bg-white p-5 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-3.5">
            <h2 className="text-lg sm:text-xl font-heading font-bold text-[#17251C] flex items-center gap-2">
              <BrandSymbol size={40} className="w-10 h-10 shrink-0" />
              <span>{t.about.introTitle}</span>
            </h2>
            <p className="text-[#475569] text-sm sm:text-base leading-relaxed">
              {t.about.introP1}
            </p>
            <p className="text-[#475569] text-sm sm:text-base leading-relaxed">
              {t.about.introP2}
            </p>
          </div>

          {/* Scope of Supply */}
          <div className="bg-white p-5 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-3.5">
            <h2 className="text-lg sm:text-xl font-heading font-bold text-[#17251C] flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#15803D] shrink-0" />
              <span>{t.about.roleTitle}</span>
            </h2>
            <p className="text-[#475569] text-sm sm:text-base leading-relaxed">
              {t.about.roleP1}
            </p>
          </div>

          {/* Location & Accessibility */}
          <div className="bg-white p-5 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-3.5">
            <h2 className="text-lg sm:text-xl font-heading font-bold text-[#17251C] flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#15803D] shrink-0" />
              <span>{t.about.locationTitle}</span>
            </h2>
            <p className="text-[#475569] text-sm sm:text-base leading-relaxed">
              {t.about.locationP1}
            </p>
          </div>

          {/* Regulatory Clarification */}
          <div className="bg-[#F0FDF4] border border-[#DCFCE7] p-5 sm:p-6 rounded-3xl space-y-2">
            <div className="flex items-center gap-2 text-[#17251C] font-bold text-sm sm:text-base">
              <ShieldAlert className="w-5 h-5 text-[#15803D] shrink-0" />
              <span>{t.about.clarificationTitle}</span>
            </div>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              {t.about.clarificationP1}
            </p>
          </div>
        </div>

        {/* Right Column: Contact & Quick Links */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white border border-[#DCFCE7] text-[#17251C] p-5 sm:p-8 rounded-3xl shadow-xs space-y-5">
            <h3 className="font-heading font-bold text-lg text-[#17251C]">
              {isNe ? 'सोधपुछ तथा सम्पर्क' : 'Direct Inquiries'}
            </h3>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              {t.common.phoneNote}
            </p>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-3.5 bg-[#F0FDF4] border border-[#DCFCE7] rounded-2xl">
                <span className="text-[#475569] text-xs block">{t.common.phoneLabel}</span>
                <div className="flex flex-wrap items-center gap-2 mt-1">
                  <a
                    href={`tel:${siteConfig.phone.primary.raw}`}
                    className="text-base font-bold text-[#15803D] hover:underline transition-colors"
                  >
                    {isNe ? siteConfig.phone.primary.displayNe : siteConfig.phone.primary.display}
                  </a>
                  <span className="text-slate-400">/</span>
                  <a
                    href={`tel:${siteConfig.phone.secondary.raw}`}
                    className="text-base font-bold text-[#15803D] hover:underline transition-colors"
                  >
                    {isNe ? siteConfig.phone.secondary.displayNe : siteConfig.phone.secondary.display}
                  </a>
                </div>
              </div>

              {whatsAppUrl && (
                <div className="p-3.5 bg-[#F0FDF4] border border-[#DCFCE7] rounded-2xl">
                  <span className="text-[#475569] text-xs block">WhatsApp</span>
                  <a
                    href={whatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base sm:text-lg font-bold text-[#15803D] hover:underline transition-colors block mt-1"
                  >
                    {siteConfig.whatsapp.display}
                  </a>
                </div>
              )}

              <div className="p-3.5 bg-[#F0FDF4] border border-[#DCFCE7] rounded-2xl">
                <span className="text-[#475569] text-xs block">{t.common.addressLabel}</span>
                <p className="text-[#17251C] font-medium mt-1 leading-relaxed">
                  {siteConfig.address.fullAddress[lang]}
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-2.5">
              {whatsAppUrl && (
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full min-h-[48px] py-3 px-4 rounded-xl bg-[#15803D] hover:bg-[#166534] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors shadow-2xs"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>{t.common.inquireByWhatsApp}</span>
                </a>
              )}

              <Link
                href={`/${lang}/products`}
                className="w-full min-h-[48px] py-3 px-4 rounded-xl bg-[#F0FDF4] hover:bg-[#DCFCE7] border border-[#DCFCE7] text-[#15803D] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors"
              >
                <span>{t.common.viewCatalog}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Brands Section */}
      <BrandsSection locale={lang} />

      {/* Map Section */}
      <section className="pt-4">
        <GoogleMapEmbed locale={lang} />
      </section>
    </div>
  );
}

