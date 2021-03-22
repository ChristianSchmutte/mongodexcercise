const db = require('../db/db');
function getAllMessages () {
  
  return {
    msgs: ['hello', 'brainfart', 'pipikaka']
  }
}

function postMessage (msg) {
  
  db.msgs.push(msg);
  return msg;
}
module.exports = {getAllMessages, postMessage};