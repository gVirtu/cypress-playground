const path = require('path');

module.exports = {
  mergeConfig(config) {
    return {
      ...config,
      devServer: {
        ...config.devServer,
        quiet: false,
        clientLogLevel: 'warn',
      },
      resolve: {
        ...config.resolve,
        alias: {
          '@Components': path.resolve(__dirname, 'src/components/'),
          '@Constants': path.resolve(__dirname, 'src/constants/'),
          '@Contexts': path.resolve(__dirname, 'src/contexts/'),
          '@Hooks': path.resolve(__dirname, 'src/hooks/'),
          '@Pages': path.resolve(__dirname, 'src/pages/'),
        },
      },
    };
  },
};
