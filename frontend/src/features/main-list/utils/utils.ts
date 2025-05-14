import type { MainListItem } from '../types';

/**
 * Filter items by selected categories. If none selected, return all.
 */
export function filterByCategory(list: MainListItem[], selectedCategories: string[]): MainListItem[] {
  if (selectedCategories.length === 0) return list;
  return list.filter((item) => selectedCategories.includes(item.category));
}

/**
 * Get unique categories from items list, replacing empty category with 'Other'.
 */
export function getUniqueCategories(items: MainListItem[]): string[] {
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
export function getGroupSum(group: MainListItem[]): number {
  return group.reduce((sum, item) => sum + (item.estimatedPrice || 0), 0);
} 