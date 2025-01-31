import { useState, Fragment } from "react";

export default function OwnExample1() {
  const [color, setColor] = useState();

  // More practice for Dynamic Styling
  function changecolor() {
    setColor((iscolor) => !iscolor); // use function for change state
  }

  return (
    <>
      <h3>Dynamically change Css Apply className</h3>
      <div>
        <p className={color ? "activeToggle" : undefined}>Style me!</p>
        <button onClick={changecolor}>Toggle style</button>

        {/* or */}

        {/* <button onClick={() => setColor((iscolor) => !iscolor))}>Toggle style</button> */}
      </div>

      <h3>List of Pages</h3>
      <ul id="listNumber">
        {[1, 2, 3, 4, 5].map((num) => (
          <li key={num}>{num}</li>
        ))}
      </ul>
    </>
  );
}
