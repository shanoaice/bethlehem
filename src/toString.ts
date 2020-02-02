/**
 * Returns the string representation of `x` (equal to `Object.prototype.toString.call(x)`)
 * ```js
 * toString([]) //=> [object Array]
 * toString({}) //=> [object Object]
 */
function toString(x: any): string {
  return Object.prototype.toString.call(x)
}

export default toString
