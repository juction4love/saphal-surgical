import React from 'react';
import type { Metadata } from 'next';
import { Phone, MapPin, Navigation, ShieldAlert } from 'lucide-react';
import { FacebookIcon, WhatsAppIcon } from '@/components/Icons';
import { siteConfig, getGeneralWhatsAppUrl } from '@/config/site';
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
    title: t.meta.contactTitle,
    description: t.meta.contactDesc,
    alternates: {
      canonical: `${siteConfig.baseUrl}/${lang}/contact`,
      languages: {
        ne: `${siteConfig.baseUrl}/ne/contact`,
        en: `${siteConfig.baseUrl}/en/contact`,
        'x-default': `${siteConfig.baseUrl}/ne/contact`,
      },
    },
  };
}

export default async function ContactPage({ params }: PageProps) {
  const resolvedParams = await params;
  const lang = (resolvedParams.lang === 'en' ? 'en' : 'ne') as Locale;
  const t = translations[lang];
  const isNe = lang === 'ne';
  const generalWhatsAppUrl = getGeneralWhatsAppUrl(lang);

  return (
    <div className="py-8 sm:py-16 space-y-10 sm:space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-safe bg-white">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#15803D] bg-[#F0FDF4] px-3.5 py-1 rounded-full border border-[#DCFCE7]">
          {t.nav.contact}
        </span>
        <h1 className="text-2xl sm:text-4xl font-heading font-extrabold text-[#17251C] tracking-tight leading-tight">
          {t.contact.pageHeading}
        </h1>
        <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
          {t.contact.pageSubtitle}
        </p>
      </div>

      {/* Contact Cards Grid (2x2 on desktop) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {/* Telephone Card */}
        <div className="bg-white p-5 sm:p-7 rounded-3xl border border-slate-200 shadow-2xs flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#F0FDF4] border border-[#DCFCE7] text-[#15803D] flex items-center justify-center">
              <Phone className="w-6 h-6" />
            </div>
            <h2 className="font-heading font-bold text-lg text-[#17251C]">
              {t.contact.phoneCardTitle}
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              {t.contact.phoneCardDesc}
            </p>
          </div>
          <div className="pt-2">
            <a
              href={`tel:${siteConfig.phone.raw}`}
              className="w-full min-h-[48px] py-3 px-4 rounded-xl bg-[#15803D] hover:bg-[#166534] text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors shadow-2xs"
              aria-label={`Call ${siteConfig.phone.display}`}
            >
              <Phone className="w-4 h-4 text-white" />
              <span>{siteConfig.phone.display}</span>
            </a>
          </div>
        </div>

        {/* Confirmed WhatsApp Card */}
        <div className="bg-white p-5 sm:p-7 rounded-3xl border border-slate-200 shadow-2xs flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#F0FDF4] border border-[#DCFCE7] text-[#15803D] flex items-center justify-center">
              <WhatsAppIcon className="w-6 h-6" />
            </div>
            <h2 className="font-heading font-bold text-lg text-[#17251C]">
              {isNe ? 'ह्वाट्सएप सोधपुछ' : 'WhatsApp Enquiry'}
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              {isNe ? 'च्याट मार्फत तुरुन्त सामग्रीको जानकारी तथा दररेट बुझ्नुहोस्।' : 'Direct chat for instant product specs, availability & pricing.'}
            </p>
          </div>
          <div className="pt-2">
            {generalWhatsAppUrl && (
              <a
                href={generalWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-[48px] py-3 px-4 rounded-xl bg-[#15803D] hover:bg-[#166534] text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors shadow-2xs"
                aria-label={`WhatsApp ${siteConfig.whatsapp.display}`}
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>{siteConfig.whatsapp.display}</span>
              </a>
            )}
          </div>
        </div>

        {/* Physical Address Card */}
        <div className="bg-white p-5 sm:p-7 rounded-3xl border border-slate-200 shadow-2xs flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#F0FDF4] border border-[#DCFCE7] text-[#15803D] flex items-center justify-center">
              <MapPin className="w-6 h-6" />
            </div>
            <h2 className="font-heading font-bold text-lg text-[#17251C]">
              {t.contact.addressCardTitle}
            </h2>
            <p className="text-xs sm:text-sm text-[#17251C] font-medium leading-relaxed">
              {siteConfig.address.fullAddress[lang]}
            </p>
          </div>
          <div className="pt-2">
            <a
              href={siteConfig.coordinates.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[48px] py-3 px-4 rounded-xl bg-[#F0FDF4] hover:bg-[#DCFCE7] text-[#15803D] border border-[#DCFCE7] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors"
            >
              <Navigation className="w-4 h-4 text-[#15803D]" />
              <span>{t.common.getDirections}</span>
            </a>
          </div>
        </div>

        {/* Facebook Page Card */}
        <div className="bg-white p-5 sm:p-7 rounded-3xl border border-slate-200 shadow-2xs flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#F0FDF4] border border-[#DCFCE7] text-[#15803D] flex items-center justify-center">
              <FacebookIcon className="w-6 h-6" />
            </div>
            <h2 className="font-heading font-bold text-lg text-[#17251C]">
              {t.contact.facebookCardTitle}
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              {t.contact.facebookCardDesc}
            </p>
          </div>
          <div className="pt-2">
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[48px] py-3 px-4 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-[#17251C] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors"
            >
              <FacebookIcon className="w-4 h-4 text-[#1877F2]" />
              <span>{t.common.followFacebook}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Direct Notice Box */}
      <div className="bg-[#F0FDF4] border border-[#DCFCE7] rounded-3xl p-5 sm:p-6 text-xs sm:text-sm text-[#17251C] space-y-2">
        <div className="flex items-center gap-2 font-bold text-[#17251C] text-sm sm:text-base">
          <ShieldAlert className="w-4 h-4 text-[#15803D] shrink-0" />
          <span>{isNe ? 'सोधपुछको आधिकारिक माध्यम' : 'Official Channel for Enquiries'}</span>
        </div>
        <p className="leading-relaxed text-[#475569]">
          {t.contact.directEnquiryNotice}
        </p>
      </div>

      {/* Embedded Google Map */}
      <section className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-xl sm:text-2xl font-heading font-bold text-[#17251C]">
            {t.contact.mapSectionTitle}
          </h2>
          <p className="text-xs sm:text-sm text-[#475569]">
            {t.contact.mapSectionDesc}
          </p>
        </div>
        <GoogleMapEmbed locale={lang} />
      </section>
    </div>
  );
}

