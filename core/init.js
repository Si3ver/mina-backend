const requireDirectory = require('require-directory')
const Router = require('koa-router')

class InitManager {
  static initCore(app) {
    InitManager.app = app
    InitManager.initLoadRouters()
  }
  static initLoadRouters() {
    requireDirectory(module, `${process.cwd()}/app/api`, {visit: whenLoadModule})

    function whenLoadModule (r) {
      if (r instanceof Router) {
        InitManager.app.use(r.routes())
      }
    }
  }
}

module.exports = InitManager
