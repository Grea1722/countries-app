import React from "react";

export const Cards = ({ countryData, useClicker }) => {
  const {
    region,
    name,
    capital,
    flags,
    population,
    subregion,
    tld,
    borders,
    languages,
    currencies,
  } = countryData;
  const { common, official } = name;
  const { png: flag, alt: altFlag } = flags;

  const detailedInfo = {
    flags,
    name,
    official,
    population,
    region,
    subregion,
    capital,
    tld,
    languages,
    borders,
    currencies,
  };

  return (
    <div className="cards" onClick={() => useClicker(detailedInfo)}>
      <img src={flag} alt={altFlag} />
      <section>
        <h3>{common}</h3>
        <h4>
          Population: <p>{population}</p>
        </h4>
        <h4>
          Region: <p>{region}</p>
        </h4>
        <h4>
          Capital: <p>{}</p>
        </h4>
      </section>
    </div>
  );
};
