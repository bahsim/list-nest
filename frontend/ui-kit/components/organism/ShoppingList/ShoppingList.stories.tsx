import * as React from 'react';
import { ShoppingList } from './ShoppingList';
import type { Meta, StoryObj } from '@storybook/react';
import type { ShoppingListItem } from '../../types';

const mockItems: ShoppingListItem[] = [
  {
    id: '1',
    name: 'Milk',
    quantity: '2L',
    estimatedPrice: 3.5,
    category: 'Dairy',
    isCurrent: true,
    isBought: false,
    isDeleted: false,
    addedBy: '1',
    addedAt: new Date(),
    unit: 'L',
    currency: 'USD',
  },
  {
    id: '2',
    name: 'Bread',
    quantity: '1',
    estimatedPrice: 2.0,
    category: 'Bakery',
    isCurrent: false,
    isBought: true,
    isDeleted: false,
    addedBy: '2',
    addedAt: new Date(),
    unit: 'pcs',
    currency: 'USD',
  },
  {
    id: '3',
    name: 'Beer',
    quantity: '1',
    estimatedPrice: 10,
    category: 'Alcohol',
    isCurrent: true,
    isBought: false,
    isDeleted: true,
    addedBy: '3',
    addedAt: new Date(),
    unit: 'L',
    currency: 'USD',
  },
];

const meta: Meta<typeof ShoppingList> = {
  title: 'organism/ShoppingList',
  component: ShoppingList,
};
export default meta;

type Story = StoryObj<typeof ShoppingList>;

export const Default: Story = {
  args: {
    items: mockItems,
    onEdit: () => {},
    onDelete: () => {},
    onToggleBought: () => {},
    onToggleCurrent: () => {},
  },
}; 