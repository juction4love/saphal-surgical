import { PRODUCTS } from '@/data/products';

// A cover is a real example belonging to the category, never a fabricated
// category-wide product range. Its original attribution remains attached.
export function getCategoryPhoto(categoryId: string) {
  return PRODUCTS.find(product => product.image.url && (
    product.categoryId === categoryId || product.additionalCategoryIds?.includes(categoryId)
  ));
}
