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
    <div className="py-8 sm:py-16 space-y-10 sm:space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-safe">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-3.5 py-1 rounded-full border border-teal-200">
          {t.nav.contact}
        </span>
        <h1 className="text-2xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
          {t.contact.pageHeading}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          {t.contact.pageSubtitle}
        </p>
      </div>

      {/* Contact Cards Grid (2x2 on desktop) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {/* Telephone Card */}
        <div className="bg-white p-5 sm:p-7 rounded-3xl border border-slate-200/90 shadow-xs flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center">
              <Phone className="w-6 h-6" />
            </div>
            <h2 className="font-heading font-bold text-lg text-slate-900">
              {t.contact.phoneCardTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              {t.contact.phoneCardDesc}
            </p>
          </div>
          <div className="pt-2">
            <a
              href={`tel:${siteConfig.phone.raw}`}
              className="w-full min-h-[48px] py-3 px-4 rounded-xl bg-navy-900 hover:bg-teal-800 text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors shadow-xs"
              aria-label={`Call ${siteConfig.phone.display}`}
            >
              <Phone className="w-4 h-4 text-teal-300" />
              <span>{siteConfig.phone.display}</span>
            </a>
          </div>
        </div>

        {/* Confirmed WhatsApp Card */}
        <div className="bg-white p-5 sm:p-7 rounded-3xl border border-slate-200/90 shadow-xs flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <WhatsAppIcon className="w-6 h-6" />
            </div>
            <h2 className="font-heading font-bold text-lg text-slate-900">
              {isNe ? 'ह्वाट्सएप सोधपुछ' : 'WhatsApp Enquiry'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              {isNe ? 'च्याट मार्फत तुरुन्त सामग्रीको जानकारी तथा दररेट बुझ्नुहोस्।' : 'Direct chat for instant product specs, availability & pricing.'}
            </p>
          </div>
          <div className="pt-2">
            {generalWhatsAppUrl && (
              <a
                href={generalWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-[48px] py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors shadow-xs"
                aria-label={`WhatsApp ${siteConfig.whatsapp.display}`}
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>{siteConfig.whatsapp.display}</span>
              </a>
            )}
          </div>
        </div>

        {/* Physical Address Card */}
        <div className="bg-white p-5 sm:p-7 rounded-3xl border border-slate-200/90 shadow-xs flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center">
              <MapPin className="w-6 h-6" />
            </div>
            <h2 className="font-heading font-bold text-lg text-slate-900">
              {t.contact.addressCardTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
              {siteConfig.address.fullAddress[lang]}
            </p>
          </div>
          <div className="pt-2">
            <a
              href={siteConfig.coordinates.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[48px] py-3 px-4 rounded-xl bg-teal-50 hover:bg-teal-100 text-teal-900 border border-teal-200 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors"
            >
              <Navigation className="w-4 h-4 text-teal-700" />
              <span>{t.common.getDirections}</span>
            </a>
          </div>
        </div>

        {/* Facebook Page Card */}
        <div className="bg-white p-5 sm:p-7 rounded-3xl border border-slate-200/90 shadow-xs flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center">
              <FacebookIcon className="w-6 h-6" />
            </div>
            <h2 className="font-heading font-bold text-lg text-slate-900">
              {t.contact.facebookCardTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              {t.contact.facebookCardDesc}
            </p>
          </div>
          <div className="pt-2">
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[48px] py-3 px-4 rounded-xl bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors shadow-xs"
            >
              <FacebookIcon className="w-4 h-4 text-blue-400" />
              <span>{t.common.followFacebook}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Direct Notice Box */}
      <div className="bg-slate-100/90 border border-slate-200 rounded-3xl p-5 sm:p-6 text-xs sm:text-sm text-slate-700 space-y-2">
        <div className="flex items-center gap-2 font-bold text-slate-900 text-sm sm:text-base">
          <ShieldAlert className="w-4 h-4 text-teal-700 shrink-0" />
          <span>{isNe ? 'सोधपुछको आधिकारिक माध्यम' : 'Official Channel for Enquiries'}</span>
        </div>
        <p className="leading-relaxed">
          {t.contact.directEnquiryNotice}
        </p>
      </div>

      {/* Embedded Google Map */}
      <section className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-xl sm:text-2xl font-heading font-bold text-slate-900">
            {t.contact.mapSectionTitle}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            {t.contact.mapSectionDesc}
          </p>
        </div>
        <GoogleMapEmbed locale={lang} />
      </section>
    </div>
  );
}
