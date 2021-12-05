import React, { useEffect, useState } from 'react';
import axios from "axios";
function App() {
  const [countries,setCountries] = useState([]);
  const [search,setSearch] = useState('');
  
  const hooks = () => {
    axios.get('https://restcountries.com/v3.1/all').then(
      (response) => setCountries(response.data)
    );
  }
  useEffect(hooks, []);

  const searchData = (event) => {
    setSearch(event.target.value);
  }
  return (
    <div>
      <span>Find Countries: </span>
      <input value={search} onChange={searchData}/>
    </div>
  );
}

export default App;
