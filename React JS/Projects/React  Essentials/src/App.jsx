import { useState, Fragment } from "react";
import Header from "./Components/Header/Header.jsx";
import CoreConcepts from "./Components/CoreConcepts.jsx";
import Examples from "./Components/Examples.jsx";
import OwnExample from "./Components/OwnExample.jsx";

function App() {
  // React Component

  return (
    <Fragment>
      {/*this replace with extra unusable div also use ad <> ... </> */}
      <header>
        <Header />
      </header>
      <main>
        <CoreConcepts />
        <Examples />
        <OwnExample />
      </main>
    </Fragment>
  );
}

export default App;
