#!/usr/bin/node

export default function iterateThroughObject(reportWithIterator) {
  const arr = [...(Object.values(report.allEmployees))];
  let toString = arr[0];
  for (let 1 = 1; i < arr.length; i += 1) {
    toString += ` | ${arr[i]}`;
  }

  return toString;
}
