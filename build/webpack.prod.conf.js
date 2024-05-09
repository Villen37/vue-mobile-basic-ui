const path = require('path');
const merge = require("webpack-merge");
const baseConfig = require('./webpack.base.conf');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = merge(baseConfig, {
  mode: 'production',
  output: {
    filename: 'js/detect.js',
    path: path.resolve(__dirname, 'dist'),
    libraryExport: "default", // 对外暴露default属性，就可以直接调用default里的属性
    globalObject: 'this', // 定义全局变量,兼容node和浏览器运行，避免出现"window is not defined"的情况
    libraryTarget: 'umd',//将你的 library 暴露为所有的模块定义下都可运行的方式
    library: 'firmUa'
  },
  optimization: {
    // minimize: false
  },
  module: {
    // rules: [{
    //   test: /\.(sa|sc|c)ss$/,
    //   use: [
    //     {
    //       loader: MiniCssExtractPlugin.loader,
    //       options: {
    //         hmr: process.env.NODE_ENV === 'development',
    //       },
    //     },
    //     'css-loader',
    //     'postcss-loader',
    //     'sass-loader',
    //   ],
    // },]
  },
  plugins: [
    // new MiniCssExtractPlugin({
    //   // 类似 webpackOptions.output里面的配置 可以忽略
    //   filename: '[name].css',
    //   chunkFilename: '[id].css',
    // }),
  ]
})
