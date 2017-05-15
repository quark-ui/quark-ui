const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// const MODULES_PATH = path.resolve(__dirname, '../node_modules');

module.exports = () => {

  return {
    entry: {
      site: [
        './site/index',
      ],
    },
    output: {
      path: path.join(__dirname, '../docs'),
      filename: '[name].js',
      sourceMapFilename: '[name].js.map',
      publicPath: '/quark-ui/',
      // publicPath: '/docs/',
    },
    module: {
      rules: [
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: 'file-loader',
        },
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
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1,
                  modules: true,
                  localIdentName: '[hash:base64:7]',
                  minimize: true,
                },
              },
              {
                loader: 'postcss-loader',
                options: {
                  plugins: () => [
                    // values,
                    require('postcss-import'),
                    require('postcss-calc')(),
                    require('postcss-hsb-color')({
                      output: 'rgb',
                    }),
                    require('postcss-cssnext'),
                  ],
                },
              },
            ],
          }),
        },
        {
          test: /\.svg$/,
          use: [
            {
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
    resolve: {
      alias: {
        'quark-ui': path.resolve(__dirname, '../src/components/'),
      },
    },
    externals: {
      react: 'var React',
      'react-dom': 'var ReactDOM',
    },
    plugins: [
      new webpack.NamedModulesPlugin(),
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      new webpack.DefinePlugin({
        BASEPATH: JSON.stringify('/quark-ui'),
      }),
      // SourceMap plugin will define process.env.NODE_ENV as development
      new webpack.SourceMapDevToolPlugin({
        columns: false,
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'commons',
        filename: 'commons.js',
        // async: true,
      }),
      new ExtractTextPlugin({
        filename: 'style.css',
      }),
      new UglifyJSPlugin(),
      ...['index.html', '404.html'].map(page => (
        new HtmlWebpackPlugin({
          title: 'Quark UI',
          filename: page,
          template: './site/index.html',
          inject: 'head',
          version: 'min.',
        })
      )),
      new ScriptExtHtmlWebpackPlugin({
        defaultAttribute: 'defer',
      }),
      new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerPort: 8888,
      }),
    ],
    devtool: 'cheap-source-map',
    profile: true,
  };
};
