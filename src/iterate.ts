import toString from './toString'
import functionalSwitch from './functionalSwitch'
import objectIterator from './helpers/objectIterator'

/**
 * @ignore
 */
const isSet = (x: any): boolean =>
  toString(x) === '[object Set]' || toString(x) === '[object WeakSet]'

/**
 * @ignore
 */
const isString = (x: any): boolean => toString(x) === '[object String]'

/**
 * @ignore
 */
const isArray = (x: any): boolean => Array.isArray(x)

/**
 * @ignore
 */
const isObject = (x: any): boolean => toString(x) === '[object Object]'

/**
 * @ignore
 */
const isMap = (x: any): boolean =>
  toString(x) === '[object Map]' || toString(x) === '[object WeakMap]'

type iterateCallbackWithObject<T extends object> = (
  value: any,
  key: any,
  object: T
) => void

type iterateCallbackWithMap<Key, Value> = (
  value: Value,
  key: Key,
  map: Map<Key, Value>
) => void

type iterateCallbackWithWeakMap<Key extends object, Value> = (
  value: Value,
  key: Key,
  map: WeakMap<Key, Value>
) => void

type iterateCallbackWithArray<T> = (value: T, index: number, array: T[]) => void

type iterateCallbackWithString = (
  value: string,
  position: number,
  string: string
) => void

type iterateCallbackWithSet<T> = (
  value: T,
  index: undefined,
  set: Set<T>
) => undefined

type iterateCallbackWithWeakSet<T extends object> = (
  value: T,
  index: undefined,
  set: WeakSet<T>
) => undefined

/**
 * Iterate through all the enumerable key-value pairs of the object and apply it to the callback. (curried)
 * ```js
 * const test = { a: 1, b: 2 }
 * const cb = (val, key) => console.log(`${key}: ${val}`)
 * iterate(cb, test)
 * // console output
 * // a: 1
 * // b: 2
 * ```
 */
function iterate<T extends object>(
  cb: iterateCallbackWithObject<T>
): (object: T) => T
/**
 * Iterate through all the entries of the map and apply it to the callback. (curried)
 * ```js
 * const test = new Map(Object.entries({ a: 1, b: 2 }))
 * const cb = (val, key) => console.log(`${key}: ${val}`)
 * iterate(cb, test)
 * // console output
 * // a: 1
 * // b: 2
 * ```
 */
function iterate<Key, Value>(
  cb: iterateCallbackWithMap<Key, Value>
): (map: Map<Key, Value>) => Map<Key, Value>
/**
 * Iterate through all the entries of the weak map and apply it to the callback. (curried)
 * ```js
 * const weakMapKeyOne = { a: 1 }
 * const weakMapKeyTwo = { b: 2 }
 * const test = new WeakMap([[weakMapKeyOne, 1], [weakMapKeyTwo, 2]])
 * const cb = (val, key) => console.log(`${key}: ${val}`)
 * iterate(cb, test)
 * // console output
 * // { a: 1 }: 1
 * // { b: 2 }: 2
 * ```
 */
function iterate<Key extends object, Value>(
  cb: iterateCallbackWithWeakMap<Key, Value>
): (map: WeakMap<Key, Value>) => WeakMap<Key, Value>
/**
 * Iterate through all the entries of the set and apply it to the callback. (curried)
 * ```js
 * const test = new Set([1, 2])
 * const cb = (val) => console.log(val)
 * iterate(cb, test)
 * // console output
 * // 1
 * // 2
 * ```
 */
function iterate<T>(cb: iterateCallbackWithSet<T>): (set: Set<T>) => Set<T>
/**
 * Iterate through all the entries of the weak set and apply it to the callback. (curried)
 * ```js
 * const weakSetEntryOne = { a: 1 }
 * const weakSetEntryTwo = { b: 2 }
 * const test = new WeakSet([weakSetEntryOne, weakSetEntryTwo])
 * const cb = (val) => console.log(val)
 * iterate(cb, test)
 * // console output
 * // { a: 1 }
 * // { b: 2 }
 * ```
 */
function iterate<T extends object>(
  cb: iterateCallbackWithWeakSet<T>
): (set: WeakSet<T>) => WeakSet<T>
/**
 * Iterate through all the elements inside the array and apply it to the callback. (curried)
 * ```js
 * const test = [1, 2]
 * const cb = (val) => console.log(val)
 * iterate(cb, test)
 * // console output
 * // 1
 * // 2
 * ```
 */
function iterate<T>(cb: iterateCallbackWithArray<T>): (array: T[]) => T[]
/**
 * Iterate through all the chars of the string and apply it to the callback. (curried)
 * ```js
 * const test = 'ab'
 * const cb = (val) => console.log(val)
 * iterate(cb, test)
 * // console output
 * // a
 * // b
 * ```
 */
function iterate(cb: iterateCallbackWithString): (string: string) => string
/**
 * Iterate through all the enumerable key-value pairs of the object and apply it to the callback.
 * ```js
 * const test = { a: 1, b: 2 }
 * const cb = (val, key) => console.log(`${key}: ${val}`)
 * iterate(cb, test)
 * // console output
 * // a: 1
 * // b: 2
 * ```
 */
function iterate<T extends object>(
  cb: iterateCallbackWithObject<T>,
  object: T
): T
/**
 * Iterate through all the entries of the map and apply it to the callback.
 * ```js
 * const test = new Map(Object.entries({ a: 1, b: 2 }))
 * const cb = (val, key) => console.log(`${key}: ${val}`)
 * iterate(cb, test)
 * // console output
 * // a: 1
 * // b: 2
 * ```
 */
