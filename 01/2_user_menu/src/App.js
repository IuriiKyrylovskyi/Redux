import React, { useState } from "react";
import Header from "./Header";
import {user,  UserContext } from "./userContext";

function App() {
  const [userData] = useState(user);

  return (
    <div className="Page">
      <UserContext.Provider value={userData}>
        <Header />
      </UserContext.Provider>
    </div>
  );
}

export default App;
