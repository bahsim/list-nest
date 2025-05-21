import { useState, useMemo } from 'react';
import { filterByCategory, getUniqueCategories } from '@/shared/utils/list-utils';
import { Category } from '@/shared/types/category';

export function useCategoryFilter<T>(categories: Category[], items: T[], getCategory: (item: T) => string) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    );
  };

  const filteredItemsByCategory = useMemo(
    () => filterByCategory(items, selectedCategories, getCategory),
    [items, selectedCategories, getCategory],
  );

  const uniqueCategories = useMemo(
    () => getUniqueCategories(categories, items, getCategory),
    [items, getCategory],
  );

  return {
    selectedCategories,
    toggleCategory,
    filteredItemsByCategory,
    uniqueCategories,
  };
} 