import type { ShoppingListItem } from '@ui-kit/components/types';

/**
 * Filter items by selected categories. If none selected, return all.
 */
export function filterByCategory(list: ShoppingListItem[], selectedCategories: string[]): ShoppingListItem[] {
  if (selectedCategories.length === 0) return list;
  return list.filter((item) => selectedCategories.includes(item.category));
}

/**
 * Get unique categories from items list, replacing empty category with 'Other'.
 */
export function getUniqueCategories(items: ShoppingListItem[]): string[] {
  const categories = Array.from(new Set(items.map(item => item.category)));
  return categories.includes('') ? [...categories.filter(c => c !== ''), 'Other'] : categories;
}

/**
 * Map filter chip label to category value.
 */
export function getCategoryValue(label: string): string {
  return label === 'Other' ? '' : label;
}

/**
 * Get sum of estimatedPrice for a group.
 */
export function getGroupSum(group: ShoppingListItem[]): number {
  return group.reduce((sum, item) => sum + (item.estimatedPrice || 0), 0);
} 