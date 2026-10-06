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
    <div className="space-y-8">
      {/* M3 Search Bar */}
      <div className="relative max-w-2xl mx-auto">
        <div className="flex items-center bg-white border border-md-outline-variant rounded-m3-full px-5 py-3 shadow-m3-1 focus-within:border-md-primary focus-within:ring-2 focus-within:ring-md-primary/20 transition-all">
          <span className="material-symbols-outlined text-md-on-surface-variant mr-3">search</span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={isNe ? "सामग्री, उपकरण वा ब्रान्ड खोज्नुहोस्..." : "Search surgical supplies, lab reagents, equipment..."}
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

      {/* Filter Chips Section */}
      <div className="space-y-4">
        {/* Categories */}
        <div className="flex flex-wrap items-center gap-2 justify-center">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-1.5 rounded-m3-full text-xs font-medium transition-all ${
              selectedCategory === 'all'
                ? 'bg-md-primary text-white shadow-sm'
                : 'bg-white border border-md-outline-variant/60 text-md-on-surface hover:bg-md-surface-variant/40'
            }`}
          >
            {isNe ? 'सबै सामग्री' : 'All Items'}
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-m3-full text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-md-secondary-container text-md-on-secondary-container font-semibold ring-1 ring-md-secondary'
                  : 'bg-white border border-md-outline-variant/60 text-md-on-surface hover:bg-md-surface-variant/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Brands */}
        <div className="flex flex-wrap items-center gap-2 justify-center">
          <span className="text-xs text-md-on-surface-variant mr-1 font-medium">
            {isNe ? 'प्रमुख ब्रान्ड:' : 'Featured Brands:'}
          </span>
          {brands.map((b) => (
            <button
              key={b}
              onClick={() => setSelectedBrand(selectedBrand === b ? 'all' : b)}
              className={`px-3 py-1 rounded-m3-sm text-xs transition-all border ${
                selectedBrand === b
                  ? 'bg-md-primary-container text-md-on-primary-container border-md-primary font-bold'
                  : 'bg-transparent border-dashed border-md-outline-variant text-md-on-surface-variant hover:border-md-primary'
              }`}
            >
              {b}
            </button>
          ))}
        </div>
      </div>

      {/* Result Count Status */}
      <div className="flex justify-between items-center text-xs text-md-on-surface-variant border-b border-md-outline-variant/30 pb-3">
        <span>
          {isNe 
            ? `कुल फेला परेका सामग्री: ${filteredProducts.length}` 
            : `Showing ${filteredProducts.length} items`}
        </span>
        {(selectedCategory !== 'all' || selectedBrand !== 'all' || searchQuery) && (
          <button
            onClick={() => { setSelectedCategory('all'); setSelectedBrand('all'); setSearchQuery(''); }}
            className="text-md-primary font-medium hover:underline"
          >
            {isNe ? 'सबै फिल्टर हटाउनुहोस्' : 'Reset filters'}
          </button>
        )}
      </div>

      {/* Grid Display */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((p) => (
            <ProductCard key={p.slug} product={p} lang={lang} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-m3-xl border border-md-outline-variant/50 space-y-3">
          <span className="material-symbols-outlined text-4xl text-md-outline">inventory_2</span>
          <p className="text-sm font-medium text-md-on-surface">
            {isNe ? 'कुनै सामग्री फेला परेन।' : 'No matching items found.'}
          </p>
          <p className="text-xs text-md-on-surface-variant">
            {isNe ? 'फरक शब्द वा ब्रान्ड खोजेर हेर्नुहोस्।' : 'Try checking your spelling or clearing filters.'}
          </p>
        </div>
      )}
    </div>
  );
}