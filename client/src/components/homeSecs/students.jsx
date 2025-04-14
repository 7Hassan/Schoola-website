import { useTranslation } from 'react-i18next';
import { convertToDirectLink, InfiniteSlider } from '../../utils/eles';
import { Link } from 'react-router-dom';
import './students.scss';

const studentsImages = [
  { id: 1, imageUrl: 'https://imgur.com/FtSwvVG', courseName: 'Robotics' },
  { id: 2, imageUrl: 'https://imgur.com/HPdjYuF', courseName: 'Robotics' },
  { id: 3, imageUrl: 'https://imgur.com/iVi3F2K', courseName: 'Mobile Apps' },
  { id: 4, imageUrl: 'https://imgur.com/EMmVff4', courseName: 'Mobile Apps' },
  { id: 5, imageUrl: 'https://imgur.com/izrsmyl', courseName: 'Robotics' },
  { id: 6, imageUrl: 'https://imgur.com/ufEWj0S', courseName: 'Robotics' },
  { id: 7, imageUrl: 'https://imgur.com/DwWwf8y', courseName: 'Robotics' },
  { id: 8, imageUrl: 'https://imgur.com/ykk4ZZF', courseName: 'Robotics' },
  { id: 9, imageUrl: 'https://imgur.com/2lNSCPC', courseName: 'Robotics' },
  { id: 10, imageUrl: 'https://imgur.com/te0h6Hp', courseName: 'Robotics' },
  { id: 11, imageUrl: 'https://imgur.com/5djvp9n', courseName: 'Robotics' },
  { id: 12, imageUrl: 'https://imgur.com/P3ZRGWv', courseName: 'Robotics' },
  { id: 13, imageUrl: 'https://imgur.com/8FyOEgQ', courseName: 'Scratch' },
  { id: 14, imageUrl: 'https://imgur.com/ovlCWXg', courseName: 'Scratch' },
  {
    id: 15,
    imageUrl: 'https://imgur.com/4qJU3qN',
    courseName: 'Basics of computer',
  },
  { id: 16, imageUrl: 'https://imgur.com/MIAZpPF', courseName: 'Mobile Apps' },
  { id: 17, imageUrl: 'https://imgur.com/x436HhQ', courseName: 'Mobile Apps' },
  { id: 18, imageUrl: 'https://imgur.com/ETb5hEY', courseName: 'Robotics' },
  { id: 19, imageUrl: 'https://imgur.com/ZcwpN0j', courseName: 'Scratch' },
  { id: 20, imageUrl: 'https://imgur.com/TiNhS08', courseName: 'Robotics' },
  { id: 21, imageUrl: 'https://imgur.com/FtSwvVG', courseName: 'Robotics' },
  { id: 22, imageUrl: 'https://imgur.com/RbiplN6', courseName: 'Robotics' },
  { id: 23, imageUrl: 'https://imgur.com/NaOmCla', courseName: 'Robotics' },
  { id: 24, imageUrl: 'https://imgur.com/iVi3F2K', courseName: 'Mobile Apps' },
  { id: 25, imageUrl: 'https://imgur.com/SK2IDV9', courseName: 'Mobile Apps' },
  { id: 26, imageUrl: 'https://imgur.com/izrsmyl', courseName: 'Robotics' },
  { id: 27, imageUrl: 'https://imgur.com/ufEWj0S', courseName: 'Robotics' },
  { id: 28, imageUrl: 'https://imgur.com/DwWwf8y', courseName: 'Robotics' },
  { id: 29, imageUrl: 'https://imgur.com/ykk4ZZF', courseName: 'Robotics' },
  { id: 30, imageUrl: 'https://imgur.com/2lNSCPC', courseName: 'Robotics' },
  { id: 31, imageUrl: 'https://imgur.com/te0h6Hp', courseName: 'Robotics' },
  { id: 32, imageUrl: 'https://imgur.com/5djvp9n', courseName: 'Robotics' },
  { id: 33, imageUrl: 'https://imgur.com/P3ZRGWv', courseName: 'Robotics' },
  { id: 34, imageUrl: 'https://imgur.com/4qJU3qN', courseName: 'Figma' },
  {
    id: 35,
    imageUrl: 'https://imgur.com/MIAZpPF',
    courseName: 'Basics of computer',
  },
  { id: 36, imageUrl: 'https://imgur.com/ETb5hEY', courseName: 'Robotics' },
  { id: 37, imageUrl: 'https://imgur.com/o3JUWGK', courseName: 'Robotics' },
  {
    id: 40,
    imageUrl: 'https://imgur.com/t07tfNR',
    courseName: 'Minecraft coding',
  },
  { id: 41, imageUrl: 'https://imgur.com/I2vZ5DX', courseName: 'Scratch' },
  { id: 42, imageUrl: 'https://imgur.com/bWKSiX0', courseName: 'Python' },
  { id: 43, imageUrl: 'https://imgur.com/br9Inal', courseName: 'Scratch' },
  { id: 45, imageUrl: 'https://imgur.com/WNJdQkK', courseName: 'Robotics' },
  { id: 46, imageUrl: 'https://imgur.com/UcI3MpH', courseName: 'Robotics' },
  { id: 47, imageUrl: 'https://imgur.com/lULQM5I', courseName: 'Robotics' },
  {
    id: 49,
    imageUrl: 'https://imgur.com/ydClL7e',
    courseName: 'Python',
  },
  {
    id: 50,
    imageUrl: 'https://imgur.com/2VbPDxA',
    courseName: 'Python',
  },
  {
    id: 51,
    imageUrl: 'https://imgur.com/pWvXMxg',
    courseName: 'Python',
  },
  { id: 52, imageUrl: 'https://imgur.com/kqbFRop', courseName: 'Scratch' },
  {
    id: 53,
    imageUrl: 'https://imgur.com/cy8ERJN',
    courseName: 'Minecraft coding',
  },
  {
    id: 54,
    imageUrl: 'https://imgur.com/vhhG5J1',
    courseName: 'Minecraft coding',
  },
  {
    id: 55,
    imageUrl: 'https://imgur.com/WXmFSZ2',
    courseName: 'Minecraft coding',
  },
  {
    id: 56,
    imageUrl: 'https://imgur.com/kfhqKEi',
    courseName: 'C++ Programming',
  },
  {
    id: 57,
    imageUrl: 'https://imgur.com/3h0UHAf',
    courseName: 'C++ Programming',
  },
  {
    id: 58,
    imageUrl: 'https://imgur.com/oNZhgK3',
    courseName: 'C++ Programming',
  },
  {
    id: 59,
    imageUrl: 'https://imgur.com/yTy73yi',
    courseName: 'Minecraft coding',
  },
];

