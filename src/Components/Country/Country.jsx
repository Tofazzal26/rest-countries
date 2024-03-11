import { useState } from "react";
import "../Country/Country.css";

const Country = ({ countries }) => {
  console.log(countries);
  const { name, flags, population, area, cca3 } = countries;

  const [visited, setVisited] = useState(false);

  const handleClick = () => {
    setVisited(!visited);
  };

  return (
    <div className="box">
      <h2>Name: {name.common}</h2>
      <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p>Code: {cca3}</p>
      <p>{visited ? "Visited this place" : "I am going this place"}</p>
      <button onClick={handleClick}>{visited ? "Visited" : "Going"}</button>
    </div>
  );
};

export default Country;
