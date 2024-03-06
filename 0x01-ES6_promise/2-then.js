#!/usr/bin/node

export default function handleResponseFromAPI(promise) {
  const obj = { status: 200, body: 'Success' };
  const err = new Error('');
  promise
    .then(() => {
      console.log('Got a response from the API');
      return obj;
    })
    .then(() => {
      console.log('Got a response from the API');
      return obj;
    })
    .then(() => {
      console.log('Got a response from the API');
      return obj;
    })
    .catch(() => err);
}
