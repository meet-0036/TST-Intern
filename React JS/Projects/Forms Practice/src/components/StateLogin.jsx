import { useState } from "react";

import Input from "./Input.jsx";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation.js";

export default function Login() {
  // When both entries are need same action
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  // 1) Handle earlier preventing error
  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  // use outSourcing Logic
  const emailIsInvalid = didEdit.email && !isEmail(enteredValues.email);
  // && !isNotEmpty(enteredValues.email);

  const passwordIsInvalid =
    didEdit.password && !hasMinLength(enteredValues.password, 6);

  //  1) Prevent early error
  // const emailIsInvalid =
  //   enteredValues.email !== "" && !enteredValues.email.includes("@");

  // Set validate at losing focus
  // const emailIsInvalid = didEdit.email && !enteredValues.email.includes("@");
  // const passwordIsInvalid =
  //   didEdit.password && enteredValues.password.trim().length < 6;

  function handleSubmit(event) {
    // Prevent the default behavior of the form to avoid a page reload
    event.preventDefault();
    // console.log(event);
    console.log(enteredValues);

    // Clear the form(Reset)
    // setEnteredValues({
    //   email: "",
    //   password: "",
    // });
  }

  // When handle multiple input by same state,need to provide identifier.
  function handleInputChange(identifier, value) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));

    setDidEdit((prevEdit) => ({ ...prevEdit, [identifier]: false }));
  }
  // ({ entries }) : Js says to treat it as an object.

  function handleInputBlur(identifier) {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: true,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={() => handleInputBlur("email")}
          onChange={(event) => handleInputChange("email", event.target.value)}
          value={enteredValues.email}
          error={emailIsInvalid && "Please enter a valid email!"}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onChange={(event) =>
            handleInputChange("password", event.target.value)
          }
          onBlur={() => handleInputBlur("password")}
          value={enteredValues.password}
          error={passwordIsInvalid && "Please enter a valid password!"}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        {/* Form takes a default button type="submit" */}
        {/* <button type="button" className="button">Login</button> */}
        <button className="button">Login</button>
      </p>
    </form>
  );
}

// "HtmlFor" is like "for" attribute in label.
// Form submit Btn : When clicked, it will submit the form and reload the page(That's a Problem).
// To avoid this, we use event.preventDefault() in handleSubmit function.
