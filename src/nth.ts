import negativity from './helpers/negativity'
import throwIfZero from './helpers/throwIfZero'

type CurriedNth<T> = (list: T[]) => T

function nth<T>(index: number): CurriedNth<T>
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
