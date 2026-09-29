import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { BrandSymbol } from '@/components/BrandSymbol';

export function NotFoundContent() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 py-14 text-center sm:px-6 sm:py-20">
      <BrandSymbol size={56} className="h-14 w-14" />
      <p className="mt-5 text-xs font-bold uppercase tracking-wide text-[#166534]">404</p>
      <h1 className="mt-2 font-heading text-2xl font-bold leading-tight text-[#17251C] sm:text-3xl">
        <span lang="en">Page not found</span>
        <span aria-hidden="true"> / </span>
        <span lang="ne">पृष्ठ फेला परेन</span>
      </h1>
      <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#475569] sm:text-base">
        The address may be outdated. Try the catalogue or return to the home page.
      </p>
      <p lang="ne" className="mt-1 max-w-xl text-sm leading-relaxed text-[#475569] sm:text-base">
        यो ठेगाना उपलब्ध छैन। क्याटलग हेर्नुहोस् वा गृहपृष्ठमा फर्कनुहोस्।
      </p>
      <div className="mt-6 grid w-full max-w-xl grid-cols-1 gap-2 sm:grid-cols-2">
        <Link href="/en/products" className="min-h-[48px] rounded-xl bg-[#15803D] px-5 py-3 text-sm font-bold text-white inline-flex items-center justify-center gap-2 hover:bg-[#166534] focus-visible:ring-2 focus-visible:ring-[#15803D] focus-visible:ring-offset-2">
          Browse Catalogue
          <ArrowRight className="h-4 w-4" />
        </Link>
        <Link href="/ne/products" lang="ne" className="min-h-[48px] rounded-xl border border-[#CFE3D3] bg-white px-5 py-3 text-sm font-bold text-[#166534] inline-flex items-center justify-center gap-2 hover:bg-[#F0FDF4] focus-visible:ring-2 focus-visible:ring-[#15803D]">
          क्याटलग हेर्नुहोस्
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="mt-3 flex flex-wrap justify-center gap-2">
        <Link href="/en" className="min-h-[44px] px-3 text-sm font-semibold text-[#166534] inline-flex items-center hover:text-[#15803D]">English Home</Link>
        <Link href="/ne" lang="ne" className="min-h-[44px] px-3 text-sm font-semibold text-[#166534] inline-flex items-center hover:text-[#15803D]">नेपाली गृहपृष्ठ</Link>
      </div>
    </section>
  );
}