const Koa = require('koa');
const Router = require('@koa/router');
const messagesController = require('./controller/messages.controller');

const router = new Router();

router.get('/messages', messagesController.getAllMessages)
router.post('/messages', messagesController.postMessage);

module.exports = router;