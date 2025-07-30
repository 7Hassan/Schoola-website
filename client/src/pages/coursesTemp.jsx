import { Outlet } from 'react-router-dom';
import Header from '../components/coursesSecs/header/header';
import './coursesTemp.scss';
const CoursesTemp = () => {
  return (
    <div className="courses-temp">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default CoursesTemp;
