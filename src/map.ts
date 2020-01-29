type mapCallback<ArrayMember, CallbackReturn> = (
  val: ArrayMember,
  index?: number,
  array?: ArrayMember[]
) => CallbackReturn

type curriedMap<ArrayMember, CallbackReturn> = (
  array: ArrayMember[]
) => CallbackReturn[]

function map<ArrayMember, CallbackReturn>(
  cb: mapCallback<ArrayMember, CallbackReturn>
): curriedMap<ArrayMember, CallbackReturn>
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
