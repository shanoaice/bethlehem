function reversedSubtract(a: number): (b: number) => number
function reversedSubtract(a: number, b: number): number
function reversedSubtract(
  a: number,
  b?: number
): number | ((b: number) => number) {
  if (typeof b !== 'undefined') {
    return b - a
  }

  return (b: number) => {
    return b - a
  }
}

export default reversedSubtract
