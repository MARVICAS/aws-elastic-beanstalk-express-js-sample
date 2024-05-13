const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('This is for module 1 and 2 for aws '));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
