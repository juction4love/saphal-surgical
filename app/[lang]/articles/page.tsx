import React from 'react';
import Link from 'next/link';

interface ArticleItem {
  slug: string;
  category: string;
  categoryNe: string;
  readTime: string;
  title: string;
  titleNe: string;
  excerpt: string;
  excerptNe: string;
}

const articlesData: ArticleItem[] = [
  {
    slug: 'surgical-and-hospital-supplies-planning',
    category: 'Procurement Guide',
    categoryNe: 'खरिद निर्देशिका',
    readTime: '5 min',
    title: 'Surgical and Hospital Supplies: Planning Your Requirements',
    titleNe: 'सर्जिकल तथा अस्पताल सामग्री: आवश्यकताको पूर्व-तयारी र योजना',
    excerpt: 'A practical procurement guide for clinics, hospitals, laboratories, and care facilities in Nepal.',
    excerptNe: 'नेपालका अस्पताल, क्लिनिक र ल्याबहरूका लागि आवश्यक सर्जिकल सामग्रीको प्रभावकारी व्यवस्थापन र खरिद योजना।'
  },
  {
    slug: 'ot-materials-purchasing-checklist',
    category: 'OT Checklist',
    categoryNe: 'शल्यक्रिया चेकलिस्ट',
    readTime: '6 min',
    title: 'OT Materials: An Equipment and Consumables Purchasing Checklist',
    titleNe: 'अपरेसन थिएटर (OT) सामग्री: उपकरण र उपभोग्य वस्तुहरूको खरिद चेकलिस्ट',
    excerpt: 'Key factors when selecting surgical instrument sets, PPE, drapes, sutures, and sterilization wraps.',
    excerptNe: 'सर्जिकल सेट, पीपीई, ड्रेप्स, सुचर धागो र स्टेरिइलाइजेसन प्याकहरू छनोट गर्दा ध्यान दिनुपर्ने कुराहरू।'
  },
  {
    slug: 'hospital-cleaning-materials-selection',
    category: 'Hygiene & Safety',
    categoryNe: 'सरसफाइ र सुरक्षा',
    readTime: '5 min',
    title: 'Hospital Cleaning Materials: Choosing Products for Their Intended Use',
    titleNe: 'अस्पताल सरसफाइ सामग्री: आवश्यकता अनुसार सही उत्पादन छनोट',
    excerpt: 'Understanding cleaning vs disinfection vs sterilization, floor systems, and biomedical waste tools.',
    excerptNe: 'सफाइ, निसंक्रमण (Disinfection) र स्टेरिइलाइजेसन बीचको भिन्नता तथा फोहोर व्यवस्थापनका औजारहरू।'
  }
];

export default function ArticlesPage({ params }: { params: { lang: string } }) {
  const isNe = params.lang === 'ne';

  return (
    <div className="min-h-screen bg-md-surface text-md-on-surface py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="space-y-3">
          <span className="inline-flex items-center px-4 py-1.5 rounded-m3-full text-xs font-semibold bg-md-secondary-container text-md-on-secondary-container">
            {isNe ? 'लेख तथा निर्देशिकाहरू' : 'Articles & Guides'}
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            {isNe ? 'स्वास्थ्य सामग्री खरिद तथा प्रयोग दिग्दर्शन' : 'Healthcare Procurement & Practical Insights'}
          </h1>
          <p className="text-md-on-surface-variant max-w-3xl text-sm sm:text-base">
            {isNe
              ? 'अस्पताल, शल्यक्रिया कक्ष तथा प्रयोगशाला सञ्चालनका लागि उपयोगी निर्देशिका, चेकलिस्ट र सामग्री व्यवस्थापन सम्बन्धी जानकारी।'
              : 'Actionable checklists and insights for hospital purchasing, OT supplies, clinical cleaning, and laboratory equipment.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articlesData.map((art) => (
            <article 
              key={art.slug}
              className="group flex flex-col justify-between bg-white rounded-m3-xl border border-md-outline-variant/60 p-6 hover:shadow-m3-2 transition-all duration-300 hover:border-md-primary/40"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-3 py-1 rounded-m3-full font-medium bg-md-secondary-container/70 text-md-on-secondary-container">
                    {isNe ? art.categoryNe : art.category}
                  </span>
                  <span className="text-md-on-surface-variant flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">schedule</span>
                    {art.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-bold group-hover:text-md-primary transition-colors line-clamp-2">
                  <Link href={`/${params.lang}/articles/${art.slug}`}>
                    {isNe ? art.titleNe : art.title}
                  </Link>
                </h3>

                <p className="text-xs sm:text-sm text-md-on-surface-variant line-clamp-3 leading-relaxed">
                  {isNe ? art.excerptNe : art.excerpt}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-md-outline-variant/30 flex items-center justify-between">
                <Link
                  href={`/${params.lang}/articles/${art.slug}`}
                  className="text-xs sm:text-sm font-semibold text-md-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  <span>{isNe ? 'पूरा लेख पढ्नुहोस्' : 'Read Article'}</span>
                  <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}