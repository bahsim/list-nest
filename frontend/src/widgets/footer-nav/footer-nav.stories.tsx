import React from 'react';
import { FooterNav, type FooterNavProps } from './footer-nav';
import { action } from '@storybook/addon-actions';

export default {
  title: 'organism/FooterNav',
  component: FooterNav,
  argTypes: {
    activeTab: { control: 'radio', options: ['list', 'analytics', 'history', 'settings'] },
  },
};

const Template = (args: FooterNavProps) => <FooterNav {...args} />;

export const Playground = Template.bind({});

export const AllTabs = () => (
  <>
    {['list', 'analytics', 'history', 'settings'].map((tab) => (
      <div key={tab} style={{ marginBottom: 8 }}>
        <FooterNav />
      </div>
    ))}
  </>
);
