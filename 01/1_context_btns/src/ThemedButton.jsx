import React, { useContext } from "react";
import { ThemeContext } from "./TthemesContext";

function ThemedButton({ children }) {
  const { background, fontColor } = useContext(ThemeContext);
  
  return (
    <button
      className="btn"
      style={{
        backgroundColor: background,
        color: fontColor,
      }}
    >
      {children}
    </button>
  );
}

// ThemedButton.contextType = ThemeContext;

export default ThemedButton;
