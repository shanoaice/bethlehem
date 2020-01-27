const suite = require('chuhai')

suite('B.all implementations', s => {
  const testArray = [1, 2, 3, 4, 5]
  const predicate = x => x === 0

  s.bench('for', () => {
    // eslint-disable-next-line unicorn/no-for-loop
    for (let i = 0; i < testArray.length; i++) {
      if (!predicate(testArray[i])) {
        return false
      }
    }

    return true
  })

  s.bench('while', () => {
    let counter = 0

    while (counter < testArray.length) {
      if (!predicate(testArray[counter])) {
        return false
      }

      counter++
    }

    return true
  })

  s.bench('for in', () => {
    for (const i in testArray) {
      if (typeof i === 'number') {
        if (!predicate(testArray[i])) {
          return false
        }
      }
    }

    return true
  })

  s.bench('for of', () => {
    for (const val of testArray) {
      if (!predicate(val)) {
        return false
      }
    }

    return true
  })

  s.bench('Array.prototype.forEach', () => {
    let result = true

    testArray.forEach(val => {
      if (!predicate(val)) result = false
    })

    return result
  })

  s.bench('Array.prototype.every', () => {
    return testArray.every(predicate)
  })
})

suite('B.any implementations', s => {
  const testArray = [1, 2, 3, 4, 5]
  const predicate = x => x === 0

  s.bench('for', () => {
    // eslint-disable-next-line unicorn/no-for-loop
    for (let i = 0; i < testArray.length; i++) {
      if (predicate(testArray[i])) {
        return true
      }
    }

    return false
  })

  s.bench('while', () => {
    let counter = 0

    while (counter < testArray.length) {
      if (predicate(testArray[counter])) {
        return true
      }

      counter++
    }

    return false
  })

  s.bench('for in', () => {
    for (const i in testArray) {
      if (typeof i === 'number') {
        if (predicate(testArray[i])) {
          return true
        }
      }
    }

    return false
  })

  s.bench('for of', () => {
    for (const val of testArray) {
      if (predicate(val)) {
        return true
      }
    }

    return false
  })

  s.bench('Array.prototype.forEach', () => {
    let result = false

    testArray.forEach(val => {
      if (predicate(val)) result = true
    })

    return result
  })

  s.bench('Array.prototype.some', () => {
    return testArray.some(predicate)
  })
})
