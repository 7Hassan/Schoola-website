import { useTranslation } from 'react-i18next';
import { convertToDirectLink, LazyImage } from '../../utils/eles';

import './students.scss';
import { studentsImages } from '../../utils/data';
import { InfiniteSlider } from '../../utils/components';

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

const Student = ({ data }) => {
  if (!data) return null;
  const directLink = convertToDirectLink(data.imageUrl);

  return (
    <div className="student">
      <LazyImage
        src={directLink}
        alt={data.courseName}
        className={'img-student'}
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

const Students = () => {
  const { t } = useTranslation();
  const btns = t('students.buttons', { returnObjects: true });

  return (
    <div id="students" className="students sec header-sec">
      <Header />
      <section className="student-section">
        <InfiniteSlider list={studentsImages} Item={Student} />
        <div className="btns row">
          {btns.map((item, index) => (
            <a
              href={item.link}
              key={index}
              className={item.class}
              target="_blank"
            >
              <div className="h4">{item.text}</div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Students;
