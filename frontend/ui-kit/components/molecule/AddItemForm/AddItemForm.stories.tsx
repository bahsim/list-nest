import * as React from 'react';
import { AddItemForm } from './AddItemForm';
import type { Meta, StoryObj } from '@storybook/react';

const categories = ['Dairy', 'Bakery', 'Produce'];
const units = ['pcs', 'L', 'kg'];

const meta: Meta<typeof AddItemForm> = {
  title: 'molecule/AddItemForm',
  component: AddItemForm,
};
export default meta;

type Story = StoryObj<typeof AddItemForm>;

export const Default: Story = {
  args: {
    onAdd: () => {},
    categories,
    units,
  },
}; 