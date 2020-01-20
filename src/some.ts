type Predicate<T> = (arg1: T) => boolean
type CurriedSome<T> = (list: T[]) => boolean

function some<T>(predicate: Predicate<T>): CurriedSome<T>
function some<T>(predicate: Predicate<T>, list: T[]): boolean
function some<T>(
  predicate: Predicate<T>,
  list?: T[]
): boolean | CurriedSome<T> {
  if (list) {
    return list.some(predicate)
  }

  return (list: T[]) => list.some(predicate)
}

export default some
