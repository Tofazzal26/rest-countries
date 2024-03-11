import "../Country/Country.css";

const Country = ({ countries }) => {
  console.log(countries);
  const { name, flags } = countries;
  return (
    <div className="box">
      <h2>Name: {name.common}</h2>
      <img src={flags.png} alt="" />
    </div>
  );
};

export default Country;
