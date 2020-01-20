function always<T>(a: T): (...args: any[]) => T {
  return () => a
}

export default always
