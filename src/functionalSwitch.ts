interface Case {
  condition: (...args: any[]) => boolean
  task: (...args: any[]) => any
}

function functionalSwitch(cases: Case[]): (...args: any[]) => any {
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
