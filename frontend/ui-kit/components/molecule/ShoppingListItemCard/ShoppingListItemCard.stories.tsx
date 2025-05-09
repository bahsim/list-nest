import React from 'react';
import { ShoppingListItemCard } from './ShoppingListItemCard';
import type { ShoppingListItem } from '../../types';

export default {
  title: 'molecule/ShoppingListItemCard',
  component: ShoppingListItemCard,
};

const mockItem: ShoppingListItem = {
  id: '1',
  name: 'Bread',
  quantity: '1',
  estimatedPrice: 2.0,
  category: 'Bakery',
  isFocused: false,
  isBought: false,
  addedBy: 'user-1',
  addedAt: new Date(),
};

export const Basic = () => (
  <ShoppingListItemCard
    item={mockItem}
    onEdit={() => {}}
    onDelete={() => {}}
    onToggleBought={() => {}}
    onToggleFocus={() => {}}
  />
); 