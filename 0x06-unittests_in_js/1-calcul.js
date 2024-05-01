#!/usr/bin/node

function calculateNumber(type, a, b) {
	if (type === 'SUBTRACT') {
		return Math.round(a) - Math.round(b);
	} else if (type === 'DIVIDE') {
		return Math.round(b) === 0 ? 'Error' : Math.round(a) / Math.round(b);
	} else if (type === 'SUM') {
  	return Math.round(a) + Math.round(b);
	}
}

module.exports = calculateNumber;
