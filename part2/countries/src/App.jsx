import React, { useEffect, useState } from "react";
import axios from "axios";
import Filter from "./components/Filter";

const App = () => {
  const [countries, setCountries] = useState([]);

  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((res) => setCountries(res.data));
  }, []);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Countires</h2>
      <Filter
        search={search}
        handleSearchChange={handleSearchChange}
        filteredCountries={filteredCountries}
      />
      {/* <div>
        {countries.map((country, index) => (
          <p key={index}>{country.name.common}</p>
        ))}
      </div> */}
    </div>
  );
};

export default App;
