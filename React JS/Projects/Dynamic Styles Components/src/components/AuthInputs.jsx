import { useState } from 'react';
import { styled } from 'styled-components';
import Input from './Input.jsx';
import Button from './Button.jsx';

// seperate css component for this module with unique names with venilla CSS
// This also provide such functionality comes with div to ControlContainer also comes with built-in props.

const ControlContainer = styled.div`
   display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">

      {/* when require some specific style with add div in this components  */}
      <ControlContainer>
   
          <Input
            type="email"
            label = 'Email'
            // style = {{
            //   backgroundColor: emailNotValid ? "#fed2d2" : "#d1d5db"  
            // }}
            // className={emailNotValid ? '$invalid' : undefined}
            invalidStatus = {emailNotValid}
            onChange={(event) => handleInputChange('email', event.target.value)}
          />
  
    
          <Input
            type="password"
            // className={passwordNotValid ? '$invalid' : undefined}
            label = "password"
            invalidStatus = {passwordNotValid}
            onChange={(event) => handleInputChange('password', event.target.value)
            }     
          />

      </ControlContainer>

      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
        </button>
        <Button onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}


// Use venilla CSS : conditionally apply css to the element 
// className must be use as conditionally using ternary operator
// `${}` => it make a dynamic variable added String
// Example : `normal word ${var}`

//  <Label $>Email</Label>   className = {`Label ${emailNotValid ? '$invalid' : undefined}`}
{/* <Label $invalid = {passwordNotValid}>Password</Label>   className = {`label ${passwordNotValid  ? '$invalid' : undefined}`}  */}
      