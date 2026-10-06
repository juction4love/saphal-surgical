import { PRODUCTS } from '@/data/products';

const catalogueSlugs = new Set(PRODUCTS.map((product) => product.slug));

export interface OrderLine {
  slug: string;
  quantity: number;
}

export const ORDER_STORAGE_KEY = 'saphal-surgical-order';
export const ORDER_UPDATED_EVENT = 'saphal-surgical-order-updated';
export const LEGACY_CUSTOMER_STORAGE_KEY = 'saphal-surgical-order-customer';

export function readOrder(): OrderLine[] {
  try {
    window.localStorage.removeItem(LEGACY_CUSTOMER_STORAGE_KEY);
    const value = window.localStorage.getItem(ORDER_STORAGE_KEY);
    if (!value) return [];

    const parsed: unknown = JSON.parse(value);
    if (!Array.isArray(parsed)) {
      throw new TypeError('Saved order must be an array');
    }

    const sanitized = parsed.filter((line): line is OrderLine => (
      typeof line === 'object'
      && line !== null
      && typeof line.slug === 'string'
      && catalogueSlugs.has(line.slug)
      && Number.isSafeInteger(line.quantity)
      && line.quantity > 0
    )).map(({ slug, quantity }) => ({ slug, quantity }));

    const unique = new Map<string, OrderLine>();
    for (const line of sanitized) {
      const previous = unique.get(line.slug);
      const quantity = (previous?.quantity ?? 0) + line.quantity;
      if (Number.isSafeInteger(quantity)) unique.set(line.slug, { slug: line.slug, quantity });
    }
    const selections = [...unique.values()];

    if (JSON.stringify(parsed) !== JSON.stringify(selections)) {
      window.localStorage.setItem(ORDER_STORAGE_KEY, JSON.stringify(selections));
    }
    return selections;
  } catch (error) {
    console.error('Unable to read the saved order from browser storage.', error);
    return [];
  }
}

export function writeOrder(lines: OrderLine[]): void {
  if (lines.some((line) => !catalogueSlugs.has(line.slug) || !Number.isSafeInteger(line.quantity) || line.quantity < 1)
    || new Set(lines.map((line) => line.slug)).size !== lines.length) {
    throw new RangeError('Order quantities must be positive safe integers.');
  }
  const selections = lines.map(({ slug, quantity }) => ({ slug, quantity }));
  window.localStorage.setItem(ORDER_STORAGE_KEY, JSON.stringify(selections));
  window.dispatchEvent(new CustomEvent(ORDER_UPDATED_EVENT));
}
