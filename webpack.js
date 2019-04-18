// Libraries
const webpack = require('webpack');
const path = require('path');
const buildLocation = path.join(__dirname, 'dist');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  context: __dirname,
  output: {filename: '[name]'},
  externals: {
    gapi: 'gapi',
  },
  entry: {'tests': 'tests'},
  optimization: {
    splitChunks: false,
    runtimeChunk: false
  },
  resolve: {
    modules: ['frontend', 'node_modules'],
    alias: {
      'underscore': 'lodash',
    },
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        exclude: /node_modules/,
        test: /^(?!.*preact\.jsx$).*\.(jsx?|tsx?)$/,
        options: {
          presets: [
            '@babel/typescript',
            ['@babel/preset-env',
              {targets: '> 0.25%, not dead', modules: false}]
          ],
          cacheDirectory: true, // cache babel results
          plugins: [
            'lodash',
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-transform-strict-mode',
            '@babel/plugin-proposal-object-rest-spread',
          ]
        }
      }
    ]
  }
};
