import reverse from './reverse'

/**
 * Returns a new function much like the supplied one, except that **all** the arguments' order is reversed.
 * ```js
 * const mergeThree = (a, b, c) => [].concat(a, b, c);
 * mergeThree(1, 2, 3); //=> [1, 2, 3]
 * flipAll(mergeThree)(1, 2, 3); //=> [3, 2, 1]
 * ```
 */
const flipAll = function<Arguments, Returns>(
  func: (...args: Arguments[]) => Returns
): (...args: Arguments[]) => Returns {
  return (...args) => {
    const reversedArgs = reverse(args)

    return func(...reversedArgs)
  }
}

export default flipAll
