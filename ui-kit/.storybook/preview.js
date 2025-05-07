import React from 'react';
import '../tokens/colors.scss';
import '../tokens/typography.scss';
import '../tokens/spacing.scss';
import '../tokens/radii.scss';
import '../tokens/shadows.scss';
import '../tokens/fonts.scss';

export const parameters = {
  backgrounds: {
    default: 'light',
    values: [
      { name: 'light', value: '#FEF4DB' },
      { name: 'dark', value: '#2A2E35' },
    ],
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: { expanded: true },
  docs: {
    theme: undefined, // You can set a custom theme here
  },
};

export const decorators = [
  (Story) => React.createElement('div', { style: { padding: 24 } }, React.createElement(Story)),
]; 