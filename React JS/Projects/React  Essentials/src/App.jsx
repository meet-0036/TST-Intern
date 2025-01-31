import { useState, Fragment } from "react";
import Header from "./Components/Header/Header.jsx";
import CoreConcepts from "./Components/CoreConcepts.jsx";
import Examples from "./Components/Examples.jsx";

// External Practices
import OwnExample1 from "./Components/OwnExample1.jsx";
import OwnExample2 from "./Components/OwnExample2.jsx";

// React initial/Starting Component
function App() {
  return (
    <Fragment>
      {/*this replace with extra unusable div also use as <> ... </> */}
      <header>
        <Header />
      </header>
      <main>
        <CoreConcepts />
        <Examples />
        <OwnExample1 />
        <OwnExample2 />
      </main>
    </Fragment>
  );
}

export default App;
