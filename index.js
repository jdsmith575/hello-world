'use strict';

const express = require('express');

//constants
const PORT = 80;
const HOST = '0.0.0.0';

// app
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(PORT, function () {
  console.log('Example app listening on port 8080!');
});