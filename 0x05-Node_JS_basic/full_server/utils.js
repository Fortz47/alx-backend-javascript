#!/usr/bin/node

import fs from 'fs';

export function readDatabase(path){
	return new Promise((resolve, reject) => {
		fs.readFile(path, 'utf8', (err, data) => {
			if (err) {
				reject(Error('Cannot load the database'));
				return;
			}
			const toList = data.split('\n');
			const students = toList.slice(1, toList.length);
			const csStudents = students.filter((student) => student.split(',')[3] === 'CS\r').map((student) => student.split(',')[0]);
			const sweStudents = students.filter((student) => student.split(',')[3] === 'SWE\r').map((student) => student.split(',')[0]);
			resolve({ csStudents, sweStudents });
		});
});
}
