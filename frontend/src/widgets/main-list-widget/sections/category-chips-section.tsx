import React from 'react';
import { CategoryFilterChips } from '@/features/main-list/components/category-filter-chips';

interface CategoryChipsSectionProps {
  show: boolean;
  uniqueCategories: string[];
  selectedCategories: string[];
  onToggleCategory: (category: string) => void;
  getCategoryValue: (cat: string) => string;
}

export const CategoryChipsSection: React.FC<CategoryChipsSectionProps> = ({ show, uniqueCategories, selectedCategories, onToggleCategory, getCategoryValue }) => (
  show ? (
    <CategoryFilterChips
      categories={uniqueCategories}
      selectedCategories={selectedCategories}
      onToggleCategory={onToggleCategory}
      getCategoryValue={getCategoryValue}
    />
  ) : null
); 