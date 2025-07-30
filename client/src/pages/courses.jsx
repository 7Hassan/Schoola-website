import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../components/coursesSecs/header/header';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // axios.get('/api/courses').then((res) => setCourses(res.data));
  }, []);
  return (
    <div className="courses">
      <h2>الكورسات المتاحة</h2>
      {courses.length === 0 ? (
        <div className="no-courses">
          <p>لا يوجد كورسات متاحة حالياً.</p>
        </div>
      ) : (
        <div className="courses-grid">
          {courses.map((course) => (
            <CourseTemp course={course} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Courses;
