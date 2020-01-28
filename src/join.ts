/**
 * Test if the the second argument is an instance of the first argument. (curried)
 * ```js
 * instanceOf(Number)(new Number(1)) //=> true
 * instanceOf(Number)(1) //=> false
 * ```
 */
function join(list: Array<number | string>): (seperator: string) => string
/**
 * Test if the the second argument is an instance of the first argument.
 * ```js
 * instanceOf(Number, new Number(1)) //=> true
 * instanceOf(Number, 1) //=> false
 * ```
 */
function join(list: Array<number | string>, seperator: string): string
function join(
  list: Array<number | string>,
  seperator?: string
): string | ((seperator: string) => string) {
  if (typeof seperator !== undefined) {
    let result = ''

    // eslint-disable-next-line unicorn/no-for-loop, @typescript-eslint/prefer-for-of
    for (let i = 0; i < list.length; i++) {
      result += `${list[i]}${seperator as string}`
    }

    return result.slice(0, -1)
  }

  return seperator => join(list, seperator)
}

export default join
