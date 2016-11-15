const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const pkg = require('../package.json');

exports.eslint = function(paths) {
  return {
    module: {
      preLoaders: [{
        test: /\.js$/,
        loaders: ['eslint'],
        include: paths,
      }]
    }
  };
}

exports.babel = function(paths) {
  return {
    resolve: { extensions: ['', '.js'] },
    module: {
      loaders: [{
        test: /\.js$/,
        loader: 'babel',
        include: paths,
      }]
    }
  };
}

exports.minify = function() {
  return {
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        beautify: false,
        comments: false,
        compress: {
          warnings: false,
          drop_console: true
        },
        mangle: {
          except: ['$'],
          screw_ie8: true,
          keep_fnames: true
        },
        sourceMap: false,
      })
    ]
  };
}

exports.setFreeVariable = function(key, val) {
  const env = {};
  env[key] = JSON.stringify(val);
  return {
    plugins: [new webpack.DefinePlugin(env)]
  };
}

exports.clean = function(path) {
  return { plugins: [ new CleanWebpackPlugin([path], {root: process.cwd()}) ] };
}
