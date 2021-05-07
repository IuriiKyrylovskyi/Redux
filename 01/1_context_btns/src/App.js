import React, { useState } from "react";
import "./App.css";
import ThemedButton from "./ThemedButton";
import { themes, ThemeContext } from "./ThemesContext";

const App = () => {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    const newTheme = theme === themes.dark ? themes.light : themes.dark;

    setTheme(newTheme);
  };

  return (
    <div className="App">
      <ThemeContext.Provider value={theme}>
        <ThemedButton handleToggle={toggleTheme} text={"Dynamic Theme"} />
      </ThemeContext.Provider>

      <ThemedButton handleToggle={toggleTheme} text={"Default Theme"} />
    </div>
  );
};

export default App;
