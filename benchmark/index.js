const assert = require('assert')
const suite = require('chuhai')
const ramda = require('ramda')
const rambda = require('rambda')
const bethlehem = require('..')

suite('curried add', s => {
  const a = 2000
  const b = 3000
  let c

  s.cycle(() => {
    assert.strictEqual(c, 5000)
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
  const a = 2000
  const b = 3000
  let c

  s.cycle(() => {
    assert.strictEqual(c, 5000)
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
  const a = 300
  const b = 200
  let c

  s.cycle(() => {
    assert.strictEqual(c, 60000)
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
  const a = 300
  const b = 200
  let c

  s.cycle(() => {
    assert.strictEqual(c, 60000)
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
})
