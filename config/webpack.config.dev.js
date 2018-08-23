'use strict'

const webpack = require('webpack')
const merge = require('webpack-merge')

const baseConfig = require('./webpack.config.base')

const HOST = 'localhost'
const PORT = 5000

module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    hot: true,
    host: HOST,
    port: PORT,
    watchOptions: {
      poll: true
    },
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})