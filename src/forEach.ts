type forEachCallback<T> = (val: T, index: number, array: T[]) => void

type curriedMap<T> = (array: T[]) => T[]

function map<T>(cb: forEachCallback<T>): curriedMap<T>
function map<T>(cb: forEachCallback<T>, array: T[]): T[]
function map<T>(cb: forEachCallback<T>, array?: T[]): curriedMap<T> | T[] {
  if (typeof array !== 'undefined') {
    array.forEach(cb)
    return array
  }

  return array => map(cb, array)
}

export default map
