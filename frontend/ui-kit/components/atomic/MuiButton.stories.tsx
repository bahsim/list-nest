import React from 'react';
import Button from '@mui/material/Button';

export default {
  title: 'atomic/MuiButton',
  component: Button,
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'info', 'inherit'],
    },
    variant: {
      control: 'select',
      options: ['contained', 'outlined', 'text'],
    },
    disabled: { control: 'boolean' },
  },
};

type ButtonArgs = React.ComponentProps<typeof Button>;

export const Primary = (args: ButtonArgs) => <Button {...args}>Primary</Button>;
Primary.args = { color: 'primary', variant: 'contained', disabled: false };

export const Secondary = (args: ButtonArgs) => <Button {...args}>Secondary</Button>;
Secondary.args = { color: 'secondary', variant: 'contained', disabled: false };

export const Outlined = (args: ButtonArgs) => <Button {...args}>Outlined</Button>;
Outlined.args = { color: 'primary', variant: 'outlined', disabled: false };

export const OutlinedDisabled = (args: ButtonArgs) => <Button {...args}>Outlined Disabled</Button>;
OutlinedDisabled.args = { color: 'primary', variant: 'outlined', disabled: true };

export const Text = (args: ButtonArgs) => <Button {...args}>Text</Button>;
Text.args = { color: 'primary', variant: 'text', disabled: false };

export const TextDisabled = (args: ButtonArgs) => <Button {...args}>Text Disabled</Button>;
TextDisabled.args = { color: 'primary', variant: 'text', disabled: true };

export const Disabled = (args: ButtonArgs) => <Button {...args}>Disabled</Button>;
Disabled.args = { color: 'primary', variant: 'contained', disabled: true }; 