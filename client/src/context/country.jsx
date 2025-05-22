// context/CountryContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
  const [country, setCountry] = useState('Egypt'); // default fallback
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        'https://apiip.net/api/check?accessKey=b5f272ca-cd6a-43ab-b718-0d3f435ab6f1'
      )
      .then((response) => {
        const userCountry = response.data.countryName;
        setCountry(userCountry || 'Egypt');
      })
      .catch((error) => {
        console.error('Error fetching country:', error);
        setCountry('Egypt');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <CountryContext.Provider value={{ country, loading }}>
      {children}
    </CountryContext.Provider>
  );
};
