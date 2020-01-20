import negativity from './helpers/negativity'
import throwIfZero from './helpers/throwIfZero'

type NthArgReciever<T> = (...args: T[]) => T

/**
 * Returns a function which returns its nth argument. Passing `0` as index is not permitted, and you will get an error if you do so.
 * ```js
 * nthArg(2)(1, 2, 3) //=> 2
 * nthArg(0) // !Error: Index cannot be zero
 * ```
 */
function nthArg<T>(index: number): NthArgReciever<T> {
  throwIfZero(index, 'Index cannot be zero')

  return (...args: T[]) => {
    if (negativity(index)) {
      return args[args.length + index]
    }

    return args[index - 1]
  }
}

export default nthArg
