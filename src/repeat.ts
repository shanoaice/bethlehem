type CurriedRepeat<T> = (value: T) => T[]

/**
 * Returns a fixed list of size n containing a specified identical value. (curried)
 * ```js
 * repeat('hi')(5); //=> ['hi', 'hi', 'hi', 'hi', 'hi']
 * ```
 */
function repeat<T>(times: number): CurriedRepeat<T>
/**
 * Returns a fixed list of size n containing a specified identical value.
 * ```js
 * repeat('hi', 5); //=> ['hi', 'hi', 'hi', 'hi', 'hi']
 * ```
 */
function repeat<T>(times: number, value: T): T[]
function repeat<T>(times: number, value?: any): any[] | CurriedRepeat<T> {
  if (value) {
    return new Array(times).fill(value)
  }

  return value => repeat(times, value)
}

export default repeat
