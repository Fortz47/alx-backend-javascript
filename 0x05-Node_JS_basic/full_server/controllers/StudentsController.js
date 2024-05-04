#!/usr/bin/node

import { readDatabase } from "../utils";

export class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2])
      .then(({ csStudents, sweStudents }) => {
        response.statusCode = 200;
        response.write('This is the list of our students\n');
        response.write(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}\n`);
        response.write(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);
        response.end();
      })
      .catch((error) => {
        response.statusCode = 500;
        response.end(error.message);
      });
  }

  static getAllStudentsByMajor(request, response) {
    readDatabase(process.argv[2])
      .then(({ csStudents, sweStudents }) => {
        if (request.params.major === 'CS') {
          response.statusCode = 200;
          response.end(`List: ${csStudents.join(', ')}`);
        } else if (request.params.major === 'SWE') {
          response.statusCode = 200;
          response.end(`List: ${sweStudents.join(', ')}`);
        } else {
          response.statusCode = 500;
          response.end('Major parameter must be CS or SWE');
        }
      })
      .catch((error) => {
        response.statusCode = 500;
        response.end(error.message);
      });
  }
}
