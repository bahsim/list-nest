module.exports = {
  plugins: ['boundaries'],
  rules: {
    'boundaries/element-types': [2, {
      default: 'disallow',
      rules: [
        { from: 'features', allow: ['entities', 'shared', 'features'] },
        { from: 'entities', allow: ['shared', 'entities'] },
        { from: 'widgets', allow: ['features', 'entities', 'shared', 'widgets'] },
        { from: 'app', allow: ['pages', 'processes', 'widgets', 'features', 'entities', 'shared', 'app'] },
        { from: 'pages', allow: ['widgets', 'features', 'entities', 'shared', 'pages'] },
        { from: 'shared', allow: ['shared'] },
      ],
    }],
    'boundaries/no-private': [2, {
      allowUncles: false,
      allowSamePath: true,
    }],
  },
  settings: {
    'boundaries/elements': [
      { type: 'features', pattern: 'src/features/*' },
      { type: 'entities', pattern: 'src/entities/*' },
      { type: 'widgets', pattern: 'src/widgets/*' },
      { type: 'processes', pattern: 'src/processes/*' },
      { type: 'pages', pattern: 'src/pages/*' },
      { type: 'app', pattern: 'src/app/*' },
      { type: 'shared', pattern: 'src/shared/*' },
    ],
  },
}; 