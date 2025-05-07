import * as React from 'react';
import { HistoryPage } from './HistoryPage';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof HistoryPage> = {
  title: 'Pages/HistoryPage',
  component: HistoryPage,
};
export default meta;

type Story = StoryObj<typeof HistoryPage>;

export const Default: Story = {}; 