#!/usr/bin/node

const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('returns a resolved promise with a token', (done) => {
    const result = getPaymentTokenFromAPI(true);
    expect(result).to.be.an.instanceOf(Promise);
    result.then((value) => {
      expect(value).to.eql({ data: 'Successful response from the API' });
      done();
    }).catch((error) => done(error));
  });
});
