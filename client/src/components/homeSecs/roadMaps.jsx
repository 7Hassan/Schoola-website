import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import PlanCard from './plan';
import './roadMaps.scss';
import { grades } from '../../utils/data';
import useDeviceType from '../../utils/eles';
import { Tabs } from 'antd';
import { Spin } from 'antd';


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

const ImageWithBlurLoader = ({ imagesSrc, width = '90%' }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="image-loader-wrapper">
      {!loaded && (
        <>
          <img
            src={imagesSrc.blur}
            alt="blur"
            className="image blur-image"
            style={{ width }}
          />
          <div className="loader-overlay">
            <Spin size="large" />
          </div>
        </>
      )}
      <img
        src={imagesSrc.main}
        alt="main"
        onLoad={() => setLoaded(true)}
        className={`image main-image ${loaded ? 'show' : ''}`}
        style={{ width }}
      />
    </div>
  );
};

const ActiveSection = ({ selectedGrade }) => {
  const { grade, age, images, plans } = selectedGrade;
  const isMobile = useDeviceType();
  const imagesSrc = isMobile
    ? { main: images.mobile, blur: images.mobileBlurred }
    : { main: images.laptop, blur: images.laptopBlurred };

  return (
    <div className="active-sec">
      <ImageWithBlurLoader imagesSrc={imagesSrc} />
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

const TabsEle = ({ grades }) => {
  const [activeKey, setActiveKey] = useState('0');
  const selectedGrade = grades[parseInt(activeKey)];
  const items = grades.map((gd, index) => ({
    label: (
      <div className="label">
        <span> صف </span>
        {gd.grade}
      </div>
    ),
    key: index.toString(),
    children: <ActiveSection selectedGrade={selectedGrade} />,
  }));

  return (
    <>
      <Tabs
        activeKey={activeKey}
        onChange={(key) => setActiveKey(key)}
        items={items}
      />
    </>
  );
};

const RoadMaps = () => {
  return (
    <div id="courses" className="road-maps sec header-sec">
      <Header />
      <TabsEle grades={grades} />
    </div>
  );
};

export default RoadMaps;
