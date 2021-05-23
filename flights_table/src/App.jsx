import React from "react";
import Search from "./components/Search";
import Flights from "./components/Flights";

function App() {
  return (
    <div className="main">
      <h1 className="main__title">Search flight</h1>
      <Search />
      <Flights />
    </div>
  );
}

export default App;
