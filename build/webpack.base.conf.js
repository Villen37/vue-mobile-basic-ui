const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // html
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin'); // 清理dist文件夹

module.exports = {
  entry: path.resolve(__dirname, '../src/view/index.js'),
  resolve: {
    alias: { // 别名
      '@src': path.resolve(__dirname, '../src'),
      vue$: "vue/dist/vue.esm.js",
    },
    extensions: ['.js', '.vue'], // 配置扩展名
  },
  module: {
    rules: [
        {
            test: /\.less$/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
                "postcss-loader",
                "less-loader"
            ]
        },
        {
            // enforce: 'post',
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"]
        },
        {
            test: /\.(png|jpg|gif|ttf|svg|woff|eot)$/,
            loader: 'url-loader',
            query: {
                limit: 30000,
                name: '[name].[ext]?[hash]'
            }
        },
      // js babel-loader
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        },
        // 查找目录
        include: '/src',
        // 排除项
        exclude: '/node_modules/'
      },

        {
            test: /\.vue$/,
            exclude: /node_modules/,
            loader: 'vue-loader'
        },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: devMode ? 'css/[name][contenthash:8].css' : '[name].[hash].css',
      chunkFilename: devMode ? 'css/[id][contenthash:8].css' : '[id].[hash].css',
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../src/view/template.html'), // html模板
      filename: 'index.html'
    }),
    new VueLoaderPlugin()
  ]
};
