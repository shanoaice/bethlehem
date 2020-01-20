function add(a: number): (b: number) => number
function add(a: number, b: number): number
function add(a: number, b?: number): number | ((b: number) => number) {
  if (typeof b !== 'undefined') {
    return a + b
  }

  return (b: number) => a + b
}

export default add
