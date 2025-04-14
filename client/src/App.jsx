import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import SplashScreen from './components/splash_screen/splash';
import Cookies from 'js-cookie'; // Import js-cookie
import './global.scss';
import { PreLoading } from './utils/components';

function App() {
  const [loading, setLoading] = useState(true);
  const [splash, setSplash] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(false); // Adding a state for image loading

  const images = [
    'https://i.imgur.com/zw0pU6l.jpg',
    'https://i.imgur.com/jjoLhfT.jpg',
    'https://i.imgur.com/eOhaVyO.jpg',
    'https://i.imgur.com/b9J0Pd3.jpg',
    './public/icons/s.png',
    './public/icons/c.png',
    './public/icons/h.png',
    './public/icons/o.png',
    './public/icons/o.png',
    './public/icons/l.png',
    './public/icons/a.png',
  ];

  const checkImagesLoaded = () => {
    const promises = images.map(
      (src) =>
        new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = () => resolve();
          img.onerror = () => reject();
        })
    );
    Promise.all(promises)
      .then(() => {
        setImagesLoaded(true);
      })
      .catch((err) => setImagesLoaded(true));
  };

  useEffect(() => {
    checkImagesLoaded();

    const visitedBefore = Cookies.get('visitedBefore');

    if (visitedBefore) {
      setSplash(false);
    } else {
      const timer = setTimeout(() => {
        setSplash(false);
        Cookies.set('visitedBefore', 'true', { expires: 30 });
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

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
