const path = require("path");
const webpack = require("webpack");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  entry: {
    server: "./apps/universal-test/server.ts"
  },
  resolve: {
    extensions: [".ts", ".js", "json"],
    plugins: [new TsconfigPathsPlugin({ configFile: "./tsconfig.json" })]
  },
  target: "node",
  mode: "none",
  output: {
    path: path.resolve(__dirname, "..", "..", "dist", "apps", "universal-test"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /\.spec\.ts$/,
        loader: "ts-loader"
      }
    ]
  },
  plugins: [
    new webpack.ContextReplacementPlugin(/(.+)?angular(\\|\/)core(.+)?/, path.join(__dirname, "apps", "universal-test"), {}),
    new webpack.ContextReplacementPlugin(/(.+)?express(\\|\/)(.+)?/, path.join(__dirname, "apps", "universal-test"), {})
  ]
};
