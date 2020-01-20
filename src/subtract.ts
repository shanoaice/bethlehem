function subtract(a: number): (b: number) => number
function subtract(a: number, b: number): number
function subtract(a: number, b?: number): number | ((b: number) => number) {
  if (typeof b !== 'undefined') {
    return a - b
  }

  return (b: number) => {
    return a - b
  }
}

export default subtract
