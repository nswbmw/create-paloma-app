const config = require('config-lite')(__dirname)
const tracer = require('tracer')

module.exports = tracer.colorConsole(config.logger)
