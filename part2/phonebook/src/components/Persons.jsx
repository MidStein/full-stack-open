import Person from "./Person";

const Persons = ({ 
  persons, 
  filteredPersons,
  newFilterName,
  handleDelete
}) => {
  return (
    <ul>
      {newFilterName ? (
        filteredPersons.map((person) => (
          <Person key={person.name} person={person} handleDelete={handleDelete} />
        ))
      ) : (
        persons.map((person) => (
          <Person key={person.name} person={person} handleDelete={handleDelete} />
        ))
      )}
    </ul>
  );
}

export default Persons;

