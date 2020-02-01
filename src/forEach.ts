type forEachCallback<T> = (val: T, index: number, array: T[]) => void

type curriedForEach<T> = (array: T[]) => T[]

/**
 * Applies `cb` over all members of array `array` (curried)
 * ```js
 * const array = [1, 2, 3, 4, 5]
 * const cb = x => console.log(x)
 * forEach(cb)(array)
 * // console output
 * // 1
 * // 2
 * // 3
 * // 4
 * // 5
 * ```
 */
function forEach<T>(cb: forEachCallback<T>): curriedForEach<T>
/**
 * Applies `cb` over all members of array `array`
 * ```js
 * const array = [1, 2, 3, 4, 5]
 * const cb = x => console.log(x)
 * forEach(cb, array)
 * // console output
 * // 1
 * // 2
 * // 3
 * // 4
 * // 5
 * ```
 */
function forEach<T>(cb: forEachCallback<T>, array: T[]): T[]
function forEach<T>(
  cb: forEachCallback<T>,
  array?: T[]
): curriedForEach<T> | T[] {
  if (typeof array !== 'undefined') {
    array.forEach(cb)
    return array
  }

  return array => forEach(cb, array)
}

export default forEach
