const path = require('path')

module.exports = {
  entry: {output: path.join(__dirname, 'index.js')},
  mode: 'development',
  devtool: 'source-map',
  output: {
    path: path.join(__dirname),
    filename: '[name].js',

    library: 'myLib',
    libraryTarget: 'umd',
    globalObject: 'xxx',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 1,
    }
  }
}