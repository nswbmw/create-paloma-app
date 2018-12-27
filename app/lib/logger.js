const path = require('path')
const config = require('config-lite')(__dirname)
const tracer = require('tracer2')

module.exports = tracer.colorConsole(Object.assign({
  rootDir: path.join(__dirname, '../..')
}, config.logger))
