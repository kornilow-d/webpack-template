const webpack = require("webpack");
const { merge } = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.conf");

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    port: 8081,
    overlay: true,
    compress: true,
    contentBase: baseWebpackConfig.externals.paths.dist,
  },
});

module.exports = new Promise((resolve, reject) => {
  resolve(devWebpackConfig);
});
