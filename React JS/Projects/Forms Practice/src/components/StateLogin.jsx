import { useState } from "react";

export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [enteredPassword, setEnteredPassword] = useState('');

  // When both entries are need same action
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(event) {
    // Prevent the default behavior of the form to avoid a page reload
    event.preventDefault();
    // console.log(event);
    console.log(enteredValues);
  }

  // When handle multiple input by same state,need to provide identifier.
  function handleInputChange(identifier, value) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));
  }
  // ({ entries }) : Js says to treat it as an object.

  // function handleEmailChange(event) {
  //   setEnteredEmail(event.target.value);
  // }

  // function handlePasswordChange(event) {
  //   setEnteredPassword(event.target.value);
  // }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={(event) => handleInputChange("email", event.target.value)}
            value={enteredValues.email}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
            value={enteredValues.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
        {/* Form takes a default button type="submit" */}
        {/* <button type="button" className="button">Login</button> */}
      </p>
    </form>
  );
}

// HtmlFor is like for attribute in label.
// Form submit Btn : When clicked, it will submit the form and reload the page(That's a Problem).
// To avoid this, we use event.preventDefault() in handleSubmit function.
