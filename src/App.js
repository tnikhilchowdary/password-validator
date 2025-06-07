
import { useState } from 'react';
import './App.css';

function App() {
  const [password, setPassword] = useState('');
  const [validations, setValidations] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    speacialChar: false,
  });
  
  const validatePassword = (value) => {
    setPassword(value);
    setValidations({
      length:value.length >= 8,
      uppercase:/[A-Z]/.test(value),
      lowercase:/[a-z]/.test(value),
      number:/[0-9]/.test(value),
      specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(value),
    });
  }

  return (
    <div className="App">
      <h2>Password Validator</h2>
      <input type="password" 
      value={password}
      onChange={(e) => validatePassword(e.target.value)}
      placeholder="Enter Password"
      />
      <ul>
        <li style={{ color: validations.length ? 'green' : 'red' }}>
          Minimum 8 characters
        </li>
        <li style={{ color: validations.uppercase ? 'green' : 'red' }}>
          At least one uppercase letter
        </li>
        <li style={{ color: validations.lowercase ? 'green' : 'red' }}>
          At least one lowercase letter
        </li>
        <li style={{ color: validations.number ? 'green' : 'red' }}>
          At least one number
        </li>
        <li style={{ color: validations.specialChar ? 'green' : 'red' }}>
        At least one special character (!@#$...)
        </li>

      </ul>
    </div>
  );
}

export default App;
