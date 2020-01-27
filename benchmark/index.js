const assert = require('assert')
const suite = require('chuhai')
const ramda = require('ramda')
const rambda = require('rambda')
const bethlehem = require('..')

suite('curried add', s => {
  const a = 2
  const b = 3
  let c

  s.cycle(() => {
    assert.strictEqual(c, 5)
    c = undefined
  })

  s.bench('ramda', () => {
    c = ramda.add(a)(b)
  })

  s.bench('rambda', () => {
    c = rambda.add(a)(b)
  })

  s.bench('bethlehem', () => {
    c = bethlehem.add(a)(b)
  })
})

suite('add', s => {
  const a = 2
  const b = 3
  let c

  s.cycle(() => {
    assert.strictEqual(c, 5)
    c = undefined
  })

  s.bench('ramda', () => {
    c = ramda.add(a, b)
  })

  s.bench('rambda', () => {
    c = rambda.add(a, b)
  })

  s.bench('bethlehem', () => {
    c = bethlehem.add(a, b)
  })
})

suite('multiply', s => {
  const a = 3
  const b = 2
  let c

  s.cycle(() => {
    assert.strictEqual(c, 6)
    c = undefined
  })

  s.bench('ramda', () => {
    c = ramda.multiply(a, b)
  })

  s.bench('rambda', () => {
    c = rambda.multiply(a, b)
  })

  s.bench('bethlehem', () => {
    c = bethlehem.multiply(a, b)
  })
})

suite('curried multiply', s => {
  const a = 3
  const b = 2
  let c

  s.cycle(() => {
    assert.strictEqual(c, 6)
    c = undefined
  })

  s.bench('ramda', () => {
    c = ramda.multiply(a)(b)
  })

  s.bench('rambda', () => {
    c = rambda.multiply(a)(b)
  })

  s.bench('bethlehem', () => {
    c = bethlehem.multiply(a)(b)
  })
})

suite('subtract', s => {
  const a = 2
  const b = 1
  let c

  s.cycle(() => {
    assert.strictEqual(c, 1)
    c = undefined
  })

  s.bench('ramda', () => {
    c = ramda.subtract(a, b)
  })

  s.bench('rambda', () => {
    c = rambda.subtract(a, b)
  })

  s.bench('bethlehem', () => {
    c = bethlehem.subtract(a, b)
  })

  s.bench('bethlehem (reversed)', () => {
    c = bethlehem.reversedSubtract(b, a)
  })

  s.bench('ramda (reversed with flip)', () => {
    c = ramda.flip(ramda.subtract)(b, a)
  })

  s.bench('rambda (reversed with flip)', () => {
    c = rambda.flip(rambda.subtract)(b, a)
  })
})

suite('curried subtract', s => {
  const a = 2
  const b = 1
  let c

  s.cycle(() => {
    assert.strictEqual(c, 1)
    c = undefined
  })

  s.bench('ramda', () => {
    c = ramda.subtract(a)(b)
  })

  s.bench('rambda', () => {
    c = rambda.subtract(a)(b)
  })

  s.bench('bethlehem', () => {
    c = bethlehem.subtract(a)(b)
  })

  s.bench('bethlehem (reversed)', () => {
    c = bethlehem.reversedSubtract(b)(a)
  })

  s.bench('ramda (reversed with placeholder)', () => {
    c = ramda.subtract(ramda.__, b)(a)
  })

  s.bench('ramda (reversed with flip)', () => {
    c = ramda.flip(ramda.subtract)(b)(a)
  })

  s.bench('rambda (reversed with flip)', () => {
    c = rambda.flip(rambda.subtract)(b)(a)
  })
})

suite('divide', s => {
  const a = 4
  const b = 2
  let c

  s.cycle(() => {
    assert.strictEqual(c, 2)
    c = undefined
  })

  s.bench('ramda', () => {
    c = ramda.divide(a, b)
  })

  s.bench('rambda', () => {
    c = rambda.divide(a, b)
  })

  s.bench('bethlehem', () => {
    c = bethlehem.divide(a, b)
  })

  s.bench('bethlehem (reversed)', () => {
    c = bethlehem.reversedDivide(b, a)
  })

  s.bench('ramda (reversed with flip)', () => {
    c = ramda.flip(ramda.divide)(b, a)
  })

  s.bench('rambda (reversed with flip)', () => {
    c = rambda.flip(rambda.divide)(b, a)
  })
})

suite('curried divide', s => {
  const a = 4
  const b = 2
  let c

  s.cycle(() => {
    assert.strictEqual(c, 2)
    c = undefined
  })

  s.bench('ramda', () => {
    c = ramda.divide(a)(b)
  })

  s.bench('rambda', () => {
    c = rambda.divide(a)(b)
  })

  s.bench('bethlehem', () => {
    c = bethlehem.divide(a)(b)
  })

  s.bench('bethlehem (reversed)', () => {
    c = bethlehem.reversedDivide(b)(a)
  })

  s.bench('ramda (reversed with placeholder)', () => {
    c = ramda.divide(ramda.__, b)(a)
  })

  s.bench('ramda (reversed with flip)', () => {
    c = ramda.flip(ramda.divide)(b)(a)
  })

  s.bench('rambda (reversed with flip)', () => {
    c = rambda.flip(rambda.divide)(b)(a)
  })
})

suite('all/every', s => {
  const testArray = new Array(5).fill(1)
  const predicate = x => x === 1
  let result

  s.cycle(() => {
    assert.strictEqual(result, true)
    result = undefined
  })

  s.bench('ramda', () => {
    result = ramda.all(predicate, testArray)
  })

  s.bench('rambda', () => {
    result = rambda.all(predicate, testArray)
  })

  s.bench('bethlehem', () => {
    result = bethlehem.every(predicate, testArray)
  })
})

suite('curried all/every', s => {
  const testArray = new Array(5).fill(1)
  const predicate = x => x === 1
  let result

  s.cycle(() => {
    assert.strictEqual(result, true)
    result = undefined
  })

  s.bench('ramda', () => {
    result = ramda.all(predicate)(testArray)
  })

  s.bench('rambda', () => {
    result = rambda.all(predicate)(testArray)
  })

  s.bench('bethlehem', () => {
    result = bethlehem.every(predicate)(testArray)
  })
})