function iterate<Key, Value>(
  cb: iterateCallbackWithMap<Key, Value>,
  map: Map<Key, Value>
): Map<Key, Value>
/**
 * Iterate through all the entries of the weak map and apply it to the callback.
 * ```js
 * const weakMapKeyOne = { a: 1 }
 * const weakMapKeyTwo = { b: 2 }
 * const test = new WeakMap([[weakMapKeyOne, 1], [weakMapKeyTwo, 2]])
 * const cb = (val, key) => console.log(`${key}: ${val}`)
 * iterate(cb, test)
 * // console output
 * // { a: 1 }: 1
 * // { b: 2 }: 2
 * ```
 */
function iterate<Key extends object, Value>(
  cb: iterateCallbackWithWeakMap<Key, Value>,
  map: WeakMap<Key, Value>
): WeakMap<Key, Value>
/**
 * Iterate through all the entries of the set and apply it to the callback.
 * ```js
 * const test = new Set([1, 2])
 * const cb = (val) => console.log(val)
 * iterate(cb, test)
 * // console output
 * // 1
 * // 2
 * ```
 */
function iterate<T>(cb: iterateCallbackWithSet<T>, set: Set<T>): Set<T>
/**
 * Iterate through all the entries of the weak set and apply it to the callback.
 * ```js
 * const weakSetEntryOne = { a: 1 }
 * const weakSetEntryTwo = { b: 2 }
 * const test = new WeakSet([weakSetEntryOne, weakSetEntryTwo])
 * const cb = (val) => console.log(val)
 * iterate(cb, test)
 * // console output
 * // { a: 1 }
 * // { b: 2 }
 * ```
 */
function iterate<T extends object>(
  cb: iterateCallbackWithWeakSet<T>,
  set: WeakSet<T>
): WeakSet<T>
/**
 * Iterate through all the elements inside the array and apply it to the callback.
 * ```js
 * const test = [1, 2]
 * const cb = (val) => console.log(val)
 * iterate(cb, test)
 * // console output
 * // 1
 * // 2
 * ```
 */
function iterate<T>(cb: iterateCallbackWithArray<T>, array: T[]): T[]
/**
 * Iterate through all the chars of the string and apply it to the callback.
 * ```js
 * const test = 'ab'
 * const cb = (val) => console.log(val)
 * iterate(cb, test)
 * // console output
 * // a
 * // b
 * ```
 */
function iterate(cb: iterateCallbackWithString, string: string): string
function iterate<
  ObjectT extends object,
  MapKey,
  MapValue,
  WeakMapKey extends object,
  WeakMapValue,
  SetT,
  WeakSetT extends object,
  ArrayT
>(
  cb:
    | iterateCallbackWithObject<ObjectT>
    | iterateCallbackWithMap<MapKey, MapValue>
    | iterateCallbackWithWeakMap<WeakMapKey, WeakMapValue>
    | iterateCallbackWithSet<SetT>
    | iterateCallbackWithWeakSet<WeakSetT>
    | iterateCallbackWithArray<ArrayT>
    | iterateCallbackWithString,
  iterable?:
    | ObjectT
    | Map<MapKey, MapValue>
    | WeakMap<WeakMapKey, WeakMapValue>
    | Set<SetT>
    | WeakSet<WeakSetT>
    | ArrayT[]
    | string
):
  | ObjectT
  | Map<MapKey, MapValue>
  | WeakMap<WeakMapKey, WeakMapValue>
  | Set<SetT>
  | WeakSet<WeakSetT>
  | ArrayT[]
  | string
  | ((object: ObjectT) => ObjectT)
  | ((map: Map<MapKey, MapValue>) => Map<MapKey, MapValue>)
  | ((
      map: WeakMap<WeakMapKey, WeakMapValue>
    ) => WeakMap<WeakMapKey, WeakMapValue>)
  | ((set: Set<SetT>) => Set<SetT>)
  | ((set: WeakSet<WeakSetT>) => WeakSet<WeakSetT>)
  | ((array: ArrayT[]) => ArrayT[])
  | ((string: string) => string) {
  if (typeof iterable !== 'undefined') {
    return (functionalSwitch([
      {
        condition: isArray,
        task: array => {
          array.forEach(cb)
          return array
        }
      },
      {
        condition: isMap,
        task: map => {
          for (const [key, value] of map) {
            cb(value, key, map)
          }

          return map
        }
      },
      {
        condition: isSet,
        task: set => {
          for (const value of set) {
            cb(value, undefined, set)
          }

          return set
        }
      },
      {
        condition: isObject,
        task: object => {
          if (!object[Symbol.iterator]) {
            object[Symbol.iterator] = objectIterator
          }

          for (const [key, value] of object) {
            cb(value, key, object)
          }

          return object
        }
      },
      {
        condition: isString,
        task: string => {
          let position = 0

          for (const char of string) {
            cb(char, position, string)
            position++
          }

          return string
        }
      }
    ])(iterable) as unknown) as
      | ObjectT
      | Map<MapKey, MapValue>
      | WeakMap<WeakMapKey, WeakMapValue>
      | Set<SetT>
      | WeakSet<WeakSetT>
      | ArrayT[]
      | string
  }

  return (
    iterable:
      | ObjectT
      | Map<MapKey, MapValue>
      | WeakMap<WeakMapKey, WeakMapValue>
      | Set<SetT>
      | WeakSet<WeakSetT>
      | ArrayT[]
      | string
  ) => iterate(cb as iterateCallbackWithString, iterable as string) // The type assertion here is because a strange bug (?) in TypeScript compiler. If you delete these assertions, the source code will fail to compile due to a type incompatibility although the type is actually compatible
}

export default iterate
