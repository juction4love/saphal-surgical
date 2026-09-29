import React from 'react';
import { notFound } from 'next/navigation';
import { Locale } from '@/lib/translations';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StickyContactBar } from '@/components/StickyContactBar';
import { LocalBusinessSchema } from '@/components/LocalBusinessSchema';

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
    <>
      <LocalBusinessSchema lang={lang} />
      <Header locale={lang} />
      <main className="flex-1 pb-20 md:pb-0">{children}</main>
      <Footer locale={lang} />
      <StickyContactBar locale={lang} />
    </>
  );
}
