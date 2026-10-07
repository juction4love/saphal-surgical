import React from 'react';
import Link from 'next/link';

interface FooterProps {
  lang?: 'en' | 'ne';
  locale?: 'en' | 'ne';
}

export function Footer({ lang, locale }: FooterProps) {
  const activeLang = locale || lang || 'ne';
  const isNe = activeLang === 'ne';

  return (
    <footer className="bg-[#F0F5F3] text-md-on-surface border-t border-md-outline-variant/50 pt-16 pb-12 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Column */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <img src="/logo.svg" alt="Saphal Surgical Logo" width={40} height={40} className="rounded-m3-sm" />
              <span className="font-bold text-lg tracking-tight">
                {isNe ? 'सफल सर्जिकल हाउस' : 'SAPHAL SURGICAL'}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-md-on-surface-variant leading-relaxed">
              {isNe 
                ? 'अस्पताल उपकरण, प्रयोगशाला परीक्षण सामग्री, र शल्यक्रिया औजारहरूको भरपर्दो आपूर्तिकर्ता।' 
                : 'Reliable supplier of medical, hospital, OT supplies, and diagnostic reagents in Chitwan.'}
            </p>
            <div className="pt-2">
              <a 
                href="https://wa.me/9779855055060" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-m3-full bg-white border border-md-outline-variant/80 text-xs font-semibold text-md-primary hover:bg-md-primary hover:text-white transition-all shadow-sm"
              >
                <span className="material-symbols-outlined text-sm">chat</span>
                <span>WhatsApp Enquiry</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-md-primary">
              {isNe ? 'द्रुत लिङ्कहरू' : 'Navigation'}
            </h4>
            <ul className="space-y-2 text-sm text-md-on-surface-variant">
              <li><Link href={`/${lang}`} className="hover:text-md-primary transition-colors">{isNe ? 'गृहपृष्ठ' : 'Home'}</Link></li>
              <li><Link href={`/${lang}/about`} className="hover:text-md-primary transition-colors">{isNe ? 'हाम्रोबारे' : 'About Us'}</Link></li>
              <li><Link href={`/${lang}/products`} className="hover:text-md-primary transition-colors">{isNe ? 'सामग्री सूची' : 'Products & Catalogue'}</Link></li>
              <li><Link href={`/${lang}/articles`} className="hover:text-md-primary transition-colors">{isNe ? 'निर्देशिकाहरू' : 'Articles & Guides'}</Link></li>
              <li><Link href={`/${lang}/order-slip`} className="hover:text-md-primary transition-colors">{isNe ? 'अर्डर स्लिप' : 'Order Slip'}</Link></li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-md-primary">
              {isNe ? 'सम्पर्क ठेगाना' : 'Contact Us'}
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-md-on-surface-variant">
              <p className="flex items-start gap-2">
                <span className="material-symbols-outlined text-sm mt-0.5 text-md-primary">location_on</span>
                <span>कमल नगर मार्ग, नारायणगढ, चितवन</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-md-primary">call</span>
                <a href="tel:+97756596060" className="hover:underline font-medium">056-596060</a>
                <span>/</span>
                <a href="tel:+97756596120" className="hover:underline font-medium">056-596120</a>
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-md-primary">navigation</span>
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=27.69473,84.42161"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:underline text-md-primary font-medium"
                >
                  Google Maps मा हेर्नुहोस् →
                </a>
              </p>
            </div>
          </div>

          {/* M3 Business Disclaimer Card */}
          <div className="p-4 bg-white/70 rounded-m3-lg border border-md-outline-variant/60 space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-bold text-md-on-surface">
              <span className="material-symbols-outlined text-sm text-amber-600">verified_user</span>
              <span>{isNe ? 'व्यावसायिक प्रष्टिकरण' : 'Notice'}</span>
            </div>
            <p className="text-[11px] leading-relaxed text-md-on-surface-variant">
              {isNe 
                ? 'हामी केवल सर्जिकल, अस्पताल र ल्याब सामग्री वितरक हौं। हामी उपचार वा क्लिनिकल सल्लाह दिँदैनौं।' 
                : 'Distributor of surgical and laboratory supplies only. No medical consultation or treatment provided.'}
            </p>
          </div>

        </div>

        {/* Bottom Rights */}
        <div className="pt-8 border-t border-md-outline-variant/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-md-outline">
          <p>© 2026 Saphal Surgical House. All rights reserved.</p>
          <div className="flex gap-4">
            <span>Narayangarh, Chitwan</span>
            <span>•</span>
            <span>Bagmati Province, Nepal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;