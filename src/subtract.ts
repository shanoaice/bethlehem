/**
 * Subtracts two value (curried)
 * ```js
 * subtract(3)(1) //=> 2
 * ```
 */
function subtract(a: number): (b: number) => number
/**
 * Subtracts two value
 * ```js
 * subtract(3, 1) //=> 2
 * ```
 */
function subtract(a: number, b: number): number
function subtract(a: number, b?: number): number | ((b: number) => number) {
  if (typeof b !== 'undefined') {
    return a - b
  }

  return (b: number) => a - b
}

export default subtract
