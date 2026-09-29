import React from 'react';
import type { Metadata } from 'next';
import { Phone, MapPin, Navigation, Clock, ShieldAlert } from 'lucide-react';
import { FacebookIcon } from '@/components/Icons';
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

  return (
    <div className="py-12 sm:py-16 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200/60">
          {t.nav.contact}
        </span>
        <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
          {t.contact.pageHeading}
        </h1>
        <p className="text-sm sm:text-base text-slate-600">
          {t.contact.pageSubtitle}
        </p>
      </div>

      {/* Contact Cards Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Telephone Card */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
              <Phone className="w-6 h-6" />
            </div>
            <h2 className="font-heading font-bold text-lg text-slate-900">
              {t.contact.phoneCardTitle}
            </h2>
            <p className="text-xs text-slate-500 leading-relaxed">
              {t.contact.phoneCardDesc}
            </p>
          </div>
          <div className="pt-2">
            <a
              href={`tel:${siteConfig.phone.raw}`}
              className="w-full py-3 px-4 rounded-xl bg-navy-900 hover:bg-teal-800 text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4 text-teal-300" />
              <span>{siteConfig.phone.display}</span>
            </a>
          </div>
        </div>

        {/* Physical Address Card */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
              <MapPin className="w-6 h-6" />
            </div>
            <h2 className="font-heading font-bold text-lg text-slate-900">
              {t.contact.addressCardTitle}
            </h2>
            <p className="text-xs text-slate-700 font-medium leading-relaxed">
              {siteConfig.address.fullAddress[lang]}
            </p>
          </div>
          <div className="pt-2">
            <a
              href={siteConfig.coordinates.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-teal-50 hover:bg-teal-100 text-teal-800 border border-teal-200 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
            >
              <Navigation className="w-4 h-4 text-teal-700" />
              <span>{t.common.getDirections}</span>
            </a>
          </div>
        </div>

        {/* Facebook Page Card */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-4 sm:col-span-2 lg:col-span-1">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
              <FacebookIcon className="w-6 h-6" />
            </div>
            <h2 className="font-heading font-bold text-lg text-slate-900">
              {t.contact.facebookCardTitle}
            </h2>
            <p className="text-xs text-slate-500 leading-relaxed">
              {t.contact.facebookCardDesc}
            </p>
          </div>
          <div className="pt-2">
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-sm"
            >
              <FacebookIcon className="w-4 h-4 text-blue-400" />
              <span>{t.common.followFacebook}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Direct Notice Box */}
      <div className="bg-slate-100/90 border border-slate-200 rounded-2xl p-6 text-xs text-slate-700 space-y-2">
        <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
          <ShieldAlert className="w-4 h-4 text-teal-700" />
          <span>{isNe ? 'सोधपुछको आधिकारिक माध्यम' : 'Official Channel for Enquiries'}</span>
        </div>
        <p className="leading-relaxed">
          {t.contact.directEnquiryNotice}
        </p>
      </div>

      {/* Embedded Google Map */}
      <section className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-xl font-heading font-bold text-slate-900">
            {t.contact.mapSectionTitle}
          </h2>
          <p className="text-xs text-slate-500">
            {t.contact.mapSectionDesc}
          </p>
        </div>
        <GoogleMapEmbed locale={lang} />
      </section>
    </div>
  );
}
