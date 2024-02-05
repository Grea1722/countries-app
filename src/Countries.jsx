import React, { useContext, useEffect, useState } from "react";
import { Cards } from "./Cards";
import { Form } from "./Form";
import countriesContext from "./providers/CountryProvider";

export const Countries = ({ theme }) => {
  const [countries, setCountries] = useState([]);
  const [searchCount, setSearchCount] = useState("");
  const [selectedCont, setSelectedCont] = useState("");

  const { handleSetCountry } = useContext(countriesContext);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    filteredCountries;
  }, [searchCount || selectedCont]);

  const filteredCountries = countries.filter((country) => {
    return (
      (searchCount
        ? country.name.common.toLowerCase().includes(searchCount.toLowerCase())
        : true) &&
      // Filtrar por "selectedCont"
      (selectedCont ? country.region === selectedCont : true)
    );
  });

  const onChange = (e) => {
    setSearchCount(e.target.value);
  };

  const onSelect = (e) => {
    setSelectedCont(e.target.value);
  };

  const onClicker = (detailedInfo) => {
    handleSetCountry(detailedInfo);
  };

  return (
    <div className="countries-main">
      <Form onChange={onChange} theme={theme} onSelect={onSelect} />
      <div className="countries">
        {filteredCountries.length > 0 ? (
          filteredCountries.map((country, index) => (
            <Cards
              key={index}
              theme={theme}
              countryData={country}
              useClicker={onClicker}
            />
          ))
        ) : (
          <div>No hay paises para mostrar</div>
        )}
      </div>
    </div>
  );
};
