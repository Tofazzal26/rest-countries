import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "../Countries/Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div>
      <div className="box-container">
        {countries.map((countries) => (
          <Country countries={countries} key={countries.cca3} />
        ))}
      </div>
    </div>
  );
};

export default Countries;
