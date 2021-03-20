const express = require('express');
const app = express();
const PORT = 3000;
const router = require('./router');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static('client'));
app.use(router);

app.listen(PORT, ()=> {
  console.log(`Listening on http://localhost:${PORT}`);
});