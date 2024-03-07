#!/usr/bin/node

import ClassRoom from './0-classroom';

export default function initializeRooms {
  const arr = [];
  for (const val of [19, 20, 34]) {
    arr.push(new ClassRoom(val));
  }
  return arr.forEach((v) => {
    `ClassRoom  { _maxStudentsSize: ${v._maxStudentsSize}}`;
  })
}
