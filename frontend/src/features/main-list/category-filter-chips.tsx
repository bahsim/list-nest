import React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import type { CategoryFilterChipsProps } from './types';

/**
 * Renders filter chips for categories.
 */
export const CategoryFilterChips: React.FC<CategoryFilterChipsProps> = ({
  categories,
  selectedCategories,
  onToggleCategory,
  getCategoryValue,
}) => (
  <Stack
    direction="row"
    spacing={1}
    rowGap={2}
    sx={{ mb: 0, flexWrap: 'wrap', maxWidth: 600, width: '100%', justifyContent: 'center', px: 4 }}
  >
    {categories.map((label) => (
      <Chip
        key={label}
        label={label}
        clickable
        color={selectedCategories.includes(getCategoryValue(label)) ? 'primary' : 'default'}
        variant={selectedCategories.includes(getCategoryValue(label)) ? 'filled' : 'outlined'}
        onClick={() => onToggleCategory(getCategoryValue(label))}
        sx={{ mb: 0 }}
      />
    ))}
  </Stack>
);

export default CategoryFilterChips; 