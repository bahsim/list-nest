import * as React from 'react';
import type { Preview } from '@storybook/react'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import listNestTheme from '../src/shared/theme-listnest';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={listNestTheme}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  ),
];

export default preview;