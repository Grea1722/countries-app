import React, { createContext, useState } from "react";

const CountriesContext = createContext({});

const defaultState = {
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
};

export function CountriesContextProvider({ children }) {
  const [country, setCountry] = useState(defaultState);

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
      borders: newCountry.borders,
    });
  };

  const handleClearCountry = () => {
    setCountry(defaultState);
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
