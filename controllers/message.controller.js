const client = require('../models/index');
const model = require('../models/message');




async function saveMessage (req, res) {

  const msg = req.body;
  const result = await model.insertDocument(client, msg);
  res.status(201).json(result);
}

async function getAllMessages (req, res) {
  const messages = await model.findDocuments(client);

  // res.send('Hello from GET ALL');
  res.json(messages);
}


module.exports = {saveMessage, getAllMessages};