const { HttpException } = require('../core/http-exception')

const catchError = async (ctx, next) => {
  try {
    await next()
  } catch (error) {
    console.log(error, error.message)
    console.log('👉: catchError -> error.errorCode', error.errorCode)
    if (error instanceof HttpException) { // 捕获了已知异常
      ctx.body = {
        msg: error.msg,
        error_code: error.errorCode,
        request: `${ctx.method} ${ctx.path}`
      }
      ctx.status = error.code
    } else {   // 捕获了未知异常
      ctx.body = {
        msg: 'we made a mistake 😢',
        error_code: 999999,
        request: `${ctx.method} ${ctx.path}`
      }
      ctx.status = 500
    }
    // ctx.body = '服务器有点累，请稍等一下'
  }
}

module.exports = catchError
