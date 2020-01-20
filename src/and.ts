type CurriedAnd = (operand2: boolean) => boolean

function and(operand1: boolean): CurriedAnd
function and(operand1: boolean, operand2: boolean): boolean
function and(a: boolean, b?: boolean): boolean | CurriedAnd {
  if (typeof b !== 'undefined') {
    return a && b
  }

  return (b: boolean) => a && b
}

export default and
