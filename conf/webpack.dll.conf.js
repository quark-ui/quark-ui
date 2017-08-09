const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    dllBundle: [
      'babel-standalone',
      'codemirror',
      'moment',
      'core-js',
      'esprima',
    ],
  },
  output: {
    path: path.join(__dirname, '../docs'),
    filename: '[name].[hash].js',
    library: '[name]_[hash]',
    publicPath: '/quark-ui/',
  },
  plugins: [
    new webpack.DllPlugin({
      context: path.resolve(__dirname, '../'),
      path: path.join(__dirname, '../docs/manifest.json'),
      name: '[name]_[hash]',
    }),
    new UglifyJSPlugin({
      sourceMap: true,
    }),
    new HtmlWebpackPlugin({
      title: 'Quark UI',
      filename: 'index.dll.html',
      template: './site/index.html',
      inject: 'head',
      version: 'min.',
    }),
  ],
};
