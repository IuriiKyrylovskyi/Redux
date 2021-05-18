import React from "react";
import { Provider } from 'redux';
import store from './store';
import TransferList from "./options/TransferList";

function App() {
  return (
    <Provider store={store}>
      <TransferList />
    </Provider>
}

export default App;
