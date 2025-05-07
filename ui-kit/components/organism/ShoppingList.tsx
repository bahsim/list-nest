import * as React from 'react';
import type { ShoppingListItem } from '../types';
import { ShoppingListItemCard } from '../molecule/ShoppingListItemCard';

/**
 * ShoppingList component for displaying a list of shopping items.
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
}

export const ShoppingList: React.FC<ShoppingListProps> = ({ items, onEdit, onDelete, onToggleBought, onToggleFocus }) => (
  <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
    {items.map(item => (
      <li key={item.id} style={{ marginBottom: 8 }}>
        <ShoppingListItemCard
          item={item}
          onEdit={() => onEdit(item)}
          onDelete={() => onDelete(item)}
          onToggleBought={() => onToggleBought(item)}
          onToggleFocus={() => onToggleFocus(item)}
        />
      </li>
    ))}
  </ul>
); 