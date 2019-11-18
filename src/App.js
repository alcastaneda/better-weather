import React from "react";
import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <header>
        <h1>Better Weather!</h1>
      </header>
      <SearchParams path="/" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
