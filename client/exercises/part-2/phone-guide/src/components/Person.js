const Person = ({ person, deleteItem }) => (
  <li>
    {person.name} - Phone: {person.number}{" "} <button onClick={() => deleteItem(person.id, person.name)}> Delete</button>
  </li>
);

export default Person;
