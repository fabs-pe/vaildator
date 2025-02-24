import React, { useState } from "react"
import validator from 'validator'
import './App.css'

const App = () => {

  const [errorMessage, setErrorMessage] = useState('')

  const validate = (value) => {

    if (validator.isStrongPassword(value, {
      minLength: 10, minLowercase: 1, minUppercase: 1, minNumbers: 2, minSymbols: 1
    })) {
      setErrorMessage('Is strong password')
    } else {
      setErrorMessage('Is not strong Password')
    }
  }


return (
  <div style={{
    marginLeft: '200px',
  }}>
    <pre>
      <h2>Checking Password Strength</h2>
      <span>Enter Password:</span><input type="text"
      onChange={(e) => validate(e.target.value)}></input> <br />
      {errorMessage === ' ' ? null:
        <span style ={{
          fontWeight: 'bold',
          color: 'red',
        }}>
          {errorMessage}
        </span>
      }
    </pre>

  </div>
);
}

export default App