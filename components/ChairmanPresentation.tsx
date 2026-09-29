import Image from 'next/image';
import { preload } from 'react-dom';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '@/config/site';
import { Locale } from '@/lib/translations';
import { WhatsAppIcon } from '@/components/Icons';

type PortraitNumber = '01' | '02' | '03' | '04' | '05' | '06';

const chemsanLifetimeMembersUrl = 'https://chemsan.org.np/members/lifetime-members/';

const chairmanMessage = {
  en: 'As Chairman of Saphal Surgical House, Arjun Ranabhat supports the business’s focus on surgical, hospital, operating-theatre, laboratory, medical-consumable, ENT and cleaning supplies. Saphal Surgical House welcomes enquiries from retailers, hospitals, clinics, laboratories, pharmacies and healthcare institutions. Customers may send their requirement list so that product availability, specifications, packaging and price can be confirmed.',
  ne: 'सफल सर्जिकल हाउसका अध्यक्ष अर्जुन रणाभाटको नेतृत्वमा यस व्यवसायले सर्जिकल, अस्पताल, अपरेशन थिएटर, प्रयोगशाला, मेडिकल उपभोग्य, ENT तथा सरसफाइका सामग्रीसम्बन्धी सोधपुछ र आपूर्तिमा ध्यान केन्द्रित गर्दछ। सफल सर्जिकल हाउसले खुद्रा विक्रेता, अस्पताल, क्लिनिक, प्रयोगशाला, फार्मेसी तथा स्वास्थ्य संस्थाबाट आवश्यकताको सूची स्वीकार गर्दछ। उपलब्धता, विवरण, प्याकिङ र मूल्य सम्पर्कमार्फत पुष्टि गरिन्छ।',
};

interface ChairmanPhotoProps {
  locale: Locale;
  number: PortraitNumber;
  className: string;
  sizes: string;
  priority?: boolean;
}

export function ChairmanPhoto({ locale, number, className, sizes, priority = false }: ChairmanPhotoProps) {
  const alt = locale === 'ne'
    ? 'सफल सर्जिकल हाउसका अध्यक्षको तस्बिर'
    : 'Chairman of Saphal Surgical House';

  return (
    <picture className={className}>
      <source
        type="image/webp"
        sizes={sizes}
        srcSet={`/chairman/portrait-${number}-480.webp 480w, /chairman/portrait-${number}-960.webp 960w`}
      />
      <Image
        src={`/chairman/portrait-${number}-960.webp`}
        alt={alt}
        width={960}
        height={1280}
        sizes={sizes}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        unoptimized
        className="h-full w-full object-cover object-[50%_18%]"
      />
    </picture>
  );
}

interface ChairmanHeroProps {
  locale: Locale;
}

