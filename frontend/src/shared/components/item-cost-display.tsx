import * as React from 'react';
import { Box } from '@mui/material';
import type { ListItem } from '@/entities/list/types';
import { formatItemCost } from '@/entities/list';

/**
 * Displays the cost of a list item, styled for use in expanded item views.
 * @param item - The shopping list item.
 */
export interface ItemCostDisplayProps {
  item: ListItem;
  currency: string;
  sx?: object;
}

export const ItemCostDisplay: React.FC<ItemCostDisplayProps> = ({ item, sx, currency }) => (
  <Box
    sx={{
      color: 'text.primary',
      minWidth: 48,
      minHeight: 46,
      textAlign: 'right',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      ml: 1,
      ...sx,
    }}
  >
    {formatItemCost(item, currency)}
  </Box>
); 