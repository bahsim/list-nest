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
 * @param onToggleCurrent - Toggle current handler.
 * @param onRestore - Restore handler.
 */
export interface ShoppingListProps {
  items: ShoppingListItem[];
  onEdit: (item: ShoppingListItem) => void;
  onDelete: (item: ShoppingListItem) => void;
  onToggleBought: (item: ShoppingListItem) => void;
  onToggleCurrent: (item: ShoppingListItem) => void;
  onRestore?: (item: ShoppingListItem) => void;
  sx?: SxProps<Theme>;
}

export const ShoppingList: React.FC<ShoppingListProps> = ({
  items,
  onEdit,
  onDelete,
  onToggleBought,
  onToggleCurrent,
  onRestore,
  sx,
}) => {

  const getPriority = (item: ShoppingListItem): number => {
    if (!item.isBought && !item.isDeleted) return 1; // Normal
    if (item.isBought && !item.isDeleted) return 2;  // Bought
    if (!item.isBought && item.isDeleted) return 3;  // Deleted
    return 4; // fallback for any other case
  };
  
  const sortedItems = [...items].sort((a, b) => getPriority(a) - getPriority(b));

  return (
    <List sx={sx} disablePadding>
      {sortedItems.map((item) => (
        <ListItem key={item.id} disableGutters disablePadding sx={{ display: 'block' }}>
          <ShoppingListItemCard
            item={item}
            onEdit={() => onEdit(item)}
            onDelete={() => onDelete(item)}
            onToggleBought={() => onToggleBought(item)}
            onToggleCurrent={() => onToggleCurrent(item)}
            onUnmarkCurrent={() => onToggleCurrent(item)}
            onRestore={() => (onRestore ? onRestore(item) : undefined)}
          />
        </ListItem>
      ))}
    </List>
  );
};
