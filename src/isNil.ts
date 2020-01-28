/**
 * Test if a value is `null` or `undefined`
 * ```js
 * isEmpty(null) //=> true
 * isEmpty(undefined) //=> true
 * isEmpty(0) //=> false
 * isEmpty(false) //=> false
 * isEmpty(1) //=> false
 * ```
 */
const isEmpty = (operand: any): boolean =>
  operand === null || operand === undefined

export default isEmpty
