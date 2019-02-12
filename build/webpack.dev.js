const merge = require("webpack-merge");
const path = require("path");
const baseConfig = require("./webpack.base");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = merge(baseConfig, {
  mode: "development",
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "../src/index.html"),
      inject: true
    })
  ],
  devtool: "eval-source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "../dist"),
    compress: true,
    port: 9001
  }
});
