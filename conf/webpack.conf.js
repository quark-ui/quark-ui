const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const ip = require('ip');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const merge = require('webpack-merge');
const cssnext = require('postcss-cssnext');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const WebpackChunkHash = require('webpack-chunk-hash');

const THEME = require('../src/styles/theme');

const TARGET = process.env.npm_lifecycle_event;

const common = {
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
  devtool: 'source-map',
};

const siteConfig = {
  entry: {
    site: [
      './site/index',
    ],
  },
  externals: {
    react: 'var React',
    'react-dom': 'var ReactDOM',
  },
  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.DefinePlugin({
      BASEPATH: JSON.stringify('/'),
    }),
  ],
};

let config;
if (TARGET === 'start') {
  const host = ip.address();
  config = merge.strategy({
    entry: 'prepend',
  })(common, siteConfig, {
    entry: {
      site: [
        'react-hot-loader/patch',
        `webpack-dev-server/client?http://${host}:3000`,
        'webpack/hot/only-dev-server',
      ],
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
          test: /\.css$/,
          use: [
            { loader: 'style-loader' },
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: true,
                localIdentName: '[local]__[hash:base64:5]',
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [
                  cssnext({
                    browsers: ['last 5 Chrome versions'],
                    features: {
                      customProperties: {
                        variables: THEME,
                      },
                    },
                  }),
                ],
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      // SourceMap plugin will define process.env.NODE_ENV as development
      new webpack.SourceMapDevToolPlugin({
        columns: false,
      }),
      new HtmlWebpackPlugin({
        title: 'Quark UI',
        filename: 'index.html',
        template: './site/index.html',
        inject: 'head',
        version: '',
      }),
      new ScriptExtHtmlWebpackPlugin({
        defaultAttribute: 'defer',
      }),
    ],
    devtool: 'cheap-eval-source-map',
    devServer: {
      hot: true,
      publicPath: '/',
      host,
      historyApiFallback: true,
    },
  });
}

if (TARGET === 'gh-pages') {
  config = merge(common, siteConfig, {
    output: {
      path: path.join(__dirname, '../docs'),
      filename: '[name].[chunkhash].js',
      sourceMapFilename: '[name].[chunkhash].js.map',
      publicPath: '/quark-ui/',
    },
    module: {
      rules: [
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
                    cssnext({
                      browsers: ['last 5 Chrome versions'],
                      features: {
                        customProperties: {
                          variables: THEME,
                        },
                      },
                    }),
                  ],
                },
              },
            ],
          }),
        },
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        BASEPATH: JSON.stringify('/quark-ui'),
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: Infinity,
      }),
      new webpack.HashedModuleIdsPlugin(),
      new WebpackChunkHash(),
      new ExtractTextPlugin({
        filename: 'style.css',
      }),
      new UglifyJSPlugin({
        sourceMap: true,
      }),
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
    profile: true,
  });
}

if (TARGET === 'build') {
  const extractCSS = new ExtractTextPlugin({
    filename: '[name].css',
  });
  const componentsList = fs.readdirSync(path.resolve(__dirname, '../src/components'));
  const componentEntries = {
    index: './src/index',
  };
  componentsList.forEach((name) => {
    Object.assign(componentEntries, {
      [`${name}`]: `./src/components/${name}/`,
    });
  });

  config = merge(common, {
    entry: componentEntries,
    output: {
      path: path.join(__dirname, '../lib'),
      filename: '[name].js',
      publicPath: '/',
      library: 'QuarkUI',
      libraryTarget: 'umd',
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: extractCSS.extract(
            [
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1,
                  modules: true,
                  localIdentName: '[hash:base64:7]',
                },
              },
              {
                loader: 'postcss-loader',
                options: {
                  plugins: () => [
                    cssnext({
                      features: {
                        customProperties: {
                          variables: THEME,
                        },
                      },
                    }),
                  ],
                },
              },
            ]
          ),
        },
      ],
    },
    externals: [
      {
        react: {
          root: 'React',
          commonjs2: 'react',
          commonjs: 'react',
        },
        'react-dom': {
          root: 'ReactDOM',
          commonjs2: 'react-dom',
          commonjs: 'react-dom',
        },
        'prop-types': {
          root: 'PropTypes',
          commonjs2: 'prop-types',
          commonjs: 'prop-types',
        },
        lodash: {
          commonjs: 'lodash',
          commonjs2: 'lodash',
          root: '_',
        },
        moment: {
          commonjs: 'moment',
          commonjs2: 'moment',
          root: 'moment',
        },
      },
      /^lodash\//,
      (context, request, callback) => {
        if (/^quark-ui\//.test(request)) {
          return callback(null, 'commonjs ' + request.replace('quark-ui', 'quark-ui/lib'));
        }
        callback();
      },
      'react-css-modules',
      'object-assign',
      'classnames',
      'react-moment-proptypes',
    ],
    plugins: [
      new webpack.SourceMapDevToolPlugin({
        columns: false,
      }),
      extractCSS,
    ],
  });
}

module.exports = config;
