#!/usr/bin/node

export default function uploadPhoto(filename) {
  const err = `${filename} cannot be processed`;
  return new Promise.reject(new Error(err));
}
