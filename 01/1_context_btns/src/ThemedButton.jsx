import React, { useContext } from "react";
import { ThemeContext } from "./TthemesContext";

function ThemedButton({ text }) {
  const { background, fontColor } = useContext(ThemeContext);
  
  return (
    <button
      className="btn"
      style={{
        backgroundColor: background,
        color: fontColor,
      }}
    >
      {text}
    </button>
  );
}

// ThemedButton.contextType = ThemeContext;

export default ThemedButton;
