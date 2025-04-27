import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import SplashScreen from './components/splash_screen/splash';
import Cookies from 'js-cookie';
import './global.scss';

import { PreLoading } from './utils/components';

const images = [
  'images/hero-img.webp',
  'images/hero-text.webp',
  '/icons/chars/s.webp',
  '/icons/chars/c.webp',
  '/icons/chars/h.webp',
  '/icons/chars/o.webp',
  '/icons/chars/o.webp',
  '/icons/chars/l.webp',
  '/icons/chars/a.webp',
];

function App() {
  const [loading, setLoading] = useState(true);
  const [splash, setSplash] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const checkImagesLoaded = () => {
    const promises = images.map(
      (src) =>
        new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = () => resolve();
          img.onerror = () => reject(new Error(`Image failed to load: ${src}`));
        })
    );

    const timeout = new Promise((resolve) => setTimeout(resolve, 3000));

    return Promise.race([
      Promise.all(promises).then(() => setImagesLoaded(true)),
      timeout.then(() => setImagesLoaded(true)),
    ]);
  };

  useEffect(() => {
    const visitedBefore = Cookies.get('visitedBefore');

    const loadSplash = async () => {
      await checkImagesLoaded();

      if (visitedBefore) {
        setSplash(false);
      } else {
        const timer = setTimeout(() => {
          setSplash(false);
          Cookies.set('visitedBefore', 'true', { expires: 30 });
        }, 3500);

        // Cleanup timeout when the component is unmounted
        return () => clearTimeout(timer);
      }
    };

    loadSplash();
  }, []); // [] ensures the effect runs once when the component mounts

  useEffect(() => {
    setLoading(false);
  }, []); // This will run only once when the component mounts

  if (loading || !imagesLoaded) {
    return <PreLoading />;
  }

  if (splash) {
    return <SplashScreen />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
