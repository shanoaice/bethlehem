/**
 * Test if the the second argument equals to the first argument. (curried)
 * ```js
 * strictEqual(1)(1) //=> true
 * strictEqual(1)(2) //=> false
 * strictEqual(1)('1') //=> false
 * ```
 */
function strictEqual(a: any): (b: any) => boolean
/**
 * Test if the the second argument equals to the first argument.
 * ```js
 * strictEqual(1, 1) //=> true
 * strictEqual(1, 2) //=> false
 * strictEqual(1, '1') //=> false
 * ```
 */
function strictEqual(a: any, b: any): boolean
function strictEqual(a: any, b?: any): boolean | ((b: any) => boolean) {
  if (typeof b !== 'undefined') {
    return a === b
  }

  return b => strictEqual(a, b)
}

export default strictEqual
