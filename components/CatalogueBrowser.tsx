"use client";

import React, { useState, useMemo } from 'react';
import ProductCard, { ProductItem } from './ProductCard';

interface CatalogueBrowserProps {
  initialProducts: ProductItem[];
  lang: 'en' | 'ne';
}

export default function CatalogueBrowser({ initialProducts = [], lang = 'ne' }: CatalogueBrowserProps) {
  const isNe = lang === 'ne';
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedBrand, setSelectedBrand] = useState<string>('all');

  const categories = useMemo(() => {
    const cats = new Set<string>();
    initialProducts.forEach(p => {
      if (p.category) cats.add(p.category);
    });
    return Array.from(cats);
  }, [initialProducts]);

  const brands = ['Coral', 'Tulip', 'Erba'];

  const filteredProducts = useMemo(() => {
    return initialProducts.filter(item => {
      const name = (isNe && item.nameNe ? item.nameNe : item.name).toLowerCase();
      const desc = (isNe && item.descriptionNe ? item.descriptionNe : item.description || '').toLowerCase();
      const query = searchQuery.toLowerCase().trim();

      const matchesSearch = !query || name.includes(query) || desc.includes(query);
      const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesBrand = selectedBrand === 'all' || 
        name.includes(selectedBrand.toLowerCase()) || 
        desc.includes(selectedBrand.toLowerCase());

      return matchesSearch && matchesCat && matchesBrand;
    });
  }, [initialProducts, searchQuery, selectedCategory, selectedBrand, isNe]);

  return (
    <div className="space-y-6">
      {/* Search Input - M3 Pill Shape */}
      <div className="relative max-w-2xl mx-auto">
        <div className="flex items-center bg-white border border-md-outline-variant rounded-m3-full px-4 py-2.5 sm:py-3 shadow-m3-1 focus-within:border-md-primary focus-within:ring-2 focus-within:ring-md-primary/20 transition-all">
          <span className="material-symbols-outlined text-md-on-surface-variant mr-2 sm:mr-3">search</span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={isNe ? "सामग्री वा ब्रान्ड खोज्नुहोस्..." : "Search supplies, reagents, tools..."}
            className="w-full bg-transparent border-none outline-none text-sm text-md-on-surface placeholder:text-md-outline"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="p-1 hover:bg-md-surface-variant rounded-full text-md-on-surface-variant transition-colors"
            >
              <span className="material-symbols-outlined text-sm">close</span>
            </button>
          )}
        </div>
      </div>

      {/* Categories: Mobile Horizontal Scrollable Chips */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none sm:justify-center px-1">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`whitespace-nowrap px-4 py-2 rounded-m3-full text-xs font-medium transition-all shrink-0 ${
              selectedCategory === 'all'
                ? 'bg-md-primary text-white shadow-sm'
                : 'bg-white border border-md-outline-variant/60 text-md-on-surface active:bg-md-surface-variant/40'
            }`}
          >
            {isNe ? 'सबै सामग्री' : 'All Items'}
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`whitespace-nowrap px-4 py-2 rounded-m3-full text-xs font-medium transition-all shrink-0 ${
                selectedCategory === cat
                  ? 'bg-md-secondary-container text-md-on-secondary-container font-semibold ring-1 ring-md-secondary'
                  : 'bg-white border border-md-outline-variant/60 text-md-on-surface active:bg-md-surface-variant/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Brand Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:justify-center px-1">
          <span className="text-xs text-md-on-surface-variant font-medium shrink-0">
            {isNe ? 'ब्रान्ड:' : 'Brand:'}
          </span>
          {brands.map((b) => (
            <button
              key={b}
              onClick={() => setSelectedBrand(selectedBrand === b ? 'all' : b)}
              className={`whitespace-nowrap px-3 py-1 rounded-m3-sm text-xs transition-all border shrink-0 ${
                selectedBrand === b
                  ? 'bg-md-primary-container text-md-on-primary-container border-md-primary font-bold'
                  : 'bg-transparent border-dashed border-md-outline-variant text-md-on-surface-variant'
              }`}
            >
              {b}
            </button>
          ))}
        </div>
      </div>

      {/* Result Status */}
      <div className="flex justify-between items-center text-xs text-md-on-surface-variant border-b border-md-outline-variant/30 pb-2">
        <span>{isNe ? `फेला परेका: ${filteredProducts.length}` : `Items: ${filteredProducts.length}`}</span>
        {(selectedCategory !== 'all' || selectedBrand !== 'all' || searchQuery) && (
          <button
            onClick={() => { setSelectedCategory('all'); setSelectedBrand('all'); setSearchQuery(''); }}
            className="text-md-primary font-medium underline"
          >
            {isNe ? 'फिल्टर हटाउनुहोस्' : 'Reset'}
          </button>
        )}
      </div>

      {/* Grid: 1 col on mobile, 2 on small tablet, 4 on desktop */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredProducts.map((p) => (
            <ProductCard key={p.slug} product={p} lang={lang} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-m3-xl border border-md-outline-variant/50 space-y-2">
          <span className="material-symbols-outlined text-3xl text-md-outline">inventory_2</span>
          <p className="text-sm font-medium">{isNe ? 'कुनै सामग्री फेला परेन।' : 'No items found.'}</p>
        </div>
      )}

      {/* Mobile Floating Action Button (FAB) for Instant WhatsApp Assistance */}
      <a
        href="https://wa.me/9779855055060"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Enquiry"
        className="fixed bottom-6 right-6 z-40 sm:hidden flex items-center gap-2 px-4 py-3 rounded-m3-xl bg-md-primary text-white shadow-m3-2 active:scale-95 transition-transform"
      >
        <span className="material-symbols-outlined text-xl">chat</span>
        <span className="text-xs font-bold">{isNe ? 'सोधपुछ' : 'Chat'}</span>
      </a>
    </div>
  );
}