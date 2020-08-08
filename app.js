const Koa = require('koa')
const parser = require('koa-bodyparser')
const exception = require('./middlewares/exception')
const InitManager = require('./core/init')

const app = new Koa()

app.use(exception)
app.use(parser())
InitManager.initCore(app)

app.listen(3000)
