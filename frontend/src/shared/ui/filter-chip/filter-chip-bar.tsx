import React from 'react';
import { Box, useTheme, alpha } from '@mui/material';
import { alpha as muiAlpha } from '@mui/material/styles';

interface FilterChipBarProps {
  children: React.ReactNode;
  className?: string;
}

export const FilterChipBar: React.FC<FilterChipBarProps> = ({ children, className }) => {
  const theme = useTheme();
  return (
    <Box sx={{ mt: 1, px: 1, maxWidth: 600, width: '100%' }} className={className}>
      <Box
        sx={{
          border: (theme) => `0.5px solid ${muiAlpha(theme.palette.divider, 0.3)}`,
          background: alpha(theme.palette.secondary.light, theme.highlightAlpha),
          borderRadius: 2,
          py: 1,
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: theme.spacing(1),
          px: 1.5,
        }}
      >
        {children}
      </Box>
    </Box>
  );
}; 