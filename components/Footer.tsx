import React from 'react';
import Link from 'next/link';
import { Phone, MapPin, Cross, Info } from 'lucide-react';
import { FacebookIcon } from '@/components/Icons';
import { siteConfig } from '@/config/site';
import { translations, Locale } from '@/lib/translations';

interface FooterProps {
  locale: Locale;
}

export const Footer: React.FC<FooterProps> = ({ locale }) => {
  const t = translations[locale];

  return (
    <footer className="bg-[#F0FDF4] text-slate-700 pt-16 pb-12 border-t border-[#DCFCE7] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#DCFCE7]">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#15803D] flex items-center justify-center text-white shadow-xs">
                <Cross className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="font-heading font-extrabold text-xl text-[#17251C] tracking-tight">
                {locale === 'ne' ? 'सफल सर्जिकल हाउस' : 'SAPHAL SURGICAL HOUSE'}
              </span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              {locale === 'ne'
                ? 'कमल नगर मार्ग, नारायणगढ, चितवनमा अवस्थित शल्यक्रिया औजार, ल्याब उपकरण, मेडिकल उपभोग्य सामग्री तथा होम-केयर सामग्री आपूर्तिकर्ता।'
                : 'Supplier of surgical instruments, clinical laboratory equipment, medical consumables, and patient home-care supplies located in Narayangarh, Chitwan.'}
            </p>
            <div className="pt-2">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-[#DCFCE7] text-[#15803D] hover:bg-[#DCFCE7] transition-colors text-xs font-semibold shadow-xs"
              >
                <FacebookIcon className="w-4 h-4 text-blue-600" />
                <span>{t.common.followFacebook}</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#17251C] text-sm font-bold uppercase tracking-wider mb-4 border-l-2 border-[#15803D] pl-2">
              {t.common.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href={`/${locale}`} className="hover:text-[#15803D] transition-colors font-medium">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/about`} className="hover:text-[#15803D] transition-colors font-medium">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/products`} className="hover:text-[#15803D] transition-colors font-medium">
                  {t.nav.products}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/articles`} className="hover:text-[#15803D] transition-colors font-medium">
                  {t.nav.articles}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`} className="hover:text-[#15803D] transition-colors font-medium">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-[#17251C] text-sm font-bold uppercase tracking-wider mb-4 border-l-2 border-[#15803D] pl-2">
              {t.common.contactInfo}
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#15803D] shrink-0 mt-0.5" />
                <span className="font-medium">{siteConfig.address.fullAddress[locale]}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#15803D] shrink-0" />
                <a href={`tel:${siteConfig.phone.raw}`} className="hover:text-[#15803D] transition-colors font-bold text-[#17251C]">
                  {siteConfig.phone.display}
                </a>
              </li>
              <li className="pt-1">
                <a
                  href={siteConfig.coordinates.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#15803D] hover:text-[#166534] underline underline-offset-4 text-xs font-semibold inline-flex items-center gap-1"
                >
                  {t.common.getDirections} &rarr;
                </a>
              </li>
            </ul>
          </div>

          {/* Business Clarification */}
          <div>
            <h4 className="text-[#17251C] text-sm font-bold uppercase tracking-wider mb-4 border-l-2 border-[#15803D] pl-2">
              {t.common.businessNotice}
            </h4>
            <div className="p-3.5 rounded-2xl bg-white border border-[#DCFCE7] text-xs text-slate-700 leading-relaxed space-y-2 shadow-xs">
              <div className="flex items-center gap-1.5 text-[#15803D] font-bold text-[11px]">
                <Info className="w-3.5 h-3.5" />
                <span>{locale === 'ne' ? 'सामग्री आपूर्तिकर्ता' : 'Supplies Distributor'}</span>
              </div>
              <p className="text-[11px] text-slate-600">
                {t.common.notHospitalNotice}
              </p>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.legalName} ({siteConfig.domain}). {t.common.allRightsReserved}
          </p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>{siteConfig.address.city[locale]}, {siteConfig.address.district[locale]}</span>
            <span>•</span>
            <a href={`tel:${siteConfig.phone.raw}`} className="hover:text-[#15803D] font-semibold">
              {siteConfig.phone.display}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
