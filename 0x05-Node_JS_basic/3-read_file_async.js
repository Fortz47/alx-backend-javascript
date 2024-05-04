#!/usr/bin/node

const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const CS = [];
        const SWE = [];
        let count = 0;
        const toList = data.split('\n');
        // remove field names
        toList.shift();
        toList.forEach((val) => {
          const values = val.split(',');
          if (values[3] === 'CS\r') {
            CS.push(values[0]);
          } else if (values[3] === 'SWE\r') {
            SWE.push(values[0]);
          }
          if (val) count += 1;
        });
        const msg1 = `Number of students: ${count}`;
        const msg2 = `Number of students in CS: ${CS.length}. List: ${CS.join(', ')}`;
        const msg3 = `Number of students in SWE: ${SWE.length}. List: ${SWE.join(', ')}`;
        console.log(msg1);
        console.log(msg2);
        console.log(msg3);
        resolve(`${msg1}\n${msg2}\n${msg3}\n`);
      }
    });
  });
}

module.exports = countStudents;
