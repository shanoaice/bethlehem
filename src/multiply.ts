function multiply(a: number): (b: number) => number
function multiply(a: number, b: number): number
function multiply(a: number, b?: number): number | ((b: number) => number) {
  if (typeof b !== 'undefined') {
    return a * b
  }

  return (b: number) => {
    return a * b
  }
}

export default multiply
