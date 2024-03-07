#!/usr/bin/node

export default class HolbertonCourse {
  constructor(name, lenght, students) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw TypeError('Lenght must be a number');
    }
    if (typeof students === 'array') {
      if (students.some((str) => typeof str !== 'string')) {
        throw TypeError('Students must be an array of strings');
      }
    } else {
      throw TypeError('Students must be an array of strings');
    }
    this._name =  name;
    this._lenght = lenght;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(val) {
    this._name = val;
  }

  get length() {
    return this._length;
  }

  set length(val) {
    this._length = val;
  }

  get students() {
    return this._students;
  }

  set students(val) {
    this._students = val;
  }
}
