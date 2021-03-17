const webpack = require('webpack-5')
const config = require('./webpack.config')
const fs = require('fs')
const path = require('path')

webpack(config, (err, stats) => {
  if (err || stats.hasErrors()) {
    console.error('Error', stats.toJson())
  } else {
    console.log(fs.readFileSync(path.join(__dirname, 'output.js'), 'utf8'))
  }
})