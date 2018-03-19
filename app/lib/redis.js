const Redis = require('ioredis')
const config = require('config-lite')(__dirname)
const redis = new Redis({
  host: config.host,
  port: config.port
})

module.exports = redis
