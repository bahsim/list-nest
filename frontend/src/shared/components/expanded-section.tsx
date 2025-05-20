import * as React from 'react';
import { Box } from '@mui/material';
import { SectionDivider } from '@ui-kit/components/atomic/SectionDivider';

export interface ExpandedSectionProps {
  children: React.ReactNode;
  dividerProps?: object;
  sx?: object;
}

export const ExpandedSection: React.FC<ExpandedSectionProps> = ({ children, dividerProps, sx }) => (
  <Box
    sx={{
      width: '100%',
      px: 2,
      pb: 1,
      display: 'flex',
      flexDirection: 'column',
      ...sx,
    }}
  >
    <SectionDivider {...dividerProps} />
    {children}
  </Box>
); 