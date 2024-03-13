const Person = ({ persons, deletePerson, updatePerson }) => {
  return (
    <div>
      {persons.map((person) => (
        <p key={person.id}>
          {person.name} {person.number}{" "}
          <button onClick={() => deletePerson(person.id, person.name)}>
            delete
          </button>{" "}
          <button onClick={() => updatePerson(person.id, person.name)}>
            update
          </button>
        </p>
      ))}
    </div>
  );
};

export default Person;
