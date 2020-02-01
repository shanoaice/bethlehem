type findIndexCallback<T> = (val: T, index: number, array: T[]) => boolean

type curriedFindIndex<T> = (array: T[]) => number

/**
 * Returns `-1` or the first element's index in `array` satisifies `cb` (curried)
 * ```js
 * const array = [1, 2, 3, 4, 5]
 * const cb = x => x === 3
 * find(cb)(array) //=> 2
 * ```
 */
function findIndex<T>(cb: findIndexCallback<T>): curriedFindIndex<T>
/**
 * Returns `-1` or the first element' index in `array` satisifies `cb`
 * ```js
 * const array = [1, 2, 3, 4, 5]
 * const cb = x => x === 3
 * find(cb, array) //=> 2
 * ```
 */
function findIndex<T>(cb: findIndexCallback<T>, array: T[]): number
function findIndex<T>(
  cb: findIndexCallback<T>,
  array?: T[]
): curriedFindIndex<T> | number {
  if (typeof array !== 'undefined') {
    return array.findIndex(cb)
  }

  return array => findIndex(cb, array)
}

export default findIndex
