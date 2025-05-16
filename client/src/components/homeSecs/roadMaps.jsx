import { useTranslation } from 'react-i18next';
import { useState, useCallback, useEffect } from 'react';
import PlanCard from './plan';
import './roadMaps.scss';
import { grades } from '../../utils/data';
import useDeviceType from '../../utils/eles';
import { Image } from 'antd';

const Switcher = ({ selectedGrade, setSelectedGrade }) => {
  const handleGradeChange = useCallback(
    (newGrade) => {
      if (newGrade.grade !== selectedGrade.grade) {
        setSelectedGrade(newGrade);
      }
    },
    [selectedGrade, setSelectedGrade]
  );

  return (
    <div className="switcher row">
      {grades.map((item, index) => (
        <button
          key={index}
          className={selectedGrade.grade === item.grade ? 'active' : ''}
          onClick={() => handleGradeChange(item)}
        >
          <span>{item.text}</span> {item.grade}
        </button>
      ))}
    </div>
  );
};

const Header = () => {
  const { t } = useTranslation();
  const header = t('courses.header', { returnObjects: true });

  return (
    <div className="header-content">
      <div className="text-img">
        <h3>{header.title}</h3>
        <img src={header.img} alt="Title" />
      </div>
      <h5
        className="text-light"
        dangerouslySetInnerHTML={{ __html: header.subtitle }}
      />
    </div>
  );
};

const ActiveSection = ({ selectedGrade }) => {
  const { grade, age, images, plans } = selectedGrade;
  console.log('🚀 ~ images:', images);
  const isMobile = useDeviceType();
  const imageSrc = isMobile
    ? { main: images.mobile, blur: images.mobileBlurred }
    : { main: images.laptop, blur: images.laptopBlurred };
  console.log('🚀 ~ imageSrc:', imageSrc);

  return (
    <div className="active-sec">
      <div>
        <Image
          width="90%"
          preview={false}
          src={imageSrc.main}
          placeholder={
            <Image preview={false} src={imageSrc.blur} width="90%" />
          }
        />
        {/* <img src={imageSrc.blur} alt={grade} className="img-course" /> */}
      </div>
      <div className="plans">
        <h2>خطط الاسعار</h2>
        <div className="plans-container">
          <div className="pricing-plans">
            {plans.map((plan) => (
              <PlanCard key={plan.info.id} plan={{ ...plan, age, grade }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const RoadMaps = () => {
  const [selectedGrade, setSelectedGrade] = useState(grades[0]);

  return (
    <div id="courses" className="road-maps sec header-sec">
      <Header />
      <Switcher
        selectedGrade={selectedGrade}
        setSelectedGrade={setSelectedGrade}
      />
      <ActiveSection selectedGrade={selectedGrade} />
    </div>
  );
};

export default RoadMaps;
