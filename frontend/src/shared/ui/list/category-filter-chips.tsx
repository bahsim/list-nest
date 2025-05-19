import React from 'react';
import { getCategoryValue } from '@/shared/utils/list-utils';
import { FilterChip } from '../filter-chip/filter-chip';
import { FilterChipBar } from '../filter-chip/filter-chip-bar';
import { getCategoryColorByName } from '@/features/main-list/utils/mock-data';

interface CategoryFilterChipsProps {
  categories: string[];
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
    {categories.map((label) => (
      <FilterChip
        key={label}
        label={label}
        color="secondary"
        sx={{
          border: `2px solid ${getCategoryColorByName(label)}`,
        }}
        selected={selectedCategories.includes(getCategoryValue(label))}
        onClick={() => onToggleCategory(getCategoryValue(label))}
      />
    ))}
  </FilterChipBar>
);
