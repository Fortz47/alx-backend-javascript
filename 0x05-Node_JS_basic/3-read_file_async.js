#!/usr/bin/node

const fs = require('fs');

async function countStudents(path) {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      throw new Error('Cannot load the database');
    }
    const CS = [];
    const SWE = [];
    let count = 0;
    const toList = data.split('\n');
    toList.shift();
    toList.forEach((val) => {
      const values = val.split(',');
      if (values[3] === 'CS') {
        CS.push(values[0]);
      } else if (values[3] === 'SWE') {
        SWE.push(values[0]);
      }
      if (val) count += 1;
    });
    console.log(`Number of students: ${count}`);
    console.log(`Number of students in CS: ${CS.length}. List: ${CS.join(', ')}`);
    console.log(`Number of students in SWE: ${SWE.length}. List: ${SWE.join(', ')}`);
  });
}

module.exports = countStudents;
