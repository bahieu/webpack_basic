const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bahieu.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
  plugins: [new HtmlWebpackPlugin()],
};
