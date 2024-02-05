import React, { useContext } from "react";
import CountriesContext from "./providers/CountryProvider";

export const DetailedCard = ({
  src,
  common,
  official,
  population,
  region,
  subregion,
  capital,
  topdomain,
  languages,
  currency,
  borders,
  theme,
}) => {
  const { handleClearCountry } = useContext(CountriesContext);

  const lang = Object.keys(languages);
  const curren = Object.keys(currency);

  console.log(borders);
  return (
    <div className="detailed">
      <div className={`backbtn ${theme}`}>
        <button onClick={handleClearCountry}>← Back</button>
      </div>
      <div className="detailedContent">
        <section className="detailedImg">
          <img src={src.png} alt={src.alt} />
        </section>
        <section className="infoDetailed">
          <h3>{common}</h3>
          <div className="columnas">
            <section>
              <h4>
                Native Name: <p>{official}</p>
              </h4>
              <h4>
                Population: <p>{population}</p>
              </h4>
              <h4>
                Region: <p>{region}</p>
              </h4>
              <h4>
                Sub Region: <p>{subregion}</p>
              </h4>
              <h4>
                Capital: <p>{capital}</p>
              </h4>
            </section>

            <section>
              <h4>
                Top Level Domain: <p>{topdomain}</p>
              </h4>
              <h4>
                Currencies:{" "}
                {curren.map((curr, index) =>
                  index < curren.length - 1 ? (
                    <p key={index}>{curr},</p>
                  ) : (
                    <p key={index}>{curr}.</p>
                  )
                )}
              </h4>
              <h4>
                Languages:{" "}
                {lang.map((lenguage, index) =>
                  index < lang.length - 1 ? (
                    <p key={index}>{lenguage},</p>
                  ) : (
                    <p key={index}>{lenguage}.</p>
                  )
                )}
              </h4>
            </section>
          </div>
          {borders && (
            <h4>
              Borders:{" "}
              {borders.map((border, index) => (
                <div className={`border ${theme}`}>{border}</div>
              ))}
            </h4>
          )}
        </section>
      </div>
    </div>
  );
};
