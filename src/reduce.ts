type reducer<ArrayMemberType> = (
  accumulator: any,
  currentValue: ArrayMemberType,
  index: number,
  array: ArrayMemberType[]
) => any

function reduce<ArrayMemberType>(
  reducer: reducer<ArrayMemberType>,
  initialValue?: any
): (array: ArrayMemberType[]) => any
function reduce<ArrayMemberType>(
  reducer: reducer<ArrayMemberType>,
  initialValue: any,
  array: ArrayMemberType[]
): any
function reduce<ArrayMemberType>(
  reducer: reducer<ArrayMemberType>,
  array: ArrayMemberType[]
): any
function reduce<ArrayMemberType>(
  reducer: reducer<ArrayMemberType>,
  initialValue?: any,
  array?: ArrayMemberType[]
): ((arr: ArrayMemberType[]) => any) | any {
  if (arguments.length === 3) {
    return (array as ArrayMemberType[]).reduce(reducer, initialValue)
  }

  function applyReduce(
    initialValueOrArray: any
  ): any | ((array: ArrayMemberType) => any) {
    if (Array.isArray(initialValueOrArray)) {
      return initialValueOrArray.reduce(reducer)
    }

    return (array: ArrayMemberType[]) =>
      array.reduce(reducer, initialValueOrArray)
  }

  if (arguments.length === 2) {
    applyReduce(arguments[1])
  }

  return (initialValueOrArray: ArrayMemberType[] | any) =>
    applyReduce(initialValueOrArray)
}

export default reduce
