import React from 'react';
import type { Metadata } from 'next';
import { AlertCircle, Phone } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { translations, Locale } from '@/lib/translations';
import { PRODUCTS } from '@/data/products';
import { CatalogueBrowser } from '@/components/CatalogueBrowser';

interface PageProps {
  params: Promise<{ lang: string }> | { lang: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const lang = (resolvedParams.lang === 'en' ? 'en' : 'ne') as Locale;
  const t = translations[lang];

  return {
    title: t.meta.productsTitle,
    description: t.meta.productsDesc,
    alternates: {
      canonical: `${siteConfig.baseUrl}/${lang}/products`,
      languages: {
        ne: `${siteConfig.baseUrl}/ne/products`,
        en: `${siteConfig.baseUrl}/en/products`,
        'x-default': `${siteConfig.baseUrl}/ne/products`,
      },
    },
  };
}

export default async function ProductsPage({ params }: PageProps) {
  const resolvedParams = await params;
  const lang = (resolvedParams.lang === 'en' ? 'en' : 'ne') as Locale;
  const t = translations[lang];

  return (
    <div className="py-8 sm:py-16 space-y-8 sm:space-y-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-safe bg-white">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-[#15803D] bg-[#F0FDF4] px-3.5 py-1 rounded-full border border-[#DCFCE7]">
          {t.nav.products}
        </span>
        <h1 className="text-2xl sm:text-4xl font-heading font-extrabold text-[#17251C] tracking-tight leading-tight">
          {t.products.pageHeading}
        </h1>
        <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
          {t.products.pageSubtitle}
        </p>
      </div>

      {/* Mandatory Availability Disclaimer Banner */}
      <div className="bg-[#F0FDF4] border border-[#DCFCE7] rounded-2xl p-4 sm:p-6 text-xs sm:text-sm text-[#17251C] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-2xs">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-[#15803D] shrink-0 mt-0.5" />
          <p className="leading-relaxed text-[#475569]">
            {t.products.disclaimerBanner}
          </p>
        </div>
        <a
          href={`tel:${siteConfig.phone.raw}`}
          className="whitespace-nowrap px-4 py-2.5 rounded-xl bg-[#15803D] hover:bg-[#166534] text-white font-bold text-xs flex items-center gap-1.5 transition-colors shadow-2xs shrink-0"
        >
          <Phone className="w-3.5 h-3.5 text-white" />
          <span>{t.common.inquireByPhone}</span>
        </a>
      </div>

      {/* Interactive Catalogue Browser */}
      <CatalogueBrowser
        products={PRODUCTS}
        locale={lang}
      />
    </div>
  );
}

