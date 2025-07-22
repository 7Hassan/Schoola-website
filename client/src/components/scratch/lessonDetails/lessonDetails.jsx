import React from 'react';
import { useParams } from 'react-router-dom';

const LessonDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Details for Lesson ID: {id}</h1>
    </div>
  );
};

export default LessonDetails;
