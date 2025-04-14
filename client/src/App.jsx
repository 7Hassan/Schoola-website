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

    // Timeout: بعد 3 ثواني نكمل حتى لو الصور ما خلصتش
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
        const timer = setTimeout(() => {
          setSplash(false);
          Cookies.set('visitedBefore', 'true', { expires: 30 });
        }, 3500);
        return () => clearTimeout(timer);
      }
    };

    loadSplash();
  }, []);

  // مبنستناش window.load
  useEffect(() => {
    setLoading(false);
  }, []);

  // مرحلة التحميل
  if (loading || !imagesLoaded) {
    return <PreLoading />;
  }

  // شاشة البداية
  if (splash) {
    return <SplashScreen />;
  }

  // التطبيق الأساسي
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
