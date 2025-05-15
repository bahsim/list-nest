import React from 'react';
import { AnalyticsSummaryPanel } from './AnalyticsSummaryPanel';
import type { HistoryAnalytics } from 'src/entities/history-list/types';
import type { AnalyticsSummaryPanelProps } from './AnalyticsSummaryPanel';

export default {
  title: 'organism/AnalyticsSummaryPanel',
  component: AnalyticsSummaryPanel,
};

const mockAnalytics: HistoryAnalytics = {
  totalItems: 42,
  totalSpending: 123.45,
  frequentItems: [
    { name: 'Milk', count: 10 },
    { name: 'Bread', count: 8 },
  ],
  categoryBreakdown: [
    { category: 'Dairy', percent: 40 },
    { category: 'Bakery', percent: 30 },
    { category: 'Produce', percent: 30 },
  ],
};

const Template = (args: AnalyticsSummaryPanelProps) => <AnalyticsSummaryPanel {...args} />;

export const Playground = Template.bind({});
// @ts-expect-error Storybook runtime API
Playground.args = {
  analytics: mockAnalytics,
};

export const Empty = Template.bind({});
// @ts-expect-error Storybook runtime API
Empty.args = {
  analytics: {
    totalItems: 0,
    totalSpending: 0,
    frequentItems: [],
    categoryBreakdown: [],
  },
}; 