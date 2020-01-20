/**
 * Performs left-to-right function composition. The leftmost function may have any arity; the remaining functions must be unary. **Warning: Unlike Ramda, this function performs left-to-right composition, not right-to-left.**
 * ```js
 * const f = compose(Math.pow, a => a + 1)
 * f(2, 4) // 2^4 + 1
 * ```
 */
const compose = function(
  ...middlewares: Array<(...args: any[]) => any>
): (...args: any[]) => any {
  return function(...args) {
    let firstRun = true
    let lastReturn: any = null
    middlewares.forEach(middleware => {
      if (firstRun) {
        lastReturn = middleware(...args)
        firstRun = !firstRun
      } else {
        lastReturn = middleware(lastReturn)
      }
    })
    return lastReturn
  }
}

export default compose
