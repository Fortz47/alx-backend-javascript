#!/usr/bin/node

const { createServer } = require('http');
const countStudents = require('./3-read_file_async');

const hostname = '127.0.0.1';
const port = 1245;

const app = createServer(async (req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    const msg = 'This is the list of our students\n';
    await countStudents(process.argv[2])
      .then((data) => {
        res.end(msg + data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
