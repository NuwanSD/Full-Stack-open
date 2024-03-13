import { useEffect, useState } from "react";
import personService from "./services/persons";
import Person from "./components/Person";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState("");

  const [newNumber, setNewNumber] = useState("");

  const [search, setSearch] = useState("");

  const [message, setMessage] = useState(null);

  useEffect(() => {
    personService.getAll().then((intialPerons) => {
      setPersons(intialPerons);
    });
  }, []);

  const addPerson = (event) => {
    event.preventDefault();
    if (!newName.trim()) {
      //Prevent adding the person with empty name
      return;
    }

    //create a new id for new object
    const lastIndex = [persons.length - 1];
    const newID = persons[lastIndex].id;
    //console.log(newID);

    const newPerson = {
      name: newName,
      number: newNumber,
      id: newID + 1,
    };

    const nameExists = persons.some((person) => person.name === newName);
    const numberExists = persons.some((person) => person.number === newNumber);

    if (nameExists && numberExists) {
      window.alert(`${newName} & ${newNumber} is already added to phonebook`);
    } else {
      personService.create(newPerson).then((returnedPerson) => {
        setPersons([...persons, returnedPerson]);
      });
    }

    setMessage(`Added ${newPerson.name}`);
    setTimeout(() => {
      setMessage(null);
    }, 5000);
    setNewName("");
    setNewNumber("");
  };

  const handlePersonChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(search.toLowerCase())
  );

  const deletePerson = (id, name) => {
    //const url = `http://localhost:3001/persons/${id}`;

    const confirm = window.confirm(`Delete ${name}?`);

    if (confirm) {
      personService
        .remove(id)
        .then(() => {
          setPersons(persons.filter((person) => person.id !== id));
          setMessage(`Deleted ${name}`);
        })
        .catch((error) => {
          console.log(error.message);
          setMessage(`Unsuccessful, please try again`);
        });

      //setMessage(`Deleted ${name}`);
      setTimeout(() => {
        setMessage(null);
      }, 5000);
    }
  };

  //need to build this logic
  const updatePerson = () => {};

  return (
    <div>
      <h2>Phonebook</h2>

      <Notification message={message} />

      <Filter
        search={search}
        handleSearchChange={handleSearchChange}
        filteredPersons={filteredPersons}
      />

      <h2>Add a new</h2>

      <PersonForm
        newName={newName}
        newNumber={newNumber}
        addPerson={addPerson}
        handleNumberChange={handleNumberChange}
        handlePersonChange={handlePersonChange}
      />

      <h2>Numbers</h2>

      <Person
        persons={persons}
        deletePerson={deletePerson}
        updatePerson={updatePerson}
      />
    </div>
  );
};

export default App;
