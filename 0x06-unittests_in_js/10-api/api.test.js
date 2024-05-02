#!/usr/bin/node

const { expect } = require('chai');
const request = require('request');

describe('Index page', () => {
  it('Status code should be 200', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Body should be "Welcome to the payment system"', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart page', () => {
  it('Status code should be 200', (done) => {
    request('http://localhost:7865/cart/12', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
  it('Body should be "Payment methods for cart 12"', (done) => {
    request('http://localhost:7865/cart/12', (error, response, body) => {
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });
  it ('Status code should be 404 when id is not number', (done) => {
    request('http://localhost:7865/cart/hello', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});

describe('Available Payments', () => {
  it('Status code should be 200', (done) => {
    request('http://localhost:7865/available_payments', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
  it('Body should be {"payment_methods":{"credit_cards":true,"paypal":false}}', (done) => {
    request('http://localhost:7865/available_payments', (error, response, body) => {
      expect(body).to.equal('{"payment_methods":{"credit_cards":true,"paypal":false}}');
      done();
    });
  });
});

describe('Login page', () => {
  const options = {
    'url': 'http://localhost:7865/login',
    'method': 'POST',
    'headers': {'Content-Type': 'application/json'},
    'body': JSON.stringify({'userName': 'Betty'})
  };
  it('Status code should be 200', (done) => {
    request.post(options, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
  it('Body should be "Welcome Betty"', (done) => {
    request.post(options, (error, response, body) => {
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });
});
