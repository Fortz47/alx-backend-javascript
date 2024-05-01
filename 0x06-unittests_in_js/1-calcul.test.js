#!/usr/bin/node

const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
	describe('SUM', () => {
		it('should return 4 when adding 1 and 3', () => {
			assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
		});
		it('should return 5 when adding 1 and 3.7', () => {
			assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
		});
		it('should return 5 when adding 1.2 and 3.7', () => {
			assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
		});
		it('should return 6 when adding 1.5 and 3.7', () => {
			assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
		});
	});
	describe('SUBTRACT', () => {
		it('should return -2 when subtracting 1 from 3', () => {
			assert.strictEqual(calculateNumber('SUBTRACT', 3, 1), 2);
		});
		it('should return -3 when subtracting 1 from 3.7', () => {
			assert.strictEqual(calculateNumber('SUBTRACT', 3.7, 1), 3);
		});
		it('should return -3 when subtracting 1.2 from 3.7', () => {
			assert.strictEqual(calculateNumber('SUBTRACT', 3.7, 1.2), 3);
		});
		it('should return -2 when subtracting 1.5 from 3.7', () => {
			assert.strictEqual(calculateNumber('SUBTRACT', 3.7, 1.5), 2);
		});
	});
	describe('DIVIDE', () => {
		it('should return 3 when dividing 9 by 3', () => {
			assert.strictEqual(calculateNumber('DIVIDE', 9, 3), 3);
		});
		it('should return 3 when dividing 12.1 by 3.7', () => {
			assert.strictEqual(calculateNumber('DIVIDE', 12.1, 3.7), 3);
		});
		it('should return 4 when dividing 15.8 by 3.7', () => {
			assert.strictEqual(calculateNumber('DIVIDE', 15.8, 3.7), 4);
		});
		it('should return Error when dividing 3 by 0', () => {
			assert.strictEqual(calculateNumber('DIVIDE', 3, 0), 'Error');
		});
	});
});
