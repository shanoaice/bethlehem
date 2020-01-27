import functionalSwitch from './functionalSwitch'

/**
 * Returns an array containing a sequence from a to b. If `a === b`, the function will return `[a]` (curried)
 * ```js
 * sequence(1)(3) //=> [1, 2, 3]
 * sequence(1)(1) //=> [1]
 * sequence(3)(1) //=> [3, 2, 1]
 * ```
 */
function sequence(a: number): (b: number) => number[] | undefined
/**
 * Returns an array containing a sequence from a to b. If `a === b`, the function will return `[a]`
 * ```js
 * sequence(1, 3) //=> [1, 2, 3]
 * sequence(1, 1) //=> [1]
 * sequence(3, 1) //=> [3, 2, 1]
 * ```
 */
function sequence(a: number, b: number): number[] | undefined
function sequence(
  a: number,
  b?: number
): number[] | ((b: number) => number[] | undefined) | undefined {
  let start = a

  if (typeof b !== 'undefined') {
    return functionalSwitch<number, number[]>([
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

  return b => sequence(a, b)
}

export default sequence
