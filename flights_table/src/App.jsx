import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Search from "./components/Search";
import Flights from "./components/Flights";

function App() {
  return (
    <Provider store={store}>
      <div className="main">
        <h1 className="main__title">Search flight</h1>
        <Search />
        <Flights />
      </div>
    </Provider>
  );
}

export default App;
