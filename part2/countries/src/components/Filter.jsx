import React, { useState } from "react";

const Filter = ({ handleSearchChange, search, filteredCountries }) => {
  const count = filteredCountries.length;

  const [showAll, setShowAll] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleShowDetails = (country) => {
    setSelectedCountry(country);
  };

  const Show = ({ country }) => {
    if (showAll && selectedCountry === country) {
      return (
        <div>
          <h2>{country.name.common}</h2>
          <div>
            <p>Capital: {country.capital}</p>
            <p>Area: {country.area}</p>
            <h3>Languages:</h3>
            <ul>
              {Object.values(country.languages).map((lang, index) => (
                <li key={index}>{lang}</li>
              ))}
            </ul>
            <img src={country.flags.png} alt="flag" border="1px solid black" />
          </div>
        </div>
      );
    }
    return null;
  };

  const Result = () => {
    if (count === 1) {
      return (
        <div>
          {filteredCountries.map((country) => (
            <div key={country.cca2}>
              <h2>{country.name.common}</h2>
              <div>
                <p>Capital: {country.capital}</p>
                <p>Area: {country.area}</p>
                <h3>Languages:</h3>
                <ul>
                  {Object.values(country.languages).map((lang, index) => (
                    <li key={index}>{lang}</li>
                  ))}
                </ul>
                <img
                  src={country.flags.png}
                  alt="flag"
                  border="1px solid black"
                />
              </div>
            </div>
          ))}
        </div>
      );
    } else if (count === 2 || count <= 10) {
      return (
        <div>
          {filteredCountries.map((country) => (
            <div key={country.cca2}>
              {country.name.common}{" "}
              <button onClick={() => handleShowDetails(country)}>show</button>
              <Show country={country} />
            </div>
          ))}
        </div>
      );
    } else {
      return <p>Too many matches, specify another filter</p>;
    }
  };

  return (
    <div>
      <p>
        Find countries: <input value={search} onChange={handleSearchChange} />
      </p>
      <div>
        <Result />
      </div>
    </div>
  );
};

export default Filter;
