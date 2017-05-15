const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// const MODULES_PATH = path.resolve(__dirname, '../node_modules');

const extractCSS = new ExtractTextPlugin({
  filename: '[name].css',
});

module.exports = () => {

  const componentsList = fs.readdirSync(path.resolve(__dirname, '../src/components'));
  const componentEntries = {
    index: './src/index',
  };
  componentsList.forEach((name) => {
    Object.assign(componentEntries, {
      [`${name}`]: `./src/components/${name}/`,
    });
  });

  return {
    entry: componentEntries,
    output: {
      path: path.join(__dirname, '../lib'),
      filename: '[name].js',
      // sourceMapFilename: '[name].js.map',
      publicPath: '/',
      library: 'QuarkUI',
      libraryTarget: 'umd',
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
                    require('postcss-import'),
                    require('postcss-calc')(),
                    require('postcss-hsb-color')({
                      output: 'rgb',
                    }),
                    require('postcss-cssnext'),
                  ],
                },
              },
            ]
          ),
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
      // SourceMap plugin will define process.env.NODE_ENV as development
      new webpack.SourceMapDevToolPlugin({
        columns: false,
      }),
      extractCSS,
    ],
    devtool: 'source-map',
  };
};
