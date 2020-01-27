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
    let i = 0

    while(i < list.length) {
      if(!predicate(list[i])) {
        return false
      }

      i++
    }

    return true
  }

  return (list: T[]) => every(predicate, list)
}

export default every
