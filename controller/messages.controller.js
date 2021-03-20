const messagesModel = require('../models/messages.model');


function getAllMessages (req, res) {
  const messages = messagesModel.getAllMessages();
  res.json(messages);
}

function postMessage (req, res) {
  const { body } = req;
  try {
    
    messagesModel.postMessage(body.msg);
    res.status(200).json(body);
  } catch (error) {
    res.status(404).json({msg: `${error}`});
  }
  
}

module.exports = {
  getAllMessages,
  postMessage
};