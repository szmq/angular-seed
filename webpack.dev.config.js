var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: {
    app: './src/app.module.js',
    vendors: ['angular', 'angular-route', 'angular-resource',
              'angular-animate'],
  },

  output: {
    path: __dirname + '/build',
    filename: 'bundle.js',
  },
  // module: {
  //   loaders: [
  //     {test: /\.js$/, loader: 'babel-loader'},
  //     {test: /\.html$/, loader: 'raw'},
  //     {test: /\.css$/, loader: 'style!css'},
  //     {test: /\.scss$/, loader: 'style!css!sass'}
  //   ],
  // },
  plugins: [
    new BrowserSyncPlugin({
      // browse to http://localhost:8000/ during development,
      // ./public directory is being served
      host: '127.0.0.1',
      port: 8000,
      server: {baseDir: ['build']},
      files: ['src/'],
      injectChanges: true,
      reloadDelay: 200,
    }),
    new webpack.optimize.CommonsChunkPlugin({name: 'vendors',
                                             filename: 'vendors.js'}),
  ],
  watch: false,
};
