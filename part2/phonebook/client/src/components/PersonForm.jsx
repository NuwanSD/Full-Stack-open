const PersonForm = ({
  newName,
  newNumber,
  handleNumberChange,
  handlePersonChange,
  addPerson,
}) => {
  return (
    <form onSubmit={addPerson}>
      <div>
        Name: <input value={newName} onChange={handlePersonChange} required />
      </div>
      <br />
      <div>
        Number:{" "}
        <input value={newNumber} onChange={handleNumberChange} required />
      </div>
      <br />
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
