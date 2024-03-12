export const weakMap = new WeakMap();
export function queryAPI(endPointArg) {
  if (!weakMap.get(endPointArg)) {
    weakMap.set(endPointArg, 1);
  } else {
    weakMap.set(endPointArg, weakMap.get(endPointArg) + 1);
  }
  if (weakMap.get(endPointArg) >= 5) {
    throw new Error('Endpoint load is high');
  }
}
