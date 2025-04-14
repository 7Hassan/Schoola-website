import { useTranslation } from 'react-i18next';
import { useState, useCallback, useMemo } from 'react';
import PlanCard from './plan';
import './roadMaps.scss';
import { grades } from '../../utils/eles';

const Switcher = ({ selectedGrade, setSelectedGrade, setIsAnimating }) => {
  const handleGradeChange = useCallback(
    (newGrade) => {
      if (newGrade.grade !== selectedGrade.grade) {
        setIsAnimating(true);
        setTimeout(() => {
          setSelectedGrade(newGrade);
          setIsAnimating(false);
        }, 300);
      }
    },
    [selectedGrade, setSelectedGrade, setIsAnimating] // تحسين: قيد التحديث بناءً على selectedGrade فقط
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

const ActiveSection = ({ isAnimating, selectedGrade, allImages }) => {
  const { grade, age } = selectedGrade;
  const plans = useMemo(() => selectedGrade.plans, [selectedGrade]);

  return (
    <div className={`active-sec ${isAnimating ? 'fade-out' : 'fade-in'}`}>
      {allImages.map((obj) => (
        <div key={obj.grade}>
          <img
            src={obj.mobile}
            alt={obj.grade}
            className={`img-mobile img-course ${
              obj.grade !== selectedGrade.grade && 'hide'
            }`}
            loading="lazy"
          />
          <img
            src={obj.laptop}
            alt={obj.grade}
            className={`img-laptop img-course ${
              obj.grade !== selectedGrade.grade && 'hide'
            }`}
            loading="lazy"
          />
        </div>
      ))}
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
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedGrade, setSelectedGrade] = useState(grades[0]);

  const allImages = useMemo(() => {
    return grades.map((grade) => ({
      grade: grade.grade,
      mobile: grade.images.mobile,
      laptop: grade.images.laptop,
    }));
  }, []);

  return (
    <div id="courses" className="road-maps sec header-sec">
      <Header />
      <Switcher
        selectedGrade={selectedGrade}
        setSelectedGrade={setSelectedGrade}
        setIsAnimating={setIsAnimating}
      />
      <ActiveSection
        isAnimating={isAnimating}
        selectedGrade={selectedGrade}
        allImages={allImages}
      />
    </div>
  );
};

export default RoadMaps;
