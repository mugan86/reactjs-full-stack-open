const Item = ({ country }) => {
  return (<div>
    <h2>{country.name.common}</h2>
    <p>Capital: {country.capital}</p>
    <p>Population: {country.population}</p>
    <h3>Languages</h3>
    <ul>
      {Object.keys(country.languages).map((key) => (
        <li key={key}>{country.languages[key]}</li>
      ))}
    </ul>
    <img
      width="20%"
      height="20%"
      src={country.flags.png}
      alt={country.name.common}
    />
  </div>)
};

export default Item;
