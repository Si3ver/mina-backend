const Router = require('koa-router')
const router = new Router()
const { HttpException, ParameterException } = require('../../../core/http-exception')

router.post('/v1/:id/classic/latest', (ctx, next) => {
  const {params} = ctx
  const {query, header, body} = ctx.request
  if (!query) {
    const error = new ParameterException()
    throw error;
  }

  console.log('👉: params', params)
  console.log('👉: body', body)
  console.log('👉: header', header)
  console.log('👉: query', query)
  
  ctx.body = body
})

module.exports = router
