const express = require('express');
const app = express();
const PORT = 3000;
const router = require('./router');
const db = require('./models/index');


app.use(express.static('./client'));
app.use(express.json());
app.use(router);

app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));