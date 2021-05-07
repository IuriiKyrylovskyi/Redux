import React, { useState } from "react";
import Header from "./Header";
import { UserContext } from "./userContext";

function App() {
  const [userData] = useState({
    name: "Nikola Tesla",
    avatar_url: "https://avatars3.githubusercontent.com/u10001",
  });

  return (
    <div className="Page">
      <UserContext.Provider value={userData}>
        <Header />
      </UserContext.Provider>
    </div>
  );
}

export default App;
