// publish npm pkg config

const merge     = require('webpack-merge');
const webpack   = require('webpack');
const {resolve} = require('path');

const commonConfig = require('./webpack.config.common');

module.exports = merge(commonConfig, {
  entry: './loader.tsx',
  context: resolve(__dirname, ''),
  output: {
    filename: 'bundle.min.js',
    path: resolve(__dirname, 'lib'),
    publicPath: '/',
    libraryTarget: 'umd',
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: false,
      minimize: true,
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
    }),
  ],
  externals: [
    {
      'react': {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      },
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom'
      }
    }
  ],
});
