/**
 * Divides two value (curried)
 * ```js
 * divide(6)(2) //=> 3
 * ```
 */
function divide(a: number): (b: number) => number
/**
 * Divides two value
 * ```js
 * divide(6, 2) //=> 3
 * ```
 */
function divide(a: number, b: number): number
function divide(a: number, b?: number): number | ((b: number) => number) {
  if (typeof b !== 'undefined') {
    return a / b
  }

  return (b: number) => divide(a, b)
}

export default divide
