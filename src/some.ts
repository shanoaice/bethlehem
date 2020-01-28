type Predicate<T> = (value: T, index: number, list: T[]) => boolean
type CurriedSome<T> = (list: T[]) => boolean

/**
 * Returns true if any elements of the list match the predicate, false otherwise. (Curried)
 * ```js
 * const predicate = a => a == 3
 * some(predicate)([1, 3, 1, 1]) //=> true
 * some(predicate)([1, 1, 1, 1]) //=> false
 * ```
 */
function some<T>(predicate: Predicate<T>): CurriedSome<T>
/**
 * Returns true if any elements of the list match the predicate, false otherwise.
 * ```js
 * const predicate = a => a == 3
 * some(predicate, [1, 3, 1, 1]) //=> true
 * some(predicate, [1, 1, 1, 1]) //=> false
 * ```
 */
function some<T>(predicate: Predicate<T>, list: T[]): boolean
function some<T>(
  predicate: Predicate<T>,
  list?: T[]
): boolean | CurriedSome<T> {
  if (list) {
    return list.some(predicate)
  }

  return (list: T[]) => some(predicate, list)
}

export default some
