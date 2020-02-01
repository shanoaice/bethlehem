import test from 'ava'

import {
  add,
  always,
  and,
  compose,
  divide,
  equal,
  every,
  F,
  find,
  findIndex,
  flip,
  flipAll,
  forEach,
  functionalIf,
  functionalSwitch,
  instanceOf,
  isNil,
  join,
  map,
  multiply,
  not,
  nth,
  nthArg,
  or,
  repeat,
  reverse,
  reversedDivide,
  reversedSubtract,
  sequence,
  some,
  strictEqual,
  subtract,
  T
} from '../src'

const addOne = (a: number): number => {
  return a + 1
}

test('compose one single function', t => {
  const composed = compose(addOne)
  t.is(composed(1), 2)
})

test('compose multiple functions', t => {
  const composed = compose(addOne, addOne)
  t.is(composed(1), 3)
})

test('add', t => {
  t.is(add(1, 2), 3)
})

test('curried add', t => {
  const addTwo = add(2)
  t.is(addTwo(1), 3)
})

test('subtract', t => {
  t.is(subtract(2, 1), 1)
})

test('curried subtract', t => {
  const twoMinus = subtract(2)
  t.is(twoMinus(1), 1)
})

test('reversed subtract', t => {
  t.is(reversedSubtract(1, 2), 1)
})

test('curried reversed subtract', t => {
  const minusOne = reversedSubtract(1)
  t.is(minusOne(2), 1)
})

test('multiply', t => {
  t.is(multiply(2, 2), 4)
})

test('curried multiply', t => {
  const multipliesTwo = multiply(2)
  t.is(multipliesTwo(2), 4)
})

test('divide', t => {
  t.is(divide(4, 2), 2)
})

test('curried divide', t => {
  const fourDivide = divide(4)
  t.is(fourDivide(2), 2)
})

test('reversed divide', t => {
  t.is(reversedDivide(2, 4), 2)
})

test('curried reversed divide', t => {
  const divideTwo = reversedDivide(2)
  t.is(divideTwo(4), 2)
})

test('always', t => {
  const K = always(2)
  // eslint-disable-next-line new-cap
  t.is(K(), 2, 'always returns 2')
  // eslint-disable-next-line new-cap
  t.is(K(4), 2, 'always returns 2, no matter how many or that arguments passed')
})

test('T', t => {
  // eslint-disable-next-line new-cap
  t.true(T())
})

test('F', t => {
  // eslint-disable-next-line new-cap
  t.false(F())
})

test('nth', t => {
  t.is(nth(3, [1, 2, 3, 4]), 3)
  t.is(nth(-3, [1, 2, 3, 4]), 2)
})

test('curried nth', t => {
  const thirdItem = nth(3)
  const thirdToLastItem = nth(-3)
  t.is(thirdItem([1, 2, 3, 4]), 3)
  t.is(thirdToLastItem([1, 2, 3, 4]), 2)
})

test('nth should throw if index = 0', t => {
  try {
    nth(0)
  } catch (error) {
    t.true(error instanceof Error)
  }

  try {
    nth(0, [1, 2, 3, 4])
  } catch (error) {
    t.true(error instanceof Error)
  }
})

test('nthArg', t => {
  const thirdArg = nthArg(3)
  const thirdToLastArg = nthArg(-3)
  t.is(thirdArg(1, 2, 3, 4), 3)
  t.is(thirdToLastArg(1, 2, 3, 4), 2)
})

test('nthArg should throw if index = 0', t => {
  try {
    nthArg(0)
  } catch (error) {
    t.true(error instanceof Error)
  }
})

test('and', t => {
  t.true(and(true, true))
  t.false(and(true, false))
  t.false(and(false, true))
  t.false(and(false, false))
})

test('curried and', t => {
  const trueAnd = and(true)
  const falseAnd = and(false)
  t.true(trueAnd(true))
  t.false(trueAnd(false))
  t.false(falseAnd(true))
  t.false(falseAnd(false))
})

test('or', t => {
  t.true(or(true, true))
  t.true(or(true, false))
  t.true(or(false, true))
  t.false(or(false, false))
})

