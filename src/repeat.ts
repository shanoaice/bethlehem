function repeat<T>(times: number, value: T): T[]
function repeat(times: number): <T>(value: T) => T[]
// eslint-disable-next-line @typescript-eslint/ban-types
function repeat(times: number, value?: any): any[] | Function {
  if (value) {
    return new Array(times).fill(value)
  }

  return function<T>(value: T): T[] {
    return new Array(times).fill(value)
  }
}

export default repeat
