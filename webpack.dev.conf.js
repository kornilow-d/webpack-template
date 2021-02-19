const webpack = require("webpack");
const { resolve } = require("path");
const { merge } = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.conf");

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: "development",
  devtool: "inline-source-map",
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: "[name].map",
    }),
  ],
  devServer: {
    port: 8081,
    overlay: true,
    compress: true,
  },
});

module.exports = new Promise((resolve, reject) => {
  resolve(devWebpackConfig);
});
