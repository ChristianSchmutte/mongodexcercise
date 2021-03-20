const db = require('../db/db');
function getAllMessages () {
  return db.msgs;
}

function postMessage (msg) {
  if (typeof msg !== 'string') throw Error('Expected message to be a string type');
  db.msgs.push(msg);
  // return db.msgs;
}
module.exports = {getAllMessages, postMessage};