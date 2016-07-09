const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.join(__dirname, '../src'),
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './index.js'
  ],
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'app.js',
    publicPath: '/dist'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      __DEVELOPMENT__: true
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      include: path.join(__dirname, '../src')
    }]
  }
};
