const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('This is for lab_Marvic2222'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
