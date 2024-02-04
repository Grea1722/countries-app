import React from "react";

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
}) => {
  const lang = Object.keys(languages);
  const curren = Object.keys(currency);
  return (
    <div className="detailed">
      <div className="backbtn">
        <button>← Back</button>
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
              {" "}
              <h4>
                Top Level Domain: <p>{topdomain}</p>
              </h4>
              <h4>
                Currencies:{" "}
                {curren.map((curr, index) => (
                  <p key={index}>{curr},</p>
                ))}
              </h4>
              <h4>
                Languages:{" "}
                {lang.map((lenguage, index) => (
                  <p key={index}>{lenguage},</p>
                ))}
              </h4>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
};
