'use client';

import React, { useState } from 'react';
import { Check, Plus } from 'lucide-react';
import { Locale } from '@/lib/translations';
import { readOrder, writeOrder } from '@/lib/order';

interface AddToOrderButtonProps {
  productSlug: string;
  productName: string;
  locale: Locale;
  compact?: boolean;
}

export function AddToOrderButton({
  productSlug,
  productName,
  locale,
  compact = false,
}: AddToOrderButtonProps) {
  const [added, setAdded] = useState(false);
  const [error, setError] = useState('');
  const isNe = locale === 'ne';

  const addProduct = () => {
    try {
      const lines = readOrder();
      const existing = lines.find((line) => line.slug === productSlug);
      if (existing && existing.quantity >= Number.MAX_SAFE_INTEGER) {
        throw new RangeError('The product quantity reached the largest supported whole number.');
      }
      const next = existing
        ? lines.map((line) => line.slug === productSlug
          ? { ...line, quantity: line.quantity + 1 }
          : line)
        : [...lines, { slug: productSlug, quantity: 1 }];

      writeOrder(next);
      setError('');
      setAdded(true);
      window.setTimeout(() => setAdded(false), 1800);
    } catch (cause) {
      console.error('Unable to add this product to the saved order.', cause);
      setError(isNe ? 'अर्डरमा थप्न सकिएन' : 'Could not add to order');
    }
  };

  return (
    <div className="flex min-w-0 flex-col items-stretch">
      <button
        type="button"
        onClick={addProduct}
        className={`min-h-[44px] ${compact ? 'px-2.5 text-xs' : 'px-4 text-sm'} py-2 font-bold text-white bg-[#15803D] hover:bg-[#166534] rounded-xl transition-colors flex items-center justify-center gap-1.5 focus-visible:ring-2 focus-visible:ring-[#15803D] focus-visible:ring-offset-2`}
        aria-label={`${isNe ? 'अर्डरमा थप्नुहोस्' : 'Add to order'}: ${productName}`}
      >
        {added ? <Check className="w-4 h-4 shrink-0" /> : <Plus className="w-4 h-4 shrink-0" />}
        <span>{added ? (isNe ? 'थपियो' : 'Added') : (isNe ? 'अर्डरमा थप्नुहोस्' : 'Add to order')}</span>
      </button>
      {error && <span role="status" className="mt-1 text-center text-[11px] text-red-700">{error}</span>}
    </div>
  );
}
