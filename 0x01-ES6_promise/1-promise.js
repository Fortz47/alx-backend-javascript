#!/usr/bin/node

export default getFullResponseFromAPI(success) {
  const myPromise = new Promise((resolve, reject) => {
    if (success)
      resolve({status: 200, body: 'Success'});
    else
      reject(error('The fake API is not working currently'));
  })
  return myPromise;
}
