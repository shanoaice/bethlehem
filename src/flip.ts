/**
 * Returns a new function much like the supplied one, except that the first two arguments' order is reversed.
 * ```js
 * const mergeThree = (a, b, c) => [].concat(a, b, c);
 * mergeThree(1, 2, 3); //=> [1, 2, 3]
 * flip(mergeThree)(1, 2, 3); //=> [2, 1, 3]
 * ```
 */
const flipAll = function<ArgumentOne, ArgumentTwo, Arguments, Returns>(
  func: (arg1: ArgumentOne, arg2: ArgumentTwo, ...rest: Arguments[]) => Returns
): (arg1: ArgumentTwo, arg2: ArgumentOne, ...rest: Arguments[]) => Returns {
  return (arg1, arg2, ...args) => func(arg2, arg1, ...args)
}

export default flipAll
