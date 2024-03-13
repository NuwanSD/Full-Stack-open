const Filter = ({ search, handleSearchChange, filteredPersons }) => {
  return (
    <>
      <div>
        Filter shown with <input value={search} onChange={handleSearchChange} />
      </div>
      <div>
        {search.trim() && (
          <div>
            {filteredPersons.map((person) => (
              <p key={person.id}>
                {person.name} {person.number}
              </p>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Filter;
