interface Case<Input, Output> {
  condition: (...args: Input[]) => boolean
  task: (...args: Input[]) => Output
}

/**
 * A functional version of `switch`. Recieves an array of cases (instance of interface [[Case]]) and returns a function. When calling this function, the arguments will be passed to the condition function of each cases, and if the condition function returns true, the task function of that case will be called with the same arguments and the result of the task will be returned.
 * ```js
 * const absoluteValue = functionalSwitch([
 *   {
 *     condition: x => x > 0,
 *     task: x => x
 *   },
 *   {
 *     condition: x => x === 0,
 *     task: _x => 0
 *   },
 *   {
 *     condition: x => x < 0,
 *     task: x => -x
 *   }
 * ])
 * absoluteValue(3) //=> 3
 * absoluteValue(0) //=> 0
 * absoluteValue(-3) //=> 3
 * ```
 */
function functionalSwitch<Input, Output>(
  cases: Array<Case<Input, Output>>
): (...args: Input[]) => Output | undefined {
  return (...args) => {
    let result

    cases.forEach(caseF => {
      if (caseF.condition(...args)) {
        result = caseF.task(...args)
      }
    })

    return result
  }
}

export default functionalSwitch
