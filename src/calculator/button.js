import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { themeStyles } from '../theme'
import { ThemeContext } from '../context'
import './styles.css'

const Button = ({ data, handleButtonClick }) => {
  const theme = useContext(ThemeContext);
  return (
    <div
      className="button"
      style={{
        backgroundColor: themeStyles[theme].calcButtonColor
      }}
      onClick={
        () => handleButtonClick({ type: data.type, value: data.value })
      }>
        { data.name }
    </div>
  )
}

export default Button
