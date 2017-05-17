var path = require("path");
var webpack = require("webpack");
var os = require('os');
var ifaces = os.networkInterfaces();
var networkInterface = ifaces[Object.keys(ifaces)[1]];
var ipAddress = networkInterface[1];
var ip = ipAddress.address;

var now = new Date();

console.log("/*===============================================*/");
console.log('Your ip is', ip);
console.log("/*===============================================*/");
console.log(`Restarted at: ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`);
console.log("/*===============================================*/");

module.exports = {

    entry: [
        "webpack-dev-server/client?http://" + ip + ":8080",
        "webpack/hot/only-dev-server",
        "./src/app/index"
    ],

    output: {
        path: path.join(__dirname, "/build/js"),
        publicPath: "/js/",
        filename: "app.js"
    },

    devServer: {
        noInfo: true
    },

    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loader: "babel"
            },
            {
                test: /\.pug$/,
                loader: "pug"
            },

            {
                test: /\.json$/,
                loader: "json"
            }
        ]
    },

    resolve: {
        extensions: ['', '.js', '.pug']
    },

    plugins: [
        new webpack.DefinePlugin({
            __DEVELOPMENT__: true,
            __DEVTOOLS__: false
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
}
