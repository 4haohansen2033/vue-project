process.env.NODE_ENV = "production";
const webpack = require("webpack");
const merge = require("webpack-merge");
const path = require("path");
const baseConfig = require("./webpack.base");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetPlugin = require("optimize-css-assets-webpack-plugin");
module.exports = merge(baseConfig, {
  mode: "production",
  optimization: {
    minimizer: [new OptimizeCssAssetPlugin({})],
    splitChunks: {
      cacheGroups: {
        // commons: {
        //   name: "commons",
        //   chunks: "initial",
        //   minChunks: 2
        // }
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    },
    runtimeChunk: true
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash].css"
    }),
    new HtmlWebPackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "../src/index.html"),
      favicon: path.resolve(__dirname, "../src/favicon.ico"),
      inject: true
    })
  ]
});
