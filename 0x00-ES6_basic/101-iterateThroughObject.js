export default function iterateThroughObject(reportWithIterator) {
  const result = [];
  Object.values(report.allEmployees).forEach((obj) => {
    obj.forEach((v) => result.push(v));
  });
  return result.join(' | ');
}
