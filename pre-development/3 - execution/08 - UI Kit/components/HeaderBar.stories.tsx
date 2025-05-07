import * as React from 'react';
import { HeaderBar, User } from './HeaderBar';
import type { Meta, StoryObj } from '@storybook/react';

const mockUser: User = {
  id: '1',
  name: 'Alice',
  avatarUrl: 'https://i.pravatar.cc/150?img=1',
};

const meta: Meta<typeof HeaderBar> = {
  title: 'UI Kit/HeaderBar',
  component: HeaderBar,
};
export default meta;

type Story = StoryObj<typeof HeaderBar>;

export const Default: Story = {
  args: {
    user: mockUser,
    onSettings: () => alert('Settings clicked'),
  },
}; 