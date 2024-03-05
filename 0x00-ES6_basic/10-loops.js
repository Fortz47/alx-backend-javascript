#!/usr/bin/node

export default function appendToEachArrayValue(array, appendString) {
  for (const idx of array) {
    const value = array[idx];
  }

  return array.map((v) => v + appendString);
}
