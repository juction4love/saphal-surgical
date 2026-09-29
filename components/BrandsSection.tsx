import React from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight, ShieldAlert, CheckCircle2, FlaskConical } from 'lucide-react';
import { BRANDS, BrandItem } from '@/data/brands';
import { Locale, translations } from '@/lib/translations';
import { getWhatsAppUrl, siteConfig } from '@/config/site';
import { WhatsAppIcon } from '@/components/Icons';

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
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-bold uppercase tracking-wider border border-teal-200">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>{isNe ? 'उपलब्ध ब्रान्डहरू' : 'Brands We Carry'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 tracking-tight">
            {t.brands.sectionHeading}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {t.brands.sectionSubtitle}
          </p>
        </div>

        {showAllLink && (
          <Link
            href={`/${locale}/products?category=laboratory`}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-teal-700 hover:text-teal-900 min-h-[44px]"
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
          
          const brandWhatsAppUrl = getWhatsAppUrl(
            isNe
              ? `नमस्ते सफल सर्जिकल हाउस, म "${brand.name}" ब्रान्डका प्रयोगशाला रिअजेन्ट/सामग्रीहरूको उपलब्धता र मूल्य सोधपुछ गर्न चाहन्छु।`
              : `Hello Saphal Surgical House, I would like to inquire about availability and pricing for "${brand.name}" brand laboratory reagents/products.`
          );

          return (
            <div
              key={brand.id}
              className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Brand Title & Badge */}
                <div className="flex items-center justify-between gap-3 pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-2xl bg-teal-50 border border-teal-200 flex items-center justify-center shrink-0">
                      <FlaskConical className="w-5 h-5 text-teal-700" />
                    </div>
                    <div>
                      <h3 className="font-heading font-extrabold text-lg text-slate-900">
                        {brand.name}
                      </h3>
                      <span className="text-[11px] font-semibold text-slate-500">
                        {brandLabel}
                      </span>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-[10px] font-bold tracking-wider uppercase">
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
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-5 mt-4 border-t border-slate-100 space-y-2">
                {brandWhatsAppUrl && (
                  <a
                    href={brandWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full min-h-[44px] py-2.5 px-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-xs"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5" />
                    <span>{isNe ? `${brand.name} सोधपुछ (WhatsApp)` : `Inquire for ${brand.name}`}</span>
                  </a>
                )}
                <Link
                  href={`/${locale}/products?search=${encodeURIComponent(brand.name)}`}
                  className="w-full min-h-[40px] py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>{isNe ? 'सम्बन्धित सामग्रीहरू हेर्नुहोस्' : 'View Matching Items'}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Non-Dealership Disclaimer Banner */}
      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 text-xs sm:text-sm text-slate-600 flex items-start gap-3">
        <ShieldAlert className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          {t.brands.disclaimer}
        </p>
      </div>
    </section>
  );
};
