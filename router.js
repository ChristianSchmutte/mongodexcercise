const express = require('express');
const router = express.Router();
const path = require('path');
const messageController = require('./controller/messages.controller');

router.get('/', (req, res) => {

  res.send('Hello World');

});

router.get('/messages', messageController.getAllMessages);
router.post('/messages', messageController.postMessage);


module.exports = router;