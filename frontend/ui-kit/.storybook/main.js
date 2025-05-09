module.exports = {
  stories: [
    '../components/**/*.stories.@(js|jsx|ts|tsx)',
    '../pages/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: true,
  },
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
          options: {
            transpileOnly: true,
          },
        },
      ],
    });
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        require.resolve('style-loader'),
        require.resolve('css-loader'),
        require.resolve('sass-loader'),
      ],
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
  staticDirs: ['../../frontend/public'],
}; 