const path = require('path');
const merge = require("webpack-merge");
const baseConfig = require('./webpack.base.conf');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin'); // 清理dist文件夹

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    host: 'localhost.dev.com'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
})