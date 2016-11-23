const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'static');
const APP_DIR = path.resolve(__dirname, './');

const config = {
  entry: {
    app: [
      APP_DIR + '/index.jsx',
      APP_DIR + '/assets/global.css',
    ]
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: [
      '', '.css', '.js', '.jsx', '.json', '.md'
    ],
    packageMains: [
      'browser', 'web', 'browserify', 'main', 'style'
    ],
    modulesDirectories: [
      'node_modules',
      path.resolve(__dirname, './node_modules')
    ],
    alias: {
      'components': path.resolve(__dirname, './components/'),
      'assets': path.resolve(__dirname, './assets/'),
      'base': path.resolve(__dirname, './')
    }
  },
  module: {
    loaders: [
      {
        test: /\.(jpg|jpeg|png|eot|ttf|woff|svg)/,
        loader: 'file'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react', 'stage-2']
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]')
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('docs.css', {allChunks: true}),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  devServer: {
    port: process.env.PORT || 3000,
    host: '0.0.0.0',
    colors: true,
    publicPath: '/static',
    contentBase: './',
    historyApiFallback: true
  }
};

module.exports = config;