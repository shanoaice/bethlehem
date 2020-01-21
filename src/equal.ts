/**
 * Test if the the second argument equals to the first argument. (curried)
 *
 * **Caution: This function uses loose equal (==) which will automatically to type convertion, if this is not intended, use strictEqual() to prevent type convertion**
 * ```js
 * equal(1)(1) //=> true
 * equal(1)(2) //=> false
 * equal(1)('1') //=> true
 * ```
 */
function equal(a: any): (b: any) => boolean
/**
 * Test if the the second argument equals to the first argument.
 *
 * **Caution: This function uses loose equal (==) which will automatically to type convertion, if this is not intended, use strictEqual() to prevent type convertion**
 * ```js
 * equal(1, 1) //=> true
 * equal(1, 2) //=> false
 * equal(1, '1') //=> true
 * ```
 */
function equal(a: any, b: any): boolean
function equal(a: any, b?: any): boolean | ((b: any) => boolean) {
  if (typeof b !== 'undefined') {
    // eslint-disable-next-line eqeqeq
    return a == b
  }

  // eslint-disable-next-line eqeqeq
  return b => a == b
}

export default equal
