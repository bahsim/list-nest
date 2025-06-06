import { HeaderBar } from '.';
import type { Meta, StoryObj } from '@storybook/react';
import type { User } from 'src/entities/user/types';

const mockUser: User = {
  id: '1',
  name: 'Alice',
  avatarUrl: 'https://i.pravatar.cc/150?img=1',
};

const meta: Meta<typeof HeaderBar> = {
  title: 'organism/HeaderBar',
  component: HeaderBar,
};
export default meta;

type Story = StoryObj<typeof HeaderBar>;

export const Default: Story = {
  args: {
    user: mockUser,
  },
}; 