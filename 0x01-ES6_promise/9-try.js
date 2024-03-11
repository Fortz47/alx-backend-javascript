export default function guardrail(func) {
  try {
    return [func(), 'Guardrail was processed'];
  } catch (err) {
    return [`Error: ${err.message}`, 'Guardrail was processed'];
  }
}
