import * as React from 'react';
import { HistoryPage } from './HistoryPage';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof HistoryPage> = {
  title: 'Pages/HistoryPage',
  component: HistoryPage,
};
export default meta;

type Story = StoryObj<typeof HistoryPage>;

export const Default: Story = {
  parameters: {
    previewHead: (
      <>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {/* etc. */}
      </>
    ),
  },
};

export const WithLogo: Story = {
  parameters: {
    previewHead: (
      <>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {/* etc. */}
      </>
    ),
  },
  render: () => (
    <img src="./apple-touch-icon.png" alt="Logo" />
  ),
};