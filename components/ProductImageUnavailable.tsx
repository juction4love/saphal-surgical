import { ImageOff } from 'lucide-react';
import { Locale } from '@/lib/translations';

interface ProductImageUnavailableProps {
  locale: Locale;
  alt: string;
}

export function ProductImageUnavailable({ locale, alt }: ProductImageUnavailableProps) {
  return (
    <div
      role="img"
      aria-label={alt}
      className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-[#F8FCF8] p-4 text-center text-[#64756A]"
    >
      <ImageOff className="h-7 w-7 text-[#8BA491]" aria-hidden="true" />
      <span className="text-xs font-medium">
        {locale === 'ne' ? 'उत्पादनको तस्बिर उपलब्ध छैन' : 'Product image unavailable'}
      </span>
    </div>
  );
}