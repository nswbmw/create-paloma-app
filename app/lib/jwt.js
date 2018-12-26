const _ = require('lodash')
const jwt = require('jsonwebtoken')
const config = require('config-lite')(__dirname)

exports.generateJWT = function generateJWT (user) {
  return jwt.sign(user, config.jwt.secret, _.omit(config.jwt, 'secret'))
}
