const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('No se por que no sale!');
  });

app.listen(3000);
console.log("server");