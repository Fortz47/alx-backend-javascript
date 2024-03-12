export default function cleanSet(set, startString) {
  const result = [];
  const str = `^(${startString})(.+)`;
  const re = new RegExp(str);
  set.forEach((val) => {
    /* if (val.startsWith(startString) && startString) */
    if (re.exec(val) && re.exec(val)[1] === startString && startString) {
      result.push(re.exec(val)[2]);
    }
  });
  return result.join('-');
}
