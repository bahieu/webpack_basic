const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: {
    index: './src/index.js',
    home: './src/home.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  mode: "development",
  devServer: {
    open: true   
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack with Ba Hieu',
      filename: 'index.html',
    }),
  ], 
   optimization: {
     splitChunks: {
       chunks: 'all'
     }
   } 
};
