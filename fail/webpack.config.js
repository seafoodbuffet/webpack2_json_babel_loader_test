var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.resolve(__dirname, 'src');
var BUILD_DIR = path.resolve(__dirname, 'build');

var config = {
  entry: APP_DIR + '/test_json.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
     {
       test : /\.jsx?/,
       include : APP_DIR,
       loader : 'babel-loader'
     }
   ]
  },
  resolve: {
    extensions: ['.js', '.json']
  }
};

module.exports = config;
