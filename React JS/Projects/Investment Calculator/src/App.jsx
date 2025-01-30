import { useState } from 'react';
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";


function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
      annualInvestment: 1200,
      expectedReturn: 6,
      duration: 10,
  });
  
  const inputIsValid = (userInput.duration > 0);

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,  // can add a number not concat a string
      };
    });
  }

  
  return (
    <>
    <UserInput userInput = {userInput} onChange = {handleChange} />
    {inputIsValid ? <Results input = {userInput}/> : <p className = 'center'>Please enter a duration greater than zero</p> }
    
    </>
  );
}

export default App;
