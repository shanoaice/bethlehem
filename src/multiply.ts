/**
 * Multiplies two value (curried)
 * ```js
 * multiply(3)(2) //=> 6
 * ```
 */
function multiply(a: number): (b: number) => number
/**
 * Multiplies two value
 * ```js
 * multiply(3, 2) //=> 6
 * ```
 */
function multiply(a: number, b: number): number
function multiply(a: number, b?: number): number | ((b: number) => number) {
  if (typeof b !== 'undefined') {
    return a * b
  }

  return (b: number) => multiply(a, b)
}

export default multiply
