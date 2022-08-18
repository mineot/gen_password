const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const appDirectory = fs.realpathSync(process.cwd());
const resolveAppPath = relativePath => path.resolve(appDirectory, relativePath);
process.env.NODE_ENV = 'development';

module.exports = {
  mode: 'development',
  entry: resolveAppPath('public/index.js'),
  output: {
    filename: 'bundle.js',
  },
  devServer: {
    static: resolveAppPath('public'),
    compress: true,
    hot: true,
    port: 8000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: resolveAppPath('public/index.html'),
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
    },
  },
}