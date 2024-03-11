export default function cleanSet(set, startString) {
  const result = [];
  const re = new RegExp(`^${startString}(.*)`);
  set.forEach((val) => {
    if (val.startsWith(startString) && startString) {
      result.push(re.exec(val)[1]);
    }
  });
  return result.join('-');
}
