import React, { useState } from "react";
import "./App.css";
import ThemedButton from "./ThemedButton";
import { themes, ThemeContext } from "./themes-context";

function App() {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    console.log(theme);
    const newTheme = themes.dark ? themes.light : themes.dark;
    setTheme(newTheme);
  };

  return (
    <div className="App">
      <ThemeContext.Provider value={theme}>
        <ThemedButton onClick={toggleTheme} children={"Dynamic Theme"} />
      </ThemeContext.Provider>

      <ThemedButton onClick={toggleTheme} children={"Default Theme"} />
    </div>
  );
}

export default App;
