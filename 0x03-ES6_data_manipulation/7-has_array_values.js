export default function hasValuesFromArray(set, arr) {
  const setA = new Set(arr);
  return setA.every((val) => set.has(val));
}
