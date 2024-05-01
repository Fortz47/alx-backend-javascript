#!/usr/bin/node

const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 4 when adding 1 and 3', () => {
      expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    });
    it('should return 5 when adding 1 and 3.7', () => {
      expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
    });
    it('should return  5 when adding 1.2 and 3.7', () => {
      expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
    });
    it('should return -4 when adding -1 and -3', () => {
      expect(calculateNumber('SUM', -1, -3)).to.equal(-4);
    });
  });
  describe('SUBTRACT', () => {
    it('should return -2 when subtracting 1 from 3', () => {
      expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
    });
    it('should return -3 when subtracting 1.2 from 3.7', () => {
      expect(calculateNumber('SUBTRACT', 1.2, 3.7)).to.equal(-3);
    });
    it('should return -3 when subtracting 1 from 3.7', () => {
      expect(calculateNumber('SUBTRACT', 1, 3.7)).to.equal(-3);
    });
    it('should return 2 when subtracting -1 from -3', () => {
      expect(calculateNumber('SUBTRACT', -1, -3)).to.equal(2);
    });
  });
  describe('DIVIDE', () => {
    it('should return 3 when dividing 9 by 3', () => {
      expect(calculateNumber('DIVIDE', 9, 3)).to.equal(3);
    });
    it('should return 3 when dividing 12.1 by 3.7', () => {
      expect(calculateNumber('DIVIDE', 12.1, 3.7)).to.equal(3);
    });
    it('should return 4 when dividing 15.8 by 3.7', () => {
      expect(calculateNumber('DIVIDE', 15.8, 3.7)).to.equal(4);
    });
    it('should return Error when dividing 3 by 0', () => {
      expect(calculateNumber('DIVIDE', 3, 0)).to.equal('Error');
    });
  });
});
