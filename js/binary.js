function forBinaryFunction(value) {

  let rest = []

  while(value > 1) {
  
    let restDivision = Math.floor(value) % 2
    let valueDivision = value / 2
    rest.push(restDivision)
    value = valueDivision
  }
  return rest.reverse()
}

export default forBinaryFunction