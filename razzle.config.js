const webpack = require('./webpack.config');
const jest = require('./jest.config');

module.exports = {
  options: {
    verbose: true,
    buildType: 'single-page-application',
  },
  modifyWebpackConfig(opts) {
    const merged = webpack.mergeConfig(opts.webpackConfig);
    return merged;
  },
  modifyJestConfig(opts) {
    const merged = jest.mergeConfig(opts.jestConfig);
    return merged;
  },
};
