import * as React from 'react';
import { MainListPage } from './MainListPage';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof MainListPage> = {
  title: 'Pages/MainListPage',
  component: MainListPage,
};
export default meta;

type Story = StoryObj<typeof MainListPage>;

export const Default: Story = {}; 