import { useState } from "react";

import TabButton from "./TabButton";
import { EXAMPLES } from "../data";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState(); //userState() returns a array[] that contains 2 elements: stateValue & setStateValue()

  function handleSelect(selectedTopicButton) {
    /*React set a schedule to execute the setStateValue function.
    So, it's strongly recommended to use setStateValue() with the help of a callback function like the arrow function */
    setSelectedTopic(() => selectedTopicButton);
    console.log(selectedTopic); //the value of state always 1 step slower than the value rendered on web page since React yielded the execution of setStateValue()
  }

  //Rendering content conditionally
  let tabContent = "";

  !selectedTopic //Using ternary expression if selectedTop === undefined
    ? (tabContent = <p>Please select a topic.</p>)
    : (tabContent = (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
      ));

  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        {/*COMMON PATTERN: Passing Custom Arguments to Event Functions with the Help of Arrow Function*/}
        <TabButton
          isActive={selectedTopic === "components"}
          onSelect={() => handleSelect("components")}
        >
          Components
        </TabButton>
        <TabButton
          isActive={selectedTopic === "jsx"}
          onSelect={() => handleSelect("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isActive={selectedTopic === "props"}
          onSelect={() => handleSelect("props")}
        >
          Props
        </TabButton>
        <TabButton
          isActive={selectedTopic === "state"}
          onSelect={() => handleSelect("state")}
        >
          State
        </TabButton>
      </menu>
      {tabContent}
    </section>
  );
}
