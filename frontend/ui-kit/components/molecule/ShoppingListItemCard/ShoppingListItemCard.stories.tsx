import React from 'react';
import { ShoppingListItemCard } from './ShoppingListItemCard';
import type { ShoppingListItem } from '../../types';

/**
 * Storybook stories for ShoppingListItemCard (MUI version)
 * Shows all main states: default, current, bought, current+bought
 */
export default {
  title: 'molecule/ShoppingListItemCard',
  component: ShoppingListItemCard,
};

const baseItem: ShoppingListItem = {
  id: '1',
  name: 'Bread',
  quantity: '1',
  unit: 'pcs',
  estimatedPrice: 2.0,
  currency: 'USD',
  category: 'Bakery',
  isCurrent: false,
  isBought: false,
  isDeleted: false,
  addedBy: 'user-1',
  addedAt: new Date(),
};

export const Basic = () => (
  <ShoppingListItemCard
    item={baseItem}
    onEdit={() => {}}
    onDelete={() => {}}
    onToggleBought={() => {}}
    onToggleCurrent={() => {}}
  />
);

export const Current = () => (
  <ShoppingListItemCard
    item={{ ...baseItem, isCurrent: true }}
    onEdit={() => {}}
    onDelete={() => {}}
    onToggleBought={() => {}}
    onToggleCurrent={() => {}}
  />
);

export const Bought = () => (
  <ShoppingListItemCard
    item={{ ...baseItem, isBought: true }}
    onEdit={() => {}}
    onDelete={() => {}}
    onToggleBought={() => {}}
    onToggleCurrent={() => {}}
  />
);

export const CurrentAndBought = () => (
  <ShoppingListItemCard
    item={{ ...baseItem, isCurrent: true, isBought: true }}
    onEdit={() => {}}
    onDelete={() => {}}
    onToggleBought={() => {}}
    onToggleCurrent={() => {}}
  />
); 