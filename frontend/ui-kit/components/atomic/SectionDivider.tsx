import React from 'react';
import Divider from '@mui/material/Divider';
import { alpha, SxProps, Theme } from '@mui/material/styles';

export interface SectionDividerProps {
  sx?: SxProps<Theme> | undefined;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({ sx }) => (
  <Divider sx={{ borderColor: (theme) => alpha(theme.palette.divider, 0.3), ...sx }} />
); 