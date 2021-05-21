import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import UserInfo from "./users/UserInfo";
import SearchField from "./users/SearchField";

function App() {
  return (
    <Provider store={store}>
      <UserInfo />
      <SearchField />
    </Provider>
  );
}

export default App;
