import negativity from './helpers/negativity'
import throwIfZero from './helpers/throwIfZero'

type CurriedNth<T> = (list: T[]) => T

/**
 * Returns the nth element of the given list or string. If n is negative the element at index length + n is returned. Passing `0` as index is not permitted, and you will get an error if you do so. (curried)
 * ```js
 * nth(2)([1, 2, 3]) //=> 2
 * nth(2)('abc') //=> b
 * nth(0) // !Error: Index cannot be zero
 * ```
 */
function nth<T>(index: number): CurriedNth<T> | never
/**
 * Returns the nth element of the given list or string. If n is negative the element at index length + n is returned. Passing `0` as index is not permitted, and you will get an error if you do so.
 * ```js
 * nth(2, [1, 2, 3]) //=> 2
 * nth(2, 'abc') //=> b
 * nth(0) // !Error: Index cannot be zero
 * ```
 */
function nth<T>(index: number, list: T[]): T | never
function nth<T>(index: number, list?: T[]): T | CurriedNth<T> | never {
  throwIfZero(index, 'Index cannot be zero')
  if (typeof list !== 'undefined') {
    if (negativity(index)) {
      return list[list.length + index]
    }

    return list[index - 1]
  }

  return (list: T[]) => {
    if (negativity(index)) {
      return list[list.length + index]
    }

    return list[index - 1]
  }
}

export default nth
