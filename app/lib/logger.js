const path = require('path')
const config = require('config-lite')(__dirname)
const tracer = require('tracer')

module.exports = tracer.colorConsole(Object.assign({
  rootDir: path.join(__dirname, '../..'),
  format: '[{{timestamp}}] [{{title}}] ({{folder}}/{{file}}:{{line}} -> {{method}}) {{message}}',
  dateformat: 'yyyy-mm-dd HH:MM:ss'
}, config.logger))
