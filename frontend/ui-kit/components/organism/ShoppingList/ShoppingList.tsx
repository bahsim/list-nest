import * as React from 'react';
import type { ShoppingListItem } from '../../types';
import { ShoppingListItemCard } from '../../molecule/ShoppingListItemCard/ShoppingListItemCard';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import type { SxProps, Theme } from '@mui/material/styles';

/**
 * ShoppingList component for displaying a list of shopping items using MUI List.
 * @param items - Array of shopping list items.
 * @param onEdit - Edit handler.
 * @param onDelete - Delete handler.
 * @param onToggleBought - Mark as bought handler.
 * @param onToggleFocus - Toggle focus handler.
 */
export interface ShoppingListProps {
  items: ShoppingListItem[];
  onEdit: (item: ShoppingListItem) => void;
  onDelete: (item: ShoppingListItem) => void;
  onToggleBought: (item: ShoppingListItem) => void;
  onToggleFocus: (item: ShoppingListItem) => void;
  sx?: SxProps<Theme>;
}

export const ShoppingList: React.FC<ShoppingListProps> = ({
  items,
  onEdit,
  onDelete,
  onToggleBought,
  onToggleFocus,
  sx,
}) => {
  const sortedItems = items.sort((a, b) => {
    if (a.isFocused && !b.isFocused) return -1;
    if (!a.isFocused && b.isFocused) return 1;
    if (a.isBought && !b.isBought) return 1;
    if (!a.isBought && b.isBought) return -1;
    return a.addedAt.getTime() - b.addedAt.getTime();
  });

  return (
    <List sx={sx} disablePadding>
      {sortedItems.map((item) => (
        <ListItem key={item.id} disableGutters disablePadding sx={{ display: 'block' }}>
          <ShoppingListItemCard
            item={item}
            onEdit={() => onEdit(item)}
            onDelete={() => onDelete(item)}
            onToggleBought={() => onToggleBought(item)}
            onToggleFocus={() => onToggleFocus(item)}
          />
        </ListItem>
      ))}
    </List>
  );
};
