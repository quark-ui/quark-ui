const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const ip = require('ip');
const upperFirst = require('lodash/upperFirst');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const WebpackChunkHash = require('webpack-chunk-hash');
const DashboardPlugin = require('webpack-dashboard/plugin');

const DEFAULT_THEME = require('../src/styles/theme');
const ORANGE_THEME = require('../src/styles/orange');

const TARGET = process.env.npm_lifecycle_event;

const BROWSERS_DEFINE = [
  'last 5 Chrome versions',
  'last 5 Firefox versions',
  'last 2 Safari versions',
  'last 2 Edge versions',
];

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
        test: /\.(png|gif|jpg)$/,
        use: 'file-loader',
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
                  targets: {
                    browsers: BROWSERS_DEFINE,
                  },
                  useBuiltIns: true,
                },
              ],
              'react',
              'stage-1',
            ],
            plugins: [
              'transform-decorators-legacy',
            ],
            babelrc : false,
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
                    targets: {
                      browsers: BROWSERS_DEFINE,
                    },
                    useBuiltIns: true,
                  },
                ],
                'react',
                'stage-1',
              ].concat(TARGET === 'gh-pages' ? ['react-optimize'] : []),
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
  ],
};

let config;
if (TARGET === 'start' || TARGET === 'start-nodash') {
  const host = ip.address();
  config = merge.strategy({
    entry: 'prepend',
  })(common, siteConfig, {
    entry: {
      site: [
        'react-hot-loader/patch',
        `webpack-dev-server/client?http://${host}:3000`,
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
          include: [
            path.resolve(__dirname, '../src'),
            path.resolve(__dirname, '../site'),
          ],
          use: [
            { loader: 'style-loader' },
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: true,
                localIdentName: '[local]__[hash:base64:4]',
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                config: {
                  ctx: {
                    cssnext: {
                      browsers: ['last 5 Chrome versions'],
                      features: {
                        customProperties: {
                          variables: DEFAULT_THEME,
                        },
                      },
                    },
                  },
                },
              },
            },
          ],
        },
        {
          test: /\.css$/,
          include: [
            path.resolve(__dirname, '../node_modules'),
          ],
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader' },
          ],
        },
      ],
    },
    plugins: [
      new DashboardPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        BASEPATH: JSON.stringify('/'),
      }),
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
          include: [
            path.resolve(__dirname, '../src'),
            path.resolve(__dirname, '../site'),
          ],
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
                  config: {
                    ctx: {
                      cssnext: {
                        browsers: ['last 5 Chrome versions'],
                        features: {
                          customProperties: {
                            variables: DEFAULT_THEME,
                          },
                        },
                      },
                    },
                  },
                },
              },
            ],
          }),
        },
        {
          test: /\.css$/,
          include: [
            path.resolve(__dirname, '../node_modules'),
          ],
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  minimize: true,
                },
              },
            ],
          }),
        },
      ],
    },
    plugins: [
      new webpack.DllReferencePlugin({
        context: path.resolve(__dirname, '../'),
        manifest: require('../docs/manifest.json'),
      }),
      new webpack.DefinePlugin({
        BASEPATH: JSON.stringify('/quark-ui'),
        'process.env': {
          NODE_ENV: JSON.stringify('production'),
        },
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'site',
        children: true,
        async: true,
        minChunks: 1,
      }),
      new webpack.HashedModuleIdsPlugin(),
      new WebpackChunkHash(),
      new ExtractTextPlugin({
        filename: '[contenthash].css',
      }),
      new UglifyJSPlugin({
        sourceMap: true,
        parallel: true,
      }),
      ...['index.html', '404.html'].map(page => (
        new HtmlWebpackPlugin({
          // title: 'Quark UI',
          filename: page,
          template: './docs/index.dll.html',
          inject: 'body',
          // version: 'min.',
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

if (TARGET === 'theme') {
  const extractCSS = new ExtractTextPlugin({
    filename: '[name].orange.css',
  });
  const themeList = fs.readdirSync(path.resolve(__dirname, '../src/components'));
  const themeEntries = {
  };
  themeList.forEach((name) => {
    Object.assign(themeEntries, {
      [`${name}`]: `./src/components/${name}/${upperFirst(name)}.css`,
    });
  });

  config = merge(common, {
    entry: themeEntries,
    output: {
      path: path.join(__dirname, '../lib'),
      filename: '[name].orange.js',
      publicPath: '/',
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
                  config: {
                    ctx: {
                      cssnext: {
                        features: {
                          browsers: [
                            '> 1%',
                            'last 2 versions',
                            'ie >= 8',
                          ],
                          customProperties: {
                            variables: ORANGE_THEME,
                          },
                        },
                      },
                    },
                  },
                },
              },
            ],
          ),
        },
      ],
    },
    plugins: [
      extractCSS,
    ],
  });
}

module.exports = config;
