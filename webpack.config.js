const path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules|\.spec\.js$/,
        use: {
          loader: 'istanbul-instrumenter-loader',
          options: {
            esModules: true,
          },
        },
        enforce: 'pre',
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      'src': path.resolve(__dirname, './src'),
    },
  },
};
