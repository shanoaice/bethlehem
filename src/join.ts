/**
 * Join elements in an array together with a specified seperator (curried)
 * ```js
 * join('-')([1, 2, 3]) //=> '1-2-3'
 * join('-')(['la', 'laa', 'lala']) //=> 'la-laa-lala'
 * ```
 */
function join(seperator: string): (list: Array<number | string>) => string
/**
 * Join elements in an array together with a specified seperator (curried)
 * ```js
 * join('-', [1, 2, 3]) //=> '1-2-3'
 * join('-', ['la', 'laa', 'lala']) //=> 'la-laa-lala'
 * ```
 */
function join(seperator: string, list: Array<number | string>): string
function join(
  seperator: string,
  list?: Array<number | string>
): string | ((list: Array<number | string>) => string) {
  if (typeof list !== 'undefined') {
    let result = ''

    // eslint-disable-next-line @typescript-eslint/prefer-for-of, unicorn/no-for-loop
    for (let i = 0; i < list.length; i++) {
      result += `${list[i]}${seperator}`
    }

    return result.slice(0, -1)
  }

  return list => join(seperator, list)
}

export default join
