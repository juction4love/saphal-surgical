import Image from 'next/image';

interface BrandSymbolProps {
  size: number;
  className?: string;
}

export function BrandSymbol({ size, className }: BrandSymbolProps) {
  return (
    <Image
      src="/logo.svg"
      alt="Saphal Surgical House"
      aria-hidden="true"
      width={size}
      height={size}
      className={className}
      unoptimized
    />
  );
}