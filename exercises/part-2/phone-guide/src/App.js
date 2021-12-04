import React, { useState } from "react";
const Person = ({ person }) => (
  <li>
    {person.name} - Phone: {person.number}{" "}
  </li>
);
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
    if (persons.filter((person) => person.name === newName).length) {
      alert(`${newName} is already added to phonebook`);
      resetFormValues();
      return;
    }
    const personObject = {
      name: newName,
      id: persons.length + 1,
      phone: newPhone,
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
      <h2>Phonebook</h2>
      Name: <input value={newSearch} onChange={filterPeople} />
      <h2>Add New contact</h2>
      <form onSubmit={addPerson}>
        <div>
          Name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          Phone: <input value={newPhone} onChange={handlePhoneChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {personsToShow.map((person) => (
          <Person key={person.id} person={person} />
        ))}
      </ul>
    </div>
  );
};

export default App;
