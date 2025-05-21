// LocationContext.js
import React, { createContext, useState, useEffect } from 'react';

export const LocationContext = createContext();

const API_KEY = 'ba57eddf88d642c1a76dafe7ef68b6dd';

export const LocationProvider = ({ children }) => {
  const [locationData, setLocationData] = useState({
    country: 'Egypt',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getLocationInfo = async (latitude, longitude) => {
    try {

      const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=${API_KEY}&language=en`;
      const response = await fetch(url);
      const data = await response.json();

      if (data.status.code === 200 && data.results.length > 0) {
        const components = data.results[0].components;
        console.log('🚀 ~ components:', components)
        setLocationData({
          country: components.country || 'Egypt',
          city: components.city || '',
          state: components.state || '',
        });
      } else {
        setError('Failed to get location from the service');
      }
    } catch (err) {
      setError('Network error or failed request');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        getLocationInfo(position.coords.latitude, position.coords.longitude);
      },
      () => {
        setError('Permission to access location was denied');
        setLoading(false);
      }
    );
  }, []);

  return (
    <LocationContext.Provider
      value={{ locationObj: { locationData, loading, error } }}
    >
      {children}
    </LocationContext.Provider>
  );
};