test('curried or', t => {
  const trueOr = or(true)
  const falseOr = or(false)
  t.true(trueOr(true))
  t.true(trueOr(false))
  t.true(falseOr(true))
  t.false(falseOr(false))
})

test('not', t => {
  t.false(not(true))
  t.true(not(false))
})

test('repeat', t => {
  t.deepEqual(repeat(4, 1), [1, 1, 1, 1])
})

test('curried repeat', t => {
  const repeatTwoTimes = repeat(2)
  t.deepEqual(repeatTwoTimes(2), [2, 2])
})

test('some', t => {
  const predicate = (val: number): boolean => val === 1
  t.true(some(predicate, [1, 2, 3, 4]))
  t.false(some(predicate, [2, 3, 4, 2]))
})

test('curried some', t => {
  const predicate = (val: number): boolean => val === 1
  const curriedSome = some(predicate)
  t.true(curriedSome([1, 2, 3, 4]))
  t.false(curriedSome([2, 3, 4, 2]))
})

test('every', t => {
  const predicate = (val: number): boolean => val === 1
  t.true(every(predicate, [1, 1, 1, 1]))
  t.false(some(predicate, [2, 3, 4, 2]))
})

test('curried every', t => {
  const predicate = (val: number): boolean => val === 1
  const curriedEvery = every(predicate)
  t.true(curriedEvery([1, 1, 1, 1]))
  t.false(curriedEvery([2, 3, 4, 2]))
})

test('equal', t => {
  t.true(equal(1, 1))
  t.false(equal(1, 2))
  t.true(equal(1, '1'))
})

test('curried equal', t => {
  const equalsOne = equal(1)
  t.true(equalsOne(1))
  t.false(equalsOne(2))
  t.true(equalsOne('1'))
})

test('strict equal', t => {
  t.true(strictEqual(1, 1))
  t.false(strictEqual(1, 2))
  t.false(strictEqual(1, '1'))
})

test('curried strict equal', t => {
  const equalsOne = strictEqual(1)
  t.true(equalsOne(1))
  t.false(equalsOne(2))
  t.false(equalsOne('1'))
})

test('sequence', t => {
  t.deepEqual(sequence(1, 3), [1, 2, 3])
  t.deepEqual(sequence(2, 4), [2, 3, 4])
  t.deepEqual(sequence(3, 3), [3])
  t.deepEqual(sequence(3, 1), [3, 2, 1])
  t.deepEqual(sequence(4, 2), [4, 3, 2])
})

test('curried sequence', t => {
  t.deepEqual(sequence(1)(3), [1, 2, 3])
  t.deepEqual(sequence(2)(4), [2, 3, 4])
  t.deepEqual(sequence(3)(3), [3])
  t.deepEqual(sequence(3)(1), [3, 2, 1])
  t.deepEqual(sequence(4)(2), [4, 3, 2])
})

test('functional switch', t => {
  const abs = functionalSwitch([
    {
      condition: (x: number) => x > 0,
      task: x => x
    },
    {
      condition: x => x === 0,
      task: _x => 0
    },
    {
      condition: x => x < 0,
      task: x => -x
    }
  ])

  t.is(abs(3), 3)
  t.is(abs(0), 0)
  t.is(abs(-3), 3)
})

test('functional if', t => {
  const negativity = functionalIf<number, string>(
    (x: number) => x < 0,
    () => 'negative',
    () => 'positive or zero'
  )
  t.is(negativity(-1), 'negative')
  t.is(negativity(0), 'positive or zero')
  t.is(negativity(1), 'positive or zero')
})

test('curried functional if', t => {
  const negativity = functionalIf((x: number) => x < 0)(
    () => 'negative',
    () => 'positive or zero'
  )
  t.is(negativity(-1), 'negative')
  t.is(negativity(0), 'positive or zero')
  t.is(negativity(1), 'positive or zero')
})

test('instanceOf', t => {
  // eslint-disable-next-line no-new-wrappers, unicorn/new-for-builtins
  t.true(instanceOf(Number, new Number(1)))
  t.false(instanceOf(Number, 1))
})

