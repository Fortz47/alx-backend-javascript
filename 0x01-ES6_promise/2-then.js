#!/usr/bin/node

export default function handleResponseFromAPI(promise) {
  const obj = { status: 200, body: 'Success' };
  const err = new Error();
  promise
    .then(() => obj)
    .catch(() => err)
    .finally(() => console.log('Got a response from the API'));
}
