import { useEffect, useState } from 'react';
import useDeviceType, { convertToDirectLink } from '../../utils/eles';
import './certificates.scss';

const Text = () => {
  return (
    <div className="text-num row">
      <div className="number">
        <h3 className="num">3</h3>
      </div>
      <h3>مستويات تقييم على مدار الدورة</h3>
    </div>
  );
};

const Certificates = () => {
  const isMobile = useDeviceType();

  return (
    <div className="certificates sec header-sec" id="certificates">
      <Text />
      <h4 className="text-light sub-title">
        كل شهادة من سكولة بتوضح مستوى الطالب حسب أدائه وتطوره خلال الدورة
      </h4>
      <div className="img">
        <img
          src={
            isMobile
              ? '/images/certificate.webp'
              : '/images/certificate-lap.webp'
          }
          alt="شهادة سكولة"
        />
      </div>
    </div>
  );
};

export default Certificates;
