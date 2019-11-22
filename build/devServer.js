/**
 * Created by Villen on 19/11/22.
 */
const Wds = require("webpack-dev-server");
const webpack = require("webpack");
const getWebpackConfig = require("./conf/webpack.config.dev");
const path = require("path");

let entries = process.argv.slice(2);
if (!entries.length) entries = null;

const devConfig = getWebpackConfig(entries);
const options = {
    compress: true,
    publicPath: "/",
    contentBase: path.join(__dirname, "../"),
    port: 8787,
    hot: true,
    host: "localhost.dev.com"
};

Wds.addDevServerEntrypoints(devConfig, options);

const compiler = webpack(devConfig);
const server = new Wds(compiler, options);

server.listen(options.port, options.host, () => {
    console.log("server started");
});
