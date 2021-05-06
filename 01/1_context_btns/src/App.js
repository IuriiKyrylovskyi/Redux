import React, { useState } from "react";
import "./App.css";
import ThemedButton from "./ThemedButton";
import { themes, ThemeContext } from "./ThemesContext";

const App = () => {
  const [theme, setTheme] = useState(themes.dark);

  const toggleTheme = () => {
    const newTheme = theme === themes.dark
      ? themes.light
      : themes.dark;
    
    console.log(newTheme);
    setTheme(newTheme);
  };

  return (
    <div className="App">
      <ThemeContext.Provider value={theme}>
        <ThemedButton onClick={toggleTheme} text={"Dynamic Theme"} />
      </ThemeContext.Provider>

      <ThemedButton onClick={toggleTheme} text={"Default Theme"} />
    </div>
  );
};

export default App;
