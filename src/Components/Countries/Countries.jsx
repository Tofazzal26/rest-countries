import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "../Countries/Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountry, setVisitedCountry] = useState([]);
  const [countryFlags, setCountryFlags] = useState([]);

  const handleVisitedFlags = (flags) => {
    const newFlags = [...countryFlags, flags];
    setCountryFlags(newFlags);
  };

  const handleVisitedCountry = (country) => {
    const newCountryList = [...visitedCountry, country];
    setVisitedCountry(newCountryList);
  };

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div>
      <h2>Country List: {visitedCountry.length}</h2>
      {visitedCountry.map((visited) => (
        <li key={visited.cca3}>{visited.name.common}</li>
      ))}
      {countryFlags.map((flags, ids) => (
        <img style={{ height: "100px" }} src={flags} key={ids} />
      ))}
      <div className="box-container">
        {countries.map((countries) => (
          <Country
            countries={countries}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlags={handleVisitedFlags}
            key={countries.cca3}
          />
        ))}
      </div>
    </div>
  );
};

export default Countries;
