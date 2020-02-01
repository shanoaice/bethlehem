type mapCallback<ArrayMember, CallbackReturn> = (
  val: ArrayMember,
  index: number,
  array: ArrayMember[]
) => CallbackReturn

type curriedMap<ArrayMember, CallbackReturn> = (
  array: ArrayMember[]
) => CallbackReturn[]

/**
 * Returns the result of looping through array `array` with `cb` (curried)
 * ```js
 * const array = [1, 2, 3, 4, 5]
 * const cb = x => x * 2
 * map(cb)(array) //=> [2, 4, 6, 8, 10]
 * ```
 */
function map<ArrayMember, CallbackReturn>(
  cb: mapCallback<ArrayMember, CallbackReturn>
): curriedMap<ArrayMember, CallbackReturn>
/**
 * Returns the result of looping through array `array` with `cb`
 * ```js
 * const array = [1, 2, 3, 4, 5]
 * const cb = x => x * 2
 * map(cb, array) //=> [2, 4, 6, 8, 10]
 * ```
 */
function map<ArrayMember, CallbackReturn>(
  cb: mapCallback<ArrayMember, CallbackReturn>,
  array: ArrayMember[]
): CallbackReturn[]
function map<ArrayMember, CallbackReturn>(
  cb: mapCallback<ArrayMember, CallbackReturn>,
  array?: ArrayMember[]
): curriedMap<ArrayMember, CallbackReturn> | CallbackReturn[] {
  if (typeof array !== 'undefined') {
    return array.map(cb)
  }

  return array => map(cb, array)
}

export default map
