import { useState, memo, useCallback, useMemo } from "react";

import IconButton from "../UI/IconButton.jsx";
import MinusIcon from "../UI/Icons/MinusIcon.jsx";
import PlusIcon from "../UI/Icons/PlusIcon.jsx";
import CounterOutput from "./CounterOutput.jsx";
import CounterHistory from "./CounterHistory.jsx";
import { log } from "../../log.js";

function isPrime(number) {
  log("Calculating if is prime number", 2, "other");
  if (number <= 1) {
    return false;
  }

  const limit = Math.sqrt(number);

  for (let i = 2; i <= limit; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

const Counter = memo(function Counter({ initialCount }) {
  log("<Counter /> rendered", 1);

  // useMemo() is used to memoize the result of a function.
  // It will only re-calculate the result if the dependencies change.
  const initialCountIsPrime = useMemo(
    () => isPrime(initialCount),
    [initialCount]
  );

  // When we update setConuter Input, it's not reflected in counter(because it assign prev state to component)
  // useEffect(() => {
  //   setCounterChanges([{ value: initialCount, id: Date.now() }]);
  // }, [initialCount]);
  // But this not optimal, SO WE USE TO PASS A KEY WHEN UPDATE ANY INITIAL VALUE.

  // const [counter, setCounter] = useState(initialCount);
  // const [counterChanges, setCounterChanges] = useState([initialCount]); // we need to manage a key.
  const [counterChanges, setCounterChanges] = useState([
    { value: initialCount, id: Date.now() },
  ]);

  const currentCounter = counterChanges.reduce(
    (prevCounter, counterChange) => prevCounter + counterChange.value,
    0
  );

  // Handle re-creation unnecessary
  const handleDecrement = useCallback(() => {
    // setCounter((prevCounter) => prevCounter - 1);
    // setCounterChanges((prevCounterChanges) => [-1, ...prevCounterChanges]);
    setCounterChanges((prevCounterChanges) => [
      { value: -1, id: Date.now() },
      ...prevCounterChanges,
    ]);
  }, []);

  const handleIncrement = useCallback(() => {
    // setCounter((prevCounter) => prevCounter + 1);
    // setCounterChanges((prevCounterChanges) => [1, ...prevCounterChanges]);
    setCounterChanges((prevCounterChanges) => [
      { value: 1, id: Date.now() },
      ...prevCounterChanges,
    ]);
  }, []);

  return (
    <section className="counter">
      <p className="counter-info">
        The initial counter value was <strong>{initialCount}</strong>. It{" "}
        <strong>is {initialCountIsPrime ? "a" : "not a"}</strong> prime number.
      </p>
      <p>
        <IconButton icon={MinusIcon} onClick={handleDecrement}>
          Decrement
        </IconButton>
        <CounterOutput value={currentCounter} />
        <IconButton icon={PlusIcon} onClick={handleIncrement}>
          Increment
        </IconButton>
      </p>
      <CounterHistory history={counterChanges} />
    </section>
  );
});

export default Counter;

// When we need some code not execute on every rende..

// memo(): Compares two props (previous & current). If they are equal, the function will not execute.
// Does not depend on internal state changes, only on external changes like props.

// 1. Don't overuse memoization. It can lead to performance issues.
// use at high up in component tree as possible.

//2. Checking props with memo() costs performance.
// don't wrap it around all your components. - it will just add a lot of unnecessary checks.

// 3. Don't use it on components where props will change frequently.
//memo() would just perform a meaningless check in such cases(which costs performance).

// OR

// This more preferable way.
// Create a new component that changes the state
