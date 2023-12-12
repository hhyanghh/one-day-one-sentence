import React from "react";
import "./App.css";
import SentenceDisplay from "./components/SentenceDisplay";
import DateDisplay from "./components/DateDisplay";

function App() {
  return (
    <div className="App">
      <DateDisplay />
      <SentenceDisplay />
    </div>
  );
}

export default App;
