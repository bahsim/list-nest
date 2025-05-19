import { useState, useMemo } from 'react';
import { filterByCategory, getUniqueCategories } from '@/shared/utils/list-utils';

export function useCategoryFilter<T>(items: T[], getCategory: (item: T) => string) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleToggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    );
  };

  const filteredItemsByCategory = useMemo(
    () => filterByCategory(items, selectedCategories, getCategory),
    [items, selectedCategories, getCategory],
  );

  const uniqueCategories = useMemo(
    () => getUniqueCategories(items, getCategory),
    [items, getCategory],
  );

  return {
    selectedCategories,
    handleToggleCategory,
    filteredItemsByCategory,
    uniqueCategories,
  };
} 