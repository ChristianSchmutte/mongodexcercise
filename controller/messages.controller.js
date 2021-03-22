const messagesModel = require('../models/messages.model');


function getAllMessages (ctx) {
  const messages = messagesModel.getAllMessages();
  console.log(messages);
  ctx.body = messages;
}

async function postMessage (ctx) {
  // const { body } = ctx.request;
  // console.log(ctx.request.body);
  try {
    const result = messagesModel.postMessage(ctx.request.body);
    ctx.body = result;
  } catch (error) {
    ctx.status(404).body('Sorry');
  }
  
}

module.exports = {
  getAllMessages,
  postMessage
};