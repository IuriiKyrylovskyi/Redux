import React, { useContext } from "react";
import { ThemeContext } from "./themes-context";

function ThemedButton({ children }) {
  const { background, fontColor } = useContext(ThemeContext);
  // console.log(background, fontColor);
  console.log(background);
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
