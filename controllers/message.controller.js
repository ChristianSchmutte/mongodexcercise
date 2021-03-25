const client = require('../models/index');
const model = require('../models/message');




function saveMessage (req, res) {
  res.send('Save message from controller');
}

async function getAllMessages (req, res) {
  const messages = await model.findDocuments(client);

  // res.send('Hello from GET ALL');
  res.json(messages);
}


module.exports = {saveMessage, getAllMessages};