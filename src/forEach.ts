type forEachCallback<T> = (val: T, index: number, array: T[]) => void

type curriedForEach<T> = (array: T[]) => T[]

function forEach<T>(cb: forEachCallback<T>): curriedForEach<T>
function forEach<T>(cb: forEachCallback<T>, array: T[]): T[]
function forEach<T>(cb: forEachCallback<T>, array?: T[]): curriedForEach<T> | T[] {
  if (typeof array !== 'undefined') {
    array.forEach(cb)
    return array
  }

  return array => forEach(cb, array)
}

export default forEach
