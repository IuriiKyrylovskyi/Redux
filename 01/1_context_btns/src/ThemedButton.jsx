import React, { useContext } from "react";
import { ThemeContext } from "./ThemesContext";

function ThemedButton({ text, handleToggle }) {
  const { background, fontColor } = useContext(ThemeContext);

  return (
    <button
      onClick={handleToggle}
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

export default ThemedButton;
