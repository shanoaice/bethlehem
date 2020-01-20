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
