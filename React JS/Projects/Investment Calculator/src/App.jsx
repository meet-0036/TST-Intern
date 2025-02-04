import { useState } from "react";
import Input from "./components/Input.jsx";
import Table from "./components/Table.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 100,
    expectedReturn: 6,
    duration: 5,
  });

  // const inputIsValid = userInput.duration >= 1;
  // when Comes in debugging section: comment line 14[also related below portion]

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Input userInput={userInput} onChange={handleChange} />

      {/* when inputIsValid is uncomment */}
      {/* {!inputIsValid && (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
      {inputIsValid && <Table input={userInput} />} */}

      <Table input={userInput} />
    </>
  );
}

export default App;
