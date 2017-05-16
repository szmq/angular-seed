var webpack = require('webpack');
var WebpackShellPlugin = require('webpack-shell-plugin');

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

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({name: 'vendors',
                                             filename: 'vendors.js'}),
    new WebpackShellPlugin({
      onBuildEnd: ['npm run start-http'],
    }),
  ],
  watch: false,
};
