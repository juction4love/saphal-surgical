import React from 'react';
import type { Metadata } from 'next';
import { Locale, translations } from '@/lib/translations';
import { siteConfig } from '@/config/site';
import { OrderSlip } from '@/components/OrderSlip';

interface PageProps {
  params: Promise<{ lang: string }> | { lang: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang: routeLang } = await params;
  const lang = (routeLang === 'en' ? 'en' : 'ne') as Locale;
  const t = translations[lang];

  return {
    title: lang === 'ne' ? 'अर्डर सूची' : 'Order slip',
    description: t.products.disclaimerBanner,
    alternates: {
      canonical: `${siteConfig.baseUrl}/${lang}/order-slip`,
      languages: {
        ne: `${siteConfig.baseUrl}/ne/order-slip`,
        en: `${siteConfig.baseUrl}/en/order-slip`,
        'x-default': `${siteConfig.baseUrl}/ne/order-slip`,
      },
    },
  };
}

export default async function OrderSlipPage({ params }: PageProps) {
  const { lang: routeLang } = await params;
  const lang = (routeLang === 'en' ? 'en' : 'ne') as Locale;
  return <OrderSlip locale={lang} />;
}
