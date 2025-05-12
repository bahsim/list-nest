import * as React from 'react';
import type { ShoppingListItem } from '@ui-kit/components/types';
import type { SxProps, Theme } from '@mui/material/styles';
import { BaseList } from '../base-list/base-list';
import { ShoppingListItemCard } from './shopping-list-item-card';

/**
 * ShoppingList component for displaying a list of shopping items using BaseList.
 * @param items - Array of shopping list items.
 * @param onEdit - Edit handler.
 * @param onDelete - Delete handler.
 * @param onToggleBought - Mark as bought handler.
 * @param onToggleCurrent - Toggle current handler.
 * @param onRestore - Restore handler.
 * @param expandedItemId - ID of the expanded item.
 * @param onExpandItem - Handler to expand an item.
 */
export interface ShoppingListProps {
  items: ShoppingListItem[];
  onEdit: (item: ShoppingListItem) => void;
  onDelete: (item: ShoppingListItem) => void;
  onToggleBought: (item: ShoppingListItem) => void;
  onToggleCurrent: (item: ShoppingListItem) => void;
  onRestore?: (item: ShoppingListItem) => void;
  expandedItemId: string | null;
  onExpandItem: (id: string) => void;
  sx?: SxProps<Theme>;
}

export const ShoppingList: React.FC<ShoppingListProps> = ({
  items,
  onEdit,
  onDelete,
  onToggleBought,
  onToggleCurrent,
  onRestore,
  expandedItemId,
  onExpandItem,
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
    <BaseList
      items={sortedItems}
      renderItem={(item) => (
        <ShoppingListItemCard
          item={item}
          onEdit={() => onEdit(item)}
          onDelete={() => onDelete(item)}
          onToggleBought={() => onToggleBought(item)}
          onToggleCurrent={() => onToggleCurrent(item)}
          onRestore={() => onRestore?.(item)}
          onUnmarkCurrent={() => onToggleCurrent(item)}
          isExpanded={expandedItemId === item.id}
          onExpand={() => onExpandItem(item.id)}
        />
      )}
      sx={sx}
    />
  );
};
