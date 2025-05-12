import React from 'react';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import type { CategoryFilterChipsProps } from './types';

/**
 * Renders filter chips for categories with a brand-style group container and label.
 */
export const CategoryFilterChips: React.FC<CategoryFilterChipsProps> = ({
  categories,
  selectedCategories,
  onToggleCategory,
  getCategoryValue,
}) => {
  const theme = useTheme();
  return (
    <Box sx={{ mx: 1 }}>
      <Box
        sx={{
          border: '0.5px solid rgba(146,122,125,0.3)',
          borderRadius: theme.shape.borderRadius / 5*2,
          display: 'flex',
          flexWrap: 'wrap',
          gap: theme.spacing(1),
          py: 1,
          px: 1.5,
          bgcolor: 'var(--color-bg-alt)',
          maxWidth: 600,
          width: '100%',
          alignItems: 'center',
          position: 'relative',
        }}
        role="tablist"
        aria-label="Filter by category"
      >
        {categories.map((label) => (
          <Chip
            key={label}
            label={label}
            clickable
            color={undefined}
            variant={selectedCategories.includes(getCategoryValue(label)) ? 'filled' : 'outlined'}
            onClick={() => onToggleCategory(getCategoryValue(label))}
            sx={{
              mb: 0,
              fontWeight: selectedCategories.includes(getCategoryValue(label)) ? 700 : 400,
              bgcolor: selectedCategories.includes(getCategoryValue(label))
                ? 'var(--color-primary-alt)'
                : 'var(--color-bg-alt)',
              color: selectedCategories.includes(getCategoryValue(label))
                ? 'var(--color-bg-alt)'
                : 'var(--color-dark-alt)',
              border: selectedCategories.includes(getCategoryValue(label))
                ? '2px solid var(--color-primary)'
                : '0.5px solid var(--color-category-mauve)',
              '&:focus-visible': {
                borderColor: selectedCategories.includes(getCategoryValue(label))
                  ? 'var(--color-primary)'
                  : 'var(--color-secondary)',
                outline: 'none',
                bgcolor: selectedCategories.includes(getCategoryValue(label))
                  ? 'var(--color-primary-alt)'
                  : 'var(--color-bg-alt)',
                color: selectedCategories.includes(getCategoryValue(label))
                  ? 'var(--color-bg-alt)'
                  : 'var(--color-dark-alt)',
              },
              '&.Mui-focusVisible': {
                borderColor: selectedCategories.includes(getCategoryValue(label))
                  ? 'var(--color-primary)'
                  : 'var(--color-secondary)',
                outline: 'none',
                bgcolor: selectedCategories.includes(getCategoryValue(label))
                  ? 'var(--color-primary-alt)'
                  : 'var(--color-bg-alt)',
                color: selectedCategories.includes(getCategoryValue(label))
                  ? 'var(--color-bg-alt)'
                  : 'var(--color-dark-alt)',
              },
              '&:active': {
                bgcolor: selectedCategories.includes(getCategoryValue(label))
                  ? 'var(--color-primary-alt)'
                  : 'var(--color-bg-alt)',
                color: selectedCategories.includes(getCategoryValue(label))
                  ? 'var(--color-bg-alt)'
                  : 'var(--color-dark-alt)',
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default CategoryFilterChips; 