import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import './i18n';
// import { LocationProvider } from './context/user.jsx';
import { CountryProvider } from './context/country.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <LocationProvider> */}
    <CountryProvider>
      <App />
    </CountryProvider>
    {/* </LocationProvider> */}
  </StrictMode>
);
