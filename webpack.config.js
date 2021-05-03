const path = require('path');

const ASSET_PATH = process.env.ASSET_PATH || '/';

module.exports = {
  mergeConfig(config) {
    return {
      ...config,
      devServer: {
        ...config.devServer,
        quiet: false,
        clientLogLevel: 'warn',
      },
      output: {
        ...config.output,
        publicPath: ASSET_PATH,
      },
      resolve: {
        ...config.resolve,
        alias: {
          '@Components': path.resolve(__dirname, 'src/components/'),
          '@Constants': path.resolve(__dirname, 'src/constants/'),
          '@Contexts': path.resolve(__dirname, 'src/contexts/'),
          '@Helpers': path.resolve(__dirname, 'src/helpers/'),
          '@Hooks': path.resolve(__dirname, 'src/hooks/'),
          '@Pages': path.resolve(__dirname, 'src/pages/'),
        },
      },
    };
  },
};
