#!/usr/bin/node

function displayMessage(string_arg) {
  process.stdout.write(`${string_arg}\n`);
}

module.exports = displayMessage;
