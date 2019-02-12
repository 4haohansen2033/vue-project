const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

function resolve(dir) {
  return path.resolve(__dirname, "..", dir);
}

module.exports = {
  mode: "production",
  entry: {
    main: resolve("src/main.js")
  },
  output: {
    path: resolve("dist"),
    filename: "[name].[hash:7].js"
  },
  resolve: {
    extensions: [".js", ".vue", ".json"],
    modules: [resolve("src"), "node_modules"],
    alias: {
      vue$: "vue/dist/vue.common.js",
      src: resolve("src")
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.js/,
        loader: "babel-loader",
        exclude: file => /node_modules/.test(file) && !/\.vue\.js/.test(file)
      },
      {
        test: /\.css/,
        use: [
          process.env.NODE_ENV !== "production"
            ? "vue-style-loader"
            : MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      },
      {
        test: /\.less/,
        use: [
          process.env.NODE_ENV !== "production"
            ? "vue-style-loader"
            : MiniCssExtractPlugin.loader,
          "css-loader",
          "less-loader"
        ]
      },
      {
        test: /\.(jpeg|jpg|png|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 50000,
              outputPath: "image"
            }
          }
        ]
      },
      {
        test: /\.(ttf|woff2?|eot|otf)(\?.*)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000,
              outputPath: "font"
            }
          }
        ]
      }
    ]
  }
};
