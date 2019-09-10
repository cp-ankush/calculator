import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

const DisplayResult = ({ result, operand }) => {
  return (
    <div className="display-data">
    {
      result === ''? (operand === '' ? 0 : operand) : result
    }
    </div>
  )
}

export default DisplayResult
