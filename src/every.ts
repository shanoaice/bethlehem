type predicate<T> = (value: T, index: number, list: T[]) => boolean
type curriedEvery<T> = (list: T[]) => boolean

/**
 * Returns true if all elements of the list match the predicate, false if there are any that don't. (curried) *Notice: This is not equivlant to Array.prototype.every because it uses an custom implementation that does not strictly follow the spec.*
 * ```js
 * const predicate = a => a == 3
 * every(predicate)([3, 3, 3, 3]) //=> true
 * every(predicate)([3, 1, 3, 3]) //=> false
 * ```
 *
 * Similar to the Array.prototype.every method, the predicate will also recieve the current index and the current list as the second and the third parameter, respectively.
 */
function every<T>(predicate: predicate<T>): curriedEvery<T>
/**
 * Returns true if all elements of the list match the predicate, false if there are any that don't. *Notice: This is not equivlant to Array.prototype.every because it uses an custom implementation that does not strictly follow the spec.*
 * ```js
 * const predicate = a => a == 3
 * every(predicate, [3, 3, 3, 3]) //=> true
 * every(predicate, [3, 1, 3, 3]) //=> false
 * ```
 *
 * Similar to the Array.prototype.every method, the predicate will also recieve the current index and the current list as the second and the third parameter, respectively.
 */
function every<T>(predicate: predicate<T>, list: T[]): boolean
function every<T>(
  predicate: predicate<T>,
  list?: T[]
): boolean | curriedEvery<T> {
  if (list) {
    let i = 0

    while (i < list.length) {
      if (!predicate(list[i], i, list)) {
        return false
      }

      i++
    }

    return true
  }

  return (list: T[]) => every(predicate, list)
}

export default every
