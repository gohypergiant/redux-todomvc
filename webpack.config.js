const webpack = require('webpack');

module.exports = {
  devtool: '#eval',

  entry: [
    'webpack-hot-middleware/client',
    './src/index.js',
  ],

  output: {
    path: '/',
    filename: 'bundle.js',
    publicPath: '/static/',
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: [
            'es2015',
            'react',
          ],
        },
      },
      {
        test: /\.css?$/,
        loaders: ['style', 'raw'],
      },
    ],
  },

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'develop'),
      },
    }),
  ],
};
