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
    <footer className="bg-navy-900 text-slate-300 pt-16 pb-12 border-t border-navy-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-navy-800">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-teal-600 flex items-center justify-center text-white">
                <Cross className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="font-heading font-extrabold text-xl text-white tracking-tight">
                {locale === 'ne' ? 'सफल सर्जिकल हाउस' : 'SAPHAL SURGICAL HOUSE'}
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {locale === 'ne'
                ? 'कमल नगर मार्ग, नारायणगढ, चितवनमा अवस्थित शल्यक्रिया औजार, ल्याब उपकरण, मेडिकल कन्ज्युमेबल्स तथा होम-केयर सामग्री आपूर्तिकर्ता।'
                : 'Supplier of surgical instruments, clinical laboratory equipment, medical consumables, and patient home-care supplies located in Narayangarh, Chitwan.'}
            </p>
            <div className="pt-2">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-navy-800 text-teal-300 hover:text-white hover:bg-teal-700 transition-colors text-xs font-semibold"
              >
                <FacebookIcon className="w-4 h-4" />
                <span>{t.common.followFacebook}</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 border-l-2 border-teal-500 pl-2">
              {t.common.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href={`/${locale}`} className="hover:text-teal-300 transition-colors">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/about`} className="hover:text-teal-300 transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/products`} className="hover:text-teal-300 transition-colors">
                  {t.nav.products}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`} className="hover:text-teal-300 transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 border-l-2 border-teal-500 pl-2">
              {t.common.contactInfo}
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>{siteConfig.address.fullAddress[locale]}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={`tel:${siteConfig.phone.raw}`} className="hover:text-teal-300 transition-colors font-medium">
                  {siteConfig.phone.display}
                </a>
              </li>
              <li className="pt-1">
                <a
                  href={siteConfig.coordinates.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-4 text-xs font-semibold inline-flex items-center gap-1"
                >
                  {t.common.getDirections} &rarr;
                </a>
              </li>
            </ul>
          </div>

          {/* Business Clarification */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 border-l-2 border-teal-500 pl-2">
              {t.common.businessNotice}
            </h4>
            <div className="p-3 rounded-lg bg-navy-800 border border-navy-700 text-xs text-slate-300 leading-relaxed space-y-2">
              <div className="flex items-center gap-1.5 text-teal-400 font-semibold text-[11px]">
                <Info className="w-3.5 h-3.5" />
                <span>{locale === 'ne' ? 'सामग्री आपूर्तिकर्ता' : 'Supplies Distributor'}</span>
              </div>
              <p className="text-[11px] text-slate-400">
                {t.common.notHospitalNotice}
              </p>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.legalName} ({siteConfig.domain}). {t.common.allRightsReserved}
          </p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>{siteConfig.address.city[locale]}, {siteConfig.address.district[locale]}</span>
            <span>•</span>
            <a href={`tel:${siteConfig.phone.raw}`} className="hover:text-teal-300">
              {siteConfig.phone.display}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
