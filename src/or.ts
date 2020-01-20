type CurriedOr = (operand2: boolean) => boolean

function or(operand1: boolean): CurriedOr
function or(operand1: boolean, operand2: boolean): boolean
function or(a: boolean, b?: boolean): boolean | CurriedOr {
  if (typeof b !== 'undefined') {
    return a || b
  }

  return (b: boolean) => a || b
}

export default or
