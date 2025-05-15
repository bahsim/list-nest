import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

interface GroupHeaderProps {
  label: string;
  sum: number;
}

export const GroupHeader: React.FC<GroupHeaderProps> = ({ label, sum }) => (
  <Box sx={{ width: '100%', maxWidth: 600, px: 1.5, display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 0.5, mb: 0.5 }}>
    <Typography variant="subtitle2" color="text.secondary">{label}</Typography>
    <Typography variant="subtitle2" color="text.secondary">${sum}</Typography>
  </Box>
); 