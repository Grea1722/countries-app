import { useState } from "react";

export const Navbar = () => {
  const [theme, setTheme] = useState("caca");

  const handleChange = () => {
    theme === "ligth" ? setTheme("dark") : setTheme("ligth");
  };
  return (
    <div className="navbar">
      <h2>Where in the world?</h2>
      <button onClick={handleChange}>{`${theme}`} mode</button>
    </div>
  );
};
