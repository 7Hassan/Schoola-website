import React from 'react';
import { Link } from 'react-router-dom';

const ScratchLessons = () => {
  return (
    <div>
      <h1>Scratch Lessons Page</h1>
      <ul>
        <li>
          <Link to="/scratch/lessons/1">Lesson 1</Link>
        </li>
        <li>
          <Link to="/scratch/lessons/2">Lesson 2</Link>
        </li>
      </ul>
    </div>
  );
};

export default ScratchLessons;
