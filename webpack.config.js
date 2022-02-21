const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: {
    main : "./src/index.js",
    test: "./src/test.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  mode: "development",
  devServer: {
    open: true   
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack with Ba Hieu',
      filename: 'index.html',
    }),
  ],
};
