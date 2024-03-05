#!/usr/bin/node

export default function taskBlock(trueOrFalse) {
  const var task = false;
  const var task2 = true;

  if (trueOrFalse) {
    const task = true;
    const task2 = false;
  }

  return [task, task2];
}
