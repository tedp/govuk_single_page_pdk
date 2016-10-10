var path = require('path');
var helpers = require('./helpers');
var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var commonConfig = require('./webpack.common');

module.exports = webpackMerge(commonConfig, {
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  output: {
    path: helpers.root('dist'),
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].js.map',
    chunkFilename: '[id].chunk.js'
  },
  tslint: {
    emitErrors: false,
    failOnHint: false,
    resourcePath: 'src'
  },
  devServer: {
    host: 'localhost',
    port: 9030,
    stats: 'minimal',
    outputPath: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  },
  node: {
    console: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template:  'src/docs/index.ejs',
      chunks:   ['vendor', 'polyfills', 'app'],
      baseUrl:   '/'
    })
  ]
});
