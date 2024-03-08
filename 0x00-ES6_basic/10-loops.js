#!/usr/bin/node

export default function appendToEachArrayValue(array, appendString) {
  for (const idx of array) {
    /* eslint-disable */
    const value = idx;
  }

  return array.map((v) => appendString + v);
}
