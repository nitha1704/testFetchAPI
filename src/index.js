import React from "react";
import ReactDOM from "react-dom";

// CSS
import "./style.css";

// Component
import Setup from "./tutorial/UseEffectFetchAPI";





function App() {
  return (
    <React.Fragment>
      <div className="section1">
        <div className="inner">
          <Setup />
        </div>
      </div>
    </React.Fragment>
  );
}








ReactDOM.render(<App />, document.getElementById("root"));
