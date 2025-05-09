import * as React from 'react';
import { HistoryView } from './HistoryView';
import type { Meta, StoryObj } from '@storybook/react';
import type { HistoryGroup, HistoryAnalytics } from '../../types';

const mockGroups: HistoryGroup[] = [
  {
    date: '2023-10-10',
    items: [
      {
        id: '1',
        name: 'Milk',
        quantity: '2L',
        estimatedPrice: 3.5,
        category: 'Dairy',
        isFocused: true,
        purchasedAt: new Date(),
        checkedOffBy: '1',
      },
      {
        id: '2',
        name: 'Bread',
        quantity: '1',
        estimatedPrice: 2.0,
        category: 'Bakery',
        isFocused: false,
        purchasedAt: new Date(),
        checkedOffBy: '2',
      },
    ],
  },
];

const mockAnalytics: HistoryAnalytics = {
  totalItems: 2,
  totalSpending: 5.5,
  frequentItems: [
    { name: 'Milk', count: 1 },
    { name: 'Bread', count: 1 },
  ],
  categoryBreakdown: [
    { category: 'Dairy', percent: 64 },
    { category: 'Bakery', percent: 36 },
  ],
};

const meta: Meta<typeof HistoryView> = {
  title: 'UI Kit/HistoryView',
  component: HistoryView,
};
export default meta;

type Story = StoryObj<typeof HistoryView>;

export const Default: Story = {
  args: {
    groups: mockGroups,
    analytics: mockAnalytics,
    onRestore: () => {},
  },
}; 