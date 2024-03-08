export default function iterateThroughObject(reportWithIterator) {
  const result = [];
  reportWithIterator.forEach((obj) => {
    obj.forEach((v) => result.push(v));
  });
  return result.join(' | ');
}
