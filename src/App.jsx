import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Navbar } from "./Navbar";
import { Countries } from "./Countries";
import countriesContext, {
  CountriesContextProvider,
} from "./providers/CountryProvider";
import { Route, Routes } from "react-router-dom";
import { DetailedCard } from "./DetailedCard";

function App() {
  const [count, setCount] = useState(0);

  const { country, isCountryFilled } = useContext(countriesContext);

  const isCountryFilledValues = isCountryFilled();

  console.log(isCountryFilledValues);

  return (
    <>
      <Navbar />

      {!isCountryFilledValues ? <Countries /> : <DetailedCard {...country} />}
    </>
  );
}

export default App;
