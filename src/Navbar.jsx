import { useState } from "react";

export const Navbar = ({ themeChange, theme }) => {
  return (
    <div className={`navbar ${theme}`}>
      <h2>Where in the world?</h2>
      <button onClick={themeChange}>
        {theme == "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  );
};
