import React, { useContext, useEffect, useState } from "react";
import { Cards } from "./Cards";
import { Form } from "./Form";
import countriesContext from "./providers/CountryProvider";

export const Countries = () => {
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
    if (searchCount) {
      return country.name.common
        .toLowerCase()
        .includes(searchCount.toLowerCase());
    }

    if (selectedCont) {
      return country.region === selectedCont;
    }
    return true;
  });

  const onChange = (e) => {
    setSearchCount(e.target.value);
    console.log(e);
  };

  const onSelect = (e) => {
    setSelectedCont(e.target.value);
  };

  const onClicker = (detailedInfo) => {
    handleSetCountry(detailedInfo);
  };

  return (
    <div className="countries-main">
      <Form onChange={onChange} onSelect={onSelect} />
      <div className="countries">
        {" "}
        {filteredCountries.map((country, index) => (
          <Cards key={index} countryData={country} useClicker={onClicker} />
        ))}
      </div>
    </div>
  );
};
