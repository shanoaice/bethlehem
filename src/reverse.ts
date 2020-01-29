/**
 * Returns a new string with the characters in reverse order.
 * ```js
 * reverse('abc') //=> 'cba'
 * reverse('ab') //=> 'ba'
 * reverse('a') //=> 'a'
 * reverse('') //=> ''
 * ```
 */
function reverse(list: string): string
/**
 * Returns a new list with the elements in reverse order.
 * ```js
 * reverse([1, 2, 3]) //=> [3, 2, 1]
 * reverse([1, 2]) //=> [2, 1]
 * reverse([1]) //=> [1]
 * reverse([]) //=> []
 * ```
 */
function reverse<T>(list: T[]): T[]
function reverse<T>(list: T[] | string): T[] | string {
  const result = []
  // eslint-disable-next-line unicorn/prefer-spread
  const array = Array.from(list as Iterable<string>)

  for (let i = array.length - 1; i >= 0; i--) {
    result.push(array[i])
  }

  return (Array.isArray(list) ? result : result.join('')) as T[] | string
}

export default reverse
