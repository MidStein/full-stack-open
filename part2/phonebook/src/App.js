import { useEffect, useState } from "react";
import personService from "./services/persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filteredPersons, setFilteredPersons] = useState([]);
  const [newFilterName, setNewFilterName] = useState('');
  const [message, setMessage] = useState(null);
  const [successful, setSuccessful] = useState(false);

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  }
  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!persons.some((person) => (person.name === newName))) {
      console.log(persons);
      const personObject = {
        name: newName,
        number: newNumber
      };
      personService
        .create(personObject)
        .then((returnedNote) => {
          setPersons(persons.concat(returnedNote));
          setMessage(`Added ${returnedNote.name}`);
          setSuccessful(true);
          setTimeout(() => {setMessage(null)}, 5000);
        });
    } else {
      if (window.confirm(`${newName} is already in the phonebook, replace the old number with a new one?`)) {
        const person = persons.find((person) => (person.name === newName));
        const changedPerson = {
          ...person,
          number: newNumber
        };
        personService
          .update(person.id, changedPerson)
          .then((updatedObj) => {
            setPersons(persons.map((person) => (
              person.id === changedPerson.id ? updatedObj : person
            )));
            setMessage(`Changed number of ${updatedObj.name}`);
            setSuccessful(true);
            setTimeout(() => {setMessage(null)}, 5000);
          })
          .catch((error) => {
            setMessage(
              `Information of ${person.name} has already been removed from server`
            );
            setSuccessful(false);
            setTimeout(() => {setMessage(null)}, 5000);

            setPersons(persons.filter((person) => (person.id !== changedPerson.id)));
          })
      }
    }
    setNewName('');
    setNewNumber('');
  }

  const handleChange = (e) => {
    setNewFilterName(e.target.value);

    if (e.target.value !== '') {
      setFilteredPersons(persons.filter((person) => (
        person.name.toLowerCase().includes(e.target.value)
      )));
    } else {
      setFilteredPersons(persons);
    }
  }

  const handleDelete = (id, name) => {
    if (window.confirm(`Delete ${name} ?`)) {
      personService.deleteWithId(id)
    }
    setPersons(persons.filter((person) => (person.id !== id)));
  }

  useEffect(() => {
    personService
      .getAll()
      .then((initialPersons) => {
        setPersons(initialPersons);
      });
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>

      <Notification message={message} successful={successful}/>

      <Filter
        newFilterName={newFilterName}
        handleChange={handleChange}
      />

      <h3>Add a new</h3>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        handleSubmit={handleSubmit}
      />

      <h3>Numbers</h3>
      <Persons 
        persons={persons}
        filteredPersons={filteredPersons}
        newFilterName={newFilterName}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
