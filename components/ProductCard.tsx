import React from 'react';
import Link from 'next/link';

export interface ProductItem {
  slug: string;
  name: string;
  nameNe?: string;
  category: string;
  categoryNe?: string;
  description?: string;
  descriptionNe?: string;
  image?: string;
  inStock?: boolean;
}

interface ProductCardProps {
  product: ProductItem;
  lang?: 'en' | 'ne';
  onAddSlip?: (product: ProductItem) => void;
}

export default function ProductCard({ product, lang = 'ne', onAddSlip }: ProductCardProps) {
  const title = lang === 'ne' && product.nameNe ? product.nameNe : product.name;
  const categoryTitle = lang === 'ne' && product.categoryNe ? product.categoryNe : product.category;
  const desc = lang === 'ne' && product.descriptionNe ? product.descriptionNe : product.description;

  return (
    <article className="group relative flex flex-col bg-white rounded-m3-lg border border-md-outline-variant overflow-hidden hover:shadow-m3-2 transition-all duration-300">
      <div className="relative w-full aspect-[4/3] bg-md-surface-variant/30 flex items-center justify-center p-4 overflow-hidden">
        <img
          src={product.image || '/logo.svg'}
          alt={title}
          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <span className="absolute top-3 left-3 px-3 py-1 rounded-m3-full text-[11px] font-medium bg-md-secondary-container text-md-on-secondary-container">
          {categoryTitle}
        </span>
      </div>

      <div className="flex flex-col flex-1 p-4 gap-2">
        <h3 className="text-base font-semibold text-md-on-surface line-clamp-1 group-hover:text-md-primary transition-colors">
          <Link href={`/${lang}/products/${product.slug}`}>{title}</Link>
        </h3>
        {desc && <p className="text-xs text-md-on-surface-variant line-clamp-2">{desc}</p>}

        <div className="mt-auto pt-3 flex items-center justify-between gap-2 border-t border-md-outline-variant/40">
          <Link
            href={`/${lang}/products/${product.slug}`}
            className="text-xs font-medium text-md-primary hover:underline"
          >
            {lang === 'ne' ? 'विवरण हेर्नुहोस् →' : 'Details →'}
          </Link>
          <button
            onClick={() => onAddSlip && onAddSlip(product)}
            className="px-3 py-1.5 rounded-m3-full bg-md-primary text-white text-xs font-medium hover:bg-md-primary/90 active:scale-95 transition-all flex items-center gap-1 shadow-sm"
          >
            <span className="material-symbols-outlined text-sm">add</span>
            <span>{lang === 'ne' ? 'अर्डर स्लिप' : 'Add to slip'}</span>
          </button>
        </div>
      </div>
    </article>
  );
}
