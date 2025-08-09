import { Link, useParams } from 'react-router-dom';
import './sideBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleCheck,
  faClose,
  faLock,
} from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { Progress } from 'antd';

const lessonsData = [
  { id: 1, title: 'مقدمة', status: 'completed' },
  { id: 2, title: 'الدرس الأول', status: 'active' },
  { id: 3, title: 'الدرس الثاني', status: 'locked' },
];

const Header = () => {
  return (
    <div className="header row">
      <div className="progress">
        <Progress
          percent={30}
          type="circle"
          width={60}
          strokeWidth={10}
          trailColor="#E3EDFF"
        />
      </div>
      <p className="course-name">كورس اسكراتش المستوي الاول</p>
      <div className="close row">
        <FontAwesomeIcon icon={faClose} />
      </div>
    </div>
  );
};

const Lesson = ({ lesson }) => {
  const { courseId, lessonId } = useParams();
  const isActive = lessonId === lesson.id.toString();
  const { status } = lesson;
  return (
    <li className={isActive ? 'active' : ''}>
      <div className={`icon ${status}`}>
        {status == 'active' && <FontAwesomeIcon icon={faCircle} />}
        {status == 'completed' && <FontAwesomeIcon icon={faCircleCheck} />}
        {status == 'locked' && <FontAwesomeIcon icon={faLock} />}
      </div>
      <Link to={`/courses/${courseId}/lesson/${lesson.id}`}>
        <span>{lesson.title}</span>
      </Link>
    </li>
  );
};

const Lessons = () => {
  return (
    <ul>
      {lessonsData.map((lesson) => (
        <Lesson key={lesson.id} lesson={lesson} />
      ))}
    </ul>
  );
};

const SideBar = () => {
  return (
    <div className="sidebar">
      <Header />
      <div className="sidebar-container">
        <Lessons />
      </div>
    </div>
  );
};

export default SideBar;
