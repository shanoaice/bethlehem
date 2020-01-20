type Predicate<T> = (arg1: T) => boolean
type CurriedEvery<T> = (list: T[]) => boolean

/**
 * Returns true if all elements of the list match the predicate, false if there are any that don't. (curried)
 * ```js
 * const predicate = a => a == 3
 * every(predicate)([3, 3, 3, 3]) //=> true
 * every(predicate)([3, 1, 3, 3]) //=> false
 * ```
 */
function every<T>(predicate: Predicate<T>): CurriedEvery<T>
/**
 * Returns true if all elements of the list match the predicate, false if there are any that don't.
 * ```js
 * const predicate = a => a == 3
 * every(predicate, [3, 3, 3, 3]) //=> true
 * every(predicate, [3, 1, 3, 3]) //=> false
 * ```
 */
function every<T>(predicate: Predicate<T>, list: T[]): boolean
function every<T>(
  predicate: Predicate<T>,
  list?: T[]
): boolean | CurriedEvery<T> {
  if (list) {
    return list.every(predicate)
  }

  return (list: T[]) => list.every(predicate)
}

export default every
