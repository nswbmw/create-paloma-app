const config = require('config-lite')(__dirname)
const Mongolass = require('mongolass')
const mongolass = new Mongolass(config.mongodb.url)

exports.mongolass = mongolass

exports.User = mongolass.model('User', {
  uid: { type: Mongolass.Types.Number, required: true },
  name: { type: Mongolass.Types.String, required: true },
  age: { type: Mongolass.Types.Number, default: 18 }
})
exports.User.index({ name: 1 }, { unique: true }).exec()
