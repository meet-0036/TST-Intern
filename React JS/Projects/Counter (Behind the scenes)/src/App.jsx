import { useState } from "react";

import Counter from "./components/Counter/Counter.jsx";
import Header from "./components/Header.jsx";
import { log } from "./log.js";
import ConfigureCounter from "./components/Counter/ConfigureCounter.jsx";

function App() {
  log("<App /> rendered");

  const [chosenCount, setChosenCount] = useState(0);

  function handleSetCount(newCount) {
    // setChosenCount(newCount);
    // console.log(newCount);   // won't work!
    setChosenCount((prevCount) => (prevCount = newCount));
  }

  return (
    <>
      <Header />
      <main>
        <ConfigureCounter onSet={handleSetCount} />
        <Counter key={chosenCount} initialCount={chosenCount} />

        {/* When use same state on other child (state is different for every Child) */}
        {/* <Counter initialCount={0} /> */}
      </main>
    </>
  );
}

export default App;

// This situation is causes with state.
// When state changes, React schedules a new execution (like i++ for the component's next execution).
// Solution: We try to update using a function, which guarantees that the state is up-to-date.

// Million Js Package : Also use optimize the performance of your React applications.
