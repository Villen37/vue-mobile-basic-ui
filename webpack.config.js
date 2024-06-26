/**
 * Created by villen on 2018/10/24.
 */
const path = require("path");
const webpack = require("webpack");
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
    devtool: 'source-map',
    resolve: {
        alias: { // 别名
            '@src': path.resolve(__dirname, '../src')
        }
    },
    entry: "./src/index.js",//入口文件，就是上步骤的src目录下的index.js文件，
    output: {
        path: path.resolve(__dirname, './lib'),//输出路径，就是上步骤中新建的lib目录，
        publicPath: '/lib/',
        filename: 'vueMobileBasicUi.min.js',
        libraryTarget: 'umd',
        umdNamedDefine: true
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
                test: /\.vtpl$/,
                loader: "vue-template-loader",
                options: {
                    // scoped: true,
                    transformAssetUrls: {
                        // The key should be an element name
                        // The value should be an attribute name or an array of attribute names
                        img: 'src'
                    }
                }
            },
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                use: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|ttf|svg|woff|eot)$/,
                loader: 'url-loader',
                query: {
                    limit: 30000,
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    plugins: [
        new UglifyJSPlugin(),
        new MiniCssExtractPlugin({
            filename: `style/vueMobileBasicUi.min.css`
        }),
        new OptimizeCSSAssetsPlugin({}),
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        })
    ]
};
