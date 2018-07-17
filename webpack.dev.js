'use strict';

const { HotModuleReplacementPlugin } = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');

const webpackDevConfig = {};

webpackDevConfig.module = {};

webpackDevConfig.mode = 'development';

webpackDevConfig.devtool = 'inline-source-map';

webpackDevConfig.devServer = {
  contentBase: './build',
  hot: true,
  open: true,
  historyApiFallback: true,
};

webpackDevConfig.plugins = [
  new HotModuleReplacementPlugin(),
];

webpackDevConfig.rules = [
  {
    test: /\.css$/,
    use: [
      {
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
        options: {
          sourceMap: true,
        },
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: true,
        },
      },
    ],
  },
];

module.exports = merge(commonConfig, webpackDevConfig);
