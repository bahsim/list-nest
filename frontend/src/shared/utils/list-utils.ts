/**
 * Filter items by a category field. If none selected, return all.
 */
export function filterByCategory<T>(
  list: T[],
  selectedCategories: string[],
  getCategory: (item: T) => string,
): T[] {
  if (selectedCategories.length === 0) return list;
  return list.filter((item) => selectedCategories.includes(getCategory(item)));
}

/**
 * Get unique categories from items list, replacing empty category with 'Other'.
 */
export function getUniqueCategories<T>(items: T[], getCategory: (item: T) => string): string[] {
  const categories = Array.from(new Set(items.map(getCategory)));
  return categories.includes('') ? [...categories.filter((c) => c !== ''), 'Other'] : categories;
}

/**
 * Map filter chip label to category value.
 */
export function getCategoryValue(label: string): string {
  return label === 'Other' ? '' : label;
}

/**
 * Get sum of a numeric field for a group.
 */
export function getGroupSum<T>(group: T[], getValue: (item: T) => number | undefined): number {
  return group.reduce((sum, item) => sum + (getValue(item) || 0), 0);
}
