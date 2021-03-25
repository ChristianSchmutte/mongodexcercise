const express = require('express');
const app = express();
const PORT = 3000;
const router = require('./router');

app.use(express.static('./client'));
app.use(express.json());
app.use(router);


app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));