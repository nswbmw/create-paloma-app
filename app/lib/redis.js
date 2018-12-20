const Redis = require('ioredis')
const config = require('config-lite')(__dirname)
const redis = new Redis(config.redis)

module.exports = redis
