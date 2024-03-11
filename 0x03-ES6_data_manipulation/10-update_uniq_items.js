export default function updateUniqueItems(mapObj) {
  if (mapObj.toString() !== '[object Map]') {
    throw new Error('Cannot process');
  }
  mapObj.forEach((val, key, obj) => {
    if (val === 1) obj.set(key, 100);
  });
  return mapObj;
}
