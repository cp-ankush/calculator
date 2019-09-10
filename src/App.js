import React, { useState } from 'react';
import logo from './logo.svg';
import Calculator from './calculator'
import { Provider } from './context'
import { themeStyles } from './theme'
import './App.css';

const handleMode = ({ mode , setMode }) => {
  const value = mode === 'Scientific'? 'Normal' : 'Scientific'
  setMode(value)
}

function App() {
  const [mode, setMode] = useState('Scientific')
  const [theme, setTheme] = useState('light')
  const backgroundColor = themeStyles[theme].backgroundColor
  const color = themeStyles[theme].textColor

  return (
    <Provider value={theme}>
      <div
        className="App"
        style={{ backgroundColor, color }}
        >
        <div className="top-container">
          <div
            className="mode scientific-mode"
            onClick={() => handleMode({ mode , setMode })}
            >
            { `${mode} Mode` }
          </div>
          <div className="mode" onClick={() => setTheme('light')}>
            Light Theme
          </div>
          <div className="mode" onClick={() => setTheme('dark')}>
            Dark Theme
          </div>
        </div>
        <Calculator mode={ mode } />
      </div>
    </Provider>
  );
}

export default App;
