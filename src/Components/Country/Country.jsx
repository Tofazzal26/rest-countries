import { useState } from "react";
import "../Country/Country.css";

const Country = ({ countries, handleVisitedCountry, handleVisitedFlags }) => {
  const { name, flags, population, area, cca3 } = countries;

  const [visited, setVisited] = useState(false);

  const handleClick = () => {
    setVisited(!visited);
  };
  return (
    <div className={`box ${visited ? "visited" : "no-visited"}`}>
      <h2 style={{ color: visited && "purple" }}>Name: {name.common}</h2>
      <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p>Code: {cca3}</p>
      <p>{visited ? "Visited this place" : "I am going this place"}</p>
      <button onClick={() => handleVisitedFlags(countries.flags.png)}>
        Mark Flags
      </button>
      <br />
      <br />
      <button onClick={() => handleVisitedCountry(countries)}>
        Mark Visited
      </button>
      <br />
      <br />
      <button onClick={handleClick}>{visited ? "Visited" : "Going"}</button>
    </div>
  );
};

export default Country;
