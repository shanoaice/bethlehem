type Predicate<T> = (arg1: T) => boolean
type CurriedEvery<T> = (list: T[]) => boolean

function every<T>(predicate: Predicate<T>): CurriedEvery<T>
function every<T>(predicate: Predicate<T>, list: T[]): boolean
function every<T>(
  predicate: Predicate<T>,
  list?: T[]
): boolean | CurriedEvery<T> {
  if (list) {
    return list.every(predicate)
  }

  return (list: T[]) => list.every(predicate)
}

export default every
