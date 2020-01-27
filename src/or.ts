type CurriedOr = (operand2: boolean) => boolean

/**
 * Perform `operand1 || operand2` and return the result (curried)
 * ``` js
 * or(true)(true) //=> true
 * or(true)(false) //=> true
 * or(false)(true) //=> true
 * or(false)(false) //=> false
 * ```
 */
function or(operand1: boolean): CurriedOr
/**
 * Perform `operand1 || operand2` and return the result
 * ``` js
 * or(true, true) //=> true
 * or(true, false) //=> true
 * or(false, true) //=> true
 * or(false, false) //=> false
 * ```
 */
function or(operand1: boolean, operand2: boolean): boolean
function or(a: boolean, b?: boolean): boolean | CurriedOr {
  if (typeof b !== 'undefined') {
    return a || b
  }

  return (b: boolean) => or(a, b)
}

export default or
