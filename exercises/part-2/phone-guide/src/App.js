import React, { useState } from "react";
const Person = ({ person }) => (
  <li>
    {person.name} - Phone: {person.phone}{" "}
  </li>
);
const App = () => {
  const [persons, setPersons] = useState([
    { id: 1, name: "Arto Hellas", phone: "292029222" },
  ]);
  const [newName, setNewName] = useState("");
  const [newPhone, setPhone] = useState("");
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
  return (
    <div>
      <h2>Phonebook</h2>
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
        {persons.map((person) => (
          <Person key={person.id} person={person} />
        ))}
      </ul>
    </div>
  );
};

export default App;
