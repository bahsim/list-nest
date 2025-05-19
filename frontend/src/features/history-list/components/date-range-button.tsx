import React from 'react';
import { Button, Box, useTheme, alpha } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { FilterChipBar } from '@/shared/ui/filter-chip/filter-chip-bar';

interface DateRangeButtonProps {
  label: string;
  onClick: () => void;
}

export const DateRangeButton: React.FC<DateRangeButtonProps> = ({ label, onClick }) => (
  <FilterChipBar>
    <Button
      variant="outlined"
      color="secondary"
      startIcon={<CalendarMonthIcon />}
      onClick={onClick}
      aria-label={`Select date range: ${label}`}
      sx={{
        borderTopLeftRadius: (theme) => theme.shape.borderRadius / 0.8,
        borderBottomLeftRadius: (theme) => theme.shape.borderRadius / 0.8,
        borderTopRightRadius: (theme) => theme.shape.borderRadius / 0.8,
        borderBottomRightRadius: (theme) => theme.shape.borderRadius / 0.8,
      }}
    >
      {label}
    </Button>
  </FilterChipBar>
);
