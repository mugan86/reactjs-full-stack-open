import React, { useEffect, useState } from "react";
import axios from "axios";
import Result from "./Result";
import Search from "./Search";
function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [individualSelect, setIndividualSelect] = useState("");
  // Carga de lista de 
  const hooks = () => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => setCountries(response.data));
  };
  useEffect(hooks, []);

  const searchData = (event) => {
    setSearch(event.target.value);
    setIndividualSelect('');
  };

  const handleIndividualSelection = (select) => {
    setIndividualSelect(select);
  }

  // Filtramos en base a la búsqueda
  const countriesToShow =
    search === "" // Todos
      ? countries
      : (individualSelect !== '') ? // Seleccionando uno concreto
      countries.filter((country) => {
        return (
          country.name.common.toLowerCase() === individualSelect.toLowerCase()
        );
      }): // En base a la búsqueda
      countries.filter((country) => {
        return (
          country.name.common.toLowerCase().indexOf(search.toLowerCase()) > -1
        );
      });

  return (
    <div>
      <Search inputValue={search} onChange={searchData} />
      <Result onClick={handleIndividualSelection} list={countriesToShow} search={search} />
    </div>
  );
}

export default App;
