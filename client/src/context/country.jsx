// context/CountryContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
  const [country, setCountry] = useState('Egypt'); // default fallback
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    axios
      .get('https://ipapi.co/json/')
      .then((response) => {
        const userCountry = response.data.country_name;
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
