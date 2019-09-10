const handleSign = ({
  result,
  setResult,
  operand,
  setOperand
}) => {
  if (result) {
    const signedValue = -Number(result)
    setResult(signedValue.toString())
  } else if (operand){
    const signedValue = -Number(operand)
    setOperand(signedValue.toString())
  }
}

const handlePower = ({
  result,
  setResult,
  operand,
  setOperand,
  power
}) => {
  if (result) {
    const squareValue = Math.pow(Number(result), power)
    setResult(squareValue.toString())
  } else if (operand){
    const squareValue = Math.pow(Number(operand), power)
    setOperand(squareValue.toString())
  }
}

const handleClear = ({
  setResult,
  setOperand,
  setOperation
}) => {
  setResult('')
  setOperand('')
  setOperation('')
}

// Method to export
export const handleOperation = ({
  type,
  value,
  setResult,
  operation,
  setOperation,
  result,
  operand,
  setOperand
}) => {
  if (value === 'sign') {
    handleSign({
      result,
      setResult,
      operand,
      setOperand
    })
  } else if (value === 'square') {
    handlePower({
      result,
      setResult,
      operand,
      setOperand,
      power: 2
    })
  } else if (value === 'square-root') {
    handlePower({
      result,
      setResult,
      operand,
      setOperand,
      power: 0.5
    })
  } else if (value === 'Clear') {
    handleClear({
      setResult,
      setOperand,
      setOperation
    })
  } else if (value === '=') {
    if (operand && result) {
      setResult(eval(`${Number(operand)} ${operation} ${Number(result)}`))
      setOperation('')
      setOperand('')
    }
  } else if (operand && result) {
    setOperand(eval(`${Number(operand)} ${operation} ${Number(result)}`))
    setOperation(value)
    setResult('')
  } else if (operand) {
    setOperation(value)
  } else if (result) {
    setOperand(result)
    setOperation(value)
    setResult('')
  }
}
