import { useContext, useState } from "react";
import "./App.css";
import { Navbar } from "./Navbar";
import { Countries } from "./Countries";
import countriesContext, {
  CountriesContextProvider,
} from "./providers/CountryProvider";
import { Route, Routes } from "react-router-dom";
import { DetailedCard } from "./DetailedCard";

function App() {
  const [theme, setTheme] = useState("light");

  const { country, isCountryFilled } = useContext(countriesContext);

  const isCountryFilledValues = isCountryFilled();

  const themeChange = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <>
      <Navbar themeChange={themeChange} theme={theme} />

      <div className={`principal ${theme}`}>
        {!isCountryFilledValues ? (
          <Countries theme={theme} />
        ) : (
          <DetailedCard {...country} theme={theme} />
        )}
      </div>
    </>
  );
}

export default App;
