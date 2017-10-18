const path = require('path');

module.exports = (config) => {
  config.set({
    basePath: __dirname,
    frameworks: ['mocha', 'chai'],
    files: ['../src/components/**/test/*.js'],
    exclude: ['react', 'react-dom'],
    reporters: ['progress', 'spec', 'coverage-istanbul'],
    colors: true,
    preprocessors: {
      '../src/components/**/test/*.test.js': ['webpack', 'sourcemap'],
      '../test/karma/*.js': ['webpack', 'sourcemap'],
      '../test/*.test.js': ['webpack', 'sourcemap'],
    },
    // webpack file
    webpack: {
      devtool: 'inline-source-map',
      module: {
        rules: [
          {
            test: /\.js$/,
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
                plugins: ['transform-decorators-legacy'],
              },
            },
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            include: path.resolve(__dirname, '../src/'),
            enforce: 'post',
            loader: 'istanbul-instrumenter-loader',
            options: {
              esModules: true,
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
                    plugins: [{ cleanupIDs: false }],
                    floatPrecision: 3,
                  },
                },
              },
            ],
          },
        ],
      },
      externals: {
        cheerio: 'window',
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true,
      },
    },

    webpackMiddleware: {
      stats: 'errors-only',
      noInfo: true,
    },

    plugins: [
      'karma-webpack',
      'karma-mocha',
      'karma-chai',
      'karma-sourcemap-loader',
      'karma-chrome-launcher',
      'karma-phantomjs-launcher',
      'karma-firefox-launcher',
      'karma-coverage-istanbul-reporter',
      'karma-spec-reporter',
    ],

    coverageIstanbulReporter: {
      reports: ['html', 'lcovonly', 'text-summary'],
      dir: path.join(__dirname, '../coverage'),
      fixWebpackSourcePaths: true,
      skipFilesWithNoCoverage: true,
      'report-config': {
        // all options available at: https://github.com/istanbuljs/istanbul-reports/blob/590e6b0089f67b723a1fdf57bc7ccc080ff189d7/lib/html/index.js#L135-L137
        html: {
          // outputs the report in ./coverage/html
          subdir: 'html',
        },
      },
    },

    logLevel: config.LOG_INFO,
    browsers: [
      'Chrome',
      // 'PhantomJS_custom',
      // 'Firefox',
    ],
    customLaunchers: {
      PhantomJS_custom: {
        base: 'PhantomJS',
        options: {
          viewportSize: {
            width: 1920,
            height: 1080,
          },
          scrollPosition: {
            top: 100,
            left: 0,
          },
        },
        flags: ['--load-images=true'],
        debug: true,
      },
    },
    phantomjsLauncher: {
      // Have phantomjs exit if a ResourceError is encountered
      // (useful if karma exits without killing phantom)
      exitOnResourceError: true,
    },
    singleRun: false,
  });
};