const studentsImagesReversed = [...studentsImages].reverse();

const Student = ({ data }) => {
  if (!data) return null;
  const directLink = convertToDirectLink(data.imageUrl);

  return (
    <div className="student">
      <img
        src={directLink}
        alt="student"
        loading="lazy"
        className="img-student"
      />
      <div className="info">
        <div className="row">
          <div className="row-bar">
            <h5>{data.courseName}</h5>
            <div className="circle"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  const { t } = useTranslation();
  const header = t('students.header', { returnObjects: true });

  return (
    <div className="header">
      <div className="row title">
        <img
          src="/icons/stars.png"
          alt="stars"
          loading="lazy"
          className="right"
        />
        <h3>{header.title}</h3>
        <img
          src="/icons/stars.png"
          alt="stars"
          loading="lazy"
          className="left"
        />
      </div>
      <h4 className="text-light sub-title">{header.subTitle}</h4>
    </div>
  );
};

const Students = () => {
  const { t } = useTranslation();
  const btns = t('students.buttons', { returnObjects: true });

  return (
    <div id="students" className="students sec header-sec">
      <Header />
      <section className="student-section">
        <InfiniteSlider list={studentsImages} Item={Student} />
        <InfiniteSlider
          list={studentsImagesReversed}
          Item={Student}
          reversed={true}
        />
        <div className="btns row">
          {btns.map((item, index) => (
            <Link to={item.link} key={index} className={item.class}>
              <div className="h4">{item.text}</div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Students;
