import React from 'react';
import Chip from '@mui/material/Chip';
import { useTheme, Theme } from '@mui/material/styles';

export interface FilterChipProps {
  selected: boolean;
  label: string;
  onClick: () => void;
  tabIndex?: number;
  ariaLabel?: string;
  role?: string;
  color?: 'primary' | 'secondary' | 'default';
  variant?: 'filled' | 'outlined';
  sx?: object;
}

const chipSx = (selected: boolean, theme: Theme) => ({
  mb: 0,
  fontWeight: selected ? 700 : 400,
  borderTopLeftRadius: theme.shape.borderRadius / 0.8,
  borderBottomLeftRadius: theme.shape.borderRadius / 0.8,
  borderTopRightRadius: theme.shape.borderRadius / 0.8,
  borderBottomRightRadius: theme.shape.borderRadius / 0.8,
});

export const FilterChip: React.FC<FilterChipProps> = ({
  selected,
  label,
  onClick,
  tabIndex = 0,
  ariaLabel,
  role,
  color = 'secondary',
  variant,
  sx = {},
}) => {
  const theme = useTheme();
  return (
    <Chip
      label={label}
      clickable
      color={color}
      variant={variant || (selected ? 'filled' : 'outlined')}
      onClick={onClick}
      tabIndex={tabIndex}
      aria-label={ariaLabel}
      role={role}
      sx={{ ...chipSx(selected, theme), ...sx }}
    />
  );
}; 