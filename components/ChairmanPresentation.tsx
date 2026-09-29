import Image from 'next/image';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '@/config/site';
import { Locale } from '@/lib/translations';
import { WhatsAppIcon } from '@/components/Icons';

type PortraitNumber = '01' | '02' | '03' | '04' | '05' | '06';

interface ChairmanPhotoProps {
  locale: Locale;
  number: PortraitNumber;
  className: string;
  sizes: string;
  priority?: boolean;
}

function ChairmanPhoto({ locale, number, className, sizes, priority = false }: ChairmanPhotoProps) {
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
        priority={priority}
        unoptimized
        className="h-full w-full object-cover"
      />
    </picture>
  );
}

interface ChairmanMessageProps {
  locale: Locale;
  photoNumber?: PortraitNumber;
  showPhoto?: boolean;
}

export function ChairmanMessage({ locale, photoNumber = '02', showPhoto = true }: ChairmanMessageProps) {
  const isNe = locale === 'ne';
  const messages = isNe
    ? [
        'सफल सर्जिकल हाउस खुद्रा विक्रेता, अस्पताल, क्लिनिक, प्रयोगशाला, फार्मेसी तथा स्वास्थ्य संस्थाहरूलाई सर्जिकल, अस्पताल, अपरेशन थिएटर, प्रयोगशाला, मेडिकल उपभोग्य, ENT तथा सरसफाइका सामग्रीसम्बन्धी सेवा दिने उद्देश्यले अघि बढिरहेको छ।',
        'आफ्नो आवश्यकताको सूची, इच्छित ब्रान्ड, साइज, प्याकिङ मात्रा र स्थान पठाउनुहोस्। हाम्रो टोलीले हालको उपलब्धता, सामग्रीको विवरण र मूल्य पुष्टि गर्न सहयोग गर्नेछ।',
        'सफल सर्जिकल हाउसलाई सम्झनुभएकोमा धन्यवाद।',
      ]
    : [
        'Saphal Surgical House is committed to serving retailers, hospitals, clinics, laboratories, pharmacies and healthcare institutions with a broad range of surgical, hospital, operating-theatre, laboratory, consumable, ENT and cleaning supplies.',
        'We welcome requirement lists from healthcare professionals, institutions and business partners. Please share the product name, preferred brand, size, pack quantity and location so our team can confirm current availability, specifications and price.',
        'Thank you for considering Saphal Surgical House.',
      ];

  const enquiries = isNe
    ? [
        {
          label: 'खुद्रा विक्रेता सोधपुछ',
          audience: 'खुद्रा विक्रेताका रूपमा',
        },
        {
          label: 'अस्पताल तथा क्लिनिक सोधपुछ',
          audience: 'अस्पताल वा क्लिनिकका तर्फबाट',
        },
        {
          label: 'WhatsApp मा सूची पठाउनुहोस्',
          audience: 'स्वास्थ्य संस्था वा व्यावसायिक साझेदारका तर्फबाट',
        },
      ]
    : [
        {
          label: 'Retailer Enquiry',
          audience: 'as a retailer',
        },
        {
          label: 'Hospital & Clinic Enquiry',
          audience: 'on behalf of a hospital or clinic',
        },
        {
          label: 'Send Requirement on WhatsApp',
          audience: 'on behalf of a healthcare institution or business partner',
        },
      ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="chairman-message-heading">
      <div className={`overflow-hidden rounded-2xl border border-[#D8EBDD] bg-white shadow-sm ${showPhoto ? 'grid md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]' : ''}`}>
        {showPhoto && (
          <ChairmanPhoto
            locale={locale}
            number={photoNumber}
            sizes="(max-width: 767px) 100vw, (max-width: 1279px) 38vw, 460px"
            priority={photoNumber === '02'}
            className="block aspect-[4/5] w-full bg-[#F0FDF4] md:aspect-auto md:min-h-[520px]"
          />
        )}
        <div className="flex flex-col justify-center bg-[#F8FCF8] p-5 sm:p-7 lg:p-9">
          <span className="text-xs font-bold uppercase tracking-wide text-[#166534]">
            {isNe ? 'सफल सर्जिकल हाउस' : 'Saphal Surgical House'}
          </span>
          <h2 id="chairman-message-heading" lang={locale} className="mt-2 font-heading font-bold text-2xl sm:text-3xl leading-tight text-[#17251C]">
            {isNe ? 'अध्यक्षको सन्देश' : 'Message from the Chairman'}
          </h2>
          <div className="mt-4 max-w-2xl space-y-3 text-sm sm:text-base leading-relaxed text-[#475569]">
            {messages.map((message) => <p key={message}>{message}</p>)}
          </div>
          <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
            {enquiries.map((enquiry, index) => {
              const message = isNe
                ? `नमस्ते सफल सर्जिकल हाउस, म ${enquiry.audience} सामग्रीबारे सोधपुछ गर्दैछु। कृपया हालको उपलब्धता, विवरण र मूल्य पुष्टि गर्न सहयोग गर्नुहोस्। मेरो आवश्यकताको सूची: [यहाँ सामग्रीको नाम, इच्छित ब्रान्ड, साइज, प्याकिङ मात्रा र डेलिभरी स्थान थप्नुहोस्]।`
                : `Hello Saphal Surgical House, I am enquiring ${enquiry.audience}. Please help confirm current availability, specifications, and price. My requirement list: [add product name(s), preferred brand, size, pack quantity, and delivery location].`;
              const whatsappUrl = getWhatsAppUrl(message);

              return (
                <a
                  key={enquiry.label}
                  href={whatsappUrl || undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`min-h-[48px] rounded-xl px-3.5 py-3 text-center text-xs sm:text-sm font-bold inline-flex items-center justify-center gap-2 transition-colors focus-visible:ring-2 focus-visible:ring-[#15803D] focus-visible:ring-offset-2 ${index === 0 ? 'bg-[#15803D] text-white hover:bg-[#166534]' : 'border border-[#CFE3D3] bg-white text-[#166534] hover:bg-[#F0FDF4]'} ${index === 2 ? 'sm:col-span-2' : ''}`}
                >
                  <WhatsAppIcon className="h-4 w-4 shrink-0" />
                  <span>{enquiry.label}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 shrink-0" />
                </a>
              );
            })}
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
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="chairman-profile-heading">
      <div className="grid overflow-hidden rounded-2xl border border-[#D8EBDD] bg-white shadow-sm lg:grid-cols-[minmax(300px,0.8fr)_minmax(0,1.2fr)]">
        <div className="grid grid-cols-[1.15fr_0.85fr] items-end gap-2.5 bg-[#F0FDF4] p-3 sm:gap-3 sm:p-5">
          <ChairmanPhoto
            locale={locale}
            number="01"
            sizes="(max-width: 1023px) 60vw, 300px"
            className="block aspect-[4/5] overflow-hidden rounded-xl bg-white"
          />
          <ChairmanPhoto
            locale={locale}
            number="03"
            sizes="(max-width: 1023px) 40vw, 220px"
            className="block aspect-[4/5] overflow-hidden rounded-xl bg-white"
          />
        </div>
        <div className="flex flex-col justify-center p-5 sm:p-7 lg:p-9">
          <span className="text-xs font-bold uppercase tracking-wide text-[#166534]">
            {isNe ? 'अध्यक्ष' : 'Chairman'}
          </span>
          <h2 id="chairman-profile-heading" lang={locale} className="mt-2 font-heading font-bold text-2xl sm:text-3xl leading-tight text-[#17251C]">
            {isNe ? 'अध्यक्षको सन्देश' : 'Message from the Chairman'}
          </h2>
          <div className="mt-4 max-w-2xl space-y-3 text-sm sm:text-base leading-relaxed text-[#475569]">
            {isNe ? (
              <>
                <p>सफल सर्जिकल हाउस खुद्रा विक्रेता, अस्पताल, क्लिनिक, प्रयोगशाला, फार्मेसी तथा स्वास्थ्य संस्थाहरूलाई सर्जिकल, अस्पताल, अपरेशन थिएटर, प्रयोगशाला, मेडिकल उपभोग्य, ENT तथा सरसफाइका सामग्रीसम्बन्धी सेवा दिने उद्देश्यले अघि बढिरहेको छ।</p>
                <p>आफ्नो आवश्यकताको सूची, इच्छित ब्रान्ड, साइज, प्याकिङ मात्रा र स्थान पठाउनुहोस्। हाम्रो टोलीले हालको उपलब्धता, सामग्रीको विवरण र मूल्य पुष्टि गर्न सहयोग गर्नेछ। सफल सर्जिकल हाउसलाई सम्झनुभएकोमा धन्यवाद।</p>
              </>
            ) : (
              <>
                <p>Saphal Surgical House is committed to serving healthcare institutions and business partners with a broad range of surgical, hospital, operating-theatre, laboratory, consumable, ENT and cleaning supplies.</p>
                <p>Share your requirement list, preferred brand, size, pack quantity and location; our team will help confirm current availability, specifications and price. Thank you for considering Saphal Surgical House.</p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
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
            {isNe ? 'अध्यक्ष' : 'Chairman'}
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