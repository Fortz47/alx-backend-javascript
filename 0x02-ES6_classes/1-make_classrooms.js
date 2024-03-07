#!/usr/bin/node

import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const arr = [];
  for (const val of [19, 20, 34]) {
    arr.push(new ClassRoom(val));
  }
  const result = [];
  for (const obj of arr) {
    const [key, val] = Object.entries(obj)[0];
    result.push(`ClassRoom { ${key}: ${val} }`);
  }
  return result;
}
