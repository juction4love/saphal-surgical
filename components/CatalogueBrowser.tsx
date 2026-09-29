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
      const tags = item.tags.map((t) => t.toLowerCase());

      return (
        titleEn.includes(q) ||
        titleNe.includes(q) ||
        descEn.includes(q) ||
        descNe.includes(q) ||
        tags.some((t) => t.includes(q))
      );
    });
  }, [products, searchQuery, selectedCategory]);

  const handleReset = () => {
    setSearchQuery('');
    setSelectedCategory('all');
  };

  return (
    <div className="space-y-8">
      {/* Search & Category Filter Controls */}
      <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-5">
        {/* Search Bar */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <Search className="w-5 h-5" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              isNe
                ? 'सामग्री, उपकरण वा श्रेणी खोज्नुहोस् (उदा: अक्सिजन, सीबीसी, पञ्जा, Autoclave)...'
                : 'Search products by name or keyword (e.g. oxygen, centrifuge, gloves, monitor)...'
            }
            className="w-full pl-10 pr-10 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 transition-all bg-slate-50/50"
            aria-label="Search Catalogue"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
              aria-label="Clear Search"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div>
          <div className="flex items-center gap-2 mb-3 text-xs font-bold text-slate-500 uppercase tracking-wider">
            <Filter className="w-3.5 h-3.5" />
            <span>{isNe ? 'श्रेणी अनुसार फिल्टर गर्नुहोस्' : 'Filter by Category'}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {/* All Category Button */}
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === 'all'
                  ? 'bg-navy-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
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
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                    isSelected
                      ? 'bg-teal-700 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {isNe ? cat.name.ne : cat.name.en} ({catCount})
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Result Meta Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 px-1">
        <div className="font-semibold text-slate-700">
          {isNe ? (
            <span>
              कुल <strong className="text-teal-800 font-bold">{filteredProducts.length}</strong> वटा सामग्री फेला पर्‍यो
            </span>
          ) : (
            <span>
              Showing <strong className="text-teal-800 font-bold">{filteredProducts.length}</strong> product{filteredProducts.length === 1 ? '' : 's'}
            </span>
          )}
        </div>
        {(searchQuery || selectedCategory !== 'all') && (
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 text-teal-700 hover:text-teal-900 font-semibold underline underline-offset-4"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>{isNe ? 'फिल्टर रिसेट गर्नुहोस्' : 'Reset Filters'}</span>
          </button>
        )}
      </div>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} locale={locale} />
          ))}
        </div>
      ) : (
        /* Empty Search / Filter State */
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 text-center space-y-4 max-w-lg mx-auto shadow-sm">
          <div className="w-14 h-14 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
            <AlertCircle className="w-7 h-7" />
          </div>
          <h3 className="font-heading font-bold text-lg text-slate-900">
            {isNe ? 'कुनै सामग्री फेला परेन' : 'No matching products found'}
          </h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            {isNe
              ? 'तपाईंले खोज्नुभएको सामग्री हाम्रो अनलाइन क्याटलगमा भेटिएन। कृपया अन्य शब्द प्रयोग गर्नुहोस् वा सिधै फोन गरेर उपलब्धता बुझ्नुहोस्।'
              : 'We could not find items matching your search criteria. You may reset the filters or call us directly to inquire about specific items.'}
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={handleReset}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold"
            >
              {isNe ? 'फिल्टर हटाउनुहोस्' : 'Reset Search & Filters'}
            </button>
            <a
              href={`tel:${siteConfig.phone.raw}`}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-navy-900 hover:bg-teal-800 text-white text-xs font-bold flex items-center justify-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-teal-300" />
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
