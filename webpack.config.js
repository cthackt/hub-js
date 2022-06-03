const path = require('path');

module.exports = {
      entry: './src/index.js',
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
   }