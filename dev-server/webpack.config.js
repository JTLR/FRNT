var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: [
    "./src/app/index"
  ],

  output: {
    path: path.join(__dirname, "../build/js"),
    publicPath: "/js/",
    filename: "app.js"
  },

  module: {
    loaders: [
    	{
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: "babel"
      }, {
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
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        drop_console: true
      },
      minify: true
    })
  ]
};
