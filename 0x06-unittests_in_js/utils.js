#!/usr/bin/node

function calculateNumber(type, a, b) {
  if (type === 'SUBTRACT') {
    return Math.round(a) - Math.round(b);
  } if (type === 'DIVIDE') {
    return Math.round(b) === 0 ? 'Error' : Math.round(a) / Math.round(b);
  }
  return Math.round(a) + Math.round(b);
}

const Utils = {'calculateNumber': calculateNumber};
module.exports = Utils;
