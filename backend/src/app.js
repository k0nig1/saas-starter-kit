const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('SaaS Starter Kit is running!');
});

module.exports = app;