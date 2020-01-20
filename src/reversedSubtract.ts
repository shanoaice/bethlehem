/**
 * Subtracts two value in reversed order (curried)
 * ```js
 * reversedSubtract(3)(7) //=> 4
 * ```
 */
function reversedSubtract(a: number): (b: number) => number
/**
 * Subtracts two value in reversed order
 * ```js
 * reversedSubtract(3, 7) //=> 4
 * ```
 */
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
