/**
 * Created by Villen on 19/10/30.
 */

const Wds = require("webpack-dev-server");
const webpack = require("webpack");
const path = require("path");
const getWebpackConfig = require("./conf/webpack.conf.dev");

let entries = process.argv.slice(2);

const devConfig = getWebpackConfig(entries);
let option = devConfig.devServer;

Wds.addDevServerEntrypoints(devConfig, option);

const compiler = webpack(devConfig);

const server = new Wds(compiler,option);

let listenHost = devConfig.devServer.host,
    listenPort = devConfig.devServer.port;
server.listen(
    listenPort,
    listenHost,
    () => {
        console.log(`server started at: ${listenHost}:${listenPort}/${devConfig.devServer.openPage}`);
    })
;
