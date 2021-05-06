import React, { useState } from "react";
import "./App.css";
import ThemedButton from "./ThemedButton";
import { themes, ThemeContext } from "./TthemesContext";

const App = () => {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    const newTheme = themes.dark ? themes.light : themes.dark;
    console.log(newTheme);
    return setTheme(newTheme);
  };

  return (
    <div className="App">
      <ThemeContext.Provider value={theme}>
        <ThemedButton onClick={toggleTheme} children={"Dynamic Theme"} />
      </ThemeContext.Provider>

      <ThemedButton onClick={toggleTheme} children={"Default Theme"} />
    </div>
  );
};

export default App;
