import React from 'react';
import { ShoppingListItemCard } from './ShoppingListItemCard';
import type { ShoppingListItem } from '../../types';

/**
 * Storybook stories for ShoppingListItemCard (MUI version)
 * Shows all main states: default, focused, bought, focused+bought
 */
export default {
  title: 'molecule/ShoppingListItemCard',
  component: ShoppingListItemCard,
};

const baseItem: ShoppingListItem = {
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
    item={baseItem}
    onEdit={() => {}}
    onDelete={() => {}}
    onToggleBought={() => {}}
    onToggleFocus={() => {}}
  />
);

export const Focused = () => (
  <ShoppingListItemCard
    item={{ ...baseItem, isFocused: true }}
    onEdit={() => {}}
    onDelete={() => {}}
    onToggleBought={() => {}}
    onToggleFocus={() => {}}
  />
);

export const Bought = () => (
  <ShoppingListItemCard
    item={{ ...baseItem, isBought: true }}
    onEdit={() => {}}
    onDelete={() => {}}
    onToggleBought={() => {}}
    onToggleFocus={() => {}}
  />
);

export const FocusedAndBought = () => (
  <ShoppingListItemCard
    item={{ ...baseItem, isFocused: true, isBought: true }}
    onEdit={() => {}}
    onDelete={() => {}}
    onToggleBought={() => {}}
    onToggleFocus={() => {}}
  />
); 