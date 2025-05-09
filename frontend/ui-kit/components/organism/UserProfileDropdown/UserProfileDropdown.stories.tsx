import React from 'react';
import { UserProfileDropdown } from './UserProfileDropdown';
import type { User } from '../../types';
import { action } from '@storybook/addon-actions';
import type { UserProfileDropdownProps } from './UserProfileDropdown';

export default {
  title: 'organism/UserProfileDropdown',
  component: UserProfileDropdown,
};

const mockUser: User = {
  id: 'u1',
  name: 'Alice',
  avatarUrl: 'https://i.pravatar.cc/40?img=3',
};

const Template = (args: UserProfileDropdownProps) => <UserProfileDropdown {...args} />;

export const Playground = Template.bind({});
// @ts-expect-error Storybook runtime API
Playground.args = {
  user: mockUser,
  onLogout: action('logout'),
  onProfile: action('profile'),
};

export const Basic = () => (
  <UserProfileDropdown user={mockUser} onLogout={() => {}} onProfile={() => {}} />
); 