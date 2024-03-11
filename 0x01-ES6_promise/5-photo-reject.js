export default function uploadPhoto(filename) {
  const err = `${filename} cannot be processed`;
  return Promise.reject(new Error(err));
}
