/**
 * Divides two value in reversed order (curried)
 * ```js
 * reversedDivide(2)(6) //=> 3
 * ```
 */
function reversedDivide(a: number): (b: number) => number
/**
 * Divides two value in reversed order
 * ```js
 * reversedDivide(2, 6) //=> 3
 * ```
 */
function reversedDivide(a: number, b: number): number
function reversedDivide(
  a: number,
  b?: number
): number | ((b: number) => number) {
  if (typeof b !== 'undefined') {
    return b / a
  }

  return (b: number) => {
    return b / a
  }
}

export default reversedDivide
