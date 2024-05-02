#!/usr/bin/node

const express = require('express');

const app = express();

// Middleware to Parse the body of the request
app.use(express.json());

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

app.get('/available_payments', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  }));
});

app.post('/login', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`Welcome ${req.body.userName}`);
});

app.listen(port, host, () => {
  console.log(`API available on ${host}:${port}`);
});
