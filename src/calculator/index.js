import React, { useState } from 'react'
import PropTypes from 'prop-types'
import DisplayResult from './displayResult'
import Button from './button'
import { handleOperation } from './operations'
import './styles.css'

const buttons = [
  {
    name: '1',
    value: 1,
    type: 'input'
  }, {
    name: '2',
    value: 2,
    type: 'input'
  }, {
    name: '3',
    value: 3,
    type: 'input'
  }, {
    name: 'Add(+)',
    value: '+',
    type: 'operation'
  }, {
    name: '4',
    value: 4,
    type: 'input'
  }, {
    name: '5',
    value: 5,
    type: 'input'
  }, {
    name: '6',
    value: 6,
    type: 'input'
  }, {
    name: 'Subtraction(-)',
    value: '-',
    type: 'operation'
  }, {
    name: '7',
    value: 7,
    type: 'input'
  }, {
    name: '8',
    value: 8,
    type: 'input'
  }, {
    name: '9',
    value: 9,
    type: 'input'
  }, {
    name: 'Multiply(*)',
    value: '*',
    type: 'operation'
  }, {
    name: 'Clear',
    value: 'Clear',
    type: 'operation'
  }, {
    name: '0',
    value: 0,
    type: 'input'
  }, {
    name: 'equalTo',
    value: '=',
    type: 'operation'
  }, {
    name: 'Divide(/)',
    value: '/',
    type: 'operation'
  }, {
    name: 'Sign',
    value: 'sign',
    type: 'operation',
    mode: 'Scientific'
  }, {
    name: 'Square',
    value: 'square',
    type: 'operation',
    mode: 'Scientific'
  }, {
    name: 'Square Root',
    value: 'square-root',
    type: 'operation',
    mode: 'Scientific'
  }
]

const handleInput = ({
  operand,
  operation,
  setResult,
  setOperand,
  result,
  value
}) => {
  if (operand && operation) {
    setResult(`${result}${value}`)
  } else if (result && operand === ''){
    setResult('')
    setOperand(`${value}`)
  } else {
    setResult('')
    setOperand(`${operand}${value}`)
  }
}

const handleButtonClick = ({
  type,
  value,
  setResult,
  operation,
  setOperation,
  result,
  operand,
  setOperand
 }) => {
  switch(type) {
    case 'input': {
      handleInput({
        operand,
        operation,
        setResult,
        setOperand,
        result,
        value
      })
      return
    }
    case 'operation': {
      handleOperation({
        type,
        value,
        setResult,
        operation,
        setOperation,
        result,
        operand,
        setOperand
      })
      return
    }
  }
}

const Calculator = ({ mode }) => {
  const [operand, setOperand] = useState('')
  const [result, setResult] = useState('')
  const [operation, setOperation] =  useState(null)

  return (
    <div className="calc-container">
      <DisplayResult result={result} operand={operand}/>
      <div className="buttons-container">
      {
        buttons.map((button, index) => {
          if (!button.mode || (button.mode !== mode)) {
            return (
              <Button
                data={button}
                key={index}
                handleButtonClick={({ type, value }) => handleButtonClick({
                  type,
                  value,
                  setResult,
                  operation,
                  setOperation,
                  result,
                  operand,
                  setOperand
                 })}
              />
            )
          }
        }
      )
      }
      </div>
    </div>
  )
}

export default Calculator
