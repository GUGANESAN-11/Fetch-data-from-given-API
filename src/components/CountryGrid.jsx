// src/components/CountryGrid.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./CountryGrid.css"

const CountryGrid = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // Fetch country data when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://restcountries.com/v3.1/all');
      setCountries(response.data);
    } catch (error) {
      console.error('Error fetching country data:', error);
    }
  };
  return (
    <div className="country-grid"  >
      {countries.map(country => (
        <div key={country.cca3} className="country-card">
          <div className="card-grid">
          <img
            src={country.flags.png}
            alt={`Flag of ${country.name.common}`}
            className="country-flag"
          />
          <h3>{country.name.common}</h3>
          <p>Population : <span style={{fontWeight:"normal"}}>{country.population}</span></p>
          <p>{"Region : "+country.region}</p>
          <p>{"capital : "+country.capital}</p>
        </div>
      </div>
      ))}
    </div>  
  );
};

export default CountryGrid;
