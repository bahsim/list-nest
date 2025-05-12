import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import EmptyState from './empty-state';

const meta: Meta<typeof EmptyState> = {
  title: 'Atomic/EmptyState',
  component: EmptyState,
  tags: ['autodocs'],
  argTypes: {
    onButtonClick: { action: 'button clicked' },
  },
};

export default meta;

type Story = StoryObj<typeof EmptyState>;

export const Default: Story = {
  args: {
    title: 'No List Yet',
    description: 'Create a new list to get started.',
    buttonLabel: 'Create List',
    onButtonClick: () => {},
    imageAlt: 'Empty list',
  },
};

export const NoItems: Story = {
  args: {
    title: 'No items yet',
    description: 'Add your first item to this list.',
    buttonLabel: 'Add First Item',
    onButtonClick: () => {},
    imageAlt: 'No items yet',
  },
}; 