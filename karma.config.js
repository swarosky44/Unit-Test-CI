const webpackConfig = require('./webpack.config.js');
module.exports = function(config) {
  config.set({
    frameworks: ['mocha', 'chai'],
    files: [
      'test/*.spec.js',
    ],
    preprocessors: {
      'test/*.spec.js': ['webpack'],
    },
    reporters: ['mocha', 'coverage'],
    webpackServer: {
      noInfo: true,
    },
    plugins: [
      'karma-coverage',
      'karma-webpack',
      'karma-mocha',
      'karma-chai',
      'karma-phantomjs-launcher',
      'karma-sourcemap-loader',
      'karma-mocha-reporter',
    ],
    webpack: webpackConfig,
    port: 9876,
    colors: true,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    coverageReporter: {
      reporters: [
        { type: 'lcov', dir: 'coverage', subdir: '.' },
        { type: 'text-summary', dir: 'coverage', subdir: '.' }
      ],
    },
  });
};
