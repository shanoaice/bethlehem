type CurriedAnd = (operand2: boolean) => boolean

/**
 * Perform `operand1 && operand2` and return the result (curried)
 * ``` js
 * and(true)(true) //=> true
 * and(true)(false) //=> false
 * and(false)(true) //=> false
 * and(false)(false) //=> false
 * ```
 */
function and(operand1: boolean): CurriedAnd
/**
 * Perform `operand1 && operand2` and return the result
 * ``` js
 * and(true, true) //=> true
 * and(true, false) //=> false
 * and(false, true) //=> false
 * and(false, false) //=> false
 * ```
 */
function and(operand1: boolean, operand2: boolean): boolean
function and(a: boolean, b?: boolean): boolean | CurriedAnd {
  if (typeof b !== 'undefined') {
    return a && b
  }

  return (b: boolean) => and(a, b)
}

export default and
