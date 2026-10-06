import React from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight, ShieldAlert, CheckCircle2, FlaskConical } from 'lucide-react';
import { BRANDS, BrandItem } from '@/data/brands';
import { Locale, translations } from '@/lib/translations';

interface BrandsSectionProps {
  locale: Locale;
  showAllLink?: boolean;
}

export const BrandsSection: React.FC<BrandsSectionProps> = ({ locale, showAllLink = true }) => {
  const isNe = locale === 'ne';
  const t = translations[locale];

  return (
    <section className="py-8 sm:py-12 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F0FDF4] text-[#15803D] text-xs font-bold uppercase tracking-wider border border-[#DCFCE7]">
            <Sparkles className="w-3.5 h-3.5 text-[#15803D]" />
            <span>{isNe ? 'उपलब्ध ब्रान्डहरू' : 'Brands We Carry'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#17251C] tracking-tight">
            {t.brands.sectionHeading}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {t.brands.sectionSubtitle}
          </p>
        </div>

        {showAllLink && (
          <Link
            href={`/${locale}/products?category=laboratory`}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#15803D] hover:text-[#166534] min-h-[44px]"
          >
            <span>{isNe ? 'प्रयोगशाला क्याटलग हेर्नुहोस्' : 'View Lab Catalogue'}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        )}
      </div>

      {/* Brand Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {BRANDS.map((brand: BrandItem) => {
          const brandLabel = isNe ? brand.label.ne : brand.label.en;
          const brandDesc = isNe ? brand.shortDescription.ne : brand.shortDescription.en;
          const productTypes = isNe ? brand.productTypes.ne : brand.productTypes.en;

          return (
            <div
              key={brand.id}
              className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs hover:shadow-md hover:border-green-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Brand Title & Badge */}
                <div className="flex items-center justify-between gap-3 pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-2xl bg-[#F0FDF4] border border-[#DCFCE7] flex items-center justify-center shrink-0">
                      <FlaskConical className="w-5 h-5 text-[#15803D]" />
                    </div>
                    <div>
                      <h3 className="font-heading font-extrabold text-lg text-[#17251C]">
                        {brand.name}
                      </h3>
                      <span className="text-[11px] font-semibold text-slate-500">
                        {brandLabel}
                      </span>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#F0FDF4] text-[#15803D] border border-[#DCFCE7] text-[10px] font-bold tracking-wider uppercase">
                    {t.brands.verifiedBrandNote}
                  </span>
                </div>

                {/* Brand Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {brandDesc}
                </p>

                {/* Product Types Checklist */}
                <div className="space-y-2 pt-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                    {isNe ? 'उपलब्ध सोधपुछ श्रेणीहरू:' : 'Enquiry Product Types:'}
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {productTypes.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#15803D] shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Catalogue Link */}
              <div className="pt-5 mt-4 border-t border-slate-100">
                <Link
                  href={`/${locale}/products?search=${encodeURIComponent(brand.name)}`}
                  className="w-full min-h-[44px] py-2 px-3 rounded-xl bg-[#F0FDF4] hover:bg-[#DCFCE7] text-[#15803D] border border-[#DCFCE7] font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>{isNe ? 'सम्बन्धित सामग्रीहरू हेर्नुहोस्' : 'View Matching Items'}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#15803D]" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Non-Dealership Disclaimer Banner */}
      <div className="p-4 rounded-2xl bg-[#F0FDF4] border border-[#DCFCE7] text-xs sm:text-sm text-slate-700 flex items-start gap-3">
        <ShieldAlert className="w-4 h-4 text-[#15803D] shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          {t.brands.disclaimer}
        </p>
      </div>
    </section>
  );
};
