import { Outlet } from 'react-router-dom';
import './course.scss';
import SideBar from '../components/courseSec/SideBar/SideBar';

const Course = () => {
  return (
    <div className="course">
      <div className="course-container">
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
};

export default Course;
