import React from 'react';
import Link from 'next/link';

export default function AboutPage({ params }: { params: { lang: string } }) {
  const isNe = params.lang === 'ne';

  return (
    <div className="min-h-screen bg-md-surface text-md-on-surface py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <span className="inline-flex items-center px-4 py-1.5 rounded-m3-full text-xs font-semibold bg-md-secondary-container text-md-on-secondary-container">
            {isNe ? 'हाम्रो परिचय' : 'About Us'}
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            {isNe ? 'सफल सर्जिकल हाउस' : 'Saphal Surgical House'}
          </h1>
          <p className="text-sm sm:text-base text-md-on-surface-variant max-w-2xl mx-auto">
            {isNe 
              ? 'चितवन र आसपासका स्वास्थ्य संस्थाहरूका लागि गुणस्तरीय सर्जिकल, प्रयोगशाला तथा अस्पताल उपकरण आपूर्ति केन्द्र।' 
              : 'Trusted distributor of surgical instruments, clinical laboratory equipment, and healthcare consumables in Chitwan.'}
          </p>
        </div>

        <section className="bg-white rounded-m3-xl border border-md-outline-variant/60 shadow-m3-1 overflow-hidden grid grid-cols-1 md:grid-cols-12 gap-0">
          <div className="md:col-span-5 bg-md-surface-variant/30 flex items-center justify-center p-8">
            <div className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-m3-xl overflow-hidden shadow-m3-1">
              <img
                src="/chairman/portrait-02-480.webp"
                alt="Arjun Ranabhat, Chairman"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-7 p-8 sm:p-10 flex flex-col justify-center space-y-4">
            <span className="text-xs uppercase font-bold tracking-wider text-md-primary">
              {isNe ? 'नेतृत्व' : 'Leadership'}
            </span>
            <h2 className="text-2xl font-bold">
              {isNe ? 'अर्जुन रणाभाट' : 'Arjun Ranabhat'}
            </h2>
            <p className="text-sm text-md-on-surface-variant font-medium">
              {isNe ? 'अध्यक्ष / संस्थापक — सफल सर्जिकल हाउस' : 'Chairman / Founder — Saphal Surgical House'}
            </p>
            <p className="text-sm sm:text-base text-md-on-surface-variant leading-relaxed">
              {isNe
                ? 'नारायणगढ, कमल नगर मार्गमा अवस्थित सफल सर्जिकल हाउसले स्थापनाकालदेखि नै अस्पताल, क्लिनिक, प्रयोगशाला तथा बिरामीको गृह-उपचार (Home-care) का लागि भरपर्दो सामग्री उपलब्ध गराउँदै आएको छ।'
                : 'Located at Kamal Nagar Marg, Narayangarh, Chitwan, Saphal Surgical House delivers hospital essentials, surgical disposables, diagnostic reagents, and home healthcare supplies.'}
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <a 
                href="tel:+97756596060"
                className="px-5 py-2.5 rounded-m3-full bg-md-primary text-white text-sm font-medium hover:bg-md-primary/90 active:scale-95 transition-all inline-flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-sm">call</span>
                <span>{isNe ? 'सम्पर्क गर्नुहोस्' : 'Contact Us'}</span>
              </a>
              <a 
                href="https://wa.me/9779855055060"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-m3-full bg-md-secondary-container text-md-on-secondary-container text-sm font-medium hover:bg-md-secondary-container/80 transition-all inline-flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-sm">chat</span>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </section>

        <div className="p-6 rounded-m3-lg bg-md-surface-variant/40 border border-md-outline-variant/50 flex items-start gap-4">
          <span className="material-symbols-outlined text-md-primary text-2xl mt-0.5">info</span>
          <div className="text-sm text-md-on-surface-variant space-y-1">
            <h4 className="font-semibold text-md-on-surface">
              {isNe ? 'व्यावसायिक सूचना तथा प्रष्टिकरण' : 'Business Notice'}
            </h4>
            <p>
              {isNe 
                ? 'सफल सर्जिकल हाउस केवल स्वास्थ्य सामग्री तथा सर्जिकल सामानहरूको वितरक हो। हामी अस्पताल सेवा, मेडिकल कन्सल्ट्यासन वा उपचार प्रदान गर्दैनौं।' 
                : 'Saphal Surgical House is purely a distributor of surgical, hospital, and laboratory supplies. We do not provide clinical consultations, medical treatment, or hospital services.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}