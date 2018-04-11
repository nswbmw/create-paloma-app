const config = require('config-lite')(__dirname)
const Paloma = require('paloma')
const logger = require('koa-logger')

const app = global.app = new Paloma()
const pkg = require('./package')

app.constant('_', require('lodash'))
app.constant('config', config)
app.constant('db', require('app/lib/mongo'))
app.constant('redis', require('app/lib/redis'))

app.use(logger())
app.use(require('koa-res')({
  debug: process.env.NODE_ENV !== 'production',
  version: pkg.version
}))

app.load('app/service')
app.load('app/controller')
app.load('app/route')

app.listen(config.port, () => {
  console.log(`listening on ${config.port}`)
})
