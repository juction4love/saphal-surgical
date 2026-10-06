import React from 'react';
import { notFound } from 'next/navigation';
import { Locale } from '@/lib/translations';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocalBusinessSchema } from '@/components/LocalBusinessSchema';
import '../globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
export { metadata, viewport } from '@/lib/site-metadata';

export function generateStaticParams() {
  return [{ lang: 'ne' }, { lang: 'en' }];
}

interface LangLayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: string }> | { lang: string };
}

export default async function LangLayout({ children, params }: LangLayoutProps) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang as Locale;

  if (lang !== 'ne' && lang !== 'en') {
    notFound();
  }

  return (
    <html lang={lang} className="scroll-smooth">
      <body className="bg-white text-[#17251C] antialiased flex flex-col min-h-screen">
      <LocalBusinessSchema lang={lang} />
      <Header locale={lang} />
      <main lang={lang} className="flex-1">{children}</main>
      <Footer locale={lang} />
      <SpeedInsights />
      </body>
    </html>
  );
}
