const jwt = require('koa-jwt')
const config = require('config-lite')(__dirname)
const compose = require('koa-compose')

exports.required = compose([
  jwt(config.jwt)
])

exports.optional = compose([
  jwt(Object.assign({ passthrough: true }, config.jwt))
])
