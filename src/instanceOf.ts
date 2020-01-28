/**
 * Test if the the second argument is an instance of the first argument. (curried)
 * ```js
 * instanceOf(Number)(new Number(1)) //=> true
 * instanceOf(Number)(1) //=> false
 * ```
 */
function instanceOf(a: any): (b: any) => boolean
/**
 * Test if the the second argument is an instance of the first argument.
 * ```js
 * instanceOf(Number, new Number(1)) //=> true
 * instanceOf(Number, 1) //=> false
 * ```
 */
function instanceOf(a: any, b: any): boolean
function instanceOf(a: any, b?: any): boolean | ((b: any) => boolean) {
  if (typeof b !== 'undefined') {
    return b instanceof a
  }

  return b => instanceOf(a, b)
}

export default instanceOf
