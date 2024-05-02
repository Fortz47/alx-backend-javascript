#!/usr/bin/node

const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('utils.calculateNumber should be called with ("SUM", 100, 20)', () => {
    sinon.stub(Utils, 'calculateNumber').returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(Utils.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(Utils.calculateNumber('SUM', 100, 20)).to.equal(10);
    Utils.calculateNumber.restore();
  });
});
