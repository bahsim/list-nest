import React from 'react';
import { getCategoryValue } from '@/shared/utils/list-utils';
import { FilterChip } from '../filter-chip/filter-chip';
import { FilterChipBar } from '../filter-chip/filter-chip-bar';
import { getCategoryColorByName } from '@/shared/utils/category-color';
import { Category } from '@/shared/types/category';

interface CategoryFilterChipsProps {
  categories: Category[];
  selectedCategories: string[];
  onToggleCategory: (category: string) => void;
}
/**
 * Renders filter chips for categories with a brand-style group container and label.
 */
export const CategoryFilterChips: React.FC<CategoryFilterChipsProps> = ({
  categories,
  selectedCategories = [],
  onToggleCategory,
}) => (
  <FilterChipBar>
    {categories.map((category) => (
      <FilterChip
        key={category.name}
        label={category.name}
        color="secondary"
        sx={{
          border: `2px solid ${getCategoryColorByName(categories, category.name)}`,
        }}
        selected={selectedCategories.includes(getCategoryValue(category.name))}
        onClick={() => onToggleCategory(getCategoryValue(category.name))}
      />
    ))}
  </FilterChipBar>
);
