import { HeaderBar } from './HeaderBar';
import type { Meta, StoryObj } from '@storybook/react';
import type { User } from '../../types';

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