const express = require('express');
const app = express();
const PORT = 3000;
const router = require('./router');
const db = require('./models/index');

const mongoose = require('mongoose');



app.use(express.static('./client'));
app.use(express.json());
app.use(router);

(async function bootstrap() {
  await mongoose.connect('mongodb://localhost/messagesdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})
})();

app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));