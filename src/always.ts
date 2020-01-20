/**
 * This function will return a function that always return `a`
 */
function always<T>(a: T): (...args: any[]) => T {
  return () => a
}

export default always
