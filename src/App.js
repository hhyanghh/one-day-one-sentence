import React from "react";

import SentenceDisplay from "./components/SentenceDisplay";
import DateDisplay from "./components/DateDisplay";

import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.App}>
      <DateDisplay />
      <SentenceDisplay />
    </div>
  );
}

export default App;
