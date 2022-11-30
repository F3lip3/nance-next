const path = require('path');

module.exports = {
  stories: [
    '../components/**/*.stories.mdx',
    '../components/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss')
        }
      }
    }
  ],
  core: {
    builder: 'webpack5'
  },
  webpackFinal: config => {
    config.resolve.alias = {
      ...config.resolve?.alias,
      '@': [
        path.resolve(__dirname, '../'),
        path.resolve(__dirname, '../components/')
      ]
    };

    config.resolve.roots = [
      path.resolve(__dirname, '../public'),
      'node_modules'
    ];

    return config;
  }
};
