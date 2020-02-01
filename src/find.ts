type findCallback<T> = (val: T, index: number, array: T[]) => boolean

type curriedFind<T> = (array: T[]) => T | undefined

/**
 * Returns `undefined` or the first element in `array` satisifies `cb` (curried)
 * ```js
 * const array = [1, 2, 3, 4, 5]
 * const cb = x => x === 3
 * find(cb)(array) //=> 3
 * ```
 */
function find<T>(cb: findCallback<T>): curriedFind<T>
/**
 * Returns `undefined` or the first element in `array` satisifies `cb`
 * ```js
 * const array = [1, 2, 3, 4, 5]
 * const cb = x => x === 3
 * find(cb, array) //=> 3
 * ```
 */
function find<T>(cb: findCallback<T>, array: T[]): T | undefined
function find<T>(
  cb: findCallback<T>,
  array?: T[]
): curriedFind<T> | T | undefined {
  if (typeof array !== 'undefined') {
    return array.find(cb)
  }

  return array => find(cb, array)
}

export default find
