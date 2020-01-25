import functionalSwitch from './functionalSwitch'

function sequence(a: number): (b: number) => number[]
function sequence(a: number, b: number): number[]
function sequence(a: number, b?: number): number[] | ((b: number) => number[]) {
  let start = a

  if (typeof b !== 'undefined') {
    return functionalSwitch([
      {
        condition: (a, b) => a < b,
        task: () => new Array(b - a + 1).fill(0).map(() => start++)
      },
      {
        condition: (a, b) => a === b,
        task: () => [a]
      },
      {
        condition: (a, b) => a > b,
        task: () => new Array(a - b + 1).fill(0).map(() => start--)
      }
    ])(a, b)
  }

  return b =>
    functionalSwitch([
      {
        condition: (a, b) => a < b,
        task: () => new Array(b - a + 1).fill(0).map(() => start++)
      },
      {
        condition: (a, b) => a === b,
        task: () => [a]
      },
      {
        condition: (a, b) => a > b,
        task: () => new Array(a - b + 1).fill(0).map(() => start--)
      }
    ])(a, b)
}

export default sequence
