const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => res.send('Hello Mongo'))

app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));