const Koa = require('koa')
const Router = require('koa-router')
const requireDirectory = require('require-directory')

const app = new Koa()

const apis = requireDirectory(module, './app/api', {visit: whenLoadModule})

function whenLoadModule (r) {
  if (r instanceof Router) {
    app.use(r.routes())
  }
}

app.listen(3000)
