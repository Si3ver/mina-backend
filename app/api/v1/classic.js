const Router = require('koa-router')
const router = new Router()

router.post('/v1/:id/classic/latest', (ctx, next) => {
  const {params} = ctx
  const {query, header, body} = ctx.request
  console.log('👉: params', params)
  console.log('👉: body', body)
  console.log('👉: header', header)
  console.log('👉: query', query)
  
  ctx.body = body
})

module.exports = router
