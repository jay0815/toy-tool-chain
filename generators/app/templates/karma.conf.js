// Karma configuration
// Generated on Mon Aug 10 2020 15:03:39 GMT+0800 (China Standard Time)
const path = require('path');
const webpack = require('./webpack.config.js');

module.exports = function (config) {
  config.set({
    /**
     * demo config paragraph
     */

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: 'demo',
    // list of files / patterns to load in the browser
    files: [
      'src/*.js',
      '../test/*.js',
    ],
    // list of files / patterns to exclude
    exclude: [
      "../coverage", "../src"
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/*.js': ['webpack'],
      '../test/*.js': ['webpack'],
    },

    /**
     * your can edit next paragraph
     * and shield upper demo  paragraph
     */

    // // base path that will be used to resolve all patterns (eg. files, exclude)
    // basePath: '',

    // // list of files / patterns to load in the browser
    // files: [
    //   'src/*.js',
    //   'test/*.js',
    // ],

    // exclude: [
    //   "coverage","demo"
    // ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    // preprocessors: {
    //   'src/*.js': ['webpack'],
    //   'test/*.js': ['webpack'],
    // },

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai'],

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha', 'coverage-istanbul'],

    webpack: webpack({
      test: true
    }),

    webpackMiddleware: {
      // webpack-dev-middleware configuration
      // i. e.
      stats: 'errors-only',
    },

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    plugins: [
      'karma-mocha', 'karma-chai',
      'karma-mocha-reporter', 'karma-coverage-istanbul-reporter',
      'karma-webpack',
      'karma-chrome-launcher',
    ],

    coverageIstanbulReporter: {
      // reports can be any that are listed here: https://github.com/istanbuljs/istanbuljs/tree/73c25ce79f91010d1ff073aa6ff3fd01114f90db/packages/istanbul-reports/lib
      reports: ['lcov', 'text'],

      // base output directory. If you include %browser% in the path it will be replaced with the karma browser name
      dir: path.join(__dirname, 'coverage'),


      // if using webpack and pre-loaders, work around webpack breaking the source path
      fixWebpackSourcePaths: true,

      // Omit files with no statements, no functions and no branches covered from the report
      skipFilesWithNoCoverage: true,

      // Most reporters accept additional config options. You can pass these through the `report-config` option
      'report-config': {
        // all options available at: https://github.com/istanbuljs/istanbuljs/blob/73c25ce79f91010d1ff073aa6ff3fd01114f90db/packages/istanbul-reports/lib/html/index.js#L257-L261
        lcov: {
          // outputs the report in ./coverage/html
          subdir: 'lcov-report'
        }
      },

    },
    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
