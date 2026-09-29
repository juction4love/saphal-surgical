'use client';

import React, { useState, useMemo, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Search, X, Filter, Phone, RefreshCw, AlertCircle } from 'lucide-react';
import { ProductItem } from '@/data/products';
import { CATEGORIES } from '@/data/categories';
import { Locale } from '@/lib/translations';
import { siteConfig } from '@/config/site';
import { ProductCard } from './ProductCard';

interface CatalogueBrowserProps {
  products: ProductItem[];
  locale: Locale;
}

function CatalogueBrowserContent({ products, locale }: CatalogueBrowserProps) {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam || 'all');
  const isNe = locale === 'ne';

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  // Filter products based on search term (in both languages and tags) and category
  const filteredProducts = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    return products.filter((item) => {
      // Category match
      const categoryMatch = selectedCategory === 'all' || item.categoryId === selectedCategory;
      if (!categoryMatch) return false;

      // Search match
      if (!q) return true;

      const titleEn = item.name.en.toLowerCase();
      const titleNe = item.name.ne.toLowerCase();
      const descEn = item.description.en.toLowerCase();
      const descNe = item.description.ne.toLowerCase();
      const brand = item.brand ? item.brand.toLowerCase() : '';
      const tags = item.tags.map((t) => t.toLowerCase());

      return (
        titleEn.includes(q) ||
        titleNe.includes(q) ||
        descEn.includes(q) ||
        descNe.includes(q) ||
        brand.includes(q) ||
        tags.some((t) => t.includes(q))
      );
    });
  }, [products, searchQuery, selectedCategory]);

  const handleReset = () => {
    setSearchQuery('');
    setSelectedCategory('all');
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Search & Category Filter Controls */}
      <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4 sm:space-y-5">
        {/* Search Bar - text-base (16px) prevents iOS Safari auto-zooming */}
        <div className="relative">
          <label htmlFor="catalogue-search-input" className="sr-only">
            {isNe ? 'क्याटलग खोजी' : 'Search Catalogue'}
          </label>
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <Search className="w-5 h-5" />
          </div>
          <input
            id="catalogue-search-input"
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              isNe
                ? 'सामग्री, उपकरण वा श्रेणी खोज्नुहोस् (उदा: अक्सिजन, सीबीसी, पञ्जा)...'
                : 'Search products by name or keyword (e.g. oxygen, centrifuge, gloves)...'
            }
            className="w-full min-h-[48px] pl-11 pr-12 py-3 rounded-xl border border-slate-300 text-base focus:outline-none focus:ring-2 focus:ring-[#15803D] focus:border-[#15803D] transition-all bg-slate-50/50"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-3 min-w-[44px] min-h-[44px] flex items-center justify-center text-slate-400 hover:text-slate-700"
              aria-label={isNe ? 'खोजी खाली गर्नुहोस्' : 'Clear Search'}
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div>
          <div className="flex items-center gap-2 mb-2.5 text-xs font-bold text-slate-600 uppercase tracking-wider">
            <Filter className="w-3.5 h-3.5 text-[#15803D]" />
            <span>{isNe ? 'श्रेणी अनुसार फिल्टर गर्नुहोस्' : 'Filter by Category'}</span>
          </div>

          <div
            className="flex flex-wrap gap-2 pt-1"
            role="group"
            aria-label="Product Category Filters"
          >
            {/* All Category Button */}
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`min-h-[44px] px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center ${
                selectedCategory === 'all'
                  ? 'bg-[#15803D] text-white shadow-xs font-bold'
                  : 'bg-[#F0FDF4] text-[#15803D] border border-[#DCFCE7] hover:bg-[#DCFCE7]'
              }`}
              aria-pressed={selectedCategory === 'all'}
            >
              {isNe ? 'सबै सामग्रीहरू' : 'All Products'} ({products.length})
            </button>

            {/* Individual Categories */}
            {CATEGORIES.map((cat) => {
              const catCount = products.filter((p) => p.categoryId === cat.id).length;
              const isSelected = selectedCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`min-h-[44px] px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center ${
                    isSelected
                      ? 'bg-[#15803D] text-white shadow-xs font-bold'
                      : 'bg-[#F0FDF4] text-[#15803D] border border-[#DCFCE7] hover:bg-[#DCFCE7]'
                  }`}
                  aria-pressed={isSelected}
                >
                  {isNe ? cat.name.ne : cat.name.en} ({catCount})
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Result Meta Bar with Accessible Status Announcement */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm text-slate-600 px-1">
        <div
          role="status"
          aria-live="polite"
          className="font-semibold text-slate-800"
        >
          {isNe ? (
            <span>
              कुल <strong className="text-[#15803D] font-bold">{filteredProducts.length}</strong> वटा सामग्री उपलब्ध
            </span>
          ) : (
            <span>
              Showing <strong className="text-[#15803D] font-bold">{filteredProducts.length}</strong> product{filteredProducts.length === 1 ? '' : 's'}
            </span>
          )}
        </div>

        {(searchQuery || selectedCategory !== 'all') && (
          <button
            type="button"
            onClick={handleReset}
            className="min-h-[44px] inline-flex items-center gap-1.5 text-[#15803D] hover:text-[#166534] font-bold underline underline-offset-4 text-xs sm:text-sm"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>{isNe ? 'फिल्टर रिसेट गर्नुहोस्' : 'Reset Filters'}</span>
          </button>
        )}
      </div>

      {/* Product Grid: 1 col on narrow mobile, 2 on tablet/small mobile, 3 on laptops, 4 on desktop */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              locale={locale}
              priority={index < 4}
            />
          ))}
        </div>
      ) : (
        /* Empty Search / Filter State */
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-12 text-center space-y-4 max-w-lg mx-auto shadow-xs">
          <div className="w-14 h-14 rounded-full bg-green-50 text-[#15803D] flex items-center justify-center mx-auto">
            <AlertCircle className="w-7 h-7" />
          </div>
          <h3 className="font-heading font-bold text-lg text-[#17251C]">
            {isNe ? 'कुनै सामग्री फेला परेन' : 'No matching products found'}
          </h3>
          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
            {isNe
              ? 'तपाईंले खोज्नुभएको सामग्री हाम्रो अनलाइन क्याटलगमा भेटिएन। कृपया अन्य शब्द प्रयोग गर्नुहोस् वा सिधै फोन गरेर उपलब्धता बुझ्नुहोस्।'
              : 'We could not find items matching your search criteria. You may reset the filters or call us directly to inquire about specific items.'}
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={handleReset}
              className="w-full sm:w-auto min-h-[44px] px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-semibold flex items-center justify-center"
            >
              {isNe ? 'फिल्टर हटाउनुहोस्' : 'Reset Search & Filters'}
            </button>
            <a
              href={`tel:${siteConfig.phone.raw}`}
              className="w-full sm:w-auto min-h-[44px] px-5 py-2.5 rounded-xl bg-[#15803D] hover:bg-[#166534] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 shadow-xs"
            >
              <Phone className="w-3.5 h-3.5 text-white" />
              <span>{isNe ? 'फोन सोधपुछ (+९७७ ५६-५७२०६०)' : 'Call +977 56-572060'}</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export function CatalogueBrowser(props: CatalogueBrowserProps) {
  return (
    <Suspense fallback={<div className="p-8 text-center text-xs text-slate-400">Loading catalogue...</div>}>
      <CatalogueBrowserContent {...props} />
    </Suspense>
  );
}
