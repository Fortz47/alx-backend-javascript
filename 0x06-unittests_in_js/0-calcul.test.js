#!/usr/bin/node

const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return 4 when adding 1 and 3', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });
  it('should return 5 when adding 1 and 3.7', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });
  it('should return 5 when adding 1.2 and 3.7', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });
  it('should return 6 when adding 1.5 and 3.7', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
  it('should return 0 when adding 0.1 and 0.3', () => {
    assert.strictEqual(calculateNumber(0.1, 0.3), 0);
  });
  it('should return 0 when adding 0.1 and 0.4', () => {
    assert.strictEqual(calculateNumber(0.1, 0.4), 0);
  });
  it('should return 1 when adding 0.1 and 0.5', () => {
    assert.strictEqual(calculateNumber(0.1, 0.5), 1);
  });
  it('should return 1 when adding 0.1 and 0.6', () => {
    assert.strictEqual(calculateNumber(0.1, 0.6), 1);
  });
  it('should return 1 when adding 0.1 and 0.7', () => {
    assert.strictEqual(calculateNumber(0.1, 0.7), 1);
  });
  it('should return 1 when adding 0.1 and 0.8', () => {
    assert.strictEqual(calculateNumber(0.1, 0.8), 1);
  });
  it('should return 1 when adding 0.1 and 0.9', () => {
    assert.strictEqual(calculateNumber(0.1, 0.9), 1);
  });
  it('should return 1 when adding 0.1 and 1', () => {
    assert.strictEqual(calculateNumber(0.1, 1), 1);
  });
});
