const webpack = require('webpack-4')
const config = require('./webpack.config')
const fs = require('fs')
const path = require('path')

console.log('Testing with Webpack version ' + webpack.version)

webpack(config, (err, stats) => {
  if (err || stats.hasErrors()) {
    console.error('Error', stats.toJson())
  } else {
    console.log(fs.readFileSync(path.join(__dirname, 'dist', 'output.js'), 'utf8'))
  }
})