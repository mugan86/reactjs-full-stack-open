const Items = ({ list, onClick }) => {
  return (
    <ul>
      {list.map((country) => (
        <li key={country.cca2}>
          {country.name.common}
          &nbsp;&nbsp;<button 
          onClick={() => onClick(country.name.common)}>Show</button>
        </li>
      ))}
    </ul>
  );
};

export default Items;
