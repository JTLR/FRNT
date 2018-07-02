var path = require("path");
var webpack = require("webpack");
var publicPath =
    __dirname.indexOf("FRNT") !== -1
        ? "/FRNT/wp-content/themes/FRNT/js/"
        : "/wp-content/themes/FRNT/js/";
var hash =
    Math.random()
        .toString(36)
        .substring(2, 15) +
    Math.random()
        .toString(36)
        .substring(2, 15) +
    Math.random()
        .toString(36)
        .substring(2, 15) +
    Math.random()
        .toString(36)
        .substring(2, 15);

module.exports = {
    entry: "./src/js/main.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist/js"),
        chunkFilename: hash + ".[id].main.chunk.js",
        publicPath: publicPath
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                use: "babel-loader"
            },
            {
                test: /\.json$/,
                use: "json"
            }
        ]
    },
    devtool: "source-map"
};
