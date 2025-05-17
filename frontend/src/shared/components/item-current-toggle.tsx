import * as React from 'react';
import { Box, Switch } from '@mui/material';
import type { ListItem } from '@/entities/list/types';

export interface ItemCurrentToggleProps {
  item: ListItem;
  onToggle: (item: ListItem) => void;
}

export const ItemCurrentToggle: React.FC<ItemCurrentToggleProps> = ({ item, onToggle }) => (
  <Box
    onClick={e => {
      e.stopPropagation();
      onToggle(item);
    }}
    sx={{
      display: 'flex',
      alignItems: 'center',
      gap: 1,
      cursor: 'pointer',
      userSelect: 'none',
      px: 0.5,
      py: 0.5,
      borderRadius: 2,
      transition: 'background 0.2s',
      '&:hover': { background: 'rgba(25, 118, 210, 0.08)' },
    }}
  >
    <Switch
      checked={item.isCurrent}
      color="primary"
      size="medium"
      slotProps={{ input: { 'aria-label': 'Current toggle' } }}
    />
  </Box>
); 