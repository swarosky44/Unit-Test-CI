const webpackConfig = require('./webpack.config.js');
const path = require('path');

module.exports = function(config) {
  config.set({
    frameworks: ['mocha', 'chai'],
    files: [
      'test/*.spec.js',
    ],
    preprocessors: {
      'test/*.spec.js': ['webpack', 'sourcemap'],
    },
    reporters: ['mocha', 'coverage-istanbul'],
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
      'karma-coverage-istanbul-reporter',
    ],
    webpack: webpackConfig,
    port: 9876,
    colors: true,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: true,
    coverageIstanbulReporter: {
      reports: ['html', 'lcovonly', 'text-summary'],
      dir: path.resolve(__dirname, 'coverage'),
      fixWebpackSourcePath: true,
      'report-config': {
        html: {
          subdir: 'html',
        },
      },
    },
  });
};
