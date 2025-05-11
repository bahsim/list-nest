import React from 'react';
import { PurchasedHistory } from './PurchasedHistory';
import type { HistoryItem } from '../../types';
import { action } from '@storybook/addon-actions';
import type { PurchasedHistoryProps } from './PurchasedHistory';

export default {
  title: 'organism/PurchasedHistory',
  component: PurchasedHistory,
};

const mockItems: HistoryItem[] = [
  {
    id: 'h1',
    name: 'Milk',
    quantity: '2L',
    estimatedPrice: 3.5,
    category: 'Dairy',
    isCurrent: false,
    isBought: false,
    isDeleted: false,
    purchasedAt: new Date(),
    checkedOffBy: 'user-1',
  },
  {
    id: 'h2',
    name: 'Bread',
    quantity: '1',
    estimatedPrice: 2.0,
    category: 'Bakery',
    isCurrent: false,
    isBought: false,
    isDeleted: false,
    purchasedAt: new Date(),
    checkedOffBy: 'user-2',
  },
];

const Template = (args: PurchasedHistoryProps) => <PurchasedHistory {...args} />;

export const Playground = Template.bind({});
// @ts-expect-error Storybook runtime API
Playground.args = {
  items: mockItems,
  onRestore: action('restore'),
};

export const Empty = Template.bind({});
// @ts-expect-error Storybook runtime API
Empty.args = {
  items: [],
  onRestore: action('restore'),
};

export const ManyItems = Template.bind({});
// @ts-expect-error Storybook runtime API
ManyItems.args = {
  items: Array.from({ length: 20 }, (_, i) => ({
    id: `item${i}`,
    name: `Item ${i}`,
    quantity: `${i + 1}`,
    estimatedPrice: i,
    category: 'Misc',
    isFocused: false,
    purchasedAt: new Date(),
    checkedOffBy: 'user-1',
  })),
  onRestore: action('restore'),
}; 