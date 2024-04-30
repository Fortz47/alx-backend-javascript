#!/usr/bin/node

function displayMessage(stringArg) {
  process.stdout.write(`${stringArg}\n`);
}

module.exports = displayMessage;
