import React from "react";
import CircumIcon from "@klarr-agency/circum-icons-react";

export const Form = ({ onChange, onSelect, theme }) => {
  return (
    <div className={`form ${theme}`}>
      <section className="search">
        <input
          type="text"
          name="search"
          placeholder="Search for a country"
          onChange={onChange}
        />
      </section>
      <select name="region" onChange={onSelect}>
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};
