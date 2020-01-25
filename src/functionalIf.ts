type curriedFunctionalIf<Input, Output> = (
  task: (...args: Input[]) => Output,
  elseTask?: (...args: Input[]) => Output
) => (...args: Input[]) => Output | undefined

/**
 * A functional version of `if`. Recieves a condition function which returns boolean value and a task function. Returns a function that will call the condition function with all the arguments it recieved. If the condition function returns true, the task function will be called with the same arguments. The result of the task function will be returned at last. (curried)
 * ```js
 * const negativity = functionalIf(x => x < 0)(() => 'negative', () => 'positive or zero')
 * negativity(-1) //=> 'negative'
 * negativity(0) //=> undefined
 * negativity(1) //=> undefined
 * ```
 */
function functionalIf<Input, Output>(
  condition: (...args: Input[]) => boolean
): curriedFunctionalIf<Input, Output>
/**
 * A functional version of `if`. Recieves a condition function which returns boolean value and a task function. Returns a function that will call the condition function with all the arguments it recieved. If the condition function returns true, the task function will be called with the same arguments. The result of the task function will be returned at last.
 * ```js
 * const negativity = functionalIf(x => x < 0, () => 'negative', () => 'positive or zero')
 * negativity(-1) //=> 'negative'
 * negativity(0) //=> undefined
 * negativity(1) //=> undefined
 * ```
 */
function functionalIf<Input, Output>(
  condition: (...args: Input[]) => boolean,
  task: (...args: Input[]) => Output,
  elseTask?: (...args: Input[]) => Output
): (...args: Input[]) => Output | undefined
function functionalIf<Input, Output>(
  condition: (...args: Input[]) => boolean,
  task?: (...args: Input[]) => Output,
  elseTask?: (...args: Input[]) => Output
):
  | curriedFunctionalIf<Input, Output>
  | ((...args: Input[]) => Output | undefined) {
  if (typeof task !== 'undefined') {
    return (...args: Input[]) => {
      if (condition(...args)) {
        return task(...args)
      }

      if (typeof elseTask !== 'undefined') {
        return elseTask(...args)
      }
    }
  }

  return (task => {
    if (typeof task !== 'undefined') {
      return (...args) => {
        if (condition(...args)) {
          return task(...args)
        }

        if (typeof elseTask !== 'undefined') {
          return elseTask(...args)
        }
      }
    }
  }) as curriedFunctionalIf<Input, Output>
}

export default functionalIf
