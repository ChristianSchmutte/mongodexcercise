const client = require('../models/index');
const model = require('../models/message');




async function saveMessage (req, res) {

  try {
    const msg = req.body;
    const result = await model.insertDocument(msg);
    res.status(201).json(result);
  } catch(err) {
    res.status(500).json({msg: 'Server error, please try again later'});
  }
}

async function getAllMessages (req, res) {
  try {
    const messages = await model.findDocuments();
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({msg: 'Server error, please try again later'});
  }

}


module.exports = {saveMessage, getAllMessages};