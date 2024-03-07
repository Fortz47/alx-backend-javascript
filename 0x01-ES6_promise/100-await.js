#!/usr/bin/node

import { uploadPhoto, createUser } from './utils'

export default async function asyncUploadUser() {
  result = {};
  try {
    result.photo = await uploadPhoto();
    result.user = await createUser();
    return result;
  } catch (err) {
    return { photo: null, user: null };
  }
}
