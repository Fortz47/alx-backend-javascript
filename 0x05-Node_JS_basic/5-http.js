#!/usr/bin/node

const { createServer } = require('http');
const countStudents = require('./3-read_file_async');

const hostname = '127.0.0.1';
const port = 1245;

const app = createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.statusCode = 200;
    let msg = 'This is the list of our students\n';
    countStudents(process.argv[2])
      .then((data) => {
        msg += data;
        res.end(msg);
      })
      .catch((error) => {
        msg += error.message;
        res.end(msg);
      });
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
