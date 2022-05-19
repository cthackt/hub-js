const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  mode: "development",
  devServer: {
   static: './dist',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
   path: path.resolve(__dirname, 'dist'),
   filename: '[name].js',
 },
  optimization: {
   runtimeChunk: 'single',
  },
  plugins: [new HtmlWebpackPlugin()],
};