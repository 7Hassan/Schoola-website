import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/scratch/header/header';
// import '../styles/scratch.scss';

const Scratch = () => {
  return (
    <div className="scratch">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Scratch;