export function ChairmanHero({ locale }: ChairmanHeroProps) {
  const isNe = locale === 'ne';
  const heroSrc = '/chairman/portrait-02-960.webp';
  const heroSrcSet = [320, 400, 480, 640, 800, 960]
    .map((width) => `/chairman/portrait-02-${width}.webp ${width}w`).join(', ');
  const heroSizes = '(max-width: 461px) calc(100vw - 32px), (max-width: 767px) 430px, (max-width: 1023px) calc((100vw - 80px) / 2), (max-width: 1079px) calc((100vw - 120px) * 5 / 12), 400px';
  preload(heroSrc, { as: 'image', type: 'image/webp', imageSrcSet: heroSrcSet, imageSizes: heroSizes, fetchPriority: 'high' });
  const whatsAppUrl = getWhatsAppUrl(isNe
    ? 'नमस्ते सफल सर्जिकल हाउस, मलाई सर्जिकल तथा मेडिकल सामग्रीसम्बन्धी जानकारी चाहिन्छ।'
    : 'Hello Saphal Surgical House, I would like to enquire about surgical and medical supplies.');

  return (
    <section className="border-b border-[#D8EBDD] bg-[#F4FBF5] py-4 pb-safe sm:py-8 lg:py-10" aria-labelledby="chairman-home-heading">
      <div className="chairman-hero-layout mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-12 md:items-center md:gap-8 lg:px-8 lg:gap-10">
        <div className="order-1 md:order-2 md:col-span-6 lg:col-span-5">
          <picture className="mx-auto block w-full max-w-[430px] md:max-w-[400px]">
            <source type="image/webp" srcSet={heroSrcSet} sizes={heroSizes} />
            <img
              data-chairman-hero
              src={heroSrc}
              srcSet={heroSrcSet}
              sizes={heroSizes}
              alt={isNe ? 'अर्जुन रणाभाट, सफल सर्जिकल हाउसका अध्यक्ष' : 'Arjun Ranabhat, Chairman of Saphal Surgical House'}
              width={960}
              height={1280}
              loading="eager"
              fetchPriority="high"
              className="block h-auto w-full aspect-[4/5] rounded-2xl border border-[#D8EBDD] bg-[#EAF5EC] object-cover object-[50%_18%] shadow-sm md:aspect-[3/4]"
            />
          </picture>
        </div>

        <div className="order-2 space-y-4 text-center md:order-1 md:col-span-6 md:text-left lg:col-span-7 lg:space-y-5">
          <div className="space-y-2">
            <h1 id="chairman-home-heading" className="font-heading text-3xl font-extrabold leading-tight text-[#17251C] sm:text-4xl lg:text-5xl">
              <span lang="en" className="block">Arjun Ranabhat</span>
              <span lang="ne" className="mt-1 block text-2xl font-bold sm:text-3xl lg:text-4xl">अर्जुन रणाभाट</span>
            </h1>
            <div className="space-y-0.5 text-sm font-semibold text-[#166534] sm:text-base">
              <p lang="en">Chairman, Saphal Surgical House</p>
              <p lang="ne">अध्यक्ष, सफल सर्जिकल हाउस</p>
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="font-heading text-xl font-bold leading-snug text-[#17251C] sm:text-2xl">
              {isNe ? 'सर्जिकल तथा मेडिकल सामग्रीको सोधपुछ' : 'Surgical and medical supply enquiries'}
            </h2>
            <div className="mx-auto max-w-2xl space-y-2 text-sm leading-relaxed text-[#475569] sm:text-base md:mx-0">
              <p lang="ne">सर्जिकल तथा मेडिकल सामग्रीको उपलब्धता र मूल्यका लागि आफ्नो आवश्यकताको सूची पठाउनुहोस्।</p>
              <p lang="en">Send your surgical and medical supply requirements to confirm availability and pricing.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3 md:max-w-2xl">
            <a href={`/${locale}/products`} className="min-h-[48px] rounded-xl bg-[#15803D] px-4 py-3 text-sm font-bold text-white inline-flex items-center justify-center hover:bg-[#166534] focus-visible:ring-2 focus-visible:ring-[#15803D] focus-visible:ring-offset-2">
              {isNe ? 'क्याटलग हेर्नुहोस्' : 'Browse Catalogue'}
            </a>
            <a href="tel:+97756596060" className="min-h-[48px] rounded-xl border border-[#CFE3D3] bg-white px-4 py-3 text-sm font-bold text-[#166534] inline-flex items-center justify-center hover:bg-[#F0FDF4] focus-visible:ring-2 focus-visible:ring-[#15803D]">
              {isNe ? 'फोन गर्नुहोस्' : 'Call Us'}
            </a>
            {whatsAppUrl && (
              <a href={whatsAppUrl} target="_blank" rel="noopener noreferrer" className="min-h-[48px] rounded-xl bg-[#166534] px-4 py-3 text-sm font-bold text-white inline-flex items-center justify-center hover:bg-[#14532D] focus-visible:ring-2 focus-visible:ring-[#15803D] focus-visible:ring-offset-2">
                {isNe ? 'WhatsApp सोधपुछ' : 'WhatsApp Enquiry'}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
interface ChairmanProfileProps {
  locale: Locale;
}

export function ChairmanProfile({ locale }: ChairmanProfileProps) {
  const isNe = locale === 'ne';

  return (
    <div className="space-y-8 sm:space-y-10">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="chairman-profile-heading">
        <div className="grid overflow-hidden rounded-2xl border border-[#D8EBDD] bg-white shadow-sm lg:grid-cols-[minmax(300px,0.8fr)_minmax(0,1.2fr)]">
          <div className="grid grid-cols-[1.15fr_0.85fr] items-end gap-2.5 bg-[#F0FDF4] p-3 sm:gap-3 sm:p-5">
            <ChairmanPhoto locale={locale} number="01" sizes="(max-width: 1023px) 60vw, 300px" className="block aspect-[4/5] overflow-hidden rounded-xl bg-white" />
            <ChairmanPhoto locale={locale} number="03" sizes="(max-width: 1023px) 40vw, 220px" className="block aspect-[4/5] overflow-hidden rounded-xl bg-white" />
          </div>
          <div className="flex flex-col justify-center p-5 sm:p-7 lg:p-9">
            <span className="text-xs font-bold uppercase tracking-wide text-[#166534]">
              {isNe ? 'सफल सर्जिकल हाउसका अध्यक्ष' : 'Chairman of Saphal Surgical House'}
            </span>
            <h2 id="chairman-profile-heading" className="mt-2 font-heading font-bold text-2xl sm:text-3xl leading-tight text-[#17251C]">
              <span lang="en" className="block">Arjun Ranabhat</span>
              <span lang="ne" className="mt-1 block">अर्जुन रणाभाट</span>
            </h2>
            <p className="mt-2 text-sm font-semibold text-[#166534]">
              <span lang="en">Chairman, Saphal Surgical House</span>
              <span aria-hidden="true"> / </span>
              <span lang="ne">अध्यक्ष, सफल सर्जिकल हाउस</span>
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="chairman-message-heading">
        <div className="rounded-2xl border border-[#D8EBDD] bg-[#F8FCF8] p-5 sm:p-7">
          <h2 id="chairman-message-heading" className="font-heading font-bold text-xl sm:text-2xl text-[#17251C]">
            {isNe ? 'अध्यक्षको सन्देश' : 'Chairman’s Message'}
          </h2>
          <p lang={locale} className="mt-3 max-w-4xl text-sm sm:text-base leading-relaxed text-[#475569]">
            {chairmanMessage[locale]}
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="chairman-leadership-heading">
        <div className="rounded-2xl border border-[#D8EBDD] bg-white p-5 shadow-sm sm:p-7">
          <h2 id="chairman-leadership-heading" className="font-heading font-bold text-xl sm:text-2xl text-[#17251C]">
            {isNe ? 'व्यवसायिक नेतृत्व' : 'Business Leadership'}
          </h2>
          <p lang={locale} className="mt-3 max-w-4xl text-sm sm:text-base leading-relaxed text-[#475569]">
            {isNe
              ? 'Chemical & Medical Suppliers Association of Nepal (CHEMSAN) को Lifetime Members निर्देशिकामा अर्जुन रणाभाटलाई चितवनस्थित Saphal Surgical House को सम्पर्क व्यक्ति भनेर सूचीकृत गरिएको छ।'
              : 'The Chemical & Medical Suppliers Association of Nepal (CHEMSAN) Lifetime Members directory lists Arjun Ranabhat as the contact person for Saphal Surgical House in Chitwan.'}
          </p>
          <a href={chemsanLifetimeMembersUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex min-h-[44px] items-center text-sm font-semibold text-[#166534] underline underline-offset-4 hover:text-[#15803D]">
            {isNe ? 'Chemical & Medical Suppliers Association of Nepal (CHEMSAN) को Lifetime Members निर्देशिका' : 'Chemical & Medical Suppliers Association of Nepal (CHEMSAN) Lifetime Members directory'}
          </a>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="chairman-services-heading">
        <div className="rounded-2xl border border-[#D8EBDD] bg-[#F4FBF5] p-5 sm:p-7">
          <h2 id="chairman-services-heading" className="font-heading font-bold text-xl sm:text-2xl text-[#17251C]">
            {isNe ? 'सर्जिकल सामग्री आपूर्ति' : 'Surgical Supply Services'}
          </h2>
          <p lang={locale} className="mt-3 max-w-4xl text-sm sm:text-base leading-relaxed text-[#475569]">
            {isNe
              ? 'सफल सर्जिकल हाउसले सर्जिकल, अस्पताल, अपरेशन थिएटर, प्रयोगशाला, मेडिकल उपभोग्य, ENT तथा सरसफाइका सामग्रीबारे सोधपुछ स्वीकार गर्दछ। खुद्रा विक्रेता, अस्पताल, क्लिनिक, प्रयोगशाला, फार्मेसी तथा स्वास्थ्य संस्थाले आवश्यकताको सूची पठाउन सक्छन्। उपलब्धता, विवरण, प्याकिङ र मूल्य सम्पर्कमार्फत पुष्टि गरिन्छ।'
              : 'Saphal Surgical House welcomes enquiries for surgical, hospital, operating-theatre, laboratory, medical-consumable, ENT and cleaning supplies. Retailers, hospitals, clinics, laboratories, pharmacies and healthcare institutions may send a requirement list so availability, specifications, packaging and price can be confirmed.'}
          </p>
        </div>
      </section>
    </div>
  );
}

interface ChairmanGalleryProps {
  locale: Locale;
}

export function ChairmanGallery({ locale }: ChairmanGalleryProps) {
  const isNe = locale === 'ne';
  const portraits: PortraitNumber[] = ['04', '05', '06'];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="chairman-gallery-heading">
      <div className="mb-5 flex items-end justify-between gap-3">
        <div>
          <span className="text-xs font-bold uppercase tracking-wide text-[#166534]">
            {isNe ? 'सफल सर्जिकल हाउस' : 'Saphal Surgical House'}
          </span>
          <h2 id="chairman-gallery-heading" lang={locale} className="mt-1 font-heading font-bold text-xl sm:text-2xl text-[#17251C]">
            {isNe ? 'अध्यक्षका तस्बिरहरू' : 'Chairman Photo Gallery'}
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
        {portraits.map((number) => {
          const imageUrl = `/chairman/portrait-${number}-960.webp`;
          const label = isNe ? 'सफल सर्जिकल हाउसका अध्यक्षको तस्बिर ठूलो आकारमा हेर्नुहोस्' : 'View larger portrait of the Chairman of Saphal Surgical House';

          return (
            <a
              key={number}
              href={imageUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="group block overflow-hidden rounded-xl border border-[#D8EBDD] bg-white shadow-sm focus-visible:ring-2 focus-visible:ring-[#15803D] focus-visible:ring-offset-2"
            >
              <ChairmanPhoto
                locale={locale}
                number={number}
                sizes="(max-width: 639px) 50vw, 33vw"
                className="block aspect-[4/5] overflow-hidden bg-[#F0FDF4]"
              />
              <span className="flex min-h-[44px] items-center justify-center gap-1.5 px-3 text-xs font-semibold text-[#166534] group-hover:bg-[#F0FDF4]">
                <MessageCircle className="h-3.5 w-3.5" />
                <span>{isNe ? 'तस्बिर ठूलो हेर्नुहोस्' : 'View larger photo'}</span>
              </span>
            </a>
          );
        })}
      </div>
    </section>
  );
}
