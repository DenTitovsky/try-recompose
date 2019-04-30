import React from "react";
import ReactDOM from "react-dom";
import { withState } from "recompose";

import "./styles.css";

const statefullTooltip = withState("isFocused", "setFocused", false);

const Tooltip = statefullTooltip(({ text, isFocused, setFocused }) => {
  return (
    <div
      className={`tooltip${isFocused && "-focused"}`}
      onMouseOver={() => setFocused(true)}
      onMouseLeave={() => setFocused(false)}
    >
      {text}
    </div>
  );
});

function App() {
  return (
    <>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
      <Tooltip text="12345" />
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
