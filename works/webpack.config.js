var webpack = require('webpack');
var path = require('path');

var config = {
  entry: './src/test_json.js',
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  module : {
    loaders : [
     {
       test : /\.jsx?/,
       include : './src',
       loader : 'babel-loader'
     }
   ]
  },
  resolve: {
    extensions: ['.js', '.json']
  }
};

module.exports = config;
