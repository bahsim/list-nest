import React from 'react';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import { alpha, useTheme } from '@mui/material/styles';
import { getCategoryValue } from '@/shared/utils/list-utils';

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
}) => {
  const theme = useTheme();
  return (
    <Box sx={{ mx: 1 }}>
      <Box
        sx={{
          border: '0.5px solid rgba(146,122,125,0.3)',
          borderRadius: 2,
          background: alpha(theme.palette.secondary.light, theme.highlightAlpha),
          display: 'flex',
          flexWrap: 'wrap',
          gap: theme.spacing(1),
          py: 1,
          px: 1.5,
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
              borderTopLeftRadius: theme.shape.borderRadius / 0.8,
              borderBottomLeftRadius: theme.shape.borderRadius / 0.8,
              borderTopRightRadius: theme.shape.borderRadius / 0.8,
              borderBottomRightRadius: theme.shape.borderRadius / 0.8,
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