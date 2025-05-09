import React from 'react';
import { SettingsPanel } from './SettingsPanel';
import { action } from '@storybook/addon-actions';
import type { SettingsPanelProps } from './SettingsPanel';

export default {
  title: 'organism/SettingsPanel',
  component: SettingsPanel,
  argTypes: {
    theme: { control: 'radio', options: ['light', 'dark'] },
    notificationsEnabled: { control: 'boolean' },
  },
};

const Template = (args: SettingsPanelProps) => <SettingsPanel {...args} />;

export const Playground = Template.bind({});
// @ts-expect-error Storybook runtime API
Playground.args = {
  theme: 'light',
  notificationsEnabled: true,
  onThemeChange: action('theme changed'),
  onNotificationsChange: action('notifications toggled'),
  onAccountManage: action('account manage clicked'),
};

export const Basic = () => (
  <SettingsPanel
    theme="light"
    onThemeChange={() => {}}
    notificationsEnabled={true}
    onNotificationsChange={() => {}}
    onAccountManage={() => {}}
  />
); 