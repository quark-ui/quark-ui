const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const MODULES_PATH = path.resolve(__dirname, '../node_modules');
const preset_env_path = path.resolve(MODULES_PATH, 'babel-preset-env');
const preset_react_path = path.resolve(MODULES_PATH, 'babel-preset-react');
const preset_stage1_path = path.resolve(MODULES_PATH, 'babel-preset-stage-1');

const extractCSS = new ExtractTextPlugin({
  filename: 'index.css',
});

module.exports = () => {

  return {
    entry: {
      index: './index',
    },
    output: {
      path: path.join(__dirname, '../build'),
      filename: '[name].js',
      sourceMapFilename: '[name].js.map',
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  preset_env_path,
                  {
                    modules: false,
                  },
                ],
                preset_react_path,
                preset_stage1_path,
              ],
            },
          },
        },
        {
          test: /\.less$/,
          use: extractCSS.extract([
            'css-loader',
            {
              loader: 'less-loader',
              options: {
                strictMath: true,
              },
            },
          ]),
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  [
                    preset_env_path, {
                      modules: false,
                    },
                  ],
                  preset_react_path,
                ],
              },
            },
            {
              loader: 'svg-react-loader',
            },
          ],
        },
      ],
    },
    externals: {
      react: 'var React',
      'react-dom': 'var ReactDOM',
    },
    plugins: [
      // SourceMap plugin will define process.env.NODE_ENV as development
      new webpack.SourceMapDevToolPlugin({
        columns: false,
      }),
      extractCSS,
    ],
    devtool: 'source-map',
  };
};
