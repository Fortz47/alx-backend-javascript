#!/usr/bin/node

export default function guardrail(func) {
  const queue = [];
  queue.push(func());
  queue.push('Guardrail was processed');
  return queue;
}
