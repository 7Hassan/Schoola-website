import React, { useEffect, useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import SplashScreen from './components/splash_screen/splash';
import Cookies from 'js-cookie';
import './global.scss';

import { PreLoading } from './utils/components';

function App() {
  const [loading, setLoading] = useState(true);
  const [splash, setSplash] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const images = [
    '/images/hero-img.png',
    'https://i.imgur.com/b9J0Pd3.jpg',
    '/icons/s.png',
    '/icons/c.png',
    '/icons/h.png',
    '/icons/o.png',
    '/icons/o.png',
    '/icons/l.png',
    '/icons/a.png',
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

    const timeout = new Promise((resolve) => setTimeout(() => resolve(), 3000));

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
        const timer = setTimeout(
          () => {
            setSplash(false);

            Cookies.set('visitedBefore', 'true', {
              expires: 30,
            });
          },

          3500
        );
        return () => clearTimeout(timer);
      }
    };

    loadSplash();
  }, []);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading || !imagesLoaded) {
    return <PreLoading />;
  }

  if (splash) {
    return <SplashScreen />;
  }

  return (
    <Router>
      {' '}
      <Routes>
        {' '}
        <Route path="/" element={<Home />} />{' '}
      </Routes>{' '}
    </Router>
  );
}

export default App;
