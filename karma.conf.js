const path = require('path');
// var webpackConfig  = require('./conf/webpack.conf.js');

module.exports = function(config) {  
  config.set({
    basePath: __dirname,
    frameworks: ['mocha', 'chai'],
    files: [
      './src/components/**/test/*.js'
    ],
    exclude:['react'],
    preprocessors: {
      'src/components/**/test/*.test.js' : ['webpack','sourcemap'],
      'test/karma/*.js':[ 'webpack','sourcemap'],
      'test/*.test.js': ['webpack','sourcemap']
      
    },
    // webpack file
    webpack: { 
      entry : path.resolve(__dirname, './src'),
      devtool: 'inline-source-map', 
      module: {
        loaders: [
          {
            test: /\.js$/,
            exclude : /node_modules/,
            use :{
              loader: 'babel-istanbul-loader',
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
              }
            }
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
          {
            test: /\.json$/,
            loader: 'json-loader',
          },
          
        ]
      },
      externals: {
        cheerio: 'window',
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
      }
    },
    webpackServer: {
      noInfo: true 
    },

    plugins: [
      'karma-webpack',
      'karma-mocha',
      'karma-chai',
      'karma-sourcemap-loader',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-coverage',
      'karma-spec-reporter'
    ],

    coverageReporter: {
      dir: 'coverage',
      reporters: [{
        type: 'json',
        subdir: '.',
        file: 'coverage.json',
      }, {
        type: 'lcov',
        subdir: '.'
      }, {
        type: 'text-summary'
      }]
    },


    reporters: ['progress','spec','coverage'],
    logLevel: config.LOG_INFO,
    browsers: ['Chrome','Firefox'],
    singleRun: false,
  })

};