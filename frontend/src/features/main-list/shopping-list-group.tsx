import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ShoppingList } from './shopping-list';
import type { ShoppingListGroupProps } from './types';

/**
 * Renders a group label, sum, and ShoppingList.
 */
export const ShoppingListGroup: React.FC<ShoppingListGroupProps> = ({
  label,
  items,
  groupSum,
  onEdit,
  onDelete,
  onToggleBought,
  onToggleCurrent,
  onRestore,
  sx,
}) => {
  if (items.length === 0) return null;
  return (
    <>
      <Box
        sx={{
          width: '100%',
          maxWidth: 600,
          px: 1.5,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mt: 0.5,
          mb: 0.5,
        }}
      >
        <Typography variant="subtitle2" color="text.secondary">
          {label}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
          ${groupSum}
        </Typography>
      </Box>
      <ShoppingList
        items={items}
        sx={{ width: '100%', maxWidth: 600, px: 1, ...sx }}
        onEdit={onEdit}
        onDelete={onDelete}
        onToggleBought={onToggleBought}
        onToggleCurrent={onToggleCurrent}
        onRestore={onRestore}
      />
    </>
  );
};

export default ShoppingListGroup;
