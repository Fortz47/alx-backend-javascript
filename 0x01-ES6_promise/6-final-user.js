#!/usr/bin/node

import uploadPhoto from './5-photo-reject';
import signUpUser from './4-user-promise';

import uploadPhoto from './5-photo-reject';
import signUpUser from './4-user-promise';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [signUpUser(firstName, lastName), uploadPhoto(fileName)];
  const array = [];
  return Promise.allSettled(promises)
    .then((res) => {
      res.forEach((obj) => {
        const value = (obj.status === 'fulfilled') ? obj.value : obj.reason;
        array.push({ status: obj.status, value });
      });
      return array;
    });
}
