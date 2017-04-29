const path = require('path');
const webpack = require('webpack');
const ip = require('ip');
const values = require('postcss-modules-values');

const MODULES_PATH = path.resolve(__dirname, '../node_modules');

module.exports = () => {

  const host = ip.address();

  return {
    entry: {
      demo: [
        'react-hot-loader/patch',
        `webpack-dev-server/client?http://${host}:3000`,
        'webpack/hot/only-dev-server',
        './demo/index',
      ],
    },
    output: {
      path: path.join(__dirname, './build'),
      filename: '[name].js',
      sourceMapFilename: '[name].js.map',
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.md$/,
          use: 'raw-loader',
        },
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  'env',
                  {
                    modules: false,
                  },
                ],
                'react',
                'stage-1',
              ],
              plugins: [
                'transform-decorators-legacy',
              ],
            },
          },
        },
        {
          test: /\.css$/,
          use: [
            { loader: 'style-loader' },
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: true,
                localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [
                  values,
                ],
              },
            },
          ],
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  'react',
                ],
              },
            },
            {
              loader: 'react-svg-loader',
              options: {
                svgo: {
                  plugins: [
                    { cleanupIDs: false },
                  ],
                  floatPrecision: 3,
                },
              },
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
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      // SourceMap plugin will define process.env.NODE_ENV as development
      new webpack.SourceMapDevToolPlugin({
        columns: false,
      }),
    ],
    devtool: 'cheap-eval-source-map',
    devServer: {
      hot: true,
      contentBase: [
        path.join(__dirname, '../demo'),
        MODULES_PATH,
      ],
      publicPath: '/',
      host,
      historyApiFallback: true,
    },
  };
};
