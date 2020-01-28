/**
 * Test if a value is `null` or `undefined`
 * ```js
 * isNil(null) //=> true
 * isNil(undefined) //=> true
 * isNil(0) //=> false
 * isNil(false) //=> false
 * isNil(1) //=> false
 * ```
 */
const isNil = (operand: any): boolean =>
  operand === null || operand === undefined

export default isNil
