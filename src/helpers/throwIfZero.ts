/** @ignore */
const throwIfZero = function(
  value: number,
  errorMessage = 'Value "0" is not permitted'
): void | never {
  if (value === 0) {
    throw new Error(errorMessage)
  }
}

export default throwIfZero
