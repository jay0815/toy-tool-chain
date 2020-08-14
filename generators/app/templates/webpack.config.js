const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = (env = {}, argv) => {

  const isProduction = !!env.production;

  const isCoverage = !!env.test;

  const mode = isProduction ? 'production' : 'development';

  process.env.BABEL_ENV = mode;

  const isReport = !!env.report;

  const BASE_DEV_SERVER = {
    hot: true,
    port: isReport ? 9100 : 3000,
    historyApiFallback: true,
    open: true,
    compress: false
  };

  if (isReport) {
    BASE_DEV_SERVER.contentBase = path.join(__dirname, 'coverage/lcov-report');
  }

  const BASE_ENTRY = {
    index: './src/index'
  };

  const devServer = isProduction ? void 0 : BASE_DEV_SERVER;

  const entry = isCoverage ? void 0 : BASE_ENTRY;

  const config = {
    mode: mode,
    devtool: isProduction ? 'nosources-source-map' : 'source-map',
    entry: entry,
    output: {
      filename: 'bundle.js',
      publicPath: '/',
      path: path.resolve(__dirname, 'dist'),
    },
    devServer: devServer,
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html'
      }),
    ],
    module: {
      rules: [{
        test: /\.js?$/,
        exclude: [
          path.resolve(__dirname, 'node_modules'),
          path.resolve(__dirname, 'coverage'),
        ],
        use: {
          loader: 'babel-loader'
        }
      }]
    }
  };

  if (isProduction) {
    delete config.devServer;
  };
  if (isCoverage || isReport) {
    config.plugins.pop();
  }

  return config;
};