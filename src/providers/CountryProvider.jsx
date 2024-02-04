import React, { createContext, useState } from "react";

const CountriesContext = createContext({});

export function CountriesContextProvider({ children }) {
  const [country, setCountry] = useState({
    src: "",
    common: "",
    official: "",
    population: 0,
    region: "",
    subregion: "",
    capital: "",
    topdomain: "",
    languages: [],
    currency: [],
  });

  const handleSetCountry = (newCountry) => {
    setCountry({
      src: newCountry.flags,
      common: newCountry.name.common,
      official: newCountry.name.official,
      population: newCountry.population,
      region: newCountry.region,
      subregion: newCountry.subregion,
      capital: newCountry.capital,
      topdomain: newCountry.tld,
      languages: newCountry.languages,
      currency: newCountry.currencies,
    });
    console.log(newCountry);
  };

  const handleClearCountry = () => {
    setCountry({
      name: "",
      nativeName: "",
      population: 0,
      region: "",
      subRegion: " ",
      capital: "",
      topDomain: "",
      languages: [""],
    });
  };

  const isCountryFilled = () => {
    return country.common && country.official && country.population > 0;
  };
  return (
    <CountriesContext.Provider
      value={{ country, handleSetCountry, handleClearCountry, isCountryFilled }}
    >
      {children}
    </CountriesContext.Provider>
  );
}

export default CountriesContext;
