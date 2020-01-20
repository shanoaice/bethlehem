import negativity from './helpers/negativity'
import throwIfZero from './helpers/throwIfZero'

type NthArgReciever<T> = (...args: T[]) => T

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
