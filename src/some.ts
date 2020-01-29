type predicate<T> = (value: T, index: number, list: T[]) => boolean
type curriedSome<T> = (list: T[]) => boolean

/**
 * Returns true if any elements of the list match the predicate, false otherwise. (Curried)
 * ```js
 * const predicate = a => a == 3
 * some(predicate)([1, 3, 1, 1]) //=> true
 * some(predicate)([1, 1, 1, 1]) //=> false
 * ```
 *
 * Similar to the Array.prototype.some method, the predicate will also recieve the current index and the current list as the second and the third parameter, respectively.
 */
function some<T>(predicate: predicate<T>): curriedSome<T>
/**
 * Returns true if any elements of the list match the predicate, false otherwise.
 * ```js
 * const predicate = a => a == 3
 * some(predicate, [1, 3, 1, 1]) //=> true
 * some(predicate, [1, 1, 1, 1]) //=> false
 *
 * Similar to the Array.prototype.some method, the predicate will also recieve the current index and the current list as the second and the third parameter, respectively.
 * ```
 */
function some<T>(predicate: predicate<T>, list: T[]): boolean
function some<T>(
  predicate: predicate<T>,
  list?: T[]
): boolean | curriedSome<T> {
  if (list) {
    return list.some(predicate)
  }

  return (list: T[]) => some(predicate, list)
}

export default some
