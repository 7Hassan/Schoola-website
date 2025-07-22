import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'antd/dist/reset.css';
import './global.scss';

import SplashScreen from './components/splash_screen/splash';
import { PreLoading } from './utils/components';
import { useSplashLoader } from './hooks/useSplashLoader';
import RoutesConfig from './router/RoutesConfig';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { loading, splash } = useSplashLoader();

  if (loading) return <PreLoading />;
  if (splash) return <SplashScreen />;

  return (
    <Router>
      <RoutesConfig />
      <ToastContainer />
    </Router>
  );
}

export default App;
