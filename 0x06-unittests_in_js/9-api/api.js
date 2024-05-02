#!/usr/bin/node

const express = require('express');

const app = express();

const port = 7865;
const host = 'localhost';

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end(`Payment methods for cart ${req.params.id}`);
});

app.listen(port, host, () => {
  console.log(`API available on ${host}:${port}`);
});
