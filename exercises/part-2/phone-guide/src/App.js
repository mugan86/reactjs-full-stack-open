import React, { useState } from "react";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Title from "./components/Title";
const App = () => {
  const [persons, setPersons] = useState([
    { id: 1, name: "Arto Hellas", number: "040-123456" },
    { id: 2, name: "Ada Lovelace", number: "39-44-5323523" },
    { id: 3, name: "Dan Abramov", number: "12-43-234345" },
    { id: 4, name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState("");
  const [newPhone, setPhone] = useState("");
  const [newSearch, setSearch] = useState("");
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
