#!/usr/bin/node

const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');
const sinon = require('sinon');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', function() {
	it('Utils.calculateNumber should be called with ("SUM", 100, 20)', function() {
		sinon.spy(Utils, 'calculateNumber');
		sendPaymentRequestToApi(100, 20);
		expect(Utils.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
	});
});