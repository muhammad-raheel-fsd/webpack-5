const path = require("path");
const HrmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "./src/index.js"),
  //   can also use objects to split code in chunks
  //   entry: { fileName: path.resolve(__dirname, "./src/index.js") },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.js",
    // Add corresponding path to be used as chunks
    // fileName: "[bundle].js",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
