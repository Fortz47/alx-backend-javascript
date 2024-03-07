#!/usr/bin/node

import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  uploadPhoto()
    .then((obj) => {
      process.stdout.write(`${obj.body} `);
      return createUser();
    })
    .then((obj) => {
      process.stdout.write(` ${obj.firstName}`);
      process.stdout.write(` ${obj.lastName}\n`);
    })
    .catch(() => console.error('Signup system offline'));
}
