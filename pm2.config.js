const pkg = require('./package')

module.exports = {
  apps: [
    {
      name: pkg.name,
      script: './app.js',
      env: {
        NODE_ENV: 'production'
      },
      instances: 0,
      exec_mode: 'cluster'
    }
  ]
}
