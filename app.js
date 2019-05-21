const path = require('path')
const config = require('config-lite')(__dirname)
const Paloma = require('paloma')

const app = global.app = new Paloma()
const logger = require('./app/lib/logger')

app.on('error', (e) => logger.error(e))

app.constant('_', require('lodash'))
app.constant('config', config)
app.constant('db', require('./app/lib/db'))
app.constant('redis', require('./app/lib/redis'))
app.constant('logger', logger)

app.use(require('koa-helmet')())
app.use(require('@koa/cors')())
app.use(require('koa-logger')())
app.use(require('koa-body')({
  multipart: true,
  formidable: {
    uploadDir: path.join(__dirname, 'upload'),
    keepExtensions: true
  }
}))
app.use(require('koa-res')({
  debug: process.env.NODE_ENV !== 'production'
}))

app.load('./app/service')
app.load('./app/controller')
app.load('./app/route')

app.listen(config.port, () => {
  console.log(`listening on ${config.port}`)
})
