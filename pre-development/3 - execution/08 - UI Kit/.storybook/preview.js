import '../tokens/colors.scss';
import '../tokens/typography.scss';
import '../tokens/spacing.scss';
import '../tokens/radii.scss';
import '../tokens/shadows.scss';

export const parameters = {
  backgrounds: {
    default: 'light',
    values: [
      { name: 'light', value: '#FFF6E5' },
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
  (Story) => (
    <div style={{ padding: 24 }}>
      <Story />
    </div>
  ),
]; 