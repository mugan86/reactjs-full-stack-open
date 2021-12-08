import React, { useEffect, useState } from "react";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Title from "./components/Title";
import personsService from "./services/persons";
const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setPhone] = useState("");
  const [newSearch, setSearch] = useState("");
  const hooks = () => {
    personsService.getAll().then((response) => setPersons(response.data));
  };
  useEffect(hooks, []);
  // Aquí almacenamos los cambios
  const handleNameChange = (event) => setNewName(event.target.value);
  const handlePhoneChange = (event) => setPhone(event.target.value);
  const resetFormValues = () => {
    setNewName(""); // Resetear el nombre
    setPhone("");
  };

  const updatePerson = (personNewData) => {
    personsService.update(personNewData.id, personNewData).then((
      response => console.log(response.status)
    ))
  }
  const addPerson = (event) => {
    event.preventDefault();
    if (newName === "" || newPhone === "") {
      alert("Please, add all data before send to save!");
      return;
    }
    const personSelect = persons.filter((person) => person.name === newName)
    console.log(personSelect);
    if (personSelect.length) {
      const answer = window.confirm(`${newName} is already added to phonebook. Replace old number with new number?`);
      if (answer) {
        personSelect[0].number = newPhone;
        updatePerson(personSelect[0]);
      }
      resetFormValues();
      return;
    }

    const personObject = {
      name: newName,
      number: newPhone,
      id: persons.length > 0 ? persons[persons.length - 1].id + 1 : 1,
    };
   
    personsService.create(personObject).then((response) => {
      setPersons(persons.concat(response.data));
      resetFormValues();
    });
    
  };

  const filterPeople = (event) => {
    setSearch(event.target.value);
  };

  const deletePerson = (id, name) => {
    const answer = window.confirm(`Delete ${name}?`);
    if (answer) {
      personsService.delete(id).then((
        (response) => {
          console.log(response.status)
          personsService.getAll().then((response) => setPersons(response.data));
        }
      ))
    }
    
  }

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
      <Persons list={personsToShow} deleteItem={deletePerson} />
    </div>
  );
};

export default App;
