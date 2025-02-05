import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef(); // take all attributes where this pass in "ref"
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);

  function handleClick() {
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = "";
    // console.log(playerName);
    // console.log(playerName.current);
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "unknown entity"}</h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}

// It uses the useRef hook to reference the input field and the useState hook to manage the entered player name state.
// useRef Hook: it share object across diff element
// useRef(initialValue)

// {enteredPlayerName ?? "unknown entity"} - which truthy will returned[read line starting]

// When we remove useState() : data updated line by line executed(enteredPlayerName not assign). also handle this.
//                             but component state can't be changed. (It's required!!)
