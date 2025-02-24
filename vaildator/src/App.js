import React, { useState } from "react"
import validator from 'validator'
import './App.css'

const App = () => {

  const [errorMessage, setErrorMessage] = useState('')

  const validate = (value) => {

    if (validator.isStrongPassword(value, {
      minLength: 10, minLowercase: 1, minUppercase: 1, minNumbers: 2, minSymbols: 1
    })) {
      setErrorMessage('Password is strong')
    } else {
      setErrorMessage('Password is weak')
    }
  }


return (
  <div className="main">
    <pre>
      <h2>Password Strength Checker</h2>
      <h3>Test the strength of your password</h3>
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