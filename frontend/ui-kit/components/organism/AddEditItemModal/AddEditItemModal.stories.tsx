import * as React from 'react';
import { AddEditItemModal } from './AddEditItemModal';
import type { Meta, StoryObj } from '@storybook/react';
import type { AISuggestion } from '../../types';

const categories = ['Dairy', 'Bakery', 'Produce'];
const units = ['pcs', 'L', 'kg'];
const currencies = ['USD', 'EUR'];
const aiSuggestions: AISuggestion[] = [
  { id: '1', name: 'Eggs', quantity: '12', estimatedPrice: 2.5, category: 'Dairy' },
  { id: '2', name: 'Bananas', quantity: '6', estimatedPrice: 1.2, category: 'Produce' },
];

const meta: Meta<typeof AddEditItemModal> = {
  title: 'organism/AddEditItemModal',
  component: AddEditItemModal,
};
export default meta;

type Story = StoryObj<typeof AddEditItemModal>;

export const Add: Story = {
  args: {
    onSave: () => {},
    onCancel: () => {},
    categories,
    units,
    aiSuggestions,
  },
};

export const Edit: Story = {
  args: {
    item: {
      id: '1',
      name: 'Eggs',
      quantity: '12',
      unit: 'pcs',
      estimatedPrice: 2.5,
      currency: 'USD',
      category: 'Dairy',
      isCurrent: true,
      isBought: false,
      isDeleted: false,
    },
    onSave: () => {},
    onCancel: () => {},
    categories,
    units,
    aiSuggestions,
  },
}; 