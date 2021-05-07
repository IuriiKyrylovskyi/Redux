import React, { Component } from "react";
import Header from "./Header";
import { UserContext } from "./userContext";

class App extends Component {
  state = {
    userData: {
      name: "Nikola Tesla",
      avatar_url: "https://avatars3.githubusercontent.com/u10001",
    },
  };

  render() {
    return (
      <div className="Page">
        <UserContext.Provider value={this.state.userData}>
          <Header />
        </UserContext.Provider>
      </div>
    );
  }
}

export default App;
