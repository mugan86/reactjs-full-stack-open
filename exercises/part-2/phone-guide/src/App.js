import React, { useEffect, useState } from "react";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Title from "./components/Title";
import axios from "axios";
const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setPhone] = useState("");
  const [newSearch, setSearch] = useState("");
  const hooks = () => {
    axios.get('http://localhost:3002/persons').then(
      (response) => setPersons(response.data)
    );
  };
  useEffect(hooks, []);
  // Aquí almacenamos los cambios
  const handleNameChange = (event) => setNewName(event.target.value);
  const handlePhoneChange = (event) => setPhone(event.target.value);
  const resetFormValues = () => {
    setNewName(""); // Resetear el nombre
    setPhone("");
  };
  const addPerson = (event) => {
    event.preventDefault();
    if (newName === "" || newPhone === "") {
      alert("Please, add all data before send to save!");
      return;
    }
    if (persons.filter((person) => person.name === newName).length) {
      alert(`${newName} is already added to phonebook`);
      resetFormValues();
      return;
    }

    const personObject = {
      name: newName,
      id: persons.length + 1,
      number: newPhone,
    };
    setPersons(persons.concat(personObject));
    resetFormValues();
  };

  const filterPeople = (event) => {
    setSearch(event.target.value);
  };

  // Filtramos en base a la búsqueda
  const personsToShow =
    newSearch === ""
      ? persons
      : persons.filter((person) => {
          return (
            person.name.toLowerCase().indexOf(newSearch.toLowerCase()) > -1
          );
        });

  return (
    <div>
      <Title title={"Phonebook"} />
      <Filter value={newSearch} onChange={filterPeople} />
      <Title title={"Add new contact"} />
      <PersonForm
        onSubmit={addPerson}
        valueName={newName}
        changeName={handleNameChange}
        valuePhone={newPhone}
        changePhone={handlePhoneChange}
      />
      <Title title={"Numbers List"} />
      <Persons list={personsToShow} />
    </div>
  );
};

export default App;
