import * as React from 'react';
import { AnalyticsSummaryPanel as AnalyticsPanel } from './AnalyticsSummaryPanel';
import type { Meta, StoryObj } from '@storybook/react';
import type { HistoryAnalytics } from '../types';

const mockAnalytics: HistoryAnalytics = {
  totalItems: 42,
  totalSpending: 123.45,
  frequentItems: [
    { name: 'Milk', count: 5 },
    { name: 'Bread', count: 3 },
  ],
  categoryBreakdown: [
    { category: 'Dairy', percent: 40 },
    { category: 'Bakery', percent: 30 },
    { category: 'Produce', percent: 30 },
  ],
};

const meta: Meta<typeof AnalyticsPanel> = {
  title: 'UI Kit/AnalyticsPanel',
  component: AnalyticsPanel,
};
export default meta;

type Story = StoryObj<typeof AnalyticsPanel>;

export const Default: Story = {
  args: {
    analytics: mockAnalytics,
    isCollapsed: false,
  },
};

export const Collapsed: Story = {
  args: {
    analytics: mockAnalytics,
    isCollapsed: true,
  },
}; 