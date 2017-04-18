const path = require('path');
const webpack = require('webpack');
const ip = require('ip');

const MODULES_PATH = path.resolve(__dirname, '../node_modules');
const preset_env_path = path.resolve(MODULES_PATH, 'babel-preset-env');
const preset_react_path = path.resolve(MODULES_PATH, 'babel-preset-react');
const preset_stage1_path = path.resolve(MODULES_PATH, 'babel-preset-stage-1');

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
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader' },
            { loader: 'less-loader',
              options: {
                strictMath: true,
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
