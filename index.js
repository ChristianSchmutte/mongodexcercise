const express = require('express');
const app = express();
const PORT = 3000;
const router = require('./router');
const db = require('./models/index');


app.use(express.static('./client'));
app.use(express.json());
app.use(router);

db.connect(function(err) {
  if(!err) {
    
    console.log('Connected successfully to server');
    const messageDB = db.db('messagesdb');

    const collection = messageDB.collection('messages');
    const result = collection.find({}).toArray();
    result
    .then(items => console.log(items))
    .catch(e => console.log(e));
    app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));
    
    db.close();
  }
});