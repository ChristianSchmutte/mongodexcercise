const Koa = require('koa');
const app = new Koa()
const PORT = 3000;
const router = require('./router');
const static = require('koa-static');
const bodyParser = require('koa-bodyparser');


app.use(static('./client'));
app.use(bodyParser());
app.on('error', err => {
  log.error('server error', err)
});
app.use(router.routes(), router.allowedMethods())



app.listen(PORT, ()=> {
  console.log(`Listening on http://localhost:${PORT}`);
});