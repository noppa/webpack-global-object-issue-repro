const webpack = process.argv.includes('--webpack-version=4')
  ? require('webpack-4')
  : require('webpack-5')

const config = require('./webpack.config')
const fs = require('fs')
const path = require('path')


webpack(config, (err, stats) => {
  if (err || stats.hasErrors()) {
    console.error('Error', stats.toJson())
  } else {
    console.log(fs.readFileSync(path.join(__dirname, 'dist', 'output.js'), 'utf8'))
    console.log('The above output was built to dist/output.js with Webpack version ' + webpack.version)
  }
})