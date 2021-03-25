function saveMessage (req, res) {
  res.send('Save message from controller');
}

function getAllMessages (req, res) {
  res.send('Hello from GET ALLL');
}


module.exports = {saveMessage, getAllMessages};