import React from 'react';
import { FooterNav } from './FooterNav';
import { action } from '@storybook/addon-actions';
import type { FooterNavProps } from './FooterNav';

export default {
  title: 'organism/FooterNav',
  component: FooterNav,
  argTypes: {
    activeTab: { control: 'radio', options: ['list', 'analytics', 'history', 'settings'] },
  },
};

const Template = (args: FooterNavProps) => <FooterNav {...args} />;

export const Playground = Template.bind({});
// @ts-expect-error Storybook runtime API
Playground.args = {
  activeTab: 'list',
  onTabChange: action('tab changed'),
};

export const AllTabs = () => (
  <>
    {['list', 'analytics', 'history', 'settings'].map(tab => (
      <div key={tab} style={{ marginBottom: 8 }}>
        <FooterNav activeTab={tab} onTabChange={action('tab changed')} />
      </div>
    ))}
  </>
); 