const config = require('config-lite')(__dirname)
const Mongolass = require('mongolass')
const mongolass = new Mongolass(config.mongodb.url)

exports.mongolass = mongolass

exports.Types = {
  Numeric (actual, key, parent) {
    if (isNaN(+actual)) {
      return false
    }
    if (key != null) {
      parent[key] = +actual
    }
    return true
  }
}

exports.User = mongolass.model('User', {
  uid: { type: exports.Types.Numeric, required: true },
  name: { type: 'string', required: true },
  age: { type: exports.Types.Numeric, default: 18 }
})
exports.User.index({ name: 1 }, { unique: true }).exec()
