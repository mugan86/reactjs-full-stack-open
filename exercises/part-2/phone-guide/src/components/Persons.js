import Person from "./Person";
const Persons = ({ list, deleteItem }) => (
  <ul>
    {list.map((person) => (
      <Person key={person.id} person={person} deleteItem={deleteItem}/> 
    ))}
  </ul>
);

export default Persons;
