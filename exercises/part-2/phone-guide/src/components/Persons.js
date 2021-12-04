import Person from "./Person";
const Persons = ({ list }) => (
  <ul>
    {list.map((person) => (
      <Person key={person.id} person={person} />
    ))}
  </ul>
);

export default Persons;