test('curried instanceOf', t => {
  const instanceOfNumber = instanceOf(Number)

  // eslint-disable-next-line no-new-wrappers, unicorn/new-for-builtins
  t.true(instanceOfNumber(new Number(1)))
  t.false(instanceOfNumber(1))
})

test('isNil', t => {
  t.true(isNil(null))
  t.true(isNil(undefined))
  t.false(isNil(0))
  t.false(isNil(false))
  t.false(isNil(1))
})

test('join', t => {
  const testArrayOne = [1, 2, 3, 4, 5]
  const testArrayTwo = ['beep', 'blorp', 'bleep']
  const seperator = '-'

  t.is(join(seperator, testArrayOne), '1-2-3-4-5')
  t.is(join(seperator, testArrayTwo), 'beep-blorp-bleep')
})

test('curried join', t => {
  const testArrayOne = [1, 2, 3, 4, 5]
  const testArrayTwo = ['beep', 'blorp', 'bleep']
  const joinWithDash = join('-')

  t.is(joinWithDash(testArrayOne), '1-2-3-4-5')
  t.is(joinWithDash(testArrayTwo), 'beep-blorp-bleep')
})

test('reverse', t => {
  t.deepEqual(reverse([1, 2, 3]), [3, 2, 1])
  t.deepEqual(reverse([1, 2]), [2, 1])
  t.deepEqual(reverse([1]), [1])
  t.deepEqual(reverse([]), [])

  t.is(reverse('abc'), 'cba')
  t.is(reverse('ab'), 'ba')
  t.is(reverse('a'), 'a')
  t.is(reverse(''), '')
})

test('flip', t => {
  // eslint-disable-next-line @typescript-eslint/generic-type-naming
  const mergeThree = <A, B, C>(a: A, b: B, c: C): Array<A | B | C> => [a, b, c]
  t.deepEqual(flip(mergeThree)(1, 2, 3), [2, 1, 3])
})

test('flipAll', t => {
  // eslint-disable-next-line @typescript-eslint/generic-type-naming
  const mergeThree = <A, B, C>(a: A, b: B, c: C): Array<A | B | C> => [a, b, c]
  t.deepEqual(flipAll(mergeThree)(1, 2, 3), [3, 2, 1])
})

test.cb('forEach', t => {
  const list = [1, 2, 3, 4, 5]
  const assertions = [2, 4, 6, 8, 10]

  forEach((val, index) => {
    t.is(val * 2, assertions[index])
  }, list)

  t.end()
})

test.cb('curried forEach', t => {
  const list = [1, 2, 3, 4, 5]
  const assertions = [2, 4, 6, 8, 10]
  const testTimesTwo = forEach((val: number, index) => {
    t.is(val * 2, assertions[index])
  })

  testTimesTwo(list)

  t.end()
})

test('map', t => {
  const list = [1, 2, 3, 4, 5]
  const assertions = [2, 4, 6, 8, 10]

  t.deepEqual(
    map(val => val * 2, list),
    assertions
  )
})

test('curried map', t => {
  const list = [1, 2, 3, 4, 5]
  const assertions = [2, 4, 6, 8, 10]
  const eachTimesTwo = map((val: number) => val * 2)

  t.deepEqual(eachTimesTwo(list), assertions)
})

test('find', t => {
  const list = [1, 2, 3, 4, 5]
  const cb = (x: number): boolean => x === 3

  t.is(find(cb, list), 3)
})

test('curried find', t => {
  const list = [1, 2, 3, 4, 5]
  const cb = (x: number): boolean => x === 3
  const findThree = find(cb)

  t.is(findThree(list), 3)
})

test('findIndex', t => {
  const list = [1, 2, 3, 4, 5]
  const cb = (x: number): boolean => x === 3

  t.is(findIndex(cb, list), 2)
})

test('curried findIndex', t => {
  const list = [1, 2, 3, 4, 5]
  const cb = (x: number): boolean => x === 3
  const findThreeIndex = findIndex(cb)

  t.is(findThreeIndex(list), 2)
})
