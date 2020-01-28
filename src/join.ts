/**
 * Join elements in an array together with a specified seperator (curried)
 * ```js
 * join([1, 2, 3])('-') //=> '1-2-3'
 * join(['la', 'laa', 'lala])('-') //=> 'la-laa-lala'
 * ```
 */
function join(list: Array<number | string>): (seperator: string) => string
/**
 * Join elements in an array together with a specified seperator (curried)
 * ```js
 * join([1, 2, 3], '-') //=> '1-2-3'
 * join(['la', 'laa', 'lala], '-') //=> 'la-laa-lala'
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
