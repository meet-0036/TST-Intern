import { useState } from "react";
import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";
import { EXAMPLES } from "../data.js";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState(); // selectedTopic = undefined(default)

  function handleSelect(selectedButton) {
    // Handle event when button Clicked!
    setSelectedTopic(selectedButton); // update value at same time
    console.log(selectedTopic); // it hold previous value
  }

  let tabContent = "Please select a topic.";

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <Section title="Examples" id="examples">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "components"}
              onClick={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onClick={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onClick={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onClick={() => handleSelect("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>

      {/* Randering Content Conditionaly 3 Ways */}

      {/* {tabContent}    // result return in if */}

      {/* OR */}

      {/* {!selectedTopic ? (
            <p>Please select a topic.</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )} */}

      {/* OR */}

      {/* {!selectedTopic && (<p>Please select a topic.</p>)}
            {selectedTopic && (<div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )} */}
    </Section>
  );
}

/*
useState(): The function where it is used gets re-executed when the state changes.

null: When set, nothing will render.

Why Use the Functional Form?
The functional form is useful when the new state depends on the previous state.
React guarantees that the state passed to this function is always the most recent state,
avoiding potential issues with stale state.

In Summary:
isColor is the current value of color.
!isColor toggles the current value (true becomes false, and false becomes true).
This ensures that each click of the button toggles the color state between true and false.
*/
